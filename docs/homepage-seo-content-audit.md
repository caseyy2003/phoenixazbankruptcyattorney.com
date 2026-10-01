# Homepage SEO and Conversion Audit

**Audit date:** September 30, 2026  
**Page:** `https://www.phoenixazbankruptcyattorney.com/`  
**Scope:** discovery and implementation planning only; no homepage content, metadata, schema, styles, or routes are changed in this phase.

## Method and verification status

This inventory compares the homepage source with the statically rendered production build. The repository builds the homepage as a static page. Direct requests to the public homepage and the supplied media URLs were also attempted, but this environment's outbound proxy returned `403 CONNECT tunnel failed`; the browsing service returned `401 Unauthorized`. Consequently:

- implementation facts below are verified from the source and local production render;
- no claim is made that the inaccessible public deployment is byte-for-byte identical to this branch;
- media descriptions are deliberately marked **draft pending source verification** and must not be published until each article can be opened and Casey's contribution checked in context; and
- implementation should not begin until the owner approves this preservation plan and the live/source discrepancy check is complete.

## A. Existing SEO inventory

### Metadata and indexability

| Element | Current implementation | Assessment |
| --- | --- | --- |
| URL | `https://www.phoenixazbankruptcyattorney.com/` | Preserve exactly. |
| Title | `Phoenix, AZ Bankruptcy Lawyer \| Yontz Law, PLLC` | Strong commercial/local relevance. **Keep unchanged initially.** |
| Meta description | `Trusted Phoenix bankruptcy lawyer at Yontz Law, PLLC. Get help with chapter 7 or chapter 13, stop garnishments, and request a free consultation.` | Covers entity, location, primary chapters, garnishment, and consultation intent. “Trusted” is generic but a redesign alone is not a reason to risk changing a ranking snippet. **Keep initially.** |
| Canonical | `https://www.phoenixazbankruptcyattorney.com/` | Self-referencing and consistent with the page URL. **Keep.** |
| Robots | `index,follow` | Correct. Also, `public/robots.txt` allows crawling and points to the sitemap. |
| Language | `<html lang="en">`; schema uses `en-US` | Consistent. |
| Rendering | Statically generated Next.js page | Search-accessible and favorable for performance. Preserve SSR/static output. |

### Heading inventory

**H1 (one):**

1. Bankruptcy Lawyers in Phoenix, AZ

The source H1 is a close-match phrase already aligned with the ranking queries. The hero contains a visual Yontz Law logo and CTA but no hero heading. Moving the existing H1 into the hero is safer than changing its wording during the first design stage.

**H2 headings, in current order:**

1. At-a-Glance: What to Expect After You Submit a Consultation Request
2. Why Phoenix Residents Reach Out About Bankruptcy
3. Phoenix Bankruptcy Guidance Backed by 18+ Years of Experience
4. Related Arizona Bankruptcy Topics
5. Bankruptcy Paths Phoenix Residents Typically Compare
6. Phoenix-Specific Mistakes That Can Complicate a Bankruptcy Case
7. What Clients Say
8. Arizona Bankruptcy Guidance and Resources
9. Serving Phoenix and Clients Across Arizona
10. Bankruptcy Help in Phoenix and Nearby Arizona Cities
11. Find Our Phoenix Office
12. What to Have Ready Before Reaching Out
13. Request a Free Bankruptcy Consultation
14. Phoenix Bankruptcy FAQs
15. Bankruptcy Help Across Arizona

**H3 headings:**

1. How Do I Know If Bankruptcy Is the Right Option in Phoenix, AZ?
2. Can Bankruptcy Stop Wage Garnishment or a Lawsuit in Phoenix?
3. Can I Keep My Car or Home If I File Bankruptcy in Phoenix?
4. How Fast Can a Phoenix Bankruptcy Case Be Filed If I Have a Garnishment or Lawsuit?
5. What Should I Gather for a Phoenix Bankruptcy Consultation?
6. Phoenix Metro Area
7. Other Arizona Cities We Serve

The hierarchy is structurally valid, but the 15 H2s produce a long, editorial page. Several can be merged without deleting their subject matter. Exact-match Phoenix wording is already frequent; the redesign should reduce visual repetition rather than add more exact-match headings.

### Major sections, search intent, and keyword coverage

