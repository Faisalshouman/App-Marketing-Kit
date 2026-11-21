#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const check = process.argv.includes('--check');
const failed = [];
const source = path.join(ROOT, 'skills');

function* skillFiles(directory, prefix = '') {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const relative = path.join(prefix, entry.name);
    if (entry.isDirectory()) yield* skillFiles(path.join(directory, entry.name), relative);
    if (entry.isFile()) yield relative;
  }
}

for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const skill = path.join(source, entry.name);
  if (!fs.existsSync(path.join(skill, 'SKILL.md'))) continue;
  for (const file of skillFiles(skill)) {
    const original = path.join(skill, file);
    for (const base of ['.agents/skills', '.claude/skills']) {
      const relative = path.join(base, entry.name, file);
      const target = path.join(ROOT, relative);
      if (check) {
        if (!fs.existsSync(target) || !fs.readFileSync(target).equals(fs.readFileSync(original))) {
          failed.push(relative);
        }
      } else {
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.copyFileSync(original, target);
      }
    }
  }
}

if (failed.length) {
  console.error('Out-of-sync skills: ' + failed.join(', '));
  process.exitCode = 1;
} else {
  console.log(check ? 'Native skills verified.' : 'Native skills synchronized.');
}
