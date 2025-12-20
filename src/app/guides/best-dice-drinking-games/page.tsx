import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Best Dice Drinking Games (2024) | Games with Dice",
  description: "Best drinking games that use dice! From Three Man to 7-11 Doubles, these dice games are perfect for parties. Easy to learn, fun to play.",
  keywords: ["dice drinking games", "drinking games with dice", "three man drinking game", "7 11 doubles", "dice games for adults"],
  openGraph: { title: "10 Best Dice Drinking Games", description: "Roll the dice, drink the drinks.", type: "article", url: "https://sipwiki.app/guides/best-dice-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/best-dice-drinking-games" },
};

export default function BestDiceDrinkingGamesPage() {
  return (
    <GuideLayout title="10 Best Dice Drinking Games" description="Dice add perfect randomness to drinking games. A quick roll determines your fate - no skill required, just luck. These are the best dice games for parties." breadcrumb="Dice Drinking Games" relatedGames={[{ name: "Three Man", slug: "three-man", description: "Classic dice game" }, { name: "7-11 Doubles", slug: "7-11-doubles", description: "Fast-paced dice racing" }]}>
      <h2>Top Dice Games</h2>
      <ul><li><Link href="/game/three-man" className="text-neon-pink">Three Man</Link> - Roll to assign the Three Man who drinks on every 3</li><li><Link href="/game/7-11-doubles" className="text-neon-pink">7-11 Doubles</Link> - Race to roll winning combos</li><li><strong>Chō-Han</strong> - Bet on odd or even</li><li><strong>Mexican</strong> - Bluffing with dice rolls</li><li><strong>Ship, Captain, Crew</strong> - Roll the right sequence</li></ul>
      <h2>Three Man Rules</h2>
      <ol><li>Roll to become the Three Man</li><li>Any 3 rolled = Three Man drinks</li><li>7 = person to your left drinks</li><li>11 = person to your right drinks</li><li>Doubles = give that many drinks</li></ol>
      <h2>Why Dice Work</h2>
      <ul><li>Pure luck - no skill advantage</li><li>Fast rounds</li><li>Easy to carry</li><li>Everyone understands rolling</li></ul>
      <p>See all <Link href="/games/dice-games" className="text-neon-pink hover:underline">dice games</Link>!</p>
    </GuideLayout>
  );
}
