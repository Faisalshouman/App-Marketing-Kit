# Marketing and creator studio role-to-skill map

Use the role's canonical instructions and campaign brief first. Start with the default skills for the assigned artifact, then pick a specialist skill when the work calls for it. The [ownership matrix](ownership-matrix.md) determines who owns the decision and who reviews it.

## Skill sources

Each source label identifies the installed copy. For example, **Research** `audience-research` means the skill under `scrapecreators-social-media-research/audience-research/SKILL.md`. Use the listed source when several skills have the same name.

| Label | Skill directory |
| --- | --- |
| **Project** | [`skills/`](../skills), mirrored to the repository's `.agents/skills/` for Codex |
| **Marketing** | `~/.agents/skills/corey-marketingskills/` |
| **Social** | `~/.agents/skills/social-media-skills/` |
| **Research** | `~/.agents/skills/scrapecreators-social-media-research/` |
| **Krea** | `~/.agents/skills/krea-skills/` |
| **OpenAI** | `~/.agents/skills/openai-catalog/` |
| **Local** | Standalone user skills under `~/.agents/skills/` or `~/.codex/skills/` |
| **FFmpeg** | `~/.agents/skills/ffmpeg-skill/` |
| **Remotion** | `~/.agents/skills/remotion-dev-skills/` |
| **Shorts** | `~/.agents/skills/video-to-shorts-pack/` |
| **Video Use** | `~/.codex/skills/video-use/SKILL.md` and `~/.codex/skills/video-use/skills/manim-video/SKILL.md` |
| **Video Agent** | `~/.agents/skills/melvynx-video-agent-skills/` |

## Role assignments

