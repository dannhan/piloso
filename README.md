# PILOSO website

The production site is the former Modern Commercial design (concept 4), served from the domain root. The proposal showcase and the other three design candidates have been removed.

## Layout

```text
.
├── public/
│   ├── index.html      # PILOSO homepage
│   ├── style.css       # Site styles
│   ├── script.js       # Navigation, FAQ, and sample-form interactions
│   ├── 404.html        # Browser redirect fallback for Cloudflare Pages
│   ├── _redirects      # Normalizes /index.html to /
│   ├── _headers        # Cloudflare Pages security/cache headers
│   └── assets/logo/    # Shared PILOSO logo
├── worker.mjs          # Redirects unknown page routes to /
├── tests/              # Worker redirect tests
└── wrangler.jsonc      # Cloudflare Worker + static assets config
```

## Routing

The home page is `/`. Requests for other HTML routes redirect to `/`; missing non-page assets remain 404s. Direct `/index.html` requests are normalized to `/`. The Worker returns an HTTP redirect for unknown page routes; the Pages fallback uses `404.html` to redirect the browser to the home page.

## Local development

Requires Node.js and npm:

```sh
npm ci
npm test
npm run dev
```

Open `http://localhost:3000`. `npm run preview` starts the Cloudflare Pages local preview on port 8788.

## Deploy

For the configured Worker with Static Assets:

```sh
npx wrangler login
npm run deploy
```

`npm run deploy:preview` uploads a Cloudflare Pages preview branch. Confirm the intended Cloudflare target before deploying.
