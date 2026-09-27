# Phontus language-access website update

Validated 27 September 2026. The implementation extends the existing Next.js website, its Inter typography, restrained green/neutral palette, product photography, motion preferences and shared components. It does not replace the site’s design system.

## Result

- The homepage identifies Phontus as language-access infrastructure, differentiates dedicated hardware from phone apps, and connects AI, human interpretation, Phone Line and organizational administration.
- A manually controlled Spanish–English example explains the two-way interaction without implying a live service or a measured latency. An optional captioned-video slot is ready for approved footage.
- Human escalation has an explicit five-step workflow. Existing Clinical Kit photography is joined by selectable isolated product views.
- The system diagram links the three products to shared interpretation and administration. Phone Line has a dedicated section and product URL.
- Product pages have their own server-rendered content and metadata. Legacy query-string links permanently redirect. The Platform navigation item now leads to `/platform`.
- Security presents four capabilities already documented in the site and separates them from unresolved review topics.
- The demo page explains the session, roughly 20-minute duration and follow-up. Mobile visitors can jump directly to the form; mobile product pages show the name and demo CTA before supporting imagery.
- Industry workflows remain specific. Healthcare now connects reception, bedside and phone use to their appropriate products. Grammar, language annotations, heading order, focus/landmark semantics and validation labels were corrected.
- Customer evidence has a reusable publication-gated structure. The visible narrative uses existing clinical-team information; no identities, quotations, metrics or biographies were invented. See [content provenance](language-access-content.md).

## Validation

| Check | Result |
| --- | --- |
| `npm run lint` | Pass |
| `npm run typecheck` | Pass |
| `npm run build` | Pass; Next.js 16.3.6 production build |
| `npm run test:e2e` | 24 passed; no skipped or flaky tests |
| All 18 marketing routes | HTTP 200; one h1; title, description, canonical and OpenGraph metadata checked |
| Responsive layout | 144 route/viewport combinations at 375, 390, 430, 768, 1024, 1280, 1440 and 1920px; no horizontal overflow |
| Accessibility automation | No axe violations in tested WCAG 2 A/AA, WCAG 2.1 AA and best-practice rules on all 18 pages |
| Browser errors and images | No console errors or uncaught page errors; images loaded successfully |
| Links and navigation | Internal routes and fragments resolve; legacy product redirects, product navigation and browser back verified |
| Interaction | Conversation controls, hardware view selection, FAQ, mobile focus trap, Escape and focus restoration pass |
| Contact form | Server rejects invalid payloads; client validation, error associations, mobile form jump, mocked success, delivery failure and network failure pass; failed requests preserve input |
| Progressive behavior | Product content and links render without JavaScript; reduced-motion behavior checked |
| Dependency audit | `npm audit` and `npm audit --omit=dev`: zero reported vulnerabilities |
| Whitespace/errors | `git diff --check`: pass |

The [machine-readable check summary](language-access-evidence/checks.json) records the final run. Reproduce using the commands in the repository README. The browser suite creates full-page desktop and mobile screenshots for each route in the ignored `test-results/` directory.

## Visual evidence

Representative final screenshots were opened and reviewed for typography, spacing, product visibility, responsive order and diagrams. The supplied photos remain the primary visual material.

- Homepage: [1440px](language-access-evidence/home-1440.jpg), [390px](language-access-evidence/home-390.jpg).
- Conversation: [1440px](language-access-evidence/conversation-1440.jpg).
- Connected system: [1440px](language-access-evidence/system-1440.jpg), [390px](language-access-evidence/system-390.jpg).
- Human escalation: [1440px](language-access-evidence/human-1440.jpg).
- Phone Line: [homepage section](language-access-evidence/phone-1440.jpg), [mobile product page](language-access-evidence/phone-product-390.jpg).
- Clinical Kit: [desktop product page](language-access-evidence/clinical-product-1440.jpg).
- Platform: [768px](language-access-evidence/platform-768.jpg).
- Demo request: [1440px](language-access-evidence/contact-1440.jpg), [390px](language-access-evidence/contact-390.jpg).

## Dependencies and scope

The dependency audit found pre-existing issues while adding browser QA. Next.js and its ESLint configuration were updated to 16.3.6, sharp to 0.35.4, brace-expansion to 5.0.9, and affected transitive packages were updated. This addresses the reported [Next.js image-optimization advisory](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4) and [sharp advisory](https://github.com/advisories/GHSA-rgj7-g3m4-5g8c). The final audit reports no known vulnerabilities; this is not a service-security certification.

Automated accessibility checks and browser inspection do not constitute a comprehensive assistive-technology audit. No live interpretation service was exercised. Valid form delivery was intercepted in the browser; no external demo email was sent. Production delivery still depends on the existing Resend environment configuration. The site’s existing legal review notices and unresolved product/commercial facts remain explicit. No production deployment was performed.
