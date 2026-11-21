import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
function run(file,args=[]){return spawnSync(process.execPath,[path.join(ROOT,file),...args],{encoding:'utf8'});}
test('canonical 13 roles and adapters remain synchronized',()=>{
 const roles=JSON.parse(fs.readFileSync(path.join(ROOT,'workforce/roles/manifest.json'),'utf8'));
 assert.equal(roles.length,13);
 assert.ok(roles.some(role=>role.id==='media-pipeline-engineer'));
 for(const role of roles){assert.ok(fs.existsSync(path.join(ROOT,`workforce/roles/${role.id}.md`)));}
 assert.equal(run('tools/sync-agents.mjs',['--check']).status,0);
 assert.equal(run('tools/sync-skills.mjs',['--check']).status,0);
});
test('whole starter validates',()=>{const o=run('tools/validate.mjs');assert.equal(o.status,0,o.stderr);});
