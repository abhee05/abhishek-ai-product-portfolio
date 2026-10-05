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

1. **Positioning may target PM roles; job titles may not be inflated.** The
   hero targets `Product Manager | Product Owner | AI & GenAI Products` because
   that is the role being applied for. Every row in the Experience section still
   uses the real resume title (Product Owner, Business Analyst, Network
   Engineer, Technical Support Consultant). Never invent a PM title for a past
   employer, and never backdate a promotion.
2. **Do not present independent portfolio products as Deloitte/client
   products.** Both the Regulatory Intelligence Copilot and FoodMood are
   independent, portfolio-owned products. Their case studies say so
   explicitly.
3. **No invented employers, achievements, metrics, customers or production
   deployments.** Every number on the site is traceable back to the evaluation
   harness or is presented as a target, never as a claimed result. FoodMood has
   no user base, so it must never carry usage, adoption, revenue or
   satisfaction figures — only the list of flows that were functionally
   tested.
4. **Future ideas are labeled as hypotheses**, never as shipped functionality.
5. Simulated internal policies **must always** carry the label:
   `SIMULATED INTERNAL POLICY — CREATED FOR PORTFOLIO PRODUCT`.
6. **AI tools are accelerators, not authors.** Credit tooling for
   implementation and troubleshooting; product decisions and framing stay with
   Abhishek.

## Site structure

| Route | Purpose |
| --- | --- |
| `index.html` | Home: hero, products, capabilities, approach, experience, contact |
| `case-study-regulatory-copilot.html` | Flagship project 01 case study (full 30 sections) |
| `case-study-foodmood.html` | Flagship project 02 case study (15 sections) |
| `css/styles.css` | Single stylesheet, design tokens at top |
| `js/main.js` | Vanilla JS: nav, reveal-on-scroll, TOC, animated metric bars |
| `assets/` | favicon, og-image, per-project screenshot folders, resume PDF |
| `docs/` | Internal maintenance docs (not linked from the site) |

## Adding a new project

Only completed work is published, so there is no placeholder flow and no "Coming
Soon" slot to swap out. A new project means all of these, in order:

1. Write the case study as `<project>.html`, reusing the existing
   components (`.cs-section`, `.case-arc`, `.flow`, `.decision-grid`,
   `.compare-table`, `.callout`).
2. Add the project to `docs/content-source-of-truth.md` first — verified facts
   before public claims.
3. Add an `<article class="work">` block to `index.html`, with the real
   screenshot, the product's three strongest facts, its product decisions and
   its stack.
4. Update `og:image` only if the flagship product changes.

## Design conventions

- Design tokens live at the top of `css/styles.css` — change colors/type there.
- Homepage building blocks: `.work`, `.case-arc`, `.capability-grid`, `.role`,
  `.outcome-grid`, `.contact-card`, `.pipeline`, `.deltas`.
- Case-study building blocks: `.cs-section`, `.case-arc`, `.flow`,
  `.point-grid`, `.decision-grid`, `.roadmap`, `.callout`, `.risk-table`,
  `.compare-table`, `.metric`.
- Keep the restrained, enterprise aesthetic. No glowing gradients, no
  skill-percentage bars, no emoji in content.
- All interactive behavior stays in `js/main.js`.

## No placeholder tokens

The public site ships zero placeholder tokens. Before any deploy, confirm it
stays that way:

```sh
grep -rniE "PLACEHOLDER|ABHISHEK_|YOUR_|REPLACE_WITH|Coming Soon|Project 0[3-9]" \
  --include="*.html" --include="*.css" --include="*.js" .
```

Every published channel is real: the Vercel domain, both live product URLs, both
GitHub repositories, the GitHub profile and the contact email. LinkedIn is
intentionally unpublished — add it only when a real URL exists, never as a stub
or a disabled control.