1. **Visual hero:** Phoenix desert skyline, inline Yontz Law logo, “Phoenix Bankruptcy Lawyers” tagline, and free-consult CTA.
2. **Commercial introduction:** Defines the audience and names wage garnishments, lawsuits, repossession threats, creditor calls, paycheck/transportation protection, and alternatives to bankruptcy.
3. **Consultation expectations:** Arizona exemptions, honest advice, discretion, and virtual/in-person options.
4. **Debt/problem inventory:** Credit-card debt, medical bills, lawsuits and garnishments, foreclosure, vehicle repossession, and business-related personal debt.
5. **Attorney experience:** Casey Yontz, 18+ years, thousands of Arizona clients, timing/documentation/pre-filing decisions, and an about-page link.
6. **Related topics:** Automatic stay/creditor relief, Arizona exemptions, Chapter 7, and Chapter 13.
7. **Chapter comparison:** Substantive Chapter 7 and Chapter 13 summaries and links; a smaller Chapter 11 paragraph.
8. **Pre-filing mistakes:** Active garnishment, recent credit use, insider transfers, lawsuit deadlines, lump-sum deposits, and retirement withdrawals.
9. **Testimonials:** Four attributed excerpts (Tish; Paul & Maria; Melanie; Sarah), without stars or aggregate rating.
10. **Resource cards:** Chapter 7, Chapter 13, and Arizona exemptions.
11. **Arizona reach/remote practice:** Statewide service, remote handling, 341 meeting, and virtual proceedings.
12. **Nearby-city links:** Mesa, Gilbert, and Prescott, followed later by a broader Arizona-city block that also includes Tucson.
13. **Phoenix office:** Address, static map preview, click-to-load Google Map, and directions link.
14. **Consultation preparation:** Income, debts, housing/vehicle facts, tax return, and a document-checklist image.
15. **Final consultation conversion:** CTA and contextual links to automatic-stay, Chapter 7, Chapter 13, and exemptions content.
16. **FAQ:** Five visible questions matching FAQ structured data.
17. **Footer:** Firm name, email, phone, address, informational/legal-advice disclaimer, attorney-client disclaimer, and policy links.

### Topic-by-topic coverage

| Requested topic | Existing coverage | Preservation requirement |
| --- | --- | --- |
| Phoenix/local relevance | H1; repeated Phoenix-resident context; Phoenix office; city links; Arizona-wide service; Phoenix-focused FAQ | Preserve the office/NAP, Phoenix H1 signal, and natural local references; consolidate repetitive city blocks. |
| Bankruptcy lawyer/attorney intent | Title, H1, intro, experience section, final CTA, FAQ | Preserve commercial language, but avoid adding exact-match repetition. |
| Chapter 7 | Comparison copy, resource cards, several contextual links, navigation, schema description | Preserve substantive summary and at least one prominent contextual link. |
| Chapter 13 | Comparison copy, resource cards, several contextual links, navigation, schema description | Preserve substantive summary, arrears/asset-protection context, and at least one prominent contextual link. |
| Wage garnishment | Intro, problem list, pre-filing mistakes, final resources, two FAQs, FAQ schema, meta description | Strong coverage; preserve automatic-stay qualifications and urgency without promises. |
| Foreclosure | Problem list, automatic-stay anchor text, Chapter 13 context, FAQ/home retention discussion | Preserve and strengthen the qualified Chapter 13 arrears explanation. |
| Repossession | Intro, problem list, automatic-stay link, FAQ | Preserve; avoid implying every repossession is reversible. |
| Medical debt | Problem list | Preserve as a distinct high-intent problem card. |
| Credit-card debt | Problem list and recent-credit warning | Preserve both debt-relief intent and pre-filing caution. |
| Lawsuits/collections | Intro, problem list, deadline warning, automatic-stay resource, FAQ | Preserve. |
| Arizona bankruptcy law | Exemptions, Arizona-specific guides, office/service area, 341 process | Preserve and link to the dedicated Arizona law guide, currently absent from the body. |
| Means test | Navigation links to calculator; no body link or explanation | Under-linked. Add one resource card/contextual link, without turning the homepage into a calculator article. |
| Process | Expectations and document-preparation sections, but no concise end-to-end hiring process | Reorganize into a clear process section while retaining caveats. |

### Attorney, firm, and trust signals

