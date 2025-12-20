import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Video Game Drinking Games (2024) | Gaming + Drinking Rules",
  description: "Drinking games for video games! Rules for Mario Kart, Smash Bros, Call of Duty, and more. Level up your gaming nights.",
  keywords: ["video game drinking games", "gaming drinking games", "mario kart drinking game", "smash bros drinking game", "drunk gaming"],
  openGraph: { title: "Video Game Drinking Games", description: "Level up + drink up!", type: "article", url: "https://sipwiki.app/guides/video-game-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/video-game-drinking-games" },
};

export default function VideoGameDrinkingGamesPage() {
  return (
    <GuideLayout title="Video Game Drinking Games" description="Combine your two favorite hobbies! These drinking rules work with popular video games for the ultimate gaming night." breadcrumb="Video Game Drinking" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Between rounds" }]}>
      <h2>Mario Kart</h2>
      <ul><li>Get hit by shell = drink</li><li>Fall off track = drink</li><li>Use item = others can&apos;t drink</li><li>Last place = finish drink</li><li><strong>Beerio Kart:</strong> Finish beer before race ends, can&apos;t drink while driving</li></ul>
      <h2>Smash Bros</h2>
      <ul><li>Lose a stock = drink</li><li>SD (self-destruct) = finish drink</li><li>Get a KO = give a drink</li><li>Lose match = take a shot</li></ul>
      <h2>Call of Duty / FPS</h2>
      <ul><li>Die = drink</li><li>Kill = give a drink</li><li>Killstreak = give drinks equal to streak</li><li>Teabagged = finish drink</li></ul>
      <h2>Any Game Universal</h2>
      <ul><li>Lose = drink</li><li>Win = give drinks</li><li>Rage quit = finish drink + sit out</li></ul>
    </GuideLayout>
  );
}
