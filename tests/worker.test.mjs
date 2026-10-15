import assert from 'node:assert/strict';
import test from 'node:test';
import worker from '../worker.mjs';
import { locales } from '../src/config/locales.mjs';

const origin = 'https://piloso.example';
const assetBodies = new Map([
  ['/', '<html lang="id">home</html>'],
  ['/en/', '<html lang="en">english</html>'],
  ['/fr/', '<html lang="fr">french</html>'],
  ['/assets/logo/logo-original.jpeg', 'image'],
]);

const env = {
  ASSETS: {
    async fetch(request) {
      const body = assetBodies.get(new URL(request.url).pathname);
      return body === undefined
        ? new Response('Not found', { status: 404 })
        : new Response(body, { status: 200 });
    },
  },
};

function request(path, options = {}) {
  return new Request(`${origin}${path}`, {
    headers: { Accept: 'text/html,application/xhtml+xml', ...options.headers },
    ...options,
  });
}

async function responseFor(path, options = {}) {
  return worker.fetch(request(path, options), env);
}

function location(response) {
  return response.headers.get('Location');
}

test('serves the Indonesian home page', async () => {
  const response = await responseFor('/');

  assert.equal(response.status, 200);
  assert.equal(location(response), null);
});

test('serves the English home page', async () => {
  const response = await responseFor('/en/');

  assert.equal(response.status, 200);
  assert.equal(location(response), null);
});

test('normalizes a locale path without a trailing slash', async () => {
  const response = await responseFor('/en');

  assert.equal(response.status, 302);
  assert.equal(location(response), `${origin}/en/`);
});

test('normalizes the root HTML entry point', async () => {
  const response = await responseFor('/index.html');

  assert.equal(response.status, 302);
  assert.equal(location(response), `${origin}/`);
});

test('normalizes a locale HTML entry point', async () => {
  const response = await responseFor('/en/index.html');

  assert.equal(response.status, 302);
  assert.equal(location(response), `${origin}/en/`);
});

test('redirects an unknown HTML path to the root', async () => {
  const response = await responseFor('/old/deep/path');

  assert.equal(response.status, 302);
  assert.equal(location(response), `${origin}/`);
});

test('redirects an unknown page under a supported locale to that locale home', async () => {
  const response = await responseFor('/en/unknown');

  assert.equal(response.status, 302);
  assert.equal(location(response), `${origin}/en/`);
});

test('redirects an unsupported locale prefix to the root', async () => {
  const response = await responseFor('/xx/');

  assert.equal(response.status, 302);
  assert.equal(location(response), `${origin}/`);
});

test('serves an existing asset without a page redirect', async () => {
  const response = await responseFor('/assets/logo/logo-original.jpeg', {
    headers: { Accept: 'image/avif,image/webp,image/*' },
  });

  assert.equal(response.status, 200);
  assert.equal(location(response), null);
});

test('returns 404 for a missing asset', async () => {
  const response = await responseFor('/missing-image.png', {
    headers: { Accept: 'image/avif,image/webp,image/*' },
  });

  assert.equal(response.status, 404);
  assert.equal(location(response), null);
});

test('does not redirect unsafe methods on page routes', async () => {
  const response = await responseFor('/old/path', {
    method: 'POST',
    headers: { Accept: 'text/html' },
  });

  assert.equal(response.status, 404);
  assert.equal(location(response), null);
});

test('leaves API paths outside page redirect handling', async () => {
  const response = await responseFor('/api/sample-request');

  assert.notEqual(response.status, 302);
  assert.notEqual(location(response), `${origin}/`);
});

test('routes a locale added to the shared list without Worker changes', async () => {
  const locale = 'fr';
  locales.push(locale);

  try {
    const response = await responseFor(`/${locale}/`);

    assert.equal(response.status, 200);
    assert.equal(location(response), null);
  } finally {
    locales.pop();
  }
});
