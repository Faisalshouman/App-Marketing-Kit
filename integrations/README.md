# External tool activation plan (none connected by the ZIP)

The local workboard is functional without any network service. Add integrations in this order **after the founder approves vendor choice, access scope and cost**:

| Workflow | Potential tool | Required setup / boundary |
| --- | --- | --- |
| Research | Existing browsing/search provider | Source log; no credential scraping, respect websites |
| Brand/static creative | Canva, Adobe Express, image generation tool | Account access, approved templates, rights/source tracking |
| Video | FFmpeg, OBS/screen capture, Descript or Adobe editor | Actual approved footage, install editor locally, source rights |
| Social publishing | Official LinkedIn/Meta/YouTube APIs or scheduler | Business app registration, authorized account scopes; human approvals |
| Opt-in email | Resend or alternative mailing provider | Verified sending domain, consent/suppression records, approved campaigns |
| CRM | Hosted CRM or private DB | Restricted access, DPA/privacy compliance, personal data **outside Git** |
| Analytics | PostHog, GA4 / Search Console | Legitimate data access; minimize PII; use aggregate reports |
| Online meetings | Google Meet/Zoom or equivalent | Founder-approved booking links, no scraping participants |

Do **not** copy provider API tokens into `.md`, `config.toml`, `.claude/agents/`, screenshots or Git. Use environment variables/OS credential store. `.env.example` is illustrative only. No `.mcp.json` with live publishing servers is included intentionally.

The ZIP cannot automatically make Claude/Codex tools connected to your third-party accounts. Confirm connector availability and permissions in each host separately.

## Step-up permissions
1. Read-only research and analytics.
2. Draft creative and email content locally.
3. Human review + manually published assets.
4. Only after observed reliability, enable narrowly scoped **approved** tool actions with real authentication and audit logging.
5. Scheduled unattended workflows need persistent run state, independent approval enforcement, rate limits and provider retry design. Do not simply place commands into Task Scheduler and assume safe 24/7 agents.

## Creator media tooling

Use the pinned media-requirements.json and docs/media-setup.md. Run local or synthetic checks first. OBS replay capture is human-controlled. Cloud calls, account connections and publication follow workspace approvals.
