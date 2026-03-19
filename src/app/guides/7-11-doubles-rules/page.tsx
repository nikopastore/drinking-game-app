import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "7-11-Doubles Rules: The Racing Dice Drinking Game (2025 Guide)",
  description: "7-11-Doubles drinking game rules! The intense dice race where you chug while someone tries to roll 7, 11, or doubles. Complete rules, strategies, and tips.",
  keywords: [
    "7-11 doubles rules",
    "7 11 doubles drinking game",
    "dice drinking games",
    "racing drinking game",
    "bar dice game",
    "party dice games",
  ],
  openGraph: {
    title: "7-11-Doubles Rules",
    description: "The dice racing game that gets intense fast.",
    type: "article",
    url: "https://sipwiki.app/guides/7-11-doubles-rules",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/7-11-doubles-rules",
  },
};

export default function SevenElevenDoublesRulesPage() {
  return (
    <GuideLayout
      title="7-11-Doubles: The Dice Racing Game"
      description="One person chugs while another frantically rolls dice. If the roller hits 7, 11, or doubles before you finish, you keep drinking. It's a race against the dice."
      breadcrumb="7-11-Doubles Rules"
      primaryGame={{ name: "7-11-Doubles", slug: "7-11-doubles" }}
      relatedGames={[
        { name: "Three Man", slug: "three-man", description: "Another dice game" },
        { name: "Rage Cage", slug: "rage-cage", description: "Racing game" },
        { name: "Quarters", slug: "quarters", description: "Skill-based game" },
      ]}
    >
      <QuickAnswer
        question="How do you play 7-11-Doubles?"
        answer="Fill a cup and place it in the center. Roller rolls two dice - when they get 7, 11, or doubles, they point at someone. That person grabs the cup and starts chugging. The roller keeps rolling - if they hit 7/11/doubles BEFORE you finish, the cup gets refilled and you keep drinking. Beat the roll and you're safe."
        tips={[
          "Roller hits 7, 11, or doubles = picks a victim",
          "Victim chugs while roller keeps rolling",
          "Roller hits again before you finish = refill and repeat",
          "Finish first = you're safe, dice pass on"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li>2 dice</li>
        <li>1 cup (center cup)</li>
        <li>3+ players (best with 5-8)</li>
        <li>Plenty of beer</li>
        <li>Table to roll on</li>
      </ul>

      <h2>Setup</h2>
      <ol>
        <li>Fill the center cup about 3/4 full with beer</li>
        <li>Place it in the middle of the table</li>
        <li>Everyone sits around the table</li>
        <li>Highest initial roll determines first roller</li>
      </ol>

      <h2>Winning Rolls</h2>
      <div className="bg-dark-700 p-4 rounded-lg my-4">
        <p className="font-bold text-neon-pink mb-2">These rolls let you pick a victim:</p>
        <ul>
          <li><strong>7:</strong> Any combination (1+6, 2+5, 3+4)</li>
          <li><strong>11:</strong> Any combination (5+6)</li>
          <li><strong>Doubles:</strong> 1-1, 2-2, 3-3, 4-4, 5-5, 6-6</li>
        </ul>
        <p className="text-gray-400 mt-2 text-sm">Probability: ~44% chance on any roll</p>
      </div>

      <h2>How to Play</h2>
      <ol>
        <li>Roller keeps rolling until they hit 7, 11, or doubles</li>
        <li>Once hit, roller points at someone - they're the CHUGGER</li>
        <li><strong>Critical rule:</strong> Roller cannot roll again until chugger TOUCHES the cup</li>
        <li>Once chugger touches the cup, the race begins!</li>
        <li>Chugger drinks as fast as possible</li>
        <li>Roller keeps rolling, trying to hit 7/11/doubles</li>
      </ol>

      <h2>Race Outcomes</h2>

      <h3>If Roller Hits Before Chugger Finishes</h3>
      <ul>
        <li>Chugger must STOP drinking</li>
        <li>Cup gets refilled</li>
        <li>Chugger touches cup again, race restarts</li>
        <li>This can repeat multiple times!</li>
      </ul>

      <h3>If Chugger Finishes First</h3>
      <ul>
        <li>Chugger is safe!</li>
        <li>Dice pass to the left</li>
        <li>Cup gets refilled</li>
        <li>New roller starts trying to hit</li>
      </ul>

      <h2>Key Rules & Penalties</h2>
      <ul>
        <li><strong>Roller touches dice before chugger touches cup:</strong> Roles swap - roller becomes chugger</li>
        <li><strong>Dice fall off table:</strong> Roller drinks the center cup</li>
        <li><strong>Cup spills:</strong> Chugger must finish whatever's left and refill</li>
        <li><strong>Chugger puts cup down before empty:</strong> Must start over</li>
      </ul>

      <h2>Strategy Tips</h2>

      <h3>For Chuggers</h3>
      <ul>
        <li>Don't touch the cup until you're 100% committed to chugging FAST</li>
        <li>Take a breath before grabbing</li>
        <li>Tilt and pour - don't sip</li>
        <li>The cup isn't THAT full - you can do it</li>
      </ul>

      <h3>For Rollers</h3>
      <ul>
        <li>Roll fast - speed matters more than aim</li>
        <li>Use a consistent rolling motion</li>
        <li>Watch the chugger - roll the moment they touch</li>
        <li>Target friends who are slow drinkers</li>
      </ul>

      <h2>Trap Mode Warning</h2>
      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300">
          <strong>Warning:</strong> If the same person gets hit multiple times in a row, they can
          be "trapped" drinking 3-4 cups consecutively. Consider house rules like:
        </p>
        <ul className="text-yellow-200 mt-2 text-sm">
          <li>Max 2 refills per victim</li>
          <li>Fill cups only half full</li>
          <li>No targeting the same person twice in a row</li>
        </ul>
      </div>

      <h2>Common Variations</h2>
      <ul>
        <li><strong>Shot version:</strong> Use shot glasses instead of cups</li>
        <li><strong>Team 7-11:</strong> Partners take turns rolling</li>
        <li><strong>Gentle mode:</strong> Half-full cups only</li>
        <li><strong>Extreme mode:</strong> Add liquor to the cup</li>
      </ul>

      <h2>Why 7-11-Doubles Is Great</h2>
      <ul>
        <li>Simple rules, intense gameplay</li>
        <li>Creates natural rivalries</li>
        <li>Great spectator entertainment</li>
        <li>Fast-paced and exciting</li>
        <li>No downtime - always something happening</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Play 7-11-Doubles on SipWiki</h3>
        <Link
          href="/games/7-11-doubles"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          7-11-Doubles Game Page →
        </Link>
      </div>
    </GuideLayout>
  );
}
