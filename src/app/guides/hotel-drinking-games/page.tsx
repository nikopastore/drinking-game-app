import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Hotel Room Drinking Games | Vacation & Convention Party Games",
  description: "Best drinking games for hotel rooms! Games perfect for vacations, conventions, bachelorette trips, and hotel pregames. Travel-friendly and won't get you kicked out.",
  keywords: ["hotel drinking games", "hotel room drinking games", "hotel party games", "vacation drinking games", "hotel room party", "convention drinking games"],
  openGraph: { title: "15 Best Hotel Room Drinking Games", description: "Hotel party time!", type: "article", url: "https://sipwiki.app/guides/hotel-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/hotel-drinking-games" },
};

export default function HotelDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Best Hotel Room Drinking Games"
      description="Vacation mode activated! These games are perfect for hotel rooms - easy setup, packable supplies, and won't get you kicked out or cost you a noise complaint."
      breadcrumb="Hotel Games"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Pack a deck of cards" },
        { name: "Most Likely To", slug: "most-likely-to", description: "No supplies needed" },
        { name: "Truth or Drink", slug: "truth-or-drink", description: "Hotel confessions" },
      ]}
    >
      <QuickAnswer
        question="What are the best drinking games for hotel rooms?"
        answer="The best hotel room drinking games are Kings Cup, Most Likely To, Never Have I Ever, and Truth or Drink. Card games work great since a deck is easy to pack. Avoid loud games that'll get noise complaints - stick to conversation games and card games. Use the hotel ice bucket, skip the expensive minibar, and know checkout time for morning recovery."
        tips={[
          "Pack a deck of cards - it's all you need",
          "Use the free ice machine, not minibar",
          "Keep noise to conversation levels",
          "Check checkout time for morning planning"
        ]}
        variant="primary"
      />

      <h2>Packable Card Games</h2>

      <h3>1. Kings Cup</h3>
      <p>The ultimate hotel game. One deck of cards, one cup, endless entertainment. Spread cards around a cup on the bed or floor and play by the classic rules.</p>
      <ul>
        <li><strong>Equipment:</strong> Deck of cards, one large cup</li>
        <li><strong>Players:</strong> 4-10</li>
        <li><strong>Why it&apos;s perfect for hotels:</strong></li>
        <li>Fits in any luggage</li>
        <li>Quiet enough for hotel rooms</li>
        <li>Entertaining for hours</li>
        <li>Everyone knows the rules</li>
      </ul>
      <p><Link href="/game/kings-cup" className="text-neon-pink hover:underline">Full Kings Cup Rules</Link></p>

      <h3>2. Ride the Bus</h3>
      <p>Card guessing game with escalating tension. Perfect for hotel pregames before going out. The person &quot;riding the bus&quot; at the end provides entertainment for everyone.</p>
      <ul>
        <li><strong>Equipment:</strong> Deck of cards</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Hotel advantage:</strong></li>
        <li>Quick rounds between getting ready</li>
        <li>Can be played on the bed</li>
        <li>Gets people in party mood before going out</li>
      </ul>
      <p><Link href="/game/ride-the-bus" className="text-neon-pink hover:underline">Full Ride the Bus Rules</Link></p>

      <h3>3. Beeramid</h3>
      <p>Pyramid of cards, bluffing, and drink distribution. Build the pyramid on the nightstand or bed, and let the games begin.</p>
      <ul>
        <li><strong>Equipment:</strong> Deck of cards</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>How it works:</strong></li>
        <li>Build a pyramid of cards face-down</li>
        <li>Deal 4 cards to each player</li>
        <li>Flip pyramid cards one at a time</li>
        <li>Match a card? Give drinks. Bluffing allowed!</li>
      </ul>
      <p><Link href="/game/beeramid" className="text-neon-pink hover:underline">Full Beeramid Rules</Link></p>

      <h3>4. F*ck the Dealer</h3>
      <p>Guess the card value, dealer drinks if you&apos;re right. Get it wrong and you drink. Simple and effective for hotel pregaming.</p>
      <ul>
        <li><strong>Equipment:</strong> Deck of cards</li>
        <li><strong>Players:</strong> 4-10</li>
        <li><strong>Why it&apos;s great for hotels:</strong></li>
        <li>Fast-paced, keeps energy up</li>
        <li>Easy to explain to new players</li>
        <li>Dealer rotates when they miss 3 in a row</li>
      </ul>
      <p><Link href="/game/fuck-the-dealer" className="text-neon-pink hover:underline">Full F*ck the Dealer Rules</Link></p>

      <h3>5. Across the Bridge</h3>
      <p>Try to cross 10 cards without hitting face cards. Hit a face card? Drink and add more cards. Simple and brutal.</p>
      <ul>
        <li><strong>Equipment:</strong> Deck of cards</li>
        <li><strong>Players:</strong> 2-8</li>
        <li><strong>How it works:</strong></li>
        <li>Lay 10 cards face down in a row</li>
        <li>Flip cards one at a time</li>
        <li>Number card? Keep going</li>
        <li>Face card? Drink and add cards (J=1, Q=2, K=3, A=4)</li>
      </ul>

      <h2>No-Equipment Games</h2>

      <h3>6. Most Likely To</h3>
      <p>Zero equipment needed - just your friends. &quot;Who is most likely to...?&quot; Everyone points, most fingers = that many drinks. Perfect when you forgot to pack cards.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Hotel scenarios:</strong></li>
        <li>&quot;Who is most likely to pass out first tonight?&quot;</li>
        <li>&quot;Who is most likely to lose their room key?&quot;</li>
        <li>&quot;Who is most likely to order room service at 3 AM?&quot;</li>
      </ul>
      <p><Link href="/game/most-likely-to" className="text-neon-pink hover:underline">Full Most Likely To Rules</Link></p>

      <h3>7. Never Have I Ever</h3>
      <p>The classic confession game. &quot;Never have I ever...&quot; - anyone who HAS done it drinks. Vacation loosens people up, secrets come out.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-15</li>
        <li><strong>Hotel tips:</strong></li>
        <li>Save embarrassing statements for after a few drinks</li>
        <li>Target things you know happened on previous trips</li>
        <li>What happens in the hotel room stays there</li>
      </ul>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink hover:underline">Full Never Have I Ever Rules</Link></p>

      <h3>8. Truth or Drink</h3>
      <p>Answer honestly or take a drink. No dares - just questions and confessions. Perfect for hotel rooms where you can&apos;t do wild dares anyway.</p>
      <ul>
        <li><strong>Equipment:</strong> None or question cards</li>
        <li><strong>Players:</strong> 2-10</li>
        <li><strong>Why it&apos;s perfect for hotels:</strong></li>
        <li>Intimate setting makes people open up</li>
        <li>No physical activities to disturb other guests</li>
        <li>Can get progressively more intense</li>
      </ul>
      <p><Link href="/game/truth-or-drink" className="text-neon-pink hover:underline">Full Truth or Drink Rules</Link></p>

      <h3>9. Two Truths and a Lie</h3>
      <p>Share three statements - two true, one false. Others guess the lie. Wrong guesses drink. Great icebreaker for groups who don&apos;t know each other well.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Strategies:</strong></li>
        <li>Make the truths sound unbelievable</li>
        <li>Use vacation-related statements</li>
        <li>Mix mundane with wild for confusion</li>
      </ul>

      <h3>10. Categories</h3>
      <p>Pick a category, go around naming items. Hesitate or repeat = drink. Simple, fast, no supplies needed.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Sample categories:</strong></li>
        <li>Things in this hotel room</li>
        <li>Cities you&apos;ve visited</li>
        <li>Types of cocktails</li>
        <li>Things people do on vacation</li>
      </ul>

      <h2>Hotel-Specific Games</h2>

      <h3>11. Minibar Roulette</h3>
      <p>If someone&apos;s treating (or doesn&apos;t care about the bill), randomly select minibar items. Bad pick = drink it regardless. Entertainment value may outweigh cost.</p>
      <ul>
        <li><strong>How it works:</strong></li>
        <li>Number each minibar item</li>
        <li>Roll dice or random number</li>
        <li>That person drinks/eats whatever is selected</li>
        <li><strong>Warning:</strong> Minibar prices are insane</li>
      </ul>

      <h3>12. Channel Flip</h3>
      <p>Use hotel TV for drinking cues. Create rules based on what appears on screen as you randomly flip channels.</p>
      <ul>
        <li><strong>Equipment:</strong> Hotel TV, remote</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>Sample rules:</strong></li>
        <li>Commercial = everyone drinks</li>
        <li>News = last person to touch their nose drinks</li>
        <li>Sports = everyone yells and drinks</li>
        <li>Movie you&apos;ve seen = waterfall</li>
        <li>Foreign language channel = finish your drink</li>
      </ul>

      <h3>13. Room Service Bets</h3>
      <p>Before ordering, everyone guesses the total bill. Furthest from the actual price finishes their drink or picks up the tip.</p>
      <ul>
        <li><strong>Equipment:</strong> Room service menu</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>When to play:</strong></li>
        <li>Late night munchies</li>
        <li>Morning hangover breakfast</li>
        <li>Any time someone suggests ordering</li>
      </ul>

      <h2>Convention/Conference Hotel Games</h2>

      <h3>14. Conference Bingo</h3>
      <p>Create bingo cards with things you&apos;ll see at the convention. First to bingo during the day = others buy them a drink at night.</p>
      <ul>
        <li><strong>Sample squares:</strong></li>
        <li>Someone mentions their company</li>
        <li>Overly enthusiastic handshake</li>
        <li>Free pen collection</li>
        <li>Networking card exchange</li>
        <li>Bad coffee complaint</li>
      </ul>

      <h3>15. After-Hours Networking</h3>
      <p>Drinking game for hotel bar or room gatherings. Take drinks when certain professional topics come up.</p>
      <ul>
        <li><strong>Drink when someone says:</strong></li>
        <li>&quot;Let&apos;s circle back on that&quot;</li>
        <li>&quot;What&apos;s your role?&quot;</li>
        <li>Company name 3+ times</li>
        <li>&quot;We should connect on LinkedIn&quot;</li>
        <li>Any industry buzzword</li>
      </ul>

      <h2>Hotel Room Setup Tips</h2>

      <h3>Making the Space Work</h3>
      <ul>
        <li><strong>Clear the desk:</strong> Move work stuff, create game space</li>
        <li><strong>Floor or bed:</strong> Sit in a circle on the floor or bed for card games</li>
        <li><strong>Ice bucket:</strong> Use it! Free ice from the machine keeps drinks cold</li>
        <li><strong>Bathroom cups:</strong> Wrapped cups work for games in a pinch</li>
        <li><strong>Towels down:</strong> Protect surfaces from spills</li>
      </ul>

      <h3>Drink Management</h3>
      <ul>
        <li><strong>NEVER use the minibar</strong> - Buy beforehand at a store</li>
        <li><strong>Ice runs:</strong> Designate someone for ice machine trips</li>
        <li><strong>Can/bottle only:</strong> No glass that could break</li>
        <li><strong>Cooler if possible:</strong> Bring a small soft cooler for the room</li>
        <li><strong>Room fridge:</strong> Clear out minibar items and use the cold space</li>
      </ul>

      <h3>Noise Considerations</h3>
      <ul>
        <li><strong>Conversation levels only</strong> - Hotels have thin walls</li>
        <li><strong>No yelling games</strong> - Save Flip Cup for house parties</li>
        <li><strong>TV at reasonable volume</strong> - Background music is fine</li>
        <li><strong>Watch the clock</strong> - Quiet down after 11 PM</li>
        <li><strong>Be aware of neighbors</strong> - Especially shared walls</li>
      </ul>

      <h2>Trip-Specific Scenarios</h2>

      <h3>Bachelorette Party</h3>
      <ul>
        <li><strong>Best games:</strong> Truth or Drink, Most Likely To, Never Have I Ever</li>
        <li><strong>Add bride-themed rules:</strong> Bride drinks when someone mentions the wedding</li>
        <li><strong>Photo ops:</strong> Loser of each round poses for embarrassing photos</li>
      </ul>

      <h3>Bachelor Party</h3>
      <ul>
        <li><strong>Best games:</strong> Kings Cup, Ride the Bus, Power Hour</li>
        <li><strong>Groom rules:</strong> Groom can't say certain words without drinking</li>
        <li><strong>Pregame hard:</strong> Hotel room games before hitting the town</li>
      </ul>

      <h3>Convention After-Party</h3>
      <ul>
        <li><strong>Best games:</strong> Low-key conversation games</li>
        <li><strong>Mix crowds:</strong> Games that help new people bond</li>
        <li><strong>Professional adjacent:</strong> Keep it somewhat appropriate - you might work with these people</li>
      </ul>

      <h3>Vacation Night In</h3>
      <ul>
        <li><strong>Best games:</strong> Relaxed games like Most Likely To</li>
        <li><strong>Balance:</strong> You&apos;re on vacation - don&apos;t exhaust yourself indoors</li>
        <li><strong>Recovery prep:</strong> Games wind down in time for next day&apos;s activities</li>
      </ul>

      <h2>What to Pack</h2>

      <h3>Essential Items</h3>
      <ul>
        <li>1-2 decks of cards (waterproof if possible)</li>
        <li>A couple of dice</li>
        <li>Plastic cups (hotel ones are small)</li>
        <li>Bottle opener/corkscrew</li>
        <li>Snacks for drinking food</li>
      </ul>

      <h3>Optional Extras</h3>
      <ul>
        <li>Small Bluetooth speaker for background music</li>
        <li>Shot glasses (mini ones pack easily)</li>
        <li>Game-specific items (Jenga travel edition)</li>
        <li>Printed question cards for Truth or Drink</li>
      </ul>

      <h2>Games to AVOID in Hotel Rooms</h2>

      <ul>
        <li><strong>Beer Pong</strong> - No room, balls everywhere, noise complaints</li>
        <li><strong>Flip Cup</strong> - Too loud, too messy for hotel carpet</li>
        <li><strong>Rage Cage</strong> - Same issues as Beer Pong, amplified</li>
        <li><strong>Anything with shouting</strong> - Neighbors will complain</li>
        <li><strong>Physical dare games</strong> - Limited space, potential damage</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/apartment-drinking-games" className="text-neon-pink hover:underline">Apartment Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-small-groups" className="text-neon-pink hover:underline">Drinking Games for Small Groups</Link></li>
        <li><Link href="/guides/drinking-games-for-two-people" className="text-neon-pink hover:underline">Drinking Games for Two People</Link></li>
        <li><Link href="/guides/bachelorette-drinking-games" className="text-neon-pink hover:underline">Bachelorette Drinking Games</Link></li>
      </ul>
    </GuideLayout>
  );
}
