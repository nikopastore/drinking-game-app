import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intense Drinking Games (2024) | Hardcore Party Games",
  description: "The most intense drinking games for hardcore party nights! High stakes, fast drinking, maximum chaos games.",
  keywords: ["intense drinking games", "hardcore drinking games", "extreme drinking games", "hard drinking games", "crazy drinking games"],
  openGraph: { title: "Intense Drinking Games", description: "Maximum intensity!", type: "article", url: "https://sipwiki.app/guides/intense-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/intense-drinking-games" },
};

export default function IntenseDrinkingGamesPage() {
  return (
    <GuideLayout title="Intense Drinking Games" description="Ready to go hard? These games are not for the faint of heart - high stakes, fast drinking, and maximum chaos." breadcrumb="Intense Games" relatedGames={[{ name: "Rage Cage", slug: "rage-cage", description: "Pure chaos" }, { name: "Civil War", slug: "civil-war", description: "Beer pong on steroids" }]}>
      <h2>Maximum Intensity</h2>
      <ul><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link> - Pure adrenaline</li><li><Link href="/game/civil-war" className="text-neon-pink">Civil War</Link> - Beer pong chaos</li><li><Link href="/game/slap-cup" className="text-neon-pink">Slap Cup</Link> - Competitive madness</li><li><strong>Thunder/Century Club</strong> - Endurance test</li></ul>
      <h2>Why People Love Intense Games</h2>
      <ul><li>Adrenaline rush</li><li>Memorable nights</li><li>Bonding through chaos</li><li>Stories to tell later</li></ul>
      <h2>Safety First</h2>
      <ul><li>Know your limits</li><li>Eat before playing</li><li>Water between rounds</li><li>No driving after</li><li>It&apos;s okay to tap out</li></ul>
    </GuideLayout>
  );
}
