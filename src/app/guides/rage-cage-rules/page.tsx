import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rage Cage Rules: How to Play Stack Cup (2024 Complete Guide)",
  description: "Learn Rage Cage (Stack Cup) rules! Setup, stacking mechanics, and strategies for this intense elimination drinking game. Perfect for 6-15 players.",
  keywords: ["rage cage rules", "stack cup rules", "how to play rage cage", "rage cage drinking game", "stack cup drinking game", "boom cup", "slap cup vs rage cage"],
  openGraph: { title: "Rage Cage Rules: Complete Guide", description: "Master Rage Cage with our complete rules guide.", type: "article", url: "https://sipwiki.app/guides/rage-cage-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/rage-cage-rules" },
};

export default function RageCageRulesPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "HowTo", "name": "How to Play Rage Cage", "description": "Complete Rage Cage drinking game rules.", "step": [
    { "@type": "HowToStep", "text": "Arrange cups in center, fill with beer, two players start with ping pong balls" },
    { "@type": "HowToStep", "text": "Bounce ball into your cup. Make it first try = pass either direction" },
    { "@type": "HowToStep", "text": "If you make it while neighbor is still trying, stack your cup on theirs" },
    { "@type": "HowToStep", "text": "Stacked player drinks a center cup and continues. Game ends when center is empty" }
  ]};

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the difference between Rage Cage and Slap Cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Rage Cage, you stack your cup on top of your neighbor's cup. In Slap Cup, you slap their cup away instead. Both are intense elimination games, but Rage Cage has the iconic stacking tower that grows throughout the game."
        }
      },
      {
        "@type": "Question",
        "name": "How many people do you need for Rage Cage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rage Cage works best with 6-15 players. Fewer than 6 and there's not enough chaos; more than 15 and people wait too long between turns. 8-12 is the sweet spot."
        }
      },
      {
        "@type": "Question",
        "name": "What is the death cup in Rage Cage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The death cup is a completely full cup placed in the center of the other cups. If you get stacked into the death cup, you have to drink the entire thing and you're eliminated from the game."
        }
      },
      {
        "@type": "Question",
        "name": "Can you stack on the first bounce in Rage Cage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you make it on your first bounce, you can pass your cup to ANYONE at the table, not just your neighbor. This is a strategic advantage - you can set up a stack on a slow player across the table."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GuideLayout
        title="Rage Cage Rules: The Ultimate Guide to Stack Cup"
        description="Rage Cage (also called Stack Cup or Boom Cup) is one of the most intense drinking games ever invented. Two balls racing around the circle, stacking on slow players - it's pure chaos and absolutely electric at parties."
        breadcrumb="Rage Cage Rules"
        primaryGame={{ name: "Rage Cage", slug: "rage-cage" }}
        relatedGames={[
          { name: "Slap Cup", slug: "slap-cup", description: "Similar stacking game" },
          { name: "Flip Cup", slug: "flip-cup", description: "Team relay racing" },
          { name: "Chandelier", slug: "chandelier", description: "Circle cup game" },
        ]}
      >
        <QuickAnswer
          question="How do you play Rage Cage?"
          answer="Rage Cage (Stack Cup) is an elimination drinking game for 6-15 players. Setup: Place 20+ cups filled with beer in the center with one 'death cup' full in the middle. Two players start with empty cups and ping pong balls. Bounce the ball into your cup - if successful, pass it left (or anywhere if first try). If you make it before the player to your left, stack your cup on theirs! Stacked players must drink a center cup and continue. Game ends when only the death cup remains - last person to get stacked drinks it."
          tips={[
            "Best with 8-12 players for optimal chaos",
            "Make it on first bounce = pass to anyone, not just left",
            "Aim for the cup rim, ball bounces easier",
            "Stay focused - hesitation gets you stacked"
          ]}
          variant="primary"
        />

        <h2>What You Need</h2>
        <ul>
          <li><strong>20-30 plastic cups</strong></li>
          <li><strong>2 ping pong balls</strong></li>
          <li><strong>6-15 players</strong></li>
          <li><strong>Plenty of beer</strong></li>
          <li><strong>Round table works best</strong></li>
        </ul>

        <h2>Rage Cage Setup</h2>
        <ol>
          <li>Fill cups 1/3 with beer and arrange in center of table</li>
          <li>Fill one cup completely (the death cup) and place in middle</li>
          <li>Players stand around the table</li>
          <li>Two players across from each other start with empty cups and balls</li>
        </ol>

        <h2>How to Play Rage Cage</h2>
        <ol>
          <li><strong>Bounce to start</strong> - Starting players try to bounce ball into their cup</li>
          <li><strong>First bounce = choice</strong> - Make it first try? Pass cup and ball to anyone</li>
          <li><strong>Keep trying</strong> - Miss? Keep bouncing until you make it</li>
          <li><strong>Stack attack</strong> - If you make it while your neighbor is still bouncing, STACK your cup on top of theirs</li>
          <li><strong>Get stacked</strong> - Take a cup from center, drink it, use that cup to keep playing</li>
          <li><strong>Death cup</strong> - Get stacked into the full center cup? Drink the whole thing. Game over for you.</li>
        </ol>

        <h2>Key Rules</h2>
        <ul>
          <li>You can only stack on the person to your immediate left</li>
          <li>Cups pass to the left after making a shot</li>
          <li>Making it on the first bounce lets you pass to anyone</li>
          <li>The stacked player must drink before getting a new cup</li>
          <li>Game ends when all center cups are gone</li>
        </ul>

        <h2>Strategy Tips</h2>
        <ul>
          <li>Stay calm - panicking makes you miss more</li>
          <li>Watch the other ball - know when you&apos;re about to get stacked</li>
          <li>First bounce to stack backwards - send the cup away from danger</li>
          <li>Aim for the center of the cup, not the edges</li>
        </ul>

        <h2>Rage Cage vs Slap Cup</h2>
        <p>The main difference: in Rage Cage you stack cups, in Slap Cup you slap the opponent&apos;s cup off the table. Same energy, different mechanic.</p>

        <h2>Frequently Asked Questions</h2>
        <h3>What happens if both balls make it at the same time?</h3>
        <p>Whoever&apos;s ball lands first gets to stack. If truly simultaneous, no stack occurs.</p>

        <h3>Can you bounce with either hand?</h3>
        <p>Yes, use whatever hand you want. Some players switch for different angles.</p>

        <p>Ready to play? Check out our <Link href="/games/rage-cage" className="text-neon-pink hover:underline">Rage Cage game page</Link> or explore more <Link href="/games/cup-games" className="text-neon-pink hover:underline">cup games</Link>.</p>
      </GuideLayout>
    </>
  );
}
