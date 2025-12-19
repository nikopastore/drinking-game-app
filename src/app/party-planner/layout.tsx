import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Party Planner Calculator - How Much Alcohol Do I Need? | SipWiki",
  description: "Free party planning calculator. Calculate exactly how much beer, liquor, cups, and ice you need for your party. Never run out of drinks or over-buy again.",
  keywords: [
    "party planner calculator",
    "how much alcohol for party",
    "party supply calculator",
    "drinking party calculator",
    "how much beer do i need",
    "party alcohol calculator",
    "drinks per person calculator",
    "party planning tool",
    "how much liquor for party",
    "beer calculator party"
  ],
  openGraph: {
    title: "Party Planner Calculator - How Much Alcohol Do I Need?",
    description: "Free party planning calculator. Calculate exactly how much beer, liquor, cups, and ice you need for your party.",
    type: "website",
    url: "https://sipwiki.app/party-planner",
    images: [
      {
        url: "https://sipwiki.app/og-party-planner.png",
        width: 1200,
        height: 630,
        alt: "SipWiki Party Planner Calculator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Party Planner Calculator - How Much Alcohol Do I Need?",
    description: "Free party planning calculator. Calculate exactly how much beer, liquor, cups, and ice you need.",
  },
  alternates: {
    canonical: "https://sipwiki.app/party-planner"
  }
};

export default function PartyPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
