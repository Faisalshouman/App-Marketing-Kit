# Thumbnail decision protocol
Version 1.0 · For a coding agent producing thumbnails, vertical covers, and feed openings

Use this protocol to decide **what the viewer should recognize, why they should care, and what the video actually delivers**. Then run [thumbnail-grading-sheet.md](thumbnail-grading-sheet.md) on each eligible candidate. Use [thumbnail-video-evidence-audit.md](thumbnail-video-evidence-audit.md) for the rationale behind the rules.

The protocol controls production quality. Published tests measure audience response. A passing grade is permission to consider the asset ready for use. It carries no CTR forecast.

## 1. Route the job

Choose a primary surface based on the business goal or existing traffic. For a new upload with no data, infer it from the viewer's likely intent and record the assumption. If two surfaces matter, prepare two briefs. When a platform shares one image across surfaces, optimize for the primary one and require the secondary preview to preserve subject and promise.

| Surface ID | Decision the viewer makes | Asset to produce | How to measure |
|---|---|---|---|
| `YT_BROWSE` | Choose among Home or Suggested videos | `PHOTO_THUMBNAIL` and title | Native watch-time share if eligible. Inspect impressions, CTR and watch time from impressions where exposed. Compare Home and Suggested separately when the data allows. |
| `YT_SEARCH` | Identify a result that satisfies a query | `PHOTO_THUMBNAIL` and title. Use the target query, artifact, or outcome to remove ambiguity. | Search impressions and CTR where available, watch time, and relevant search terms. Native experiments may report an overall result across traffic. |
| `YT_SHORTS_GRID` | Select a Short from an eligible thumbnail surface | `SELECTABLE_COVER`. Check the actual mobile render on the intended surface. | Registered impressions and impression CTR where reported. Start with traffic-source mix. |
| `YT_SHORTS_FEED` | Stop swiping and keep watching | `FEED_OPENING`. Deliver the opening sequence with its companion cover when applicable. | Stayed to watch, engaged views, average percentage viewed, and early retention if available. |
| `TIKTOK_GRID` | Select a clip from a profile or search-results grid | `SELECTABLE_COVER`. Keep category, episode, or subject understandable in the actual crop. | Use an attributable cover-level metric if exposed. Otherwise use a controlled preview-choice test and label aggregate platform observations exploratory. |
| `TIKTOK_FYP` | Keep watching via the moving feed | `FEED_OPENING`. Start with motion, a readable artifact, or immediately intelligible speech backed by visuals or captions. | Average watch time, completion, and early retention where exposed. Use duration-matched comparisons. |
| `OTHER_GRID` / `OTHER_FEED` | Select from a grid or continue in an autoplay feed, such as Reels or similar platforms | `SELECTABLE_COVER` for grids, `FEED_OPENING` for feeds. Check the account's actual crop and upload controls. | Use the platform's documented metrics with their native denominators. If selection exposure is absent, use a preview test. |
| `LMS` | Find and start the correct lesson or module | `PHOTO_THUMBNAIL` or `SELECTABLE_COVER` according to the product. Prioritize wayfinding and achievable outcomes. | Starts per eligible tile exposure if instrumented, correct lesson selection, completion, and alignment with the learning objective. |

