# Phontus website

Next.js marketing site for the Phontus interpretation system.

## Local development

```sh
npm install
npm run dev
```

The development server uses port 3000 by default. For a production preview:

```sh
npm run build
npm run start -- --port 3001
```

Stop an existing production preview before rebuilding its output.

## Validation

```sh
npm run lint
npm run typecheck
npm run build
```

See [the implementation plan](docs/design/phontus-implementation-plan.md) for the reference study and [visual QA](design-qa.md) for screenshots, responsive checks and interaction results.

## Configuration

Copy `.env.example` to `.env.local` for local configuration. `NEXT_PUBLIC_SITE_URL` is the marketing origin (`https://www.phontus.live`); the bare domain hosts the application.

The contact route uses `RESEND_API_KEY`, `CONTACT_TO_EMAIL` and `CONTACT_FROM_EMAIL` for delivery. Without delivery configuration, it returns an explicit error and the form offers the contact email. Browser QA uses intercepted delivery responses and does not send real email.

## Content and assets

- Homepage narrative: `app/page.tsx` and the focused components under `components/`.
- Product and industry detail copy: `lib/redesign-content.ts`.
- Navigation and metadata origin: `lib/config.ts`.
- Design tokens and responsive compositions: `app/globals.css`.
- New supplied photography: `public/images/New Pictures/` (originals); optimized landscape and portrait pairs: `public/images/photography/`. Scene names and alt text are mapped in `lib/photography.ts`. `PhotoFrame` serves the supplied portrait composition at widths up to 760px.
- Other supplied scene images: `public/images/`; session screen: `public/images/product/`.

Keep Spanish–English launch availability explicit. Organization terminology is described as in development. `OperationalProof` renders only sourced, dated metrics approved for publication, and is empty by default. Do not publish mock transcript timestamps as performance data. Legal pages retain their existing draft/review notices.

## Language-access website update

The existing design, photography and shared components are preserved. See [content provenance and publishing constraints](docs/qa/language-access-content.md) and [the QA report](docs/qa/language-access-review.md).

Product detail URLs are `/products/interpreting-kit`, `/products/clinical-kit` and `/products/phone-line`; administration has a dedicated `/platform` route. Existing `/product?tab=...` links redirect to the relevant destination.

Run the browser regression suite against a production build:

```sh
npm run build
npx playwright install chromium
npm run test:e2e
```

The suite starts a local production server on port 3001. It checks all 18 marketing routes at eight viewport widths, accessibility, metadata, internal links, legacy redirects, keyboard interactions and mocked form delivery. It never sends a valid demo inquiry to the email service. Artifacts are written to `test-results/`. An existing Chromium installation can be used with `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH`.

To add approved footage, pass `src`, `poster` and an English caption-track URL through the `ConversationDemo` video prop. To add customer evidence, populate `pilotStories` with sourced, publication-approved records. Neither component requires a page redesign.
