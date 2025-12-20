import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "20 Best College Drinking Games (2024) | Dorm & Frat Party Games",
  description: "The definitive college drinking games list! From basement beer pong to dorm room cards. RA-proof options, frat classics, tailgate essentials, and freshman survival tips.",
  keywords: ["college drinking games", "frat party games", "dorm drinking games", "college party games", "university drinking games", "best college games", "21+ college games"],
  openGraph: { title: "20 Best College Drinking Games", description: "Games that defined the college experience.", type: "article", url: "https://sipwiki.app/guides/college-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/college-drinking-games" },
};

export default function CollegeDrinkingGamesPage() {
  return (
    <GuideLayout title="20 Best College Drinking Games" description="College is where drinking game skills are forged. From legendary basement tournaments to keeping it quiet for the RA, here's everything you need to know." breadcrumb="College Drinking Games" relatedGames={[{ name: "Beer Pong", slug: "beer-pong", description: "The undisputed king" }, { name: "Flip Cup", slug: "flip-cup", description: "Team relay classic" }, { name: "Rage Cage", slug: "rage-cage", description: "Intense elimination" }]}>
      <h2>The Essential Tier (Learn These First)</h2>
      <p>If you only learn a few games, make it these:</p>

      <h3>Beer Pong</h3>
      <p>The undisputed king. Two teams, 10 cups each, ping pong balls. Make a cup, opponent drinks it. First to clear the other team&apos;s cups wins.</p>
      <p><strong>Why it dominates college:</strong> Competitive, social, spectator-friendly, works at any party size.</p>
      <p><Link href="/game/beer-pong" className="text-neon-pink">Full Beer Pong rules →</Link></p>

      <h3>Flip Cup</h3>
      <p>Two teams, relay race style. Drink, flip your cup, next person goes. Fastest team wins. Pure chaos.</p>
      <p><strong>Why it&apos;s essential:</strong> Team bonding, easy to learn, gets competitive fast, works for large groups.</p>
      <p><Link href="/game/flip-cup" className="text-neon-pink">Full Flip Cup rules →</Link></p>

      <h3>Kings Cup</h3>
      <p>Cards in a circle around a center cup. Each card has a rule. Draw the last King = drink the King&apos;s Cup.</p>
      <p><strong>Why it&apos;s essential:</strong> Works in dorms (quiet), needs minimal space, customizable rules, classic for a reason.</p>
      <p><Link href="/game/kings-cup" className="text-neon-pink">Full Kings Cup rules →</Link></p>

      <h2>Dorm Room Games (RA-Proof)</h2>
      <p>Small spaces, thin walls, nosy RAs. These games keep it quiet:</p>

      <h3>Best Options:</h3>
      <ul>
        <li><strong><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link></strong> - Just cards, quiet gameplay</li>
        <li><strong><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link></strong> - Pure card game, no yelling needed</li>
        <li><strong><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link></strong> - Conversation volume</li>
        <li><strong><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></strong> - Pointing, not shouting</li>
        <li><strong><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link></strong> - Perfect for small groups</li>
      </ul>

      <h3>Dorm Survival Tips:</h3>
      <ul>
        <li>Keep music low or use headphones splitter</li>
        <li>Use opaque cups (not obvious from doorway)</li>
        <li>Know quiet hours in your building</li>
        <li>6-8 people max for dorm rooms</li>
        <li>Have a designated door-answerer</li>
        <li>Clean up before passing out - RAs do room checks</li>
      </ul>

      <h2>Frat/House Party Games</h2>
      <p>Big space, big energy, no rules:</p>

      <h3>Chaos Tier:</h3>
      <ul>
        <li><strong><Link href="/game/rage-cage" className="text-neon-pink">Rage Cage</Link></strong> - 10+ people, cups stacking, pure pandemonium</li>
        <li><strong><Link href="/game/slap-cup" className="text-neon-pink">Slap Cup</Link></strong> - Similar to Rage Cage, more aggressive</li>
        <li><strong><Link href="/game/civil-war" className="text-neon-pink">Civil War</Link></strong> - 3v3 beer pong on steroids, no turns</li>
        <li><strong><Link href="/game/chandelier" className="text-neon-pink">Chandelier</Link></strong> - Bouncing into cups, center cup chaos</li>
      </ul>

      <h3>Team Games:</h3>
      <ul>
        <li><strong><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link></strong> - Floor vs. floor, major vs. major</li>
        <li><strong>Baseball</strong> - Flip Cup meets innings</li>
        <li><strong>Survivor Flip Cup</strong> - Losers get eliminated each round</li>
      </ul>

      <h2>Tailgate Essentials</h2>
      <p>Pre-game the game with these:</p>
      <ul>
        <li><strong><Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link></strong> - Portable table setups exist</li>
        <li><strong><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link></strong> - Any flat surface works</li>
        <li><strong>Cornhole + drinking rules</strong> - Miss = drink, bag in hole = give drinks</li>
        <li><strong>Kan Jam + drinking rules</strong> - Deflection = drink, instant win = everyone drinks</li>
        <li><strong><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></strong> - No equipment needed</li>
      </ul>

      <h3>Tailgate Tips:</h3>
      <ul>
        <li>Coolers with ice are essential</li>
        <li>Plastic cups only (no glass at stadiums)</li>
        <li>Know your campus alcohol policy</li>
        <li>Start early, pace yourself for the actual game</li>
        <li>Designated driver arranged BEFORE drinking</li>
      </ul>

      <h2>Games by Situation</h2>

      <h3>Pregame (Before Going Out)</h3>
      <ul>
        <li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - 30-45 min, perfect warm-up</li>
        <li><Link href="/game/ride-the-bus" className="text-neon-pink">Ride the Bus</Link> - Quick rounds</li>
        <li><Link href="/guides/power-hour-rules" className="text-neon-pink">Power Hour</Link> - 60 shots in 60 minutes</li>
      </ul>

      <h3>After the Bars Close</h3>
      <ul>
        <li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Low energy required</li>
        <li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Just pointing</li>
        <li>Movie drinking game - Put something on, add rules</li>
      </ul>

      <h3>Meeting New People</h3>
      <ul>
        <li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Learn about people fast</li>
        <li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Rules help break the ice</li>
        <li><Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> - Team format forces mixing</li>
      </ul>

      <h2>Freshman Mistakes to Avoid</h2>
      <ul>
        <li><strong>Don&apos;t try to impress with drinking speed</strong> - No one cares, and you&apos;ll regret it</li>
        <li><strong>Eat before drinking</strong> - Seriously</li>
        <li><strong>Know the rules before jumping in</strong> - Asking mid-game is annoying</li>
        <li><strong>Pace yourself</strong> - You have 4 years of this</li>
        <li><strong>Water is your friend</strong> - Between drinks, before bed</li>
        <li><strong>Uber/Lyft exists</strong> - Never drive, never let friends drive</li>
        <li><strong>Know your limits</strong> - Blacking out isn&apos;t cool, it&apos;s dangerous</li>
      </ul>

      <h2>Creating Your Own College Traditions</h2>
      <p>The best college drinking games are the ones with house rules your friend group creates. Add special rules for:</p>
      <ul>
        <li>Specific professors or classes mentioned</li>
        <li>Inside jokes</li>
        <li>Your school&apos;s mascot/rival</li>
        <li>Birthday rules for the celebration person</li>
      </ul>

      <p>Explore more: <Link href="/games" className="text-neon-pink hover:underline">Browse all drinking games</Link> | <Link href="/guides/dorm-drinking-games" className="text-neon-pink hover:underline">Dorm-specific games</Link></p>
    </GuideLayout>
  );
}
