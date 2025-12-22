import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beer Pong Rules: Official Rules, Re-Racks & House Rules (2024 Guide)",
  description: "Complete beer pong rules guide with official tournament rules, re-rack formations, bouncing rules, and popular house rules. Learn elbow rule, redemption, and more.",
  keywords: [
    "beer pong rules",
    "official beer pong rules",
    "how to play beer pong",
    "beer pong re-rack rules",
    "beer pong redemption rule",
    "beer pong elbow rule",
    "bouncing rules in beer pong",
    "death cup beer pong",
    "beer pong tournament rules",
    "beer pong house rules",
    "beer pong setup",
    "beer pong formations",
  ],
  openGraph: {
    title: "Beer Pong Rules: Complete Official Guide",
    description: "Master beer pong with official rules, re-rack formations, and pro tips. From setup to redemption shots.",
    type: "article",
    url: "https://sipwiki.app/guides/beer-pong-rules",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beer Pong Rules: Official Guide",
    description: "Complete beer pong rules including re-racks, bouncing, and house rules.",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/beer-pong-rules",
  },
};

export default function BeerPongRulesPage() {
  const reracks = [
    { cups: 6, name: "6-Cup Triangle", description: "3-2-1 formation pointing at opponent" },
    { cups: 4, name: "Diamond", description: "1-2-1 diamond shape" },
    { cups: 3, name: "Triangle", description: "2-1 small triangle" },
    { cups: 2, name: "Power I", description: "Two cups in a line" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Play Beer Pong",
    "description": "Complete guide to playing beer pong with official rules, setup instructions, and re-rack formations.",
    "totalTime": "PT20M",
    "supply": [
      { "@type": "HowToSupply", "name": "20 plastic cups (10 per team)" },
      { "@type": "HowToSupply", "name": "2-4 ping pong balls" },
      { "@type": "HowToSupply", "name": "Beer or beverage of choice" },
      { "@type": "HowToSupply", "name": "Water cup for rinsing" }
    ],
    "tool": [
      { "@type": "HowToTool", "name": "Beer pong table (8 feet recommended)" }
    ],
    "step": [
      { "@type": "HowToStep", "name": "Setup", "text": "Arrange 10 cups in a triangle formation on each end of the table. Fill cups 1/4 to 1/3 with beer." },
      { "@type": "HowToStep", "name": "Determine First Shot", "text": "Eye-to-eye: both players shoot while looking at each other. First to make it shoots first." },
      { "@type": "HowToStep", "name": "Take Turns", "text": "Each team gets 2 shots per turn (1 per player). Aim for opponent's cups." },
      { "@type": "HowToStep", "name": "Drink and Remove", "text": "When a ball lands in a cup, the defending team drinks and removes the cup." },
      { "@type": "HowToStep", "name": "Win the Game", "text": "First team to eliminate all opponent's cups wins. Losing team may get redemption shots." }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the official beer pong rules?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Official beer pong uses 10 cups per side in a triangle formation. Teams of 2 alternate shots. When a ball lands in a cup, the opponent drinks and removes it. Elbows must stay behind the table edge. Teams get 2 re-racks per game. First team to sink all cups wins."
        }
      },
      {
        "@type": "Question",
        "name": "What is the elbow rule in beer pong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The elbow rule states that your elbow cannot cross the edge of the table when shooting. If your elbow crosses the table edge, the shot doesn't count even if you make it. This prevents players from leaning too far over the table."
        }
      },
      {
        "@type": "Question",
        "name": "What is the death cup in beer pong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The death cup is a cup that was made but hasn't been drunk yet. If a player sinks a ball in the death cup while it's still being held, the game ends immediately and that team wins. Always drink your cups quickly!"
        }
      },
      {
        "@type": "Question",
        "name": "How do beer pong re-racks work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each team gets 2 re-racks per game. You can request a re-rack at the start of your turn when cups are spread apart. Common formations: 6 cups (triangle), 4 cups (diamond), 3 cups (small triangle), 2 cups (line). Re-racks help you aim better."
        }
      },
      {
        "@type": "Question",
        "name": "What is redemption in beer pong?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Redemption gives the losing team a chance to tie. After the winning team makes the last cup, the losing team shoots until they miss. If they clear all remaining cups, the game goes to overtime (usually 3 cups each)."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <GuideLayout
        title="Beer Pong Rules: Official Rules, Re-Racks & How to Play"
        description="Beer pong is the king of party games. Whether you're a beginner or looking to settle house rule debates, this complete guide covers official tournament rules, re-rack formations, and the most popular house rules."
        breadcrumb="Beer Pong Rules"
        primaryGame={{ name: "Beer Pong", slug: "beer-pong" }}
        relatedGames={[
          { name: "Flip Cup", slug: "flip-cup", description: "Fast-paced cup drinking game" },
          { name: "Rage Cage", slug: "rage-cage", description: "Intense speed stacking game" },
          { name: "Slap Cup", slug: "slap-cup", description: "Competitive cup bouncing" },
        ]}
      >
        {/* Quick Answer for AI Overviews & Featured Snippets */}
        <QuickAnswer
          question="How do you play Beer Pong?"
          answer="Beer Pong is played with two teams at opposite ends of a table. Arrange 10 cups in a triangle formation on each side, filled 1/3 with beer. Teams take turns throwing ping pong balls into opponent's cups. When a ball lands in a cup, the defending team drinks and removes it. First team to eliminate all opponent's cups wins. Get 2 re-racks per game to reorganize remaining cups."
          tips={[
            "Elbow must stay behind table edge when shooting",
            "Bounce shots count as 2 cups but can be swatted",
            "Losing team gets redemption shots if they miss none",
            "Standard table is 8 feet long"
          ]}
          variant="primary"
        />

        <h2>What You&apos;ll Need for Beer Pong</h2>
        <ul>
          <li><strong>20 plastic cups</strong> - 16oz Solo cups are standard (10 per team)</li>
          <li><strong>2-4 ping pong balls</strong> - Have extras, they get lost</li>
          <li><strong>Beer or drink of choice</strong> - About 2-3 beers per side</li>
          <li><strong>Long table</strong> - 8 feet is official, but any table works</li>
          <li><strong>Water cup</strong> - For rinsing balls that hit the floor</li>
        </ul>

        <h2>Beer Pong Setup: How to Arrange the Cups</h2>
        <ol>
          <li><strong>Form two triangles</strong> - 10 cups each, pointing toward the opponent</li>
          <li><strong>Triangle formation</strong> - 4 cups in back, then 3, 2, 1 (like bowling pins)</li>
          <li><strong>Fill the cups</strong> - About 1/4 to 1/3 full with beer</li>
          <li><strong>Cups touch</strong> - All cups should be touching in a tight formation</li>
          <li><strong>Place at table edge</strong> - Front cup at the edge of the table</li>
        </ol>

        <h2>Official Beer Pong Rules: How to Play</h2>

        <h3>Determining First Shot</h3>
        <p>The most common method is <strong>&quot;eye-to-eye&quot;</strong>: one player from each team shoots while maintaining eye contact. First team to make a cup shoots first. No looking at the cups!</p>

        <h3>Basic Gameplay</h3>
        <ol>
          <li><strong>Teams alternate turns</strong> - Each team gets 2 shots per turn (one per player)</li>
          <li><strong>Aim for opponent&apos;s cups</strong> - Throw the ball to land in their cups</li>
          <li><strong>When you make it</strong> - Opponent drinks that cup and removes it</li>
          <li><strong>Balls back</strong> - If both teammates make cups, you get balls back for 2 more shots</li>
          <li><strong>Win condition</strong> - First team to eliminate all 10 cups wins</li>
        </ol>

        <h3>The Elbow/Wrist Rule</h3>
        <p><strong>Your elbow (or wrist, depending on house rules) cannot cross the edge of the table when releasing the ball.</strong> If it does, the shot doesn&apos;t count even if you make it. This prevents leaning too far over the table.</p>

        <h2>Re-Rack Rules and Formations</h2>
        <p>Each team gets <strong>2 re-racks per game</strong>. Request at the start of your turn. Common formations:</p>

        <div className="not-prose my-8">
          <div className="grid md:grid-cols-2 gap-4">
            {reracks.map((rack) => (
              <div key={rack.name} className="p-4 bg-dark-800 rounded-xl border border-dark-600">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-neon-pink">{rack.cups}</span>
                  <div>
                    <h3 className="font-bold text-white">{rack.name}</h3>
                    <p className="text-gray-400 text-sm">{rack.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2>Bouncing Rules</h2>
        <p>Bouncing the ball off the table before it goes in a cup is risky but rewarding:</p>
        <ul>
          <li><strong>Bounce shots count as 2 cups</strong> - The cup it lands in plus one of the defender&apos;s choice</li>
          <li><strong>BUT defenders can swat bounces</strong> - Once the ball hits the table, it&apos;s fair game</li>
          <li><strong>No swatting direct shots</strong> - Swatting a non-bounce is interference (penalty varies)</li>
        </ul>

        <h2>The Death Cup Rule</h2>
        <p><strong>The death cup is any cup that&apos;s been made but not yet drunk.</strong> If someone sinks a ball in a death cup, the game ends immediately - that team wins. Moral: drink your cups quickly!</p>

        <h2>Redemption (Rebuttal) Rules</h2>
        <p>When a team makes the final cup, the game isn&apos;t over yet:</p>
        <ol>
          <li>The losing team gets <strong>redemption shots</strong></li>
          <li>Each player shoots until they miss</li>
          <li>If they clear all remaining cups, it goes to <strong>overtime</strong></li>
          <li>Overtime: 3 cups per side, no re-racks, sudden death rules</li>
        </ol>

        <h2>Popular Beer Pong House Rules</h2>
        <p>Every house plays differently. Here are the most common house rules:</p>

        <h3>Fingering/Blowing</h3>
        <ul>
          <li><strong>Fingering</strong> - Flicking a spinning ball out of the cup before it settles</li>
          <li><strong>Blowing</strong> - Blowing the ball out of the cup</li>
          <li><em>Many houses allow one or both for the defending team</em></li>
        </ul>

        <h3>Heating Up / On Fire</h3>
        <ul>
          <li><strong>Heating Up</strong> - Make 2 in a row, call &quot;heating up&quot;</li>
          <li><strong>On Fire</strong> - Make 3 in a row, keep shooting until you miss</li>
          <li><em>Must call &quot;heating up&quot; for &quot;on fire&quot; to count</em></li>
        </ul>

        <h3>Island / Solo Cup</h3>
        <ul>
          <li>Call &quot;island&quot; on a cup not touching any others</li>
          <li>If you make it, opponent removes 2 cups</li>
          <li>If you miss, you lose a cup</li>
          <li>Usually limited to once per game</li>
        </ul>

        <h3>Celebrity Shot</h3>
        <ul>
          <li>Once per game, a non-player can take a shot for your team</li>
          <li>Great for including spectators</li>
        </ul>

        <h2>Beer Pong Strategy & Pro Tips</h2>
        <ul>
          <li><strong>Aim for the back cups first</strong> - They&apos;re harder to hit after the front cups are gone</li>
          <li><strong>Find your shot</strong> - Some people arc high, others shoot low and fast. Find what works</li>
          <li><strong>Watch the water cup</strong> - Always rinse your ball. Floor balls are gross</li>
          <li><strong>Save re-racks wisely</strong> - Use them when cups are scattered, not when you&apos;re winning</li>
          <li><strong>Stay hydrated</strong> - Water between games keeps you sharp</li>
          <li><strong>Practice bounces</strong> - The 2-cup reward is worth the risk when you&apos;re behind</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>How many cups for beer pong?</h3>
        <p>Standard beer pong uses 10 cups per side (20 total), arranged in a triangle. Some variations use 6 cups for quicker games.</p>

        <h3>How much beer goes in each cup?</h3>
        <p>Fill cups 1/4 to 1/3 full. This uses about 2-3 beers per side for a 10-cup game. Too full makes it harder to sink shots.</p>

        <h3>What if the ball knocks a cup over?</h3>
        <p>A knocked-over cup counts as made if the ball touched the beer first. Set it back up empty. If the ball just knocks it over from the outside, it doesn&apos;t count.</p>

        <h3>Can you underhand throw in beer pong?</h3>
        <p>Yes! There&apos;s no rule about throwing style. Overhand, underhand, granny shot - whatever works for you.</p>

        <h3>What happens if both players make the same cup?</h3>
        <p>In most rules, if both teammates sink the same cup on the same turn, it counts as 3 cups (that cup plus 2 more of the defender&apos;s choice).</p>

        <h2>Ready to Play?</h2>
        <p>Now that you know all the official beer pong rules, grab some friends and hit the table! Check out our <Link href="/game/beer-pong" className="text-neon-pink hover:underline">interactive Beer Pong game</Link> or explore more <Link href="/games/cup-games" className="text-neon-pink hover:underline">cup-based drinking games</Link>.</p>
      </GuideLayout>
    </>
  );
}
