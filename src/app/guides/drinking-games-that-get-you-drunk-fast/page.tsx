import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Games That Get You Drunk Fast (2024) | Quick Effect",
  description: "Drinking games designed to get you drunk quickly! Fast-paced games for when you're short on time but ready to party.",
  keywords: ["drinking games that get you drunk fast", "get drunk fast games", "quick drunk games", "fast drinking games", "pregaming drinking games"],
  openGraph: { title: "Get Drunk Fast Games", description: "Efficiency mode!", type: "article", url: "https://sipwiki.app/guides/drinking-games-that-get-you-drunk-fast" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-that-get-you-drunk-fast" },
};

export default function DrinkingGamesThatGetYouDrunkFastPage() {
  return (
    <GuideLayout title="Drinking Games That Get You Drunk Fast" description="Pre-gaming? Short on time? These games are engineered for efficiency - maximum drinks in minimum time. Please drink responsibly." breadcrumb="Fast Drunk" relatedGames={[{ name: "Rage Cage", slug: "rage-cage", description: "Stacks quick" }, { name: "Power Hour", slug: "power-hour", description: "Designed for it" }]}>
      <h2>⚠️ DRINK RESPONSIBLY</h2>
      <p>These games hit hard. Know your limits, eat first, have water, and never drive.</p>
      <h2>High-Efficiency Games</h2>
      <ul><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link> - Stacking drinks</li><li><Link href="/game/power-hour" className="text-neon-pink">Power Hour</Link> - 60 shots in 60 min</li><li><Link href="/game/slap-cup" className="text-neon-pink">Slap Cup</Link> - Caught = drink extra</li><li><strong>Waterfall</strong> - Chain drinking</li></ul>
      <h2>Pre-Game Favorites</h2>
      <ul><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Fast team rounds</li><li><strong>Thunderstruck</strong> - Song length = drinking</li><li><strong>Shot Roulette</strong> - Quick rounds</li></ul>
      <h2>Safety Reminders</h2>
      <ul><li>Eat a full meal first</li><li>Water between rounds</li><li>Uber/Lyft ready</li><li>Buddy system</li></ul>
    </GuideLayout>
  );
}
