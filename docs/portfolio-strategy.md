# Portfolio Strategy

Maintenance document for Abhishek Sachdeva's AI Product portfolio website.
Internal only — not part of the public site.

## Purpose

The portfolio targets **AI Product Manager / Product Owner** and related
opportunities. It must demonstrate:

- Product thinking (JTBD, discovery, scoping, requirements, trade-offs)
- AI/GenAI product understanding (RAG architecture, evaluation, guardrails)
- Enterprise AI experience (compliance-grade constraints, trust and traceability)
- **Working, evaluated AI products** — evidence over slideware

Everything on the public site either supports those four goals or gets cut.

## Positioning guardrails (do not violate)

1. **Do not claim a Product Manager title** where none was held. Job titles on
   the Experience section are the real, contractual titles.
2. **Do not present independent portfolio products as Deloitte/client
   products.** The Regulatory Intelligence Copilot is an independent,
   portfolio-owned product. Its case study says so explicitly.
3. **No invented employers, achievements, metrics, customers or production
   deployments.** Every number on the site is traceable back to the evaluation
   harness or is presented as a target, never as a claimed result.
4. Simulated internal policies **must always** carry the label:
   `SIMULATED INTERNAL POLICY — CREATED FOR PORTFOLIO PRODUCT`.

## Site structure

| Route | Purpose |
| --- | --- |
| `index.html` | Home: hero, about, experience overview, featured products, capabilities, contact |
| `case-study-regulatory-copilot.html` | Flagship product case study (full 30 sections) |
| `css/styles.css` | Single stylesheet, design tokens at top |
| `js/main.js` | Vanilla JS: nav, reveal-on-scroll, TOC, animated metric bars |
| `assets/` | favicon.svg, og-image (when added) |
| `docs/` | Internal maintenance docs (not linked from the site) |

## Adding a new project

1. Copy `docs/future-project-template.md` → write the full case study.
2. Create `<your-case-study>.html` reusing existing styles/components.
3. Replace one of the "Coming Soon" cards on `index.html` with the real
   project card + a link to the new case study.
4. Add the project to `docs/content-source-of-truth.md`.
5. Update the "Up next" placeholders and `og:image` if the flagship changes.

## Design conventions

- Design tokens live at the top of `css/styles.css` — change colors/type there.
- `grid--2/3/4`, `card`, `metric-card`, `flow`, `point-grid`, `decision-grid`,
  `roadmap`, `callout`, `risk-table`, `compare-table` are the building blocks.
- Keep the restrained, enterprise aesthetic. No glowing gradients, no
  skill-percentage bars, no emoji in content.
- All interactive behavior stays in `js/main.js`.

## URL placeholders still to be supplied

See `README.md` (site section) and `content-source-of-truth.md`. Search the
repository for `PLACEHOLDER` and `ABHISHEK_` / `YOUR_` tokens before deploying.