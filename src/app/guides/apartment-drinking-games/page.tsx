import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Apartment Drinking Games (2024) | Small Space Party Games",
  description: "Perfect drinking games for apartments! Games that work in small spaces, won't disturb neighbors, and don't need a big setup.",
  keywords: ["apartment drinking games", "drinking games for apartments", "small space drinking games", "quiet drinking games", "indoor drinking games"],
  openGraph: { title: "Apartment Drinking Games", description: "Small space, big fun!", type: "article", url: "https://sipwiki.app/guides/apartment-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/apartment-drinking-games" },
};

export default function ApartmentDrinkingGamesPage() {
  return (
    <GuideLayout title="Best Apartment Drinking Games" description="Living in an apartment? These games are perfect for smaller spaces, won't get noise complaints, and don't require much room to play." breadcrumb="Apartment Games" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Table-sized fun" }, { name: "Most Likely To", slug: "most-likely-to", description: "No space needed" }]}>
      <h2>Best for Small Spaces</h2>
      <ul><li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Just needs a table</li><li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - No equipment</li><li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Sit anywhere</li><li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - Card game only</li></ul>
      <h2>Neighbor-Friendly Games</h2>
      <ul><li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Quiet conversation</li><li><Link href="/game/horse-race" className="text-neon-pink">Horse Race</Link> - Low noise</li><li>Card games in general</li><li>Avoid: Flip Cup, Beer Pong, anything physical</li></ul>
      <h2>Apartment Tips</h2>
      <ul><li>Keep volume reasonable</li><li>Use plastic cups (quieter)</li><li>End by midnight</li><li>Have water available</li></ul>
    </GuideLayout>
  );
}
