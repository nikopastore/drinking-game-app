import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "25 Best Drinking Games for Parties (2024) | House Party Games",
  description: "The ultimate party drinking games list! From classics like Beer Pong to hidden gems. Games for any group size, energy level, and party vibe.",
  keywords: ["drinking games for parties", "party drinking games", "house party games", "best party games", "drinking games for groups", "party game ideas"],
  openGraph: { title: "25 Best Party Drinking Games", description: "Games that make every party legendary.", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-parties" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-parties" },
};

export default function DrinkingGamesForPartiesPage() {
  return (
    <GuideLayout title="25 Best Drinking Games for Parties" description="Throwing a party? You need games that keep energy high and everyone involved. This is the ultimate list of party-tested drinking games that never fail." breadcrumb="Party Drinking Games" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "Team relay" }, { name: "Kings Cup", slug: "kings-cup", description: "Card classic" }, { name: "Beer Pong", slug: "beer-pong", description: "The GOAT" }]}>
      <h2>High Energy Games</h2>
      <ul><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Team racing at its finest</li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link> - Intense elimination</li><li><Link href="/game/slap-cup" className="text-neon-pink">Slap Cup</Link> - Maximum chaos</li><li><Link href="/game/civil-war" className="text-neon-pink">Civil War</Link> - Beer pong on steroids</li></ul>
      <h2>Classic Games</h2>
      <ul><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - The undisputed champion</li><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Card game everyone knows</li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Team relay racing</li><li><Link href="/game/quarters" className="text-neon-pink">Quarters</Link> - Skill-based bouncing</li></ul>
      <h2>No Props Needed</h2>
      <ul><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Voting fun</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Confession time</li><li><Link href="/game/medusa" className="text-neon-pink">Medusa</Link> - Eye contact chaos</li><li><Link href="/game/cheers-to-the-governor" className="text-neon-pink">Cheers to the Governor</Link> - Counting madness</li></ul>
      <h2>How to Choose</h2>
      <ul><li><strong>Group size</strong> - Big groups need scalable games</li><li><strong>Energy level</strong> - Match the vibe</li><li><strong>Space</strong> - Table games vs standing games</li><li><strong>Supplies</strong> - What do you have?</li></ul>
      <p>Browse all games at <Link href="/games" className="text-neon-pink hover:underline">SipWiki Games</Link>!</p>
    </GuideLayout>
  );
}
