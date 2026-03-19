import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "St. Patrick's Day Drinking Games (2024) | Irish Pub Games",
  description: "Celebrate St. Patrick's Day with these Irish-themed drinking games! Green beer, pub games, and luck of the Irish challenges.",
  keywords: ["st patricks day drinking games", "irish drinking games", "st paddys day games", "irish pub games", "green beer games"],
  openGraph: { title: "St. Patrick's Day Drinking Games", description: "Luck of the Irish!", type: "article", url: "https://sipwiki.app/guides/st-patricks-day-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/st-patricks-day-drinking-games" },
};

export default function StPatricksDayPage() {
  return (
    <GuideLayout title="St. Patrick's Day Drinking Games" description="The one day a year everyone's Irish! These games celebrate with green beer, Irish pub traditions, and plenty of craic." breadcrumb="St. Patrick's Day Games" relatedGames={[{ name: "Irish Poker", slug: "irish-poker", description: "It's in the name!" }, { name: "Kings Cup", slug: "kings-cup", description: "Go green" }]}>
      <h2>Irish-Themed Games</h2>
      <ul><li><Link href="/games/irish-poker" className="text-neon-pink">Irish Poker</Link> - Obviously essential</li><li><strong>Lucky Charms</strong> - Drink for each marshmallow type</li><li><strong>Pot of Gold</strong> - Hide gold coins, finder gives drinks</li></ul>
      <h2>Pub Games</h2>
      <ul><li><Link href="/games/quarters" className="text-neon-pink">Quarters</Link> - Bar classic</li><li><strong>Darts</strong> - Drink for low scores</li><li><Link href="/games/three-man" className="text-neon-pink">Three Man</Link></li></ul>
      <h2>Green Rules</h2>
      <ul><li>Not wearing green? Drink!</li><li>Green beer only (food coloring)</li><li>Irish accent attempts = drinks for bad ones</li><li>Say &quot;sláinte&quot; before every drink</li></ul>
    </GuideLayout>
  );
}
