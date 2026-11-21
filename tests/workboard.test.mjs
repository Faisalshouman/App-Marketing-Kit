import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const cli=path.join(ROOT,'tools/marketing.mjs');
function fixture(){
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'app-mkt-'));
 fs.mkdirSync(path.join(dir,'data','work-items'),{recursive:true});fs.mkdirSync(path.join(dir,'data','campaigns'),{recursive:true});
 return dir;
}
function run(dir,...args){return spawnSync(process.execPath,[cli,...args],{encoding:'utf8',env:{...process.env,MARKETING_WORKSPACE_ROOT:dir}});}
function expectOk(p){assert.equal(p.status,0,p.stderr);}

test('campaign, dependencies, artifact review, manual approval and published evidence flow',()=>{
 const dir=fixture();try{
  expectOk(run(dir,'campaign:new','--slug','workflow-demo','--title','Workflow demo','--audience','independent professionals','--goal','activation'));
  expectOk(run(dir,'work:new','--campaign','workflow-demo','--owner','product-marketer','--kind','research','--title','Source check'));
  expectOk(run(dir,'work:new','--campaign','workflow-demo','--owner','social-community-manager','--kind','social','--title','Publish approved post','--depends','MKT-001'));
  assert.notEqual(run(dir,'work:start','MKT-002').status,0,'Cannot start before dependency approved');
  expectOk(run(dir,'work:start','MKT-001'));
  assert.notEqual(run(dir,'work:submit','MKT-001','--artifact','../../etc/passwd').status,0,'No path traversal');
  expectOk(run(dir,'work:submit','MKT-001','--artifact','campaigns/workflow-demo/brief.md'));
  assert.notEqual(run(dir,'work:complete','MKT-001').status,0,'Cannot complete before approval');
  assert.notEqual(run(dir,'work:approve','MKT-001','--by','Agent','--note','Reviewed this artifact').status,0);
  expectOk(run(dir,'work:approve','MKT-001','--by','Founder','--note','Reviewed actual artifact for demo'));
  expectOk(run(dir,'work:complete','MKT-001'));
  expectOk(run(dir,'work:start','MKT-002'));
  expectOk(run(dir,'work:submit','MKT-002','--artifact','campaigns/workflow-demo/brief.md'));
  assert.notEqual(run(dir,'work:publish','MKT-002','--url','https://example.org/post','--by','Founder').status,0,'Cannot publish before approval');
  expectOk(run(dir,'work:approve','MKT-002','--by','Founder','--note','Reviewed exact external package'));
  expectOk(run(dir,'work:publish','MKT-002','--url','https://example.org/post','--by','Founder'));
  expectOk(run(dir,'work:measure','MKT-002','--metric','qualified_clicks','--value','7','--source','Manually verified aggregate export'));
  const item=JSON.parse(fs.readFileSync(path.join(dir,'data/work-items/MKT-002.json'),'utf8'));
  assert.equal(item.status,'measured');assert.equal(item.publication.automaticPublish,false);
  assert.equal(item.metrics[0].value,7);
 }finally{fs.rmSync(dir,{recursive:true,force:true});}
});

test('workboard help and empty status are usable without network',()=>{
 const dir=fixture();try{expectOk(run(dir,'help'));const s=run(dir,'status');expectOk(s);assert.match(s.stdout,/Campaigns: 0/);}finally{fs.rmSync(dir,{recursive:true,force:true});}
});
