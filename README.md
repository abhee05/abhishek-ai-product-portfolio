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
case-study-regulatory-copilot.html  Flagship product case study (30 sections)
css/styles.css                      Design system + all components (tokens at top)
js/main.js                          Vanilla JS: nav, reveal-on-scroll, TOC, metric bars
assets/favicon.svg                  Placeholder favicon
docs/                               Internal maintenance docs (not on the public site)
  portfolio-strategy.md
  content-source-of-truth.md
  regulatory-copilot-case-study.md
  future-project-template.md
vercel.json                         Static deployment settings
README.md
```

## Case study

The featured product — **Regulatory Intelligence Copilot** — is a grounded,
traceable AI research copilot for RBI KYC compliance teams at Indian NBFCs,
with real retrieval evaluation numbers and transparent reporting of its
partially-completed generation evaluation.

## Placeholders to replace before deploy

Search the codebase for these tokens. All are flagged in the HTML with
`<!-- PLACEHOLDER ... -->` comments.

| Token | Replace with |
| --- | --- |
| `YOUR_VERCEL_DOMAIN` | The project's Vercel domain (canonical URL + OG image in `index.html` and the case study) |
| `REPLACE_WITH_LIVE_PRODUCT_URL.example.com` | Deployed Streamlit app URL (3 spots) |
| `ABHISHEK_GITHUB_HANDLE` | Abhishek's GitHub handle (hero + contact + repo links) |
| `REPLACE_WITH_REPO_NAME` | The public GitHub repo name for the copilot |
| `ABHISHEK_HANDLE` (LinkedIn) | Abhishek's LinkedIn handle (hero + contact) |
| `REPLACE_WITH_EMAIL@example.com` | A contact email |

Also optional: add a real `assets/og-image.png` and reference it in the OG
tags.

## How to extend

- New project: follow `docs/future-project-template.md`, add a case-study
  `.html`, and swap a "Coming Soon" card on `index.html`.
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
- The copilot is an independent portfolio product, not a Deloitte/client
  product.
- Simulated internal policies are always labeled as such.
- All numbers on the site come from the product's own evaluation harness;
  targets are marked as targets.