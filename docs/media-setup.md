# Reproduce the Windows media setup

Start here after cloning the kit. The [media requirements manifest](../media-requirements.json) records source repositories, exact skill revisions, release checksums, install locations, lockfiles and verification results. The [role-to-skill map](../workforce/skill-map.md) routes work to the installed copies. Thirteen project skills and the 13 Codex and Claude role adapters are part of the kit.

## 1. Restore the workforce and skill packs

Use Git, Node.js 20+, Python and uv. The full media setup was tested with Node.js 24 on Windows x64. From the extracted kit directory, run:

```powershell
npm run sync
npm run validate
npm test
py -3 tools/install-media-skills.py
py -3 tools/install-media-skills.py --apply
```

The last command installs the 262 skill files listed in the manifest when their packs are absent. It keeps existing copies in place. Run with `--pack <id> --apply` to install a single pack. Reopen your agent from this directory to load the current catalog. The adapters point to the map and can read the source-qualified skill files by path.

The map names optional standalone skills that may already be in a recipient's user catalog. For a new installation, use the pinned Marketing `analytics` and Social `analytics-and-reporting` for scorecards, Marketing `seo-audit`, `ai-seo`, `schema` and `site-architecture` for website proposals, and Project `video-demo` or `creator-clip-edit` for editing guidance. The standalone Codex system skills load with Codex.

Set up the installed Video Use checkout's Python dependencies if you choose that editor:

```powershell
Push-Location (Join-Path $env:USERPROFILE '.codex/skills/video-use')
try { uv sync --frozen } finally { Pop-Location }
```

The local render command is `.venv\Scripts\python.exe -X utf8 helpers\render.py`. It takes a local edit decision list and output path. The `-X utf8` flag lets Windows print the renderer's status output. ElevenLabs transcription and Manim rendering have their own prerequisites. Prefer the local speech environment below for authorized audio.

## 2. Install OBS and FFmpeg

Download the OBS Studio and FFmpeg Windows archives from the manifest. Compare each download's SHA-256 with `Get-FileHash` before extracting. Put the OBS release in `%LOCALAPPDATA%\Philocoursa\MediaTools\obs-33.0.1` and the FFmpeg release under the same MediaTools folder with its top-level `ffmpeg-9.0.2-essentials_build` directory.

In the shell used for this media work:

```powershell
$mediaRoot = Join-Path $env:LOCALAPPDATA 'Philocoursa/MediaTools'
$ffmpegBin = Join-Path $mediaRoot 'ffmpeg-9.0.2-essentials_build/bin'
$env:Path = "$ffmpegBin;$env:Path"
$env:MAKEMYCLIP_FFMPEG_PATH = Join-Path $ffmpegBin 'ffmpeg.exe'
ffmpeg -version
ffprobe -version
```

Launch `obs64.exe --portable` from the release's `bin\64bit` directory. The human operator configures Replay Buffer and saves the selected moment. OBS WebSocket is bundled for authorized future use. See the [clipping playbook](../playbooks/creator-clipping.md) for intake and publishing gates.

## 3. Install the speech environment

```powershell
$mediaRoot = Join-Path $env:LOCALAPPDATA 'Philocoursa/MediaTools'
$speech = Join-Path $mediaRoot 'speech-py313'
uv venv --python 3.13.9 $speech
$speechPython = Join-Path $speech 'Scripts/python.exe'
uv pip install --python $speechPython -r setup/requirements-speech-windows.txt
uv pip check --python $speechPython
$env:NLTK_DATA = Join-Path $mediaRoot 'models/nltk'
& $speechPython -m nltk.downloader -d $env:NLTK_DATA punkt_tab
```

Use faster-whisper for transcription or a single WhisperX run for transcription plus word alignment. The synthetic test used the English tiny model and an English alignment checkpoint. Choose a multilingual model for multilingual clips and review names and timing from the source. The first use of a selected speech model downloads its weights. WhisperX's in-memory ASR and alignment route passed with the pinned FFmpeg; the shared-library TorchCodec path was unverified. Speaker diarization requires separately authorized model access and a speaker verification pass. Add whisper.cpp or Auto-Editor when the chosen workflow needs them.

