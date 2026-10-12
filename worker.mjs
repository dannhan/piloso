import { defaultLocale, locales } from './src/config/locales.mjs';

const htmlNavigation = /(?:^|,\s*)(?:text\/html|application\/xhtml\+xml)/i;

function notFound() {
  return new Response('Not found', {
    status: 404,
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

function homePath(locale) {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

function redirectTo(url, pathname) {
  return Response.redirect(new URL(pathname, url), 302);
}

async function serveAsset(request, env) {
  if (env?.ASSETS && typeof env.ASSETS.fetch === 'function') {
    return env.ASSETS.fetch(request);
  }

  return notFound();
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;
    const canRedirect = request.method === 'GET' || request.method === 'HEAD';
    const isHtmlNavigation = htmlNavigation.test(request.headers.get('Accept') ?? '');
    const segments = pathname.split('/').filter(Boolean);
    const firstSegment = segments[0];
    const isSupportedLocale = locales.includes(firstSegment);
    const isDefaultLocale = firstSegment === defaultLocale;
    const localeHome = isSupportedLocale ? homePath(firstSegment) : '/';

    if (pathname === '/api' || pathname.startsWith('/api/')) {
      return notFound();
    }

    if (!canRedirect) {
      return notFound();
    }

    if (pathname === '/index.html') {
      return redirectTo(url, '/');
    }

    if (pathname.endsWith('/index.html') && isSupportedLocale) {
      return redirectTo(url, localeHome);
    }

    if (pathname === '/' || (isSupportedLocale && pathname === localeHome)) {
      return serveAsset(request, env);
    }

    if (isSupportedLocale && isDefaultLocale) {
      return isHtmlNavigation ? redirectTo(url, '/') : serveAsset(request, env);
    }

    if (isSupportedLocale) {
      if (pathname === `/${firstSegment}`) {
        return redirectTo(url, localeHome);
      }

      return isHtmlNavigation ? redirectTo(url, localeHome) : serveAsset(request, env);
    }

    if (isHtmlNavigation) {
      return redirectTo(url, '/');
    }

    return serveAsset(request, env);
  },
};
