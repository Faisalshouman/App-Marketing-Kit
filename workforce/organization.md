# Organization, routing and handoffs

**Founder** → **Head of Marketing** → 12 specialists. Marketing owns research, positioning, creative, distribution, partnerships, website copy proposals, CRM/lifecycle and measurement. Its engineering role is limited to media production tooling.

## Functional teams (no extra managers)
- Strategy: `product-marketer`, `growth-ops`
- Creative: `brand-lead`, `content-strategist`, `marketing-copywriter`, `graphic-designer`, `video-producer`, `media-pipeline-engineer`
- Acquisition: `social-community-manager`, `partnerships-outreach`
- Conversion/retention: `website-seo`, `lifecycle-crm`

## Delegation rules
- Head of Marketing is the **single orchestrator**. It selects a campaign, assigns one accountable owner, reviews evidence, and requests founder approval where necessary.
- Specialists create *bounded artifacts*. Do not spawn one agent per microstep if a single specialist can own the complete job.
- Content Strategist owns ideas; Copywriter owns scripts/captions; Graphic Designer owns static design; Video Producer owns shot list/capture/edit/export; Brand Lead owns QA; Social Manager owns publication. Avoid splitting storyboard, capture, edit and thumbnail into redundant roles.
- In a subagent-capable session, parallelize **only independent** research or assets with disjoint output paths. Keep shared `data/work-items/` updates serialized in the primary session.
- The Head does not count itself as a separate publishing reviewer. The founder's consent is required before external publication, outreach or spending. Internal brand QA is not external authorization.

## Standard campaign process
`Evidence → audience and message → idea brief → copy → static/video production → brand and factual QA → founder approval → authorized publishing → actual URLs/receipts → measurement → learning`.

Every step must have: campaign ID, accountable role, incoming artifact path, deliverable path, verification notes and next step. See `playbooks/campaign-lifecycle.md` and `docs/workboard.md`.

## Independent creator clips

Use the [creator-clipping playbook](../playbooks/creator-clipping.md) for gaming and podcast channels. The human chooses and captures the moment. Partnerships obtains creator permission, Video Production owns the entire creative edit, and Media Pipeline Engineering owns reusable technical integrations and job reliability. Copywriting supplies text, Graphic Design supplies static thumbnails, Brand reviews against the approved channel identity, and Social owns any approved upload or schedule and records the receipt. The founder approves the final render and the specific release. Growth Ops measures performance against the channel's own goals.
