import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "House Party Drinking Games (2024) | Games for Home Parties",
  description: "The best drinking games for house parties! Games that work in living rooms, basements, and backyards. Indoor party perfection.",
  keywords: ["house party drinking games", "home party games", "indoor drinking games", "living room drinking games", "basement party games"],
  openGraph: { title: "House Party Drinking Games", description: "Party at home!", type: "article", url: "https://sipwiki.app/guides/house-party-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/house-party-drinking-games" },
};

export default function HousePartyGamesPage() {
  return (
    <GuideLayout title="House Party Drinking Games" description="Throwing a house party? These games are perfect for indoor spaces - from intimate apartments to full basement ragers." breadcrumb="House Party Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Any room" }, { name: "Flip Cup", slug: "flip-cup", description: "Table game" }]}>
      <h2>Living Room Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link></li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link></li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></li></ul>
      <h2>Table Games</h2>
      <ul><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link></li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link></li><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link></li></ul>
      <h2>House Party Tips</h2>
      <ul><li>Protect your floors - spills happen</li><li>Have multiple games in different areas</li><li>Designate a game master</li><li>Keep music going between games</li></ul>
    </GuideLayout>
  );
}
