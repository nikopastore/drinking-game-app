import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cheers to the Governor Rules: The Rule-Stacking Counting Game (2025)",
  description: "Cheers to the Governor drinking game rules! Count to 21, add rules that stack up, and drink when you mess up. Complete guide with rule ideas and tips.",
  keywords: [
    "cheers to the governor rules",
    "cheers to the governor drinking game",
    "21 drinking game",
    "counting drinking game",
    "rule stacking game",
    "party games no props",
  ],
  openGraph: {
    title: "Cheers to the Governor Rules",
    description: "The counting game where rules stack into chaos.",
    type: "article",
    url: "https://sipwiki.app/guides/cheers-to-the-governor-rules",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/cheers-to-the-governor-rules",
  },
};

export default function CheersToTheGovernorRulesPage() {
  return (
    <GuideLayout
      title="Cheers to the Governor: The Rule-Stacking Counting Game"
      description="Count from 1 to 21 as a group. Reach 21 and you make a new rule. Rules stack up each round until counting becomes nearly impossible. One of the best no-equipment drinking games."
      breadcrumb="Cheers to the Governor Rules"
      primaryGame={{ name: "Cheers to the Governor", slug: "cheers-to-the-governor" }}
      relatedGames={[
        { name: "Buzz", slug: "buzz", description: "Another counting game" },
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "No props needed" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Group voting game" },
      ]}
    >
      <QuickAnswer
        question="How do you play Cheers to the Governor?"
        answer="Sit in a circle and count from 1-21, one person saying each number. Reach 21 and everyone toasts 'Cheers to the Governor!' That person makes a new rule (like swapping 7 and 14, or saying 'banana' instead of 5). If anyone breaks a rule, they drink and counting restarts at 1 with ALL rules still active."
        tips={[
          "Count clockwise, one number per person",
          "Reach 21 = make a new rule",
          "Rules STACK - they all stay active",
          "Mess up = drink and restart at 1"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li>4+ players (best with 6-10)</li>
        <li>Drinks for everyone</li>
        <li>No other equipment needed</li>
        <li>Good memory helpful!</li>
      </ul>

      <h2>Basic Gameplay</h2>
      <ol>
        <li>Sit in a circle with drinks</li>
        <li>Start counting from 1, going clockwise</li>
        <li>Each person says the next number: "1", "2", "3"...</li>
        <li>Continue until someone says "21"</li>
        <li>Everyone toasts: "Cheers to the Governor!"</li>
        <li>The person who said 21 makes a new rule</li>
      </ol>

      <h2>Types of Rules You Can Make</h2>

      <h3>Number Swaps</h3>
      <ul>
        <li>Swap 7 and 14 (say "14" at 7's turn, "7" at 14's turn)</li>
        <li>Swap 3 and 17</li>
        <li>Any two numbers can be swapped</li>
      </ul>

      <h3>Word Replacements</h3>
      <ul>
        <li>Say "banana" instead of 5</li>
        <li>Say "THUNDER" instead of 9</li>
        <li>Say someone's name instead of 11</li>
      </ul>

      <h3>Actions</h3>
      <ul>
        <li>Clap instead of saying 8</li>
        <li>Stand up on 12</li>
        <li>Point at someone on 4</li>
        <li>Spin around on 15</li>
      </ul>

      <h3>Direction Changes</h3>
      <ul>
        <li>Reverse direction on 6</li>
        <li>Skip a person on 10</li>
        <li>Direction changes on every multiple of 5</li>
      </ul>

      <h3>Skip/Silent Rules</h3>
      <ul>
        <li>Skip 13 entirely (go from 12 to 14)</li>
        <li>Everyone stays silent on 20</li>
      </ul>

      <h2>What Counts as a Mistake?</h2>
      <ul>
        <li>Saying the wrong number</li>
        <li>Forgetting a rule (saying 7 when it's swapped)</li>
        <li>Missing an action (forgetting to clap)</li>
        <li>Going out of turn</li>
        <li>Taking too long (hesitation = guilt)</li>
      </ul>

      <h2>When Someone Messes Up</h2>
      <ol>
        <li>That person drinks</li>
        <li>Counting restarts at 1</li>
        <li>ALL existing rules remain active</li>
        <li>No rules are removed or reset</li>
      </ol>

      <h2>Example Round with 3 Rules</h2>
      <p>Rules in play: Swap 7/14, say "pickle" for 5, clap on 8</p>
      <div className="bg-dark-700 p-4 rounded-lg my-4 font-mono text-sm">
        <p>Player 1: "1"</p>
        <p>Player 2: "2"</p>
        <p>Player 3: "3"</p>
        <p>Player 4: "4"</p>
        <p>Player 5: "PICKLE" (5 is pickle)</p>
        <p>Player 6: "6"</p>
        <p>Player 1: "14" (7 is swapped with 14)</p>
        <p>Player 2: *claps* (8 is a clap)</p>
        <p>Player 3: "9"</p>
        <p>...</p>
      </div>

      <h2>Strategy Tips</h2>
      <ul>
        <li>Keep rules simple and memorable early on</li>
        <li>Add physical actions - they're easier to remember than word swaps</li>
        <li>Pay attention to what numbers trip people up</li>
        <li>It's okay to recite all rules before each round</li>
        <li>5-10 rules is usually maximum chaos before it's impossible</li>
      </ul>

      <h2>Common Variations</h2>
      <ul>
        <li><strong>Mercy restart:</strong> After 3 failed attempts, clear all rules</li>
        <li><strong>Written rules:</strong> Keep a list for reference</li>
        <li><strong>Speed mode:</strong> 2-second time limit per number</li>
        <li><strong>Team punishment:</strong> Everyone drinks on mistakes</li>
      </ul>

      <h2>Why This Game Is Great</h2>
      <ul>
        <li>No equipment needed</li>
        <li>Gets funnier as it gets harder</li>
        <li>Creates inside jokes ("remember the pickle rule?")</li>
        <li>Scales well from 4 to 15 players</li>
        <li>The chaos builds naturally</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Play Cheers to the Governor on SipWiki</h3>
        <Link
          href="/game/cheers-to-the-governor"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Cheers to the Governor Game Page →
        </Link>
      </div>
    </GuideLayout>
  );
}
