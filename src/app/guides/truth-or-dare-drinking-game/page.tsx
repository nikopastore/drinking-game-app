import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truth or Dare Drinking Game (2024) | Rules & Best Dares",
  description: "How to play Truth or Dare as a drinking game! Rules, best questions, and dare ideas. Add drinks for extra fun.",
  keywords: ["truth or dare drinking game", "truth or dare rules", "truth or dare questions", "truth or dare dares", "adult truth or dare"],
  openGraph: { title: "Truth or Dare Drinking Game", description: "Classic with a twist!", type: "article", url: "https://sipwiki.app/guides/truth-or-dare-drinking-game" },
  alternates: { canonical: "https://sipwiki.app/guides/truth-or-dare-drinking-game" },
};

export default function TruthOrDarePage() {
  return (
    <GuideLayout title="Truth or Dare Drinking Game" description="The childhood classic, grown up! Add drinking rules to Truth or Dare for an unforgettable adult version." breadcrumb="Truth or Dare" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Similar vibe" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "More confessions" }]}>
      <h2>Basic Rules</h2>
      <ol><li>Someone asks &quot;Truth or Dare?&quot;</li><li>Pick one - answer or perform</li><li><strong>Refuse?</strong> Take a drink (or 3)</li><li>Complete it? You ask next</li></ol>
      <h2>Adding Drinking Rules</h2>
      <ul><li>Refuse truth = 2 drinks</li><li>Refuse dare = 3 drinks</li><li>Boring truth = everyone else drinks</li><li>Fail a dare = finish your drink</li></ul>
      <h2>Sample Dares</h2>
      <ul><li>Text your ex &quot;I miss you&quot;</li><li>Do your best celebrity impression</li><li>Let someone post on your social media</li><li>Call your mom and tell her you love her</li></ul>
      <p>Try <Link href="/game/truth-or-drink" className="text-neon-pink hover:underline">Truth or Drink</Link>!</p>
    </GuideLayout>
  );
}
