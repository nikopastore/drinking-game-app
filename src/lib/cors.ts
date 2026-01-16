import { NextRequest, NextResponse } from "next/server";

/**
 * Allowed origins for CORS
 * In production, this should be restricted to your domain
 */
const ALLOWED_ORIGINS = [
  "https://sipwiki.app",
  "https://www.sipwiki.app",
  // Allow localhost for development
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

/**
 * Check if origin is allowed
 */
function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false;

  // In development, allow all localhost origins
  if (process.env.NODE_ENV === "development") {
    if (origin.startsWith("http://localhost:") || origin.startsWith("http://127.0.0.1:")) {
      return true;
    }
  }

  return ALLOWED_ORIGINS.includes(origin);
}

/**
 * CORS headers configuration
 */
export interface CorsConfig {
  /** Allowed HTTP methods */
  methods?: string[];
  /** Allowed headers */
  allowedHeaders?: string[];
  /** Headers to expose to the client */
  exposedHeaders?: string[];
  /** Allow credentials (cookies, authorization headers) */
  credentials?: boolean;
  /** Max age for preflight cache (seconds) */
  maxAge?: number;
}

const DEFAULT_CONFIG: Required<CorsConfig> = {
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  exposedHeaders: ["X-RateLimit-Limit", "X-RateLimit-Remaining", "X-RateLimit-Reset"],
  credentials: true,
  maxAge: 86400, // 24 hours
};

/**
 * Create CORS headers for a response
 */
export function createCorsHeaders(
  request: NextRequest,
  config: CorsConfig = {}
): Record<string, string> {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };
  const origin = request.headers.get("origin");
  const headers: Record<string, string> = {};

  // Only set CORS headers if origin is allowed
  if (isOriginAllowed(origin)) {
    headers["Access-Control-Allow-Origin"] = origin!;
    headers["Access-Control-Allow-Methods"] = mergedConfig.methods.join(", ");
    headers["Access-Control-Allow-Headers"] = mergedConfig.allowedHeaders.join(", ");
    headers["Access-Control-Expose-Headers"] = mergedConfig.exposedHeaders.join(", ");
    headers["Access-Control-Max-Age"] = mergedConfig.maxAge.toString();

    if (mergedConfig.credentials) {
      headers["Access-Control-Allow-Credentials"] = "true";
    }
  }

  // Always set Vary header for caching
  headers["Vary"] = "Origin";

  return headers;
}

/**
 * Handle CORS preflight OPTIONS request
 */
export function handleCorsPreflightRequest(
  request: NextRequest,
  config: CorsConfig = {}
): NextResponse {
  const corsHeaders = createCorsHeaders(request, config);

  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

/**
 * Apply CORS headers to an existing response
 */
export function applyCorsHeaders(
  response: NextResponse,
  request: NextRequest,
  config: CorsConfig = {}
): NextResponse {
  const corsHeaders = createCorsHeaders(request, config);

  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

/**
 * Create a CORS-enabled JSON response
 */
export function corsJsonResponse(
  data: unknown,
  request: NextRequest,
  init?: ResponseInit & { corsConfig?: CorsConfig }
): NextResponse {
  const { corsConfig, ...responseInit } = init || {};
  const corsHeaders = createCorsHeaders(request, corsConfig);

  const response = NextResponse.json(data, responseInit);

  Object.entries(corsHeaders).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}
