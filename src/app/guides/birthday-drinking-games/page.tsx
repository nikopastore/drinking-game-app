import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Birthday Drinking Games (2024) | Party Games for Birthdays",
  description: "Make any birthday party epic with these drinking games! Games that celebrate the birthday person and keep guests entertained.",
  keywords: ["birthday drinking games", "birthday party games adults", "21st birthday drinking games", "birthday party drinking games", "drinking games for birthday"],
  openGraph: { title: "Birthday Drinking Games", description: "Celebrate in style!", type: "article", url: "https://sipwiki.app/guides/birthday-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/birthday-drinking-games" },
};

export default function BirthdayDrinkingGamesPage() {
  return (
    <GuideLayout title="Best Birthday Drinking Games" description="It's their special day - make it unforgettable! These games put the birthday person in the spotlight while keeping everyone entertained." breadcrumb="Birthday Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Crown them king" }, { name: "Most Likely To", slug: "most-likely-to", description: "Roast them lovingly" }]}>
      <h2>Birthday Person Games</h2>
      <ul><li><strong>Birthday Rules</strong> - They make rules all night</li><li><strong>Age = Drinks Given</strong> - They give out their age in drinks</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - About the birthday person</li><li><strong>Birthday Trivia</strong> - Guests answer questions about them</li></ul>
      <h2>21st Birthday Specials</h2>
      <ul><li><strong>21 for 21</strong> - 21 challenges throughout the night</li><li><Link href="/game/power-hour" className="text-neon-pink">Power Hour</Link> - The ultimate endurance test</li><li><strong>Around the World</strong> - 21 drinks from 21 people</li></ul>
      <h2>Group Games</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link></li><li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link></li><li><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link></li></ul>
    </GuideLayout>
  );
}
