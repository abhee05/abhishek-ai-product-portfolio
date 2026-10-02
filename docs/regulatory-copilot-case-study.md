# Regulatory Intelligence Copilot — Case Study (Source)

This is the internal source document behind
`case-study-regulatory-copilot.html`. It captures the verified product facts
so the page can be maintained safely. It is not a substitute for the page —
it is the reference the page must not contradict.

## Status

- MVP status: shipped
- Retrieval baseline and post-improvement: measured (numbers below)
- Generation evaluation: **partially completed** (API quota constraints)

## Positioning

- Independent portfolio product (not a Deloitte/client product).
- Internal policy documents are simulated stand-ins, always labeled
  `SIMULATED INTERNAL POLICY — CREATED FOR PORTFOLIO PRODUCT`.
- Regulatory sources are genuine RBI materials.

## Product summary

- Name: Regulatory Intelligence Copilot
- Primary user: Compliance Analyst / Compliance Manager at an Indian NBFC
- JTBD: (see content-source-of-truth.md — "Core JTBD")
- Principles: Current · Applicable · Authoritative · Traceable
- MVP domain: RBI KYC / Customer Due Diligence

## Verified numbers (source of truth for all metric cards)

- Baseline: Hit@1 = 0.718, Hit@3 = 0.974, Hit@5 = 1.000, Recall@5 = 0.985, MRR = 0.843
- Post-improvement: Hit@1 = 0.872, MRR = 0.927

Improvements made (do not invent additional deltas):
amendment/freshness-aware ranking, source-type routing, better evidence
selection, citation precision improvements, retrieval-depth improvements.

## Evaluation dataset

~50 golden questions across: direct retrieval, multi-document,
internal/regulatory comparison, amendment/freshness, ambiguous,
insufficient-evidence, adversarial.

## Guardrails (map 1:1 to page)

Evidence-grounded generation · citation validation · insufficient-evidence
behavior · source-type separation · simulated-policy disclosure ·
research-support disclaimer · no autonomous compliance decisions.

## Out of scope

Regulatory filing · autonomous compliance decisions · approval workflows ·
authentication · PII processing · user-uploaded documents · multi-agent
architecture.

## How to keep the page honest

- Any change to a claimed metric must first update this file and
  `content-source-of-truth.md`.
- Do not promote "partial" evaluation to "complete" without evidence.
- Do not relabel simulated policies as real.
- Do not connect this product to Deloitte or any client.