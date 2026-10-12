# PILOSO handoff

## 1. Context & Goals

PILOSO is a specialty green coffee exporter website. The proposal showcase was replaced with a single production site based on design 4 (“Modern Commercial”), with selected design 2 styling (sack treatment and dark CTA with a CSS pseudo-element PILOSO wordmark). The next planned product improvements are a real sample-request flow and a maintainable path to reusable components and additional languages.

## 2. Decisions & Preferences

- Keep the site on Cloudflare. For a backend, the proposed MVP is the existing Worker plus D1 for durable submissions and Turnstile validation; send notification email only after storage. Add Queues if reliable asynchronous retries become necessary. None of this backend has been implemented yet.
- For reusable UI and multilingual pages, Astro + TypeScript was recommended for the frontend. Hono + TypeScript is viable for a larger Worker API but is not necessary for the current single endpoint; Hono does not itself provide the desired page/component/i18n workflow. This is a recommendation, not a user-approved implementation decision.
- Suggested locale shape: Indonesian at `/`, English at `/en/`; keep explicit language selection. Confirm languages and content before implementation.
- Do not deploy without a separate request. Do not discard the checkpoint branch or feature branch.

## 3. Current State

- Verified workspace at handoff creation: branch `master`, clean tree before this file, HEAD `2c4158d` (“Merge commercial single-site redesign”), tracking `origin/master`; remote fetch had confirmed the same commit. Preview port 3000 was not listening. No deployment was made.
- Relevant branches/commits: `feature/commercial-hybrid` at `166c2a8`; checkpoint `checkpoint/clean-static-site` at `9449557`; prior hybrid styling commit `99e15e1`.
- Current site is in `public/`: `index.html`, `style.css`, `script.js`, `assets/`, `_headers`, `_redirects`, and `404.html`. Worker/config/tests: `worker.mjs`, `wrangler.jsonc`, `tests/worker.test.mjs`. `README.md` documents the deployment and structure.
- The sample form is still a visual mock: `public/script.js` `handleSampleSubmit` prevents default and displays success without sending or saving form data.
- `worker.mjs` redirects non-root HTML GET/HEAD navigation requests to `/`; it returns 404 otherwise. This means localized paths such as `/en/` would currently redirect to `/`, and a future POST API route must be implemented rather than falling through to 404.
- Previously verified on this same committed tree before merge: all 3 Node tests passed; `npx wrangler deploy --dry-run` succeeded and read 9 static assets; `npm audit` reported 0 vulnerabilities; local Wrangler HTTP probes returned 200 for `/` and the logo and 302 for an unknown HTML path and `/index.html`. Local preview was then stopped. No production deploy or live-domain verification.

## 4. Outstanding Issues

- No backend, D1 database/migrations, Turnstile, email delivery, or form persistence exists. Decide lead recipient/review process and required fields before building.
- No language list, approved translations, locale-selector behavior, or URL/SEO policy has been agreed.
- The catch-all Worker route conflicts with locale pages and would intercept unknown HTML routes; design explicit supported-locale handling while preserving the user's redirect requirement for all other routes.
- Clarify the intended Cloudflare deployment target: `wrangler.jsonc` configures Workers with Static Assets, while package scripts/README also retain a Cloudflare Pages preview command. Verify the project's actual dashboard/production setup before changing deployment architecture.
- Astro migration and Hono adoption are proposals only; no dependencies or framework migration has begun.

## 5. Next Steps

1. Ask/confirm which languages to support, which is default, and whether language selection is manual or preference-assisted; obtain approved translations/content.
2. Decide whether to migrate to Astro now. If yes, first inspect the whole current HTML/CSS/JS and path references; move the existing visual design without changing it, create shared layout/components and locale pages, then revise Worker routing so `/` and supported locale routes work while other page routes redirect home.
3. Implement the sample-request endpoint and form together: validate fields server-side, verify Turnstile server-side, persist in D1 before success, then notify the chosen destination. Add migration and tests. Use Hono only if API scope justifies it; otherwise use the Worker/Astro endpoint directly.
4. Verify with tests, Wrangler dry-run, local HTTP checks for `/`, `/en/`, invalid routes, assets, API success/validation/spam/error paths; visually review desktop/mobile and verify stored test submission. Do not deploy unless asked.

## 6. Instructions for the Next Agent

Start with `git status --short --branch`, `git log -1`, `package.json`, `wrangler.jsonc`, `worker.mjs`, `tests/worker.test.mjs`, and the `public/` files. Preserve the current design, hybrid sack/CTA styling, and checkpoint branch. Treat proposed Astro/Hono/backend choices as undecided until confirmed; do not claim the mock form submits data. Before route changes, add tests for root, supported locales, unknown HTML navigation, asset misses, and API methods. Use `npm test`, `npx wrangler deploy --dry-run`, and actual Wrangler local HTTP probes; check and stop preview processes after testing. Never deploy without authorization.