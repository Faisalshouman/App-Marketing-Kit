---
name: media-pipeline-automation
description: Plan, build and verify reusable media-processing integrations and bounded jobs for authorized recordings supplied by a human operator.
---

# Media pipeline automation

Use this skill as Media Pipeline Engineer with an approved technical task and `playbooks/creator-clipping.md`.

1. Confirm the human-supplied file or approved folder, rights reference, output spec, resource limits and retention expectations. For planned OBS intake, observe only completed files triggered by the human's Save Replay action. Reject partial or unsupported inputs.
2. Verify executable versions and the editor's actual CLI, MCP or API before relying on it. Use FFmpeg and ffprobe for deterministic transforms and output inspection. Route local transcription through verified faster-whisper and use WhisperX alignment or diarization only when the task and available resources warrant it.
3. Design retries and recovery so that reruns preserve the source and reuse completed output where valid. Cap concurrency, runtime and temporary storage. Clean only job-owned scratch files under the agreed retention policy. Keep durable evidence for input/output fingerprints, preset versions, state and error causes.
4. Verify actual streams, dimensions, duration, audio, subtitles and other requested properties. Rehearse one short operator-supplied OBS clip and one short permitted podcast recording when available. Log timing, peak temporary storage and failure/retry results. Video Producer decides whether the creative output is acceptable.
5. Treat upload integration as a separate technical task. Use a local dry run by default. For an explicitly authorized adapter rehearsal, verify the target channel, visibility and exact approved file. Leave real invocation and receipt ownership with Social. Keep tokens and private media or agreements outside Git.

Return tool versions, test evidence, output paths, known limits and next accountable owner. Mark an unconfigured service or unavailable recording explicitly.
