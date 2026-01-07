import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Beach Drinking Games | Games for Beach Days & Shore Parties",
  description: "Top drinking games for the beach! Sand-friendly games, minimal setup, and activities perfect for beach days, shore parties, and lakeside hangouts.",
  keywords: ["beach drinking games", "drinking games for beach", "beach party games", "sand drinking games", "shore drinking games", "lake drinking games"],
  openGraph: { title: "15 Best Beach Drinking Games", description: "Sun, sand, and sips!", type: "article", url: "https://sipwiki.app/guides/beach-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/beach-drinking-games" },
};

export default function BeachDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Beach Drinking Games"
      description="Sand between your toes, drink in hand, sun overhead. These games are perfect for beach days - minimal setup, sand-friendly, and maximum summer vibes."
      breadcrumb="Beach Games"
      relatedGames={[
        { name: "Most Likely To", slug: "most-likely-to", description: "No setup needed" },
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Perfect for lounging" },
        { name: "Flip Cup", slug: "flip-cup", description: "Beach classic" },
      ]}
    >
      <QuickAnswer
        question="What are the best drinking games for the beach?"
        answer="The best beach drinking games are Spikeball with drinking rules, Kan Jam, beach Bocce Ball, and low-setup games like Most Likely To and Never Have I Ever. For the beach, choose games that don't require tables, work in sand, and can handle wind and sun. Avoid anything with cards (they blow away) or too much equipment."
        tips={[
          "Bring koozies to keep drinks cold and sand-free",
          "Check local open container laws first",
          "Hydrate with water between drinks",
          "Pack out everything you bring in"
        ]}
        variant="primary"
      />

      <h2>Active Beach Games with Drinking Rules</h2>

      <h3>1. Spikeball</h3>
      <p>The perfect beach game already - add drinking rules and it&apos;s even better. 2v2 game where you spike a ball off a circular net. Fast-paced and athletic.</p>
      <ul>
        <li><strong>Equipment:</strong> Spikeball set</li>
        <li><strong>Players:</strong> 4</li>
        <li><strong>Drinking rules:</strong></li>
        <li>Lose a rally = drink</li>
        <li>Ball gets pocketed (stuck) = drink 2</li>
        <li>Lose game = finish drink</li>
        <li>Shutout = loser chugs</li>
      </ul>

      <h3>2. Kan Jam</h3>
      <p>Frisbee game with a slot target. Partners alternate throwing and deflecting the disc. Beach sand makes deflecting easier.</p>
      <ul>
        <li><strong>Equipment:</strong> Kan Jam set</li>
        <li><strong>Players:</strong> 4</li>
        <li><strong>Drinking rules:</strong></li>
        <li>Complete miss = 1 drink</li>
        <li>Dinger (partner deflects in) = opponents drink 2</li>
        <li>Deuce (direct hit) = opponents drink 1</li>
        <li>Instant win (slot) = opponents finish drinks</li>
      </ul>

      <h3>3. Beach Bocce Ball</h3>
      <p>Roll balls as close to the pallino (target ball) as possible. Works great on sand, and the drinking rules add strategy.</p>
      <ul>
        <li><strong>Equipment:</strong> Bocce set</li>
        <li><strong>Players:</strong> 2-8</li>
        <li><strong>Drinking rules:</strong></li>
        <li>Closest ball = give 1 drink per point scored</li>
        <li>Hit the pallino = give 2 drinks</li>
        <li>Knock opponent away = they drink 1</li>
        <li>Frame winner assigns drinks</li>
      </ul>

      <h3>4. Frisbee Golf</h3>
      <p>Set up targets around the beach (cooler, umbrella, towel pile). Count throws to hit each target. Over par = drinks.</p>
      <ul>
        <li><strong>Equipment:</strong> Frisbee, designated targets</li>
        <li><strong>Players:</strong> 2-6</li>
        <li><strong>Drinking rules:</strong></li>
        <li>Each throw over par = 1 drink</li>
        <li>Hit par = no drinking</li>
        <li>Under par = give drinks to others</li>
        <li>Hole in one = everyone else drinks 3</li>
      </ul>

      <h3>5. Beach Volleyball</h3>
      <p>If you&apos;re at a beach with a net, add drinking rules. Works best with casual games, not competitive play.</p>
      <ul>
        <li><strong>Equipment:</strong> Net, volleyball</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Drinking rules:</strong></li>
        <li>Lose a point = drink</li>
        <li>Get aced = drink 2</li>
        <li>Ball goes out of bounds on your hit = drink</li>
        <li>Lose game = finish drinks</li>
      </ul>

      <h3>6. Kadima (Paddle Ball)</h3>
      <p>Beach paddleball - keep the ball going as long as possible. The long rallies are satisfying, the misses are punishing.</p>
      <ul>
        <li><strong>Equipment:</strong> Paddle ball set</li>
        <li><strong>Players:</strong> 2</li>
        <li><strong>Drinking rules:</strong></li>
        <li>Drop the ball = drink</li>
        <li>Hit it out of reach (on purpose) = you drink</li>
        <li>Every 25 rally = opponent drinks</li>
        <li>Ball goes in water = both drink 2</li>
      </ul>

      <h2>No-Equipment Beach Games</h2>

      <h3>7. Most Likely To</h3>
      <p>Perfect for lounging on towels. Someone asks &quot;Who is most likely to...?&quot; and everyone points. Most fingers pointed at someone = they drink that many.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Beach advantage:</strong> Play while lying on towels, no movement required</li>
      </ul>
      <p><Link href="/game/most-likely-to" className="text-neon-pink hover:underline">Full Most Likely To Rules</Link></p>

      <h3>8. Never Have I Ever</h3>
      <p>The ultimate no-equipment game. &quot;Never have I ever...&quot; and everyone who HAS done it drinks. Perfect for lazy beach vibes.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-15</li>
        <li><strong>Beach advantage:</strong> Can play for hours while sunbathing</li>
      </ul>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink hover:underline">Full Never Have I Ever Rules</Link></p>

      <h3>9. Truth or Drink</h3>
      <p>Beach confessions! Answer honestly or drink. The relaxed beach vibe makes people more open.</p>
      <ul>
        <li><strong>Equipment:</strong> None (or question cards if you brought them)</li>
        <li><strong>Players:</strong> 2-10</li>
        <li><strong>Beach advantage:</strong> Intimate setting, good for couples or close friends</li>
      </ul>
      <p><Link href="/game/truth-or-drink" className="text-neon-pink hover:underline">Full Truth or Drink Rules</Link></p>

      <h3>10. Categories</h3>
      <p>Pick a category, go around naming things in it. Hesitate or repeat? Drink. Simple and endless.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Beach categories:</strong> Sunscreen brands, beach towns, fish, ocean creatures</li>
      </ul>

      <h3>11. Would You Rather</h3>
      <p>Two options, vote by raising hands. Minority drinks. Gets creative with beach-themed questions.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Sample beach questions:</strong></li>
        <li>Would you rather swim with sharks or jellyfish?</li>
        <li>Would you rather have sand in your sunscreen or salt in your eyes?</li>
        <li>Would you rather only go to the beach at sunrise or sunset?</li>
      </ul>

      <h2>Beach-Modified Classic Games</h2>

      <h3>12. Beach Flip Cup</h3>
      <p>Use a cooler lid or boogie board as your table. Cups don&apos;t flip as easily on uneven surfaces - that&apos;s the challenge.</p>
      <ul>
        <li><strong>Equipment:</strong> Plastic cups, flat surface</li>
        <li><strong>Players:</strong> 6-20</li>
        <li><strong>Beach tips:</strong> Wet sand is more stable, anchor your &quot;table&quot;</li>
      </ul>
      <p><Link href="/game/flip-cup" className="text-neon-pink hover:underline">Full Flip Cup Rules</Link></p>

      <h3>13. Sandcastle Drinking Game</h3>
      <p>Teams compete to build the best sandcastle in a set time. Judges rate them, losing team drinks based on score difference.</p>
      <ul>
        <li><strong>Equipment:</strong> Sand, water, creativity</li>
        <li><strong>Players:</strong> 4-12 (teams)</li>
        <li><strong>Drinking rules:</strong></li>
        <li>Last place team = finish drinks</li>
        <li>Sandcastle collapses = builder drinks</li>
        <li>Using hands only (no tools) = give drinks if you win</li>
      </ul>

      <h3>14. Beach Ball Bounce</h3>
      <p>Stand in a circle, keep a beach ball in the air. Each person gets one hit. Let it drop? Everyone drinks. Drop it yourself? Finish your drink.</p>
      <ul>
        <li><strong>Equipment:</strong> Beach ball</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Variation:</strong> Call someone&apos;s name before hitting - only they can hit it next</li>
      </ul>

      <h3>15. Bury and Drink</h3>
      <p>One person gets buried in sand. Others ask yes/no questions. Wrong answers = buried person directs who drinks. Escape attempt = they drink.</p>
      <ul>
        <li><strong>Equipment:</strong> Sand, a willing participant</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Best for:</strong> When someone wants to chill and be part of the game passively</li>
      </ul>

      <h2>Essential Beach Drinking Tips</h2>

      <h3>Keeping Drinks Cold</h3>
      <ul>
        <li><strong>Quality cooler</strong> - Worth the investment, ice lasts longer</li>
        <li><strong>Freeze drinks beforehand</strong> - They thaw into cold drinks</li>
        <li><strong>Koozies for everyone</strong> - Keep sand out, keep cold in</li>
        <li><strong>Bury the cooler</strong> - Sand insulates if no shade available</li>
        <li><strong>Ice refresh</strong> - Bring extra ice or know where to buy it nearby</li>
      </ul>

      <h3>Legal Considerations</h3>
      <ul>
        <li><strong>Check local laws</strong> - Many beaches prohibit alcohol</li>
        <li><strong>Discreet containers</strong> - Koozies and opaque cups if allowed</li>
        <li><strong>Know the penalties</strong> - Some places have serious fines</li>
        <li><strong>Private beaches</strong> - Often more lenient on rules</li>
        <li><strong>Time restrictions</strong> - Some beaches allow alcohol only at certain times</li>
      </ul>

      <h3>Sun and Hydration Safety</h3>
      <ul>
        <li><strong>Water ratio</strong> - For every drink, have one water</li>
        <li><strong>Electrolytes</strong> - Bring sports drinks or electrolyte packets</li>
        <li><strong>Shade breaks</strong> - Rotate into shade every hour</li>
        <li><strong>Sunscreen</strong> - Reapply every 2 hours, more if swimming</li>
        <li><strong>Peak hours</strong> - Drink less heavily 11 AM - 3 PM when sun is strongest</li>
      </ul>

      <h3>Beach Etiquette</h3>
      <ul>
        <li><strong>Space from families</strong> - Set up away from kids</li>
        <li><strong>Volume control</strong> - Music and shouting at reasonable levels</li>
        <li><strong>Pack out trash</strong> - Leave no trace of your party</li>
        <li><strong>Watch your belongings</strong> - Don&apos;t leave valuables unattended</li>
        <li><strong>Designated swimmer</strong> - Someone stays sober enough for water safety</li>
      </ul>

      <h2>What NOT to Bring to the Beach</h2>

      <h3>Games That Don&apos;t Work</h3>
      <ul>
        <li><strong>Cards</strong> - Blow away, get wet, get sandy</li>
        <li><strong>Beer Pong</strong> - No stable tables, cups fall over</li>
        <li><strong>Jenga</strong> - Sand + blocks = frustration</li>
        <li><strong>Dice games</strong> - Lost in sand immediately</li>
        <li><strong>Anything requiring electricity</strong> - Obviously</li>
      </ul>

      <h3>Problematic Drinks</h3>
      <ul>
        <li><strong>Glass bottles</strong> - Dangerous when broken, often illegal</li>
        <li><strong>Dark liquors in sun</strong> - Get too warm too fast</li>
        <li><strong>Creamy cocktails</strong> - Spoil in heat</li>
        <li><strong>Large containers</strong> - Hard to keep cold</li>
      </ul>

      <h2>Best Beach Drinks</h2>

      <ul>
        <li><strong>Canned seltzers</strong> - Light, refreshing, easy to carry</li>
        <li><strong>Canned cocktails</strong> - Pre-made margaritas, etc.</li>
        <li><strong>Light beer</strong> - Classic beach choice</li>
        <li><strong>Frozen drinks (pre-made)</strong> - Thaw in cooler</li>
        <li><strong>Wine in a box</strong> - Stays cold longer than bottles</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/backyard-drinking-games" className="text-neon-pink hover:underline">Backyard Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Drinking Games for Parties</Link></li>
        <li><Link href="/guides/outdoor-drinking-games" className="text-neon-pink hover:underline">Outdoor Drinking Games</Link></li>
        <li><Link href="/guides/pool-party-drinking-games" className="text-neon-pink hover:underline">Pool Party Drinking Games</Link></li>
      </ul>
    </GuideLayout>
  );
}
