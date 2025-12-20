import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Bachelorette Party Drinking Games (2024) | Hen Party Games",
  description: "Fun drinking games for bachelorette parties! Games to celebrate the bride, bond with the girls, and have an unforgettable night.",
  keywords: ["bachelorette party drinking games", "hen party games", "bachelorette games", "bride drinking games", "girls night drinking games"],
  openGraph: { title: "Bachelorette Party Drinking Games", description: "Celebrate the bride-to-be!", type: "article", url: "https://sipwiki.app/guides/bachelorette-party-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/bachelorette-party-drinking-games" },
};

export default function BachelorettePartyPage() {
  return (
    <GuideLayout title="Best Bachelorette Party Drinking Games" description="The bride deserves an epic send-off! These games will celebrate her, embarrass her just enough, and give the squad memories to last a lifetime." breadcrumb="Bachelorette Party Games" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Spill the tea" }, { name: "Most Likely To", slug: "most-likely-to", description: "Roast the bride" }]}>
      <h2>Bride-Focused Games</h2>
      <ul><li><strong>He Said She Said</strong> - Guess who said what</li><li><strong>Bride Trivia</strong> - How well do you know her?</li><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink: Bride Edition</Link></li><li><strong>Drink If...</strong> - Bride-specific prompts</li></ul>
      <h2>Squad Games</h2>
      <ul><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link></li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></li><li>Prosecco Pong</li><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link></li></ul>
      <h2>Scavenger Hunt Ideas</h2>
      <ul><li>Get a stranger to buy the bride a drink</li><li>Take a photo with someone named [groom&apos;s name]</li><li>Get 5 people to sign the bride&apos;s sash</li></ul>
    </GuideLayout>
  );
}
