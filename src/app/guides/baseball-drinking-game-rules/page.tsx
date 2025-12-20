import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Baseball Drinking Game Rules (2024) | How to Play",
  description: "Complete Baseball drinking game rules! A flip cup variation played like America's favorite pastime with innings and home runs.",
  keywords: ["baseball drinking game", "baseball drinking game rules", "flip cup baseball", "baseball beer game", "drinking game baseball"],
  openGraph: { title: "Baseball Drinking Game Rules", description: "Play ball and drink!", type: "article", url: "https://sipwiki.app/guides/baseball-drinking-game-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/baseball-drinking-game-rules" },
};

export default function BaseballDrinkingGameRulesPage() {
  return (
    <GuideLayout title="Baseball Drinking Game Rules" description="Combine America's pastime with drinking! Teams compete through innings, hitting singles, doubles, and home runs based on flip cup success." breadcrumb="Baseball Rules" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "Core mechanic" }, { name: "Beer Pong", slug: "beer-pong", description: "Another team game" }]}>
      <h2>Setup</h2>
      <ul><li>Two teams of 4+ players</li><li>4 cups per player (bases)</li><li>Long table like flip cup</li></ul>
      <h2>How to Play</h2>
      <ol><li>Batter drinks and flips their cup</li><li>1st flip success = Single</li><li>2nd flip success = Double</li><li>3rd flip success = Triple</li><li>4th flip success = Home Run</li><li>Miss a flip = Out</li><li>3 outs = switch sides</li><li>Play 9 innings</li></ol>
      <h2>Scoring Runs</h2>
      <ul><li>Runners advance based on hits</li><li>Run scores when runner crosses home</li><li>Track score like real baseball</li></ul>
      <h2>House Rules</h2>
      <ul><li><strong>Stealing</strong> - Flip during pitcher&apos;s drink</li><li><strong>Grand Slam</strong> - Bonus drinks for defense</li><li><strong>7th Inning Stretch</strong> - Everyone drinks</li></ul>
    </GuideLayout>
  );
}
