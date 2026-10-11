# PILOSO website proposals

Static client-review site for PILOSO, a specialty green coffee exporter from Gunung Muria, Central Java. The root page presents four independent visual concepts; no application framework or build step is required.

## Repository layout

```text
.
├── index.html                 # Client-facing concept showcase
├── styles/showcase.css        # Showcase styles
├── scripts/showcase.js        # Preview controls
├── concepts/                  # Standalone concept websites
│   ├── agro-heritage/
│   ├── warm-roast/
│   ├── editorial/
│   └── commercial/
├── assets/logo/               # Shared brand asset
├── references/                # Source material (not deployed)
├── 1/ … 4/                    # Legacy short-link fallback pages
├── _headers                   # Cloudflare Pages headers
├── _redirects                 # Numeric short-link aliases
└── wrangler.jsonc             # Cloudflare configuration
```

Each concept keeps its own `index.html`, `style.css`, and `script.js` so design directions can diverge without affecting one another. They reference the shared logo at `../../assets/logo/logo-original.jpeg`.

## Local development

Requirements: Node.js and npm. Install the locked dependencies, including the local static server:

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`. `npm run preview` serves the same files on `http://localhost:8788`. The development commands use the declared `serve` dependency; Wrangler remains available for deployment.

## Deploy

Authenticate with Cloudflare Wrangler, then use the deployment command appropriate for the configured target:

```sh
npx wrangler login
npm run deploy
```

`npm run deploy:preview` publishes a Cloudflare Pages preview branch. Confirm the target project and deployment workflow before publishing.

## URLs

The showcase links directly to `/concepts/<name>/`. The short paths `/1/` through `/4/` remain reviewer-friendly aliases; legacy `/designs/1/` through `/designs/4/` paths also redirect to the renamed concepts. These routes are configured in `_redirects`, with small numeric HTML fallbacks for static hosts that do not process Cloudflare rules.

## Editing

- Update the showcase in `index.html`, `styles/showcase.css`, and `scripts/showcase.js`.
- Edit each concept only in its matching `concepts/<name>/` directory.
- Keep shared brand files in `assets/`; avoid copying them into concept folders.
- Keep `references/` out of published assets.
