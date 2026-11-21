#!/usr/bin/env node
/** App Marketing Kit workboard. No network, publishing, payments or sending. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';

const srcRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ROOT = path.resolve(process.env.MARKETING_WORKSPACE_ROOT || srcRoot);
const campaignsDir = path.join(ROOT, 'data', 'campaigns');
const workDir = path.join(ROOT, 'data', 'work-items');
const roleList = JSON.parse(fs.readFileSync(path.join(srcRoot,'workforce','roles','manifest.json'),'utf8'));
const validOwners = new Set(roleList.map(r=>r.id));
const kinds = new Set(['research','idea','copy','design','video','social','seo','website-copy','partnership','outreach','email','analytics','brand-review','operations']);
const publishKinds = new Set(['social','video','email','seo','website-copy','outreach','partnership']);
const statuses = new Set(['backlog','in_progress','in_review','approved','done','published','measured','blocked']);
const complete = new Set(['approved','done','published','measured']);
const stamp = () => new Date().toISOString();

function die(message){ throw new Error(message); }
function ensureDir(dir){fs.mkdirSync(dir,{recursive:true});}
function loadJson(p){return JSON.parse(fs.readFileSync(p,'utf8'));}
function saveJson(p,data){
  ensureDir(path.dirname(p));
  const tmp = `${p}.${randomUUID()}.tmp`;
  try {fs.writeFileSync(tmp,JSON.stringify(data,null,2)+'\n','utf8');fs.renameSync(tmp,p);}
  finally {if(fs.existsSync(tmp)) fs.unlinkSync(tmp);}
}
function flags(argv){
  const opts={};const pos=[];
  for(let i=0;i<argv.length;i++){
    if(argv[i].startsWith('--')){
      const key=argv[i].slice(2);if(!key)die('Invalid option');
      if(i+1>=argv.length || argv[i+1].startsWith('--'))die(`Missing value for --${key}`);
      if(Object.hasOwn(opts,key))die(`Duplicate option --${key}`);
      opts[key]=argv[++i];
    }else pos.push(argv[i]);
  }
  return {opts,pos};
}
function required(opts,key){if(!opts[key])die(`Required: --${key}`);return opts[key].trim();}
function slug(value){if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value))die('Slug must be lowercase words/numbers separated by hyphens');return value;}
function idCheck(value){if(!/^MKT-\d{3,}$/.test(value||''))die('Work item ID must resemble MKT-001');return value;}
function workPath(id){return path.join(workDir,idCheck(id)+'.json');}
function campaignPath(id){return path.join(campaignsDir,slug(id)+'.json');}
function workItems(){ensureDir(workDir);return fs.readdirSync(workDir).filter(x=>/^MKT-\d+\.json$/.test(x)).map(x=>loadJson(path.join(workDir,x))).sort((a,b)=>a.id.localeCompare(b.id,undefined,{numeric:true}));}
function campaigns(){ensureDir(campaignsDir);return fs.readdirSync(campaignsDir).filter(x=>x.endsWith('.json')).map(x=>loadJson(path.join(campaignsDir,x))).sort((a,b)=>a.id.localeCompare(b.id));}
function getWork(id){const p=workPath(id);if(!fs.existsSync(p))die(`Unknown work item ${id}`);return loadJson(p);}
function getCampaign(id){const p=campaignPath(id);if(!fs.existsSync(p))die(`Unknown campaign ${id}`);return loadJson(p);}
function update(item){item.updatedAt=stamp();saveJson(workPath(item.id),item);}
function assertStatus(item,expected){if(!expected.includes(item.status))die(`${item.id} is ${item.status}; expected ${expected.join(' or ')}`);}
function realArtifact(relative){
  if(path.isAbsolute(relative))die('Use a project-relative artifact file path');
  const normalized=relative.replaceAll('\\','/');
  if(!/^(campaigns|research|reports|content|brand)\//.test(normalized))die('Artifact must be inside campaigns/, research/, reports/, content/, or brand/');
  const p=path.resolve(ROOT,normalized);
  if(!p.startsWith(ROOT+path.sep))die('Artifact path escapes workspace');
  if(!fs.existsSync(p)||!fs.statSync(p).isFile())die('Artifact file does not exist: '+normalized);
  const rp=fs.realpathSync(p),rr=fs.realpathSync(ROOT);
  if(!rp.startsWith(rr+path.sep))die('Artifact symlink escapes workspace');
  return path.relative(ROOT,rp).split(path.sep).join('/');
}
function dependenciesReady(item){const all=workItems();return item.dependsOn.every(id=>all.some(w=>w.id===id && complete.has(w.status)));}
function help(){console.log(`
App Marketing Kit workboard — NO network, sending or publication

  status
  campaign:list
  campaign:new --slug SLUG --title TEXT --audience TEXT --goal TEXT
  work:list [--campaign SLUG] [--owner ROLE] [--status STATUS]
  work:show ID
  work:new --campaign SLUG --owner ROLE --kind KIND --title TEXT [--depends MKT-001,MKT-002]
  work:start ID
  work:submit ID --artifact campaigns/path/to/existing-file.md
  work:revise ID --note "Revision requested"
  work:approve ID --by Founder --note "Reviewed artifact"        HUMAN ONLY
  work:complete ID
  work:publish ID --url https://actual-public-url --by Founder  RECORD ONLY: does NOT publish
  work:measure ID --metric activated_users --value 5 --source "analytics export"
  work:block ID --note REASON
  work:resume ID
  report:weekly

Role IDs: ${[...validOwners].join(', ')}
Kinds: ${[...kinds].join(', ')}

See docs/workboard.md, policy/publication-and-approvals.md.
`);}
function run(){
  const [cmd,...argv]=process.argv.slice(2);const {opts,pos}=flags(argv);
  if(!cmd || cmd==='help' || cmd==='--help'){help();return;}
  if(cmd==='status'){
    const items=workItems();const cs=campaigns();const byStatus={};for(const w of items)byStatus[w.status]=(byStatus[w.status]||0)+1;
    const actionable=items.filter(w=>w.status==='backlog'&&dependenciesReady(w)).slice(0,12);
    console.log(`Campaigns: ${cs.length}; Work items: ${items.length}; State summary: ${JSON.stringify(byStatus)}`);
    console.log('Ready to start:');for(const w of actionable)console.log(`  ${w.id} [${w.owner}] ${w.title}`);
    if(!actionable.length)console.log('  (none; check dependencies/blocked work)');
    console.log('ALL EXTERNAL ACTIONS: not connected. Workboard statuses are not publishing receipts.');
    return;
  }
  if(cmd==='campaign:list'){
    const c=campaigns();for(const x of c)console.log(`${x.id} | ${x.status} | ${x.title} | ${x.audience}`);
    if(!c.length)console.log('No campaigns');return;
  }
  if(cmd==='campaign:new'){
    const id=slug(required(opts,'slug'));if(fs.existsSync(campaignPath(id)))die('Campaign already exists: '+id);
    const title=required(opts,'title'),audience=required(opts,'audience'),goal=required(opts,'goal');
    const brief=`campaigns/${id}/brief.md`;
    const template=fs.readFileSync(path.join(srcRoot,'templates','campaign-brief.md'),'utf8').replace('<title>',title).replace('- Campaign ID:','- Campaign ID: '+id).replace('- Audience / specific job-to-be-done:','- Audience / specific job-to-be-done: '+audience).replace('- Success event / metric definition:','- Success event / metric definition: '+goal);
    const file=path.join(ROOT,brief);ensureDir(path.dirname(file));fs.writeFileSync(file,template,'utf8');
    saveJson(campaignPath(id),{id,title,audience,goal,status:'draft',brief,createdAt:stamp()});
    console.log(`Created draft campaign ${id}; edit ${brief}`);return;
  }
  if(cmd==='work:list'){
    let items=workItems();for(const k of ['campaign','owner','status'])if(opts[k])items=items.filter(w=>w[k]===opts[k]);
    for(const x of items)console.log(`${x.id} | ${x.status.padEnd(11)} | ${x.owner.padEnd(24)} | ${x.campaign} | ${x.title}`);
    if(!items.length)console.log('No work items');return;
  }
  if(cmd==='work:show'){console.log(JSON.stringify(getWork(pos[0]),null,2));return;}
  if(cmd==='work:new'){
    const campaign=slug(required(opts,'campaign'));getCampaign(campaign);
    const owner=required(opts,'owner');if(!validOwners.has(owner))die('Unknown owner: '+owner);
    const kind=required(opts,'kind');if(!kinds.has(kind))die('Unknown kind: '+kind);
    const title=required(opts,'title');const dependsOn=opts.depends?opts.depends.split(',').filter(Boolean).map(idCheck):[];
    if(new Set(dependsOn).size!==dependsOn.length)die('Duplicate dependencies');
    for(const d of dependsOn){const prior=getWork(d);if(prior.campaign!==campaign)die('Dependencies must belong to the same campaign');}
    const all=workItems(),max=all.reduce((n,w)=>Math.max(n,Number(w.id.slice(4))),0),id='MKT-'+String(max+1).padStart(3,'0');
    const now=stamp();saveJson(workPath(id),{id,campaign,owner,kind,title,status:'backlog',dependsOn,artifacts:[],approval:null,publication:null,metrics:[],notes:[],createdAt:now,updatedAt:now});
    console.log(`Created ${id} (${owner}), dependency count ${dependsOn.length}`);return;
  }
  if(cmd==='report:weekly'){
    const items=workItems(),cs=campaigns();const actual=items.filter(w=>w.metrics?.length);
    console.log('LOCAL WORKBOARD REPORT — NOT PRODUCT ANALYTICS');
    console.log(`Campaigns: ${cs.length}; queued: ${items.filter(w=>w.status==='backlog').length}; producing: ${items.filter(w=>w.status==='in_progress').length}; in review: ${items.filter(w=>w.status==='in_review').length}; approved: ${items.filter(w=>w.status==='approved').length}; internal done: ${items.filter(w=>w.status==='done').length}; recorded published: ${items.filter(w=>['published','measured'].includes(w.status)).length}`);
    console.log(`Items with entered actual metrics: ${actual.length}. Missing live analytics is NOT zero. Do not infer signups or revenue.`);return;
  }
  if(!cmd.startsWith('work:'))die('Unknown command '+cmd+'; run help');
  const item=getWork(pos[0]);
  switch(cmd){
    case 'work:start':
      assertStatus(item,['backlog']);if(!dependenciesReady(item))die('Unapproved/unfinished dependencies block start');item.status='in_progress';break;
    case 'work:submit':
      assertStatus(item,['in_progress']);item.artifacts.push(realArtifact(required(opts,'artifact')));item.artifacts=[...new Set(item.artifacts)];item.status='in_review';break;
    case 'work:revise':
      assertStatus(item,['in_review']);item.notes.push({at:stamp(),action:'revision',note:required(opts,'note')});item.status='in_progress';break;
    case 'work:approve':
      assertStatus(item,['in_review']);if(required(opts,'by')!=='Founder')die('Only the founder may enter a human approval record; CLI is not authentication');
      if(required(opts,'note').length<8)die('Approval requires a meaningful review note');
      if(!item.artifacts?.length)die('No submitted artifacts to review');
      item.approval={by:'Founder',at:stamp(),note:opts.note,artifacts:[...item.artifacts],manualBookkeepingOnly:true};item.status='approved';
      console.log('WARNING: Local approval is human-entered bookkeeping, not authenticated authorization. Agents must not invoke approval.');break;
    case 'work:complete':
      assertStatus(item,['approved']);item.status='done';break;
    case 'work:publish':{
      assertStatus(item,['approved']);if(!publishKinds.has(item.kind))die(`Kind ${item.kind} is not a publishing work item`);
      if(required(opts,'by')!=='Founder')die('Founder publication evidence required');
      let url;try{url=new URL(required(opts,'url'));}catch{die('Invalid URL');}
      if(url.protocol!=='https:')die('Publication evidence must use https URL');
      item.publication={url:url.href,recordedBy:'Founder',recordedAt:stamp(),verifiedExternallyByHuman:true,automaticPublish:false};item.status='published';
      console.log('Recorded an asserted human-verified URL. NO external post or provider verification performed.');break;}
    case 'work:measure':{
      assertStatus(item,['published','measured']);const metric=required(opts,'metric');if(!/^[a-z][a-z0-9_]*$/.test(metric))die('Invalid metric key');
      const n=Number(required(opts,'value'));if(!Number.isFinite(n)||n<0)die('Metric value must be nonnegative numeric');
      item.metrics.push({key:metric,value:n,source:required(opts,'source'),recordedAt:stamp()});item.status='measured';break;}
    case 'work:block':
      assertStatus(item,['backlog','in_progress','in_review']);item.notes.push({at:stamp(),action:'blocked',note:required(opts,'note')});item.status='blocked';break;
    case 'work:resume':
      assertStatus(item,['blocked']);if(!dependenciesReady(item))die('Dependencies still incomplete');item.status='in_progress';break;
    default:die('Unknown command '+cmd);
  }
  update(item);console.log(`${item.id} → ${item.status}`);
}
try{run();}catch(err){console.error('Error:',err.message);process.exitCode=1;}
