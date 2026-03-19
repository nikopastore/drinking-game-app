import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Camping Drinking Games (2024) | Campfire & Tent Games",
  description: "Drinking games perfect for camping! No electricity needed, minimal props. Complete guide with campfire games, card games, and wilderness drinking tips.",
  keywords: ["camping drinking games", "campfire drinking games", "outdoor drinking games camping", "tent drinking games", "hiking drinking games", "camp games adults"],
  openGraph: { title: "Best Camping Drinking Games", description: "Games for the great outdoors.", type: "article", url: "https://sipwiki.app/guides/camping-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/camping-drinking-games" },
};

export default function CampingDrinkingGamesPage() {
  return (
    <GuideLayout title="Best Camping Drinking Games" description="There's something magical about drinking games by firelight. No electricity, no distractions, just friends, flames, and cold drinks. These games work perfectly in the wilderness." breadcrumb="Camping Games" relatedGames={[{ name: "Never Have I Ever", slug: "never-have-i-ever", description: "No props needed" }, { name: "Most Likely To", slug: "most-likely-to", description: "Just need drinks" }, { name: "Kings Cup", slug: "kings-cup", description: "Bring a deck" }]}>
      <h2>What Makes a Good Camping Game</h2>
      <p>The wilderness has constraints that shape your game choices:</p>
      <ul>
        <li><strong>No electricity</strong> - Phone games die when batteries die</li>
        <li><strong>Limited light</strong> - Need to see faces and cards by firelight</li>
        <li><strong>Packable</strong> - Every ounce matters on the trail</li>
        <li><strong>Quiet options</strong> - Some campsites have quiet hours</li>
        <li><strong>Variable group sizes</strong> - People wander off and return</li>
      </ul>

      <h2>Campfire Circle Games (No Props)</h2>
      <p>Sitting around the fire with just drinks and friends? These are perfect:</p>

      <h3>Never Have I Ever</h3>
      <p>The campfire classic. Take turns stating things you&apos;ve never done. Anyone who HAS done it drinks. Camping version tends to go deeper - isolated settings encourage honesty.</p>
      <p><strong>Why it works camping:</strong> No setup, scales to any group, creates conversation between rounds.</p>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink">Full Never Have I Ever rules →</Link></p>

      <h3>Most Likely To</h3>
      <p>&quot;Who&apos;s most likely to get eaten by a bear?&quot; Everyone points. Most fingers = drink. The camping setting creates unique prompts.</p>
      <p><strong>Camping-specific prompts:</strong></p>
      <ul>
        <li>Who&apos;s most likely to forget the tent poles?</li>
        <li>Who would survive alone in the woods longest?</li>
        <li>Who&apos;s most likely to complain about bugs?</li>
        <li>Who would befriend a raccoon?</li>
      </ul>
      <p><Link href="/games/most-likely-to" className="text-neon-pink">Full Most Likely To rules →</Link></p>

      <h3>Truth or Drink</h3>
      <p>Answer honestly or take a sip. The firelight and isolation make people more willing to share. Gets deep fast.</p>
      <p><Link href="/games/truth-or-drink" className="text-neon-pink">Full Truth or Drink rules →</Link></p>

      <h3>Two Truths and a Lie</h3>
      <p>Each person says three statements - two true, one false. Group guesses the lie. Wrong guessers drink. Right guessers assign drinks.</p>

      <h3>Cheers to the Governor</h3>
      <p>Count to 21 around the circle. 7 and 14 are swapped. Mistakes = drink and restart. Each successful round adds a new rule. Perfect for the gradual chaos of a long night.</p>
      <p><Link href="/games/cheers-to-the-governor" className="text-neon-pink">Full Cheers to the Governor rules →</Link></p>

      <h3>Campfire Story Time</h3>
      <p>Tell a story one sentence at a time. Drink for:</p>
      <ul>
        <li>Using a cliché (&quot;dark and stormy night&quot;)</li>
        <li>Killing the main character</li>
        <li>Making it awkwardly sexual</li>
        <li>Story makes no sense</li>
      </ul>

      <h2>Card Games (Bring a Deck!)</h2>
      <p>One deck of cards weighs nothing and enables dozens of games:</p>

      <h3>Kings Cup</h3>
      <p>The all-time classic. Each card triggers a rule. Works perfectly by firelight - just make sure you can see the cards.</p>
      <p><strong>Camping tip:</strong> Use a headlamp or lantern for the card area.</p>
      <p><Link href="/games/kings-cup" className="text-neon-pink">Full Kings Cup rules →</Link></p>

      <h3>Ride the Bus</h3>
      <p>Four rounds of guessing, then a brutal bus ride for the loser. Creates dramatic moments.</p>
      <p><Link href="/games/ride-the-bus" className="text-neon-pink">Full Ride the Bus rules →</Link></p>

      <h3>Irish Poker</h3>
      <p>Quick rounds of guessing. Good for when people are wandering in and out.</p>
      <p><Link href="/games/irish-poker" className="text-neon-pink">Full Irish Poker rules →</Link></p>

      <h3>Higher or Lower</h3>
      <p>The simplest card game. Flip a card, guess if next is higher or lower. Wrong = drink. Can play with everyone or head-to-head.</p>

      <h2>Drinking Hike Games</h2>
      <p>For hikes with breaks or short trails:</p>
      <ul>
        <li><strong>Drink at every summit/viewpoint</strong> - Natural pacing</li>
        <li><strong>Last one to the marker</strong> - Slowest drinks</li>
        <li><strong>Wildlife bingo</strong> - Assign drinks for seeing specific animals</li>
        <li><strong>Trail rules</strong> - Drink when someone says &quot;beautiful&quot; or &quot;how much farther&quot;</li>
      </ul>
      <p><strong>Important:</strong> Keep alcohol minimal on actual hikes. Dehydration + altitude + alcohol = bad.</p>

      <h2>Rainy Tent Games</h2>
      <p>When rain traps you in the tent:</p>
      <ul>
        <li>Card games with headlamps</li>
        <li>Truth or Drink (low energy, high intimacy)</li>
        <li>20 Questions drinking version</li>
        <li>Storytelling games</li>
      </ul>

      <h2>Camping Drinking Logistics</h2>

      <h3>What to Pack</h3>
      <ul>
        <li><strong>Cans over bottles</strong> - Lighter, won&apos;t break, pack out easier</li>
        <li><strong>One deck of waterproof cards</strong> - Worth the $5</li>
        <li><strong>Collapsible cups</strong> - If you need cups for games</li>
        <li><strong>Cooler situation planned</strong> - Creek cooling, cooler, or drink warm</li>
      </ul>

      <h3>Keeping Drinks Cold</h3>
      <ul>
        <li><strong>Creek cooling</strong> - Put cans in a mesh bag, submerge in cold stream</li>
        <li><strong>Frozen water bottles</strong> - Start frozen, they&apos;ll melt into drinking water</li>
        <li><strong>Night cooling</strong> - Leave drinks out overnight in cold weather</li>
        <li><strong>Accept warm beer</strong> - Sometimes it&apos;s the only option</li>
      </ul>

      <h3>Leave No Trace</h3>
      <ul>
        <li>Pack out all cans and bottles</li>
        <li>Crush cans to save space</li>
        <li>Bring a dedicated trash bag</li>
        <li>No glass at any campsite - ever</li>
      </ul>

      <h2>Safety Reminders</h2>
      <ul>
        <li><strong>Hydrate extra</strong> - Altitude and activity increase dehydration</li>
        <li><strong>Fire safety</strong> - Drunk + campfire = danger. Designated fire watcher.</li>
        <li><strong>Wildlife</strong> - Store alcohol with food (bears love beer)</li>
        <li><strong>Temperature</strong> - Alcohol feels warming but actually drops body temp</li>
        <li><strong>Know your limits</strong> - Help is far away in the backcountry</li>
      </ul>

      <p>More outdoor games: <Link href="/guides/outdoor-drinking-games" className="text-neon-pink hover:underline">General outdoor games</Link> | <Link href="/guides/cabin-drinking-games" className="text-neon-pink hover:underline">Cabin games</Link></p>
    </GuideLayout>
  );
}
