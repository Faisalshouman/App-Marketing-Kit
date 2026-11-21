#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const entries=JSON.parse(fs.readFileSync(path.join(ROOT,'workforce/roles/manifest.json'),'utf8'));
const check=process.argv.includes('--check');let mismatches=[];
const header=`Read and follow AGENTS.md, workforce/organization.md and policy/ before acting. The canonical job description is workforce/roles/`;
const skillRouting='Before starting, use the role-specific Skill selection section and your row in workforce/skill-map.md to choose skills for the assigned deliverable. Read the selected SKILL.md files from the specified sources and follow project approval rules.';
function writeOrCompare(relative,expected){
 const p=path.join(ROOT,relative);fs.mkdirSync(path.dirname(p),{recursive:true});
 if(check){if(!fs.existsSync(p)||fs.readFileSync(p,'utf8')!==expected)mismatches.push(relative);}
 else fs.writeFileSync(p,expected,'utf8');
}
for(const r of entries){
 if(!/^[a-z][a-z0-9-]*$/.test(r.id))throw Error('Invalid role '+r.id);
 const ins=`You are the ${r.title} for Philocoursa marketing. ${header}${r.id}.md. Read it in full before starting. ${skillRouting} Operate only within its responsibilities and produce evidence-backed local drafts. Never self-approve, publish, send outreach, spend money, access private data or claim unperformed actions. Return the output file path, QA status, blockers and next accountable role.`;
 const effort=["head-of-marketing","product-marketer","growth-ops","brand-lead","content-strategist","website-seo"].includes(r.id)?"high":"medium";
 const model=r.id==='media-pipeline-engineer'?'gpt-6.2-sol':'gpt-6.1-sol';
 const toml=`name = ${JSON.stringify(r.id)}\ndescription = ${JSON.stringify(r.description)}\nmodel = "${model}"\nmodel_reasoning_effort = "${effort}"\ndeveloper_instructions = ${JSON.stringify(ins + " Before writing, identify your owned files. You are not alone: preserve other agents edits and return workboard updates to the parent.")}\n`;
 const claude=`---\nname: ${r.id}\ndescription: ${JSON.stringify(r.description)}\nmodel: inherit\n---\n\n# ${r.title}\n\n${ins}\n\nBefore writing, identify the work item and the file(s) you own; avoid changing other specialist artifacts or shared state directly. Use the parent agent for workboard updates.\n`;
 writeOrCompare(`.codex/agents/${r.id}.toml`,toml);
 writeOrCompare(`.claude/agents/${r.id}.md`,claude);
}
const config=`# Generated project-local marketing agents. No global configuration changes.
[features]
multi_agent = true

[agents]
max_threads = 3
` + entries.map(r=>`
[agents.${JSON.stringify(r.id)}]
description = ${JSON.stringify(r.description)}
config_file = "agents/${r.id}.toml"
`).join('');
writeOrCompare('.codex/config.toml',config);
if(mismatches.length){console.error('Out-of-sync native agent adapters:',mismatches.join(', '));process.exitCode=1;}else console.log(check?'Native agent adapters verified.':'Native agent adapters generated.');
