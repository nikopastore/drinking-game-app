import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Games for Strangers (2024) | Party Games for New People",
  description: "Best drinking games when you don't know everyone! Games that work with strangers and help new groups bond quickly.",
  keywords: ["drinking games for strangers", "drinking games new people", "party games strangers", "drinking games dont know anyone", "games for new friends"],
  openGraph: { title: "Drinking Games for Strangers", description: "Make new friends!", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-strangers" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-strangers" },
};

export default function DrinkingGamesForStrangersPage() {
  return (
    <GuideLayout title="Drinking Games for Strangers" description="At a party where you don't know anyone? These games are perfect for mixing with new people and turning strangers into friends." breadcrumb="Games for Strangers" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Classic group game" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Learn about people" }]}>
      <h2>Best for New Groups</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Rules unify everyone</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Discover commonalities</li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Team bonding</li></ul>
      <h2>Avoid These</h2>
      <ul><li>Games requiring inside jokes</li><li>Embarrassing dares with strangers</li><li>Super competitive 1v1 games</li><li>Anything too personal too fast</li></ul>
      <h2>Tips for Playing with Strangers</h2>
      <ul><li>Start with simple games</li><li>Include everyone</li><li>Learn names early</li><li>Keep it light at first</li><li>Graduate to more intense games</li></ul>
    </GuideLayout>
  );
}
