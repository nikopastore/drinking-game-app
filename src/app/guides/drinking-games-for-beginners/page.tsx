import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Easy Drinking Games for Beginners (2024) | Simple Rules, Big Fun",
  description: "New to drinking games? Start here! Simple games with easy rules that anyone can learn in seconds. Perfect for first-time players.",
  keywords: ["drinking games for beginners", "easy drinking games", "simple drinking games", "beginner drinking games", "drinking games simple rules"],
  openGraph: { title: "Drinking Games for Beginners", description: "Simple games anyone can play.", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-beginners" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-beginners" },
};

export default function DrinkingGamesForBeginnersPage() {
  return (
    <GuideLayout title="Easy Drinking Games for Beginners" description="New to drinking games? No worries! These games have simple rules that anyone can pick up in seconds. Perfect for introducing friends to the fun." breadcrumb="Beginner Games" relatedGames={[{ name: "Never Have I Ever", slug: "never-have-i-ever", description: "Just talk and drink" }, { name: "Most Likely To", slug: "most-likely-to", description: "Point and drink" }]}>
      <h2>Easiest Games to Learn</h2>
      <ul><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Say something, drink if you&apos;ve done it</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Point at who fits, they drink</li><li><Link href="/game/medusa" className="text-neon-pink">Medusa</Link> - Make eye contact, shout names</li></ul>
      <h2>Games with Simple Rules</h2>
      <ul><li><strong>Higher or Lower</strong> - Guess if next card is higher or lower</li><li><strong>Flip Cup</strong> - Drink and flip, first team done wins</li><li><strong>Quarters</strong> - Bounce quarter into cup</li></ul>
      <h2>Tips for New Players</h2>
      <ul><li>It&apos;s okay to ask for rules to be repeated</li><li>Pace yourself - you don&apos;t have to finish every drink</li><li>Water is always acceptable</li><li>Watch a round first if unsure</li></ul>
      <p>See all <Link href="/games/quick-easy" className="text-neon-pink hover:underline">quick & easy games</Link>!</p>
    </GuideLayout>
  );
}
