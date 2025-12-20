import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Roxanne Drinking Game Rules (2024) | The Police Song Game",
  description: "Roxanne drinking game rules! Split into teams - one drinks on 'Roxanne', the other on 'Red Light'. A party classic!",
  keywords: ["roxanne drinking game", "roxanne rules", "the police drinking game", "roxanne red light game", "roxanne song drinking game"],
  openGraph: { title: "Roxanne Drinking Game", description: "Roxanne! Red Light!", type: "article", url: "https://sipwiki.app/guides/roxanne-drinking-game-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/roxanne-drinking-game-rules" },
};

export default function RoxanneDrinkingGameRulesPage() {
  return (
    <GuideLayout title="Roxanne Drinking Game Rules" description="Split into two teams for this Police classic. One team drinks on 'Roxanne', the other on 'Red Light'. Both words appear A LOT." breadcrumb="Roxanne Rules" relatedGames={[{ name: "Thunderstruck", slug: "thunderstruck-rules", description: "Another song game" }, { name: "Power Hour", slug: "power-hour", description: "Music drinking" }]}>
      <h2>Setup</h2>
      <ol><li>Split into two teams</li><li>Team 1 = &quot;Roxanne&quot;</li><li>Team 2 = &quot;Red Light&quot;</li><li>Queue up &quot;Roxanne&quot; by The Police</li></ol>
      <h2>Rules</h2>
      <ul><li>Team Roxanne drinks every &quot;Roxanne&quot;</li><li>Team Red Light drinks every &quot;Red Light&quot;</li><li>Both words appear 26+ times</li><li>It adds up FAST</li></ul>
      <h2>Word Count</h2>
      <ul><li>&quot;Roxanne&quot; = ~26 times</li><li>&quot;Red Light&quot; = ~26 times</li><li>Total drinks per team = 26+</li></ul>
      <h2>Tips</h2>
      <ul><li>Use small sips, not full drinks</li><li>The song is only 3 minutes</li><li>Pace yourself - it&apos;s relentless</li><li>Neither team wins - everyone drinks equally</li></ul>
      <h2>Variations</h2>
      <ul><li><strong>Solo Roxanne</strong> - Everyone drinks on both words</li><li><strong>Roxanne Roulette</strong> - Spin to pick your word</li></ul>
    </GuideLayout>
  );
}
