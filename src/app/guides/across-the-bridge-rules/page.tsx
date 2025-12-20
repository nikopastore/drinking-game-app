import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Across the Bridge Drinking Game Rules (2024) | Card Bridge Game",
  description: "Learn Across the Bridge drinking game rules! Cross a bridge of cards - flip face cards and drink, make it across to win.",
  keywords: ["across the bridge drinking game", "bridge drinking game rules", "card bridge game", "cross the bridge drinking", "bridge card drinking game"],
  openGraph: { title: "Across the Bridge Rules", description: "Cross if you dare!", type: "article", url: "https://sipwiki.app/guides/across-the-bridge-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/across-the-bridge-rules" },
};

export default function AcrossTheBridgeRulesPage() {
  return (
    <GuideLayout title="Across the Bridge Drinking Game Rules" description="Try to cross a bridge of face-down cards. Hit a face card? Drink and add more cards to your journey!" breadcrumb="Across the Bridge" relatedGames={[{ name: "Ride the Bus", slug: "ride-the-bus", description: "Similar card challenge" }, { name: "Irish Poker", slug: "irish-poker", description: "Another card game" }]}>
      <h2>Setup</h2>
      <ol><li>Lay 10 cards face-down in a row (the bridge)</li><li>Place the deck nearby</li><li>Each player takes turns crossing</li></ol>
      <h2>How to Play</h2>
      <ol><li>Flip the first card</li><li>Number card (2-10)? Move to the next card</li><li>Face card (J, Q, K, A)? Drink and add cards</li><li>Jack = 1 drink, add 1 card</li><li>Queen = 2 drinks, add 2 cards</li><li>King = 3 drinks, add 3 cards</li><li>Ace = 4 drinks, add 4 cards</li><li>Cross all cards to win!</li></ol>
      <h2>Why It&apos;s Brutal</h2>
      <ul><li>Face cards extend your journey</li><li>Bad luck = very long bridge</li><li>Tension builds with each flip</li><li>Simple but punishing</li></ul>
    </GuideLayout>
  );
}