**Platform checks.** YouTube currently documents an image-upload path for verified Shorts creators on desktop, plus a frame-selection path in the regular mobile YouTube app. Confirm the actual controls available on the account. TikTok documents choosing an in-video cover frame at posting. Verify availability and crop on the upload client before delivery. YouTube native concurrent A/B testing is for eligible videos and excludes Shorts. Use an eligible long-form test, a controlled external comparison, or an explicitly observational Shorts comparison. [YouTube custom thumbnails](https://support.google.com/youtube/answer/72431) · [YouTube Shorts covers](https://support.google.com/youtube/answer/10343433) · [YouTube testing](https://support.google.com/youtube/answer/16391400) · [TikTok cover selection](https://support.tiktok.com/en/using-tiktok/creating-videos/editing-posting-and-deleting)

Read the upload specs for each route when rendering. YouTube's desktop guide recommends 16:9 for videos, 9:16 for Shorts and 1:1 for podcast playlists. A standalone podcast episode on YouTube uses the video route. Use the current preview to check alternate crops. If the agent cannot use a publisher's interface, export the image or frame timecode and the intended crop for the operator. [YouTube custom thumbnails](https://support.google.com/youtube/answer/72431)

## 2. Pick the content route

Route by the **payoff in this specific edit**. A podcast clip about an AI launch can be interview INSIGHT, NEWS, or DEMO depending on whether the payoff is a person's explanation, the significance of an update, or a recorded result. Use one primary route per candidate. Use the secondary route as a source of alternative creative approaches.

| Route | Use when the video delivers | Build around | Verify before design | Common revision |
|---|---|---|---|---|
| `LEARN_CONCEPT` | An explanation that changes how learners understand one idea | One phenomenon, comparison, diagram, or concrete example. Prompt a prediction only when the lesson resolves it. | Expected starting knowledge, the exact idea, and the point where it becomes clear. E-learning example: show the ambiguous graph a lesson explains. | Replace the broad topic label with the example or distinction the lesson actually teaches. |
| `LEARN_TASK` | A tutorial, how-to, troubleshooting sequence, or lesson with a tangible result | A real output, relevant UI state, before/after, or reproducible error. Name the task or tool in the title if viewers search for it. | Correct tool and version where material, exact outcome, and any prerequisite. Coding example: show the repeated retry or the corrected result. | Enlarge the one line or UI feature that proves the task. Reduce surrounding interface detail. |
| `LEARN_SERIES` | A learner choosing a specific lesson in a course or recurring series | A stable visual structure, lesson-specific icon or example, and a clear outcome or stage marker. | Module order, lesson title and visible differences from adjacent tiles. | Keep series identity consistent while giving each lesson its own recognizable object. |
| `NEWS` | A new development and its implications, including AI, tech, science, or e-learning news | The actual entity or artifact plus what changed: release, chart shift, rule, demo, or consequence. | Primary source, date, status, and distinction between reporting, rumor, and commentary. | Replace generic “AI changed forever” framing with a concrete affected capability or audience. |
| `DEMO` | A tool in action, review, test, benchmark, or comparison | A result the viewer can compare, such as outputs side by side, or the decisive test condition. | Exact conditions, units, versions, cohort, and limitations material to the graphic. | Crop to evidence. Add one qualifier when a claim would otherwise overgeneralize. |
| `PODCAST_INSIGHT` | A guest teaches an idea or offers a useful explanation | The specific idea, counterintuitive fact, diagram, or artifact. Use the speaker when identity helps viewers understand why it matters. | Transcript span and adjacent context, speaker identity, premise and takeaway. | Replace “HE EXPLAINS EVERYTHING” with the named thing explained or a short complementary cue. |
| `PODCAST_DEBATE` | A hot take, disagreement, or reveal | A real point of disagreement, contrasted objects, or authentic expression from the moment. | Whether the guest asserted, quoted, rejected, joked about, or qualified the claim. If using exact quotation, check audio. | Reword to preserve attribution or uncertainty. Remove visual staging that implies conflict absent from the audio. |
| `STREAM_REACTION` | A genuine reaction to a specific on-screen event | The trigger first, with a reaction crop if it helps the premise. | Game/source identity, source timecodes for event and reaction, causal continuity. Maintain the distinction among official GTA VI footage, another game, a mod, a fan concept and commentary. | Enlarge the actual thing the streamer reacted to. Retain enough surroundings to identify it. |
| `STREAM_ACTION` | A challenge, attempt, fail, win, comeback, or emergent gameplay | A readable objective, obstacle, or decisive state. Leave success uncertain when that is the payoff. | Which attempt and outcome the edit shows. Label simulation or speculative footage when material. | Replace an arbitrary action frame with one that communicates the objective or stakes. |
| `COMEDY_REVEAL` | A joke, reversal, or absurd event | The setup object and the visual contradiction that starts the joke. | Setup, actual punchline, prerequisites for understanding it. | Remove the frame or wording that gives away the final punchline. |
| `STORY` | A documentary beat, personal story, case study, or transformation | A character, object, turning point, or real before/after. | Timelines and whether the before/after views are genuinely comparable. | Give the story one visual turning point. Use the framing to establish stakes. |
| `OTHER` | A payoff the routes above do not capture | Use the source material to name the audience, job, proof, expectation and observable outcome. | Why the existing routes are insufficient and what can be checked. | Fall back to a verified representative frame if a sharper promise lacks proof. |

## 3. Complete the brief before rendering

Inspect the actual footage, transcript, brief and source references available. Pin the smallest sufficient evidence for each assertion. Timestamps go against the correct cut and timebase. If no footage or proof is available, produce labeled concepts and leave grading pending.

1. Write the viewer's job in one sentence. Example: “A GTA fan wants to see whether the machine shown on screen is actually playable.”
2. Record the **promise** in one sentence and list the **must-read elements**. Keep the list short. Identify which belong to the image, title, overlay, or opening.
3. Write the **outcome question** the viewer should still have. For a direct tutorial, news update or LMS tile, `null` is allowed when the declared intent favors an explicit outcome. Describe why this helps the viewer.
4. Pin the **proof event** with a frame, transcript span, source reference, or verified artifact. Record the first moment the opening confirms the premise and the later moment that delivers it. If the answer itself is the entertainment payoff, establish the premise early and leave the answer for its natural place.
5. Choose what to hold fixed. For a thumbnail-only test, freeze the title and video edit. For a package test, register both variables as intentionally changed. A feed-opening comparison belongs to the opening experiment. Give the preview and opening separate identifiers.
6. Estimate the release context. Record expected device, display state, available placement metrics, comparison window, and relevant crop/UI constraints. Label mock sizes as approximations and use a real screenshot when available.

### Minimum manifest

Add the companion evidence fields specified by the grading sheet. Set playbook version on each production run.

```json
{
  "playbook_version": "1.0",
  "video_id": "internal-video-id",
  "surface": "YT_SHORTS_GRID",
  "asset_type": "SELECTABLE_COVER",
  "content_route": "STREAM_REACTION",
  "audience_intent": "See whether the nested game is actually playable",
  "title": "You Can Play Another Game Inside GTA 6",
  "promise": "This clip shows actual control of a game within the correctly identified game footage",
  "outcome_question": "What happens when the streamer plays it?",
  "must_read_image": ["playable inner screen", "enclosing game context"],
  "evidence": [],
  "opening_confirmation": null,
  "payoff_time": null,
  "candidate_id": "game-within-game-A",
  "cover_selection_time": null,
  "preview_files": [],
  "variable_under_test": "cover_visual",
  "frozen": ["title", "video_edit"],
  "primary_metric": "impression_ctr_if_available",
  "status": "CONCEPT_PENDING_SOURCE_REVIEW"
}
```

## 4. Generate genuinely different choices

When local references exist, inspect a few comparable cards at the same device size and placement. For each reference you keep, record its source, visible subject, intended question or promised outcome, and one design mechanism worth adapting. For your own public uploads, compare performance at similar ages and traffic sources where possible. Keep public views as a topic and ideation signal. Crop and overlay choices belong in visual hypotheses until tested. Adapt the mechanism using your own assets and composition.

Start with **two** approaches. Add a third when the raw material supports another distinct viewer expectation or when a test can use the extra traffic. Use the evidence under each approach to direct creativity.

| Approach | Show | Leave open | Good fit |
|---|---|---|---|
| Proof or outcome first | The real artifact, result, side-by-side or decisive action | How it worked, why it matters, or how to reproduce it | Search, tutorials, benchmarks, LMS, demos |
| Anomaly or problem first | A familiar scene with one visible inconsistency, failure, or unexpected element | Why it happened or whether it can be fixed | Tech explainers, bugs, news, comedy, gaming |
| Character or consequence first | A genuine person or game character plus the trigger or stakes | What they do, discover, or decide | Podcasts, streams, case studies, entertainment |

For every candidate document the visible difference, the information it gains or gives up, and what new behavior it predicts. Create one sketch with zero overlay text. Add an overlay if it communicates an independently useful detail, reads at placement size, and preserves the main visual. An exception such as a transcript block, scoreboard, or comparison graphic should have a subject that remains recognizable at glance. Match the title and visual to the same promise. Test any unexpected treatment as a hypothesis.

Do not use color, a face, a cutout, arrows, contrast boosts, or large numbers by default. Choose them for a specific job. Examples: an arrow that locates a hidden UI control, color separating quantities in a real chart, or a reaction that is dependent on the visible trigger. Preserve the actual evidence in edited images. Label reconstructions and conceptual illustrations when they would otherwise be taken as real footage.

## 5. Build and inspect

- **Thumbnail or cover.** Render the target asset, the target crop at display size, and a mock with the actual title and platform badges. Check grayscale only when color is the sole separator of key details. Check every other promised placement where the same image is reused.
- **Frame selection.** Record the eligible timecode against the final uploaded edit. Preview the platform-selected crop. For frame-based covers choose a real frame that serves the story, or a naturally integrated designed frame when context and platform permit. Inspect playback around that frame.
- **Feed opening.** Inspect the actual first frame and the first intelligible beat, with sound off and on when possible. By that beat the viewer should recognize the premise or see evidence of it. Use a 0–2 second preflight window for most short clips and record a genre-specific reason if a longer opening is intentional. Avoid inserting a static thumbnail as a generic introduction.
- **Rebuild in priority order.** Fix accuracy and platform fit, then recognition, then the expectation and payoff, then distracting elements. Only after those checks experiment with visual polish and style.
- **Grade.** Use the actual export and grade each candidate using the companion sheet. Record the evidence behind each mark and keep an explicit pending status for missing or ambiguous inputs. For a controlled thumbnail test, retain the current production asset as a logged baseline when it passes the hard gates. Clearly label any retained weaker score.

### Worked packaging examples

These template briefs need real source evidence before use.

| Job | Image or cover | Opening and proof | Check |
|---|---|---|---|
| Neurolearning concept Short | Draw the same key membrane diagram used in the lesson. Highlight the inside and outside of the neuron if the topic is membrane voltage. | Use the two regions immediately and establish the reference point before explaining the sign. | The image and title together imply a lesson about voltage across the membrane. They avoid implying that the viewer will see a literal image of charge. |
| Coding how-to on YouTube Search | Use the real error or corrected output and put tool/version in the title if the answer depends on it. | Show the before/after and then reproduce the fix. | A viewer can tell which error and tool are covered, and the output is reproduced in the video. |
| AI release on TikTok | Show the verified UI or feature change in one clean crop. Use the product name as brief context when the crop alone is ambiguous. | State what changed and show who can use it. Hold unconfirmed claims in a clearly labeled block or omit them from the cover. | The exact plan, date or rollout limit is consistent wherever the clip mentions it. |
| Podcast debate on YouTube or Reels | Use a real image from the exchange and name the actual disagreement. A short quote must be supported by source audio. | Include enough of the prompt or preceding sentence to preserve the speaker's stance. | A viewer who saw only the cover predicts the subject and speaker accurately. A reviewer who reads the surrounding transcript reaches the same interpretation. |
| Stream comedy on Shorts or TikTok | Show the object that triggers the joke and a genuine expression when available. Show the pre-payoff state when the result is the punchline. | Make the setup obvious before the punchline or loop. | Verify whether the footage is from the claimed game or from another title, demo or fan project. |
| LMS module tile | Use the course's typography, a clear lesson label and a lesson-specific image, such as the graph learners will interpret. | The lesson starts from the promised objective and the matching graph. | In a grid of neighboring lessons, a learner can choose the right lesson for a stated task. |

## 6. Turn performance into decisions

| Observed pattern | Next check | Next action |
|---|---|---|
| Few or zero thumbnail conversions from tens of impressions | Exposure count, age, traffic mix, target surface | Keep the conclusion open. Fix visible production defects and collect more like-for-like exposure. |
| Lower CTR with meaningful comparable thumbnail exposure | Actual crop, audience/query fit, title-image expectation | Keep the title fixed and test one new visual concept when possible. Use a package test if the message itself must change. |
| CTR rises while viewing quality falls | Premise confirmation and payoff, viewing source, changed audience | Review watch time from impressions or native watch-time share and the drop-off around the delivered premise. Rework the claimed promise if viewers are getting a different experience. |
| Covers get selections but feed hold is weak | First frame, first intelligible audio/visual beat, delay to proof | Revise the opening. Keep cover findings in their own log. |
| Strong engagement with limited exposure | Topic demand, traffic source, eligibility, competition, audience fit | Keep the outcome exploratory. Prioritize the next topic or distribution experiment based on data. |

**Experiment setup.** Record before launch: control, hypotheses, test unit (per video, eligible viewer exposure, or external panel), primary metric, guardrail, window, and required sample or platform stopping condition. Use native concurrent tests if eligible. For external thumbnail judging, recruit intended viewers, randomize the first candidate shown, preserve the title/device/layout, ask them to identify the premise without prompting, and record a selection choice among realistic neighbors. Report sample and method. Treat cover swaps and comparisons across different uploads as observational and record changes in audience, age, placement and topic.

**Calibrate the grader.** Before relying on this rubric across a batch, take a small archived set spanning different routes and visible failure modes. Have two reviewers independently grade the same rendered cards using the same answer key, withheld during the blind phase. Log exact agreement on each gate, each core row and the final disposition. When a row repeatedly disagrees, tighten the definition or answer key before revising its weight. Save both original grades and the resolution. Freeze the revised version for the next batch. Later, compare grades with real audience choices by surface and genre, keeping the launch data distinct from the agreement check.

**CTR reporting.** Keep both absolute and relative change. A change from 3.30% to 3.63% is +0.33 percentage points and +10% relative. A change to 4.95% is +1.65 points and +50% relative. For a planning illustration, a balanced two-arm test of 3.30% versus 3.63% with independent exposures, a two-sided 5% significance level and 80% power needs roughly 48,000 observations per arm by a normal approximation. Repeated viewers, multiple variants, changing traffic, and native watch-time testing change that calculation. Use YouTube's actual result when available. Treat underpowered comparisons as uncertain and record the observed denominator. A +10% relative lift is a testable target. The achievable lift depends on your actual viewers, topic, competing options and exposure. [YouTube CTR guidance](https://support.google.com/youtube/answer/7628154) · [YouTube impressions funnel](https://support.google.com/youtube/answer/9314486) · [YouTube Shorts metrics](https://support.google.com/youtube/answer/12220281) · [TikTok recommendation surfaces](https://support.tiktok.com/en/using-tiktok/exploring-videos/how-tiktok-recommends-content)

### First application to the existing channel

The screenshots show 3.3% CTR across 1,689 registered impressions over the selected view. Treat that as a mixed baseline. The “Game Inside GTA 6” upload shows 1.4% on 211 impressions, roughly three impression-driven views, alongside 985 total reported views. Start with `STREAM_REACTION` plus `YT_SHORTS_GRID` if Studio confirms this upload is a Short. Verify the source and game identity before repeating the title's claim.

- **A, proof-led:** frame the playable screen prominently and keep enough enclosing game context to show the nesting.
- **B, reaction-led:** use a genuine reaction while leaving the same gameplay trigger identifiable. If no such frame exists, use the proof-led version or an alternate verified frame.
- **Opening companion:** show recognizable input and its effect or use the earliest verified beat that demonstrates playability. Reserve the funny result if there is one.
- **Measure:** preserve the title only if accurate, and record cover exposure, CTR and traffic source. Track Stayed to watch and relative viewing duration independently. For the 1:49 living-room video with 622 impressions, confirm format and eligibility in Studio before selecting a native test or observational workflow. Duration alone leaves format unresolved.
