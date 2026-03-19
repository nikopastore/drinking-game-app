import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Valentine's Day Drinking Games (2024) | Couples & Singles Games",
  description: "Valentine's Day drinking games for couples AND singles! Romantic games for date night or anti-Valentine's parties.",
  keywords: ["valentines day drinking games", "valentine drinking games", "couples drinking games valentines", "anti valentines drinking games", "romantic drinking games"],
  openGraph: { title: "Valentine's Day Drinking Games", description: "Love & drinks!", type: "article", url: "https://sipwiki.app/guides/valentines-day-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/valentines-day-drinking-games" },
};

export default function ValentinesDayDrinkingGamesPage() {
  return (
    <GuideLayout title="Valentine's Day Drinking Games" description="Whether you're coupled up for date night or throwing a Singles Awareness Day party, these games fit the Valentine's vibe." breadcrumb="Valentine's Day" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Perfect for couples" }, { name: "Most Likely To", slug: "most-likely-to", description: "Singles party fun" }]}>
      <h2>Couples Games</h2>
      <ul><li><Link href="/games/truth-or-drink" className="text-neon-pink">Truth or Drink</Link> - Get deep</li><li><strong>The Newlywed Game</strong> - Drinking edition</li><li><strong>Romantic Movie Drinking Game</strong> - Rom-com rules</li><li><strong>Two Truths One Lie</strong> - Learn new things</li></ul>
      <h2>Singles/Group Games</h2>
      <ul><li><strong>Anti-Valentine Bingo</strong> - Spot clichés, drink</li><li><Link href="/games/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Relationship edition</li><li><strong>Bad Date Stories</strong> - Share and drink</li><li><Link href="/games/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Love/dating edition</li></ul>
      <h2>Rom-Com Drinking Rules</h2>
      <ul><li>Someone says &quot;love&quot; = sip</li><li>Rain kiss = drink</li><li>Airport chase scene = finish drink</li></ul>
    </GuideLayout>
  );
}
