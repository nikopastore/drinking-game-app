import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buzz Drinking Game Rules (2024) | Number Counting Game",
  description: "Learn Buzz drinking game rules! Count around the circle but say 'Buzz' for 7s and multiples - mess up and drink!",
  keywords: ["buzz drinking game", "buzz drinking game rules", "counting drinking game", "7 drinking game", "buzz fizz drinking game"],
  openGraph: { title: "Buzz Drinking Game Rules", description: "Count or drink!", type: "article", url: "https://sipwiki.app/guides/buzz-drinking-game-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/buzz-drinking-game-rules" },
};

export default function BuzzDrinkingGameRulesPage() {
  return (
    <GuideLayout title="Buzz Drinking Game Rules" description="A simple counting game that gets hilariously difficult as the drinks flow. Replace certain numbers with 'Buzz' - mess up and drink!" breadcrumb="Buzz Rules" relatedGames={[{ name: "Cheers to the Governor", slug: "cheers-to-the-governor", description: "Another counting game" }, { name: "Most Likely To", slug: "most-likely-to", description: "Simple group game" }]}>
      <h2>Basic Rules</h2>
      <ol><li>Sit in a circle</li><li>Count up from 1, one person at a time</li><li>Say &quot;BUZZ&quot; instead of any number with 7 or multiple of 7</li><li>7, 14, 17, 21, 27, 28, 35, 37... = BUZZ</li><li>Wrong number or hesitation = drink</li><li>Start over at 1</li></ol>
      <h2>Advanced: Buzz Fizz</h2>
      <ul><li>BUZZ = 7s and multiples</li><li>FIZZ = 5s and multiples</li><li>35 = BUZZ FIZZ (multiple of both)</li></ul>
      <h2>Why It&apos;s Hard</h2>
      <ul><li>Gets confusing after drinks</li><li>Numbers like 70-79 are brutal</li><li>Pressure makes you freeze</li><li>Simple concept, difficult execution</li></ul>
      <h2>Tips</h2>
      <ul><li>Pay attention to pattern</li><li>Practice the 7 times table</li><li>Don&apos;t overthink it</li></ul>
    </GuideLayout>
  );
}
