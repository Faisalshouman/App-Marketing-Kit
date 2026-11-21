---
name: lifecycle-email
description: Draft and audit opt-in onboarding, newsletter and retention journeys; use for lifecycle messaging rather than cold mass-mail.
---

# Lifecycle email skill

1. Read `playbooks/email-lifecycle.md`, `policy/claims-and-consent.md`, real product CTA availability.
2. Verify segment definition, opt-in/legal basis, suppression rules, frequency, unsubscribe path and trigger event. Without these, draft only.
3. Write clear subject, preheader, useful body and one action, with claim and link check.
4. Avoid upsell for paid plans if paid checkout remains disabled.
5. Place draft in a campaign, not customer addresses/PII in Git. Human must approve exact audience/content before sending.
6. Mark "sent" only with authorized email provider evidence; do not infer delivery from a draft.
