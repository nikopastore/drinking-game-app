import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unique Drinking Games (2024) | Creative & Unusual Games",
  description: "Bored of Beer Pong? Try these unique and creative drinking games that your friends have never played before!",
  keywords: ["unique drinking games", "creative drinking games", "unusual drinking games", "different drinking games", "new drinking games"],
  openGraph: { title: "Unique Drinking Games", description: "Try something new!", type: "article", url: "https://sipwiki.app/guides/unique-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/unique-drinking-games" },
};

export default function UniqueGamesPage() {
  return (
    <GuideLayout title="Unique Drinking Games" description="Tired of the same old games? These creative and unusual drinking games will surprise your friends and make your party stand out." breadcrumb="Unique Games" relatedGames={[{ name: "Medusa", slug: "medusa", description: "Eye contact chaos" }, { name: "Bite the Bag", slug: "bite-the-bag", description: "Physical comedy" }]}>
      <h2>Hidden Gems</h2>
      <ul><li><Link href="/game/medusa" className="text-neon-pink">Medusa</Link> - Eye contact showdown</li><li><Link href="/game/bite-the-bag" className="text-neon-pink">Bite the Bag</Link> - Flexibility test</li><li><Link href="/game/cheers-to-the-governor" className="text-neon-pink">Cheers to the Governor</Link> - Number chaos</li><li><Link href="/game/chandelier" className="text-neon-pink">Chandelier</Link> - Bouncing brilliance</li></ul>
      <h2>Creative Spins</h2>
      <ul><li><strong>Drink Roulette</strong> - Random consequences</li><li><strong>Personality Quiz Drinking</strong> - Online quizzes + drinks</li><li><strong>Wikipedia Game</strong> - Race + drinking</li></ul>
      <h2>Invent Your Own</h2>
      <ul><li>Combine two existing games</li><li>Add drinking to any board game</li><li>Create themed rules for movies/shows</li></ul>
    </GuideLayout>
  );
}
