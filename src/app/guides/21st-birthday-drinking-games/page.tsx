import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "21st Birthday Drinking Games (2024) | Legal Drinking Age Party",
  description: "Best drinking games for 21st birthdays! Celebrate legally drinking with games designed for the birthday star's big night.",
  keywords: ["21st birthday drinking games", "21st birthday party games", "turning 21 drinking games", "21 birthday games", "legal drinking birthday"],
  openGraph: { title: "21st Birthday Drinking Games", description: "Finally legal!", type: "article", url: "https://sipwiki.app/guides/21st-birthday-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/21st-birthday-drinking-games" },
};

export default function TwentyFirstBirthdayGamesPage() {
  return (
    <GuideLayout title="21st Birthday Drinking Games" description="The big 2-1! Finally legal to drink - celebrate with games that put the birthday star in the spotlight (but don't destroy them)." breadcrumb="21st Birthday" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Make rules about birthday person" }, { name: "Most Likely To", slug: "most-likely-to", description: "Birthday roast edition" }]}>
      <h2>Birthday Star Games</h2>
      <ul><li><strong>21 Questions</strong> - Each question = 1 drink for birthday person</li><li><strong>Birthday Scavenger Hunt</strong> - Complete challenges for drinks</li><li><strong>Memory Lane</strong> - Share embarrassing stories, they drink if true</li></ul>
      <h2>Group Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Birthday person makes extra rules</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Birthday roast edition</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Target the birthday star</li></ul>
      <h2>21st Birthday Tips</h2>
      <ul><li>Pace throughout the night</li><li>Eat beforehand</li><li>Have designated drivers ready</li><li>Take photos early (you&apos;ll forget later)</li><li>Water between rounds</li></ul>
    </GuideLayout>
  );
}
