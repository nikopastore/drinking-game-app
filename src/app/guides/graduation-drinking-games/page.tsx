import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Graduation Party Drinking Games (2024) | Grad Party Ideas",
  description: "Best drinking games for graduation parties! Celebrate finishing school with games perfect for grad celebrations.",
  keywords: ["graduation drinking games", "grad party drinking games", "graduation party games", "college graduation drinking", "high school graduation party"],
  openGraph: { title: "Graduation Drinking Games", description: "Congrats grad!", type: "article", url: "https://sipwiki.app/guides/graduation-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/graduation-drinking-games" },
};

export default function GraduationDrinkingGamesPage() {
  return (
    <GuideLayout title="Graduation Party Drinking Games" description="You did it! Celebrate finishing school with games that honor your achievement and roast your grad school journey." breadcrumb="Graduation" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Party essential" }, { name: "Most Likely To", slug: "most-likely-to", description: "Classmate memories" }]}>
      <h2>Grad-Themed Games</h2>
      <ul><li><strong>Senior Superlatives</strong> - Vote and drink</li><li><strong>Professor Impressions</strong> - Best one gives drinks</li><li><strong>Major Trivia</strong> - Test your degree knowledge</li><li><strong>Embarrassing School Stories</strong> - Share and sip</li></ul>
      <h2>Classic Party Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Add graduation rules</li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Department vs department</li><li><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> - Last hurrah</li></ul>
      <h2>Future Toast Game</h2>
      <ul><li>Make a prediction about each grad</li><li>They drink if they agree</li><li>You drink if they disagree</li></ul>
    </GuideLayout>
  );
}
