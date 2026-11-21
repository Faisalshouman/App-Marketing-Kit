import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const roles=JSON.parse(fs.readFileSync(path.join(ROOT,'workforce/roles/manifest.json'),'utf8'));
const ids=new Set(roles.map(r=>r.id));
let problems=[];
if(ids.size!==13||roles.length!==ids.size)problems.push(`Expected 13 unique roles; got ${ids.size} unique IDs in ${roles.length} entries`);
if(!ids.has('media-pipeline-engineer'))problems.push('Missing media-pipeline-engineer registration');
for(const r of roles)if(!fs.existsSync(path.join(ROOT,'workforce/roles',`${r.id}.md`)))problems.push('Missing role '+r.id);
for(const [script,arg] of [['tools/sync-agents.mjs','--check'],['tools/sync-skills.mjs','--check']]){
 const x=spawnSync(process.execPath,[path.join(ROOT,script),arg],{encoding:'utf8'});
 if(x.status!==0)problems.push((x.stderr||x.stdout).trim());
}
const campDir=path.join(ROOT,'data/campaigns'),workDir=path.join(ROOT,'data/work-items');
const campaigns=new Set(fs.readdirSync(campDir).filter(x=>x.endsWith('.json')).map(x=>JSON.parse(fs.readFileSync(path.join(campDir,x),'utf8')).id));
const items=fs.readdirSync(workDir).filter(x=>/^MKT-\d+\.json$/.test(x)).map(x=>JSON.parse(fs.readFileSync(path.join(workDir,x),'utf8')));
const itemIds=new Set(items.map(x=>x.id));
for(const x of items){
 if(!ids.has(x.owner))problems.push(`${x.id}: invalid owner`);
 if(!campaigns.has(x.campaign))problems.push(`${x.id}: missing campaign`);
 for(const d of x.dependsOn||[])if(!itemIds.has(d))problems.push(`${x.id}: unknown dependency ${d}`);
 if(x.status==='published'&&!x.publication)problems.push(`${x.id}: published without evidence`);
 if(['approved','done','published','measured'].includes(x.status)&&!x.approval)problems.push(`${x.id}: state without approval`);
}
for(const f of ['AGENTS.md','CLAUDE.md','brand/brand-guidelines.md','brand/brand-system.json','policy/publication-and-approvals.md','campaigns/first-value-demo/brief.md','tools/marketing.mjs'])if(!fs.existsSync(path.join(ROOT,f)))problems.push('Missing '+f);
if(problems.length){console.error('VALIDATION FAILED\n- '+problems.join('\n- '));process.exitCode=1;}
else console.log(`VALIDATED: ${roles.length} roles, ${items.length} work items, ${campaigns.size} campaigns, 2 adapter sets, native skills. No external integration tested.`);
