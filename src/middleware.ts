import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Only protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Check if the user is authenticated (has a valid admin token)
    const adminToken = request.cookies.get('admin_token')?.value;
    const isAuthenticated = adminToken === process.env.ADMIN_TOKEN;

    // If not authenticated and not already on the login page
    if (!isAuthenticated && !request.nextUrl.pathname.includes('/admin/login')) {
      // Redirect to the admin login page
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('from', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*'],
}; 