import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flip Cup Rules: How to Play, Setup & Team Strategies (2024 Guide)",
  description: "Official Flip Cup rules explained! Learn the setup, drinking technique, cup flipping method, and winning strategies. Perfect for parties of 6-20+ people.",
  keywords: ["flip cup rules", "how to play flip cup", "flip cup drinking game", "flip cup setup", "flip cup teams", "relay drinking game", "flip cup strategy", "flip cup tournament"],
  openGraph: { title: "Flip Cup Rules: Complete Guide", description: "Master Flip Cup with official rules, setup guides, and pro strategies.", type: "article", url: "https://sipwiki.app/guides/flip-cup-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/flip-cup-rules" },
};

export default function FlipCupRulesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Play Flip Cup",
    "description": "Complete guide to playing the Flip Cup drinking game.",
    "step": [
      { "@type": "HowToStep", "name": "Setup", "text": "Two teams line up on opposite sides of a table with cups filled 1/4 with beer." },
      { "@type": "HowToStep", "name": "Start", "text": "First players on each team tap cups, tap table, drink, then flip." },
      { "@type": "HowToStep", "name": "Flip", "text": "Place cup upside down on table edge and flip it to land upright." },
      { "@type": "HowToStep", "name": "Relay", "text": "Once flipped, next teammate goes. First team to finish wins." }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many people do you need for Flip Cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum 6 players (3 per team), but Flip Cup is best with 10-16 players. You can play with more if you have a long enough table."
        }
      },
      {
        "@type": "Question",
        "name": "What if the cup falls off the table in Flip Cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pick it up and try again. The cup must land on the table to count. There's no penalty for drops, just keep flipping until you get it."
        }
      },
      {
        "@type": "Question",
        "name": "Can you use two hands to flip the cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard Flip Cup rules say one hand only. Using two hands is considered cheating in most games, though house rules may vary."
        }
      },
      {
        "@type": "Question",
        "name": "How much beer do you put in a Flip Cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fill cups about 1/4 full (roughly 3-4 oz). This is enough to drink quickly but not so much that players get too intoxicated too fast."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best Flip Cup strategy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Put your best flipper in the anchor (last) position. Stay calm when flipping - rushing causes mistakes. Practice the flipping motion with your wrist, not your whole arm."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideLayout
        title="Flip Cup Rules: How to Play & Win"
        description="Flip Cup is the ultimate team relay drinking game. Fast-paced, loud, and incredibly fun - it's a party staple for a reason. Learn the official rules and dominate your next party."
        breadcrumb="Flip Cup Rules"
        primaryGame={{ name: "Flip Cup", slug: "flip-cup" }}
        relatedGames={[
          { name: "Rage Cage", slug: "rage-cage", description: "Intense cup stacking game" },
          { name: "Slap Cup", slug: "slap-cup", description: "Competitive cup racing" },
          { name: "Beer Pong", slug: "beer-pong", description: "Classic cup game" },
        ]}
      >
        <h2>What You Need for Flip Cup</h2>
        <ul>
          <li><strong>Plastic cups</strong> - Solo cups work best (one per player)</li>
          <li><strong>Long table</strong> - Enough room for both teams</li>
          <li><strong>Beer or drinks</strong> - Fill cups about 1/4 full</li>
          <li><strong>Even teams</strong> - 3-10 players per side</li>
        </ul>

        <h2>Flip Cup Setup</h2>
        <ol>
          <li>Divide into two equal teams</li>
          <li>Teams line up on opposite sides of the table</li>
          <li>Each player has a cup filled 1/4 with beer</li>
          <li>Cups are placed at the edge of the table</li>
          <li>Players face their opponent directly across</li>
        </ol>

        <h2>How to Play Flip Cup</h2>
        <ol>
          <li><strong>Start the race</strong> - First players on each team face off</li>
          <li><strong>Cheers ritual</strong> - Tap cups together, tap table, then drink</li>
          <li><strong>Chug your drink</strong> - Finish your entire cup</li>
          <li><strong>Flip your cup</strong> - Place cup upside down on table edge, flip it to land right-side up</li>
          <li><strong>Next player goes</strong> - Once your cup lands, your teammate can start</li>
          <li><strong>First team done wins</strong> - All players must successfully flip</li>
        </ol>

        <h2>The Flipping Technique</h2>
        <p>The flip is everything. Here&apos;s how to nail it:</p>
        <ul>
          <li>Place cup upside down with about 1 inch hanging off the table</li>
          <li>Use one finger to flick the bottom of the cup upward</li>
          <li>The cup should rotate once and land right-side up</li>
          <li>Practice the motion - it&apos;s about wrist control, not strength</li>
        </ul>

        <h2>Flip Cup Variations</h2>
        <h3>Survivor Flip Cup</h3>
        <p>Losing team votes someone off after each round. Last team with players wins.</p>

        <h3>Batavia Downs</h3>
        <p>Players race back and forth, flipping cups at both ends of the table.</p>

        <h3>Flip Cup Relay</h3>
        <p>Combine with a relay race - run to the table, drink, flip, run back.</p>

        <h2>Pro Tips</h2>
        <ul>
          <li>Don&apos;t overfill cups - 1/4 full is ideal</li>
          <li>Stay calm under pressure - rushing causes bad flips</li>
          <li>Put your best flipper in the anchor position</li>
          <li>Practice your flip before the game starts</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <h3>How many people do you need for Flip Cup?</h3>
        <p>Minimum 6 (3 per team), but it&apos;s best with 10-16 players.</p>

        <h3>What if the cup falls off the table?</h3>
        <p>Pick it up and try again. The cup must land on the table.</p>

        <h3>Can you use two hands to flip?</h3>
        <p>Standard rules say one hand only. House rules may vary.</p>

        <p>Check out our <Link href="/game/flip-cup" className="text-neon-pink hover:underline">interactive Flip Cup game</Link> or browse more <Link href="/games/cup-games" className="text-neon-pink hover:underline">cup drinking games</Link>.</p>
      </GuideLayout>
    </>
  );
}