- Casey appears as the reviewer/author, a bankruptcy attorney with 18+ years of experience, and a lawyer who has helped thousands of Arizona clients.
- The commercial entity is Yontz Law, PLLC; the header, hero logo, schema, and footer use that name.
- The “Reviewed by” module creates the editorial-publisher feel identified in the brief and should become a lawyer/firm credibility component—not be deleted without retaining the headshot, experience, name, role, and about-page link.
- Four client excerpts are present. Their source/authenticity should be documented internally before redesign work; wording must remain unchanged unless Casey approves source-accurate edits.
- There is no prominent star score in the audited homepage and no `AggregateRating` schema. Keep it that way.
- No media authority is currently visible or represented in schema.

### NAP and contact/conversion details

| Item | Current value |
| --- | --- |
| Business | Yontz Law, PLLC (header brand includes a trailing period: `Yontz Law, PLLC.`) |
| Attorney | Casey Yontz |
| Address | 4425 E Agave Rd Suite 106, Phoenix, AZ 85044 (punctuation varies between body/footer/schema) |
| Phone | 480-886-0339 / schema `+1-480-886-0339` |
| Email | `help@ylglaw.com` |
| Consultation CTAs | Hero: “Request a Free Bankruptcy Consult”; upper body: “Start With a Free Consultation”; lower body: “Request a Free Consultation” |
| CTA destination | `/consultation-request` |

**Critical conversion defect:** no `/consultation-request` page exists in `pages/`, and the production build route list confirms it is absent. All three primary homepage CTAs therefore point to a route that this repository cannot serve. Before redesign, decide whether to create that route or temporarily point CTAs to the existing `/contact-us`; do not leave a high-value CTA broken.

### Internal-link inventory

**Contextual/body links:**

- `/about-us` and `/about-us#casey-yontz`
- `/does-bankruptcy-stop-creditors`
- `/arizona-bankruptcy-exemptions`
- `/chapter-7-bankruptcy-arizona`
- `/chapter-13-bankruptcy-arizona`
- `/mesa-az-bankruptcy-attorney`
- `/gilbert-az-bankruptcy-attorney`
- `/prescott-az-bankruptcy-lawyer`
- `/consultation-request` (missing route)
- `/` (Phoenix city card)
- `/tucson-az-bankruptcy-attorney` (Arizona-area block)

**Global navigation adds:**

- `/arizona-bankruptcy-laws`
- `/chapter-13-vehicle-cram-down`
- `/bankruptcy-and-lawsuit-debt`
- `/chapter-7-means-test-calculator`
- `/chapter-13-plan-payment-calculator`
- three blog posts
- `/contact-us`

**Footer adds:** `/privacy-policy`, `/editorial-policy`, and `/terms-and-conditions`.

**Under-linked from homepage body:** the Arizona bankruptcy laws guide, means-test calculator, Chapter 13 plan estimator, lawsuit-debt guide, and Chapter 13 vehicle cramdown. The first four are natural candidates for a restrained resource section. The vehicle cramdown page can be linked contextually under repossession/Chapter 13 if the advice remains accurate. Avoid adding all nav routes merely to increase link count.

### External links and embedded services

- Google Maps directions link opens in a new tab with `noopener noreferrer`.
- The interactive Google Maps iframe loads only after user action; this is a sound performance/privacy pattern.
- No editorial media links currently appear.
- The document globally preconnects to Google Fonts, Google font static assets, and Font Awesome and loads an analytics placeholder (`YOUR_DOMAIN_HERE`) from Nepcha. These are performance/privacy review items.

### Images and alternative text

| Image | Loading behavior | Current alternative text / accessibility |
| --- | --- | --- |
| Phoenix desert skyline hero (`.webp`, JPEG fallback in schema only) | Next Image, `priority`, fill, fixed hero area | “Wide hero image for Arizona Bankruptcy Lawyers branded for Yontz Law, PLLC in Phoenix, Arizona.” This is keyword-heavy for a scenic/background image; decide whether the image is meaningful or decorative when rebuilding. |
| Casey Yontz headshot (`.webp`) | 64×64, below hero, not priority | “Attorney Casey Yontz headshot.” Accurate but can be more useful: “Casey Yontz, Phoenix bankruptcy attorney” without stuffing. |
| Consultation document checklist (`.webp`) | 800×533, responsive, below fold | Detailed and useful alt describing pay stubs, tax returns, bank statements, loan/mortgage statements, and creditor/lawsuit papers. Keep concept. |
| Phoenix office map preview (`.webp`) | 750×420, below fold | Identifies Yontz Law and the complete office address. Keep. |
| Inline Yontz Law SVG | Explicit image role and `aria-label="Yontz Law, PLLC"` | Accessible, but it contains the text “Phoenix Bankruptcy Lawyers” inside the SVG rather than HTML. |

