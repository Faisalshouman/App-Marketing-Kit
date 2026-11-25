# External tool activation plan

The local workboard is functional without any network service. Add integrations in this order **after the founder approves vendor choice, access scope and cost**:

| Workflow | Potential tool | Required setup / boundary |
| --- | --- | --- |
| Research | Existing browsing/search provider | Source log; no credential scraping, respect websites |
| Brand/static creative | Canva, Adobe Express, image generation tool | Account access, approved templates, rights/source tracking |
| Video | FFmpeg, OBS/screen capture, Descript or Adobe editor | Actual approved footage, install editor locally, source rights |
| Independent creator capture | OBS Studio Replay Buffer | Human selects the moment and presses Save Replay. A future local intake watches completed exports only. |
| Independent clip processing | FFmpeg, ffprobe, faster-whisper, optional WhisperX, and an editor with a verified CLI, MCP or API | Media Pipeline Engineer maintains tooling within approved limits. Video Producer owns the edit. Use the creator clip brief and approved local storage. |
| Independent YouTube upload | YouTube Data API | Future adapter maintained by Media Pipeline Engineer. Verify OAuth targets the intended channel and keep its credentials separate from app marketing. Social invokes an explicitly approved action and verifies the receipt. |
| Social publishing | Official LinkedIn/Meta/YouTube APIs or scheduler | Business app registration, authorized account scopes; human approvals |
| Opt-in email | Resend or alternative mailing provider | Verified sending domain, consent/suppression records, approved campaigns |
| CRM | Hosted CRM or private DB | Restricted access, DPA/privacy compliance, personal data **outside Git** |
| Analytics | PostHog, GA4 / Search Console | Legitimate data access; minimize PII; use aggregate reports |
| Online meetings | Google Meet/Zoom or equivalent | Founder-approved booking links, no scraping participants |

Do **not** copy provider API tokens into `.md`, `config.toml`, `.claude/agents/`, screenshots or Git. Use environment variables/OS credential store. `.env.example` is illustrative only. No `.mcp.json` with live publishing servers is included intentionally.

Check connector availability and permissions for your accounts on each device.

## Step-up permissions
1. Read-only research and analytics.
2. Draft creative and email content locally.
3. Human review + manually published assets.
4. Only after observed reliability, enable narrowly scoped **approved** tool actions with real authentication and audit logging.
5. Scheduled unattended workflows need persistent run state, independent approval enforcement, rate limits and provider retry design. Do not simply place commands into Task Scheduler and assume safe 24/7 agents.

## Creator media tooling

The [creator-clipping playbook](../playbooks/creator-clipping.md) defines the intake, rights and publication gates. Confirm supported interfaces and test tools with permitted samples before activating any automation. Keep recordings, transcripts, private agreements and tokens outside repository storage. For pinned tools and smoke checks, see the [media manifest](../media-requirements.json) and [Linux setup](../docs/linux-setup.md).
