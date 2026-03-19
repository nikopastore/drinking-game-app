import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games with Shots (2024) | Shot-Based Games",
  description: "Drinking games using shots instead of beer! Higher stakes, faster action. These games are perfect for shot-based parties.",
  keywords: ["drinking games with shots", "shot drinking games", "shot games", "liquor drinking games", "hard liquor games"],
  openGraph: { title: "Drinking Games with Shots", description: "Up the stakes!", type: "article", url: "https://sipwiki.app/guides/drinking-games-with-shots" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-with-shots" },
};

export default function ShotGamesPage() {
  return (
    <GuideLayout title="Best Drinking Games with Shots" description="Ready to up the stakes? These games use shots instead of beer for faster, more intense gameplay. Handle with care!" breadcrumb="Shot Games" relatedGames={[{ name: "Quarters", slug: "quarters", description: "Make it = they shoot" }, { name: "Power Hour", slug: "power-hour", description: "Mini shots" }]}>
      <h2>Shot-Based Classics</h2>
      <ul><li><strong>Shot Roulette</strong> - Spin the wheel, take what you get</li><li><Link href="/games/quarters" className="text-neon-pink">Quarters</Link> - Make it = opponent shots</li><li><strong>Battle Shots</strong> - Battleship with shot glasses</li><li><strong>Jenga Shots</strong> - Pull blocks, take shots</li></ul>
      <h2>Adapted Games</h2>
      <ul><li><Link href="/games/kings-cup" className="text-neon-pink">Kings Cup</Link> - Center cup = shot</li><li><Link href="/games/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - Miss = shot</li><li><strong>Shot Pong</strong> - Beer pong with shot glasses</li></ul>
      <h2>Safety Tips</h2>
      <ul><li>Pace yourself - shots hit faster</li><li>Eat before playing</li><li>Have water available</li><li>Know when to stop</li><li>Never pressure anyone</li></ul>
    </GuideLayout>
  );
}
