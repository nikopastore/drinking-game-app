import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
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

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  // CRITICAL: This tells Google your canonical domain
  metadataBase: new URL("https://sipwiki.app"),

  // Brand-first title for brand searches
  title: {
    default: "SipWiki - Drinking Game Rules & Party App",
    template: "%s | SipWiki",
  },
  description: "SipWiki is the ultimate party companion app. 30+ fun group games with rules, from classic Beer Pong to Kings Cup. Perfect icebreakers for house parties, pre-games, and game nights. Works offline!",

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
  themeColor: "#ec4899",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "SipWiki",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: "SipWiki - Drinking Game Rules & Party App",
    description: "Browse 50+ drinking games with complete rules. Card games, cup games, dice games, and no-prop favorites. Find the perfect party game tonight!",
    type: "website",
    locale: "en_US",
    siteName: "SipWiki",
    url: "https://sipwiki.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "SipWiki - Drinking Game Rules & Party App",
    description: "Browse 50+ drinking games with complete rules. Find the perfect party game tonight!",
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

// Organization schema for brand identity in Google
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SipWiki",
  alternateName: ["Sip Wiki", "SipWiki App"],
  url: "https://sipwiki.app",
  logo: "https://sipwiki.app/icon-512.png",
  description:
    "SipWiki is the #1 drinking game rules and party game companion app. Find rules for Beer Pong, King's Cup, Flip Cup, and 30+ more party games.",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />

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
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased min-h-screen bg-dark-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