## 4. Install the editors

For shot compositing, extract the Natron Windows x64 archive pinned in the [media requirements manifest](../media-requirements.json) into `~/dev-tools/media-editors/natron-2.5.0`. Open `bin/Natron.exe` for node-based editing. Run `bin/NatronRenderer.exe --version` to check the renderer and use it with a local Natron project that has a configured Write node.

Restore the verified npm runtimes from the lockfiles. Put each one in a new user-local folder, or keep your existing verified runtime.

```powershell
$editorsRoot = Join-Path $env:USERPROFILE 'dev-tools/media-editors'
foreach ($editor in 'makemyclip','remotion','hyperframes') {
  $target = Join-Path $editorsRoot $editor
  if (Test-Path -LiteralPath $target) { continue }
  New-Item -ItemType Directory -Path $target -Force | Out-Null
  Copy-Item "setup/npm/$editor/package.json","setup/npm/$editor/package-lock.json" -Destination $target
  npm ci --prefix $target
  if ($LASTEXITCODE -ne 0) { throw "Install failed for $editor" }
}
& (Join-Path $editorsRoot 'makemyclip/node_modules/.bin/clip.cmd') doctor
& (Join-Path $editorsRoot 'remotion/node_modules/.bin/remotion.cmd') versions
& (Join-Path $editorsRoot 'hyperframes/node_modules/.bin/hyperframes.cmd') doctor
```

The MakeMyClip CLI and stdio MCP use the installed editor package. Configure an MCP connection separately if the intended host needs it and the owner approves. Remotion and HyperFrames may fetch a compatible browser on first use. The nine upstream HyperFrames skills are pinned to the same release as the CLI. The kit also includes Project `design-short-form-videos` and its storyboard, production handoff and review references. The manifest lists the separate Windows desktop installers for WeftCut, Concat and Diffusion Studio, with their hashes and intended user install locations.

For the static graphics toolchain, the manifest includes ImageMagick, resvg, sharp, Inkscape, GIMP and PhotoGIMP. Use the linked upstream releases and path or npm pin for each. Provider logins, private media, proprietary models and local application state are supplied on each recipient's machine.

## 5. Verify with the intended footage

Use ClipsAI's separate Python environment for transcript-based podcast and interview candidate discovery.

```powershell
$clipsRoot = Join-Path $env:LOCALAPPDATA 'Philocoursa/MediaTools/ClipsAI'
uv venv --python 3.11.5 (Join-Path $clipsRoot 'venv')
$clipsPython = Join-Path $clipsRoot 'venv/Scripts/python.exe'
uv pip install --python $clipsPython --index https://download.pytorch.org/whl/cpu -r setup/requirements-clipsai-windows.txt
uv pip check --python $clipsPython
& $clipsPython -c 'from clipsai import ClipFinder; print(ClipFinder.__name__)'
```

Use the approved transcript or supplied footage. Active-speaker reframing requires authorized access to the gated pyannote model. Keep ClipsAI's compatibility environment separate from the current WhisperX install.

For visual transition timestamps, install PySceneDetect in its own environment. Run the commands from the kit root.

```powershell
$sceneEnv = Join-Path $env:LOCALAPPDATA 'Philocoursa/MediaTools/scenedetect-py313'
uv venv --python 3.13.9 $sceneEnv
$scenePython = Join-Path $sceneEnv 'Scripts/python.exe'
uv pip install --python $scenePython -r setup/requirements-scenedetect-windows.txt
& $scenePython -m scenedetect -i 'C:/path/to/approved-video.mp4' detect-content list-scenes -o 'C:/path/to/review'
```

The command writes a scene-list CSV to the review directory. Scene transitions help locate cuts during review. The operator still selects the gameplay moment.

Run the local checks on a synthetic or otherwise permitted fixture before using creator media. For acceptance of the creator process, have the operator supply one short OBS replay and one short podcast sample with permission evidence. Record the FFprobe results, transcript review, selected framing and the artifact handed to Social. Provider publication is a separate approval step.