| Accountable role | Start with | Add when needed | Artifact and handoff |
| --- | --- | --- | --- |
| [Head of Marketing](roles/head-of-marketing.md) | **Project** `campaign-planning`, `growth-report`. **Marketing** `marketing-plan`. | **Marketing** `marketing-ideas`, `launch`, `marketing-council`. **Social** `goals-and-kpis`, `campaign-and-launch-planning`. | One campaign objective, owner assignments, dependencies and founder review packet. Growth Ops supplies the scorecard. |
| [Product Marketer](roles/product-marketer.md) | **Marketing** `product-marketing`, `customer-research`, `competitor-profiling`. | **Social** `audience-research` for audience hypotheses. **Research** `audience-research` for public audience signals, plus `product-demand-research`, `comment-mining`, `competitor-social-research`, `ad-library-teardown`, `creator-profile-teardown`. | Evidence-backed educator segments, objections, positioning and product claims. Give approved messaging and proof to Content, Copy and Website SEO. |
| [Growth Ops](roles/growth-ops.md) | **Project** `growth-report`. **Marketing** `analytics`, `attribution`, `conversion-tracking`, `ab-testing`. | **Social** `analytics-and-reporting`, `experimentation-and-ab-testing`. **Local** `growth-signal-charts` for the scorecard. **OpenAI** `jupyter-notebook` for reproducible analysis of approved aggregate exports. **Project** `short-form-clip-research`. | Funnel definitions, UTMs, experiment readout and weekly scorecard. Give the Head a decision with the reporting window, evidence and data gaps. |
| [Brand Lead](roles/brand-lead.md) | **Project** `brand-review`. **Social** `brand-profile`, `voice-builder`. | **Social** `design-and-templates`, `platform-specs-and-validation`. **OpenAI** `figma-use`, `screenshot` for source comparison or review of a rendered asset. | A QA decision on the exact render, including approved logo source, typography, contrast, safe areas and any revisions. Return findings to the asset owner. |
| [Content Strategist](roles/content-strategist.md) | **Marketing** `content-strategy`. **Social** `content-pillars`, `content-calendar`, `idea-generation-and-ideation`. | **Social** `content-audit`, `content-research-and-sourcing`, `educational-content-and-how-to`, `cross-platform-repurposing`. **Research** `outlier-post-finder`, `trend-discovery`, `transcript-intelligence`, `content-repurposing`. **Shorts** `video-to-shorts-skill` for shortlisting moments. **Project** `short-form-clip-research`. | A prioritized calendar and briefs with one audience, teaching problem, proof point, CTA and success signal per idea. Hand off to the Copywriter and production owners. |
| [Marketing Copywriter](roles/marketing-copywriter.md) | **Project** `social-post` for draft copy and checks. **Marketing** `copywriting`, `copy-editing`. **Social** `hook-writer`, `caption-writer`. | **Social** `writing-style-and-tone`, `carousel-writer`, `linkedin-post-writer`, `short-form-video-script`, `reels-script`, `tiktok-script`, `storytelling-and-narrative`. **Project** `short-form-clip-research`. | Reviewed scripts, captions and carousel text with claims traceable to product evidence. Give approved copy to Design, Video or Social. |
| [Graphic Designer](roles/graphic-designer.md) | **Social** `design-and-templates`, `thumbnail-design`, `infographic-and-data-viz`, `platform-specs-and-validation`. **Project** `brand-review` for preflight. | **Social** `canva`, `image-prompt`, `ai-image-editing`, `pinterest-pin-design`. **Krea** `krea-marketing`, `krea-generate` for illustrative assets. **OpenAI** `figma-use` for editable design source. | Branded static exports, editable source where supported, alt text and asset provenance. Brand Lead reviews the finished files. |
| [Video Producer](roles/video-producer.md) | **Project** `video-demo` for app demos or `creator-clip-edit` for creator channels. **Social** `scripting-and-storyboarding`, `captions-and-clipping`, `platform-specs-and-validation`. **FFmpeg** `ffmpeg-skill` for local editing and export checks. | **Shorts** `video-to-shorts-skill` for approved footage. **Video Use** `video-use` for local edit decision list renders. **Video Agent** `editing`, `short-editing`, `clips`, `broll` for local creator edits. **Remotion** `remotion-best-practices` for code-driven motion. **Local** `shortform-production`. **Social** `descript`, `capcut`, `talking-head-and-piece-to-camera`. **OpenAI** `transcribe`, `playwright`. **Krea** `krea-motion`, `faceless-video` for supplemental clips. **Project** `short-form-clip-research`. | Storyboard, authorized footage, captions, rights manifest and reviewed exports. Own the creative cut for marketing, gaming and podcasts. Request a thumbnail from Graphic Design and hand the reviewed render to Social. |
| [Media Pipeline Engineer](roles/media-pipeline-engineer.md) | **Project** `media-pipeline-automation`. **FFmpeg** `ffmpeg-skill` for the command contract and file QA. | **Video Use** `video-use` for edit decision list tooling. **Remotion** `remotion-docs`, `remotion-render`, `remotion-multimedia`. **Video Agent** `studio-setup` as reference for runtime prerequisites. | Reusable local tool integration, preset, synthetic test results and runtime QA. Hand off technical capabilities and limits to Video Production. Social owns any separately approved publishing action. |
| [Social & Community Manager](roles/social-community-manager.md) | **Project** `social-post`. **Social** `platform-specs-and-validation`, `community-management`, `engagement-routine`. | **Social** `social-strategy`, `reply-and-comment-writer`, `crisis-and-moderation`, `scheduling-and-queue` and the platform skills below. **Research** `social-listening-brief` for public feedback. | Channel-ready package and reply triage. After authorized publication, record verified URLs or provider receipts and give performance evidence to Growth Ops. |
| [Partnerships & Outreach](roles/partnerships-outreach.md) | **Project** `partnership-research`. **Marketing** `co-marketing`, `events`. | **Social** `collabs-and-cross-promotion`, `ugc-and-influencer`. **Research** `influencer-prospecting` for permitted public professional research. **Marketing** `cold-email` for individually reviewed drafts within the outreach policy. | A sourced shortlist and tailored partnership proposals for educators, creators, newsletters or webinar hosts. Founder reviews recipient scope before outreach. |
| [Website & SEO](roles/website-seo.md) | **Local** `seo-audit` from `~/.agents/skills/seo-audit/` for an audit. **Marketing** `cro`, `site-architecture`, `copy-editing`. | **Local** `seo-content-brief`, `seo-technical`, `seo-schema`, `keyword-research` from `~/.agents/skills/`. **Marketing** `ai-seo`, `programmatic-seo`. **OpenAI** `playwright` for browser evidence. | Evidence-backed page copy, search brief or technical ticket. Send the proposed change via the [website change request](../templates/website-change-request.md). |
| [Lifecycle & CRM](roles/lifecycle-crm.md) | **Project** `lifecycle-email`. **Marketing** `emails`, `onboarding`, `churn-prevention`. | **Social** `email-and-newsletter`. **Project** `growth-report` for lifecycle outcomes using aggregate data. | Opt-in onboarding, educational newsletter or retention sequence with entry/exit criteria, suppression and unsubscribe behavior. Growth Ops reviews measurement and the founder approves sends. |

