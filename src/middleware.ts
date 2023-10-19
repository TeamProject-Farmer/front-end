import type { NextRequest, NextFetchEvent } from 'next/server';
import { NextResponse } from 'next/server';
export function middleware(request: NextRequest, event: NextFetchEvent) {
  const refreshToken = request.cookies.get('refreshToken')?.value;
  const pathname = request.nextUrl.pathname;

  if (refreshToken) {
    if (pathname === '/login') {
      return NextResponse.redirect(
        new URL('/?alert=이미 로그인한 사용자입니다.', request.url),
      );
    }
    if (pathname === '/register') {
      return NextResponse.redirect(
        new URL('/?alert=이미 가입된 회원입니다.', request.url),
      );
    }
  }
  if (pathname === '/mypage/myplant') {
    return NextResponse.redirect(
      new URL('/?alert=준비 중인 서비스입니다.', request.url),
    );
  }
  if (!refreshToken && pathname.startsWith('/mypage')) {
    return NextResponse.redirect(
      new URL('/?alert=로그인 후 이용 가능한 서비스입니다.', request.url),
    );
  }
}
