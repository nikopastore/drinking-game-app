import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best House Party Drinking Games | Indoor Party Games for 2024",
  description: "The best drinking games for house parties! Games that work in living rooms, basements, and backyards. Complete party planning guide with room-by-room setups.",
  keywords: ["house party drinking games", "home party games", "indoor drinking games", "living room drinking games", "basement party games", "party games at home"],
  openGraph: { title: "15 Best House Party Drinking Games", description: "Party at home!", type: "article", url: "https://sipwiki.app/guides/house-party-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/house-party-drinking-games" },
};

export default function HousePartyGamesPage() {
  return (
    <GuideLayout
      title="Best House Party Drinking Games"
      description="Throwing a house party? These games are perfect for indoor spaces - from intimate apartments to full basement ragers. Set up multiple game stations for the ultimate party."
      breadcrumb="House Party Games"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Any room" },
        { name: "Flip Cup", slug: "flip-cup", description: "Table game" },
        { name: "Beer Pong", slug: "beer-pong", description: "The classic" },
      ]}
    >
      <QuickAnswer
        question="What are the best drinking games for house parties?"
        answer="The best house party drinking games are Beer Pong, Flip Cup, Kings Cup, and Rage Cage. Set up different game stations around your house - Beer Pong in the garage or basement, Flip Cup at the dining table, and Kings Cup in the living room. Having multiple games running simultaneously keeps the party energy high and gives guests options based on their mood."
        tips={[
          "Set up multiple game stations in different rooms",
          "Protect floors with plastic sheets or tarps",
          "Have a 'chill zone' for conversation games",
          "Stock backup supplies (cups, balls, cards)"
        ]}
        variant="primary"
      />

      <h2>High-Energy Table Games</h2>

      <h3>1. Beer Pong</h3>
      <p>The undisputed king of house party games. Two teams throw ping pong balls across a table into opposing cups. Sink a cup, they drink and remove it. Clear all cups to win.</p>
      <ul>
        <li><strong>Space needed:</strong> 8-foot table, room to stand on both sides</li>
        <li><strong>Equipment:</strong> Table, 20 cups, 2-4 balls, beer</li>
        <li><strong>Players:</strong> 2-4 per game (teams of 2)</li>
        <li><strong>Best location:</strong> Basement, garage, or outdoor patio</li>
        <li><strong>Party tip:</strong> Run a tournament bracket for competitive nights</li>
      </ul>
      <p><Link href="/games/beer-pong" className="text-neon-pink hover:underline">Full Beer Pong Rules</Link></p>

      <h3>2. Flip Cup</h3>
      <p>Team relay race that gets loud and competitive. Drink, place cup on table edge, flip it upside down. First team to flip all cups wins. Quick, chaotic, perfect for parties.</p>
      <ul>
        <li><strong>Space needed:</strong> Long table or counter</li>
        <li><strong>Equipment:</strong> Plastic cups, table</li>
        <li><strong>Players:</strong> 6-20 (two equal teams)</li>
        <li><strong>Best location:</strong> Kitchen, dining room, or garage</li>
        <li><strong>Party tip:</strong> Losers refill for the next round</li>
      </ul>
      <p><Link href="/games/flip-cup" className="text-neon-pink hover:underline">Full Flip Cup Rules</Link></p>

      <h3>3. Rage Cage</h3>
      <p>High-speed bouncing game where multiple players compete simultaneously. Get your ball in before the person to your left and stack on them. Gets intense fast.</p>
      <ul>
        <li><strong>Space needed:</strong> Round table or standing circle</li>
        <li><strong>Equipment:</strong> 20+ cups, 2 ping pong balls</li>
        <li><strong>Players:</strong> 6-15</li>
        <li><strong>Best location:</strong> Living room, basement, or large kitchen</li>
        <li><strong>Party tip:</strong> Center cups should be mixed drinks for variety</li>
      </ul>
      <p><Link href="/games/rage-cage" className="text-neon-pink hover:underline">Full Rage Cage Rules</Link></p>

      <h3>4. Civil War</h3>
      <p>Beer Pong chaos - 3v3 with no turns. Everyone shoots simultaneously as fast as possible. Multiple balls flying, cups disappearing, pure mayhem.</p>
      <ul>
        <li><strong>Space needed:</strong> Large table, more room than regular Pong</li>
        <li><strong>Equipment:</strong> 18+ cups, 6+ balls</li>
        <li><strong>Players:</strong> 6 (two teams of 3)</li>
        <li><strong>Best location:</strong> Garage, basement, or backyard</li>
        <li><strong>Warning:</strong> Gets LOUD and messy</li>
      </ul>
      <p><Link href="/games/civil-war" className="text-neon-pink hover:underline">Full Civil War Rules</Link></p>

      <h2>Living Room Classics</h2>

      <h3>5. Kings Cup</h3>
      <p>The versatile classic that works anywhere. Spread cards around a cup, take turns drawing. Each card has a rule. Social, adaptable, and endlessly entertaining.</p>
      <ul>
        <li><strong>Space needed:</strong> Coffee table or floor space</li>
        <li><strong>Equipment:</strong> Deck of cards, large cup</li>
        <li><strong>Players:</strong> 4-10</li>
        <li><strong>Best location:</strong> Living room, any seating area</li>
        <li><strong>Party tip:</strong> Create house rules for repeat games</li>
      </ul>
      <p><Link href="/games/kings-cup" className="text-neon-pink hover:underline">Full Kings Cup Rules</Link></p>

      <h3>6. Most Likely To</h3>
      <p>Perfect for couch circles. &quot;Who is most likely to...?&quot; Count to three, everyone points. Most fingers pointed at you = drink that many. Zero equipment, pure social chaos.</p>
      <ul>
        <li><strong>Space needed:</strong> Minimal - just seating</li>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-15</li>
        <li><strong>Best location:</strong> Living room, patio, anywhere comfortable</li>
        <li><strong>Party tip:</strong> Questions get better as the night progresses</li>
      </ul>
      <p><Link href="/games/most-likely-to" className="text-neon-pink hover:underline">Full Most Likely To Rules</Link></p>

      <h3>7. Never Have I Ever</h3>
      <p>The confession game. &quot;Never have I ever...&quot; - anyone who HAS done it drinks. Secrets come out, stories follow. House parties are perfect for this because you&apos;re with friends.</p>
      <ul>
        <li><strong>Space needed:</strong> Minimal</li>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-20</li>
        <li><strong>Best location:</strong> Living room, around the fire pit</li>
        <li><strong>Party tip:</strong> Start mild, escalate as people loosen up</li>
      </ul>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Full Never Have I Ever Rules</Link></p>

      <h3>8. Drunk Jenga</h3>
      <p>Write rules on Jenga blocks. Pull a block, follow its rule. Tower falls? Finish your drink. The tension builds with every pull.</p>
      <ul>
        <li><strong>Space needed:</strong> Stable table or surface</li>
        <li><strong>Equipment:</strong> Jenga set, marker</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Best location:</strong> Living room, kitchen table</li>
        <li><strong>Party tip:</strong> Use Giant Jenga for bigger impact</li>
      </ul>
      <p><Link href="/games/drunk-jenga" className="text-neon-pink hover:underline">Full Drunk Jenga Rules</Link></p>

      <h2>Card Game Corner</h2>

      <h3>9. Ride the Bus</h3>
      <p>Card guessing game that builds tension. Red or black? Higher or lower? The loser rides the bus at the end - a brutal final round.</p>
      <ul>
        <li><strong>Space needed:</strong> Table for cards</li>
        <li><strong>Equipment:</strong> Deck of cards</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Best location:</strong> Kitchen table, card table</li>
        <li><strong>Party tip:</strong> Great for smaller groups while others play Pong</li>
      </ul>
      <p><Link href="/games/ride-the-bus" className="text-neon-pink hover:underline">Full Ride the Bus Rules</Link></p>

      <h3>10. Beeramid</h3>
      <p>Build a pyramid of cards, flip one at a time from the bottom up. Match a card in your hand? Give drinks. Bluff having a match? Risk getting called out.</p>
      <ul>
        <li><strong>Space needed:</strong> Table for pyramid</li>
        <li><strong>Equipment:</strong> Deck of cards</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Best location:</strong> Dining room, kitchen</li>
        <li><strong>Party tip:</strong> Bluffing gets better with closer friends</li>
      </ul>
      <p><Link href="/games/beeramid" className="text-neon-pink hover:underline">Full Beeramid Rules</Link></p>

      <h3>11. F*ck the Dealer</h3>
      <p>Guess the card value - right means dealer drinks. Three wrong guesses and the dealer passes. Fast-paced and keeps everyone engaged.</p>
      <ul>
        <li><strong>Space needed:</strong> Circle seating</li>
        <li><strong>Equipment:</strong> Deck of cards</li>
        <li><strong>Players:</strong> 4-10</li>
        <li><strong>Best location:</strong> Living room, kitchen</li>
        <li><strong>Party tip:</strong> Organize cards after to track what&apos;s left</li>
      </ul>
      <p><Link href="/games/fuck-the-dealer" className="text-neon-pink hover:underline">Full F*ck the Dealer Rules</Link></p>

      <h2>Outdoor/Backyard Games</h2>

      <h3>12. Cornhole</h3>
      <p>Classic backyard game with drinking rules. Toss bags at the board - landing on it or going through the hole triggers drinks.</p>
      <ul>
        <li><strong>Space needed:</strong> Outdoor space, about 30 feet</li>
        <li><strong>Equipment:</strong> Cornhole boards, bags</li>
        <li><strong>Players:</strong> 2-4</li>
        <li><strong>Drinking rules:</strong> Miss completely = 1 drink, board = opponent drinks 1, hole = opponent drinks 3</li>
      </ul>

      <h3>13. Giant Jenga</h3>
      <p>Oversized Jenga on the patio or deck. Write rules on blocks. The crash when it falls is spectacular outdoors where you don&apos;t worry about noise.</p>
      <ul>
        <li><strong>Space needed:</strong> Flat outdoor surface</li>
        <li><strong>Equipment:</strong> Giant Jenga set</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Party tip:</strong> The crash is half the entertainment</li>
      </ul>

      <h3>14. Ladder Golf</h3>
      <p>Throw bolas (balls on string) at a three-rung ladder. Each rung has a point value. Add drinking to the scoring.</p>
      <ul>
        <li><strong>Space needed:</strong> 15-20 feet outdoor</li>
        <li><strong>Equipment:</strong> Ladder golf set</li>
        <li><strong>Players:</strong> 2-4</li>
        <li><strong>Drinking rules:</strong> Miss all rungs = drink, hit top rung = give 3 drinks</li>
      </ul>

      <h2>Party Endurance Games</h2>

      <h3>15. Power Hour</h3>
      <p>One shot of beer every minute for 60 minutes. 60 shots total = about 5-6 beers. Create a playlist where songs change every minute as the signal.</p>
      <ul>
        <li><strong>Space needed:</strong> Any gathering space</li>
        <li><strong>Equipment:</strong> Shot glasses, timer/playlist, beer</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>Best location:</strong> Living room with good speakers</li>
        <li><strong>Party tip:</strong> Use a themed playlist for more fun</li>
      </ul>
      <p><Link href="/games/power-hour" className="text-neon-pink hover:underline">Full Power Hour Rules</Link></p>

      <h2>House Party Setup Guide</h2>

      <h3>Room-by-Room Layout</h3>
      <ul>
        <li><strong>Living Room:</strong> Kings Cup, Most Likely To, Drunk Jenga (conversation zone)</li>
        <li><strong>Dining Room/Kitchen:</strong> Flip Cup, Rage Cage, card games</li>
        <li><strong>Basement/Garage:</strong> Beer Pong, Civil War (high-energy zone)</li>
        <li><strong>Backyard/Patio:</strong> Cornhole, Giant Jenga, outdoor games</li>
        <li><strong>Quieter Room:</strong> Card games for those who want less chaos</li>
      </ul>

      <h3>Supply List Per Station</h3>
      <ul>
        <li><strong>Beer Pong:</strong> Table, 20+ cups, 4+ balls, towels</li>
        <li><strong>Flip Cup:</strong> 20+ cups, towels for spills</li>
        <li><strong>Card Games:</strong> 2 decks of cards, large cup for Kings</li>
        <li><strong>General:</strong> Extra cups, napkins, trash bags</li>
        <li><strong>Drinks:</strong> Cases of beer, mixers, ice, coolers</li>
      </ul>

      <h3>Floor Protection</h3>
      <ul>
        <li><strong>Plastic tarps</strong> under Beer Pong and Flip Cup areas</li>
        <li><strong>Towels</strong> at every game station</li>
        <li><strong>Rugs you don&apos;t care about</strong> in high-traffic areas</li>
        <li><strong>Move furniture</strong> away from game zones</li>
        <li><strong>Clear breakables</strong> from all surfaces</li>
      </ul>

      <h2>Party Timeline</h2>

      <h3>Sample Schedule</h3>
      <ul>
        <li><strong>8:00 PM:</strong> First guests arrive, casual mingling</li>
        <li><strong>8:30 PM:</strong> Living room games start (Kings Cup, Never Have I Ever)</li>
        <li><strong>9:00 PM:</strong> Beer Pong and Flip Cup stations open</li>
        <li><strong>10:00 PM:</strong> Peak party - all games running</li>
        <li><strong>11:00 PM:</strong> Tournament finals (Pong, Flip Cup brackets)</li>
        <li><strong>12:00 AM:</strong> Wind down, conversation games</li>
        <li><strong>1:00 AM:</strong> Help guests arrange rides, cleanup begins</li>
      </ul>

      <h3>Managing Multiple Games</h3>
      <ul>
        <li><strong>Game Master:</strong> Designate someone to explain rules</li>
        <li><strong>Sign-up sheets:</strong> For Beer Pong tournament brackets</li>
        <li><strong>Rotation:</strong> Winners stay, losers cycle out</li>
        <li><strong>Music control:</strong> Someone manages volume between games</li>
      </ul>

      <h2>Host Responsibilities</h2>

      <h3>Before the Party</h3>
      <ul>
        <li>Clear space for game stations</li>
        <li>Stock up on supplies (cups, balls, cards, drinks)</li>
        <li>Set up game areas and explain rules to early arrivals</li>
        <li>Prepare snacks and food stations</li>
        <li>Hide valuables and breakables</li>
      </ul>

      <h3>During the Party</h3>
      <ul>
        <li>Keep games rotating and energy flowing</li>
        <li>Refill drink stations</li>
        <li>Watch for people who&apos;ve had too much</li>
        <li>Handle any neighbor complaints quickly</li>
        <li>Keep an eye on bathroom supplies</li>
      </ul>

      <h3>Safety Considerations</h3>
      <ul>
        <li><strong>Water station:</strong> Keep water available everywhere</li>
        <li><strong>Food:</strong> Make sure people are eating</li>
        <li><strong>Rides:</strong> Have Uber/Lyft codes ready, plan for rides home</li>
        <li><strong>Quiet hours:</strong> Know your neighborhood&apos;s noise rules</li>
        <li><strong>Emergency numbers:</strong> Posted somewhere visible</li>
      </ul>

      <h2>Neighbor Relations</h2>

      <h3>Being a Good Host</h3>
      <ul>
        <li><strong>Give notice:</strong> Let neighbors know about the party</li>
        <li><strong>Share your number:</strong> So they can text instead of calling cops</li>
        <li><strong>Set an end time:</strong> And actually honor it</li>
        <li><strong>Control outdoor noise:</strong> Bring games inside after quiet hours</li>
        <li><strong>Parking:</strong> Make sure guests don&apos;t block driveways</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Drinking Games for Parties</Link></li>
        <li><Link href="/guides/backyard-drinking-games" className="text-neon-pink hover:underline">Backyard Drinking Games</Link></li>
        <li><Link href="/guides/apartment-drinking-games" className="text-neon-pink hover:underline">Apartment Drinking Games</Link></li>
        <li><Link href="/guides/large-group-drinking-games" className="text-neon-pink hover:underline">Large Group Drinking Games</Link></li>
      </ul>
    </GuideLayout>
  );
}
