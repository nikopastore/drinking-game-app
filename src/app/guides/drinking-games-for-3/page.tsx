import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 3 People (2024) | Trio Games",
  description: "Perfect drinking games for exactly 3 people! Not a couple, not a crowd - these games work perfectly with a trio.",
  keywords: ["drinking games for 3", "drinking games for 3 people", "three person drinking games", "trio drinking games", "drinking games 3 players"],
  openGraph: { title: "Drinking Games for 3 People", description: "Perfect for trios!", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-3" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-3" },
};

export default function DrinkingGamesFor3Page() {
  return (
    <GuideLayout title="Best Drinking Games for 3 People" description="Three's not a crowd when you have the right games! These drinking games work perfectly with exactly three players." breadcrumb="Games for 3" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Works great with 3" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Perfect for 3-4" }]}>
      <h2>Best Games for 3</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Plenty of action</li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link></li><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link></li><li><Link href="/game/beeramid" className="text-neon-pink">Beeramid</Link></li><li><Link href="/game/fuck-the-dealer" className="text-neon-pink">Fuck the Dealer</Link></li></ul>
      <h2>Adapted Games</h2>
      <ul><li><strong>Three-Way Beer Pong</strong> - Triangle table setup</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Still works!</li><li><strong>Three Man</strong> - Made for this</li></ul>
      <h2>Why 3 Works</h2>
      <ul><li>More turns per person</li><li>Intimate conversations</li><li>No teams needed</li><li>Quick game rotation</li></ul>
    </GuideLayout>
  );
}
