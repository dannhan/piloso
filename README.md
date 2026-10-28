# PILOSO website

PILOSO is a static Astro site for a specialty green coffee exporter. Indonesian is the default locale at `/`; English is served at `/en/`. The site is built as static HTML and served by a Cloudflare Worker with Static Assets at `https://piloso.locked.workers.dev`.

The sample-request form is still a browser-only mock. It does not send or store submissions.

## Structure

```text
.
├── src/
│   ├── components/       # Shared Astro page and section components
│   ├── config/
│   │   ├── locales.mjs   # Shared locale list for Astro and the Worker
│   │   └── site.ts       # Brand, contact, and other non-translatable constants
│   ├── i18n/
│   │   ├── types.ts      # LocaleMessages contract
│   │   ├── id.ts         # Indonesian dictionary
│   │   ├── en.ts         # English dictionary with REVIEW groups
│   │   └── useTranslations.ts
│   ├── layouts/           # SiteLayout and document metadata
│   ├── pages/             # `/` and `/en/` entry points
│   └── styles/global.css  # Global stylesheet
├── public/
│   ├── script.js          # Vanilla nav, FAQ, modal, and mock-form behavior
│   ├── _headers           # Headers consumed by the local Workers asset preview
│   ├── _redirects         # `/index.html` and `/en/index.html` normalization
│   ├── 404.html           # Legacy Pages-style fallback; pending approval for removal
│   └── assets/logo/       # Static assets
├── worker.mjs             # Locale-aware page redirects and asset fallback
├── tests/worker.test.mjs  # Worker route tests
├── astro.config.mjs       # Static output, site origin, and Astro i18n
└── wrangler.jsonc         # Worker + Static Assets configuration
```

## Commands

Requires Node.js and npm.

```sh
npm ci
npm run dev                 # Astro dev server at http://localhost:3000
npm run preview             # Built output through local Wrangler at :8788
npm run build               # Static output in dist/
npm test                   # Worker route tests
npm run format              # Format maintained source files
npm run format:check       # Check formatting without writing
npm run lint               # ESLint
npm run typecheck          # astro check
npx wrangler deploy --dry-run
npm audit
```

Wrangler runs `npm run build` before local preview and deployment, as configured in `wrangler.jsonc`. Stop the preview after verification and confirm port `8788` is free.

## Routing

The Worker and Static Assets support these page routes:

| Request                                    | Result                                                  |
| ------------------------------------------ | ------------------------------------------------------- |
| `/`                                        | Indonesian home page                                    |
| `/en/`                                     | English home page                                       |
| `/en`                                      | Redirects to `/en/`                                     |
| `/index.html`                              | Redirects to `/`                                        |
| `/en/index.html`                           | Redirects to `/en/`                                     |
| Unknown HTML path                          | Redirects to `/`                                        |
| Unknown HTML path below a supported locale | Redirects to that locale home                           |
| Unsupported locale prefix                  | Redirects to `/`                                        |
| Existing asset                             | Served normally                                         |
| Missing asset                              | `404`                                                   |
| `/api/*`                                   | Not redirected by page routing; currently returns `404` |

Only `GET` and `HEAD` page navigations redirect. Unsafe methods retain the current `404` behavior. The Worker tests cover these rules and use the shared locale list, so adding a locale does not require Worker logic changes.

## Locales and translations

`src/config/locales.mjs` is the single source of truth for the locale list and default locale. Astro imports it for build-time routing; `worker.mjs` imports it for runtime route handling.

The dictionaries in `src/i18n/` implement the `LocaleMessages` interface from `src/i18n/types.ts`. `useTranslations(locale)` selects the typed dictionary for a page. Repeated content is stored as typed arrays and rendered with `.map`. Non-translatable brand, email, and WhatsApp constants live in `src/config/site.ts`.

The production origin is configured once as Astro's `site` option in `astro.config.mjs`:

```js
const site = 'https://piloso.locked.workers.dev';
```

Change it when a custom domain is configured. Canonical, hreflang, and `x-default` URLs are derived from `Astro.site`; they are not hardcoded in components.

## Add a language

Before merging a new locale:

1. Add its locale code to `src/config/locales.mjs`.
2. Create `src/i18n/<locale>.ts` typed as `LocaleMessages`.
3. Add a `// REVIEW` group for every translated content group and obtain native-speaker review.
4. Add the locale page entry point using the shared `HomePage` component.
5. Run `npm run typecheck`, `npm test`, and `npm run build`.
6. Recreate the temporary pseudo-locale layout check and inspect `/`, `/en/`, and the pseudo-locale at `768`, `935`, `1024`, and `1280px`.
7. Confirm the Worker route tests pass, including the shared-locale test.

No automatic browser-language redirect is used. Users switch locales explicitly through the nav.

## Workers versus Pages files

The deployment target is Workers with Static Assets, not Cloudflare Pages. `_headers` and `_redirects` are retained because the local Wrangler preview confirmed that they take effect: security/cache headers were present on responses, and both HTML entry-point redirects were applied. `public/404.html` is copied into `dist/`, but `not_found_handling: "none"` means the local Worker preview returned a plain `404` for a missing asset instead of rendering that file. Its removal is pending approval.

The package keyword `cloudflare-pages` is historical metadata and is not used by the build or deploy scripts. A stale Pages cleanup proposal, including that keyword and `public/404.html`, is recorded in `HANDOFF.md`; nothing was removed.

## Deployment

No deployment was performed during this migration. When explicitly approved:

```sh
npx wrangler deploy --dry-run
npx wrangler deploy
```

Review `/`, `/en/`, `/en`, an unknown path, the language switcher, mock form behavior, and view-source canonical/hreflang tags after deployment. A custom-domain migration must also address duplicate content at the current `workers.dev` origin.
