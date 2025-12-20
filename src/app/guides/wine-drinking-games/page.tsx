import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wine Drinking Games (2024) | Games for Wine Nights",
  description: "Classy drinking games for wine lovers! Perfect for wine nights, girls' nights, and sophisticated gatherings. Sip in style.",
  keywords: ["wine drinking games", "wine night games", "wine party games", "drinking games with wine", "girls night drinking games"],
  openGraph: { title: "Wine Drinking Games", description: "Classy sipping games.", type: "article", url: "https://sipwiki.app/guides/wine-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/wine-drinking-games" },
};

export default function WineGamesPage() {
  return (
    <GuideLayout title="Wine Drinking Games" description="Who says drinking games can't be classy? These games are perfect for wine nights - sophisticated fun that pairs perfectly with your favorite bottle." breadcrumb="Wine Games" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Deep conversations" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Wine night classic" }]}>
      <h2>Best Wine Night Games</h2>
      <ul><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Perfect pacing</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Sip don&apos;t chug</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></li><li><strong>Wine Trivia</strong> - Test your knowledge</li></ul>
      <h2>Blind Tasting Games</h2>
      <ul><li><strong>Guess the Grape</strong> - Blindfolded tastings</li><li><strong>Price is Right</strong> - Guess the wine cost</li><li><strong>Red or White</strong> - Blindfolded guessing</li></ul>
      <h2>Wine Game Tips</h2>
      <ul><li>Sip, don&apos;t chug - wine hits different</li><li>Small pours for game rounds</li><li>Keep water and snacks handy</li><li>Red wine stains - be careful!</li></ul>
    </GuideLayout>
  );
}
