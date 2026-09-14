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
