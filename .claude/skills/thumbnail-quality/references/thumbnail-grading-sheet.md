# Thumbnail grading sheet

**Version 1.0 · Agent and human review**

Run the [thumbnail decision protocol](thumbnail-decision-protocol.md) first. This sheet checks whether a specific export executes that brief. **A passing score means the candidate is ready for the stated review or release workflow. Audience response is measured separately.** All point weights, preview sizes, and passing thresholds below are editorial defaults. Keep them fixed across candidates in the same trial and recalibrate against channel data over time.

## 1. Set the review target

| Asset type | Grade it with | Evidence to inspect |
|---|---|---|
| PHOTO_THUMBNAIL | Gates G1–G5 and rows R1–R8 | Actual exported still, video evidence, title, and listing previews |
| SELECTABLE_COVER | Gates G1–G5 and rows R1–R8 | Exact video frame for frame selection or cover export for supported image uploads, selection or upload path, crop, overlays, and listing previews |
| FEED_OPENING | Gates G1, G2, G4 and opening check F1–F3 | Actual first seconds, first-frame crop, sound-off and sound-on playback, and source evidence |

Grade per target surface. For multiple primary surfaces, grade each separately. Record a distinct review for any intentionally different crop, title, or selected frame. The cover grade and opening result each have their own disposition. When both assets are planned for one upload, both must be ready before release under this workflow.

### Candidate record

| Field | What to enter |
|---|---|
| Identity | Video ID or working slug, candidate ID, asset type, revision, export path and hash |
| Context | Platform, primary surface, secondary surfaces, content route, strategy, intended viewer, viewer intent, language |
| Promise | Exact title or caption shown on the surface, one complete sentence describing what the viewer should expect, one intended payoff, optional outcome question, intended spoiler boundary |
| Source | Final cut or source ID, timecodes for each material claim and visual, reason for any crop/composite/illustration, plus the exact selected frame timecode when using frame selection |
| Presentation | Actual dimensions, phone preview or emulator capture, display-size proxy if needed, crop masks, UI masks, overlay text, visual labels |
| Review plan | Target focal cue, core subject, required relationship or state change, accepted paraphrases and synonyms, look-alike or prohibited interpretations, candidate test variable, frozen variables |
| Provenance | Reviewer identity and type, renderer and rubric version, metadata and preview source, observed frame references, explicit evidence gaps |

Freeze the brief, accepted answers, target sizes, and any nearby comparison tiles before grading. Keep the title and edit constant in an image-only comparison. Where the strategy changes the title too, record the comparison as a package test. Save the baseline export when available.

## 2. Check the hard gates

Give each applicable gate **PASS**, **FAIL**, or **UNKNOWN**. Use **N/A** only where the asset table above excludes that gate. Add at least one observation or evidence reference per gate. Any known failure requires correction. Any remaining unknown requires evidence or a human decision where specified.

| Gate | Pass when | Fail or hold when |
|---|---|---|
| **G1 · Evidence and accuracy** | Every material claim, recognizable person or entity, and implied reaction/action can be traced to the final cut or supplied verified source. Before/after, quotes, screenshots, and visuals retain their relevant context. Illustrations, hypotheses, simulations, and mockups are distinguishable when the distinction changes what a viewer would believe. | Source or identity evidence is missing, composites imply a false causal connection, an image depicts a result the video cannot support, or attribution is materially misleading. A human editor reviews unresolved identity, sensitive factual claims, or ambiguous edited context. |
| **G2 · Promise delivery** | A cited timecode shows the event, demonstration, explanation, or accurate attributed statement that fulfills the main promise. Titles, captions and clips preserve material qualifications. | The expected event, explanation or result is absent, the clip suggests a separate event, or the cut changes the meaning of a quote. |
| **G3 · Target deliverability** | The final asset follows the platform/account workflow and target format. For frame selection, the recorded timecode exists in the final render. For custom cover upload, inspect the exact exported image. Confirm account-specific options in the account UI when conditional. Check orientation, file format, size, and crop where applicable. | Export fails its target specs, requires an unavailable upload option, or assumes a supported surface without evidence. Preview and export checks can run automatically. Account capability checks can require a human. |
| **G4 · Required cues fully visible** | Core visual cues and mandatory text or labels survive the primary crop and fixed UI overlays. The actual playback or listing preview retains the relationship implied by the package. Any required subtitle or disclosure is legible. | A primary crop removes a core clue, truncates required text, hides a disclosure, or changes what the viewer would believe. Capture actual UI if a proxy cannot resolve the issue. |
| **G5 · Inspection complete** | The exact final candidate was rendered in the primary surface layout or a documented proxy layout. Reviewers inspected the asset with the final visible title or caption and without it where the surface can hide it. The review record contains all required screenshots and the asset identity matches the submitted export. | Reviewer only saw a prompt, design mockup, stale revision, undocumented crop, or metadata description. A text-only agent can do asset checks but must route image judgment to a visual reviewer. |

