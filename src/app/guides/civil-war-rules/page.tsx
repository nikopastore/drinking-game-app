import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Civil War Beer Pong Rules: Chaotic Team Game (2024 Guide)",
  description: "Civil War drinking game rules! Learn this fast-paced, no-turns beer pong variant. 3v3 chaos with everyone shooting at once. Setup, rules, and strategies.",
  keywords: ["civil war rules", "civil war drinking game", "civil war beer pong", "3v3 beer pong", "team drinking games", "chaotic beer pong"],
  openGraph: { title: "Civil War Beer Pong Rules", description: "The most chaotic beer pong variant.", type: "article", url: "https://sipwiki.app/guides/civil-war-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/civil-war-rules" },
};

export default function CivilWarRulesPage() {
  return (
    <GuideLayout title="Civil War: The Chaotic Team Beer Pong Game" description="Civil War is beer pong on steroids. Two teams of 3, no turns, just constant throwing and drinking. It's fast, loud, and absolute chaos - perfect for parties that need energy." breadcrumb="Civil War Rules" primaryGame={{ name: "Civil War", slug: "civil-war" }} relatedGames={[{ name: "Beer Pong", slug: "beer-pong", description: "Classic version" }, { name: "Vietnam War", slug: "vietnam-war", description: "Asymmetric team variant" }]}>
      <h2>What You Need</h2>
      <ul><li>6 players (3 per team)</li><li>2 beer pong tables or 1 long table</li><li>18 cups per side (6 per player)</li><li>3+ ping pong balls</li><li>Plenty of beer</li></ul>
      <h2>Setup</h2>
      <ol><li>Each player sets up 6 cups in front of them (triangle of 3-2-1)</li><li>Teams of 3 face each other</li><li>Each player has their own cups to defend</li><li>Give each team 1-2 balls to start</li></ol>
      <h2>How to Play</h2>
      <ol><li><strong>No turns!</strong> - Everyone shoots whenever they have a ball</li><li>Sink an opponent&apos;s cup = they drink and remove it</li><li>Retrieve balls as fast as possible and keep shooting</li><li>When all your cups are gone, you&apos;re eliminated</li><li>Last team with players standing wins</li></ol>
      <h2>Key Rules</h2>
      <ul><li>You must shoot at the player directly across from you</li><li>Once eliminated, you can&apos;t touch balls or help your team</li><li>No leaning over the table</li><li>No swatting balls (standard beer pong rules apply)</li></ul>
      <h2>Strategy</h2>
      <ul><li>Focus fire - team up on one opponent to eliminate them fast</li><li>Pass balls to teammates who are on fire</li><li>Protect your best shooter - keep their cups alive</li></ul>
      <p>Check out <Link href="/games/civil-war" className="text-neon-pink hover:underline">Civil War</Link> on SipWiki!</p>
    </GuideLayout>
  );
}
