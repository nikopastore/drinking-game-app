import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "sipwiki.app";

const canonicalizeRequest = (request: NextRequest) => {
  const url = request.nextUrl.clone();
  const hostHeader = request.headers.get("host") ?? "";
  const hostname = hostHeader.split(":")[0].toLowerCase();
  const forwardedProto = request.headers.get("x-forwarded-proto") ?? "";
  const protocol = forwardedProto.split(",")[0] || url.protocol.replace(":", "");

  let needsRedirect = false;
  const isCanonicalHost = hostname === CANONICAL_HOST;
  const isWwwHost = hostname === `www.${CANONICAL_HOST}`;

  if (isWwwHost) {
    url.hostname = CANONICAL_HOST;
    needsRedirect = true;
  }

  if ((isCanonicalHost || isWwwHost) && protocol !== "https") {
    url.protocol = "https";
    needsRedirect = true;
  }

  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1);
    needsRedirect = true;
  }

  return { url, needsRedirect };
};

export function middleware(request: NextRequest) {
  const { url, needsRedirect } = canonicalizeRequest(request);

  if (needsRedirect) {
    return NextResponse.redirect(url, 301);
  }

  const { pathname } = url;

  // Only redirect on the home page
  if (pathname === "/") {
    const modeCookie = request.cookies.get("sipwiki-mode");
    const preferredMode = modeCookie?.value;

    // If user prefers cocktails, redirect to cocktails page
    if (preferredMode === "cocktails") {
      return NextResponse.redirect(new URL("/cocktails", url));
    }

    // Default: redirect to games (or let them stay on home which shows games)
    // We redirect to /games for consistency
    return NextResponse.redirect(new URL("/games", url));
  }

  return NextResponse.next();
}

// Run middleware on all app routes except Next internals and static assets
export const config = {
  matcher: ["/", "/((?!_next|api|.*\\..*).*)"],
};
