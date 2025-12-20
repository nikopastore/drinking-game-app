import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 4 People (2024) | Quartet Games",
  description: "Perfect drinking games for 4 players! Games that work great with exactly four people - the ideal small group size.",
  keywords: ["drinking games for 4", "drinking games for 4 people", "four person drinking games", "drinking games 4 players", "quartet drinking games"],
  openGraph: { title: "Drinking Games for 4 People", description: "Perfect foursome!", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-4" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-4" },
};

export default function DrinkingGamesFor4Page() {
  return (
    <GuideLayout title="Best Drinking Games for 4 People" description="Four is the magic number for many drinking games! Perfect for team games or just enough for solid card games." breadcrumb="Games for 4" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Perfect at 4" }, { name: "Irish Poker", slug: "irish-poker", description: "Ideal player count" }]}>
      <h2>Best Games for 4</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Sweet spot size</li><li><Link href="/game/irish-poker" className="text-neon-pink">Irish Poker</Link> - Perfect for 4</li><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - 2v2</li><li><Link href="/game/horse-race" className="text-neon-pink">Horse Race</Link> - Each pick a suit</li><li><Link href="/game/beeramid" className="text-neon-pink">Beeramid</Link></li></ul>
      <h2>Team Games (2v2)</h2>
      <ul><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link></li><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link></li><li>Partners card games</li></ul>
      <h2>Why 4 Is Ideal</h2>
      <ul><li>Perfect for 2v2 teams</li><li>Good turn frequency</li><li>Easy to manage rules</li><li>Everyone stays engaged</li></ul>
    </GuideLayout>
  );
}