The image schema graph describes the hero and consultation checklist. Casey's headshot is not currently represented in Person schema.

### Structured-data inventory

The homepage emits separate JSON-LD blocks for:

- `ImageObject` graph (hero and consultation checklist);
- `Organization` (Yontz Law, URL, logo, address, phone);
- `WebSite`;
- `Person` (Casey Yontz, bankruptcy attorney, employer, about URL);
- `LegalService` (name, URL, phone, image, address, Phoenix/Arizona area served, parent organization, founder);
- `BreadcrumbList`;
- `WebPage` (metadata, dates, relationships, primary image); and
- `FAQPage` matching the five visible FAQs.

Important cleanup candidates for a later, separately reviewed schema stage:

1. `Person.@id` uses `/about#casey-yontz`, but the person's `url` and visible link use `/about-us` or `/about-us#casey-yontz`; consolidate to the real canonical identity URL.
2. `Organization`/`LegalService` names vary from visible branding and the website name (`Arizona Bankruptcy Lawyers | Yontz Law, PLLC`). Establish one canonical firm name while allowing the page title to remain query-oriented.
3. `WebPage.name` and description currently match visible metadata—preserve unless a later, evidence-based test justifies a change.
4. Do not add media article URLs to `sameAs`; article mentions are not identity equivalents.
5. Do not add ratings or review markup for the firm's own local/service result.
6. If media relationships are represented later, first document a defensible graph design (for example, a Person `subjectOf` relationship to independently published articles) and validate it separately. Do not improvise it in the redesign.

### Legal/disclosure inventory for attorney review

The footer currently states that site content is informational, is not legal advice, and that no attorney-client relationship is created absent a written fee agreement. Preserve these concepts and correct the missing punctuation between “guidance” and “Absent” during the footer stage.

The audited footer does **not** contain the possible 11 U.S.C. § 528 debt-relief-agency disclosure: “We are a debt relief agency. We help people file for bankruptcy relief under the Bankruptcy Code.” This report does not make a compliance determination. Casey should decide whether and where that disclosure and an “attorney advertising” notice are required before footer implementation.

## B. Content preservation map

