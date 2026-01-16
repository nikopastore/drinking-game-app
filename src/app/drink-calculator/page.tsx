import { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Drink Calculator - How Much Alcohol For Your Party | SipWiki",
  description: "Free drink calculator to determine how much beer, wine, and liquor you need for any party size. Calculate alcohol for 10, 20, 50, or 100+ guests instantly.",
  keywords: [
    "drink calculator",
    "alcohol calculator",
    "party drink calculator",
    "how much alcohol for party",
    "beer calculator",
    "liquor calculator",
    "wedding alcohol calculator",
    "party alcohol calculator",
  ],
  openGraph: {
    title: "Drink Calculator - How Much Alcohol For Your Party",
    description: "Free drink calculator to determine how much beer, wine, and liquor you need for any party size.",
    type: "website",
    url: "https://sipwiki.app/drink-calculator",
  },
  alternates: {
    canonical: "https://sipwiki.app/alcohol-calculator",
  },
};

export default function DrinkCalculatorPage() {
  permanentRedirect("/alcohol-calculator");
}
