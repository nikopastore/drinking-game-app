import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Never Have I Ever Rules: Classic Confession Drinking Game (2025)",
  description: "Never Have I Ever drinking game rules! The classic confession game where you drink if you've done it. Best questions, variations, and tips for a great game.",
  keywords: [
    "never have i ever rules",
    "never have i ever drinking game",
    "confession drinking game",
    "10 fingers game",
    "party icebreaker games",
    "truth drinking games",
  ],
  openGraph: {
    title: "Never Have I Ever Drinking Game Rules",
    description: "The classic confession drinking game.",
    type: "article",
    url: "https://sipwiki.app/guides/never-have-i-ever-rules",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/never-have-i-ever-rules",
  },
};

export default function NeverHaveIEverRulesPage() {
  return (
    <GuideLayout
      title="Never Have I Ever: The Classic Confession Game"
      description="The ultimate icebreaker turned drinking game. Share what you HAVEN'T done - anyone who HAS done it drinks. Secrets come out. Stories are told. Bonds are formed."
      breadcrumb="Never Have I Ever Rules"
      primaryGame={{ name: "Never Have I Ever", slug: "never-have-i-ever" }}
      relatedGames={[
        { name: "Truth or Drink", slug: "truth-or-drink", description: "Truth-based game" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Voting game" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card-based game" },
      ]}
    >
      <QuickAnswer
        question="How do you play Never Have I Ever?"
        answer="Take turns saying 'Never have I ever...' followed by something you haven't done. Anyone who HAS done that thing takes a drink. Optional: Hold up 10 fingers and put one down each time you drink - first to lose all fingers 'wins' (or takes a penalty drink)."
        tips={[
          "Say something you HAVEN'T done",
          "Anyone who HAS done it drinks",
          "Start mild, escalate gradually",
          "The stories after drinking are the best part"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li>3+ players (5-10 is ideal)</li>
        <li>Drinks for everyone</li>
        <li>Comfortable seating in a circle</li>
        <li>Open minds and a sense of humor</li>
      </ul>

      <h2>Basic Rules</h2>
      <ol>
        <li>Sit in a circle with drinks</li>
        <li>First player says "Never have I ever..." and names something they haven't done</li>
        <li>Anyone who HAS done that thing takes a drink</li>
        <li>Next player clockwise makes their statement</li>
        <li>Continue around the circle</li>
      </ol>

      <h2>Finger Version (Ten Fingers)</h2>
      <ol>
        <li>Everyone holds up 10 fingers</li>
        <li>Each time you drink, put down one finger</li>
        <li>First person to lose all 10 fingers = most "experienced"</li>
        <li>They take a penalty drink or shot</li>
      </ol>

      <h2>Great Starter Questions</h2>
      <ul>
        <li>"Never have I ever been on a plane"</li>
        <li>"Never have I ever broken a bone"</li>
        <li>"Never have I ever pulled an all-nighter"</li>
        <li>"Never have I ever been to a concert"</li>
        <li>"Never have I ever gotten a speeding ticket"</li>
      </ul>

      <h2>Spicier Questions</h2>
      <ul>
        <li>"Never have I ever texted an ex while drunk"</li>
        <li>"Never have I ever lied on a resume"</li>
        <li>"Never have I ever been kicked out of a bar"</li>
        <li>"Never have I ever ghosted someone"</li>
        <li>"Never have I ever had a one-night stand"</li>
      </ul>

      <h2>Adventurous Questions</h2>
      <ul>
        <li>"Never have I ever skinny dipped"</li>
        <li>"Never have I ever been arrested"</li>
        <li>"Never have I ever cheated on a test"</li>
        <li>"Never have I ever stolen something"</li>
        <li>"Never have I ever used a fake ID"</li>
      </ul>

      <h2>Important Etiquette</h2>
      <ul>
        <li><strong>Don't target one person:</strong> Vary your questions</li>
        <li><strong>Respect boundaries:</strong> Some topics are off-limits</li>
        <li><strong>Ask for stories:</strong> The follow-up is often the best part!</li>
        <li><strong>Be honest:</strong> Lying defeats the purpose</li>
        <li><strong>Escalate gradually:</strong> Don't start with heavy topics</li>
      </ul>

      <h2>The Nobody Drinks Rule</h2>
      <p>If you make a statement and NO ONE drinks:</p>
      <ul>
        <li>Some groups: You drink instead (encourages better questions)</li>
        <li>Some groups: Nothing happens (keeps it pure)</li>
        <li>Decide beforehand which rule you'll use</li>
      </ul>

      <h2>Setting Boundaries</h2>
      <p>Before starting, consider establishing off-limits topics:</p>
      <ul>
        <li>Family trauma</li>
        <li>Mental health struggles</li>
        <li>Certain relationship topics</li>
        <li>Whatever makes your group comfortable</li>
      </ul>

      <h2>Strategy Tips</h2>
      <ul>
        <li>Start broad, get specific as the game goes on</li>
        <li>Use questions you're genuinely curious about</li>
        <li>Mix funny and revealing questions</li>
        <li>Leave room for storytelling</li>
      </ul>

      <h2>Variations</h2>

      <h3>Pointed Version</h3>
      <ul>
        <li>If only ONE person drinks, they must share the story</li>
        <li>Creates more personal moments</li>
      </ul>

      <h3>Categories</h3>
      <ul>
        <li>Each round has a theme: travel, relationships, work, etc.</li>
        <li>Keeps questions focused</li>
      </ul>

      <h3>Truth or Drink Hybrid</h3>
      <ul>
        <li>After drinking, you can choose to tell the story OR drink again</li>
        <li>Second drink = keep it secret</li>
      </ul>

      <h2>Best Occasions</h2>
      <ul>
        <li>Getting to know new people</li>
        <li>Reuniting with old friends</li>
        <li>Bachelorette/bachelor parties</li>
        <li>College dorm hangouts</li>
        <li>Camping trips</li>
      </ul>

      <h2>Why Never Have I Ever Works</h2>
      <ul>
        <li>Everyone participates equally</li>
        <li>Reveals unexpected things about friends</li>
        <li>Creates inside jokes and bonding</li>
        <li>Naturally escalates as comfort grows</li>
        <li>No equipment needed</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Play Never Have I Ever on SipWiki</h3>
        <Link
          href="/game/never-have-i-ever"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Never Have I Ever Game Page →
        </Link>
      </div>
    </GuideLayout>
  );
}
