# Landing Pages Showcase

Six responsive, animated landing pages built with **React 19, TypeScript, Vite, Tailwind CSS v4, Motion and Lenis**.
Each page has its own type system and one signature interactive feature.

**Live demo:** `https://<your-github-username>.github.io/<repo-name>/`

![Showcase](showcase/previews/creatix.jpg)

| Page | Type | Signature feature | Fonts |
|---|---|---|---|
| [Creatix](creatix) | Creative agency | Custom cursor that reacts to links and buttons | Clash Display + Satoshi |
| [FinGuard](finguard) | Fintech | 3D card stack that tilts with the mouse + live savings calculator | Syne + General Sans |
| [Petal Power](petal-power) | Plant e-commerce | "Plant Match" quiz that recommends a plant, plus cart and search | Fraunces + DM Sans |
| [Base Club](base-club) | Web3 / SocialFi | Live creator leaderboard with real-time counters | Unbounded + Space Grotesk + JetBrains Mono |
| [Nicepay](nicepay) | SaaS finance | Serif accent typography, pricing toggle, dashboard mockups | Geist + Instrument Serif |
| [Lumora](lumora) | Design studio | Page loader, liquid hero reveal, live clock | Onest |

### Shared polish (every page)
- Smooth scrolling (Lenis); page scroll pauses while a modal is open
- Scroll progress bar and a back-to-top button
- Scroll-triggered reveal animations
- Respects `prefers-reduced-motion`
- Mobile layouts checked at 390px, with no horizontal overflow
- SEO and Open Graph meta tags, plus a custom favicon for each page

## Run locally

```bash
npm install                 # installs all 6 projects (npm workspaces)
npm run dev:creatix         # or dev:finguard, dev:petal-power, dev:base-club, dev:nicepay, dev:lumora
```

Open http://localhost:3000.

## Build

```bash
npm run build               # builds every page and collects them into ./site
npm run preview             # serves ./site at http://localhost:4000
npm run previews            # (optional) refreshes gallery thumbnails; needs the preview server running
```

## Deploy (GitHub Pages)

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds all pages and publishes them.
One-time setup: **Repo → Settings → Pages → Source: GitHub Actions**.

## Structure

```
├── base-club/  creatix/  finguard/  lumora/  nicepay/  petal-power/   ← one Vite app each
├── showcase/        ← gallery home page + preview images
├── scripts/         ← build helpers (collect site, previews, html meta)
└── .github/workflows/deploy.yml
```

## Credits

The UI concepts are inspired by community design shots shared on design platforms. I rebuilt every page in React, then added the features listed above: animations, interactions, responsive fixes, typography changes and new sections.
Photos are from [Unsplash](https://unsplash.com).
