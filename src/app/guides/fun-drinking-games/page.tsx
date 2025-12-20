import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fun Drinking Games (2024) | Most Entertaining Party Games",
  description: "The most fun drinking games for any party! Games guaranteed to get laughs, create memories, and keep everyone entertained.",
  keywords: ["fun drinking games", "entertaining drinking games", "best drinking games", "funny drinking games", "drinking games for fun"],
  openGraph: { title: "Fun Drinking Games", description: "Maximum entertainment!", type: "article", url: "https://sipwiki.app/guides/fun-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/fun-drinking-games" },
};

export default function FunDrinkingGamesPage() {
  return (
    <GuideLayout title="Most Fun Drinking Games" description="Looking for games that are actually FUN and not just about getting drunk? These games bring the entertainment, laughs, and memorable moments." breadcrumb="Fun Games" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Always hilarious" }, { name: "Medusa", slug: "medusa", description: "Guaranteed laughs" }]}>
      <h2>Guaranteed Fun</h2>
      <ul><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Hilarious revelations</li><li><Link href="/game/medusa" className="text-neon-pink">Medusa</Link> - Dramatic eye contact</li><li><Link href="/game/cheers-to-the-governor" className="text-neon-pink">Cheers to the Governor</Link> - Escalating chaos</li><li><Link href="/game/bite-the-bag" className="text-neon-pink">Bite the Bag</Link> - Physical comedy gold</li></ul>
      <h2>Why These Are Fun</h2>
      <ul><li>Create memorable moments</li><li>Everyone gets involved</li><li>Generate real laughs</li><li>Easy to understand</li><li>Scale with the group energy</li></ul>
      <h2>Tips for Maximum Fun</h2>
      <ul><li>Match game energy to group energy</li><li>Rotate through different games</li><li>Don&apos;t take it too seriously</li><li>Celebrate fails as much as wins</li></ul>
    </GuideLayout>
  );
}
