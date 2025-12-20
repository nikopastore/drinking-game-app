import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for Small Groups (3-5 People) | 2024 Guide",
  description: "Perfect drinking games for small groups of 3-5 people. Not too big, not too small - these games work great for intimate gatherings.",
  keywords: ["drinking games for small groups", "drinking games 3 people", "drinking games 4 people", "drinking games 5 people", "small group party games"],
  openGraph: { title: "Drinking Games for Small Groups", description: "Perfect for 3-5 players.", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-small-groups" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-small-groups" },
};

export default function SmallGroupsPage() {
  return (
    <GuideLayout title="Best Drinking Games for Small Groups (3-5 People)" description="Don't have a huge party? Small groups can still have a blast. These games are perfectly tuned for 3-5 players." breadcrumb="Small Group Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Works with 3+" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Perfect for 4-6" }]}>
      <h2>Best for 3 People</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link></li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link></li><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link></li></ul>
      <h2>Best for 4-5 People</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link></li><li><Link href="/game/beeramid" className="text-neon-pink">Beeramid</Link></li><li><Link href="/game/irish-poker" className="text-neon-pink">Irish Poker</Link></li><li><Link href="/game/horse-race" className="text-neon-pink">Horse Race</Link></li></ul>
      <h2>Why Small Groups Work</h2>
      <ul><li>More turns per person</li><li>Better conversations</li><li>Less waiting around</li><li>Everyone stays engaged</li></ul>
      <p>Browse <Link href="/games" className="text-neon-pink hover:underline">all games</Link>!</p>
    </GuideLayout>
  );
}