**Decision precedence.** Known gate failure → **REVISE**. If no gate fails and an applicable gate is UNKNOWN or missing, return **REVIEW** with a null score. Grade the rows only once all applicable gates pass. After that, score each row with enough evidence and follow the row-level decision table. Escalate if a known problem can only be resolved by changing the source edit or brief.

## 3. Reproduce the viewing conditions

1. Capture the actual target phone layout when reasonably available. Use the published or account preview crop and UI where possible. Use a local screenshot of a plausible device layout for preflight when the real preview is unavailable. Label it **proxy** and record the assumed crop, overlays, and display size. Default static inspection proxies are 160 and 120 CSS pixels wide at the intended visible aspect ratio for ordinary listing tiles. Prefer measured surface dimensions whenever available. The 120-pixel view is a stress test unless it represents a real primary placement.
2. Omit the title in any primary placement where it can be hidden or truncated before the key words. Reproduce the title as shown, including truncation, in all other checks. Test the core visual cue and the complete visible package independently.
3. Use a reviewer who sees the preview without seeing the prompt, expected answer, or video synopsis first. Before revealing the answer key, collect **what do you see**, **what would you expect**, and **what do you want to learn or see next, if anything**. Include the exact answer verbatim. A separate visual model run with the brief withheld is a proxy reviewer. Publishing evidence and viewer metrics remain separate.
4. Use the **primary** preview for core rows. Run the primary-size and stress-size render plus the nearest known crop or UI variant for resilience. Inspect downsampled bounds and occlusion programmatically when masks and labels are available. Record renderer or model version and preview viewport to repeat the check.
5. For adjacent-tile checks, use five relevant neighboring tiles when available. Preserve tile sizes and randomly reposition the candidate. Use actual adjacent tiles or a recorded static sample. If neither exists, use the most similar current channel covers or three draft covers from the same batch and label that comparison. If meaningful neighbors are unavailable, record R7 as 1 with reason **comparison_unavailable**. That provision gives no evidence of competitive distinction.

## 4. Score the cover

Use integer ratings **0, 1, or 2**. Choose the lowest anchor met where the result is mixed. Only score a row when the evidence required for that row is present, except the explicit R7 fallback. Record an evidence pointer and observed failure mode next to every rating. An unresolved reviewer disagreement on a core row requires a second blind judgment. Score the lower verified anchor if disagreement remains.

