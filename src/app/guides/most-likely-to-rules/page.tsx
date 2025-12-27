import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Most Likely To Rules: Voting Drinking Game (2025 Guide)",
  description: "Most Likely To drinking game rules! Point at who's most likely to do something - get the most votes and drink! Best questions and tips for a great game.",
  keywords: [
    "most likely to rules",
    "most likely to drinking game",
    "voting drinking game",
    "pointing game",
    "party games no props",
    "group drinking games",
  ],
  openGraph: {
    title: "Most Likely To Drinking Game Rules",
    description: "The voting and pointing drinking game.",
    type: "article",
    url: "https://sipwiki.app/guides/most-likely-to-rules",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/most-likely-to-rules",
  },
};

export default function MostLikelyToRulesPage() {
  return (
    <GuideLayout
      title="Most Likely To: The Voting Drinking Game"
      description="Who's most likely to become famous? To get arrested? Everyone points on 3 - whoever gets the most fingers pointed at them drinks! Learn what your friends really think."
      breadcrumb="Most Likely To Rules"
      primaryGame={{ name: "Most Likely To", slug: "most-likely-to" }}
      relatedGames={[
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Confession game" },
        { name: "Truth or Drink", slug: "truth-or-drink", description: "Question game" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card-based game" },
      ]}
    >
      <QuickAnswer
        question="How do you play Most Likely To?"
        answer="Someone poses a 'Most likely to...' scenario. On 'three,' everyone points at the person they think fits best. Whoever gets the most fingers pointed at them drinks - one sip per vote, or just a big gulp. Ties mean both drink. Then rotate who asks the next question."
        tips={[
          "Pose a 'Most likely to...' question",
          "Everyone points at once on the count",
          "Most votes = drink",
          "Ties = both drink"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li>3+ players (more is better!)</li>
        <li>Drinks for everyone</li>
        <li>Comfortable seating where everyone can see each other</li>
      </ul>

      <h2>Basic Rules</h2>
      <ol>
        <li>Sit in a circle or group</li>
        <li>One person asks "Who's most likely to..." and completes the scenario</li>
        <li>On the count of "1, 2, 3" everyone points at who they think fits best</li>
        <li>No pointing at yourself!</li>
        <li>Count the fingers pointed at each person</li>
        <li>Person with most votes drinks (1 sip per vote, or just one big drink)</li>
        <li>Rotate to next person for the next question</li>
      </ol>

      <h2>Handling Ties</h2>
      <ul>
        <li><strong>Both drink:</strong> All tied players drink equally</li>
        <li><strong>Runoff:</strong> Re-vote with only tied players as options</li>
        <li><strong>All drink:</strong> If it's a 3+ way tie, everyone takes a sip</li>
      </ul>

      <h2>Great Starter Questions</h2>
      <ul>
        <li>"Most likely to become a millionaire"</li>
        <li>"Most likely to be late to their own wedding"</li>
        <li>"Most likely to survive on a desert island"</li>
        <li>"Most likely to become famous"</li>
        <li>"Most likely to forget someone's birthday"</li>
      </ul>

      <h2>Funny Questions</h2>
      <ul>
        <li>"Most likely to laugh at an inappropriate time"</li>
        <li>"Most likely to fall asleep first at a party"</li>
        <li>"Most likely to eat the last slice of pizza without asking"</li>
        <li>"Most likely to trip over nothing"</li>
        <li>"Most likely to cry during a movie"</li>
      </ul>

      <h2>Spicy Questions</h2>
      <ul>
        <li>"Most likely to text their ex tonight"</li>
        <li>"Most likely to get arrested"</li>
        <li>"Most likely to have a secret Instagram"</li>
        <li>"Most likely to lose their passport traveling"</li>
        <li>"Most likely to ghost someone"</li>
      </ul>

      <h2>Friend-Specific Questions</h2>
      <ul>
        <li>"Most likely to win a hot dog eating contest"</li>
        <li>"Most likely to start a cult (accidentally)"</li>
        <li>"Most likely to get into a fight at a bar"</li>
        <li>"Most likely to become a reality TV star"</li>
        <li>"Most likely to marry a celebrity"</li>
      </ul>

      <h2>Tips for Good Questions</h2>
      <ul>
        <li>Mix flattering and funny scenarios</li>
        <li>Avoid genuinely hurtful topics</li>
        <li>Reference inside jokes when playing with close friends</li>
        <li>Keep it playful, not mean-spirited</li>
        <li>Allow stories to be told after voting</li>
      </ul>

      <h2>Variations</h2>

      <h3>Drink Per Vote</h3>
      <ul>
        <li>Instead of one drink, take one sip per finger pointed</li>
        <li>Get 7 votes? Take 7 sips</li>
        <li>Makes unanimous votes brutal!</li>
      </ul>

      <h3>Secret Vote</h3>
      <ul>
        <li>Everyone closes eyes and points</li>
        <li>One person peeks and announces results</li>
        <li>Prevents peer pressure voting</li>
      </ul>

      <h3>Story Time</h3>
      <ul>
        <li>The "winner" must share a related story</li>
        <li>Why do people think that about you?</li>
        <li>Creates more conversation</li>
      </ul>

      <h3>Challenge Mode</h3>
      <ul>
        <li>The "winner" can challenge the vote</li>
        <li>Tell a story proving you DON'T fit</li>
        <li>If group is convinced, they all drink instead</li>
      </ul>

      <h2>Best Occasions</h2>
      <ul>
        <li>Friend reunions</li>
        <li>Parties with mixed friend groups</li>
        <li>Getting to know new people</li>
        <li>Pre-games before going out</li>
        <li>House parties</li>
      </ul>

      <h2>Etiquette</h2>
      <ul>
        <li>Keep it fun - if someone's getting every vote, ease up</li>
        <li>Avoid targeting the same person repeatedly</li>
        <li>It's okay to abstain from mean questions</li>
        <li>Best part is the discussion after!</li>
      </ul>

      <h2>Why Most Likely To Works</h2>
      <ul>
        <li>Reveals how friends perceive each other</li>
        <li>Creates hilarious group moments</li>
        <li>No equipment needed</li>
        <li>Everyone participates every round</li>
        <li>Naturally leads to storytelling</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Play Most Likely To on SipWiki</h3>
        <Link
          href="/game/most-likely-to"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Most Likely To Game Page →
        </Link>
      </div>
    </GuideLayout>
  );
}
