# Review, approval and publication authority

## Default mode: DRAFT-ONLY
All outgoing communications, social posts, outreach messages, paid placements, uploads and account/permission changes are **blocked by default**. Creating a campaign does not grant permission to post. Never infer approval from silence.

## Gates
1. **Content gate** — authentic claims, sources, spelling, CTA, platform requirements, licensing, privacy.
2. **Brand gate** — logo source, palette, typography, rendered safe-area legibility, captions/alt text, accessibility.
3. **Founder gate** — the specific artifact and target channels are approved by the human owner. Review exact render and recipient scope, not only a text summary.
4. **Execution** — use authorized platform integration or the founder posts manually. Verify the provider receipt/real public URL.
5. **Evidence** — only then record `work:publish ... --url ...`, never as a substitute for sending.

The CLI's `work:approve` stores a manually entered approval note; it **does not authenticate** that the requester is the founder. Agents are instructed never to invoke this command themselves. For unattended operation, integrate with a secure, independently authenticated approval service before granting any side-effecting tool access.

## Irreversible actions
- No email broadcast, new social post, cold outreach, paid spend, deletion, subscription or brand rework without separately scoped human approval.
- Never modify the application source in this repo; create a website change request for the founder's engineering workflow.
- If an action fails, leave the item unconfirmed; do not mark success. Log blocker and propose recovery.