| Existing section | Action | Proposed new location | SEO/user rationale |
| --- | --- | --- | --- |
| Skyline/logo hero and CTA | **REWRITE** | 1. Hero | Preserve the CTA and Yontz Law identity, but place the existing H1, Casey, experience, Chapter 7/13, and qualified consultation message in semantic HTML. Replace the generic skyline as the dominant trust image with Casey's headshot if an approved high-resolution asset is available. |
| H1 + reviewed-by block | **MERGE** | 1. Hero and 3. Casey credibility | Keep the exact H1 initially. Recast reviewer framing as the attorney a visitor can hire while preserving name, role, headshot, 18+ years, and about link. |
| Introductory commercial copy | **REWRITE** | 1. Hero support + 4. Problems | Retain garnishment, lawsuits, repossession, creditor pressure, paycheck, transportation, realistic advice, and alternatives; reduce editorial lead-in. |
| At-a-glance consultation expectations | **MERGE** | 3. Casey credibility + 8. Process | Preserve honest advice, Arizona-specific exemptions, discretion, and meeting options without a separate long section. Do not claim unimplemented digital features. |
| Why Phoenix residents reach out | **KEEP / REFORMAT** | 4. Problems bankruptcy may help address | High-value intent coverage for credit cards, medical bills, garnishment/lawsuits, foreclosure, repossession, and personal guarantees. Convert to scannable cards with qualified statements and relevant links. |
| Experience section | **KEEP / REWRITE** | 3. Why work with Casey Yontz | Central trust/entity content. Replace “About the Author” with “About Casey Yontz” and foreground direct attorney involvement only if Casey confirms the operating model. |
| Related Arizona topics | **MERGE** | 6. Chapter comparison + 10. resources | Preserve all four links and descriptive anchors, but remove duplication with later resource cards. |
| Bankruptcy paths comparison | **KEEP / REWRITE** | 6. Chapter 7 vs. Chapter 13 | Preserve Chapter 7 and 13 depth and guide links. Demote Chapter 11 to a short note or omit only after confirming intake strategy; if omitted, its unique business/high-debt intent should remain reachable elsewhere. |
| Phoenix-specific mistakes | **MOVE / CONDENSE** | 10. Helpful Arizona bankruptcy resources | Valuable informational intent and experience signal. Keep a concise “Before you file” panel, with the full concepts eventually suitable for a dedicated guide. Do not delete retirement, transfers, credit use, lawsuit timing, or lump-sum warnings without a destination. |
| Testimonials | **KEEP / REFORMAT** | 7. Testimonials | Preserve authentic wording and attribution; remove interpretive “what this means for you” copy if it cannot be tied to the reviewer, but only after source review. No stars/aggregate. |
| Resource selector | **MERGE** | 10. Helpful Arizona resources | Retain Chapter 7, Chapter 13, and exemptions; add a small number of under-linked, high-utility resources. Avoid a large SEO link grid. |
| Serving Phoenix/Arizona remote paragraph | **MERGE / VERIFY** | 3. credibility, 8. process, 11. local section | Retain statewide/local reach and 341/local-court relevance. Revalidate claims about phone/video meetings and proceedings as of implementation date. |
| Nearby-city section | **MERGE** | 11. Phoenix/local section | Preserve contextual Mesa/Gilbert/Prescott links; combine with the duplicate Arizona-area block and include Tucson once. |
| Office location and map | **KEEP** | 11. Phoenix/local section | Strong NAP/local relevance and user utility. Preserve the click-to-load map pattern and stable dimensions. |
| Preparation checklist text | **MOVE / MERGE** | 8. Process | Keep preparation utility; condense into the consultation/process steps. |
| Checklist graphic | **MOVE** | 8 or 10, below fold | Useful original visual and ImageObject; retain lazy loading and dimensions, but avoid interrupting conversion flow. |
| Final consultation CTA | **KEEP / FIX** | 13. Final CTA | Preserve commercial intent; first create/choose a working destination and standardize CTA language. |
| Repeated contextual resource paragraph | **MERGE** | 10. Resources | Preserve descriptive anchors once rather than repeating them in multiple sections. |
| FAQs + FAQ schema | **KEEP / LIGHT EDIT** | 12. FAQ | Retain all five topics and visible/schema parity. Review time-sensitive/local claims, reduce repetitive Phoenix phrasing only where it does not change intent. |
| Bankruptcy Help Across Arizona | **MERGE** | 11. Phoenix/local section | Preserve all city links and statewide copy, remove duplication with the earlier nearby-city section. No keyword/local intent is lost because every unique city and link remains. |
| Footer/NAP/disclaimers | **KEEP / REWRITE CAREFULLY** | 14. Footer | Preserve business/contact details and disclaimer concepts. Attorney reviews § 528/advertising language. Normalize NAP punctuation without changing the actual data. |

**Planned removals:** no substantive topic is approved for outright removal in phase one. The only proposed deletions are duplicate presentations after their unique copy, intent, and links are merged into a retained destination. This avoids loss of keyword coverage, search intent, internal links, local relevance, and user utility.

## C. Proposed new homepage outline

1. **Header/navigation** — Yontz Law identity; Services, Resources, About Casey, Contact; accessible mobile menu; consultation action.
2. **Hero** — retain H1 “Bankruptcy Lawyers in Phoenix, AZ” for the first release; Casey Yontz/Yontz Law, 18+ years, Chapter 7 and Chapter 13, measured supporting copy, Casey headshot, working “Book a Free Bankruptcy Consultation” CTA.
3. **Compact authority strip** — “Bankruptcy Commentary Featured In”; text outlet names only.
4. **Why Work With Casey Yontz** — thousands of Arizona matters, direct attorney role (after factual confirmation), practical advice, approved appointment options, about link.
5. **Problems Bankruptcy May Help Address** — garnishment, lawsuits/collections, cards, medical debt, foreclosure, repossession; automatic-stay caveats and contextual links.
6. **Chapter 7 vs. Chapter 13** — useful comparison, eligibility/means-test context, arrears/asset context, existing Arizona guide links; Chapter 11 only as a low-prominence note if accepted matters justify it.
7. **Authentic client experiences** — source-verified excerpts, no numerical rating or star treatment.
8. **How the process works** — consultation; meet Casey; review finances/options; documents; prepare/file if retained and eligible; continue through the process. Label future electronic scheduling/document functions honestly until live.
9. **Casey Yontz in the Media** — three to five verified cards; independent external links; no endorsement language.
10. **Helpful Arizona bankruptcy resources** — exemptions, means test, automatic stay, Chapter 7, Chapter 13, plan estimator, and concise pre-filing cautions.
11. **Phoenix office and Arizona service area** — NAP, click-to-load map, Arizona context, 341/court context after verification, and nonduplicative city links.
12. **Phoenix bankruptcy FAQs** — retain the existing five-question coverage and synchronized FAQ schema.
13. **Final consultation CTA** — clear expectations, working destination, optional phone action only when workflow is confirmed.
14. **Footer** — NAP, email/phone, About/Privacy/Terms, attorney-reviewed disclosures, and informational/no-relationship language.

