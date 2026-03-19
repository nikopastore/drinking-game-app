import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pool Party Drinking Games (2024) | Swimming Pool Games",
  description: "Best drinking games for pool parties! Complete guide with in-pool games, poolside competitions, floating beer pong, and essential water safety tips.",
  keywords: ["pool party drinking games", "pool drinking games", "swimming pool drinking games", "poolside drinking games", "water drinking games", "pool beer pong"],
  openGraph: { title: "Pool Party Drinking Games", description: "Splash and sip!", type: "article", url: "https://sipwiki.app/guides/pool-party-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/pool-party-drinking-games" },
};

export default function PoolPartyDrinkingGamesPage() {
  return (
    <GuideLayout title="Pool Party Drinking Games" description="Make a splash with these pool-perfect drinking games. Whether you're floating in the water or lounging on the deck, we've got games for every zone of your pool party." breadcrumb="Pool Party" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "Poolside classic" }, { name: "Beer Pong", slug: "beer-pong", description: "Pool deck essential" }, { name: "Rage Cage", slug: "rage-cage", description: "Dry zone game" }]}>
      <h2>Pool Party Zones</h2>
      <p>Different areas need different games:</p>
      <ul>
        <li><strong>In the pool</strong> - Water-based games, floating equipment</li>
        <li><strong>Pool edge</strong> - Half in, half out games</li>
        <li><strong>Deck/patio</strong> - Traditional games, food and drink zone</li>
        <li><strong>Lounge area</strong> - Chill games, conversation games</li>
      </ul>

      <h2>In-Pool Games</h2>

      <h3>Floating Beer Pong</h3>
      <p>The crown jewel of pool drinking games.</p>
      <ul>
        <li>Use floating beer pong racks (inflatable or foam)</li>
        <li>Teams on opposite ends of the pool</li>
        <li>Throw ping pong balls into opponent&apos;s cups</li>
        <li>Made cup = opponent drinks and removes cup</li>
        <li>Re-racks at 6 and 3 cups</li>
        <li>Eliminate all cups to win</li>
      </ul>
      <p>Pro tip: Weight the cups slightly or use heavier plastic cups - wind and waves knock them over.</p>
      <p><Link href="/games/beer-pong" className="text-neon-pink">Beer Pong rules →</Link></p>

      <h3>Chicken Fight Tournament</h3>
      <p>Classic pool game with drinking stakes.</p>
      <ul>
        <li>Teams of 2: one person on shoulders</li>
        <li>Top person tries to knock opponent&apos;s top person into water</li>
        <li>Losing team takes a drink</li>
        <li>Run a bracket tournament</li>
        <li>Champions assign drinks to losers&apos; bracket</li>
      </ul>

      <h3>Marco Polo Drinking Edition</h3>
      <p>The childhood classic, grown up.</p>
      <ul>
        <li>&quot;Marco&quot; is blindfolded (eyes closed) in the pool</li>
        <li>Marco calls &quot;Marco!&quot; - others must respond &quot;Polo!&quot;</li>
        <li>Marco tries to tag someone</li>
        <li>Get tagged? You&apos;re Marco next AND you drink</li>
        <li>If Marco gives up, Marco drinks</li>
      </ul>
      <p>Add house rule: leaving the pool when Marco isn&apos;t looking = 2 drinks if caught.</p>

      <h3>Pool Volleyball + Drinks</h3>
      <p>Set up a net across the pool.</p>
      <ul>
        <li>Standard volleyball rules</li>
        <li>Losing team of each point drinks</li>
        <li>Ball hits water = that side drinks</li>
        <li>Spike into face = person who spiked drinks (oops)</li>
        <li>Play to 11, win by 2</li>
      </ul>

      <h3>Treasure Hunt</h3>
      <p>Diving game with drink rewards.</p>
      <ul>
        <li>Throw waterproof items into pool (coins, pool toys)</li>
        <li>Everyone dives to collect</li>
        <li>Most items collected assigns drinks</li>
        <li>Least items drinks their count</li>
        <li>Gold item = immunity from drinking that round</li>
      </ul>

      <h3>Relay Races</h3>
      <p>Teams race across the pool.</p>
      <ul>
        <li>Swim to other side, tag teammate, they swim back</li>
        <li>Losing team drinks one per person</li>
        <li>Variations: one arm only, backwards, underwater</li>
        <li>Holding a drink above water while swimming = advanced mode</li>
      </ul>

      <h2>Pool Edge Games</h2>

      <h3>Cannonball Competition</h3>
      <p>Who makes the biggest splash?</p>
      <ul>
        <li>Everyone takes turns doing cannonballs</li>
        <li>Group judges splash size (1-10)</li>
        <li>Lowest score drinks</li>
        <li>Best cannonball gets immunity next round</li>
        <li>Belly flop = drink but earn respect</li>
      </ul>

      <h3>Dive Competition</h3>
      <p>For pools deep enough.</p>
      <ul>
        <li>Take turns diving (or jumping creatively)</li>
        <li>Group rates style, splash, form</li>
        <li>Bottom three drinkers</li>
        <li>Perfect 10 assigns drinks</li>
      </ul>

      <h3>Pool Noodle Jousting</h3>
      <p>Medieval combat, wet edition.</p>
      <ul>
        <li>Two people on pool floats</li>
        <li>Each has a pool noodle</li>
        <li>Try to knock opponent off their float</li>
        <li>Fall in = drink</li>
        <li>Bracket tournament style</li>
      </ul>

      <h2>Poolside (Dry Zone) Games</h2>

      <h3>Flip Cup</h3>
      <p>The perfect deck game - competitive and fast.</p>
      <ul>
        <li>Set up on a table near the pool (but not IN the pool)</li>
        <li>Standard flip cup rules</li>
        <li>Losing team jumps in the pool</li>
        <li>Or: losers do a lap in the pool before next round</li>
      </ul>
      <p><Link href="/games/flip-cup" className="text-neon-pink">Play Flip Cup →</Link></p>

      <h3>Rage Cage</h3>
      <p>Keep it away from the pool edge.</p>
      <ul>
        <li>Need a solid table and cups</li>
        <li>Standard rage cage rules apply</li>
        <li>Death cup = jump in pool then drink</li>
      </ul>
      <p><Link href="/games/rage-cage" className="text-neon-pink">Play Rage Cage →</Link></p>

      <h3>Kings Cup</h3>
      <p>Works great at a poolside table.</p>
      <ul>
        <li>Add pool-specific rules:</li>
        <li>2 = &quot;Pool&quot; - pick someone to get in the pool</li>
        <li>5 = &quot;Dive&quot; - guys get in pool</li>
        <li>8 = &quot;Date in the Pool&quot; - pick someone to join you in water</li>
      </ul>
      <p><Link href="/games/kings-cup" className="text-neon-pink">Play Kings Cup →</Link></p>

      <h2>Lounge/Float Games</h2>

      <h3>Never Have I Ever</h3>
      <p>Perfect while floating on pool loungers.</p>
      <ul>
        <li>Everyone floats with drink in hand</li>
        <li>Standard rules - put down fingers if you&apos;ve done it</li>
        <li>Lose all fingers = get dunked by nearest person</li>
      </ul>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink">Play Never Have I Ever →</Link></p>

      <h3>Most Likely To</h3>
      <p>Great for lazy river vibes.</p>
      <ul>
        <li>Float around asking questions</li>
        <li>Point at whoever you think is most likely to</li>
        <li>Most votes drinks</li>
        <li>No getting out of the pool to avoid drinking</li>
      </ul>
      <p><Link href="/games/most-likely-to" className="text-neon-pink">Play Most Likely To →</Link></p>

      <h2>Pool Party Safety</h2>

      <h3>Non-Negotiable Rules</h3>
      <ul>
        <li><strong>Designate a sober watcher</strong> - Someone who monitors pool safety</li>
        <li><strong>No glass</strong> - Plastic cups and bottles only</li>
        <li><strong>Know swimming ability</strong> - Don&apos;t let weak swimmers play in deep end</li>
        <li><strong>Hydration</strong> - Sun + alcohol = dehydration fast</li>
        <li><strong>Sunscreen</strong> - Drunk sunburn is real and painful</li>
        <li><strong>Breaks</strong> - Regular time out of water</li>
      </ul>

      <h3>Pacing Tips</h3>
      <ul>
        <li>Pool parties are long - pace yourself</li>
        <li>Alternate alcoholic drinks with water</li>
        <li>Eat food (BBQ goes great with pool parties)</li>
        <li>Take shade breaks</li>
        <li>If you feel too drunk, get out of the pool and rest</li>
      </ul>

      <h3>Equipment Safety</h3>
      <ul>
        <li>Secure floating equipment so it doesn&apos;t drift</li>
        <li>No running on wet deck</li>
        <li>Check water depth before diving</li>
        <li>Keep electronics away from water</li>
      </ul>

      <h2>Pool Party Drink Ideas</h2>
      <ul>
        <li><strong>Canned drinks</strong> - No glass, easy to hold, stays cold</li>
        <li><strong>Frozen cocktails</strong> - Slushie drinks in plastic cups</li>
        <li><strong>Beer koozies</strong> - Keep drinks cold, float if dropped</li>
        <li><strong>Jello shots</strong> - Portable, no spill risk</li>
        <li><strong>Hard seltzer</strong> - Light, refreshing in heat</li>
      </ul>

      <h2>Setup Checklist</h2>
      <ul>
        <li>Floating beer pong set</li>
        <li>Pool noodles for jousting</li>
        <li>Waterproof bluetooth speaker</li>
        <li>Plastic cups (lots of them)</li>
        <li>Cooler near the pool</li>
        <li>Towels accessible</li>
        <li>Sunscreen station</li>
        <li>First aid kit nearby</li>
        <li>Floats and loungers</li>
      </ul>

      <p>More outdoor games: <Link href="/guides/beach-drinking-games" className="text-neon-pink hover:underline">beach games</Link> | <Link href="/guides/backyard-drinking-games" className="text-neon-pink hover:underline">backyard games</Link></p>
    </GuideLayout>
  );
}
