# Abhishek Sachdeva — AI Product Portfolio

Clean, premium, enterprise-style portfolio for AI Product Manager / Product
Owner opportunities. Plain HTML5, CSS3 and vanilla JavaScript. Deploys
directly to Vercel. No build step, no framework, no database.

## Run locally

Serve the folder from any static server:

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080

Or use `npx serve .`

## Project layout

```
index.html                          Home: hero, about, experience, products, capabilities, contact
case-study-regulatory-copilot.html  Flagship project 01 case study (30 sections)
case-study-foodmood.html            Flagship project 02 case study (15 sections)
css/styles.css                      Design system + all components (tokens at top)
js/main.js                          Vanilla JS: nav, reveal-on-scroll, TOC, metric bars
assets/favicon.svg                  Placeholder favicon
assets/foodmood/README.md           Where to drop real FoodMood screenshots
docs/                               Internal maintenance docs (not on the public site)
  portfolio-strategy.md
  content-source-of-truth.md
  regulatory-copilot-case-study.md
  future-project-template.md
vercel.json                         Static deployment settings
README.md
```

## Case studies

Two flagship products, each with a full case study in this repository:

1. **Regulatory Intelligence Copilot** (project 01) — a grounded, traceable AI
   research copilot for RBI KYC compliance teams, with real retrieval evaluation
   numbers and transparent reporting of its partially-completed generation
   evaluation.
2. **FoodMood** (project 02) — a real-time, two-person food decision product.
   Private preference capture, three-level reactions, derived Perfect /
   Possible / Backup matches and mutual confirmation, deployed on Vercel with a
   Supabase backend.

Both are independent portfolio products — not employer or client work. Neither
claims users, revenue or adoption numbers that do not exist.

## Placeholders to replace before deploy

Search the codebase for these tokens. All are flagged in the HTML with
`<!-- PLACEHOLDER ... -->` comments.

| Token | Replace with |
| --- | --- |
| `REPLACE_WITH_LIVE_PRODUCT_URL.example.com` | Deployed Streamlit app URL (3 spots) |
| `ABHISHEK_GITHUB_HANDLE` | Abhishek's GitHub handle (hero + contact + repo links) |
| `REPLACE_WITH_REPO_NAME` | The public GitHub repo name for the copilot |
| `ABHISHEK_HANDLE` (LinkedIn) | Abhishek's LinkedIn handle (hero + contact) |
| `REPLACE_WITH_EMAIL@example.com` | A contact email |

The Vercel canonical domain (`abhishek-ai-product-portfolio.vercel.app`) and
`assets/og-image.png` are already resolved and committed.

## How to extend

- New project: follow `docs/future-project-template.md`, add a case-study
  `.html`, and swap a "Coming Soon" card on `index.html`.
- Product screenshots: capture from the live product and save into
  `assets/<project>/` as WebP at two widths, then point the case study `<img>`
  tags at them with `srcset`. See `assets/foodmood/README.md`.
- Style changes: edit the design tokens at the top of `css/styles.css`.

## Deploy to Vercel

`vercel.json` is already set for a static project:

```sh
# install vercel CLI if needed
npm i -g vercel
# from project root
vercel
```

Or push to GitHub and import the repo in the Vercel dashboard (framework
preset: **Other**. Build command: none. Output: root).

## Notes on content rules

- No PM title is claimed where none was held; job titles are the real ones.
- Both the copilot and FoodMood are independent portfolio products, not
  Deloitte/client products.
- Simulated internal policies are always labeled as such.
- All numbers on the copilot site come from the product's own evaluation
  harness; targets are marked as targets.
- FoodMood claims no usage, adoption or satisfaction metrics. Its validation
  section lists tested flows, not results, and future ideas are labeled as
  hypotheses.