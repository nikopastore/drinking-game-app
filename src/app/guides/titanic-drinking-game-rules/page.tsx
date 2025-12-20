import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Titanic Drinking Game Rules (2024) | Sinking Ship Game",
  description: "Titanic drinking game rules! Float a shot glass in beer and pour - whoever sinks the ship drinks it all. Intense and suspenseful!",
  keywords: ["titanic drinking game", "titanic rules", "sinking ship drinking game", "float the boat drinking game", "titanic shot game"],
  openGraph: { title: "Titanic Drinking Game", description: "Don't sink the ship!", type: "article", url: "https://sipwiki.app/guides/titanic-drinking-game-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/titanic-drinking-game-rules" },
};

export default function TitanicDrinkingGameRulesPage() {
  return (
    <GuideLayout title="Titanic Drinking Game Rules" description="Float a shot glass in a beer. Players take turns pouring - whoever sinks the 'Titanic' has to drink the whole thing!" breadcrumb="Titanic Rules" relatedGames={[{ name: "Chandelier", slug: "chandelier", description: "Another cup sinking game" }, { name: "Kings Cup", slug: "kings-cup", description: "Central cup game" }]}>
      <h2>Setup</h2>
      <ul><li>Large glass/pitcher of beer</li><li>Empty shot glass</li><li>Liquor for pouring</li></ul>
      <h2>How to Play</h2>
      <ol><li>Float the empty shot glass in the beer</li><li>Players take turns pouring liquor into the shot glass</li><li>Pour as little or as much as you dare</li><li>The shot glass will slowly sink</li><li>Whoever sinks it = drinks the entire thing</li></ol>
      <h2>Strategy</h2>
      <ul><li>Pour minimal amounts early</li><li>Watch the water line carefully</li><li>Create tension with slow pours</li><li>Bold pours can backfire</li></ul>
      <h2>Why It&apos;s Great</h2>
      <ul><li>Incredible suspense</li><li>Skill and luck combined</li><li>The loser really loses</li><li>Creates memorable moments</li></ul>
    </GuideLayout>
  );
}
