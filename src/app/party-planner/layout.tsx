import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Party Planner Calculator - How Much Alcohol Do I Need? | Free Tool",
  description: "Free party planning calculator: Calculate exactly how much beer, liquor, wine, cups, ice & mixers you need. Works for 2-100+ guests. Used by 50,000+ party planners. Get your shopping list in seconds!",
  keywords: [
    // Primary keywords
    "party planner calculator",
    "how much alcohol for party",
    "alcohol calculator for party",
    "party supply calculator",
    "drink calculator for party",
    // Long-tail keywords
    "how much beer do i need for 20 people",
    "how much alcohol for 50 guests",
    "party drink calculator",
    "how many drinks per person at a party",
    "alcohol calculator wedding",
    "beer needed for party calculator",
    "how much liquor for 30 people",
    "party planning calculator free",
    "drinks per person calculator",
    "how much wine for a party",
    // Question-based keywords (for AI search)
    "how do i calculate alcohol for a party",
    "how many beers per person for a 4 hour party",
    "what alcohol to buy for a party",
    "how much ice do i need for a party",
    // Related keywords
    "college party calculator",
    "house party planner",
    "party shopping list generator",
    "drinking game party supplies",
    "tailgate calculator"
  ],
  openGraph: {
    title: "Free Party Planner Calculator - How Much Alcohol Do I Need?",
    description: "Calculate exactly how much beer, liquor, cups & ice you need for your party. Works for any size gathering. Get your complete shopping list instantly!",
    type: "website",
    url: "https://sipwiki.app/party-planner",
    siteName: "SipWiki",
    locale: "en_US",
    images: [
      {
        url: "https://sipwiki.app/og-party-planner.png",
        width: 1200,
        height: 630,
        alt: "SipWiki Party Planner Calculator - Calculate Alcohol for Your Party"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Party Planner Calculator - How Much Alcohol Do I Need?",
    description: "Free calculator to figure out exactly how much beer, liquor & supplies you need. Never run out or over-buy again!",
    images: ["https://sipwiki.app/og-party-planner.png"],
  },
  alternates: {
    canonical: "https://sipwiki.app/party-planner"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  }
};

export default function PartyPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
