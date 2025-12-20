import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Avalanche Drinking Game Rules (2024) | Dice Drinking Game",
  description: "Avalanche drinking game rules! Roll dice to determine who drinks, with escalating stakes. A fast-paced dice drinking game.",
  keywords: ["avalanche drinking game", "avalanche rules", "avalanche dice game", "dice drinking game", "avalanche drinking game rules"],
  openGraph: { title: "Avalanche Drinking Game", description: "Roll or drink!", type: "article", url: "https://sipwiki.app/guides/avalanche-drinking-game-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/avalanche-drinking-game-rules" },
};

export default function AvalancheDrinkingGameRulesPage() {
  return (
    <GuideLayout title="Avalanche Drinking Game Rules" description="A dice game where the cup gets fuller and fuller until someone has to drink it all. The avalanche builds until it crashes down!" breadcrumb="Avalanche Rules" relatedGames={[{ name: "Three Man", slug: "three-man", description: "Another dice game" }, { name: "Mexicali", slug: "mexicali", description: "Dice drinking" }]}>
      <h2>Setup</h2>
      <ul><li>One die</li><li>One large cup</li><li>Everyone&apos;s drinks</li></ul>
      <h2>How to Play</h2>
      <p>Roll the die and follow the result:</p>
      <ul><li><strong>1</strong> - Pour some of your drink into the cup, pass left</li><li><strong>2</strong> - Pour some into the cup, pass left</li><li><strong>3</strong> - Drink the cup! Then pour some in, pass left</li><li><strong>4</strong> - Yell &quot;FLOOR!&quot; - last person to touch floor drinks</li><li><strong>5</strong> - Person to your right drinks</li><li><strong>6</strong> - Everyone drinks</li></ul>
      <h2>The Avalanche Effect</h2>
      <ul><li>1s and 2s build the cup</li><li>3 is dreaded - could be huge</li><li>Tension builds as cup fills</li><li>Creates exciting moments</li></ul>
    </GuideLayout>
  );
}
