import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Alcohol Calculator - How Much Do You Need For Your Party | SipWiki",
  description: "Free alcohol calculator for parties and events. Calculate exactly how much beer, wine, liquor, and supplies you need for any guest count.",
  keywords: [
    "alcohol calculator",
    "alcohol for party calculator",
    "how much alcohol do i need",
    "party alcohol needs",
    "wedding alcohol calculator",
    "event alcohol calculator",
    "alcohol quantity calculator",
  ],
  openGraph: {
    title: "Alcohol Calculator - How Much Do You Need For Your Party",
    description: "Free alcohol calculator for parties and events. Calculate exactly how much beer, wine, liquor you need.",
    type: "website",
    url: "https://sipwiki.app/alcohol-calculator",
  },
  alternates: {
    canonical: "https://sipwiki.app/party-planner",
  },
};

export default function AlcoholCalculatorPage() {
  redirect("/party-planner");
}
