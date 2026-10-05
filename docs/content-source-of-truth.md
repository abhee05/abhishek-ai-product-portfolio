# Content Source of Truth

Single source of truth for every factual claim on the public site.
Internal only — update this file before changing claims anywhere else.

## Section: Legal facts (unchanged by any content decision)

### Job history (as shown on index.html)

| Role | Company | Dates |
| --- | --- | --- |
| Consultant — AI/ML | Deloitte Shared Services India | Oct 2025 – Present |
| Business Analyst | Wipro HR Services Pvt Ltd | Jul 2019 – Apr 2022 |
| Specialist | HCL Technologies | Feb 2015 – May 2019 |

Current (as of site build): the Deloitte role is in progress ("Present").
The descriptions are product-oriented summaries of responsibilities; they are
not claims of a PM title or of specific delivered outcomes.

### Positioning restrictions

- No PM title claimed anywhere.
- The Regulatory Intelligence Copilot is an independent portfolio product.
- No invented metrics, customers, employers or production deployments.

## Section: Flagship product identity

- **Name:** Regulatory Intelligence Copilot
- **Type:** AI-assisted regulatory research product (portfolio-owned)
- **MVP domain:** RBI KYC / Customer Due Diligence
- **Primary user:** Compliance Analyst / Compliance Manager at an Indian NBFC
- **Core JTBD:**
  > "When I receive a compliance-related business query, I want to quickly
  > identify the current applicable regulatory and internal requirements,
  > along with their authoritative sources, so that I can provide a reliable
  > and traceable response."
- **Product principles:** Current · Applicable · Authoritative · Traceable

## Section: Verified evaluation numbers (do not alter)

Baseline retrieval (`~50` golden questions):

| Metric | Value |
| --- | --- |
| Hit@1 | 0.718 |
| Hit@3 | 0.974 |
| Hit@5 | 1.000 |
| Recall@5 | 0.985 |
| MRR | 0.843 |

Post-improvement retrieval:

| Metric | Value |
| --- | --- |
| Hit@1 | 0.872 |
| MRR | 0.927 |

Reported improvements (qualitative, do not invent numeric deltas for these):
amendment/freshness-aware ranking, source-type routing, better evidence
selection, citation precision improvements, retrieval-depth improvements.

**Generation evaluation:** only partially completed due to API quota
constraints. The site states this transparently and must never invent
generation scores.

## Section: Regulatory corpus (genuine RBI documents)

1. RBI Master Direction — Know Your Customer (KYC) Directions, 2016
2. KYC Amendment, November 2024
3. KYC Amendment, June 2025
4. RBI KYC FAQs

## Section: Simulated internal policies

Four simulated NBFC policies. Always displayed with the label
`SIMULATED INTERNAL POLICY — CREATED FOR PORTFOLIO PRODUCT`:

1. Customer Due Diligence Policy (Simulated)
2. Risk-Based Approach & Client Risk Categorization Policy (Simulated)
3. KYA / Ongoing Monitoring Policy (Simulated)
4. Enhanced Due Diligence / PEP Policy (Simulated)

## Section: Architecture (as documented)

Question → query understanding/source routing → BGE embeddings
(BAAI/bge-base-en-v1.5) → Chroma vector retrieval → evidence selection →
Groq LLM (openai/gpt-oss-120b) → grounded response → citations/supporting
evidence.

Frontend: Streamlit. Deployment: Streamlit Community Cloud.

## Section: MVP scope (in / out)

**In scope:** RBI KYC corpus, four simulated policies, grounded Q&A with
citations, evidence selection across regulatory/internal, freshness-aware
ranking, insufficient-evidence behavior, evaluation harness.

**Out of scope (by design):** regulatory filing, autonomous compliance
decisions, approval workflows, authentication, PII processing, user-uploaded
documents, multi-agent architecture.

## Section: Flagship product 02 identity — FoodMood

- **Name:** FoodMood
- **Type:** Real-time two-person social decision product (portfolio-owned)
- **Live product:** https://food-mood-ashy.vercel.app/
- **GitHub:** https://github.com/abhee05/Food
- **Primary users:** exactly two participants per private session
- **Core hypothesis:**
  > If two people rate the same food options privately, and the product shows
  > only their overlap, the decision collapses from a negotiation into a
  > shortlist both can accept.
- **Principles:** Private · Mutual · Confirmed · No forcing
- **Journey:** Home → Create Session → Invite/Join → Two-Person Lobby →
  Rating → Waiting → Match Reveal → Proposal → Accept/Reject →
  Final FoodMood → Another Round
- **Reactions:** craving it / maybe / not today
- **Match rules:** craving+craving = Perfect; craving+maybe (either order) =
  Possible; maybe+maybe = Backup; any "not today" = No Match. Ordered
  Perfect → Possible → Backup. Individual reactions are never revealed.
- **Derivation principle:** matches are derived from reactions, never stored as
  redundant match records.
- **Entities:** food_option, session, participant, round, reaction
- **Stack:** React, TypeScript, Vite (front); Supabase, PostgreSQL, anonymous
  auth, RLS, secure RPC functions (back); GitHub + Vercel (deploy)
- **Tools:** Google Stitch (UX/wireframing), AI-assisted workflow,
  Cursor/OpenCode (implementation and troubleshooting). AI tools are
  accelerators only — never credited with the product decisions.

**Claims discipline:** FoodMood has no user base. Never state usage, adoption,
revenue, satisfaction or match-rate numbers. The validation section lists the
flows that were functionally tested in real two-browser sessions — no
quantitative results. "What I'd explore next" items are hypotheses only.

**Screenshots:** real captures of the deployed MVP are committed in
`assets/foodmood/` as WebP at two widths each, referenced with `srcset` by
`case-study-foodmood.html`. Never substitute stock imagery or design mockups
for product UI. Regenerate `assets/og-image.png` from
`06-final-foodmood-1440.webp` if that capture changes.

## Section: URL / account placeholders

`README.md` (site section) contains the authoritative list. These values must
be supplied by Abhishek before deployment:

- Live product URL (streamlit app)
- GitHub repo URL
- LinkedIn profile handle
- GitHub profile handle
- Contact email