| ID | Weight | 2 · Meets criteria | 1 · Partial | 0 · Fails | Record |
|---|---:|---|---|---|---|
| **R1 · Subject recognition** ★ | 20 | Reviewer identifies the required subject and the predeclared relation, action, or state from the tile’s visible cues such as the image, diagram, or legible overlay. The title can supply proper names or other predeclared nonvisual labels. | Reviewer identifies the subject but misses or misreads the action, object, or state. | Reviewer identifies the wrong subject or cannot identify the central visual cue. | Exact answer, primary preview, accepted terms, bounding boxes |
| **R2 · Visual priority** | 15 | The predeclared focal cue is the first identifiable element named or indicated in an unprompted check. Any secondary cue needed for the premise is also found with a targeted question. | Core cue is found only after a prompt or a decorative cue is named first. | Core cue still cannot be located when prompted, or another cue gives a materially conflicting premise. | First named element, cue placement, distracting elements |
| **R3 · Package coherence** ★ | 15 | The reviewer’s expectation from the rendered package matches the required subject, event or benefit, and scope in the brief. The visual adds concrete evidence, context, or recognition. The title adds a label, action, outcome, or other missing context where one is needed. | Viewer gets the broad topic, but one required element is vague, or the title and visual repeat the topic without supplying the intended evidence or context. | Viewer expects a different video, event, or outcome. | Reviewer's expected event, matching elements, actual title crop |
| **R4 · Reason to choose** ★ | 15 | Reviewer can state the specific reason to watch in their own words. For a reveal, the answer identifies the intended open question and respects the spoiler boundary. For a tutorial, consequential news item, or lesson, the answer identifies the intended task, consequence, or learning outcome. | Reviewer can name the topic or a generic benefit but the intended question, consequence or task is unclear, or the teaser leaks more than planned while a specific reason to watch remains. | Reviewer identifies no concrete benefit or question, pursues a materially different question, or the only promised payoff is already exhausted by the preview. | Verbatim response, intended selection reason, spoiler rule |
| **R5 · Text economy and legibility** | 10 | All intentional words needed for comprehension can be read exactly at primary size and each adds a useful label, data point, contrast, or context. A text-free candidate qualifies if R1, R3 and R4 can all be met. | Required text can be read but one phrase duplicates meaning or a removable label is unreadable. A text-free candidate has an otherwise intelligible premise but lacks a supporting label that improves precision. | Essential text is unreadable, clipped or creates a material ambiguity. For a text-free candidate, the required label or distinction is otherwise unavailable. | OCR or blind transcription, line breaks, contrast, role of each phrase |
| **R6 · Opening alignment** | 10 | First meaningful beat confirms the same event, question, recognizable cue or learning goal. When an opening is shared across candidates, score each candidate against that same opening. Match the final cut with an exact timecode. | Opening establishes the broad topic and the specific promise is only confirmed in a later beat that the preview reasonably leads into. | Opening implies a materially different subject or the first confirmation comes only after unrelated setup. | Opening timecode, observed confirmation, intervening setup |
| **R7 · Distinction in context** | 10 | In comparison set, reviewer identifies the candidate using its episode-specific event, object, or outcome and can tell it apart from its nearest visual neighbor. Consistent series styling is allowed. | Reviewer distinguishes it using title, branding, or color alone, or the comparison-unavailable fallback applies. | Reviewer confuses it with the nearest tile even after seeing titles, or the only distinctive visual cue suggests the wrong topic. | Comparison set, nearest tile, distinguishing reason |
| **R8 · Crop and scale resilience** | 5 | The same subject and required cues survive and remain identifiable at primary size and in the planned stress crops or smaller sizes. | Cues remain clear in the primary placement, but stress view loses one supporting element or a checkable stress profile is unavailable. | Primary layout passes the basic visibility gate yet a planned secondary crop or scale causes loss of a core cue. | Masks, exact sizes, retained/lost elements |

★ Core row. A strong score elsewhere cannot compensate for failing to recognize the subject, understand the package, or have a specific reason to watch.

**Score = Σ(weight × rating / 2).** The total ranges from 0 to 100 in 2.5-point increments. Recommended initial release threshold is **85**, with **2** on all three core rows and **no scored row at 0**. Scores for incomplete runs remain null. Record measurements or written observations with every run. OCR confidence, saliency algorithms, contrast, and object detection may flag problems. Human reading or blind visual review resolves ambiguous outcomes.

