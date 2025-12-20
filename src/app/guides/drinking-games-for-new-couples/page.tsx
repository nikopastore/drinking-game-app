import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Games for New Couples (2024) | Early Relationship Games",
  description: "Drinking games perfect for new couples! Games that help you learn about each other during the exciting early dating phase.",
  keywords: ["drinking games for new couples", "new relationship drinking games", "early dating drinking games", "couples getting to know each other", "new couple games"],
  openGraph: { title: "Games for New Couples", description: "Learn about each other!", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-new-couples" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-new-couples" },
};

export default function DrinkingGamesForNewCouplesPage() {
  return (
    <GuideLayout title="Drinking Games for New Couples" description="Still in the getting-to-know-you phase? These games help new couples learn about each other while having fun together." breadcrumb="New Couples" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Learn deep stuff" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Past revealed" }]}>
      <h2>Discovery Games</h2>
      <ul><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Accelerate intimacy</li><li><strong>Two Truths One Lie</strong> - Learn real facts</li><li><strong>Would You Rather</strong> - Values revealed</li><li><strong>This or That Speed Round</strong></li></ul>
      <h2>What You&apos;ll Learn</h2>
      <ul><li>Relationship history</li><li>Life experiences</li><li>Dealbreakers and must-haves</li><li>Sense of humor</li><li>How they handle losing</li></ul>
      <h2>Keep It Light</h2>
      <ul><li>Don&apos;t go too deep too fast</li><li>Mix fun with serious</li><li>Laugh at yourselves</li><li>Build comfort gradually</li></ul>
    </GuideLayout>
  );
}
