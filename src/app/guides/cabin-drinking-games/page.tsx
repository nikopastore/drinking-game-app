import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Cabin Drinking Games | Weekend Getaway & Ski Trip Games",
  description: "Best drinking games for cabin trips! Perfect for weekend getaways, ski lodges, lakeside retreats, and cabin parties with friends. Cozy games for cold nights.",
  keywords: ["cabin drinking games", "cabin trip games", "weekend getaway drinking games", "cabin party games", "ski trip drinking games", "lodge drinking games"],
  openGraph: { title: "15 Best Cabin Drinking Games", description: "Cabin vibes!", type: "article", url: "https://sipwiki.app/guides/cabin-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/cabin-drinking-games" },
};

export default function CabinDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Best Cabin Drinking Games"
      description="Weekend cabin trip? Whether it's a ski lodge, lakeside retreat, or mountain hideaway, these games are perfect for cozy nights with friends around the fire."
      breadcrumb="Cabin Games"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Fireside classic" },
        { name: "Ride the Bus", slug: "ride-the-bus", description: "Evening entertainment" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Around the fire" },
      ]}
    >
      <QuickAnswer
        question="What are the best drinking games for cabin trips?"
        answer="The best cabin drinking games are Kings Cup, Ride the Bus, Most Likely To, and Drunk Jenga. Cabins are perfect for longer card games and conversation games since you have the whole weekend. Games like Power Hour work great with cabin playlists, and Giant Jenga can be played outside on the deck. Focus on games that work with the cozy, social cabin atmosphere."
        tips={[
          "Buy all drinks before arriving - stores may be far",
          "Pack a deck of cards and backup dice",
          "Pace yourself - it's a marathon, not a sprint",
          "Keep games going near the fire or in the main room"
        ]}
        variant="primary"
      />

      <h2>Fireside Card Games</h2>

      <h3>1. Kings Cup</h3>
      <p>The ultimate cabin game. Gather around the table or floor by the fire, cards spread around a cup. Each card has a rule. The cozy cabin atmosphere makes this even better.</p>
      <ul>
        <li><strong>Equipment:</strong> Deck of cards, one large cup</li>
        <li><strong>Players:</strong> 4-10</li>
        <li><strong>Why it&apos;s perfect for cabins:</strong></li>
        <li>Long game that fills time</li>
        <li>Social and conversational</li>
        <li>Works by the fireplace</li>
        <li>Creates memories and inside jokes</li>
      </ul>
      <p><Link href="/games/kings-cup" className="text-neon-pink hover:underline">Full Kings Cup Rules</Link></p>

      <h3>2. Ride the Bus</h3>
      <p>Card guessing game that builds tension. Red or black? Higher or lower? End up on the bus and you&apos;re drinking a lot. Perfect for cabin nights when you have time for drama.</p>
      <ul>
        <li><strong>Equipment:</strong> Deck of cards</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Why it&apos;s perfect for cabins:</strong></li>
        <li>Builds suspense over multiple rounds</li>
        <li>Everyone watches the person riding the bus</li>
        <li>Creates stories for the whole weekend</li>
      </ul>
      <p><Link href="/games/ride-the-bus" className="text-neon-pink hover:underline">Full Ride the Bus Rules</Link></p>

      <h3>3. Beeramid</h3>
      <p>Build a pyramid of cards, flip them one by one. Match a card in your hand? Give drinks. Bluff having matches? Get caught and drink double. Strategic and social.</p>
      <ul>
        <li><strong>Equipment:</strong> Deck of cards</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Why it&apos;s perfect for cabins:</strong></li>
        <li>Bluffing gets better with close friends</li>
        <li>Rounds escalate as the pyramid climbs</li>
        <li>Perfect table game after dinner</li>
      </ul>
      <p><Link href="/games/beeramid" className="text-neon-pink hover:underline">Full Beeramid Rules</Link></p>

      <h3>4. Drunk Jenga</h3>
      <p>Write rules on Jenga blocks. Pull a block, follow its rule. Tower falls? Finish your drink. Giant outdoor Jenga on the cabin deck is legendary.</p>
      <ul>
        <li><strong>Equipment:</strong> Jenga set (giant version ideal), marker</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Sample block rules:</strong></li>
        <li>&quot;Waterfall&quot;</li>
        <li>&quot;Give 3 drinks&quot;</li>
        <li>&quot;Everyone with a beard drinks&quot;</li>
        <li>&quot;Make a rule&quot;</li>
        <li>&quot;Truth or drink&quot;</li>
      </ul>
      <p><Link href="/games/drunk-jenga" className="text-neon-pink hover:underline">Full Drunk Jenga Rules</Link></p>

      <h2>Conversation Games for Cozy Nights</h2>

      <h3>5. Most Likely To</h3>
      <p>Perfect for the living room or around the fire. &quot;Who is most likely to...?&quot; Count to three, everyone points. Most fingers pointed at you = drink that many sips.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Why it&apos;s perfect for cabins:</strong></li>
        <li>No setup needed</li>
        <li>Can play for hours while relaxing</li>
        <li>Gets personal with close friends</li>
        <li>Creates hilarious memories</li>
      </ul>
      <p><Link href="/games/most-likely-to" className="text-neon-pink hover:underline">Full Most Likely To Rules</Link></p>

      <h3>6. Never Have I Ever</h3>
      <p>The confession game. &quot;Never have I ever...&quot; and anyone who HAS done it drinks. Secrets come out when you&apos;re trapped in a cabin together all weekend.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-15</li>
        <li><strong>Cabin strategy:</strong></li>
        <li>Start mild, escalate as the night goes on</li>
        <li>Target specific friends when you know their stories</li>
        <li>Save the best statements for late night</li>
      </ul>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Full Never Have I Ever Rules</Link></p>

      <h3>7. Truth or Drink</h3>
      <p>Like Truth or Dare without the dares. Answer honestly or drink. The cabin isolation makes people more open - secrets come out on cabin trips.</p>
      <ul>
        <li><strong>Equipment:</strong> None or question cards</li>
        <li><strong>Players:</strong> 2-10</li>
        <li><strong>Why it&apos;s perfect for cabins:</strong></li>
        <li>Intimate setting = deeper conversations</li>
        <li>No interruptions or strangers</li>
        <li>What happens at the cabin stays at the cabin</li>
      </ul>
      <p><Link href="/games/truth-or-drink" className="text-neon-pink hover:underline">Full Truth or Drink Rules</Link></p>

      <h3>8. Would You Rather</h3>
      <p>Two options, vote by raising hands. Minority vote drinks. Cabin edition: add outdoor/survival themed questions.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Cabin-themed questions:</strong></li>
        <li>Would you rather sleep outside or share a bed with a stranger?</li>
        <li>Would you rather give up hot water or electricity for the weekend?</li>
        <li>Would you rather fight one bear-sized duck or 100 duck-sized bears?</li>
      </ul>

      <h2>High-Energy Cabin Games</h2>

      <h3>9. Flip Cup</h3>
      <p>Team relay race. Drink, flip, pass. First team done wins. Works great on cabin kitchen tables or the dining room table.</p>
      <ul>
        <li><strong>Equipment:</strong> Plastic cups, table</li>
        <li><strong>Players:</strong> 6-20</li>
        <li><strong>Cabin advantage:</strong></li>
        <li>Get as loud as you want - no neighbors</li>
        <li>Spills don&apos;t matter as much</li>
        <li>Tournament brackets for the whole weekend</li>
      </ul>
      <p><Link href="/games/flip-cup" className="text-neon-pink hover:underline">Full Flip Cup Rules</Link></p>

      <h3>10. Rage Cage</h3>
      <p>High-speed bouncing game with multiple players competing at once. Stack on someone? They drink a center cup. Energy builds as the game progresses.</p>
      <ul>
        <li><strong>Equipment:</strong> 20+ cups, 2 ping pong balls</li>
        <li><strong>Players:</strong> 6-15</li>
        <li><strong>Why it&apos;s perfect for cabins:</strong></li>
        <li>Room to be loud and crazy</li>
        <li>Balls bounce everywhere without neighbors complaining</li>
        <li>Gets the blood pumping on cold nights</li>
      </ul>
      <p><Link href="/games/rage-cage" className="text-neon-pink hover:underline">Full Rage Cage Rules</Link></p>

      <h3>11. Power Hour</h3>
      <p>One shot of beer every minute for 60 minutes. 60 shots = 5-6 beers over an hour. Create a cabin playlist with songs from everyone&apos;s music libraries.</p>
      <ul>
        <li><strong>Equipment:</strong> Shot glasses, timer or playlist, beer</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>Cabin playlist ideas:</strong></li>
        <li>90s nostalgia songs</li>
        <li>Road trip anthems</li>
        <li>Everyone picks 10 songs</li>
        <li>Theme nights (80s, country, guilty pleasures)</li>
      </ul>
      <p><Link href="/games/power-hour" className="text-neon-pink hover:underline">Full Power Hour Rules</Link></p>

      <h3>12. Beer Pong</h3>
      <p>If the cabin has a ping pong table or enough room for a long table, Beer Pong is the obvious choice. Tournament format works great for weekend trips.</p>
      <ul>
        <li><strong>Equipment:</strong> Long table, cups, balls</li>
        <li><strong>Players:</strong> 2-4 per game</li>
        <li><strong>Cabin tournament format:</strong></li>
        <li>Draw partners randomly</li>
        <li>Double elimination bracket</li>
        <li>Winners get bragging rights all weekend</li>
      </ul>
      <p><Link href="/games/beer-pong" className="text-neon-pink hover:underline">Full Beer Pong Rules</Link></p>

      <h2>Outdoor Cabin Games</h2>

      <h3>13. Outdoor Giant Jenga</h3>
      <p>Giant Jenga on the deck or patio. Write rules on blocks or play with drink penalties for whoever knocks it over. The crash is spectacular.</p>
      <ul>
        <li><strong>Equipment:</strong> Giant Jenga set</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Drinking rules:</strong></li>
        <li>Tower falls = finish your drink</li>
        <li>Each block has a rule written on it</li>
        <li>Take too long = drink</li>
      </ul>

      <h3>14. Cornhole</h3>
      <p>If the cabin has lawn space, Cornhole is perfect. Add drinking rules for a competitive edge.</p>
      <ul>
        <li><strong>Equipment:</strong> Cornhole boards, bags</li>
        <li><strong>Players:</strong> 2-4</li>
        <li><strong>Drinking rules:</strong></li>
        <li>Miss the board entirely = 1 drink</li>
        <li>Land on board = opponent drinks 1</li>
        <li>Hole = opponent drinks 3</li>
        <li>Shutout = loser finishes drink</li>
      </ul>

      <h3>15. Fireside Storytelling Game</h3>
      <p>Take turns telling stories around the fire. Others vote on whether they believe it&apos;s true. Wrong guesses drink, correct guesses mean storyteller drinks.</p>
      <ul>
        <li><strong>Equipment:</strong> None, just a fire</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Categories:</strong></li>
        <li>Most embarrassing moment</li>
        <li>Craziest vacation story</li>
        <li>Worst date ever</li>
        <li>Times you almost got caught</li>
      </ul>

      <h2>Cabin Weekend Schedule</h2>

      <h3>Friday Night</h3>
      <ul>
        <li><strong>Arrival:</strong> Unpack, settle in, first drinks</li>
        <li><strong>Dinner:</strong> Group cooking, casual drinking</li>
        <li><strong>After dinner:</strong> Flip Cup tournament or Rage Cage</li>
        <li><strong>Late night:</strong> Most Likely To by the fire, wind down</li>
      </ul>

      <h3>Saturday</h3>
      <ul>
        <li><strong>Morning:</strong> Brunch, recovery</li>
        <li><strong>Afternoon:</strong> Outdoor activities (hiking, skiing, swimming), day drinking</li>
        <li><strong>Pre-dinner:</strong> Cornhole, outdoor games</li>
        <li><strong>After dinner:</strong> Kings Cup, Ride the Bus, Beeramid</li>
        <li><strong>Late night:</strong> Power Hour, Never Have I Ever, Truth or Drink</li>
      </ul>

      <h3>Sunday</h3>
      <ul>
        <li><strong>Morning:</strong> Slow start, breakfast</li>
        <li><strong>Pre-departure:</strong> Light games, cleanup</li>
        <li><strong>Key:</strong> Wind down drinking early for safe driving home</li>
      </ul>

      <h2>Cabin Trip Planning Tips</h2>

      <h3>What to Bring</h3>
      <ul>
        <li><strong>Games:</strong> 2+ decks of cards, dice, Jenga (giant if possible)</li>
        <li><strong>Drinks:</strong> More than you think - stores may be far</li>
        <li><strong>Backup entertainment:</strong> Board games for quieter moments</li>
        <li><strong>Essentials:</strong> Cups, ice (or know if cabin has ice maker), bottle opener</li>
        <li><strong>Recovery:</strong> Pedialyte, Advil, Gatorade</li>
      </ul>

      <h3>Cabin Etiquette</h3>
      <ul>
        <li><strong>Cleanup:</strong> Assign duties or create a rotation</li>
        <li><strong>Noise:</strong> Even at cabins, check for quiet hours if there are nearby neighbors</li>
        <li><strong>Shared spaces:</strong> Respect common areas, clean as you go</li>
        <li><strong>Costs:</strong> Split everything fairly, agree upfront</li>
        <li><strong>Damage:</strong> Report and fix anything broken before leaving</li>
      </ul>

      <h3>Pacing Yourself</h3>
      <ul>
        <li><strong>Hydration:</strong> Alternate water between drinks</li>
        <li><strong>Food:</strong> Eat meals, don&apos;t skip for drinking</li>
        <li><strong>Sleep:</strong> You&apos;re there all weekend - rest when needed</li>
        <li><strong>Breaks:</strong> Not every moment needs to involve drinking</li>
        <li><strong>Recovery time:</strong> Plan for travel home being later Sunday</li>
      </ul>

      <h2>Games to AVOID at Cabins</h2>

      <ul>
        <li><strong>Games with small parts:</strong> Dice and tokens get lost in cabin floors</li>
        <li><strong>Electronics-heavy games:</strong> WiFi may be spotty</li>
        <li><strong>Games requiring specific apps:</strong> Cell service isn&apos;t guaranteed</li>
        <li><strong>Highly competitive games:</strong> You&apos;re stuck together all weekend - don&apos;t start fights</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/camping-drinking-games" className="text-neon-pink hover:underline">Camping Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Drinking Games for Parties</Link></li>
        <li><Link href="/guides/classic-drinking-games" className="text-neon-pink hover:underline">Classic Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-small-groups" className="text-neon-pink hover:underline">Drinking Games for Small Groups</Link></li>
      </ul>
    </GuideLayout>
  );
}
