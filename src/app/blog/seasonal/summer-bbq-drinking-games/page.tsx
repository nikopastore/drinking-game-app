import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Summer BBQ Drinking Games: 20+ Outdoor Party Games (2025)",
  description: "The best outdoor drinking games for your summer BBQ! From lawn games to pool party classics, make your backyard cookout legendary with these fun drinking games.",
  keywords: [
    "summer drinking games",
    "BBQ drinking games",
    "outdoor drinking games",
    "backyard party games",
    "cookout drinking games",
    "lawn drinking games",
    "pool party drinking games",
    "summer party games 2025"
  ],
  openGraph: {
    title: "Summer BBQ Drinking Games: The Ultimate Backyard Party Guide",
    description: "20+ outdoor drinking games perfect for your summer BBQ and cookout.",
    type: "article",
    url: "https://sipwiki.app/blog/seasonal/summer-bbq-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/seasonal/summer-bbq-drinking-games",
  },
};

export default function SummerBBQDrinkingGamesPage() {
  return (
    <BlogLayout
      title="Summer BBQ Drinking Games: The Ultimate Backyard Party Guide"
      description="Make your summer cookout unforgettable with these 20+ outdoor drinking games. From classic lawn games to creative new additions, we've got games for every backyard party."
      author="party-pro"
      publishDate="2025-05-01"
      category="Seasonal"
      categorySlug="seasonal"
      readTime="15 min"
      tableOfContents={[
        { id: "lawn-games", title: "Lawn Game Drinking Rules" },
        { id: "pool-games", title: "Pool Party Games" },
        { id: "grill-master", title: "Grill Master Games" },
        { id: "table-games", title: "Picnic Table Games" },
        { id: "supplies", title: "BBQ Party Essentials" },
      ]}
      relatedArticles={[
        { title: "Outdoor Drinking Games Guide", slug: "../guides/outdoor-drinking-games", description: "Complete outdoor game rules" },
        { title: "Backyard Drinking Games", slug: "../guides/backyard-drinking-games", description: "Best games for your yard" },
        { title: "Pool Party Drinking Games", slug: "../guides/pool-party-drinking-games", description: "Games for the pool" },
      ]}
    >
      <p className="lead">
        Nothing says summer like a backyard BBQ with friends. These outdoor drinking games
        will keep the party going from the first burger to the final sunset. Whether you have
        a pool, a big lawn, or just a patio, we&apos;ve got games for every setup.
      </p>

      <h2 id="lawn-games">Lawn Game Drinking Rules</h2>
      <p>
        Turn classic backyard games into drinking games with these simple rule additions.
      </p>

      <h3>Cornhole Drinking Rules</h3>
      <p>The BBQ classic, enhanced:</p>
      <ul>
        <li><strong>Bag on board (1 point):</strong> Opponents drink 1</li>
        <li><strong>Bag in hole (3 points):</strong> Opponents drink 3</li>
        <li><strong>Shutout (21-0):</strong> Losing team finishes their drinks</li>
        <li><strong>Miss the board entirely:</strong> Thrower drinks 2</li>
        <li><strong>Knock opponent&apos;s bag in:</strong> You drink for helping them</li>
      </ul>

      <h3>Ladder Golf/Ladder Toss</h3>
      <ul>
        <li><strong>Top rung (3 points):</strong> Opponents drink 3</li>
        <li><strong>Middle rung (2 points):</strong> Opponents drink 2</li>
        <li><strong>Bottom rung (1 point):</strong> Opponents drink 1</li>
        <li><strong>Both bolas on same rung:</strong> Opponents take a shot</li>
        <li><strong>Bounce shot that lands:</strong> Double points, double drinks</li>
      </ul>

      <h3>Kan Jam Drinking Rules</h3>
      <ul>
        <li><strong>Dinger (1 point):</strong> Opponents drink 1</li>
        <li><strong>Deuce (2 points):</strong> Opponents drink 2</li>
        <li><strong>Bucket (3 points):</strong> Opponents drink 3</li>
        <li><strong>Instant Win (through the slot):</strong> Opponents finish their drinks AND take a shot</li>
      </ul>

      <h3>Giant Jenga</h3>
      <p>Write rules on the blocks for <Link href="/guides/drunk-jenga-rules" className="text-neon-pink hover:underline">Drunk Jenga</Link>:</p>
      <ul>
        <li>Some blocks: &quot;Take a drink&quot;</li>
        <li>Some blocks: &quot;Give a drink&quot;</li>
        <li>Some blocks: &quot;Everyone drinks&quot;</li>
        <li>Some blocks: Challenges or rules</li>
        <li><strong>Tower falls:</strong> You finish your drink</li>
      </ul>

      <h3>Horseshoes</h3>
      <ul>
        <li><strong>Ringer (3 points):</strong> Opponents drink 3</li>
        <li><strong>Leaner (2 points):</strong> Opponents drink 2</li>
        <li><strong>Closest shoe (1 point):</strong> Opponents drink 1</li>
        <li><strong>Both ringers in one turn:</strong> Opponents take a shot</li>
      </ul>

      <h2 id="pool-games">Pool Party Drinking Games</h2>
      <p>
        If you&apos;re lucky enough to have a pool, these games are perfect for hot summer days.
        Safety first - no diving after drinking!
      </p>

      <h3>Floating Beer Pong</h3>
      <p>
        Set up <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link> on
        inflatable rafts or floating platforms:
      </p>
      <ul>
        <li>All standard Beer Pong rules apply</li>
        <li>Waves add extra difficulty</li>
        <li>Players can splash to distract (but not touch cups)</li>
        <li>Ball lands in pool = re-throw</li>
      </ul>

      <h3>Pool Noodle Jousting</h3>
      <ul>
        <li>Two players on floats with pool noodles</li>
        <li>Try to knock opponent into water</li>
        <li>Loser drinks</li>
        <li>If both fall, both drink</li>
      </ul>

      <h3>Marco Polo Drinking Edition</h3>
      <ul>
        <li>Classic Marco Polo rules</li>
        <li>If caught, you drink and become &quot;it&quot;</li>
        <li>If &quot;it&quot; says &quot;Fish out of water&quot; and someone is out, that person drinks double</li>
        <li>Every 3 minutes without a catch, &quot;it&quot; drinks</li>
      </ul>

      <h3>Chicken Fight Tournament</h3>
      <ul>
        <li>Classic chicken fight on shoulders</li>
        <li>Losing team drinks</li>
        <li>If both teams fall, everyone drinks</li>
        <li>Tournament style - final losers take shots</li>
      </ul>

      <h2 id="grill-master">Grill Master Games</h2>
      <p>
        Games centered around the BBQ grill and the person running it.
      </p>

      <h3>Grill Master Says</h3>
      <p>The person grilling becomes the game master:</p>
      <ul>
        <li>Grill Master can give out drinks at any time</li>
        <li>Anyone who criticizes the cooking drinks double</li>
        <li>Complimenting the food = Grill Master drinks</li>
        <li>Asking &quot;Is it done yet?&quot; = You drink</li>
      </ul>

      <h3>Burger Flip Challenge</h3>
      <ul>
        <li>Grill Master attempts a burger flip</li>
        <li>Success = Everyone cheers and drinks</li>
        <li>Failure = Grill Master drinks</li>
        <li>Burger falls on ground = Grill Master takes a shot</li>
      </ul>

      <h3>Hot Dog Eating Contest (Modified)</h3>
      <ul>
        <li>First to finish a hot dog gives out 3 drinks</li>
        <li>Last to finish takes 3 drinks</li>
        <li>Can&apos;t drink until you finish eating</li>
      </ul>

      <h2 id="table-games">Picnic Table Games</h2>
      <p>
        Classic drinking games perfect for outdoor tables.
      </p>

      <h3>Flip Cup Tournament</h3>
      <p>
        The ultimate team game for BBQs. See our full <Link href="/guides/flip-cup-rules" className="text-neon-pink hover:underline">Flip Cup rules</Link>.
      </p>

      <h3>Rage Cage</h3>
      <p>
        High-energy game perfect for outdoor tables. Check out <Link href="/guides/rage-cage-rules" className="text-neon-pink hover:underline">Rage Cage rules</Link>.
      </p>

      <h3>Slap Cup</h3>
      <p>
        Similar to Rage Cage with more player interaction. See <Link href="/guides/slap-cup-rules" className="text-neon-pink hover:underline">Slap Cup rules</Link>.
      </p>

      <h3>Kings Cup</h3>
      <p>
        The card game classic works great outdoors. Full rules at <Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup guide</Link>.
      </p>

      <h2 id="supplies">BBQ Party Essentials</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-white mb-4">Game Supplies</h4>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Cornhole boards and bags</li>
            <li>✓ Ladderball set</li>
            <li>✓ Giant Jenga</li>
            <li>✓ Kan Jam</li>
            <li>✓ Solo cups (red AND blue)</li>
            <li>✓ Ping pong balls</li>
            <li>✓ Playing cards (waterproof)</li>
            <li>✓ Floating beer pong table</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-white mb-4">Drink Setup</h4>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Large coolers with ice</li>
            <li>✓ Beer (light for hot weather)</li>
            <li>✓ Seltzers and hard lemonades</li>
            <li>✓ Cocktail mixers</li>
            <li>✓ LOTS of water</li>
            <li>✓ Koozies (keep drinks cold)</li>
            <li>✓ Backup ice</li>
            <li>✓ Shade for drink station</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Summer Safety Tips</h3>
        <ul className="text-gray-300 space-y-2">
          <li><strong>Hydration:</strong> Drink water between alcoholic drinks - sun + alcohol = dehydration fast</li>
          <li><strong>Sunscreen:</strong> Drunk sunburns are no joke - reapply regularly</li>
          <li><strong>Pool safety:</strong> No diving, no swimming alone, designate a sober watcher</li>
          <li><strong>Shade:</strong> Set up games in shaded areas when possible</li>
          <li><strong>Food:</strong> Keep eating throughout the party</li>
        </ul>
      </div>

      <h2>Weather Contingencies</h2>
      <p>Summer weather can be unpredictable. Have backup plans:</p>
      <ul>
        <li><strong>Rain:</strong> Move games under covered patio or garage</li>
        <li><strong>Extreme heat:</strong> Schedule games for morning or evening</li>
        <li><strong>Wind:</strong> Weight down cup games, switch to physical games</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Ready for Summer?</h3>
        <p className="text-gray-400 mb-4">
          Check out our full guides for all the games mentioned above.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/outdoor-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Outdoor Games Guide →
          </Link>
          <Link
            href="/games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Browse All Games
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