## D. Media integration plan

### Top authority strip

Use text-only publication names to avoid trademark/logo approvals, asset weight, third-party scripts, and layout shift:

- U.S. News & World Report
- Better
- Debt.org
- Moneywise
- MoneyLion

Heading: **Bankruptcy Commentary Featured In**. Supporting accessible text should make clear that Casey supplied commentary; it must not imply endorsement or recommendation. Outlet names may link to the corresponding cards, keeping the strip compact and avoiding five competing external links above the fold.

### Detailed section candidates

The five requested candidates have the strongest commercial or Arizona relevance. The summaries below are **editorial briefs, not publishable copy**, because direct article verification was blocked in this audit environment.

| Priority | Publication/article | Topic | Draft summary boundary pending article verification | Link |
| --- | --- | --- | --- | --- |
| 1 | Debt.org — *What Happens When You File for Bankruptcy?* | Filing process | State only the specific post-filing issue Casey explains after locating his quote and surrounding paragraph. Do not broadly credit him for the article's complete process explanation. | `https://www.debt.org/bankruptcy/what-happens-after-filing/` |
| 2 | Better — *How Recent Bankruptcies Affect Mortgage Approval* | Bankruptcy and mortgages | Explain the precise mortgage-after/during-bankruptcy point attributed to Casey, including any timing or chapter qualification in the source. | `https://better.com/content/recent-bankruptcies-mortgage-approval` |
| 3 | U.S. News & World Report — *Student Loan Disability Discharge: Here's What You Need to Know* | Disability discharge | Identify U.S. News as the origin and WTOP as the available syndicated host; summarize only Casey's verified disability-discharge guidance. | `https://wtop.com/news/2026/08/student-loan-disability-discharge-heres-what-you-need-to-know/` |
| 4 | Moneywise — *Can creditors garnish my 401(k)?* | Retirement protection | Summarize Casey's exact distinction about creditor protection of retirement accounts and preserve any exceptions or bankruptcy/nonbankruptcy limits stated in context. | `https://moneywise.com/managing-money/retirement-planning/401k-creditor-garnishment-debt-protection` |
| 5 | Moneywise — HOA foreclosure article | Arizona HOA debt/foreclosure | Summarize Casey's Arizona-specific explanation of HOA foreclosure/debt only after checking the quote, governing context, and whether the article distinguishes liens, assessments, and mortgage foreclosure. | `https://moneywise.com/news/real-estate-news/hoa-foreclosure-home-unpaid-assessments-debt` |

Each card should contain publication, exact article title, a short topic label, one original one- or two-sentence verified summary, and a descriptive anchor such as “Read Casey Yontz's comments on Debt.org.” External links should use `target="_blank"` only if the product decision favors new tabs; if so, add `rel="noopener noreferrer"`. Do not add `nofollow` to legitimate editorial citations.

### Other supplied coverage

- **MoneyLion** and **CuraDebt:** verify and retain in a component data file for possible rotation or later `/media` page; do not crowd the homepage merely to show every mention.
- **Western State College of Law:** treat as an alumni/professional profile, not a media-quote card. A restrained link may fit Casey's credibility block or future media page after its text is verified.
- **USBankruptcyHelp.com:** if a media article identifies Casey through that project, a brief bio can explain the relationship. Yontz Law remains the page's commercial entity. Do not add every mention or the project URL to firm `sameAs` without an entity review.

No media logos/assets are required. Implement cards from a small local data array so a future `/media` page can reuse verified records without duplicating content.