| Disposition | Rule | Next action |
|---|---|---|
| **READY** | Gates pass, all rows scored, score ≥85, all core rows 2, all other rows ≥1. | Keep as an eligible release or experiment candidate. Pick among READY candidates using the planned test or brief priority. |
| **REVISE** | A gate fails, any scored row is 0, any core row is below 2, or the completed score is below 85. | Link each blocker to a specific edit. Re-render and run the full sheet against the same brief. |
| **REVIEW** | Required inputs or evidence absent and no known blocker determines REVISE. | Obtain missing material, render actual crop, or request targeted human judgment. |

### Apply the anchors to your genre

Use the same scoring table. Define the right answers and proof cues for the genre before opening the candidate.

| Context | What subject recognition and relevance mean here | Common grade failure |
|---|---|---|
| Gaming and stream highlights | Recognizable game action, item, anomaly, or streamer interaction. A person can establish who was involved when identity is the clip’s draw. | A reaction hides the decisive action or appears to belong to a different moment. |
| Podcasts and interviews | The subject of the claim, tension, or anecdote and the speaker when identity matters. For a quote, preserve its meaning and attribution in context. | A generic guest headshot could describe ten clips. Cropped text reverses or exaggerates a quote. |
| AI, tech, coding and tool demos | The visible bug, product context, before/after behavior or outcome. A readable error phrase or cropped interface can be the focal cue. | Illegible UI, fabricated benchmark, or screenshot of a different step assigned to the claimed feature. |
| Tech or e-learning news and explanatory commentary | The verified event and why it matters to the audience. Indicate uncertainty, attribution or forecast status where it affects the claim. | An invented product screenshot or overly broad “AI changes everything” teaser. |
| E-learning, neurolearning and skills tutorials | A concept, worked example, task, change in understanding or next step. A learner should be able to identify the topic without relying on decorative text. | The promised learning outcome is absent or the image suggests stronger evidence than the lesson teaches. |
| Search-first how-to, troubleshooting, and reviews | The exact task or question plus the relevant object, setting, product or visible result. The reason to choose can be direct utility. | Artificial suspense obscures the query or an exact result is promised without conditions. |
| Stories, comedy, events, and documentary clips | One recognizable setup, character action, archive moment or conflict. Reveal enough to understand the setup while honoring the spoiler boundary. | Materially misleading reenactment or the cover reveals the whole punchline when the reveal is the only payoff. |
| LMS catalog, social profile grid, newsletter, or embed tile | Stable subject labels, series context where helpful, distinction from adjacent items and adaptation to the actual crop. | A consistent template erases the lesson difference, or the visible crop cuts the one cue that distinguishes a clip. |

## 5. Check the feed opening

Run only for a FEED_OPENING or as the companion check for a cover package. Use the actual first frame and first meaningful beat. A **0–2 second** preflight window is a production starting point for short swipe-feed clips. Record any intentional longer window specified in the brief. A distinct platform or format can require different timing.

| Check | Pass when | Inspection |
|---|---|---|
| **F1 · Immediate orientation** | By the end of the declared window, a cold reviewer can describe the person, topic, action, claim, or task necessary to make sense of the clip. | Record first orientation timecode and verbatim description. |
| **F2 · Specific reason to continue** | The opening supplies the first piece of evidence, a clear task, or a concrete unresolved question. The final cut delivers the planned payoff. | Record the cue and the exact payoff timecode. A series of generic preambles fails. |
| **F3 · Playback legibility** | Captions, required labels, and main action survive platform UI. Sound-on playback is intelligible when the clip uses audio. Where silent viewing is in scope, captions or visuals convey the premise. | Capture the first frame and primary caption state. Record sound-on and silent checks and any intended accessibility dependency. |

Mark **READY** when all applicable gates and F checks pass, **REVISE** on a known failure, and **REVIEW** when evidence is missing and no known failure already determines disposition. The feed opening has no cover score. Use eligible listing CTR for cover exposure where available. Use feed-specific opening and viewing metrics for autoplay. An on-device preview or proxy panel checks comprehension before publication. CTR and retention are observed after real distribution.

## 6. Revise and record

