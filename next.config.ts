import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";
import withPWAInit from "@ducanh2912/next-pwa";

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development" || isStaticExport,
  fallbacks: {
    document: "/offline.html",
  },
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:gstatic|googleapis)\.com\/.*/i,
        handler: "CacheFirst",
        options: {
          cacheName: "google-fonts",
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
          },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
        handler: "CacheFirst",
        options: {
          cacheName: "images",
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
          },
        },
      },
      {
        urlPattern: /^https:\/\/sipwiki\.app\/api\/.*/i,
        handler: "NetworkFirst",
        options: {
          cacheName: "api-cache",
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 60 * 5, // 5 minutes
          },
          networkTimeoutSeconds: 10,
        },
      },
    ],
  },
});

const nextConfig: NextConfig = {
  // Required for Next.js 15+ with PWA plugin (which adds webpack config)
  turbopack: {},
  // Enable static export for Capacitor builds
  ...(isStaticExport && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  }),
  async redirects() {
    const gameDataPath = path.join(process.cwd(), "src/config/gameData.ts");
    const gameData = fs.readFileSync(gameDataPath, "utf8");
    const slugMatches = Array.from(gameData.matchAll(/slug:\\s*\"([^\"]+)\"/g)).map(
      (match) => match[1]
    );
    const slugs = Array.from(new Set(slugMatches));

    return slugs.map((slug) => ({
      source: `/games/${slug}`,
      destination: `/game/${slug}`,
      permanent: true,
    }));
  },
};

export default withPWA(nextConfig);
