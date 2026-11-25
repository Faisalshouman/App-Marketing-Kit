# Linux and cross-device setup

```sh
git clone https://github.com/Faisalshouman/App-Marketing-Kit.git
cd App-Marketing-Kit
npm run validate
npm test
npm run status
```

Use Git and Node.js 20 or later for the local kit. The repository includes canonical roles, Codex and Claude adapters, skill references, the thumbnail rubric and spreadsheet, creator playbooks, and the source and version manifest. Start Codex or Claude Code from the clone root. Use `git pull --ff-only` to update a clean branch and `npm run sync` after editing canonical roles or skills.

## Optional media setup

- Install Linux-native FFmpeg and FFprobe on PATH. Check `ffmpeg -version` and `ffprobe -version` before using the media CLI. Install a Linux OBS build for manual Replay Buffer capture and set the capture source and output directory on the new device.
- Use Python 3 and Git to inspect and restore pinned upstream skills. Run `python3 tools/install-media-skills.py` to see the plan, then add `--apply` to install the selected packs. Existing packs are checked and kept.
- Use the repository and version fields in [media-requirements.json](../media-requirements.json) for upstream application and library selection. The [Windows media setup](media-setup.md) records Windows verification and paths. On Linux, choose compatible releases for your distribution and architecture. Use Linux-specific Python environments for speech tools and reinstall JavaScript dependencies from the pinned lockfiles with `npm ci`. Check the exact editor or renderer and its browser, GPU or model requirements with a local sample.
- Transfer authorized recordings, reusable project assets and private workboard records through your private storage. Reconnect authorized integrations on the new device and load credentials from your secret store. Keep independent channel and app marketing accounts separate.

## Find the workflow

Start at the [role map](../workforce/skill-map.md). Use [creator clipping](../playbooks/creator-clipping.md) for selected gameplay or podcast media, [video production](../playbooks/video-production.md) for product demos, [thumbnail quality](../skills/thumbnail-quality/SKILL.md) for covers, [TikTok research](../skills/tiktok-content-research/SKILL.md) for content gaps, and [replay construction and review](../skills/design-short-form-videos/SKILL.md) for hooks, loops and delivery QA. The [approval workflow](../policy/publication-and-approvals.md) applies to the exact deliverable and target channel.
