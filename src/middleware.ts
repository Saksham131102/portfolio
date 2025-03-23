import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only protect admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Retrieve admin token from cookies
    const adminToken = request.cookies.get("admin_token")?.value || null;

    // Check if the user is authenticated (matches stored token)
    const isAuthenticated =
      adminToken && adminToken === process.env.ADMIN_TOKEN;

    // If not authenticated and not already on the login page, redirect
    if (
      !isAuthenticated &&
      !request.nextUrl.pathname.includes("/admin/login")
    ) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Apply middleware to all admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
