import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
