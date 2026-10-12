import { defineConfig } from 'astro/config';

const site = 'https://piloso.locked.workers.dev'; // Change when a custom domain is configured.

export default defineConfig({
  site,
  output: 'static',
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
