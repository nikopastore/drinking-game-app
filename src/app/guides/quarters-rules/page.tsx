import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quarters Rules: How to Play the Classic Coin Drinking Game (2024)",
  description: "Official Quarters rules! Learn how to bounce quarters into cups, drinking penalties, and game variations. The classic bar drinking game explained.",
  keywords: ["quarters rules", "quarters drinking game", "how to play quarters", "coin drinking game", "bounce quarters", "quarters game rules", "bar drinking games"],
  openGraph: { title: "Quarters Rules: Complete Guide", description: "Master the classic Quarters drinking game.", type: "article", url: "https://sipwiki.app/guides/quarters-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/quarters-rules" },
};

export default function QuartersRulesPage() {
  return (
    <GuideLayout
      title="Quarters Rules: The Classic Coin Drinking Game"
      description="Quarters is one of the oldest and most beloved bar drinking games. All you need is a quarter and a cup. Simple to learn, tricky to master, and endlessly replayable."
      breadcrumb="Quarters Rules"
      primaryGame={{ name: "Quarters", slug: "quarters" }}
      relatedGames={[
        { name: "Chandelier", slug: "chandelier", description: "Bouncing cup game" },
        { name: "Beer Pong", slug: "beer-pong", description: "Classic throwing game" },
      ]}
    >
      <h2>What You Need</h2>
      <ul>
        <li><strong>1 quarter</strong> (or any coin)</li>
        <li><strong>1 shot glass or cup</strong></li>
        <li><strong>Drinks for everyone</strong></li>
        <li><strong>Flat table surface</strong></li>
      </ul>

      <h2>Basic Quarters Rules</h2>
      <ol>
        <li>Place a shot glass in the center of the table</li>
        <li>Players take turns bouncing the quarter off the table</li>
        <li>Try to land the quarter in the glass</li>
        <li>Make it? Choose someone to drink</li>
        <li>Miss? Next player&apos;s turn</li>
      </ol>

      <h2>Advanced Rules</h2>
      <h3>Make Three in a Row</h3>
      <p>Make three consecutive shots? You get to make a rule that lasts the whole game.</p>

      <h3>Speed Quarters</h3>
      <p>Two quarters in play. If someone makes it while you&apos;re still shooting, you drink.</p>

      <h3>Chandeliers</h3>
      <p>Multiple cups with a center cup. Hit the center and everyone drinks.</p>

      <h2>Bouncing Technique</h2>
      <ul>
        <li>Hold quarter between thumb and index finger</li>
        <li>Bounce at about 45-degree angle</li>
        <li>Aim for consistent height and distance</li>
        <li>Practice your release point</li>
      </ul>

      <h2>Quarters Variations</h2>
      <ul>
        <li><strong>Speed Quarters</strong> - Two coins racing around</li>
        <li><strong>Baseball</strong> - Innings with 4 cups as bases</li>
        <li><strong>Knockout</strong> - Miss and you&apos;re eliminated</li>
        <li><strong>Horse</strong> - Miss shots your opponent made = get letters</li>
      </ul>

      <h2>Pro Tips</h2>
      <ul>
        <li>A worn quarter bounces more predictably</li>
        <li>Keep your wrist loose</li>
        <li>Find your lucky spot on the table</li>
        <li>Watch successful shooters and mimic their technique</li>
      </ul>

      <p>Try our <Link href="/game/quarters" className="text-neon-pink hover:underline">Quarters game</Link> or browse more <Link href="/games" className="text-neon-pink hover:underline">drinking games</Link>.</p>
    </GuideLayout>
  );
}
