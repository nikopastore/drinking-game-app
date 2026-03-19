import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "High Energy Drinking Games (2024) | Active Party Games",
  description: "High energy drinking games that get everyone moving! Perfect for when the party needs a boost of excitement and activity.",
  keywords: ["high energy drinking games", "active drinking games", "energetic drinking games", "hype drinking games", "party energy games"],
  openGraph: { title: "High Energy Drinking Games", description: "Bring the energy!", type: "article", url: "https://sipwiki.app/guides/high-energy-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/high-energy-drinking-games" },
};

export default function HighEnergyDrinkingGamesPage() {
  return (
    <GuideLayout title="High Energy Drinking Games" description="Need to pump up the party? These games get people moving, cheering, and bring maximum energy to any gathering." breadcrumb="High Energy" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "Team hype" }, { name: "Rage Cage", slug: "rage-cage", description: "Non-stop action" }]}>
      <h2>Maximum Hype Games</h2>
      <ul><li><Link href="/games/flip-cup" className="text-neon-pink">Flip Cup</Link> - Team cheering</li><li><Link href="/games/rage-cage" className="text-neon-pink">Rage Cage</Link> - Constant action</li><li><Link href="/games/slap-cup" className="text-neon-pink">Slap Cup</Link> - Competitive chaos</li><li><Link href="/games/chandelier" className="text-neon-pink">Chandelier</Link> - Bouncing energy</li></ul>
      <h2>Activity Games</h2>
      <ul><li><Link href="/games/beer-pong" className="text-neon-pink">Beer Pong</Link> - Classic competition</li><li><Link href="/games/bite-the-bag" className="text-neon-pink">Bite the Bag</Link> - Physical comedy</li><li><strong>Dance-offs</strong> - Loser drinks</li></ul>
      <h2>When to Bring Energy</h2>
      <ul><li>Party feels slow</li><li>New people arrive</li><li>After eating</li><li>Second wind hits</li><li>Pre-going out</li></ul>
    </GuideLayout>
  );
}
