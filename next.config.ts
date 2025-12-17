import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true';

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  disable: process.env.NODE_ENV === "development" || isStaticExport,
  workboxOptions: {
    disableDevLogs: true,
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
};

export default withPWA(nextConfig);
