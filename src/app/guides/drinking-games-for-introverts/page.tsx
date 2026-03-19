import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Games for Introverts (2024) | Low-Key Party Games",
  description: "Drinking games perfect for introverts! Games that don't require being the center of attention or excessive social performance.",
  keywords: ["drinking games for introverts", "quiet drinking games", "low key drinking games", "shy people drinking games", "introvert party games"],
  openGraph: { title: "Drinking Games for Introverts", description: "No spotlight needed!", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-introverts" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-introverts" },
};

export default function DrinkingGamesForIntrovertsPage() {
  return (
    <GuideLayout title="Drinking Games for Introverts" description="Not everyone wants to be the center of attention. These games are fun without requiring you to perform, yell, or be 'on' the whole time." breadcrumb="Introvert Games" relatedGames={[{ name: "Ride the Bus", slug: "ride-the-bus", description: "Just you and cards" }, { name: "Kings Cup", slug: "kings-cup", description: "Rules do the talking" }]}>
      <h2>Low-Pressure Games</h2>
      <ul><li><Link href="/games/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - Personal challenge</li><li><Link href="/games/kings-cup" className="text-neon-pink">Kings Cup</Link> - Rules guide everything</li><li><Link href="/games/horse-race" className="text-neon-pink">Horse Race</Link> - Watch, bet, drink</li><li><strong>Card games in general</strong></li></ul>
      <h2>Avoid These</h2>
      <ul><li>Truth or Dare - too exposed</li><li>Charades-style games</li><li>Games requiring stories/performances</li><li>Anything with &quot;spotlight&quot; moments</li></ul>
      <h2>Introvert Survival Tips</h2>
      <ul><li>Smaller groups are better</li><li>Card games feel less intense</li><li>Observe before jumping in</li><li>It&apos;s okay to take breaks</li><li>Drinking helps (but pace yourself)</li></ul>
    </GuideLayout>
  );
}
