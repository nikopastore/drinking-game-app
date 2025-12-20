import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sports Drinking Games (2024) | Games for Watching Sports",
  description: "Drinking games for watching sports! Rules for football, basketball, baseball, and more. Make game day even better.",
  keywords: ["sports drinking games", "football drinking game", "basketball drinking game", "watching sports drinking game", "game day drinking games"],
  openGraph: { title: "Sports Drinking Games", description: "Game day ready!", type: "article", url: "https://sipwiki.app/guides/sports-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/sports-drinking-games" },
};

export default function SportsDrinkingGamesPage() {
  return (
    <GuideLayout title="Sports Drinking Games" description="Make watching sports even more exciting! Drink for scores, penalties, and big plays. Works for any sport." breadcrumb="Sports Games" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "Halftime game" }]}>
      <h2>Universal Sports Rules</h2>
      <ul><li>Your team scores = opponents drink</li><li>Commercial break = social drink</li><li>Penalty/foul = everyone drinks</li><li>Replay shown = drink during replay</li></ul>
      <h2>Football Rules</h2>
      <ul><li>Touchdown = losers drink</li><li>Field goal = sip</li><li>Interception = offense fans finish</li><li>Sack = defense fans drink</li></ul>
      <h2>Basketball Rules</h2>
      <ul><li>3-pointer = 3 drinks</li><li>Free throw missed = drink</li><li>Dunk = opponents finish drink</li><li>Technical foul = everyone drinks</li></ul>
      <h2>Baseball Rules</h2>
      <ul><li>Home run = opponents drink</li><li>Strikeout = batter&apos;s fans drink</li><li>Walk = pitcher&apos;s fans drink</li><li>7th inning = everyone stands and drinks</li></ul>
    </GuideLayout>
  );
}
