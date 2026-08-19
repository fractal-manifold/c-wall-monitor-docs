# TokenMonitor — public site

Public landing + tutorial site for the TokenMonitor desk display.
Source for <https://tokenmonitor.dev>.

## Stack

**Astro.** There is a build step — the pre-Astro "just open the HTML"
instructions that used to live here no longer work.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/, 7 pages
npm run preview  # serve the built output
```

## Structure

```
src/pages/
  index.astro         Landing
  how-it-works.astro
  setup.astro         Setup tutorial + custom-panel reference
  usage.astro         Dashboard / settings / alerts walkthrough
  plugin.astro        Per-CLI install (Claude / Codex / Antigravity)
                      + skills & MCP-tool reference (#skills)
  faq.astro
  404.astro

src/layouts/, src/components/   Shared shell + partials
public/assets/
  lead.jpg, lead-mobile.jpg     Hero shots (lead.jpg is the default og:image)
  device-screens.js             Renders the 480×480 device mockups
  desk-loop.{mp4,webm}          Hero loop
  logo.png, logo2.png
public/CNAME                    tokenmonitor.dev
```

## Deploy

Push to `main` → GitHub Actions builds with Astro and publishes `dist/`
via `actions/deploy-pages`. Workflow: `.github/workflows/deploy.yml`.

## Editing content

See `CLAUDE.md` in this directory for the content rules and for what must
NOT be published (firmware internals, secrets, unmeasured numbers).

`BRIEF.md` is the **original pre-launch positioning brief** and is kept for
history only. It predates the rename, the desk-top framing and the current
install flow, so do not copy install commands or product claims out of it —
`CLAUDE.md` and the live pages are the current source of truth.

## Relationship with the firmware repo

This repo is public and is mounted as a submodule at `website/` inside the
private firmware repo (`fractal-manifold/tokenmonitor`). The firmware itself
stays private; only the user-facing site lives here.

## License

Documentation © Fractal Manifold S.L. — all rights reserved.
