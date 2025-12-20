import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Games to Get to Know People (2024) | Social Games",
  description: "Drinking games that help you learn about people! Perfect for new groups, first dates, and making connections.",
  keywords: ["drinking games to get to know people", "get to know you drinking games", "social drinking games", "drinking games learn about friends", "conversation drinking games"],
  openGraph: { title: "Get to Know People Games", description: "Make connections!", type: "article", url: "https://sipwiki.app/guides/drinking-games-to-get-to-know-people" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-to-get-to-know-people" },
};

export default function DrinkingGamesToGetToKnowPeoplePage() {
  return (
    <GuideLayout title="Drinking Games to Get to Know People" description="Want to actually learn about the people you're drinking with? These games encourage sharing, questions, and real conversation." breadcrumb="Get to Know People" relatedGames={[{ name: "Never Have I Ever", slug: "never-have-i-ever", description: "Instant revelations" }, { name: "Truth or Drink", slug: "truth-or-drink", description: "Deep questions" }]}>
      <h2>Best for Learning About People</h2>
      <ul><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Life experiences revealed</li><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Real answers</li><li><strong>Two Truths One Lie</strong> - Learn facts</li><li><strong>21 Questions</strong> - Drinking edition</li></ul>
      <h2>Conversation Starters</h2>
      <ul><li><strong>Would You Rather</strong> - Preferences revealed</li><li><strong>This or That</strong> - Quick takes</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - First impressions</li></ul>
      <h2>What You&apos;ll Learn</h2>
      <ul><li>Life experiences</li><li>Values and preferences</li><li>Sense of humor</li><li>Comfort levels</li><li>Shared interests</li></ul>
    </GuideLayout>
  );
}
