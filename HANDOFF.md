# PILOSO handoff

## 1. Context & Goals

- **[Decided]** PILOSO is a specialty green coffee exporter site, now migrated to Astro static output with TypeScript, no Astro adapter, no UI framework, and vanilla behavior in `public/script.js`.
- **[Decided]** Indonesian is the default locale at `/`; English is at `/en/`.
- **[Decided]** The deployment target is Cloudflare Workers with Static Assets at `https://piloso.locked.workers.dev`; no custom domain is configured yet.
- **[Decided]** The planned product sequence is more languages, including Turkish, Spanish, French, and Dutch, followed by a real sample-request backend.
- **[Unknown]** No production deployment or live-URL check has been performed in this migration.

## 2. Decisions & Preferences

- **[Decided]** Astro uses `output: 'static'`, `prefixDefaultLocale: false`, one shared `HomePage` component, and typed locale dictionaries implementing `LocaleMessages`.
- **[Decided]** `src/config/locales.mjs` is the single locale source for both `astro.config.mjs` and `worker.mjs`.
- **[Decided]** Non-translatable brand, email, and WhatsApp constants live in `src/config/site.ts`.
- **[Decided]** Canonical, hreflang, and `x-default` URLs are derived from Astro's `site` option; the current origin is `https://piloso.locked.workers.dev`.
- **[Decided]** The language switcher is explicit; there is no browser-language auto-redirect.
- **[Decided]** Preserve the shared content column tokens `--container-max`, `--gutter`, and `--edge`.
- **[Decided]** Table units live in column headers; numeric values are short and non-wrapping.
- **[Decided]** Desktop navigation collapses earlier for longer locales.
- **[Decided]** CSS-generated language-dependent text is supplied through HTML `data-*` attributes; the CTA `PILOSO` wordmark and band counters remain CSS constants.
- **[Decided]** English numeric formatting uses decimal points and comma thousands separators, such as `11.0%` and `1,450`.
- **[Decided]** Work one phase at a time and stop for approval; write routing/API tests first; verify built output; report anything unverified; commit per phase.
- **[Decided]** Never deploy without a separate request, never run commands that change remote Cloudflare resources, and preserve `checkpoint/clean-static-site` and `feature/commercial-hybrid`.

## 3. Current State

### Repository

- **[Decided/Verified]** Branch: `feature/astro-i18n`.
- **[Decided/Verified]** Final migration HEAD before this handoff commit: `56f33dc` (`Document Astro Workers architecture`); this handoff is committed separately afterward.
- **[Decided/Verified]** Final working tree is clean after the handoff commit.
- **[Decided/Verified]** Branches retained: `checkpoint/clean-static-site`, `feature/commercial-hybrid`, `feature/astro-i18n`, and `master`; no migration branch was merged to `master`.
- **[Decided/Verified]** Migration commits, including the WIP commit:
  - `0b41907` — Align page content to shared max width (Phase 0 layout fix).
  - `bbb6c69` — Set up Astro migration and tooling (Phases 2 and tooling work).
  - `5145590` — WIP: English locale and routes; canonical pending.
  - `cc8a1c9` — Improve responsive navigation and lot layouts (Phase B).
  - `2bff07d` — Complete locale metadata and language switching (Phase C).
  - `42f7dcd` — Add locale-aware Worker routing (Phase 5).
  - `56f33dc` — Document Astro Workers architecture (Phase 6 README).

### Source and configuration

- **[Decided/Verified]** Astro pages are `src/pages/index.astro` and `src/pages/en/index.astro`; both use `src/components/HomePage.astro`.
- **[Decided/Verified]** Reusable sections are in `src/components/`; document metadata is in `src/layouts/SiteLayout.astro`; global CSS is `src/styles/global.css`.
- **[Decided/Verified]** Locale configuration is `src/config/locales.mjs`; site constants are `src/config/site.ts`; the type contract is `src/i18n/types.ts`; dictionaries are `src/i18n/id.ts` and `src/i18n/en.ts`.
- **[Decided/Verified]** Static output is `dist/`; the build generated `dist/index.html` and `dist/en/index.html`, plus copied public assets and redirect/header files.
- **[Decided/Verified]** `wrangler.jsonc` keeps the Worker + Static Assets architecture, points assets at `./dist`, uses `not_found_handling: "none"`, and runs the Worker first for `/index.html`.

### Verification

- **[Decided/Verified]** `npm run format:check` passed.
- **[Decided/Verified]** `npm run lint` passed.
- **[Decided/Verified]** `npm run typecheck` reported 0 errors and 1 existing hint: deprecated inline `event` usage in `src/components/SampleModal.astro`.
- **[Decided/Verified]** `npm test` passed all 13 Worker route tests.
- **[Decided/Verified]** `npm run build` passed and emitted static `/` and `/en/` pages.
- **[Decided/Verified]** `npx wrangler deploy --dry-run` passed, read 12 asset files, and performed no deployment.
- **[Unknown]** `npm audit` is not clean: it reported 5 high-severity `braces` vulnerabilities through the current `eslint-plugin-astro` dependency chain. `npm audit fix --force` proposed a breaking dependency change and was not run.
- **[Decided/Verified]** Local Wrangler route probes were run after the build; port `8788` was stopped and confirmed free afterward.
- **[Unknown]** Fonts were not verifiable in the headless browser; no browser visual parity claim is made here.

### Worker route results

The following are built local Wrangler results. Relative `Location` values are shown exactly as returned by the local server; the direct Worker unit tests assert equivalent redirects with status `302`.

