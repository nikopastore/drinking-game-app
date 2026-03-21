import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "sipwiki.app";

/**
 * Security headers to protect against common web vulnerabilities
 * https://owasp.org/www-project-secure-headers/
 */
const baseSecurityHeaders = {
  // Prevent clickjacking by disallowing iframe embedding
  "X-Frame-Options": "DENY",

  // Prevent MIME type sniffing
  "X-Content-Type-Options": "nosniff",

  // Enable XSS filter (legacy, but still useful for older browsers)
  "X-XSS-Protection": "1; mode=block",

  // Control referrer information sent with requests
  "Referrer-Policy": "strict-origin-when-cross-origin",

  // Force HTTPS for 1 year, include subdomains, allow preload list
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",

  // Restrict browser features/APIs
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
};

/**
 * Content Security Policy for page routes
 */
const pageCSP = [
  // Default: only allow same origin
  "default-src 'self'",
  // Scripts: self, inline (needed for Next.js), and eval (needed for dev)
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  // Styles: self and inline (needed for Tailwind/styled components)
  "style-src 'self' 'unsafe-inline'",
  // Images: self, data URIs, and common image CDNs
  "img-src 'self' data: blob: https:",
  // Fonts: self and common font CDNs
  "font-src 'self' data:",
  // Connect: self and required APIs
  "connect-src 'self' https://*.supabase.co https://api.openai.com wss://*.supabase.co",
  // Frames: none (we don't embed iframes)
  "frame-src 'none'",
  // Frame ancestors: none (prevent embedding)
  "frame-ancestors 'none'",
  // Object: none (no plugins)
  "object-src 'none'",
  // Base URI: self only
  "base-uri 'self'",
  // Form action: self only
  "form-action 'self'",
  // Upgrade insecure requests
  "upgrade-insecure-requests",
].join("; ");

/**
 * Content Security Policy for API routes (more restrictive)
 */
const apiCSP = [
  "default-src 'none'",
  "frame-ancestors 'none'",
].join("; ");

/**
 * Apply security headers to a response
 */
function applySecurityHeaders(response: NextResponse, isApiRoute: boolean = false): NextResponse {
  // Apply base security headers
  Object.entries(baseSecurityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  // Apply appropriate CSP based on route type
  response.headers.set("Content-Security-Policy", isApiRoute ? apiCSP : pageCSP);

  return response;
}

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
  if (url.pathname === "/drink-calculator") {
    url.pathname = "/alcohol-calculator";
    const redirectResponse = NextResponse.redirect(url, 301);
    return applySecurityHeaders(redirectResponse);
  }

  if (url.pathname === "/game" || url.pathname.startsWith("/game/")) {
    url.pathname = url.pathname.replace(/^\/game/, "/games");
    const redirectResponse = NextResponse.redirect(url, 301);
    return applySecurityHeaders(redirectResponse);
  }

  const { pathname } = url;
  const isApiRoute = pathname.startsWith("/api");

  if (needsRedirect) {
    const redirectResponse = NextResponse.redirect(url, 301);
    return applySecurityHeaders(redirectResponse, isApiRoute);
  }

  // API routes: just apply security headers and continue
  if (isApiRoute) {
    const response = NextResponse.next();
    return applySecurityHeaders(response, true);
  }

  // Only redirect on the home page
  if (pathname === "/") {
    const modeCookie = request.cookies.get("sipwiki-mode");
    const preferredMode = modeCookie?.value;

    // If user prefers cocktails, redirect to cocktails page
    if (preferredMode === "cocktails") {
      const redirectResponse = NextResponse.redirect(new URL("/cocktails", url));
      return applySecurityHeaders(redirectResponse);
    }

    // Default: redirect to games (or let them stay on home which shows games)
    // We redirect to /games for consistency
    const redirectResponse = NextResponse.redirect(new URL("/games", url));
    return applySecurityHeaders(redirectResponse);
  }

  // Apply security headers to all page responses
  const response = NextResponse.next();
  return applySecurityHeaders(response);
}

// Run middleware on all app routes except Next internals and static assets
export const config = {
  matcher: [
    // Match all routes except Next.js internals and static files
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
