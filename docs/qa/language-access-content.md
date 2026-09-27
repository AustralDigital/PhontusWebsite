# Language-access positioning: content provenance

Implemented 27 September 2026 against the existing Next.js site and the supplied brief. The live marketing site matched the checkout during inspection. This repository is a marketing site; it does not independently establish implementation of the interpretation service.

| Published content | Existing source | Treatment |
| --- | --- | --- |
| Dedicated kit, directional microphone, readable transcript, configured deployment | `lib/redesign-content.ts`, `components/system-sections.tsx` | Reused existing product facts and supplied photographs. Softened absolute noise-rejection language. |
| Clinical screen, storage and mobile base | Existing Clinical Kit panel and supplied clinical photography/product views | Retained environment photographs; added selectable isolated front and side views. |
| Spanish–English availability | Existing homepage, product content and footer | Kept the launch limit visible; no new languages or latency claims. |
| Human interpretation from kits and Phone Line, AI while a person joins, transcript attribution | Existing human panel in `lib/redesign-content.ts` | Made the staff-requested escalation sequence visible. No automatic escalation, connection-time guarantee, credentials or service entitlement added. |
| Phone Line on an existing or dedicated number; shared history | Existing phone and admin panels | Dedicated homepage section and crawlable product page. Clarified that callers need no app/account and no Phontus kit; they still use a phone. |
| Sites, people, enrollment, history, usage and retention | Existing admin panel and platform section | Shared system diagram, a dedicated platform route and linked product routes. The diagram is informational, not a dashboard screenshot. |
| Encryption in transit, site access, enrollment and per-site retention | Existing `app/security/page.tsx` | Structured into named capabilities and their scope. No encryption-at-rest, audit logging, remote wipe, SSO, SOC 2, HIPAA or BAA claims added. |
| Audio retention, deletion timing and subprocessors | Open review notes in `app/privacy/page.tsx` | Kept as review topics, not asserted capabilities. Existing legal review notices remain. |
| Early clinical, dental and women’s health work | Existing `app/about/page.tsx` | Narrative proof section uses this statement only. No organizations, quotes, outcomes or metrics invented. |
| Demo duration and first-site discussion | Existing contact page, healthcare/hospitality CTAs, homepage FAQ | Around 20 minutes; real session, hardware, human support, administration and first-site discussion. No no-commitment/setup promise or response-time guarantee. |
| Commercial model | Terms explicitly flag pricing and equipment supply terms for confirmation | No prices, subscription breakdown, contract or billing terms added. Rollout copy discusses a first site and later expansion. |
| Founder information | No approved biography or team profile found in source/site | Added an invitation to talk with the team, without inventing people or biographies. |
| Demo video | No video asset found | `ConversationDemo` shows a clearly labeled, manually controlled illustrative exchange. Its optional `video` prop accepts a source, poster and caption track. No fake play button or simulated live/performance claim. |
| Organization terminology | Existing content labels it in development | Retained on the Technology page with its existing development status. |

## Adding approved evidence

`PilotStories` accepts organization name, anonymous label, optional logo, region, industry, deployment type, quote, attribution, pilot status and an optional metric. A source and publication approval are required for display. The default collection is empty; existing early-work narrative remains visible without invented testimonials. Only supply approved fields, especially customer identity, logos and metrics.

`OperationalProof` keeps its existing separate source/date/approval gate for measured operational data.

## Routing and compatibility

- `/product` remains the product-family overview.
- `/products/interpreting-kit`, `/products/clinical-kit` and `/products/phone-line` are server-rendered, crawlable pages with individual titles, descriptions, canonical URLs and social metadata.
- `/platform` is the shared navigation destination for administration.
- Legacy `/product?tab=frontline|clinical|phone|human|console` links permanently redirect to the appropriate product, Technology section or Platform page.
- Existing `/product#details`, `/product#platform`, industry routes and healthcare aliases remain reachable.
- Shared navigation and product links use current names. `frontline` remains only as an internal legacy key and in supplied asset filenames.

## Existing operational prerequisites

Email delivery still uses the existing Resend adapter and environment configuration. Browser tests intercept valid submissions to avoid sending email. Legal pages still contain their original review notes; they require the company’s legal/product review. Neither delivery credentials nor legal/commercial facts can be supplied by website implementation.
