# Local marketing workboard (zero-dependency)

`node tools/marketing.mjs` stores one JSON file per work item under `data/work-items/` and one campaign JSON record per campaign under `data/campaigns/`. This is a starter for a **single coordinating writer** (the primary marketing session). It is versionable but is not a multi-user transactional database; never have parallel agents update the same item.

## Commands
```
help
status
campaign:list
campaign:new --slug NAME --title TEXT --audience TEXT --goal TEXT
work:list [--campaign SLUG] [--owner ROLE_ID] [--status STATUS]
work:show MKT-001
work:new --campaign SLUG --owner ROLE_ID --kind KIND --title TEXT [--depends MKT-001,MKT-002]
work:start MKT-001
work:submit MKT-001 --artifact RELATIVE_FILE_PATH
work:revise MKT-001 --note TEXT
work:approve MKT-001 --by Founder --note TEXT          # MANUAL HUMAN STEP ONLY
work:complete MKT-001
work:publish MKT-001 --url https://verified-url --by Founder  # record only; NO sending
work:measure MKT-001 --metric activated_users --value 12 --source https://analytics-source
work:block MKT-001 --note TEXT
work:resume MKT-001
report:weekly
```

## State machine
`backlog → in_progress → in_review → approved → done` (for internal work); approved external-facing kinds may be `approved → published → measured`. A submitted artifact path must already exist inside the workspace. Dependencies must be in a reviewed/complete state before work starts. `blocked → in_progress` via `work:resume`. `work:approve` is never for automated agents.

Approval is manual **operational bookkeeping**, not authentication. For unattended agent publication, use a secure externally authenticated approval service with scoped credentials and auditable receipts. A `published` record simply indicates a human entered a verified real URL; no social media API calls exist in this starter.

## Work item kinds
`research`, `idea`, `copy`, `design`, `video`, `social`, `seo`, `website-copy`, `partnership`, `outreach`, `email`, `analytics`, `brand-review`, `operations`.

## Data governance
Do not commit personal contact details, email lists, private customer content, account records or API keys. Only pseudonymous work IDs, public references and aggregate campaign metrics belong here. Use `data/private/` for temporary local sensitive data if necessary; `.gitignore` excludes that folder, but a real secure CRM is better.
