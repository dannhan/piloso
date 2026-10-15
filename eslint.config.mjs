import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

// The Astro flat preset delegates TypeScript frontmatter to typescript-eslint.
export default [
  {
    ignores: [
      '.astro/**',
      '.wrangler/**',
      'dist/**',
      'node_modules/**',
      'references/astro-parity-index.html',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs['flat/recommended'],
  {
    files: ['worker.mjs', 'tests/**/*.mjs'],
    languageOptions: {
      globals: {
        Request: 'readonly',
        Response: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
      },
    },
  },
  {
    files: ['public/script.js'],
    languageOptions: {
      globals: {
        document: 'readonly',
      },
    },
    rules: {
      // These global functions are consumed by the page's inline HTML handlers.
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern:
            '^(openSampleModal|closeSampleModal|toggleFaq|selectLotAndOpen|handleSampleSubmit)$',
        },
      ],
    },
  },
];
