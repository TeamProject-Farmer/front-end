import type { NextRequest, NextFetchEvent } from 'next/server';
import { NextResponse } from 'next/server';
export function middleware(request: NextRequest, event: NextFetchEvent) {
  const refreshToken = request.cookies.get('refreshToken')?.value;
  const pathname = request.nextUrl.pathname;

  if (refreshToken) {
    if (pathname.startsWith('/login')) {
      return NextResponse.redirect(
        new URL('/?alert=이미 로그인한 사용자입니다.', request.url),
      );
    }
    if (pathname.startsWith('/register')) {
      return NextResponse.redirect(
        new URL('/?alert=이미 가입된 회원입니다.', request.url),
      );
    }
  }
  if (!refreshToken) {
    // if (pathname.startsWith('/order')) {
    //   return NextResponse.redirect(
    //     new URL('/?alert=로그인 후 이용 가능한 서비스입니다.', request.url),
    //   )
    // }
    if (pathname.startsWith('/mypage')) {
      return NextResponse.redirect(
        new URL('/?alert=로그인 후 이용 가능한 서비스입니다.', request.url),
      );
    }
  }
}
