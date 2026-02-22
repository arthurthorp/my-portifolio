import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['pt', 'en'] as const;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pt', request.url));
  }

  const segment = pathname.split('/').filter(Boolean)[0];
  const response = NextResponse.next();

  if (segment && locales.includes(segment as (typeof locales)[number])) {
    response.cookies.set('NEXT_LOCALE', segment, { path: '/', sameSite: 'lax' });
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)'],
};
