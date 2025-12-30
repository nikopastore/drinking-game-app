import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buffalo Drinking Game Rules: The All-Night Hand Rule (2025 Guide)",
  description: "Buffalo drinking game rules explained! The simple but brutal rule: drink with your non-dominant hand only. Get caught? Finish your drink. Complete rules and tips.",
  keywords: [
    "buffalo rules",
    "buffalo drinking game",
    "non-dominant hand rule",
    "all night drinking game",
    "simple drinking games",
    "party rules",
  ],
  openGraph: {
    title: "Buffalo Drinking Game Rules",
    description: "The all-night hand rule that changes everything.",
    type: "article",
    url: "https://sipwiki.app/guides/buffalo-rules",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/buffalo-rules",
  },
};

export default function BuffaloRulesPage() {
  return (
    <GuideLayout
      title="Buffalo: The All-Night Drinking Rule"
      description="Buffalo isn't a game you play - it's a rule you LIVE. Once agreed upon, you must drink with your non-dominant hand for the entire night. Get caught using the wrong hand? Finish your drink."
      breadcrumb="Buffalo Rules"
      primaryGame={{ name: "Buffalo", slug: "buffalo" }}
      relatedGames={[
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Another social game" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card-based rules" },
        { name: "Medusa", slug: "medusa", description: "Quick round game" },
      ]}
    >
      <QuickAnswer
        question="How do you play Buffalo?"
        answer="Everyone agrees to drink with their non-dominant hand only. Righties use left, lefties use right. If someone catches you drinking with the wrong hand and yells 'BUFFALO!', you must immediately finish your entire drink. The rule stays active all night (or forever, for some friend groups)."
        tips={[
          "Righties must drink with their LEFT hand",
          "Lefties must drink with their RIGHT hand",
          "Getting caught = finish your entire drink",
          "Rule applies all night, even during other games"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li>No equipment required</li>
        <li>Just drinks and participants</li>
        <li>Knowledge of everyone's dominant hand</li>
      </ul>

      <h2>The Core Rule</h2>
      <p>
        At the start of the night, everyone agrees to play Buffalo. From that moment on:
      </p>
      <ul>
        <li><strong>Righties:</strong> Must hold and drink with their LEFT hand only</li>
        <li><strong>Lefties:</strong> Must hold and drink with their RIGHT hand only</li>
        <li><strong>Ambidextrous:</strong> Pick one and stick with it</li>
      </ul>

      <h2>How to Call Someone Out</h2>
      <ol>
        <li>See someone drinking with their dominant hand</li>
        <li>Yell "BUFFALO!" while pointing at them</li>
        <li>They must immediately chug their entire drink</li>
        <li>Game continues - they refill and keep playing</li>
      </ol>

      <h2>Important Rules</h2>
      <ul>
        <li><strong>Applies to alcoholic drinks only:</strong> Water, soda, etc. are typically exempt</li>
        <li><strong>False calls:</strong> If you call Buffalo incorrectly, YOU drink instead</li>
        <li><strong>Always on:</strong> The rule applies even during other games, bathroom trips, everywhere</li>
        <li><strong>Holding vs drinking:</strong> Most groups only enforce it when actively sipping, not just holding</li>
      </ul>

      <h2>When Does Buffalo End?</h2>
      <ul>
        <li><strong>Night mode:</strong> Buffalo ends when the party ends</li>
        <li><strong>Lifetime mode:</strong> Some friend groups play Buffalo FOREVER - even meeting years later</li>
        <li><strong>Event-specific:</strong> Some groups only play at certain events</li>
      </ul>

      <h2>Strategy Tips</h2>
      <ul>
        <li>Immediately switch your drink to your off-hand when it's poured</li>
        <li>Set your drink down when not actively sipping</li>
        <li>Watch others constantly - calling Buffalo is half the fun</li>
        <li>Be extra careful late night when reactions slow down</li>
        <li>After getting Buffalo'd, don't immediately get a full drink</li>
      </ul>

      <h2>Why Buffalo Works</h2>
      <p>
        Buffalo creates constant tension throughout the night. Even when you're not actively
        playing other games, Buffalo lurks in the background. The panic when you realize
        you grabbed your drink wrong, the triumph of catching a friend - it adds a layer
        of excitement to the entire party.
      </p>

      <h2>Common Variations</h2>
      <ul>
        <li><strong>Reverse Buffalo:</strong> Must use dominant hand only</li>
        <li><strong>Half Buffalo:</strong> Getting caught = drink half instead of full</li>
        <li><strong>Shot Buffalo:</strong> Getting caught = take a shot instead</li>
        <li><strong>Double Buffalo:</strong> Catch someone twice in a row = they drink double</li>
      </ul>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Safety Note:</strong> Finishing an entire drink can be intense. If someone's
          had too much, consider a mercy rule or switch to "half drink" punishment.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Play Buffalo on SipWiki</h3>
        <Link
          href="/game/buffalo"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Buffalo Game Page →
        </Link>
      </div>
    </GuideLayout>
  );
}
