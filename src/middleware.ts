import { NextResponse } from 'next/server';
import { auth } from './auth';

export default auth((request) => {
  const { nextUrl } = request;
  const isLoggedIn = !!request.auth; 
  const pathname = nextUrl.pathname;

  console.log('Authentication Data:', request.auth);
  console.log('Pathname:', pathname);

  if (isLoggedIn) {
    if (pathname === '/login' || pathname === '/register') {
      return NextResponse.redirect(new URL('/', nextUrl));
    }
  } else {
    if (pathname !== '/login' && pathname !== '/register' && pathname !== '/') {
      return NextResponse.redirect(new URL('/login', nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/login', '/register', '/'], 
};
