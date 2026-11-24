# Production handoff

Describe the exact first frame separately from what happens during the opening beat. Make working timecodes relative to the finished cut. Mark source timecodes separately. Keep unknown source positions as null or use a distinct search cue. For any quote or time-sensitive claim, carry over the verified source and the premise's limits.

For a hook-and-loop handoff, record the viewer's opening question or expectation, the beat that resolves it, and the ending treatment. For a replay join, record the second-view benefit and the final-to-first picture, sound and caption states with timeline positions. For a spoken bridge, include the exact START, END and END + START lines. For a clean ending, record the final hold, spoken line or CTA. Name the current script, storyboard or media version and keep pending review checks with the handoff. Use [Replay construction](replay-construction.md) for boundary choices and [Review](review.md) for evidence on the actual export.

## Pick the picture treatment

- **Source-first clip.** Keep the visible action, speaker, or relevant screen region in frame. Protect setup lines and reaction shots that supply essential meaning. Prefer an accurate cut from existing footage when it already contains the payoff.
- **Original demonstration.** Keep the test conditions clear, use the same crop for meaningful comparisons, and describe which part is an illustration inspired by the evidence.
- **Motion infographic.** Pick one focal object for each beat. Use a mask or wipe to reveal evidence, an arrow to show direction, a line to trace a path, or a matched image to show a change. Keep related labels close to the objects they explain. Use color with labels or shapes when it carries meaning. Keep moving text out of the way of evidence and platform controls. Label simulated or reconstructed visuals when the distinction matters.
- **Mixed cut.** Use one picture to deliver the result and the next picture to explain it. For example, play the real catch first and explain the contact point on replay with two labeled arms.

## JSON handoff

Use this shape as a starting point and keep the delivered JSON valid. Include source timecodes and their verification status for direct excerpts. A planned original asset does not need a source timecode. If assets are available, reference exact files from the beats. Keep a machine-readable list of blockers for a render or publication when needed.

```json
{
  "title": "Try to Unsee This",
  "format": {"width": 1080, "height": 1920, "duration_s": 13},
  "opening": {
    "first_frame": "Uncaptioned two-tone image at full height using a fixed crop",
    "first_line": "What do you see?"
  },
  "payoff": "The clear photo makes the dog recognizable in the same two-tone image",
  "beats": [
    {"start_s": 0, "end_s": 2, "asset_id": "patches", "visual": "Hold the fixed crop", "voice": "What do you see?", "text": "What do you see?"},
    {"start_s": 2, "end_s": 4, "asset_id": "photo", "visual": "Cut to the clear photo at the same crop", "voice": "It’s a dog.", "text": "It’s a dog."},
    {"start_s": 4, "end_s": 10, "asset_id": "patches", "visual": "Return to the identical image and hold", "voice": "Now try to unsee it.", "text": "Now try to unsee it."},
    {"start_s": 10, "end_s": 13, "asset_id": "patches", "visual": "Hold the image and clear the caption before the boundary", "voice": "Same picture.", "text": "Same picture."}
  ],
  "join": {
    "type": "visual",
    "end": "Hold the bare two-tone image",
    "start": "Open on the same bare image and crop",
    "second_view_value": "Viewers can find the dog immediately on replay"
  },
  "assets": [
    {"id": "photo", "status": "planned", "use": "Use a dog photo you own or may adapt"},
    {"id": "patches", "status": "planned", "use": "Create one variant from the photo and reuse the same file in beats one, three and four"}
  ],
  "sources": [
    {"url": "https://www.nature.com/articles/s41593-026-02496-6", "role": "Research inspiration for degraded-image recognition"}
  ],
  "review": ["Check that the caption clears on both sides of the join", "Preview the puzzle with first-time viewers"]
}
```

For clip-based work, record each original excerpt as its own range even when the cut combines several ranges. For unresolved assets, name a usable fallback and leave approval or rights status explicit. Use the source's own scale, labels, and qualifiers when adapting a chart or study figure.
