import type { NextRequest, NextFetchEvent } from 'next/server';
import { NextResponse } from 'next/server';
export function middleware(request: NextRequest, event: NextFetchEvent) {
  const accessToken = request.cookies.get('accessToken')?.value;
  const pathname = request.nextUrl.pathname;
  if (accessToken) {
    if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else {
    if (pathname.startsWith('/mypage')) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
}
