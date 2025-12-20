import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Waterfall Drinking Game Rules (2024) | How to Play Waterfall",
  description: "Complete Waterfall drinking game rules! Learn how to play this classic card game where everyone drinks in a cascading chain reaction.",
  keywords: ["waterfall drinking game", "waterfall rules", "how to play waterfall", "waterfall card game", "cascade drinking game"],
  openGraph: { title: "Waterfall Drinking Game Rules", description: "Master the cascade!", type: "article", url: "https://sipwiki.app/guides/waterfall-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/waterfall-rules" },
};

export default function WaterfallRulesPage() {
  return (
    <GuideLayout title="Waterfall Drinking Game Rules" description="The iconic drinking game where one person starts drinking and everyone follows in sequence - no one can stop until the person before them stops!" breadcrumb="Waterfall Rules" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Features waterfall rule" }, { name: "Rage Cage", slug: "rage-cage", description: "Another cascade game" }]}>
      <h2>What is Waterfall?</h2>
      <p>Waterfall is a drinking mechanic where players drink in sequence. When the first person starts, the next person starts, and so on. No one can stop drinking until the person before them stops.</p>
      <h2>How to Play</h2>
      <ol><li>Sit in a circle with drinks ready</li><li>The starter begins drinking</li><li>The person to their left starts drinking</li><li>Continue around the circle</li><li>You cannot stop until the person before you stops</li></ol>
      <h2>Strategy Tips</h2>
      <ul><li>Pace yourself if you&apos;re early in the chain</li><li>The first person controls everyone&apos;s fate</li><li>Take small sips to last longer</li><li>Position matters - later is easier</li></ul>
      <h2>Variations</h2>
      <ul><li><strong>Reverse Waterfall</strong> - Go counterclockwise</li><li><strong>Speed Waterfall</strong> - Must chug, not sip</li><li><strong>Double Waterfall</strong> - Two chains at once</li></ul>
    </GuideLayout>
  );
}
