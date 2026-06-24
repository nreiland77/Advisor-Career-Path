AGENTS.md — working agreement for Codex
You (Codex) are the sole writer to this repository. You implement changes and
commit them to `main`. Every push to `main` auto-deploys to the live site via
GitHub Pages, so a commit = a release. Treat `main` as always-shippable.
What this is
A single-page, framework-free site presenting the Vantage Point Financial advisor
career path ("The Ascent"). No build step, no dependencies, no package manager.
`index.html` — structure and static copy
`styles.css` — all styling
`app.js` — data + interactivity
`assets/` — logos
Live site: GitHub Pages (Settings → Pages). The included
`.github/workflows/deploy.yml` publishes on every push to `main`.
Where content lives — edit `app.js`
The `DATA` object at the top of `app.js` is the single source of truth for all
content: `roles[]`, `seats`, `stations` (map node x/y positions), `matrix`,
`fourCs`, `gates`, `scorecards`, `comp`, and `decisions`. To change wording,
numbers, roles, or levels, edit `DATA` — the page rebuilds from it on load. Only
touch the rendering functions below `DATA` when changing layout/behavior, not copy.
How change requests arrive
Requests come as plain-English descriptions (often relayed from the user or from
their design collaborator working in a separate mockup tool). For each request:
Make the smallest change that satisfies it. Don't redesign or "improve"
unrelated parts.
Keep the existing visual vocabulary: navy `#001f60`, gold `#b9852b`, mint
`#2f7d6d`, warm paper `#f7f4ee`; fonts Newsreader (serif headings) + Hanken
Grotesk (body). Don't introduce new colors or fonts without being asked.
Preserve the Internal vs. Recruiting view system (`body[data-view]` +
`[data-internal]` sections).
Hard rules — don't break the deploy
Keep all asset/link paths relative (`assets/…`, `styles.css`, `app.js`).
Absolute or root-relative (`/…`) paths break on the Pages subpath URL.
No build tooling. Plain HTML/CSS/vanilla JS only. If you're tempted to add
npm/bundlers/frameworks, stop and ask first.
Don't delete `.nojekyll` or `.github/workflows/deploy.yml`.
Leave the inert `<template id="__bundler_thumbnail">` in `index.html` alone.
Before committing
Open `index.html` locally (or via `python3 -m http.server`) and confirm the
page renders, the mountain map nodes are clickable, the role card updates, and
the Internal/Recruiting toggle works.
Write a clear commit message describing the change.
Status notes
Compensation figures and several role names are placeholders pending leadership
confirmation (see the "Open decisions" section). Footer reads "Private internal
draft" — keep unless told otherwise.