## Vyral Content skills

Read these from `~/.agents/skills/vyral-content-skills/`. Start from the approved brief and use the pack for draft options and test hypotheses. Verify platform claims against current official guidance, and use Project `short-form-clip-research` for evidence-led Shorts diagnosis.

| Role | Vyral skills and uses |
| --- | --- |
| Content Strategist | `viral-short-form-ideas` for angle generation and calendar planning. |
| Marketing Copywriter | `viral-short-form` for scripts and carousel copy, `viral-hooks` for openings, and `viral-captions-and-ctas` for captions and calls to action. |
| Social & Community Manager | `viral-tiktok-content`, `viral-instagram-reels` and `viral-youtube-shorts` for channel-specific packaging and experiment proposals. |
| Growth Ops | Use the relevant platform skill as a source of test ideas. Validate with a matched channel baseline and first-party metrics. |

## Video production skills

- Use Project `short-form-clip-research` for the research-to-edit handoff. Content Strategy owns breakout research and the shortlist. The Video Producer uses the ranked cut notes on authorized footage, the Copywriter uses the hook and payoff findings, and Growth Ops uses the matched-baseline diagnosis and experiment guidance.

- Use Natron for shot-level compositing such as keying, roto, masks and cleanup. The Video Producer owns the composite and brings the rendered shot back into the timeline. The Media Pipeline Engineer handles repeatable batch renders with `NatronRenderer.exe`.

- Use the official **Remotion** `remotion-best-practices` skill first for reusable editing templates. Use `remotion-create`, `remotion-markup`, `remotion-captions` and `remotion-render` for composition setup, graphics and animation, captions, and export.
- Use ClipsAI to suggest coherent excerpts from approved podcast or interview transcripts. The Content Strategist can shortlist excerpts, and the Video Producer chooses the cuts and verifies speaker framing. Active-speaker reframing requires authorized access to the upstream diarization model. Use PySceneDetect for visual transition timestamps and edit-point review. The human's selected gameplay moment supplies the editorial intent.

- Use **FFmpeg** `ffmpeg-skill` to probe footage, trim or join cuts, reframe, normalize audio, burn captions and verify exports. Invoke the supplied Python scripts with `py` on Windows.
- Use **Shorts** `video-to-shorts-skill` to score timecoded moments from an approved webinar, interview or demo, then preview the crop and render the selected vertical clips. Content Strategy can shortlist moments using the rubric. Copywriting drafts the hook and caption. Video Production owns the edit. Social gets the reviewed assets through the existing approval and publishing workflow. Use a supplied SRT or VTT when automatic transcription is unavailable. Cloud transcription and publishing follow the existing provider and approval rules.
- Use Remotion for repeatable layouts and motion graphics. **Remotion** `remotion-create` starts a standalone composition, `remotion-markup` builds the motion, `remotion-captions` styles subtitles, `remotion-studio` previews and `remotion-render` exports. Brand Lead reviews the rendered motion and Graphic Design supplies approved graphic assets.
- Use **Remotion** `remotion-docs` and `remotion-multimedia` for API or media handling questions, `remotion-maps` for a geographic explainer, `remotion-interactivity` for editable compositions, `remotion-license` for license research and `remotion-upgrade` for an authorized standalone video project upgrade. Use `remotion-saas` only as research for an engineering handoff when relevant.
- Prefer local cuts and supplied subtitles for existing footage. **Video Use** `video-use` can render a local edit decision list. Its ElevenLabs transcription route requires an approved connection and spend authorization. Use **Video Use** `manim-video` for a technical explainer when the optional animation runtime is available.
- Use **Video Agent** `studio-script` for Copywriting, `outliers` for Content Strategy, `insta-audit` for Growth Ops, and `codex-images` for Graphic Design. For Video Production, `vox` is an optional motion treatment and `short-translate` requires separate voice, provider and cost approval. Analyze style with `steal` only from a supplied, permissioned reference and use the findings to make an original edit. Social can use `publish` to prepare a package under the project's publishing policy. Use explicit connector authorization for any external action. Treat `studio-setup` as installation reference and keep project permissions under the owner's control.

## Short-form design and HyperFrames

