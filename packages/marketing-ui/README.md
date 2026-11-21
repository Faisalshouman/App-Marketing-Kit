# App Marketing UI

A small React component package for landing pages, audience paths, contextual offers, FAQ sections and product walkthroughs. The receiving app supplies its brand, verified claims, chapter content and actions.

## Install and check

Use Node.js 20 or later and npm. From this package directory run:

```sh
npm install
npm run typecheck
npm test
npm run build
```

Add the directory as a workspace dependency or install it locally in a React app. Import components from `@app-marketing/ui` and styles from `@app-marketing/ui/style.css`. See [examples/App.tsx](examples/App.tsx).

## Adapt to your app

Pass a `Brand` with name and optional logo React element to `MarketingShell`. Override the scoped `--mk-*` variables in `src/styles.css` for the selected identity. Pass verified copy and actual price and eligibility text to the presentation components. Build walkthrough chapters for the user's complete job, including prerequisites, result, recovery and any relevant cost or availability constraints.

Audience IDs and chapter IDs are caller-authored strings. Keep IDs unique and stable. Pass custom walkthrough labels for localization. For multiple products or languages, keep separate chapter arrays and mount a fresh `JourneyPlayer` with a React `key` when changing the complete journey.

`ActionLink` enables a destination only when it exactly matches the caller's `allowedDestinations` array and passes the HTTP(S), local-path or fragment check. Supply trusted destinations from your app configuration. The component validates link shape and explicit selection. Your app remains responsible for reviewing destination ownership and content.

Walkthrough state lives in memory. The optional `onEvent` callback receives chapter navigation events. The host decides whether and how to send analytics under its consent policy.

## Components

- `MarketingShell` provides a scoped brand container.
- `MarketingHero` shows one headline, description and optional action or preview.
- `AudiencePaths` selects a host-managed audience path.
- `ContextualOffer` displays a relevant offer with price and eligibility.
- `FAQ` renders accessible disclosure rows.
- `JourneyPlayer` provides chapter navigation, ordered steps, recovery and results.
- `ActionLink` renders a host-reviewed destination.

The examples describe a fictional task app. Review responsive behavior, accessibility, translations and claims in the actual host app before publishing.

