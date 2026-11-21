---
name: growth-report
description: Compile evidence-based campaign and funnel reports with explicit source windows, missing-data markers and decisions.
---

# Growth report skill

1. Read `playbooks/growth-analytics.md`, the relevant campaign and `node tools/marketing.mjs report:weekly`.
2. Distinguish **workboard state** from actual web/CRM analytics. The CLI alone cannot know visitors, signups or revenue.
3. Load data only through connected authorized sources or user-supplied aggregate exports; state date range and precise definition.
4. Use `templates/weekly-report.md`, show confirmed published URLs only, track missing metrics as NOT INSTRUMENTED.
5. Explain possible channel contamination, small samples, lag and attribution limitations; avoid fabricated benchmarks.
6. Provide a next experiment or recommendation with owner, measured hypothesis and stop condition.
