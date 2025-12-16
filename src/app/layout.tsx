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
  title: "SipWiki - The Ultimate Drinking Game Encyclopedia",
  description: "Discover, play, and master drinking games. Browse 20+ party games with rules, materials, and an AI referee to settle disputes.",
  keywords: ["drinking games", "party games", "beer pong", "kings cup", "drinking game rules"],
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
  other: {
    "mobile-web-app-capable": "yes",
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
