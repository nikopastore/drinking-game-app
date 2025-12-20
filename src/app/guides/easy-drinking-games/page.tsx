import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Easy Drinking Games (2024) | Simple Rules, Maximum Fun",
  description: "The easiest drinking games with super simple rules! Anyone can learn these games in seconds. Complete guide with one-rule games, beginner favorites, and quick-start tips.",
  keywords: ["easy drinking games", "simple drinking games", "drinking games easy rules", "basic drinking games", "drinking games for beginners", "quick drinking games"],
  openGraph: { title: "Easy Drinking Games", description: "Simple rules, big fun!", type: "article", url: "https://sipwiki.app/guides/easy-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/easy-drinking-games" },
};

export default function EasyGamesPage() {
  return (
    <GuideLayout title="Easy Drinking Games" description="Don't want to explain complicated rules to drunk people? These games are dead simple - anyone can learn them in seconds and start having fun immediately. No rulebooks required." breadcrumb="Easy Games" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Point and drink" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Say it, drink if done" }, { name: "Higher or Lower", slug: "higher-or-lower", description: "Guess the card" }]}>
      <h2>What Makes a Drinking Game &quot;Easy&quot;</h2>
      <p>The best easy drinking games share these traits:</p>
      <ul>
        <li><strong>Explainable in one sentence</strong> - If it takes more than 30 seconds to explain, it&apos;s not easy</li>
        <li><strong>No memorization</strong> - No complex card rules or number sequences</li>
        <li><strong>Minimal props</strong> - Ideally nothing, or just cards</li>
        <li><strong>Drunk-proof</strong> - Still playable after several drinks</li>
        <li><strong>Instant start</strong> - No setup, no teams, no brackets</li>
      </ul>

      <h2>One-Sentence Games</h2>
      <p>These games can literally be explained in a single sentence:</p>

      <h3>Most Likely To</h3>
      <p><strong>Rule:</strong> &quot;Who&apos;s most likely to [do something]?&quot; - everyone points, most fingers pointed at you = you drink that many.</p>
      <p>That&apos;s it. No cards, no turns to track, no special rules. Works for 3-30 people.</p>
      <p><Link href="/game/most-likely-to" className="text-neon-pink">Play Most Likely To →</Link></p>

      <h3>Never Have I Ever</h3>
      <p><strong>Rule:</strong> Say something you&apos;ve never done - if someone HAS done it, they drink.</p>
      <p>Scales infinitely, gets more interesting as people get more honest.</p>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink">Play Never Have I Ever →</Link></p>

      <h3>Higher or Lower</h3>
      <p><strong>Rule:</strong> Flip a card, guess if the next is higher or lower. Wrong = drink.</p>
      <p>The simplest card game ever. Works for 2-10 people.</p>

      <h3>Thumbs</h3>
      <p><strong>Rule:</strong> Someone secretly puts thumb on table. Last to notice and copy = drinks.</p>
      <p>Can play this alongside any other game. Passive but fun.</p>

      <h3>Buffalo</h3>
      <p><strong>Rule:</strong> Always drink with your non-dominant hand. Caught using dominant hand = chug.</p>
      <p>Runs all night as a background rule.</p>
      <p><Link href="/game/buffalo" className="text-neon-pink">Play Buffalo →</Link></p>

      <h2>Two-Rule Games</h2>
      <p>Just slightly more complex, but still instantly playable:</p>

      <h3>Medusa</h3>
      <p><strong>Rules:</strong> (1) Everyone looks down. (2) On &quot;look up!&quot; everyone looks at someone - if two people lock eyes, both drink.</p>
      <p>Fast rounds, creates funny moments, works for any group size.</p>
      <p><Link href="/game/medusa" className="text-neon-pink">Play Medusa →</Link></p>

      <h3>Categories</h3>
      <p><strong>Rules:</strong> (1) Someone picks a category. (2) Go around naming things in that category - hesitate or repeat = drink.</p>
      <p>Examples: Beer brands, countries, Marvel movies, pizza toppings.</p>

      <h3>Word Association</h3>
      <p><strong>Rules:</strong> (1) Start with any word. (2) Say a related word immediately - hesitate = drink.</p>
      <p>Gets harder (and funnier) as people get drunker.</p>

      <h3>Fingers</h3>
      <p><strong>Rules:</strong> (1) Everyone puts finger on cup. (2) Count down and guess how many fingers stay - guess right = you&apos;re out. Last one drinks the cup.</p>

      <h2>Easy Card Games</h2>
      <p>If you have a deck of cards, these are the simplest options:</p>

      <h3>Red or Black</h3>
      <p>Guess if the next card is red or black. Wrong = drink. Right = assign a drink.</p>

      <h3>Snap (Drinking Version)</h3>
      <p>Flip cards in a pile. Two matching numbers in a row = first to slap wins, losers drink.</p>

      <h3>War</h3>
      <p>Both players flip. Lower card drinks. Tie = both drink double.</p>

      <h3>Give and Take</h3>
      <p>Flip a card. Even = take drinks. Odd = give drinks. Card value = drink amount.</p>

      <h2>Easy Music Games</h2>
      <p>Let the song do the work:</p>

      <h3>Thunderstruck</h3>
      <p>Play AC/DC&apos;s Thunderstruck. First person drinks at first &quot;Thunder,&quot; stops at next &quot;Thunder&quot; and passes to next person. Some people get stuck drinking for 30 seconds, others for 3.</p>
      <p><Link href="/guides/thunderstruck-rules" className="text-neon-pink">Full Thunderstruck rules →</Link></p>

      <h3>Roxanne</h3>
      <p>Play &quot;Roxanne&quot; by The Police. Team 1 drinks on &quot;Roxanne.&quot; Team 2 drinks on &quot;red light.&quot; Devastatingly simple, devastatingly effective.</p>
      <p><Link href="/guides/roxanne-drinking-game-rules" className="text-neon-pink">Full Roxanne rules →</Link></p>

      <h2>By Situation</h2>

      <h3>Just Met These People</h3>
      <ul>
        <li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Works even with strangers</li>
        <li><strong>Categories</strong> - No personal information needed</li>
        <li><strong>Thumbs</strong> - Passive, low-stakes fun</li>
      </ul>

      <h3>Everyone&apos;s Already Drunk</h3>
      <ul>
        <li><strong>Higher or Lower</strong> - Can&apos;t mess up the rules</li>
        <li><Link href="/game/medusa" className="text-neon-pink">Medusa</Link> - Simple mechanic still works</li>
        <li><strong>Buffalo</strong> - Already running if you started it</li>
      </ul>

      <h3>No Props at All</h3>
      <ul>
        <li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></li>
        <li><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link></li>
        <li><strong>Word Association</strong></li>
        <li><strong>Categories</strong></li>
      </ul>

      <h3>Two People Only</h3>
      <ul>
        <li><strong>Higher or Lower</strong></li>
        <li><strong>War</strong></li>
        <li><Link href="/game/truth-or-drink" className="text-neon-pink">Truth or Drink</Link></li>
      </ul>

      <h2>Why Easy Games Actually Work Better</h2>
      <ul>
        <li><strong>More drinking, less explaining</strong> - You&apos;re there to have fun, not teach</li>
        <li><strong>Lower barrier to entry</strong> - Shy people join easier</li>
        <li><strong>Scales with impairment</strong> - Still functional after many drinks</li>
        <li><strong>Quick rotation</strong> - If a game gets stale, switch instantly</li>
        <li><strong>Memory-proof</strong> - You can play them again next time without re-learning</li>
      </ul>

      <h2>Tips for Easy Games</h2>
      <ul>
        <li><strong>Demo first, don&apos;t explain</strong> - &quot;Watch me, then you try&quot; beats long explanations</li>
        <li><strong>Start with the easiest</strong> - Most Likely To → then slightly harder games</li>
        <li><strong>Stack Buffalo on top</strong> - Run it alongside any other game</li>
        <li><strong>Keep backup games ready</strong> - Have 2-3 in your head to suggest</li>
      </ul>

      <p>Browse all games: <Link href="/games/quick-easy" className="text-neon-pink hover:underline">Quick & easy games</Link> | <Link href="/guides/drinking-games-without-cards" className="text-neon-pink hover:underline">No-prop games</Link></p>
    </GuideLayout>
  );
}
