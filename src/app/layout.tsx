import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  // CRITICAL: This tells Google your canonical domain
  metadataBase: new URL("https://sipwiki.com"),

  // Brand-first title for brand searches
  title: {
    default: "SipWiki - The #1 Drinking Game Rules & Party Game App",
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
    title: "SipWiki - The #1 Drinking Game Rules & Party Game App",
    description: "SipWiki has 30+ fun party games with complete rules. Perfect for house parties, pre-games, and breaking the ice. Free app that works offline!",
    type: "website",
    locale: "en_US",
    siteName: "SipWiki",
    url: "https://sipwiki.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SipWiki - The #1 Drinking Game Rules App",
    description: "SipWiki has 30+ fun party games with rules. Perfect for house parties and game nights!",
    site: "@sipwiki",
    creator: "@sipwiki",
  },
  alternates: {
    canonical: "https://sipwiki.com",
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
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
  url: "https://sipwiki.com",
  logo: "https://sipwiki.com/icon-512.png",
  description:
    "SipWiki is the #1 drinking game rules and party game companion app. Find rules for Beer Pong, King's Cup, Flip Cup, and 30+ more party games.",
  foundingDate: "2024",
  sameAs: [
    // Add your social profiles here - this helps Google connect your brand
    // "https://twitter.com/sipwiki",
    // "https://instagram.com/sipwiki",
    // "https://tiktok.com/@sipwiki",
  ],
};

// WebSite schema for sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SipWiki",
  alternateName: "Sip Wiki",
  url: "https://sipwiki.com",
  description: "The #1 drinking game rules and party game companion app",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://sipwiki.com/games?search={search_term_string}",
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
