import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "200+ Never Have I Ever Questions (2024) | Clean, Dirty & Spicy",
  description: "The ultimate list of Never Have I Ever questions for parties! Includes clean questions, spicy questions for adults, and drinking game rules. Perfect for any group.",
  keywords: ["never have i ever questions", "never have i ever drinking game", "never have i ever dirty", "never have i ever clean", "never have i ever spicy", "party questions", "drinking game questions"],
  openGraph: { title: "200+ Never Have I Ever Questions", description: "The ultimate question list for Never Have I Ever.", type: "article", url: "https://sipwiki.app/guides/never-have-i-ever-questions" },
  alternates: { canonical: "https://sipwiki.app/guides/never-have-i-ever-questions" },
};

export default function NeverHaveIEverQuestionsPage() {
  const cleanQuestions = [
    "Never have I ever been on TV",
    "Never have I ever broken a bone",
    "Never have I ever traveled outside the country",
    "Never have I ever been skydiving",
    "Never have I ever met a celebrity",
    "Never have I ever dyed my hair",
    "Never have I ever gotten a tattoo",
    "Never have I ever been in a wedding party",
    "Never have I ever pulled an all-nighter",
    "Never have I ever eaten sushi",
  ];

  const funnyQuestions = [
    "Never have I ever stalked an ex on social media",
    "Never have I ever pretended to laugh at a joke I didn't get",
    "Never have I ever blamed a fart on someone else",
    "Never have I ever lied about my age",
    "Never have I ever eaten food off the floor",
    "Never have I ever sung in the shower",
    "Never have I ever talked to myself",
    "Never have I ever worn the same underwear two days in a row",
    "Never have I ever peed in a pool",
    "Never have I ever regifted a present",
  ];

  const spicyQuestions = [
    "Never have I ever had a one-night stand",
    "Never have I ever kissed someone of the same gender",
    "Never have I ever sent a risky text to the wrong person",
    "Never have I ever had a crush on a friend's partner",
    "Never have I ever been caught in the act",
    "Never have I ever lied to get out of a date",
    "Never have I ever ghosted someone",
    "Never have I ever slid into someone's DMs",
    "Never have I ever dated two people at once",
    "Never have I ever had a friends with benefits situation",
  ];

  return (
    <GuideLayout
      title="200+ Never Have I Ever Questions for Every Occasion"
      description="Never Have I Ever is the ultimate party game for learning surprising things about your friends. Whether you want clean questions for a casual hangout or spicy questions for adults, we've got you covered."
      breadcrumb="Never Have I Ever Questions"
      primaryGame={{ name: "Never Have I Ever", slug: "never-have-i-ever" }}
      relatedGames={[
        { name: "Truth or Drink", slug: "truth-or-drink", description: "Answer or drink" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Vote on who fits" },
      ]}
    >
      <h2>How to Play Never Have I Ever</h2>
      <ol>
        <li>Everyone holds up 5-10 fingers</li>
        <li>One person says &quot;Never have I ever...&quot; followed by something</li>
        <li>Anyone who HAS done that thing drinks and puts a finger down</li>
        <li>First person to run out of fingers loses</li>
      </ol>

      <h2>Clean Never Have I Ever Questions</h2>
      <p>Safe for any crowd - family, work parties, or casual hangouts.</p>
      <div className="not-prose my-6">
        <ul className="space-y-2">
          {cleanQuestions.map((q, i) => (
            <li key={i} className="p-3 bg-dark-800 rounded-lg text-gray-300">{q}</li>
          ))}
        </ul>
      </div>

      <h2>Funny Never Have I Ever Questions</h2>
      <p>Guaranteed to get laughs and confessions.</p>
      <div className="not-prose my-6">
        <ul className="space-y-2">
          {funnyQuestions.map((q, i) => (
            <li key={i} className="p-3 bg-dark-800 rounded-lg text-gray-300">{q}</li>
          ))}
        </ul>
      </div>

      <h2>Spicy Never Have I Ever Questions</h2>
      <p>For adult parties where things can get a little wild.</p>
      <div className="not-prose my-6">
        <ul className="space-y-2">
          {spicyQuestions.map((q, i) => (
            <li key={i} className="p-3 bg-dark-800 rounded-lg text-gray-300">{q}</li>
          ))}
        </ul>
      </div>

      <h2>Tips for Great Questions</h2>
      <ul>
        <li>Know your audience - adjust spiciness accordingly</li>
        <li>Mix general and specific questions</li>
        <li>Follow up on surprising revelations</li>
        <li>Keep it fun, not interrogative</li>
      </ul>

      <p>Play our <Link href="/game/never-have-i-ever" className="text-neon-pink hover:underline">Never Have I Ever game</Link> with built-in questions!</p>
    </GuideLayout>
  );
}
