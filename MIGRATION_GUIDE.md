# PILOSO static website structure and deployment

This repository is a static client-review site presenting four independent design directions. Keep the concepts separate so each can evolve without affecting the others. A framework is not needed for the current showcase/proposal workflow.

## Current structure

```text
piloso/
├── index.html                     # Showcase and interactive preview
├── styles/showcase.css            # Showcase styles
├── scripts/showcase.js            # Preview tab and viewport controls
├── concepts/
│   ├── agro-heritage/             # Concept 1
│   ├── warm-roast/                # Concept 2
│   ├── editorial/                 # Concept 3
│   └── commercial/                # Concept 4
├── assets/logo/                   # Shared brand asset
├── references/                    # Source material; excluded from deployment
├── 1/, 2/, 3/, 4/                 # Fallback pages for short aliases
├── _redirects                     # Cloudflare Pages aliases
├── _headers                       # Cloudflare Pages headers
├── wrangler.jsonc                 # Cloudflare configuration
├── package.json                   # Local and deployment commands
└── README.md                      # Usage guide
```

## Local development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. Development and preview use the declared `serve` dependency instead of Wrangler's dev runtime.

## Concept URLs

- Showcase: `/`
- Concept 1: `/concepts/agro-heritage/` (alias `/1/`)
- Concept 2: `/concepts/warm-roast/` (alias `/2/`)
- Concept 3: `/concepts/editorial/` (alias `/3/`)
- Concept 4: `/concepts/commercial/` (alias `/4/`)

Each concept has its own HTML, CSS, and JavaScript. All use the shared logo in `assets/logo/`; do not add copies to concept folders.

## Deployment

`npm run deploy` deploys through Wrangler using `wrangler.jsonc`. `npm run deploy:preview` uploads a preview branch to the Cloudflare Pages project named `piloso`. Verify the account and target before deploying.

## Future migration

Do not introduce a framework merely to tidy the four static concepts. Reconsider Astro once a concept is selected and shared production components/content need to be maintained. A CMS or runtime/backend is warranted only if dynamic content, editor workflows, authentication, or data integrations become requirements.
