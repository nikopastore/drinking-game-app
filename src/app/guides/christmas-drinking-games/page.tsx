import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Christmas Drinking Games (2024) | Holiday Party Games",
  description: "Festive drinking games for Christmas parties! Secret Santa games, holiday movie drinking, and family-friendly options.",
  keywords: ["christmas drinking games", "holiday drinking games", "christmas party games", "festive drinking games", "xmas drinking games"],
  openGraph: { title: "Christmas Drinking Games", description: "Ho ho ho-ld my beer!", type: "article", url: "https://sipwiki.app/guides/christmas-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/christmas-drinking-games" },
};

export default function ChristmasPage() {
  return (
    <GuideLayout title="Christmas Drinking Games" description="'Tis the season to be tipsy! These holiday-themed drinking games will make your Christmas party merry and bright." breadcrumb="Christmas Games" relatedGames={[{ name: "Never Have I Ever", slug: "never-have-i-ever", description: "Holiday edition" }, { name: "Kings Cup", slug: "kings-cup", description: "Festive rules" }]}>
      <h2>Holiday Movie Games</h2>
      <ul><li><strong>Elf</strong> - Drink when Buddy eats sugar</li><li><strong>Home Alone</strong> - Drink for every trap</li><li><strong>Die Hard</strong> - Drink when someone argues if it&apos;s a Christmas movie</li><li><strong>Love Actually</strong> - Drink for every storyline switch</li></ul>
      <h2>Christmas Party Games</h2>
      <ul><li><strong>Secret Santa Drinks</strong> - Guess who got your gift</li><li><strong>Carol Karaoke</strong> - Losers drink</li><li><strong>Ugly Sweater Votes</strong> - Winner gives drinks</li><li><strong>White Elephant Drinks</strong> - Stolen gift = stealer drinks</li></ul>
      <h2>Family-Friendly Options</h2>
      <ul><li>Use hot cocoa or eggnog</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Clean version</li><li>Holiday trivia with drink penalties</li></ul>
    </GuideLayout>
  );
}
