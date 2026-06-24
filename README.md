# Vantage Point Financial — Advisor Career Path ("The Ascent")

A single-page, interactive site presenting the VPF advisor career path: two
parallel tracks, one shared standard, promotion by the 4 Cs.

## Stack

Plain, framework-free, **no build step**:

- `index.html` — page structure and static copy
- `styles.css` — all styling
- `app.js` — data + interactivity (mountain map, role detail, tables, view toggle)
- `assets/` — logo images

## Run it

Open `index.html` in a browser. For the fonts and assets to load reliably,
serve the folder over a local HTTP server, e.g.:

```
python3 -m http.server
# then visit http://localhost:8000
```

## Publish a live link (GitHub Pages)

This folder is ready to deploy as-is — no build step. Push **the contents of
this folder as the repo root** (so `index.html` sits at the top level), then:

1. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. That's it. The included workflow (`.github/workflows/deploy.yml`) publishes
   the site and **re-runs on every push to `main`** — so any change you or Codex
   commit goes live automatically within a minute or two. The live URL appears
   under Settings → Pages and in each Actions run.

Prefer the no-Actions route? **Settings → Pages → Source: Deploy from a branch →
`main` / `root`** also works and also auto-updates on push; the `.nojekyll` file
keeps Pages from mangling anything.

Either way you get one stable URL that's always current — share that instead of
mailing the standalone file.

## Where the content lives

**Everything editable is in `app.js`** — the `DATA` object at the top is the
single source of truth for roles, levels, the role→stage positions, the
two-chair matrix, the 4 Cs, promotion gates, scorecards, compensation, and open
decisions. Edit `DATA` to change content; the page rebuilds from it on load.

- `DATA.roles[]` — each role's mission, focus, promotion evidence, and levels
- `DATA.seats` — who currently sits in each role
- `DATA.stations` — `x` / `b` (% from left / bottom) position of each node on the map
- `DATA.matrix`, `DATA.fourCs`, `DATA.gates`, `DATA.scorecards`, `DATA.comp`, `DATA.decisions`

## Audience views

The masthead toggles between **Internal** (full detail incl. scorecards &
compensation) and **Recruiting** (public-safe). It's driven by
`document.body[data-view]`; `[data-internal]` sections are hidden in the
recruiting view via CSS.

## Notes

- `index.html` contains an inert `<template id="__bundler_thumbnail">` used only
  by the standalone-bundler export; it renders nothing and can be ignored.
- Compensation figures and several role names are placeholders pending
  leadership confirmation (see the "Open decisions" section).
