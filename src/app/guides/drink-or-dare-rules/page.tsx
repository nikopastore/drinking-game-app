import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drink or Dare Rules (2024) | Drinking Truth or Dare",
  description: "Drink or Dare rules - the drinking version of truth or dare! Choose a dare or take a drink instead. Perfect party game!",
  keywords: ["drink or dare", "drink or dare rules", "drinking truth or dare", "dare or drink game", "drink or dare drinking game"],
  openGraph: { title: "Drink or Dare Rules", description: "Dare or drink!", type: "article", url: "https://sipwiki.app/guides/drink-or-dare-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/drink-or-dare-rules" },
};

export default function DrinkOrDareRulesPage() {
  return (
    <GuideLayout title="Drink or Dare Rules" description="The classic party game with a drinking twist. Get a dare - either do it or drink! How brave are you feeling?" breadcrumb="Drink or Dare" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Question version" }, { name: "Most Likely To", slug: "most-likely-to", description: "Fun social game" }]}>
      <h2>Basic Rules</h2>
      <ol><li>Sit in a circle</li><li>Take turns giving dares to the next person</li><li>They either do the dare OR take a drink</li><li>More embarrassing dare = more drinks to skip</li></ol>
      <h2>Dare Levels</h2>
      <ul><li><strong>Easy (1 drink to skip)</strong> - Sing a song, do an impression</li><li><strong>Medium (2 drinks)</strong> - Call someone, post something</li><li><strong>Hard (3 drinks)</strong> - Really embarrassing stuff</li><li><strong>Extreme (4+ drinks)</strong> - Legendary dares</li></ul>
      <h2>Dare Ideas</h2>
      <ul><li>Text your ex</li><li>Let someone post on your social</li><li>Do your best dance move</li><li>Prank call someone</li><li>Swap clothes with someone</li></ul>
      <h2>Tips</h2>
      <ul><li>Keep dares fun, not mean</li><li>Respect boundaries</li><li>Escalate gradually through the night</li></ul>
    </GuideLayout>
  );
}