## E. SEO risk assessment

| Risk | Severity | Control |
| --- | --- | --- |
| Changing the established H1 from plural/local wording to a new exact-match variant | High | Keep “Bankruptcy Lawyers in Phoenix, AZ” in release one; test any later change independently. |
| Rewriting title/meta merely for design consistency | High | Freeze existing title, description, canonical, and robots for initial redesign. |
| Cutting the long page into generic marketing copy | High | Use the preservation map; every intent/topic/link has an assigned destination before deleting duplication. |
| Losing Chapter 7/13 and automatic-stay depth | High | Preserve summaries, caveats, and contextual guide links in visible body content. |
| Losing local/NAP signals | High | Preserve exact office facts, Phoenix context, Arizona rules/exemptions, map, and useful city links; normalize formatting only. |
| Broken consultation funnel | High | Resolve missing `/consultation-request` before promoting the CTA. Add route tests. |
| Publishing inaccurate media summaries | High (trust/legal) | Block media launch until direct source review records Casey's quote/context and link status. Maintain a verification checklist. |
| Claiming virtual/paperless functions not yet implemented | High (trust) | Distinguish currently available meetings from planned scheduling/document workflows. Use placeholders only in code, not promises in rendered copy. |
| Schema entity inconsistency | Medium-high | Correct Person ID only in the dedicated schema stage; validate the complete graph and visible-content parity. |
| FAQ visible/schema mismatch after edits | Medium-high | Generate both from one data source or add an assertion test. |
| Over-optimized Phoenix phrasing | Medium | One primary H1, natural body references, and descriptive headings; avoid repeating exact-match phrases in every card. |
| Removing Chapter 11 language | Medium | Confirm service strategy. If not a target service, retain a short comparison note or link elsewhere before removing the unique intent. |
| Merging city sections and losing links | Medium | Explicitly preserve Phoenix, Mesa, Gilbert, Prescott, and Tucson once each. |
| Changing testimonials without provenance | Medium-high | Verify source, consent, and exact wording; do not fabricate or materially paraphrase. |
| Self-serving review schema | High | Keep `AggregateRating` absent. |
| Heavy media/logo/review widgets | Medium (CWV) | Text-only authority strip; local CSS; no third-party widget. |
| Hero redesign worsening LCP/CLS | Medium-high | Fixed image dimensions/aspect ratio, preload only the true LCP asset, no lazy loading of LCP, mobile art direction, and font review. |
| Updating `dateModified` for cosmetic changes | Medium | Change only when substantive visible content changes; keep schema and visible date policy consistent. |

## F. Technical implementation plan

### Existing files/components to modify, in small reviewable stages

1. **`pages/index.js`** — keep URL/metadata; replace the current hero CTA composition incrementally; keep JSON-LD untouched until the schema stage.
2. **`content/HomePage.js`** — split only one approved section at a time rather than replacing the file wholesale.
3. **`components/PerfPageLayout.js`** — improve the hero/header/footer only when a change can apply safely to every page using this shared component, or add homepage-specific composition rather than causing site-wide regressions.
4. **`components/Header/HeaderLinks.js`** — correct navigation labels/typo and confirm keyboard/mobile dropdown behavior in a dedicated change.
5. **`components/page-topic-selector/PageTopicSelector.js`** and **`components/AzAreas/AzAreas.js`** — consolidate duplicate homepage resources/locations while checking whether other pages reuse them.
6. **`components/office-map-imbed-phoenix/OfficeMapEmbed.js`** — preserve click-to-load behavior; no change needed unless visual styling is approved.
7. **Consultation route** — create `/consultation-request` only after form/scheduling requirements are agreed, or deliberately retarget CTAs to `/contact-us` as a temporary fix.

### Proposed components/data to add after approval

- `HomepageHero` — semantic H1, attorney identity, experience, chapter links, and CTA.
- `MediaAuthorityStrip` — text-only, fixed-height list.
- `AttorneyCredibility` — headshot and confirmed facts.
- `DebtProblemGrid` — semantic list/cards with qualified summaries.
- `ChapterComparison` — Chapter 7/13 content and links.
- `BankruptcyProcess` — ordered list; feature flags or honest language for future digital steps.
- `MediaCoverage` plus a local `mediaAppearances` data module containing verification status, exact title, URL, topic, and approved summary.
- `HomepageResources` and `HomepageFaq` — FAQ data should drive visible copy and JSON-LD to prevent drift.

