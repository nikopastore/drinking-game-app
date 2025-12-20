import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "5 Minute Drinking Games (2024) | Super Quick Party Games",
  description: "Lightning-fast drinking games that take 5 minutes or less! Perfect for quick rounds, pre-gaming, or when you're short on time.",
  keywords: ["5 minute drinking games", "quick drinking games", "fast drinking games", "short drinking games", "quick party games"],
  openGraph: { title: "5 Minute Drinking Games", description: "Fast and fun!", type: "article", url: "https://sipwiki.app/guides/5-minute-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/5-minute-drinking-games" },
};

export default function FiveMinuteDrinkingGamesPage() {
  return (
    <GuideLayout title="5 Minute Drinking Games" description="No time? No problem! These games are lightning-fast - perfect for quick rounds between activities or rapid-fire pre-gaming." breadcrumb="5 Minute Games" relatedGames={[{ name: "Medusa", slug: "medusa", description: "Instant rounds" }, { name: "Quarters", slug: "quarters", description: "Quick shots" }]}>
      <h2>Speed Games</h2>
      <ul><li><Link href="/game/medusa" className="text-neon-pink">Medusa</Link> - Look up, drink, done</li><li><Link href="/game/quarters" className="text-neon-pink">Quarters</Link> - Bounce and go</li><li><strong>Shot Roulette</strong> - Spin and drink</li><li><strong>Quick Draw</strong> - Card flip race</li></ul>
      <h2>Rapid Fire Questions</h2>
      <ul><li>Speed &quot;Never Have I Ever&quot; - 10 seconds per question</li><li>&quot;Categories&quot; - Name things fast</li><li>&quot;Fingers&quot; - Guess and drink</li></ul>
      <h2>When to Use Quick Games</h2>
      <ul><li>Pre-gaming before going out</li><li>Between other activities</li><li>Testing if the party&apos;s ready</li><li>Late arrivals catching up</li><li>Just want a quick drink</li></ul>
    </GuideLayout>
  );
}
