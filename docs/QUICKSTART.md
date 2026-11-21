# Quickstart

1. Extract the ZIP and open a terminal in the extracted kit folder.
2. Run `node --version`, `npm run validate`, `npm test`, and `npm run status`. The local workboard has zero external dependencies.
3. Copy and fill in [the app profile template](../templates/app-profile.md). Complete the [brand guide](../brand/brand-guidelines.md) for that app.
4. Use [the strategy playbook](../playbooks/app-marketing-strategy.md) to choose a first campaign. Adapt [the draft campaign](../campaigns/first-value-demo/brief.md) or run `node tools/marketing.mjs campaign:new --slug my-campaign --title "My campaign" --audience "My audience" --goal "first-value"`.
5. Track work in [the local workboard](workboard.md). Start the installed `codex` or `claude` CLI here if you want agent support. Use `./START-HERE.ps1` as an optional PowerShell launcher.

Use a separate workspace copy for each app when you need separate storage, brand defaults or approval ownership.
