
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  // CRITICAL: This tells Google your canonical domain
  metadataBase: new URL("https://sipwiki.app"),

  // Brand-first title for brand searches
  title: {
    default: "SipWiki - Drinking Game Rules & Party App",
    template: "%s | SipWiki",
  },
  description: "SipWiki is a party companion with 58 drinking games, 50 cocktail recipes, party planning tools, and an AI game finder for house parties and game nights.",

  // Application name for brand recognition
  applicationName: "SipWiki",

  keywords: [
    // Brand terms FIRST
    "sipwiki",
    "sip wiki",
    "sipwiki app",
    "sipwiki drinking games",
    // High-intent, lower competition
    "party games for adults",
    "icebreaker games",
    "group games for adults",
    "pre-game app",
    "house party games",
    "game night ideas",
    // Activity-based
    "truth or dare app",
    "never have i ever game",
    "kings cup rules",
    "beer pong rules",
    "flip cup rules",
    // Contextual
    "drinking game rules",
    "party game app",
    "social games",
    "fun group activities",
    "adult party ideas",
  ],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SipWiki",
  },
  openGraph: {
    title: "SipWiki - Drinking Game Rules & Party App",
    description: "Browse 58 drinking games with complete rules. Card games, cup games, dice games, and no-prop favorites. Find the perfect party game tonight!",
    type: "website",
    locale: "en_US",
    siteName: "SipWiki",
    url: "https://sipwiki.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "SipWiki - Drinking Game Rules & Party App",
    description: "Browse 58 drinking games with complete rules. Find the perfect party game tonight!",
  },
  alternates: {
    canonical: "https://sipwiki.app",
  },
  verification: {
    google: "KC3FMAdS3TCHgFyNLYxcrvGnuk2NOyHOGmXZHEsfqz0",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ff3d81",
};

// Organization schema for brand identity in Google
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SipWiki",
  alternateName: ["Sip Wiki", "SipWiki App"],
  url: "https://sipwiki.app",
  logo: "https://sipwiki.app/icons/icon-512x512.png",
  description:
    "SipWiki is a drinking game rules and party companion app. Find rules for Beer Pong, King's Cup, Flip Cup, and 58 party games.",
  foundingDate: "2024",
  sameAs: [
    "https://twitter.com/sipwiki",
    "https://www.instagram.com/sipwiki",
    "https://www.tiktok.com/@sipwiki",
  ],
};

// WebSite schema for sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SipWiki",
  alternateName: "Sip Wiki",
  url: "https://sipwiki.app",
  description: "The #1 drinking game rules and party game companion app",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://sipwiki.app/games?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema for Brand Identity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* WebSite Schema for Sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-dark-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
