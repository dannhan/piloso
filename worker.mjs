export default {
  async fetch(request) {
    const url = new URL(request.url);
    const canRedirect = request.method === 'GET' || request.method === 'HEAD';
    const isHtmlNavigation = /(?:^|,\s*)(?:text\/html|application\/xhtml\+xml)/i.test(
      request.headers.get('Accept') ?? ''
    );

    if (canRedirect && isHtmlNavigation && url.pathname !== '/') {
      return Response.redirect(new URL('/', url), 302);
    }

    return new Response('Not found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' }
    });
  }
};
