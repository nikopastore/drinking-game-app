import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chems Drinking Game Rules: Secret Signal Partner Game (2025)",
  description: "Chems drinking game rules! A partner-based card game with secret signals. Collect four-of-a-kind and signal your teammate without getting caught. Full rules.",
  keywords: [
    "chems rules",
    "chems drinking game",
    "secret signal drinking game",
    "partner drinking games",
    "team drinking games",
    "card signal game",
  ],
  openGraph: {
    title: "Chems Drinking Game Rules",
    description: "The secret signal partner drinking game.",
    type: "article",
    url: "https://sipwiki.app/guides/chems-rules",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/chems-rules",
  },
};

export default function ChemsRulesPage() {
  return (
    <GuideLayout
      title="Chems: The Secret Signal Drinking Game"
      description="A partner-based card game where you collect four-of-a-kind and secretly signal your teammate to call 'Chems!' But watch out - opponents are trying to catch your signal!"
      breadcrumb="Chems Rules"
      primaryGame={{ name: "Chems", slug: "chems" }}
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Card-based game" },
        { name: "Irish Poker", slug: "irish-poker", description: "Card guessing" },
        { name: "Beeramid", slug: "beeramid", description: "Bluffing card game" },
      ]}
    >
      <QuickAnswer
        question="How do you play Chems?"
        answer="Teams of 2 agree on a secret signal (wink, scratch nose, etc.). Everyone swaps cards simultaneously trying to get four-of-a-kind. When you have it, use your signal. Your partner calls 'CHEMS!' - if you really have four-of-a-kind, opponents drink 10. If not, your team drinks 10. Opponents can also catch your signal and call you out!"
        tips={[
          "Teams of 2 with secret signals",
          "Collect four cards of same rank",
          "Signal your partner to call 'Chems!'",
          "Get caught = your team drinks 10"
        ]}
        variant="primary"
      />

      <h2>What You Need</h2>
      <ul>
        <li>Standard deck of cards</li>
        <li>4 or 6 players (2 or 3 teams of 2)</li>
        <li>Table for card swapping</li>
        <li>Drinks for everyone</li>
      </ul>

      <h2>Setup</h2>
      <ol>
        <li>Split into teams of 2 - partners sit across from each other</li>
        <li>Each team privately agrees on a SECRET SIGNAL</li>
        <li>Keep your signal hidden from other teams!</li>
        <li>Deal 4 cards to each player</li>
        <li>Place 4 cards face-up in the center of the table</li>
      </ol>

      <h2>Secret Signal Ideas</h2>
      <ul>
        <li>Wink</li>
        <li>Scratch your nose</li>
        <li>Tug your ear</li>
        <li>Touch your chin</li>
        <li>Tap the table twice</li>
        <li>Clear your throat</li>
        <li>Say a code word casually</li>
        <li>Yawn</li>
      </ul>
      <p className="text-gray-400 mt-2 text-sm">
        Pro tip: Subtle is better. Obvious signals get caught immediately.
      </p>

      <h2>Gameplay</h2>
      <ol>
        <li>Everyone plays at the SAME TIME - no turns!</li>
        <li>Discard one card from your hand to the center</li>
        <li>Pick up one card from the center</li>
        <li>You can only hold 4 cards at a time</li>
        <li>Keep swapping, trying to collect four of the same RANK</li>
        <li>Example goal: Four 7s, Four Kings, Four Aces, etc.</li>
      </ol>

      <h2>Calling Chems</h2>

      <h3>When You Have Four-of-a-Kind</h3>
      <ol>
        <li>Use your secret signal to alert your partner</li>
        <li>Your partner notices and calls "CHEMS!"</li>
        <li>You reveal your four-of-a-kind</li>
        <li>If you really have it: Other team(s) drink 10 sips</li>
        <li>If you don't have it: Your team drinks 10 sips</li>
      </ol>

      <h3>Catching Opponents</h3>
      <ul>
        <li>If you think an opponent has four-of-a-kind, call them out!</li>
        <li>Say "I think [name] has Chems!"</li>
        <li>If correct: They drink 10</li>
        <li>If wrong: You drink 10</li>
      </ul>

      <h2>Important Rules</h2>
      <ul>
        <li>Only your PARTNER can call Chems for you</li>
        <li>You cannot call Chems for yourself</li>
        <li>All trading happens simultaneously - no waiting</li>
        <li>One-for-one swaps only (discard one, pick up one)</li>
        <li>Cards in center are always available to anyone</li>
      </ul>

      <h2>Winning</h2>
      <p>Play multiple rounds. First team to an agreed score wins:</p>
      <ul>
        <li>Successful Chems call = 1 point</li>
        <li>Catching opponent = 1 point</li>
        <li>First to 5 points wins</li>
      </ul>

      <h2>Strategy Tips</h2>

      <h3>Signaling</h3>
      <ul>
        <li>Don't signal immediately - wait for a natural moment</li>
        <li>Change signals between rounds if caught</li>
        <li>Fake signals can throw opponents off</li>
        <li>Watch your partner constantly</li>
      </ul>

      <h3>Watching</h3>
      <ul>
        <li>Look for patterns in opponents' behavior</li>
        <li>If someone suddenly stops trading, suspicious!</li>
        <li>Watch faces, not just hands</li>
        <li>Don't tunnel vision on your own cards</li>
      </ul>

      <h3>Trading</h3>
      <ul>
        <li>Trade fast to create confusion</li>
        <li>Don't telegraph what you're collecting</li>
        <li>Sometimes dump good cards to throw off watchers</li>
      </ul>

      <h2>Common Variations</h2>
      <ul>
        <li><strong>Drink amount:</strong> 5 sips instead of 10 for lighter games</li>
        <li><strong>Finish drink:</strong> Loser finishes their drink instead of sips</li>
        <li><strong>No fake signals:</strong> Fake signaling = penalty drink</li>
        <li><strong>Rotating partners:</strong> Switch teams each round</li>
      </ul>

      <h2>Why Chems Is Great</h2>
      <ul>
        <li>Creates hilarious paranoia</li>
        <li>Teamwork and communication</li>
        <li>Fast-paced simultaneous play</li>
        <li>Perfect blend of luck and skill</li>
        <li>Great for double dates or small groups</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Play Chems on SipWiki</h3>
        <Link
          href="/games/chems"
          className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
        >
          Chems Game Page →
        </Link>
      </div>
    </GuideLayout>
  );
}
