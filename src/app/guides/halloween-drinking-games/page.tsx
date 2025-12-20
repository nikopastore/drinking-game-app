import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halloween Drinking Games (2024) | Spooky Party Games",
  description: "Spooky drinking games for Halloween parties! Costume contests, horror movie games, and themed challenges for October 31st.",
  keywords: ["halloween drinking games", "spooky drinking games", "halloween party games", "horror movie drinking game", "costume party drinking games"],
  openGraph: { title: "Halloween Drinking Games", description: "Get spooky!", type: "article", url: "https://sipwiki.app/guides/halloween-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/halloween-drinking-games" },
};

export default function HalloweenPage() {
  return (
    <GuideLayout title="Halloween Drinking Games" description="Halloween parties need more than costumes - they need games! These spooky-themed drinking games will haunt your guests in the best way." breadcrumb="Halloween Games" relatedGames={[{ name: "Medusa", slug: "medusa", description: "Spooky eye contact" }, { name: "Kings Cup", slug: "kings-cup", description: "Horror themed" }]}>
      <h2>Costume Games</h2>
      <ul><li><strong>Costume Contest Drinks</strong> - Losers drink</li><li><strong>Guess the Costume</strong> - Wrong guesses drink</li><li><strong>Drink If You See</strong> - Specific costume types</li></ul>
      <h2>Horror Movie Games</h2>
      <ul><li>Drink when someone dies</li><li>Drink when someone goes alone</li><li>Drink for jump scares</li><li>Drink when someone says &quot;hello?&quot;</li></ul>
      <h2>Spooky Themed Games</h2>
      <ul><li><Link href="/game/medusa" className="text-neon-pink">Medusa</Link> - Perfect theme fit!</li><li><strong>Witch&apos;s Brew Kings Cup</strong> - Center cup = potion</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Scary edition</li></ul>
    </GuideLayout>
  );
}
