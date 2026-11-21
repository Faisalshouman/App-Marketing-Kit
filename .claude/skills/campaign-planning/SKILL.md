---
name: campaign-planning
description: Turn an audience hypothesis into one scoped, measurable, approval-gated marketing campaign; use when the user asks for a campaign or weekly plan.
---

# Campaign planning skill

Use for **research-to-brief** or weekly planning, not for autonomous publishing.

1. Read `workforce/organization.md`, `policy/claims-and-consent.md`, `policy/publication-and-approvals.md` and `playbooks/campaign-lifecycle.md`.
2. Inspect local state with `node tools/marketing.mjs status` and `campaign:list`. Reuse an existing campaign when appropriate; avoid duplicate overlapping initiatives.
3. Read current product evidence. Validate audience, pain, proof, one CTA and a measurable activation definition. Research claims require URLs/dates.
4. Create a campaign with `campaign:new` only if authorized for local state edits; fill `templates/campaign-brief.md` with owner, audience and constraints.
5. Delegate unique deliverables through `work:new` to specific employees, linking dependencies; do not spawn all roles for a trivial task.
6. Record unknown product features, permission requirements, and external API blockers explicitly.
7. Deliver a concise plan with artifacts, blockers, next owner and founder approvals needed. No sending, posting, spending or self-approvals.