1. Fix gate failures first. Then fix the failed core cue using the reviewer’s actual interpretation. Change the cue itself, its location, its title relationship, or its framing as needed. If all core checks pass and score is below threshold, start with the largest remaining point loss.
2. Name the single most important reason for each revision. Save the previous version. If testing a single variable, keep all other planned variables fixed. If the source or promise changes, record a new brief revision and grade all candidates against it.
3. Complete up to **two revisions** as an initial production default. Escalate unresolved ambiguity, weak source evidence, or a brief that the footage cannot support after two rounds. The editor can re-cut, change the choice of moment, or ask for more evidence.
4. Store per-row observations, states, and screenshots. Compare independently graded results before assuming different model runs score consistently. Later, attach platform, traffic source, impressions, views from impressions where available, viewing metrics, and test dates. Avoid using the score as predicted CTR or comparing impressions and autoplay starts as if they share a denominator.

### Hypothetical grading example

The brief for **You Can Play Another Game Inside GTA 6** specifies the target cue as a clearly playable game displayed within the larger game scene. The cover can show successful interaction. The withheld outcome is what happens when the streamer plays. The example assumes that the source verifies these claims and that a selected video frame is supported.

The first candidate passes the gates but a blind viewer sees “a streamer reacting” and cannot identify the inner game. R1 **0** requires revision regardless of the other ratings. The editor reframes to show the inner display and the surrounding game environment and keeps the title fixed. In a hypothetical re-review:

| Row | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Rating | 2 | 2 | 2 | 2 | 2 | 2 | 1 | 2 |
| Points | 20 | 15 | 15 | 15 | 10 | 10 | 5 | 5 |

**Result · 95, READY**, assuming every gate passes. R7 received 1 because the supplied comparison lacked meaningful neighboring covers. The score describes this hypothetical review and carries no observed CTR result.

### Minimal agent output

~~~json
{
  "rubric_version": "1.0",
  "video_id": "example-game-within-game",
  "candidate_id": "cover-b-r2",
  "asset_type": "SELECTABLE_COVER",
  "platform": "YouTube",
  "surface": "YT_SHORTS_GRID",
  "content_route": "STREAM_REACTION",
  "strategy": "demonstrate_premise",
  "variable_under_test": "frame_crop",
  "frozen": ["title", "video_edit", "overlay_policy"],
  "preview_refs": ["grid-160px.png", "grid-120px.png"],
  "example_status": "hypothetical",
  "gates": {"G1": "PASS", "G2": "PASS", "G3": "PASS", "G4": "PASS", "G5": "PASS"},
  "ratings": {"R1": 2, "R2": 2, "R3": 2, "R4": 2, "R5": 2, "R6": 2, "R7": 1, "R8": 2},
  "evidence_record": "cover-b-r2-review.json",
  "score": 95,
  "disposition": "READY",
  "issues": [{"row": "R7", "reason": "comparison_unavailable"}]
}
~~~

The linked review record contains the complete candidate metadata, provenance, per-gate evidence, each row’s reason and evidence, and review limitations. Reject any verification record that stores a numeric result but provides no observable evidence for its required anchors.

## Basis for the checks

The grading anchors translate research into production checks. They are a proposed instrument. The most directly relevant thumbnail evidence is behavioral. Making image and title agree showed a benefit in a preregistered study. A randomized thumbnail exposure study on a custom platform linked viewer behavior to the relationship between the cover and the unfolding video. See [Cho et al., Catchy or Sketchy?](https://ssrn.com/abstract=7543822) and [Yang and Netzer, Summarize or Tease](https://www.jasmineyang.marketing/research).

Use current platform documentation for native testing, metric denominators, and export or selection capabilities. Confirm account-specific options in the active workflow. See [YouTube A/B tests](https://support.google.com/youtube/answer/16391400), [YouTube registered impressions](https://support.google.com/youtubecreatorstudio/answer/9314486), [YouTube content performance](https://support.google.com/youtubecreatorstudio/answer/12220281), and [TikTok video covers](https://support.tiktok.com/en/using-tiktok/creating-videos/editing-posting-and-deleting).
