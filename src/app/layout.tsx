import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "SipWiki - Party Games & Icebreakers for Adults | 30+ Games",
  description: "The ultimate party companion app. 30+ fun group games with rules, from classic Beer Pong to Kings Cup. Perfect icebreakers for house parties, pre-games, and game nights. Works offline!",
  keywords: [
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
    title: "SipWiki - Party Games & Icebreakers",
    description: "30+ fun party games with rules. Perfect for house parties, pre-games, and breaking the ice. Free app that works offline!",
    type: "website",
    locale: "en_US",
    siteName: "SipWiki",
  },
  twitter: {
    card: "summary_large_image",
    title: "SipWiki - Party Games & Icebreakers",
    description: "30+ fun party games with rules. Perfect for house parties and game nights!",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-dark-900`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
