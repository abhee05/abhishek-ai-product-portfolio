# Future Project Template

Use this checklist when adding a new AI product case study to the portfolio.
Keep every project in the same shape so recruiters can compare work on equal
terms.

## 0. Positioning gate (complete before writing anything)

Answer these honestly:

- [ ] Is this an independent/portfolio product, or was it built under an
      employer? (Adjust framing and disclosure labels accordingly.)
- [ ] If employee-built: can you legally share it? No client/proprietary data?
- [ ] Are you claiming any title you did not hold?
- [ ] Are there any real metrics? If not, mark them as targets — never invent.

## 1. Facts to nail down first (source of truth)

- Product name
- Primary user (who, at what firm type)
- Core JTBD (one sentence, quoted)
- Product principles (2–4 words each)
- Domain scope (the narrow MVP slice)
- Genuine vs simulated data — and labels for the simulated portion

## 2. Architecture to document

- Pipeline: input → routing → embeddings/model → vector store → evidence
  selection → generation → output/citations
- Model(s), embedding model(s), vector DB, hosting
- Keep a human-readable description, not a code dump

## 3. Evaluation

- Dataset: number of golden questions + categories (mirror the flagship:
  direct, multi-document, internal vs regulatory, freshness/amendments,
  ambiguous, insufficient evidence, adversarial)
- Metrics: Hit@1/3/5, Recall@k, MRR for retrieval; groundedness/citation
  precision/refusal correctness for generation
- Baseline vs post-improvement (show the delta table)
- Report incomplete work as incomplete

## 4. Guardrails (map to product requirements)

Evidence-grounding · citation validation · explicit insufficient-evidence ·
source-type separation · disclosure labels · research-support disclaimer ·
human-in-the-loop / no autonomous decisions

## 5. Structure (copy from the flagship page)

Executive Summary → Problem → Target User → JTBD → Discovery → Current
Workflow → Pain Points → Goal → MVP Scope → Requirements → User Journey →
Solution → Architecture → Data Strategy → Sources → (Simulated data) →
Retrieval & Generation → Evaluation Strategy → Baseline → Failure Analysis →
Iterations → Post-improvement → Guardrails → Risks & Mitigations → Success
Metrics → Roadmap → Key Decisions → Trade-offs → Lessons → Future.

Reuse the CSS components: `metric-grid`, `flow`, `point-grid`,
`decision-grid`, `roadmap`, `callout`, `risk-table`, `compare-table`.

## 6. Site wiring

- [ ] Add the new `.html` case study
- [ ] Replace one "Coming Soon" card on `index.html`
- [ ] Update `content-source-of-truth.md`
- [ ] Update `portfolio-strategy.md` if conventions changed
- [ ] Re-run: no broken links, no PLACEHOLDER tokens left unaddressed