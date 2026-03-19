import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chill Drinking Games (2024) | Relaxed Party Games",
  description: "Chill drinking games for relaxed nights! No stress, no competition, just good vibes and casual drinking with friends.",
  keywords: ["chill drinking games", "relaxed drinking games", "casual drinking games", "laid back drinking games", "easy going drinking games"],
  openGraph: { title: "Chill Drinking Games", description: "Good vibes only!", type: "article", url: "https://sipwiki.app/guides/chill-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/chill-drinking-games" },
};

export default function ChillDrinkingGamesPage() {
  return (
    <GuideLayout title="Chill Drinking Games" description="Sometimes you just want to hang, drink, and not stress about winning. These games keep it casual and conversation-friendly." breadcrumb="Chill Games" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "No pressure" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Classic chill" }]}>
      <h2>Zero Stress Games</h2>
      <ul><li><Link href="/games/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Just pointing</li><li><Link href="/games/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Stories flow</li><li><Link href="/games/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Deep talks</li><li><strong>Movie Drinking Games</strong> - Watch and drink</li></ul>
      <h2>Chill Atmosphere</h2>
      <ul><li>Background music</li><li>Comfortable seating</li><li>Snacks available</li><li>No time pressure</li><li>Come and go as you please</li></ul>
      <h2>Why Chill Works</h2>
      <ul><li>Everyone can participate</li><li>Conversations happen naturally</li><li>No one feels left out</li><li>Drink at your own pace</li><li>Can play for hours</li></ul>
    </GuideLayout>
  );
}
