import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beach Drinking Games (2024) | Best Games for the Beach",
  description: "Top drinking games for the beach! Sand-friendly games, easy setups, and activities perfect for beach days and shore parties.",
  keywords: ["beach drinking games", "drinking games for beach", "beach party games", "sand drinking games", "shore drinking games"],
  openGraph: { title: "Beach Drinking Games", description: "Sun, sand, and sips!", type: "article", url: "https://sipwiki.app/guides/beach-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/beach-drinking-games" },
};

export default function BeachDrinkingGamesPage() {
  return (
    <GuideLayout title="Beach Drinking Games" description="Sand between your toes, drink in hand. These games are perfect for beach days - easy setup, sand-friendly, and maximum fun." breadcrumb="Beach Games" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "No setup needed" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Perfect for lounging" }]}>
      <h2>Beach-Friendly Games</h2>
      <ul><li><strong>Spikeball + Drinks</strong> - Losers drink</li><li><strong>KanJam</strong> - Miss the can, sip</li><li><strong>Frisbee Golf</strong> - Strokes = sips</li><li><strong>Bocce Ball</strong> - Closest skips, farthest drinks</li></ul>
      <h2>Low-Setup Games</h2>
      <ul><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Just need friends</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Sit in a circle</li><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Beach confessions</li></ul>
      <h2>Beach Tips</h2>
      <ul><li>Use koozies (sand + cans = bad)</li><li>Cooler is essential</li><li>Check local open container laws</li><li>Stay hydrated with water too</li><li>Pack out what you pack in</li></ul>
    </GuideLayout>
  );
}