Names/paths are architectural suggestions, not an instruction to create a large component hierarchy. Prefer server-rendered, presentation-only React and CSS; add client state only where necessary (navigation and click-to-load map already require it).

### Metadata plan

- **No initial changes** to title, description, canonical, robots, URL, or published date.
- Keep one H1 and initially preserve its exact wording.
- After launch and crawl/index monitoring, evaluate metadata changes separately using Search Console query/page data—not aesthetic preference.
- Add Open Graph/Twitter metadata only as a separate enhancement if absent site-wide; it should not alter the canonical or core on-page targeting.

### Schema plan

1. Inventory rendered JSON-LD before each schema change.
2. Normalize the Person ID to the real `/about-us#casey-yontz` identity and cross-reference it consistently.
3. Maintain Organization, LegalService, WebSite, WebPage, Breadcrumb, Person, and supported ImageObject relationships.
4. Keep visible FAQ and FAQPage data identical; reconsider FAQ markup only against then-current Google guidance, while preserving useful visible FAQs regardless.
5. Do not add rating schema or media URLs as `sameAs`.
6. Propose and approve any `subjectOf` media relationship separately before implementation.
7. Validate with Schema.org and Google rich-results tooling after deployment.

### Performance plan

- Preserve static generation and avoid homepage hydration for presentational sections.
- Use Casey's local WebP headshot with explicit dimensions; if it becomes LCP, set priority intentionally and remove priority from a non-LCP skyline.
- Keep below-fold images lazy by default and preserve explicit dimensions/aspect ratios.
- Use text outlet names and no logo/review widgets, carousels, animation libraries, or media scripts.
- Audit shared MUI/legacy theme bundle and dynamically imported icons; avoid adding a new UI system during phased work.
- Review the global Google Fonts/Font Awesome requests and unused Nepcha placeholder. Removing or self-hosting resources is a separate performance/privacy change that must be regression-tested across the site.
- Retain click-to-load Google Maps.
- Measure mobile LCP, CLS, INP, total JS, and font behavior before/after each visual stage.

### Mobile and accessibility plan

- Keep the first viewport focused on identity, service, experience, and one primary CTA; do not let a tall scenic hero push them below the fold.
- Use a real `<h1>`, semantic lists/cards, an ordered process list, and visible link text.
- Confirm header menus are keyboard-operable and expose appropriate expanded state; do not add redundant ARIA.
- Maintain visible focus styles and at least WCAG AA contrast.
- Avoid whole-card nested/duplicate interactive targets.
- Use a minimum 44×44 CSS-pixel target for primary mobile actions.
- Test at approximately 360/390 px mobile, 768 px tablet, 1280/1440 px laptop/desktop, and 1920 px large desktop.

### Review gates and staged sequence

1. Owner approves this audit/preservation map; regain source access and complete live/media verification.
2. Fix or deliberately reroute the broken consultation CTA.
3. Hero only; compare rendered copy, H1, metadata, links, CWV, and screenshots.
4. Casey credibility and authority strip.
5. Problem navigation and Chapter 7/13 comparison.
6. Testimonials and process, after provenance/workflow confirmation.
7. Detailed media cards, only after every summary is source-verified.
8. Resource/local consolidation with an automated link inventory comparison.
9. FAQ and final CTA/footer, with attorney disclosure review.
10. Schema/entity cleanup.
11. Performance, accessibility, responsive screenshots, broken-link crawl, and final SEO parity report.

Each stage should be its own reviewable commit or narrowly scoped commit series. No stage should delete existing content until the replacement is present and its keyword intent, internal link, qualification, and local/entity signal have been checked.

## Approval blockers before homepage implementation

1. Confirm that this branch matches the currently deployed homepage, since the public URL could not be fetched from this environment.
2. Provide working article access or verified excerpts/context for all media summaries.
3. Decide the working consultation destination and whether a scheduling provider/form exists.
4. Confirm current virtual/in-person, electronic-document, and scheduled-call capabilities.
5. Confirm Chapter 11 intake strategy.
6. Confirm testimonial sources/approved wording.
7. Have Casey review debt-relief-agency and attorney-advertising disclosure requirements.
8. Confirm the 18+ years and “thousands of Arizona matters/clients” phrasing preferred for publication.