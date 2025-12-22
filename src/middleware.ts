import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only redirect on the home page
  if (pathname === "/") {
    const modeCookie = request.cookies.get("sipwiki-mode");
    const preferredMode = modeCookie?.value;

    // If user prefers cocktails, redirect to cocktails page
    if (preferredMode === "cocktails") {
      return NextResponse.redirect(new URL("/cocktails", request.url));
    }

    // Default: redirect to games (or let them stay on home which shows games)
    // We redirect to /games for consistency
    return NextResponse.redirect(new URL("/games", request.url));
  }

  return NextResponse.next();
}

// Only run middleware on the home page
export const config = {
  matcher: "/",
};
