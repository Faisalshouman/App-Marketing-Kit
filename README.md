# App Marketing Kit

A reusable marketing workspace for consumer and business apps, mobile and desktop products, developer tools, marketplaces, and internal apps. It includes 13 project-local Codex and Claude Code roles, shared skills, a zero-dependency Node.js workboard, campaign templates, and optional React marketing components.

## Get updates

Clone the [public repository](https://github.com/Faisalshouman/App-Marketing-Kit) for ongoing updates:

```powershell
git clone https://github.com/Faisalshouman/App-Marketing-Kit.git
```

Run `git fetch origin` to see new commits and `git pull --ff-only` to update an unchanged local branch. Use a separate branch for your own changes.

Maintainers validate changes before publishing them to the repository. Keep operational records and personal data in the appropriate private workspace.

## Independent creator clipping

Use the [media setup guide](docs/media-setup.md) and [pinned requirements](media-requirements.json) to install the media toolchain and skills. The [skill map](workforce/skill-map.md), [creator playbook](playbooks/creator-clipping.md) and [clip brief](templates/creator-clip-brief.md) cover gaming, livestream and podcast footage. The operator supplies selected, permissioned footage. The Video Producer owns the creative edit, the Media Pipeline Engineer owns the tooling, and Social handles only separately approved publishing. Use the appropriate channel identity and measure creator clips independently of any app campaign.

## Start here

1. Open a terminal in this folder. Use Node.js 20 or later for the local workboard.
2. Run `npm run validate`, `npm test`, and `npm run status`.
3. Fill in [the app profile](templates/app-profile.md) and use [the channel and activation guide](playbooks/app-marketing-strategy.md) to choose one audience, channel, and first valuable outcome.
4. Fill in [the brand guide](brand/brand-guidelines.md), [claims register](templates/claims-register.md), and [first campaign](campaigns/first-value-demo/brief.md) with verified product facts.
5. Start Codex or Claude Code from this directory if you use either. The agents are project-local. The workboard also works without an agent or service credentials.

> Act as Head of Marketing. Read AGENTS.md, the supplied app profile, and the first-value campaign. Run `npm run status`. Return a one-week plan for one verified user journey. Draft locally and preserve owner control over approvals and external actions.

## What’s inside

- [Workforce](workforce/README.md) and [operating policies](policy/agent-execution.md) define roles, ownership, and approvals.
- [Playbooks](playbooks/app-marketing-strategy.md) and [templates](templates/campaign-brief.md) cover strategy, creative, distribution, lifecycle, partnerships, and measurement.
- [Journey tutorial](templates/journey-tutorial.md) and [conversion experiment](templates/conversion-experiment.md) templates cover first value, repeat use, upsell, and cross-sell.
- [Workboard instructions](docs/workboard.md) cover creating campaigns and recording reviews, publication receipts, and aggregate metrics. The seeded campaign is a blank draft, with no publication or approvals.
- [React marketing components](packages/marketing-ui/README.md) are optional. See the package for its separate setup and runtime requirements.
- [Integration notes](integrations/README.md) cover optional service connections. The workspace does not require credentials.

Run `npm run sync` after changing canonical role or skill instructions. Optional media utilities require FFmpeg. See [Quickstart](docs/QUICKSTART.md) for the local workflow.
