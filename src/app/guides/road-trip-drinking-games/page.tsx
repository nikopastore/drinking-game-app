import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Road Trip Drinking Games (2024) | Car & Travel Games",
  description: "Drinking games for road trips and travel! Games for passengers, rest stops, and destinations. Complete rules for car-safe games. Driver stays sober!",
  keywords: ["road trip drinking games", "car drinking games", "travel drinking games", "passenger drinking games", "road trip games adults"],
  openGraph: { title: "Road Trip Drinking Games", description: "Passengers only!", type: "article", url: "https://sipwiki.app/guides/road-trip-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/road-trip-drinking-games" },
};

export default function RoadTripDrinkingGamesPage() {
  return (
    <GuideLayout title="Road Trip Drinking Games" description="Long drive ahead? These games make the journey fun for passengers while keeping things safe. Because the destination is just as important as the journey." breadcrumb="Road Trip" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "No hands needed" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Works anywhere" }, { name: "Truth or Drink", slug: "truth-or-drink", description: "Car conversation" }]}>
      <h2>⚠️ CRITICAL SAFETY RULE</h2>
      <p><strong>The driver NEVER participates in drinking. These games are exclusively for passengers. No exceptions.</strong></p>
      <p>Consider taking turns driving on long trips so everyone gets a chance to participate safely.</p>

      <h2>In-Car Games (Passengers Only)</h2>

      <h3>License Plate Bingo</h3>
      <p>Spot license plates from different states.</p>
      <ul>
        <li>First person to spot a new state calls it out</li>
        <li>Everyone else drinks 1</li>
        <li>Rare states (Alaska, Hawaii) = everyone drinks 2</li>
        <li>Canada or Mexico plate = everyone finishes their drink</li>
        <li>Vanity plate = spotter assigns 2 drinks</li>
      </ul>
      <p>Keep a running tally - person with most spots at destination assigns a round.</p>

      <h3>Billboard Drinking</h3>
      <p>React to roadside advertising.</p>
      <ul>
        <li>Fast food ad = everyone drinks 1</li>
        <li>Lawyer ad = drink 2</li>
        <li>Religious billboard = moment of silence, then drink</li>
        <li>Political ad = groan, then drink</li>
        <li>Adult store billboard = everyone cheers and drinks</li>
        <li>Same company twice in a row = drink during the entire stretch</li>
      </ul>

      <h3>Car Color Bingo</h3>
      <p>Simple and endless.</p>
      <ul>
        <li>Pick your color at the start</li>
        <li>Every time your color car passes, everyone else drinks</li>
        <li>Pink, purple, or orange car = everyone drinks (rare!)</li>
        <li>Police car = everyone stays quiet and drinks after it passes</li>
        <li>Same color car three times in a row = that person assigns 3 drinks</li>
      </ul>

      <h3>Road Trip Trivia</h3>
      <p>Test knowledge while passing miles.</p>
      <ul>
        <li>Rotate asking trivia questions</li>
        <li>Wrong answer = drink</li>
        <li>Everyone gets it wrong = asker drinks</li>
        <li>Categories: music, movies, sports, geography, pop culture</li>
        <li>State-specific trivia when you enter a new state</li>
      </ul>

      <h3>Most Likely To</h3>
      <p>The perfect car game - requires nothing but conversation.</p>
      <ul>
        <li>Someone asks &quot;Who&apos;s most likely to...&quot;</li>
        <li>Everyone points at someone (including driver who just nods)</li>
        <li>Person with most votes drinks</li>
        <li>Driver immunity - can&apos;t drink even if voted</li>
      </ul>
      <p>Works great because no equipment needed and can go for hours.</p>
      <p><Link href="/game/most-likely-to" className="text-neon-pink">Play Most Likely To →</Link></p>

      <h3>Never Have I Ever</h3>
      <p>Classic game, car edition.</p>
      <ul>
        <li>Hold up 5 fingers</li>
        <li>One person makes a statement</li>
        <li>Put down finger and drink if you&apos;ve done it</li>
        <li>First to lose all fingers drinks extra</li>
        <li>Road trip themed: &quot;Never have I ever slept through a state&quot;</li>
      </ul>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink">Play Never Have I Ever →</Link></p>

      <h3>Song Lyric Finish</h3>
      <p>When a song comes on the radio or playlist:</p>
      <ul>
        <li>One person pauses or mutes mid-lyric</li>
        <li>Next person must finish the line</li>
        <li>Wrong or blanks = drink</li>
        <li>Perfect finish = assign a drink</li>
        <li>No one knows the song = person who picked it drinks</li>
      </ul>

      <h3>Guess the Song</h3>
      <p>Play snippets from a playlist.</p>
      <ul>
        <li>First to name song and artist wins</li>
        <li>Everyone else drinks</li>
        <li>Wrong guess = double drink</li>
        <li>Challenge mode: guess from first 3 seconds</li>
      </ul>

      <h2>Rest Stop Games</h2>
      <p>Stretch your legs and your drink hand.</p>

      <h3>Quick Card Games</h3>
      <p>Pack a deck - play on picnic tables:</p>
      <ul>
        <li><strong>Speed Kings</strong> - Quick rounds of Kings Cup</li>
        <li><strong>Pyramid</strong> - Bluffing card game</li>
        <li><strong>Snap</strong> - Reaction game</li>
        <li><strong>Horse Race</strong> - Betting game, quick resolution</li>
      </ul>

      <h3>Gas Station Bingo</h3>
      <p>At every gas stop:</p>
      <ul>
        <li>First to find the weirdest snack - everyone else drinks</li>
        <li>Bathroom line = drink while waiting</li>
        <li>Someone takes forever inside = they buy next round</li>
        <li>Unusual gas station feature spotted = assign drinks</li>
      </ul>

      <h3>Stretch Break Challenges</h3>
      <ul>
        <li>Most jumping jacks = assigns drinks</li>
        <li>Last one back to car = drinks</li>
        <li>Loser of rock-paper-scissors tournament = drinks</li>
      </ul>

      <h2>Destination Arrival Games</h2>
      <p>Save the real games for when you arrive safely.</p>

      <h3>Hotel Room Games</h3>
      <ul>
        <li><Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> - Pack cards for this</li>
        <li>Coin games - quarters, flip games</li>
        <li>Truth or Drink - hotel room confessions</li>
        <li>Watch something and add drinking rules</li>
      </ul>

      <h3>Campsite Games</h3>
      <ul>
        <li><Link href="/guides/camping-drinking-games" className="text-neon-pink">Camping drinking games</Link> - see our full guide</li>
        <li>Campfire games work great after a long drive</li>
        <li>Nature-based challenges</li>
      </ul>

      <h3>Arrival Celebration</h3>
      <ul>
        <li>Toast to the safe arrival</li>
        <li>Person who drove longest = gets first drink made for them</li>
        <li>Settle any bets made during the trip</li>
      </ul>

      <h2>Road Trip Drinking Tips</h2>

      <h3>Drink Logistics</h3>
      <ul>
        <li><strong>Cooler in back seat</strong> - Easy passenger access</li>
        <li><strong>Canned drinks</strong> - Easier to handle than bottles</li>
        <li><strong>Spill-proof containers</strong> - Cars + drinks = mess potential</li>
        <li><strong>Trash bag ready</strong> - Empties accumulate</li>
        <li><strong>Napkins/towels</strong> - Spills happen</li>
      </ul>

      <h3>Legal Considerations</h3>
      <ul>
        <li><strong>Open container laws vary by state</strong> - Some states prohibit any open alcohol in vehicle</li>
        <li><strong>Research your route</strong> - Know what&apos;s legal where</li>
        <li><strong>Keep drinks in trunk where required</strong> - When crossing strict states</li>
        <li><strong>Don&apos;t drink and drive</strong> - Even a little, even after &quot;just one&quot;</li>
      </ul>

      <h3>Pacing the Trip</h3>
      <ul>
        <li>Long trips = pace slowly (you have hours)</li>
        <li>Frequent bathroom stops anyway</li>
        <li>Stay hydrated with water too</li>
        <li>Snacks help - pack the car with munchies</li>
        <li>Know when to stop - especially before destination</li>
      </ul>

      <h2>What to Pack</h2>
      <ul>
        <li>Deck of cards</li>
        <li>Cooler with ice</li>
        <li>Variety of drinks</li>
        <li>Cups (solo cups work)</li>
        <li>Water bottles</li>
        <li>Snacks</li>
        <li>Phone chargers (playlist control)</li>
        <li>Trash bags</li>
        <li>Towels for spills</li>
      </ul>

      <h2>Designated Driver Appreciation</h2>
      <p>The sober driver makes everything possible:</p>
      <ul>
        <li>Buy their food and snacks</li>
        <li>They control the music</li>
        <li>First drink made for them at destination</li>
        <li>Best bed/room choice</li>
        <li>Sincere gratitude - they&apos;re keeping everyone safe</li>
      </ul>

      <p>More travel games: <Link href="/guides/camping-drinking-games" className="text-neon-pink hover:underline">camping games</Link> | <Link href="/guides/hotel-drinking-games" className="text-neon-pink hover:underline">hotel room games</Link></p>
    </GuideLayout>
  );
}