Use Project `design-short-form-videos` from `skills/design-short-form-videos/` once the idea or source clip has been verified. Use Project `short-form-clip-research` when proof, candidate timestamps or published results still need investigation. Read the upstream HyperFrames skills from `~/.agents/skills/heygen-hyperframes-skills/`.

Use the [hook and loop guide](../skills/design-short-form-videos/references/hooks-and-loops.md) for short-form openings and endings. Content Strategist sets the viewer promise and payoff. Copywriter drafts the first line, prediction and spoken join. Graphic Designer makes the clue legible. Video Producer owns the timed edit and replay decision. Media Pipeline Engineer checks frame cadence and audio continuity when tooling is involved. Brand Lead reviews comprehension and continuity. Social confirms the intended placement, and Growth Ops uses the [evidence notes](../skills/design-short-form-videos/references/hook-loop-evidence.md) to evaluate the variants.

Use [Replay construction](../skills/design-short-form-videos/references/replay-construction.md) for spoken, motion and audio joins. Video Producer leads [review by stage and artifact version](../skills/design-short-form-videos/references/review.md). Copywriter reviews the written seam, Media Pipeline Engineer supplies diagnostics from the current export, Brand Lead reviews the actual cut, Social records destination playback when available, and Growth Ops reports measured audience results. The [loop pack audit](../docs/research/video-loop-pack-audit.md) records source checks and routes the retained catalogs, examples and tooling.

For YouTube packaging, Graphic Designer and Marketing Copywriter use the [thumbnail review reference](../skills/design-short-form-videos/references/youtube-thumbnail-review.md) for the image and title. Brand Lead checks the rendered package against its promised payoff and intended surfaces. Growth Ops uses the reference for eligible tests and metrics interpretation.

For every thumbnail and selectable cover, use Project [`thumbnail-quality`](../skills/thumbnail-quality/SKILL.md). Content Strategist and Marketing Copywriter define the promise and title. Graphic Designer owns the candidates and scorecards. Video Producer supplies the verified payoff and frame timecodes. Brand Lead verifies the scored candidate and preview. Social & Community Manager checks the exact READY version before routing it for founder approval. Growth Ops owns test interpretation and rubric calibration.

For gaming walkthroughs and question-led clips, Content Strategist, Marketing Copywriter, Video Producer, Partnerships and Growth Ops use the [gaming YouTube guide workflow](../playbooks/gaming-youtube-guides.md) for demand, gameplay proof, rights and measurement.

Run local checks and renders with the pinned CLI from the setup manifest. Set `HYPERFRAMES_NO_TELEMETRY=1` for the render process. The workspace's approval rules apply to upstream guidance about usage beacons, feedback, uploads, account connections and paid features. HyperFrames Pro access is required for the published `style-sampling` and `reverse-any-video` workflows.

| Role | Assignment |
| --- | --- |
| Content Strategist | Use `design-short-form-videos` to brief the first frame, proof and payoff. |
| Marketing Copywriter | Use `design-short-form-videos` to draft first lines, caption beats and spoken replay joins. |
| Graphic Designer | Use `design-short-form-videos` for infographic storyboards and first-frame assets. Add HyperFrames `figma` for an approved Figma source. |
| Brand Lead | Use `design-short-form-videos` to review first-frame clarity, text placement and visual continuity on the actual cut. |
| Video Producer | Use `design-short-form-videos` for the timed edit and review. Use HyperFrames `hyperframes` for HTML motion and `hyperframes-cli` for local checks and renders. Add `slideshow` for image sequences, `media-use` for available media workflows, and `style-sampling` or `reverse-any-video` for analysis of approved references. |
| Media Pipeline Engineer | Use the design skill's structured handoff for automation inputs. Use `hyperframes-cli` for repeatable renders and QA, `hyperframes-registry` for reusable components and `remotion-to-hyperframes` for requested migrations. |

## Software by operating role

Use the [setup manifest](../media-requirements.json) for the upstream release, install method and verification status. Tool selection follows the deliverable and the [creator clipping playbook](../playbooks/creator-clipping.md).

