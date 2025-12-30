import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medusa Drinking Game Rules: Eye Contact Game (2025 Guide)",
  description: "Medusa drinking game rules! Look down, look up, lock eyes with someone = both drink! The simple, hilarious party game. Complete rules and variations.",
  keywords: [
    "medusa rules",
    "medusa drinking game",
    "eye contact drinking game",
    "look up drinking game",
    "quick party games",
    "no props drinking games",
  ],
  openGraph: {
    title: "Medusa Drinking Game Rules",
    description: "The eye contact drinking game.",
    type: "article",
    url: "https://sipwiki.app/guides/medusa-rules",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/medusa-rules",
  },
};

export default function MedusaRulesPage() {
  return (
    <GuideLayout
      title="Medusa: The Eye Contact Drinking Game"
      description="Everyone looks down, then up on the count. If you lock eyes with someone - you're both turned to stone! Both drink. Quick, silly, and perfect for groups."
      breadcrumb="Medusa Rules"
      primaryGame={{ name: "Medusa", slug: "medusa" }}
      relatedGames={[
        { name: "Most Likely To", slug: "most-likely-to", description: "No props needed" },
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Social game" },
        { name: "Buffalo", slug: "buffalo", description: "Ongoing rule game" },
      ]}
    >
      <QuickAnswer
        question="How do you play Medusa?"
        answer="Stand in a circle. Everyone looks DOWN at the floor. On '3-2-1-MEDUSA!' everyone looks UP and stares at ONE person. If two people lock eyes, they both shout 'MEDUSA!' and drink. If you're looking at someone who isn't looking back, you're safe. Repeat for multiple rounds."
        tips={[
          "Everyone looks down at floor",
          "On cue, everyone looks up at someone",
          "Lock eyes = both drink",
          "No eye contact = safe"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li>4+ players (more is better!)</li>
        <li>Drinks for everyone</li>
        <li>That's it - no other equipment</li>
      </ul>

      <h2>Setup</h2>
      <ol>
        <li>Form a circle standing or sitting</li>
        <li>Everyone should be able to see everyone else</li>
        <li>Have drinks ready in hand or nearby</li>
        <li>Choose someone to lead the count</li>
      </ol>

      <h2>How to Play</h2>
      <ol>
        <li>Everyone looks down at the floor or table</li>
        <li>Leader counts: "3... 2... 1... MEDUSA!"</li>
        <li>On "MEDUSA," everyone immediately looks UP</li>
        <li>You must stare directly at ONE person's face</li>
        <li>You cannot change who you're looking at!</li>
      </ol>

      <h2>What Happens Next</h2>

      <h3>If You Lock Eyes with Someone</h3>
      <ul>
        <li>You both shout "MEDUSA!"</li>
        <li>You've both been "turned to stone"</li>
        <li>Both players take a drink</li>
        <li>Multiple pairs can lock eyes in one round - all drink</li>
      </ul>

      <h3>If You Don't Lock Eyes</h3>
      <ul>
        <li>You looked at someone who was looking elsewhere</li>
        <li>You're safe! No drink this round</li>
      </ul>

      <h2>Round Flow</h2>
      <ol>
        <li>After drinking, everyone resets</li>
        <li>Look down again</li>
        <li>Leader counts again</li>
        <li>Play 5-10 rounds typically</li>
      </ol>

      <h2>Why It Works</h2>
      <ul>
        <li>Pure luck - no skill or strategy</li>
        <li>The sudden chaos of people yelling "MEDUSA!" is hilarious</li>
        <li>Fast rounds keep energy high</li>
        <li>Great icebreaker for new groups</li>
      </ul>

      <h2>Variations</h2>

      <h3>Shot Version</h3>
      <ul>
        <li>Place shot glasses in the center</li>
        <li>Locked-eyes pairs take shots from center</li>
        <li>Game ends when shots are gone</li>
      </ul>

      <h3>Elimination</h3>
      <ul>
        <li>Lock eyes = you're out</li>
        <li>Last 2 people standing win</li>
        <li>Eliminated players become spectators</li>
      </ul>

      <h3>Point System</h3>
      <ul>
        <li>Survive 3 rounds without locking = give a drink</li>
        <li>Lock eyes 3 times = finish your drink</li>
      </ul>

      <h3>Speed Medusa</h3>
      <ul>
        <li>No counting - just sudden "MEDUSA!" calls</li>
        <li>Leader yells at random intervals</li>
        <li>Keeps everyone on edge</li>
      </ul>

      <h2>Tips for Maximum Fun</h2>
      <ul>
        <li>Play with 6-12 people for best odds</li>
        <li>Build tension with slower counts</li>
        <li>Encourage dramatic "MEDUSA!" shouts</li>
        <li>5-10 rounds is perfect before moving on</li>
        <li>Works great as a warmup game</li>
      </ul>

      <h2>Common Questions</h2>

      <h3>Can I close my eyes?</h3>
      <p>No! That's cheating. Eyes must be open and looking at someone.</p>

      <h3>What if I look at the wall/ceiling?</h3>
      <p>You must look at a person. Avoiding the game = penalty drink.</p>

      <h3>What if 3+ people all look at each other?</h3>
      <p>Only mutual pairs count. If A→B and B→C, only B drinks (with both A and C if they were also looking at B).</p>

      <h2>Best Occasions for Medusa</h2>
      <ul>
        <li>Party warmup/icebreaker</li>
        <li>Transition between longer games</li>
        <li>When you need a quick energy boost</li>
        <li>Groups with mixed experience levels</li>
        <li>Any time you need laughs quickly</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Play Medusa on SipWiki</h3>
        <Link
          href="/game/medusa"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Medusa Game Page →
        </Link>
      </div>
    </GuideLayout>
  );
}
