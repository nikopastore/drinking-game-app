import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanksgiving Drinking Games (2024) | Holiday Family Games",
  description: "Drinking games for Thanksgiving! Survive family dinners, football watching, and holiday gatherings with these festive games.",
  keywords: ["thanksgiving drinking games", "thanksgiving party games", "holiday drinking games thanksgiving", "thanksgiving family games", "turkey day drinking games"],
  openGraph: { title: "Thanksgiving Drinking Games", description: "Gobble gobble drink!", type: "article", url: "https://sipwiki.app/guides/thanksgiving-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/thanksgiving-drinking-games" },
};

export default function ThanksgivingDrinkingGamesPage() {
  return (
    <GuideLayout title="Thanksgiving Drinking Games" description="Survive the family gathering! From football watching to awkward dinner conversations, these games make Turkey Day more fun." breadcrumb="Thanksgiving" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Family edition" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Keep it PG" }]}>
      <h2>Football Watching Games</h2>
      <ul><li>Touchdown = everyone drinks</li><li>Field goal = give 3 sips</li><li>Commercial = finish drink before it ends</li><li>Announcer says &quot;turkey&quot; = drink</li></ul>
      <h2>Family Dinner Survival</h2>
      <ul><li>Politics mentioned = everyone drinks</li><li>&quot;When are you getting married?&quot; = drink</li><li>Dad makes a bad joke = drink</li><li>Someone asks about your job = drink</li></ul>
      <h2>Cousins Table Games</h2>
      <ul><li><Link href="/games/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Family edition</li><li><Link href="/games/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Keep it PG</li><li><Link href="/games/kings-cup" className="text-neon-pink">Kings Cup</Link> - After parents sleep</li></ul>
    </GuideLayout>
  );
}
