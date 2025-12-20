import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Girls Night Drinking Games (2024) | Ladies Night Party Games",
  description: "Best drinking games for girls night! Fun, flirty, and perfect for wine nights, bachelorettes, and ladies' gatherings.",
  keywords: ["girls night drinking games", "ladies night drinking games", "wine night games", "girls night in games", "drinking games for girls"],
  openGraph: { title: "Girls Night Drinking Games", description: "Ladies night!", type: "article", url: "https://sipwiki.app/guides/girls-night-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/girls-night-drinking-games" },
};

export default function GirlsNightDrinkingGamesPage() {
  return (
    <GuideLayout title="Girls Night Drinking Games" description="Whether it's wine night, a sleepover, or pre-gaming before going out - these games are perfect for girls night!" breadcrumb="Girls Night" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Spill the tea" }, { name: "Truth or Drink", slug: "truth-or-drink", description: "Get deep" }]}>
      <h2>Tea-Spilling Games</h2>
      <ul><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Know your girls</li><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Secrets come out</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Classic gossip</li></ul>
      <h2>Wine Night Games</h2>
      <ul><li><strong>Wine Tasting Challenge</strong> - Guess the wine</li><li><strong>Bad Date Stories</strong> - Best story wins</li><li><strong>Ex Files</strong> - Share and sip</li></ul>
      <h2>Pre-Going Out Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Quick rounds</li><li><strong>Getting Ready Playlist Game</strong> - Drink on certain words</li><li><strong>Rate the Fit</strong> - Low score = drink</li></ul>
    </GuideLayout>
  );
}
