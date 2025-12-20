import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pool Party Drinking Games (2024) | Swimming Pool Games",
  description: "Best drinking games for pool parties! Water-safe games, poolside competitions, and swimming pool drinking activities.",
  keywords: ["pool party drinking games", "pool drinking games", "swimming pool drinking games", "poolside drinking games", "water drinking games"],
  openGraph: { title: "Pool Party Drinking Games", description: "Splash and sip!", type: "article", url: "https://sipwiki.app/guides/pool-party-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/pool-party-drinking-games" },
};

export default function PoolPartyDrinkingGamesPage() {
  return (
    <GuideLayout title="Pool Party Drinking Games" description="Make a splash with these pool-perfect drinking games. Whether you're in the water or lounging poolside, we've got you covered." breadcrumb="Pool Party" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "Great poolside" }, { name: "Beer Pong", slug: "beer-pong", description: "Pool deck classic" }]}>
      <h2>In-Pool Games</h2>
      <ul><li><strong>Pool Pong</strong> - Floating beer pong setup</li><li><strong>Chicken Fight Tournament</strong> - Losers drink</li><li><strong>Marco Polo Drinking</strong> - Found = drink</li><li><strong>Relay Races</strong> - Losing team drinks</li></ul>
      <h2>Poolside Games</h2>
      <ul><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - On the deck</li><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Table by pool</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Float and chat</li></ul>
      <h2>Safety First</h2>
      <ul><li>Stay hydrated (it&apos;s hot!)</li><li>No glass near pool</li><li>Designate a sober lifeguard</li><li>Know your limits in water</li><li>Take breaks from sun</li></ul>
    </GuideLayout>
  );
}
