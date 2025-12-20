import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reunion Drinking Games (2024) | Class & Family Reunion Games",
  description: "Drinking games for reunions! Perfect for class reunions, family gatherings, and reconnecting with old friends.",
  keywords: ["reunion drinking games", "class reunion drinking games", "family reunion games adults", "high school reunion games", "reunion party games"],
  openGraph: { title: "Reunion Drinking Games", description: "Reconnect and drink!", type: "article", url: "https://sipwiki.app/guides/reunion-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/reunion-drinking-games" },
};

export default function ReunionDrinkingGamesPage() {
  return (
    <GuideLayout title="Reunion Drinking Games" description="Reuniting with old friends or classmates? These games help break the ice and relive the glory days!" breadcrumb="Reunion" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Who's changed?" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Catch up quick" }]}>
      <h2>Class Reunion Games</h2>
      <ul><li><strong>Senior Superlatives Revisited</strong> - Did predictions come true?</li><li><strong>Guess Who Said It</strong> - Old yearbook quotes</li><li><strong>Where Are They Now</strong> - Prediction game</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Then vs now</li></ul>
      <h2>Family Reunion Games</h2>
      <ul><li><strong>Family Trivia</strong> - Who knows the family best?</li><li><strong>Embarrassing Kid Stories</strong> - Parents share, kids drink</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - PG version</li></ul>
      <h2>Icebreaker Games</h2>
      <ul><li><strong>Two Truths One Lie</strong> - Updates edition</li><li><strong>Speed Catch-Up</strong> - 2 min conversations</li></ul>
    </GuideLayout>
  );
}