| Role | Software and evidence |
| --- | --- |
| Human operator | OBS Studio Replay Buffer to save the selected moment. Optional OBS WebSocket integration is for a separately authorized recording-control workflow. |
| Head of Marketing | Local workboard and approval packet to assign the producer and coordinate a separate creator channel. |
| Product Marketer | Browser or approved public research connectors for product evidence and audience hypotheses. Creator entertainment metrics belong to Growth Ops. |
| Growth Ops | Local workboard and permissioned aggregate analytics exports for marketing or per-channel clip performance. |
| Brand Lead | Review the actual stills and rendered video against the appropriate channel identity and caption safe areas. Use the editor preview or FFmpeg frame extraction when useful. |
| Content Strategist | Review the operator's clip and local SRT/VTT or transcript to propose an angle and timecoded moments. |
| Marketing Copywriter | Use the approved transcript and preview for captions, accurate descriptions and titles. |
| Graphic Designer | Inkscape and GIMP/PhotoGIMP for editable thumbnails. ImageMagick, resvg or sharp for programmatic crops and exports. |
| Video Producer | MakeMyClip for the timeline, FFmpeg for local transforms and official Remotion skills for reusable caption, graphic and animation templates. Use ClipsAI for podcast excerpt candidates and PySceneDetect for visual cut boundaries. Use HyperFrames for HTML-based vertical motion when the edit benefits from an editable composition. WeftCut, Concat and Diffusion Studio are alternatives subject to the recorded checks. Use faster-whisper or WhisperX transcripts where appropriate. |
| Media Pipeline Engineer | Maintain FFmpeg/ffprobe, faster-whisper, WhisperX, ClipsAI, PySceneDetect and verified editor interfaces. Keep the speech and scene-analysis environments independent. Verify reusable Remotion and HyperFrames template renders. Use whisper.cpp or Auto-Editor when needed. |
| Social & Community Manager | Platform channels and YouTube Studio or an approved uploader for submission, scheduling and receipts. Review the output and target account before requesting founder approval. |
| Partnerships & Outreach | Creator permissions and source references via authorized public research and a private permission record. |
| Website & SEO | Browser, Playwright or authorized Search Console evidence for site and discoverability proposals. |
| Lifecycle & CRM | Local consent-aware drafts and approved CRM/email provider records for authorized sends. |

## Channel skills for Social & Community

- **LinkedIn** uses Social `linkedin-growth`, `linkedin-company-pages` and `linkedin-post-writer` for adaptation. The Copywriter owns the original copy.
- **Instagram** uses Social `instagram-growth`, `instagram-seo` and `instagram-reels-publishing` for channel requirements and approved execution.
- **TikTok** uses Project [`tiktok-content-research`](../skills/tiktok-content-research/SKILL.md) for topic evidence and evaluation. Content Strategist owns the shortlist, Social & Community Manager gathers authorized channel observations, Marketing Copywriter drafts the evidence-backed opening and caption, Video Producer carries the proof into the edit, and Growth Ops reviews Search and For You results. Use Social `tiktok-growth` for channel guidance and `tiktok-video-publishing` for approved execution.
- **YouTube** uses Social `youtube-shorts`, `youtube-long-form` and `youtube-publishing-and-metadata` for packaging and approved execution. Video Producer owns the edit.
- **Other channels** use Social `facebook-strategy`, `facebook-groups`, `reddit-marketing`, `threads-growth`, `x-growth` or `pinterest-growth` when the campaign names that channel.

## Applying the map

- For a teacher-demo campaign, the Content Strategist briefs an educator problem, the Copywriter drafts the script, the Video Producer captures the real workflow, the Brand Lead reviews the exported video, and Social prepares the approved channel package. Growth Ops reads the results after distribution.
- For a landing-page change, Product Marketing supplies verified claims, Website & SEO owns the change request, Brand Lead reviews the visual implications, and Growth Ops defines the experiment metric.
- Use ImageMagick, resvg, sharp, Inkscape and GIMP with PhotoGIMP as local production tools for Graphic Design. Use approved originals for the Philocoursa logo and real, permissioned screenshots for product proof.
- Live ScrapeCreators research requires `SCRAPECREATORS_API_KEY`. Use **Research** `scrapecreators-api` when a permitted research task needs endpoint selection. Krea generation requires an authenticated MCP connection and approval for billable execution. Creative, social platform, email and analytics connections follow the [integrations guide](../integrations/README.md).
- Apply the [claims and consent policy](../policy/claims-and-consent.md) and the [publication policy](../policy/publication-and-approvals.md) at each handoff. External publishing, outreach, sends, uploads, account changes and spend require the founder's specific authorization. Keep personal contact data in approved private systems.
