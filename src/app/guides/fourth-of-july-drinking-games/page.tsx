import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "4th of July Drinking Games (2024) | Independence Day Party",
  description: "Best drinking games for July 4th! Patriotic games, BBQ activities, and firework-watching drinking rules for Independence Day.",
  keywords: ["4th of july drinking games", "fourth of july drinking games", "independence day drinking games", "july 4th party games", "patriotic drinking games"],
  openGraph: { title: "4th of July Drinking Games", description: "USA! USA! Drink!", type: "article", url: "https://sipwiki.app/guides/fourth-of-july-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/fourth-of-july-drinking-games" },
};

export default function FourthOfJulyDrinkingGamesPage() {
  return (
    <GuideLayout title="4th of July Drinking Games" description="Celebrate America's birthday with red, white, and booze! Patriotic games perfect for BBQs, fireworks, and Independence Day parties." breadcrumb="4th of July" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "USA vs USA" }, { name: "Beer Pong", slug: "beer-pong", description: "Backyard classic" }]}>
      <h2>Patriotic Games</h2>
      <ul><li><strong>Red vs Blue Flip Cup</strong> - Team competition</li><li><strong>USA Trivia</strong> - Wrong answers = drink</li><li><strong>Presidential Drinking Game</strong> - Name presidents in order</li></ul>
      <h2>BBQ Games</h2>
      <ul><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - Backyard essential</li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Team USA style</li><li>Cornhole with drinking rules</li></ul>
      <h2>Fireworks Drinking Rules</h2>
      <ul><li>Red firework = red cup people drink</li><li>Blue firework = blue cup drinks</li><li>White/gold = everyone drinks</li><li>Grand finale = finish your drink</li></ul>
    </GuideLayout>
  );
}
