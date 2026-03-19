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
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you play Never Have I Ever drinking game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Everyone holds up 5-10 fingers. One person says 'Never have I ever...' followed by something. Anyone who HAS done that thing drinks and puts a finger down. First person to run out of fingers loses. The game reveals secrets and gets more interesting as it goes!"
        }
      },
      {
        "@type": "Question",
        "name": "What are good Never Have I Ever questions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Good questions reveal interesting things without being too invasive. Examples: Never have I ever traveled outside the country, Never have I ever gotten a tattoo, Never have I ever been on TV. For adults, spicier questions like 'Never have I ever had a one-night stand' work well."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between clean and dirty Never Have I Ever?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clean questions are safe for any group (work, family) - things like travel, hobbies, and life experiences. Dirty/spicy questions are for adult parties and involve dating, relationships, and more personal topics. Choose based on your group!"
        }
      },
      {
        "@type": "Question",
        "name": "How many fingers do you start with in Never Have I Ever?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditionally you start with 10 fingers (both hands up). For shorter games, start with 5 fingers. When you've done something mentioned, put a finger down and drink. First person with no fingers left loses!"
        }
      }
    ]
  };

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

  const travelQuestions = [
    "Never have I ever missed a flight",
    "Never have I ever lost my luggage",
    "Never have I ever slept in an airport",
    "Never have I ever gotten a sunburn on vacation",
    "Never have I ever taken a road trip longer than 8 hours",
    "Never have I ever gone camping",
    "Never have I ever stayed in a hostel",
    "Never have I ever gotten lost in a new city",
    "Never have I ever taken a solo trip",
    "Never have I ever tried street food abroad",
  ];

  const friendsQuestions = [
    "Never have I ever crashed on a friend's couch",
    "Never have I ever borrowed clothes from a friend",
    "Never have I ever kept a secret from my best friend",
    "Never have I ever been the third wheel",
    "Never have I ever been late to a friend hangout",
    "Never have I ever forgotten a friend's birthday",
    "Never have I ever been part of a group chat drama",
    "Never have I ever hosted a surprise party",
    "Never have I ever pulled an all-nighter with friends",
    "Never have I ever gotten matching outfits with someone",
  ];

  const workSafeQuestions = [
    "Never have I ever sent an email to the wrong person",
    "Never have I ever been late to a meeting",
    "Never have I ever taken a call in pajamas",
    "Never have I ever fallen asleep during a class",
    "Never have I ever forgotten my homework",
    "Never have I ever used a fake excuse to skip a class",
    "Never have I ever spilled coffee on myself at work",
    "Never have I ever used a sick day for a trip",
    "Never have I ever been on a work happy hour",
    "Never have I ever worked from a coffee shop",
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
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

      <h2>House Rules and Variations</h2>
      <p>
        If you want the game to move faster, start with 5 fingers and keep questions short.
        For bigger groups, go in a circle so everyone gets a turn before repeating. You can
        also add a &quot;hot seat&quot; round where one person answers three questions in a row.
      </p>
      <ul>
        <li><strong>Anonymous mode:</strong> Write questions on paper and draw them from a bowl.</li>
        <li><strong>Speed round:</strong> 30 seconds per player, no repeats.</li>
        <li><strong>Group vote:</strong> If most people have done it, the questioner drinks.</li>
      </ul>

      <h2>How to Pick Great Questions</h2>
      <p>
        The best prompts reveal surprising stories without making anyone uncomfortable. Mix
        safe questions with a few bolder ones, and read the room as you go. If you want to
        keep it casual, stick to travel, food, and funny habits. For adult nights, add a
        spicy section but make it opt-in.
      </p>
      <p>
        Hosting a themed night? Pair this with our{" "}
        <Link href="/guides/most-likely-to-questions" className="text-neon-pink hover:underline">
          Most Likely To questions
        </Link>{" "}
        or the{" "}
        <Link href="/guides/truth-or-drink-rules" className="text-neon-pink hover:underline">
          Truth or Drink rules
        </Link>{" "}
        for a full game rotation.
      </p>

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

      <h2>Travel & Adventure Questions</h2>
      <p>Great for groups that love trips, stories, and big experiences.</p>
      <div className="not-prose my-6">
        <ul className="space-y-2">
          {travelQuestions.map((q, i) => (
            <li key={i} className="p-3 bg-dark-800 rounded-lg text-gray-300">{q}</li>
          ))}
        </ul>
      </div>

      <h2>Friends & Group Dynamics Questions</h2>
      <p>Perfect for guys night, girls night, or any close group.</p>
      <div className="not-prose my-6">
        <ul className="space-y-2">
          {friendsQuestions.map((q, i) => (
            <li key={i} className="p-3 bg-dark-800 rounded-lg text-gray-300">{q}</li>
          ))}
        </ul>
      </div>

      <h2>Work-Safe Never Have I Ever Questions</h2>
      <p>These keep it light for office parties, classrooms, or mixed crowds.</p>
      <div className="not-prose my-6">
        <ul className="space-y-2">
          {workSafeQuestions.map((q, i) => (
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

      <p>
        Want a full night plan? Start with Never Have I Ever, then move into a competitive game
        like <Link href="/games/beer-pong" className="text-neon-pink hover:underline">Beer Pong</Link> or
        a quick mixer like <Link href="/games/most-likely-to" className="text-neon-pink hover:underline">Most Likely To</Link>.
        For hosting tips, check out{" "}
        <Link href="/guides/guys-night-drinking-games" className="text-neon-pink hover:underline">
          Guys Night Drinking Games
        </Link>{" "}
        and our{" "}
        <Link href="/blog/party-tips/house-party-essentials" className="text-neon-pink hover:underline">
          house party essentials guide
        </Link>.
      </p>
      <p>
        Play our{" "}
        <Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">
          Never Have I Ever game
        </Link>{" "}
        with built-in questions and live scoring!
      </p>
      </GuideLayout>
    </>
  );
}
