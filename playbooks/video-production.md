# SOP — Product marketing video

Owner: `video-producer`; input: approved script from `marketing-copywriter` and concept from `content-strategist`.

1. Convert script into a timed storyboard (scene, screen state, audio, words, visual objective). Avoid >1 central claim per scene.
2. Create a capture checklist for current product UI. Use public product example or controlled demo account, never private private user records. Record actual behavior, generation waiting states truthfully.
3. Capture clean screen footage with authorized tools; redact keys, accounts, browser tabs, files, private content.
4. Edit a master sequence (e.g. 30 s) with title, real demonstration, proof and CTA. Add captions and reasonable pauses; do not show fake interaction.
5. Export platform variants; use `node tools/media.mjs vertical INPUT.mp4 OUTPUT.mp4` or `square` if FFmpeg is installed. This utility only reframes **existing** media; it does not generate footage.
6. Check audio copyright/license, voiceover permission, screen truthfulness, mobile safe areas, contrast, subtitles, timing, platform limit and source attribution.
7. Hand off video path, storyboard, SRT/caption text, thumbnail and rights log to Brand Lead. Mark render blocked if no capture/edit tool is available.