| Route                                   | Result                                                                  |
| --------------------------------------- | ----------------------------------------------------------------------- |
| `GET /`                                 | `200`, no `Location`                                                    |
| `GET /en/`                              | `200`, no `Location`                                                    |
| `GET /en`                               | `307`, `Location: /en/` from the existing static redirect normalization |
| `GET /index.html`                       | `302`, `Location: http://127.0.0.1:8788/`                               |
| `GET /en/index.html`                    | `302`, `Location: /en/`                                                 |
| `GET /old/deep/path` with HTML `Accept` | `302`, `Location: http://127.0.0.1:8788/`                               |
| `GET /en/unknown` with HTML `Accept`    | `302`, `Location: http://127.0.0.1:8788/en/`                            |
| `GET /xx/` with HTML `Accept`           | `302`, `Location: http://127.0.0.1:8788/`                               |
| Existing logo asset                     | `200`, no `Location`                                                    |
| Missing asset                           | `404`, no `Location`                                                    |
| `POST /old/path`                        | `404`, no `Location`                                                    |
| `GET /api/sample-request`               | `404`, no `Location`; not redirected                                    |

- **[Decided/Verified]** `_headers` takes effect under local Workers preview: security headers were present, and asset cache headers were present.
- **[Decided/Verified]** `_redirects` takes effect under local Workers preview for `/index.html` and `/en/index.html` normalization.
- **[Decided/Verified]** `public/404.html` is copied to `dist/`, but a missing asset returned a plain Worker `404` and did not render that fallback file.

## 4. Outstanding Issues

- **[Unknown]** English copy has not received native-speaker review. `src/i18n/en.ts` contains these `// REVIEW` groups: SEO metadata; primary actions; navigation; hero; value propositions; origin; 2026 coffees; export; processing; philosophy; FAQ; CTA; footer; mock sample form; floating WhatsApp.
- **[Decided]** English numeric formatting is already written with English separators; native-speaker/content review remains open.
- **[Decided]** The current production origin is the `workers.dev` URL. **[Recommended]** When a custom domain exists, change `site` in `astro.config.mjs` and redirect or noindex the `workers.dev` origin to avoid duplicate content.
- **[Recommended]** Pages cleanup is pending approval: remove `public/404.html` because Workers with `not_found_handling: "none"` did not use it, and remove the historical `cloudflare-pages` package keyword. No cleanup was performed.
- **[Decided]** Keep `public/_headers` and `public/_redirects`; local Wrangler verification showed both take effect under Workers.
- **[Unknown]** The duplicated Google Fonts `@import`/`<link>` arrangement with different weight ranges has not been normalized.
- **[Unknown]** The deprecated `onsubmit="handleSampleSubmit(event)"` hint in `src/components/SampleModal.astro` has not been changed.
- **[Decided]** The pseudo-locale check is manual and temporary; no pseudo-locale script is committed or shipped.
- **[Unknown]** No live production URL, deployed Worker, production headers, or production redirects have been checked.
- **[Decided]** The form remains a mock: `public/script.js` prevents default submission and displays success without sending or persisting data.
- **[Decided]** The migration branch is not merged to `master`; no deployment was performed.

## 5. Next Steps

The following order is recommended, not approved.

1. **[Recommended]** Review and merge `feature/astro-i18n`, then deploy only after explicit approval:
   ```sh
   npm run build
   npx wrangler deploy --dry-run
   npx wrangler deploy
   ```
   **[Recommended]** After deployment, check `/`, `/en/`, `/en`, an unknown path, the language switcher, mock form behavior, and view-source canonical/hreflang tags.
2. **[Recommended]** Implement the sample-request backend in separate approved phases: reconcile; failing tests first; Worker `POST /api/sample-request`; D1 migration with `notified_at` nullable; Turnstile `siteverify` using an environment secret; frontend wiring; final verification.
   - **[Decided]** Required backend behavior: server-side validation; store in D1 before success; status codes `200/400/403/405/413/500`; same-origin only; email after storage and never allowed to fail the request; `/api/*` must never redirect to `/`.
   - **[Unknown]** Required form fields and notification recipient/provider are not confirmed and must be asked before implementation.
   - **[Recommended]** Use local D1 only during development with a placeholder `database_id`; list the manual Cloudflare steps before any remote setup.
   - **[Decided]** Hono is not needed for one endpoint unless the API scope changes.
3. **[Recommended]** Add languages one at a time under the README “Add a language” rule: update `src/config/locales.mjs`, add a typed dictionary, add `// REVIEW` groups, run typecheck/tests/build, and perform the manual pseudo-locale layout check at `768/935/1024/1280px`.

## 6. Instructions for the Next Agent

- **[Decided]** Start with:
  ```sh
  git status --short --branch
  git log --oneline -15
  ```
  Then read `package.json`, `astro.config.mjs`, `wrangler.jsonc`, `worker.mjs`, `src/config/*`, `src/i18n/types.ts`, `tests/`, and `README.md`.
- **[Decided]** Treat this file as claims to verify against the repository.
- **[Decided]** Do not change layout, design, or Indonesian copy unless explicitly asked.
- **[Decided]** Do not claim the form submits data until the backend exists.
- **[Decided]** Preserve the phase-by-phase approval workflow, tests-first routing/API work, built-output verification, explicit uncertainty reporting, and per-phase commits.
- **[Decided]** Ask before assuming any item marked **[Unknown]**.
- **[Decided]** Do not deploy or run commands that change remote Cloudflare resources without a separate explicit request.
- **[Decided]** Preserve `checkpoint/clean-static-site` and `feature/commercial-hybrid`.
