#!/usr/bin/env node
/** Optional local FFmpeg conversion helper: does not capture, generate or upload media. */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
const args=process.argv.slice(2),mode=args[0];
function usage(){console.log('Usage: node tools/media.mjs <vertical|square|landscape|thumbnail> INPUT_FILE OUTPUT_FILE\nRequires FFmpeg installed on PATH. Creates an output only from existing media; no publishing.');}
if(!['vertical','square','landscape','thumbnail'].includes(mode)||args.length!==3){usage();process.exit(args.length===0?0:1);}
const input=path.resolve(args[1]),output=path.resolve(args[2]);
if(!fs.existsSync(input)||!fs.statSync(input).isFile()){console.error('Input footage not found');process.exit(1);}
if(input===output){console.error('Input and output must be different files');process.exit(1);}
fs.mkdirSync(path.dirname(output),{recursive:true});
const sizes={vertical:[1080,1920],square:[1080,1080],landscape:[1920,1080]};
let fargs;
if(mode==='thumbnail'){
 fargs=['-hide_banner','-y','-ss','00:00:01','-i',input,'-frames:v','1',output];
}else{
 const [w,h]=sizes[mode];
 const vf=`scale=${w}:${h}:force_original_aspect_ratio=decrease,pad=${w}:${h}:(ow-iw)/2:(oh-ih)/2,setsar=1`;
 fargs=['-hide_banner','-y','-i',input,'-vf',vf,'-c:v','libx264','-preset','medium','-crf','20','-pix_fmt','yuv420p','-c:a','aac','-b:a','160k','-movflags','+faststart',output];
}
const proc=spawnSync('ffmpeg',fargs,{stdio:'inherit'});
if(proc.error){console.error('FFmpeg unavailable. Install it and put ffmpeg on PATH.');process.exit(1);}
if(proc.status!==0){console.error('FFmpeg conversion failed.');process.exit(proc.status||1);}
console.log(`Local media created: ${output}. Review visually; NOT uploaded/published.`);
