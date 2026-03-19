import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "12 Best Pregaming Drinking Games | Before Going Out Games",
  description: "The best drinking games for pregaming before going out! Fast, fun games to get the party started before hitting the bars or clubs. Perfect for warming up your night.",
  keywords: ["pregaming drinking games", "pregame games", "pre drinking games", "before going out games", "pre party drinking games", "quick drinking games", "fast drinking games"],
  openGraph: { title: "12 Best Pregaming Drinking Games", description: "Get the party started before you go out!", type: "article", url: "https://sipwiki.app/guides/pregaming-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/pregaming-drinking-games" },
};

export default function PregamingGamesPage() {
  return (
    <GuideLayout
      title="Pregaming Drinking Games"
      description="The party before the party! These fast-paced games get everyone hyped before heading to the bar, club, or main event. Quick rounds, maximum energy."
      breadcrumb="Pregaming Games"
      relatedGames={[
        { name: "Power Hour", slug: "power-hour", description: "Timed drinking" },
        { name: "Flip Cup", slug: "flip-cup", description: "Quick rounds" },
        { name: "Rage Cage", slug: "rage-cage", description: "Fast paced" },
      ]}
    >
      <QuickAnswer
        question="What are the best drinking games for pregaming?"
        answer="The best pregaming drinking games are Flip Cup, Rage Cage, Power Hour, Thunderstruck, and Medusa. These games are fast-paced, high-energy, and get everyone drinking together before going out. The key to good pregame games: quick rounds, simple rules, and building group energy without getting too drunk before the main event."
        tips={[
          "Start 1-2 hours before leaving",
          "Pace yourself - the night is young",
          "Flip Cup is perfect for any group size",
          "Power Hour works great with themed playlists"
        ]}
        variant="primary"
      />

      <h2>The Ultimate Pregame Games</h2>

      <h3>1. Flip Cup</h3>
      <p>The king of pregame games. Two teams line up on opposite sides of a table, race to drink their beer and flip their cup upside down by flicking the rim. First team to flip all cups wins.</p>
      <ul>
        <li><strong>Players:</strong> 6-20</li>
        <li><strong>Equipment:</strong> Plastic cups, table</li>
        <li><strong>Time per round:</strong> 2-3 minutes</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Fast rounds, team energy, gets everyone involved immediately</li>
      </ul>
      <p><Link href="/games/flip-cup" className="text-neon-pink hover:underline">Full Flip Cup Rules</Link></p>

      <h3>2. Rage Cage (Boom Cup)</h3>
      <p>High-energy bouncing game where players race to bounce a ball into their cup. Get stacked on? Drink a center cup. The intensity builds as cups disappear.</p>
      <ul>
        <li><strong>Players:</strong> 6-15</li>
        <li><strong>Equipment:</strong> Many cups, 2 ping pong balls</li>
        <li><strong>Time per game:</strong> 10-15 minutes</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Non-stop action, everyone plays simultaneously, builds competitive energy</li>
      </ul>
      <p><Link href="/games/rage-cage" className="text-neon-pink hover:underline">Full Rage Cage Rules</Link></p>

      <h3>3. Power Hour</h3>
      <p>Take a shot of beer every minute for 60 minutes (or 30 for a half power hour). Usually done with a playlist that changes songs every minute. Great background game while getting ready.</p>
      <ul>
        <li><strong>Players:</strong> Any number</li>
        <li><strong>Equipment:</strong> Shot glasses, timer/playlist</li>
        <li><strong>Time:</strong> 30-60 minutes</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Paces your drinking perfectly, social activity while getting ready</li>
      </ul>
      <p><Link href="/games/power-hour" className="text-neon-pink hover:underline">Full Power Hour Rules</Link></p>

      <h3>4. Thunderstruck</h3>
      <p>Play AC/DC&apos;s &quot;Thunderstruck.&quot; First person drinks when they hear &quot;thunder&quot; and stops when it&apos;s said again, passing to the next person. Some unlucky souls drink for a LONG time during the solo.</p>
      <ul>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Equipment:</strong> Music player</li>
        <li><strong>Time:</strong> 4 minutes 52 seconds (song length)</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Musical energy, hilarious when someone gets stuck, one-and-done</li>
      </ul>
      <p><Link href="/games/thunderstruck" className="text-neon-pink hover:underline">Full Thunderstruck Rules</Link></p>

      <h3>5. Medusa</h3>
      <p>Everyone looks down. On &quot;3-2-1 look up!&quot; everyone looks at another player. If two people lock eyes, they both drink. Simple, fast, and surprisingly tense.</p>
      <ul>
        <li><strong>Players:</strong> 4-15</li>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Time per round:</strong> 30 seconds</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Zero setup, instant laughs, can play as many rounds as needed</li>
      </ul>
      <p><Link href="/games/medusa" className="text-neon-pink hover:underline">Full Medusa Rules</Link></p>

      <h3>6. Slap Cup</h3>
      <p>Similar to Rage Cage but with more physical interaction. If you bounce in before the person to your right, slap their cup away and they must drink a middle cup.</p>
      <ul>
        <li><strong>Players:</strong> 6-15</li>
        <li><strong>Equipment:</strong> Many cups, 2 ping pong balls</li>
        <li><strong>Time per game:</strong> 10-15 minutes</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Satisfying slap mechanic, constant action, builds energy</li>
      </ul>
      <p><Link href="/games/slap-cup" className="text-neon-pink hover:underline">Full Slap Cup Rules</Link></p>

      <h3>7. Stack Cup</h3>
      <p>Variation where you stack your cup onto the next player&apos;s if you bounce in first. Creates a growing tower of cups that makes bouncing harder and harder.</p>
      <ul>
        <li><strong>Players:</strong> 6-15</li>
        <li><strong>Equipment:</strong> Many cups, 2 ping pong balls</li>
        <li><strong>Time per game:</strong> 10-15 minutes</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Visual chaos as stacks grow, exciting finishes</li>
      </ul>

      <h3>8. Jenga Speed Round</h3>
      <p>Drunk Jenga but with a timer - only 10 seconds per pull. Miss the timer? Drink. Tower falls? Finish your drink. Fast-paced tension.</p>
      <ul>
        <li><strong>Players:</strong> 2-8</li>
        <li><strong>Equipment:</strong> Jenga set, timer</li>
        <li><strong>Time per game:</strong> 10-20 minutes</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Physical game, builds tension quickly, natural endpoint</li>
      </ul>

      <h3>9. Shot Roulette</h3>
      <p>Spin a bottle or use a spinner app. Whoever it lands on takes a shot. Simple randomness that keeps everyone on edge.</p>
      <ul>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Equipment:</strong> Bottle or spinner app, shots</li>
        <li><strong>Time per round:</strong> 30 seconds</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Minimal rules, builds anticipation, easy to stop anytime</li>
      </ul>

      <h3>10. Cheers to the Governor</h3>
      <p>Count from 1-21 around the circle. At 21, everyone cheers &quot;to the governor!&quot; and drinks. The person who says 21 makes a new rule (swap numbers, add actions, etc.).</p>
      <ul>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Time per round:</strong> 2-5 minutes</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Gets increasingly chaotic, lots of laughs, no setup</li>
      </ul>
      <p><Link href="/games/cheers-to-the-governor" className="text-neon-pink hover:underline">Full Cheers to the Governor Rules</Link></p>

      <h3>11. Task Master</h3>
      <p>One person is the Task Master for a round. They give quick challenges (&quot;last person to touch their nose drinks&quot;). Rotate Task Master each round.</p>
      <ul>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Time per round:</strong> 1-2 minutes</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Interactive, keeps everyone alert, infinitely variable</li>
      </ul>

      <h3>12. Drink or Dare</h3>
      <p>Quick version of Truth or Dare - just dares. Refuse a dare? Take a shot. Accept and fail? Take a shot. Keep dares short and party-appropriate.</p>
      <ul>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Time per round:</strong> 1-3 minutes</li>
        <li><strong>Why it&apos;s perfect for pregaming:</strong> Gets people out of their shell, builds party energy</li>
      </ul>

      <h2>The Science of Pregaming</h2>

      <h3>Why Pregame?</h3>
      <p>Pregaming isn&apos;t just about saving money (though that&apos;s a bonus). It&apos;s about:</p>
      <ul>
        <li><strong>Group bonding</strong> - Arrive at the venue already connected</li>
        <li><strong>Energy building</strong> - Walk in ready to party, not warming up</li>
        <li><strong>Comfort level</strong> - Social lubricant before the main event</li>
        <li><strong>Pace control</strong> - Know exactly how much you&apos;re drinking</li>
      </ul>

      <h3>Optimal Pregame Timeline</h3>
      <ul>
        <li><strong>2 hours before:</strong> Start getting ready, put on music</li>
        <li><strong>1.5 hours before:</strong> Guests arrive, casual drinks</li>
        <li><strong>1 hour before:</strong> First pregame game (Flip Cup, Rage Cage)</li>
        <li><strong>30 min before:</strong> Final game or Power Hour wrap-up</li>
        <li><strong>15 min before:</strong> Bathroom breaks, grab coats, order rides</li>
        <li><strong>Leave time:</strong> Head out while energy is high!</li>
      </ul>

      <h2>Essential Pregame Tips</h2>

      <h3>Food and Hydration</h3>
      <ul>
        <li><strong>Eat first</strong> - Never pregame on an empty stomach</li>
        <li><strong>Water station</strong> - Keep water accessible throughout</li>
        <li><strong>Light snacks</strong> - Chips, pretzels, easy finger foods</li>
        <li><strong>Avoid heavy meals</strong> - You&apos;ll feel sluggish later</li>
      </ul>

      <h3>Pacing Yourself</h3>
      <ul>
        <li><strong>Remember the goal</strong> - You&apos;re going OUT after this</li>
        <li><strong>Light drinks</strong> - Beer and seltzers over liquor</li>
        <li><strong>Know your limits</strong> - Save some energy for the venue</li>
        <li><strong>It&apos;s a warmup</strong> - Not the main event</li>
      </ul>

      <h3>Logistics</h3>
      <ul>
        <li><strong>Plan transportation</strong> - Uber, Lyft, or DD sorted in advance</li>
        <li><strong>Entry requirements</strong> - IDs ready, know the venue&apos;s policy</li>
        <li><strong>Essentials only</strong> - Don&apos;t bring valuables to the bar</li>
        <li><strong>Group accountability</strong> - Buddy system in place</li>
      </ul>

      <h2>Pregame Game Selection by Situation</h2>

      <h3>Quick Warmup (30 min or less)</h3>
      <ul>
        <li><strong>Thunderstruck</strong> - One song, done</li>
        <li><strong>Medusa</strong> - 5-10 rounds, instant energy</li>
        <li><strong>Shot Roulette</strong> - Fast and random</li>
      </ul>

      <h3>Standard Pregame (1 hour)</h3>
      <ul>
        <li><strong>Flip Cup tournament</strong> - Multiple rounds</li>
        <li><strong>Rage Cage</strong> - Gets everyone moving</li>
        <li><strong>Half Power Hour</strong> - Perfect pacing</li>
      </ul>

      <h3>Extended Pregame (1.5-2 hours)</h3>
      <ul>
        <li><strong>Full Power Hour</strong> - Background drinking while getting ready</li>
        <li><strong>Multiple games rotation</strong> - Mix it up</li>
        <li><strong>Tournament style</strong> - Flip Cup bracket</li>
      </ul>

      <h3>Small Group (4-5 people)</h3>
      <ul>
        <li><strong>Cheers to the Governor</strong> - Works perfectly</li>
        <li><strong>Drink or Dare</strong> - Intimate and fun</li>
        <li><strong>Speed Jenga</strong> - Physical challenge</li>
      </ul>

      <h3>Large Group (10+)</h3>
      <ul>
        <li><strong>Flip Cup</strong> - Scales infinitely</li>
        <li><strong>Rage Cage</strong> - Everyone plays at once</li>
        <li><strong>Thunderstruck</strong> - The more the merrier</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Drinking Games for Parties</Link></li>
        <li><Link href="/guides/college-drinking-games" className="text-neon-pink hover:underline">College Drinking Games</Link></li>
        <li><Link href="/guides/classic-drinking-games" className="text-neon-pink hover:underline">Classic Drinking Games</Link></li>
        <li><Link href="/guides/quick-drinking-games" className="text-neon-pink hover:underline">Quick Drinking Games</Link></li>
      </ul>
    </GuideLayout>
  );
}
