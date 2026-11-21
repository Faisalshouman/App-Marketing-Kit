---
name: video-demo
description: Plan, capture, edit and review a truthful software demo video using authorized real Philocoursa screens and available tools; use for short-form videos or walkthroughs.
---

# Product demo video skill

1. Read `playbooks/video-production.md`, `brand/brand-guidelines.md`, `policy/claims-and-consent.md` and approved script.
2. Prepare shot-by-shot storyboard with duration, on-screen action, subtitles, voiceover and rights notes.
3. Inspect access to authorized real app capture and editor. If absent, produce a concrete capture/edit plan and mark render blocked, not "video delivered".
4. Record only synthetic/demo content. Never show customer syllabuses, student data, tokens, billing UI with secrets or imagined app screens.
5. If actual footage exists and FFmpeg is installed, use `node tools/media.mjs vertical INPUT OUTPUT` or another approved editor. These utilities cannot generate/capture footage themselves.
6. Inspect the actual final video with caption timing, safe areas, aspect ratio, audio rights, product accuracy and CTA.
7. Return video path, footage manifest, final thumbnail/captions where produced, QA status and remaining approvals. No auto-upload.
