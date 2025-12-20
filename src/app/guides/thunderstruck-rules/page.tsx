import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thunderstruck Drinking Game Rules (2024) | AC/DC Game",
  description: "Thunderstruck drinking game rules! Drink every time they say 'Thunder' in the AC/DC classic - a legendary party game.",
  keywords: ["thunderstruck drinking game", "thunderstruck rules", "acdc drinking game", "thunder drinking game", "thunderstruck beer game"],
  openGraph: { title: "Thunderstruck Drinking Game", description: "Thunder! Drink!", type: "article", url: "https://sipwiki.app/guides/thunderstruck-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/thunderstruck-rules" },
};

export default function ThunderstruckRulesPage() {
  return (
    <GuideLayout title="Thunderstruck Drinking Game Rules" description="The legendary AC/DC drinking game. When they say 'Thunder', you drink until they say it again. Simple, brutal, iconic." breadcrumb="Thunderstruck" relatedGames={[{ name: "Power Hour", slug: "power-hour", description: "Music-based drinking" }, { name: "Roxanne", slug: "roxanne-drinking-game-rules", description: "Another song game" }]}>
      <h2>How to Play</h2>
      <ol><li>Everyone stands in a circle with drinks</li><li>Play &quot;Thunderstruck&quot; by AC/DC</li><li>First person starts drinking at first &quot;Thunder&quot;</li><li>They drink until the next &quot;Thunder&quot;</li><li>Then the next person drinks</li><li>Continue around the circle</li></ol>
      <h2>Why Position Matters</h2>
      <p>The song has uneven gaps between &quot;Thunder&quot;:</p>
      <ul><li>Some gaps are short (lucky!)</li><li>The guitar solo = LONG drink</li><li>Position 7-10 usually gets the solo</li></ul>
      <h2>Survival Tips</h2>
      <ul><li>Don&apos;t be in position 8-10</li><li>Pace yourself during your turn</li><li>Use a straw for speed</li><li>Light beer recommended</li></ul>
      <h2>Variations</h2>
      <ul><li><strong>Double Thunder</strong> - Two people drink at once</li><li><strong>Thunder Flip</strong> - Flip cup after your turn</li></ul>
    </GuideLayout>
  );
}
