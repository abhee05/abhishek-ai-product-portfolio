# Abhishek Sachdeva — Product Manager Portfolio

Portfolio for **Product Manager / Product Owner — AI & GenAI Products** roles.
Plain HTML5, CSS3 and vanilla JavaScript. Deploys directly to Vercel.
No build step, no framework, no database.

The site is evidence-first: two shipped, independently-owned products with full
case studies, and an experience section that states real scope, metrics and
outcomes from employer roles.

## Run locally

Serve the folder from any static server:

```sh
python3 -m http.server 8080
```

Then open http://localhost:8080

Or use `npx serve .`

## Project layout

```
index.html                          Home: hero, products, capabilities, approach, experience, contact
case-study-regulatory-copilot.html  Flagship project 01 case study (30 sections)
case-study-foodmood.html            Flagship project 02 case study (15 sections)
css/styles.css                      Design system + all components (tokens at top)
js/main.js                          Vanilla JS: nav, reveal-on-scroll, TOC, metric bars
assets/favicon.svg                  Favicon
assets/og-image.png                 Social preview image
assets/foodmood/                    Real deployed FoodMood screenshots (WebP, 720w + 1440w)
assets/Abhishek_Sachdeva_Product_Manager_Resume.pdf
                                    Resume — see "Outstanding manual steps"
docs/                               Internal maintenance docs (not on the public site)
  portfolio-strategy.md
  content-source-of-truth.md
  regulatory-copilot-case-study.md
vercel.json                         Static deployment settings
README.md
```

## Products

Two shipped products, each with a full case study in this repository:

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

## Contact channels

All public contact channels are real and committed. There are no placeholder
tokens in the shipped HTML.

| Channel | Where |
| --- | --- |
| Email | `mailto:abhisheksachdeva05@gmail.com` (hero + contact) |
| GitHub | `https://github.com/abhee05` (hero + contact) |
| Resume | `assets/Abhishek_Sachdeva_Product_Manager_Resume.pdf` (nav, hero, contact — all open in a new tab) |

LinkedIn is intentionally **not** published yet: no button, no link and no
placeholder token. When the profile is ready, add it to the hero link row and
the contact list. Do not ship a stub URL or a disabled button in the meantime.

The resume CTA is defensive by design: `js/main.js` probes the PDF with a `HEAD`
request and hides every resume link if it 404s, so a missing or renamed asset can
never become a dead link in production.

## How to extend

- Adding a project is intentionally manual: only completed work is shown, so a
  new product means writing its case study first, then adding an `<article
  class="work">` block to `index.html`. No placeholder slots exist.
- Product screenshots: capture from the live product and save into
  `assets/<project>/` as WebP at two widths, then point the case-study `<img>`
  tags at them with `srcset`. See `assets/foodmood/README.md`.
- Style changes: edit the design tokens at the top of `css/styles.css`.
- Position changes: read `docs/content-source-of-truth.md` first — it lists
  which claims are verified and which are off-limits.

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