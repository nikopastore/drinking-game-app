import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Card Drinking Games (2024) | Games with a Deck of Cards",
  description: "The best drinking games you can play with just a deck of cards! From Kings Cup to Ride the Bus, master these card game classics.",
  keywords: ["card drinking games", "drinking games with cards", "deck of cards drinking games", "best card games for drinking", "poker drinking games"],
  openGraph: { title: "15 Best Card Drinking Games", description: "All you need is a deck.", type: "article", url: "https://sipwiki.app/guides/best-card-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/best-card-drinking-games" },
};

export default function BestCardDrinkingGamesPage() {
  const games = [
    { name: "Kings Cup", slug: "kings-cup", desc: "The classic - each card has a rule" },
    { name: "Ride the Bus", slug: "ride-the-bus", desc: "Guess cards or drink" },
    { name: "Beeramid", slug: "beeramid", desc: "Pyramid of bluffing" },
    { name: "Irish Poker", slug: "irish-poker", desc: "Four rounds of guessing" },
    { name: "Fuck the Dealer", slug: "fuck-the-dealer", desc: "Guess the card value" },
    { name: "Horse Race", slug: "horse-race", desc: "Bet on card suits" },
    { name: "Around the World", slug: "around-the-world", desc: "Guess your way around" },
  ];
  return (
    <GuideLayout title="15 Best Card Drinking Games" description="A deck of cards is the ultimate drinking game tool. Portable, cheap, and endless possibilities. These are the best card drinking games for any party." breadcrumb="Card Drinking Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "The classic" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Guessing game" }]}>
      <h2>Top Card Games</h2>
      <div className="not-prose my-6 space-y-3">
        {games.map((g) => (
          <div key={g.slug} className="p-4 bg-dark-800 rounded-lg flex justify-between items-center">
            <div><span className="font-bold text-white">{g.name}</span><p className="text-sm text-gray-400">{g.desc}</p></div>
            <Link href={`/game/${g.slug}`} className="text-neon-pink text-sm">Play →</Link>
          </div>
        ))}
      </div>
      <h2>Why Cards Work</h2>
      <ul><li>Everyone has a deck</li><li>Portable - fits in your pocket</li><li>Dozens of games possible</li><li>Randomness built in</li></ul>
      <p>See all <Link href="/games/card-games" className="text-neon-pink hover:underline">card games</Link>!</p>
    </GuideLayout>
  );
}
