import assert from 'node:assert/strict';
import test from 'node:test';
import worker from '../worker.mjs';

test('redirects unknown browser pages to the site root', async () => {
  const request = new Request('https://piloso.example/old/deep/path', {
    headers: { Accept: 'text/html,application/xhtml+xml' }
  });

  const response = await worker.fetch(request, {});

  assert.equal(response.status, 302);
  assert.equal(response.headers.get('Location'), 'https://piloso.example/');
});

test('does not redirect missing non-page assets', async () => {
  const request = new Request('https://piloso.example/missing-image.png', {
    headers: { Accept: 'image/avif,image/webp,image/*' }
  });

  const response = await worker.fetch(request, {});

  assert.equal(response.status, 404);
  assert.equal(response.headers.get('Location'), null);
});

test('does not redirect unsafe methods', async () => {
  const request = new Request('https://piloso.example/old/path', {
    method: 'POST',
    headers: { Accept: 'text/html' }
  });

  const response = await worker.fetch(request, {});

  assert.equal(response.status, 404);
  assert.equal(response.headers.get('Location'), null);
});
