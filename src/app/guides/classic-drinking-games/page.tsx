import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Classic Drinking Games (2024) | Timeless Party Games",
  description: "The classic drinking games everyone should know! Timeless games that have been party favorites for generations.",
  keywords: ["classic drinking games", "traditional drinking games", "old school drinking games", "popular drinking games", "best known drinking games"],
  openGraph: { title: "Classic Drinking Games", description: "Timeless favorites!", type: "article", url: "https://sipwiki.app/guides/classic-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/classic-drinking-games" },
};

export default function ClassicGamesPage() {
  return (
    <GuideLayout title="Classic Drinking Games" description="These are the legends - the games your parents played and your kids will play. Timeless, tested, and always fun." breadcrumb="Classic Games" relatedGames={[{ name: "Beer Pong", slug: "beer-pong", description: "The GOAT" }, { name: "Kings Cup", slug: "kings-cup", description: "Card classic" }]}>
      <h2>The Hall of Fame</h2>
      <ul><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - The undisputed king</li><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Card game legend</li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Team relay classic</li><li><Link href="/game/quarters" className="text-neon-pink">Quarters</Link> - Bar game staple</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Confession time</li></ul>
      <h2>Why Classics Endure</h2>
      <ul><li>Simple enough for drunk people</li><li>Fun sober or tipsy</li><li>Everyone knows them</li><li>No explanation needed</li></ul>
    </GuideLayout>
  );
}
