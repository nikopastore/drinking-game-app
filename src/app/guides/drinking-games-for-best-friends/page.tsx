import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Games for Best Friends (2024) | BFF Party Games",
  description: "Drinking games perfect for best friends! Games that use inside jokes, shared history, and test how well you know each other.",
  keywords: ["drinking games for best friends", "bff drinking games", "best friend drinking games", "drinking games close friends", "friend group drinking games"],
  openGraph: { title: "Drinking Games for Best Friends", description: "BFF game night!", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-best-friends" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-best-friends" },
};

export default function DrinkingGamesForBestFriendsPage() {
  return (
    <GuideLayout title="Drinking Games for Best Friends" description="Playing with your ride-or-dies? These games leverage your shared history, inside jokes, and how well you really know each other." breadcrumb="BFF Games" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "You know each other" }, { name: "Truth or Drink", slug: "truth-or-drink", description: "Deep secrets" }]}>
      <h2>Games That Use Your History</h2>
      <ul><li><Link href="/games/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Years of material</li><li><Link href="/games/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - No secrets left</li><li><strong>Finish My Sentence</strong> - Test your bond</li><li><strong>Who Said It</strong> - Quote your friends</li></ul>
      <h2>Best Friend Challenges</h2>
      <ul><li><strong>Best Friend Trivia</strong> - Birthday, favorites, fears</li><li><strong>Embarrassing Story Roulette</strong> - You all know them</li><li><strong>Prediction Game</strong> - What will they do next?</li></ul>
      <h2>Why Close Friends Games Hit Different</h2>
      <ul><li>Inside jokes = funnier</li><li>Can go deeper</li><li>Nothing off limits</li><li>More comfortable being dumb</li></ul>
    </GuideLayout>
  );
}
