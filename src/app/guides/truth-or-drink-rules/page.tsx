import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Truth or Drink Rules: Question Drinking Game (2025 Guide)",
  description: "Truth or Drink rules explained! Answer the question honestly OR take a drink to skip it. Best questions from mild to wild. Complete guide with tips.",
  keywords: [
    "truth or drink rules",
    "truth or drink game",
    "question drinking game",
    "truth drinking game",
    "couples drinking game",
    "party question games",
  ],
  openGraph: {
    title: "Truth or Drink Drinking Game Rules",
    description: "Answer honestly or drink to skip.",
    type: "article",
    url: "https://sipwiki.app/guides/truth-or-drink-rules",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/truth-or-drink-rules",
  },
};

export default function TruthOrDrinkRulesPage() {
  return (
    <GuideLayout
      title="Truth or Drink: The Question Drinking Game"
      description="Answer the question honestly, or take a drink to skip it. No dares, no middle ground. Either reveal your secrets or drink to keep them hidden."
      breadcrumb="Truth or Drink Rules"
      primaryGame={{ name: "Truth or Drink", slug: "truth-or-drink" }}
      relatedGames={[
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Confession game" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Voting game" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card-based game" },
      ]}
    >
      <QuickAnswer
        question="How do you play Truth or Drink?"
        answer="One player asks another a personal question. The target must either answer honestly OR take a drink to skip the question. Once you drink, the subject is dropped - no badgering. Rotate who asks. Use pre-made question cards or make up your own!"
        tips={[
          "Answer honestly OR drink to skip",
          "Once someone drinks, drop it",
          "Start mild, get personal later",
          "The stories are the best part"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li>2+ players (4-8 is ideal)</li>
        <li>Drinks for everyone</li>
        <li>Question cards (optional - you can make up questions)</li>
        <li>Comfortable seating</li>
      </ul>

      <h2>Basic Rules</h2>
      <ol>
        <li>Sit in a circle with drinks ready</li>
        <li>One person asks another player a question</li>
        <li>That player must either:
          <ul>
            <li><strong>Answer truthfully</strong> and fully, OR</li>
            <li><strong>Take a drink</strong> to skip the question</li>
          </ul>
        </li>
        <li>If they drink, the question is DROPPED - no follow-ups</li>
        <li>Rotate who asks the questions</li>
      </ol>

      <h2>The Golden Rule</h2>
      <p className="text-lg font-bold text-neon-pink">
        Once someone drinks to skip, the subject is completely dropped. No guessing, no
        "come on, just tell us," nothing. Respect the drink.
      </p>

      <h2>Mild Starter Questions</h2>
      <ul>
        <li>"What's your guilty pleasure TV show?"</li>
        <li>"What's the most embarrassing song on your playlist?"</li>
        <li>"Have you ever lied to get out of plans?"</li>
        <li>"What's the longest you've gone without showering?"</li>
        <li>"What's a small lie you tell often?"</li>
      </ul>

      <h2>Medium Questions</h2>
      <ul>
        <li>"What's the biggest secret you've kept from your parents?"</li>
        <li>"Have you ever cheated on a test or at work?"</li>
        <li>"Who was your worst kiss?"</li>
        <li>"What's the pettiest reason you've ended a relationship?"</li>
        <li>"What's the most embarrassing thing you've done drunk?"</li>
      </ul>

      <h2>Spicy Questions</h2>
      <ul>
        <li>"Who in this room have you thought about romantically?"</li>
        <li>"What's your most embarrassing hookup story?"</li>
        <li>"Have you ever developed feelings for a friend's partner?"</li>
        <li>"What's something you've never told anyone?"</li>
        <li>"What's the worst thing you've done and gotten away with?"</li>
      </ul>

      <h2>Couples Edition</h2>
      <ul>
        <li>"What's something that annoys you about me?"</li>
        <li>"What's a white lie you've told me?"</li>
        <li>"What's one thing I do that you wish I'd stop?"</li>
        <li>"Have you ever been attracted to one of my friends?"</li>
        <li>"What's a deal-breaker for you that I don't know about?"</li>
      </ul>

      <h2>Setting Boundaries</h2>
      <p>Before playing, agree on:</p>
      <ul>
        <li>Off-limits topics (family trauma, certain relationships, etc.)</li>
        <li>How personal questions can get</li>
        <li>Whether exes/current relationships are fair game</li>
        <li>The right to "safe word" out of a topic entirely</li>
      </ul>

      <h2>Tips for Great Questions</h2>
      <ul>
        <li>Ask things you're genuinely curious about</li>
        <li>Match question intensity to the mood</li>
        <li>Follow up on good answers (with new questions next round)</li>
        <li>Balance between embarrassing and insightful</li>
      </ul>

      <h2>Variations</h2>

      <h3>Double Down</h3>
      <ul>
        <li>Drink once = skip the question</li>
        <li>Drink twice = skip AND no follow-ups ever</li>
      </ul>

      <h3>Shot Version</h3>
      <ul>
        <li>Drinks are shots instead of sips</li>
        <li>Makes skipping more costly</li>
        <li>Be careful with this one!</li>
      </ul>

      <h3>Group Answer</h3>
      <ul>
        <li>Ask the whole group a question</li>
        <li>Everyone either answers or drinks</li>
        <li>Compare answers for fun</li>
      </ul>

      <h3>Written Questions</h3>
      <ul>
        <li>Everyone writes anonymous questions</li>
        <li>Questions drawn randomly</li>
        <li>Often get spicier this way</li>
      </ul>

      <h2>Best Occasions</h2>
      <ul>
        <li>Double dates</li>
        <li>Couples' nights</li>
        <li>Close friend hangouts</li>
        <li>Bachelorette/bachelor parties</li>
        <li>Getting to know new partners</li>
      </ul>

      <h2>Why Truth or Drink Works</h2>
      <ul>
        <li>Simple binary choice</li>
        <li>Drinking to skip creates mystery</li>
        <li>Builds intimacy through vulnerability</li>
        <li>Works with any group size</li>
        <li>No equipment required</li>
      </ul>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Pro Tip:</strong> Questions naturally escalate as people get comfortable (and
          tipsy). Start mild and let it build. The best revelations come later in the game.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Play Truth or Drink on SipWiki</h3>
        <Link
          href="/game/truth-or-drink"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Truth or Drink Game Page →
        </Link>
      </div>
    </GuideLayout>
  );
}
