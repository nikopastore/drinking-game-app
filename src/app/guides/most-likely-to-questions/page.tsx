import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "150+ Most Likely To Questions (2024) | Funny, Dirty & Party Questions",
  description: "Best Most Likely To questions for drinking games and parties! Includes funny questions, spicy adult questions, and friend group questions. Vote and drink!",
  keywords: ["most likely to questions", "most likely to drinking game", "who is most likely to", "party voting game", "most likely to dirty", "most likely to funny"],
  openGraph: { title: "150+ Most Likely To Questions", description: "The best Most Likely To questions for any party.", type: "article", url: "https://sipwiki.app/guides/most-likely-to-questions" },
  alternates: { canonical: "https://sipwiki.app/guides/most-likely-to-questions" },
};

export default function MostLikelyToQuestionsPage() {
  const funnyQuestions = [
    "Most likely to forget their own birthday",
    "Most likely to become a meme",
    "Most likely to survive a zombie apocalypse",
    "Most likely to marry a celebrity",
    "Most likely to win the lottery and lose the ticket",
    "Most likely to show up to the wrong wedding",
    "Most likely to become a reality TV star",
    "Most likely to get lost in their own neighborhood",
    "Most likely to accidentally go viral",
    "Most likely to befriend a stranger at a party",
  ];

  const spicyQuestions = [
    "Most likely to hook up with a coworker",
    "Most likely to have a secret dating profile",
    "Most likely to date someone way out of their league",
    "Most likely to have a wild Vegas story",
    "Most likely to break someone's heart",
    "Most likely to have a secret they'll never tell",
    "Most likely to skinny dip",
    "Most likely to date their ex's friend",
    "Most likely to have the spiciest DMs",
    "Most likely to be a secret freak",
  ];

  return (
    <GuideLayout
      title="150+ Most Likely To Questions for Any Party"
      description="Most Likely To is the perfect voting drinking game. Point at who fits best, they drink for every finger pointed at them. No props needed - just friends and drinks!"
      breadcrumb="Most Likely To Questions"
      primaryGame={{ name: "Most Likely To", slug: "most-likely-to" }}
      relatedGames={[
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Classic confession game" },
        { name: "Truth or Drink", slug: "truth-or-drink", description: "Answer honestly or drink" },
      ]}
    >
      <h2>How to Play Most Likely To</h2>
      <ol>
        <li>Everyone sits in a circle with drinks</li>
        <li>One person reads &quot;Who is most likely to...&quot;</li>
        <li>On the count of 3, everyone points at whoever fits best</li>
        <li>You drink once for each finger pointed at you</li>
        <li>Next person asks a question</li>
      </ol>

      <h2>Funny Most Likely To Questions</h2>
      <div className="not-prose my-6">
        <ul className="space-y-2">
          {funnyQuestions.map((q, i) => (
            <li key={i} className="p-3 bg-dark-800 rounded-lg text-gray-300">Who is most likely to... {q.replace("Most likely to ", "")}</li>
          ))}
        </ul>
      </div>

      <h2>Spicy Most Likely To Questions</h2>
      <div className="not-prose my-6">
        <ul className="space-y-2">
          {spicyQuestions.map((q, i) => (
            <li key={i} className="p-3 bg-dark-800 rounded-lg text-gray-300">Who is most likely to... {q.replace("Most likely to ", "")}</li>
          ))}
        </ul>
      </div>

      <h2>Why Most Likely To Works</h2>
      <ul>
        <li>No props or setup needed</li>
        <li>Works with any group size</li>
        <li>Creates hilarious debates</li>
        <li>Great for learning about each other</li>
      </ul>

      <p>Play <Link href="/games/most-likely-to" className="text-neon-pink hover:underline">Most Likely To</Link> on SipWiki!</p>
    </GuideLayout>
  );
}
