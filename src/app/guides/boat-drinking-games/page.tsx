import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Boat Drinking Games | Games for Boats, Yachts & Lake Days",
  description: "Best drinking games for boats! Water-safe games, yacht party ideas, and activities perfect for lake days, pontoon parties, and boat parties. Stay safe while having fun.",
  keywords: ["boat drinking games", "drinking games for boats", "yacht drinking games", "lake boat games", "pontoon drinking games", "boat party games"],
  openGraph: { title: "15 Best Boat Drinking Games", description: "Party on the water!", type: "article", url: "https://sipwiki.app/guides/boat-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/boat-drinking-games" },
};

export default function BoatDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Best Boat Drinking Games"
      description="On a boat? These games work perfectly on the water - stable enough for boat movement, waterproof-friendly, and designed for lake days, yacht parties, and pontoon fun."
      breadcrumb="Boat Games"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Works on boats" },
        { name: "Most Likely To", slug: "most-likely-to", description: "No equipment needed" },
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Perfect for cruising" },
      ]}
    >
      <QuickAnswer
        question="What are the best drinking games for boats?"
        answer="The best boat drinking games are Most Likely To, Never Have I Ever, Truth or Drink, and Kings Cup (with waterproof cards). Stick to conversation games and card games that won't lose equipment overboard. Avoid games with dice or small pieces. Add drinking rules to water activities like tubing, swimming races, and fishing for more fun. Always have a designated sober captain."
        tips={[
          "ALWAYS have a sober captain - no exceptions",
          "Use waterproof cards if playing card games",
          "Secure all drinks in koozies to prevent spills",
          "Stay hydrated with water between drinks"
        ]}
        variant="primary"
      />

      <h2>⚓ SAFETY FIRST</h2>

      <h3>Critical Boat Safety Rules</h3>
      <ul>
        <li><strong>SOBER CAPTAIN REQUIRED</strong> - This is non-negotiable. BUI (Boating Under Influence) is illegal and deadly.</li>
        <li><strong>Life jackets accessible</strong> - Everyone should know where they are</li>
        <li><strong>Stay on the boat</strong> - Drunk swimming is extremely dangerous</li>
        <li><strong>Buddy system</strong> - No one goes in the water alone</li>
        <li><strong>Know your limits</strong> - Alcohol + sun + water = faster intoxication</li>
        <li><strong>Anchor safely</strong> - Games should only happen when boat is stationary or moving slowly</li>
      </ul>

      <h2>No-Equipment Conversation Games</h2>

      <h3>1. Most Likely To</h3>
      <p>Perfect boat game - no equipment to lose overboard. &quot;Who is most likely to...?&quot; Everyone points. Most fingers = drink that many sips.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Boat advantage:</strong></li>
        <li>Nothing can fall in the water</li>
        <li>Play while cruising or anchored</li>
        <li>Works with any group size</li>
        <li><strong>Boat-themed questions:</strong></li>
        <li>&quot;Who is most likely to fall overboard?&quot;</li>
        <li>&quot;Who is most likely to get seasick?&quot;</li>
        <li>&quot;Who is most likely to catch a fish?&quot;</li>
      </ul>
      <p><Link href="/game/most-likely-to" className="text-neon-pink hover:underline">Full Most Likely To Rules</Link></p>

      <h3>2. Never Have I Ever</h3>
      <p>The classic confession game. &quot;Never have I ever...&quot; - anyone who HAS done it drinks. Zero equipment needed, perfect for hours on the water.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-15</li>
        <li><strong>Boat advantage:</strong></li>
        <li>Play for hours while sunbathing</li>
        <li>Nothing to lose overboard</li>
        <li>Natural conversation flow</li>
        <li><strong>Water-themed statements:</strong></li>
        <li>&quot;Never have I ever peed in a lake&quot;</li>
        <li>&quot;Never have I ever been on a yacht&quot;</li>
        <li>&quot;Never have I ever caught a fish&quot;</li>
      </ul>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink hover:underline">Full Never Have I Ever Rules</Link></p>

      <h3>3. Truth or Drink</h3>
      <p>Answer honestly or drink. No dares - which is perfect on a boat where physical dares could be dangerous. Keep it conversational.</p>
      <ul>
        <li><strong>Equipment:</strong> None or waterproof question cards</li>
        <li><strong>Players:</strong> 2-10</li>
        <li><strong>Boat advantage:</strong></li>
        <li>Relaxed atmosphere brings out honesty</li>
        <li>Can&apos;t storm away - you&apos;re on a boat!</li>
        <li>No physical challenges to worry about</li>
      </ul>
      <p><Link href="/game/truth-or-drink" className="text-neon-pink hover:underline">Full Truth or Drink Rules</Link></p>

      <h3>4. Would You Rather</h3>
      <p>Two options, vote by raising hands. Minority vote drinks. Perfect for lazy cruising conversations.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Water-themed questions:</strong></li>
        <li>Would you rather swim with sharks or jellyfish?</li>
        <li>Would you rather be stranded on a deserted island or lost at sea?</li>
        <li>Would you rather only sail or only motor for the rest of your life?</li>
        <li>Would you rather give up boats or give up flying?</li>
      </ul>

      <h3>5. Categories</h3>
      <p>Pick a category, go around naming items. Hesitate or repeat = drink. Simple and works with the rocking of the boat.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Boat categories:</strong></li>
        <li>Types of fish</li>
        <li>Things that float</li>
        <li>Boat manufacturers</li>
        <li>Lakes in America</li>
        <li>Beach towns</li>
        <li>Sunscreen brands</li>
      </ul>

      <h2>Card Games (With Waterproof Cards)</h2>

      <h3>6. Kings Cup</h3>
      <p>Classic card game works great on boats IF you have waterproof cards. Secure the center cup so it doesn&apos;t tip with boat movement.</p>
      <ul>
        <li><strong>Equipment:</strong> Waterproof cards, stable cup</li>
        <li><strong>Players:</strong> 4-10</li>
        <li><strong>Boat adaptations:</strong></li>
        <li>Use a cup with weighted bottom or holder</li>
        <li>Play on a flat, stable surface</li>
        <li>Anchor boat for best stability</li>
        <li>Waterproof cards don&apos;t matter if they get splashed</li>
      </ul>
      <p><Link href="/game/kings-cup" className="text-neon-pink hover:underline">Full Kings Cup Rules</Link></p>

      <h3>7. Ride the Bus</h3>
      <p>Card guessing game - red/black, higher/lower. The loser rides the bus. Works on boats with waterproof cards and calm waters.</p>
      <ul>
        <li><strong>Equipment:</strong> Waterproof cards</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Boat tips:</strong></li>
        <li>Use a towel to keep cards from sliding</li>
        <li>Play when anchored for best results</li>
        <li>Secure cards in a case when not playing</li>
      </ul>
      <p><Link href="/game/ride-the-bus" className="text-neon-pink hover:underline">Full Ride the Bus Rules</Link></p>

      <h3>8. Beeramid</h3>
      <p>Build a pyramid of cards, flip and match. Give drinks or bluff. Works well on pontoons with flat table surfaces.</p>
      <ul>
        <li><strong>Equipment:</strong> Waterproof cards</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Best boat type:</strong> Pontoons with stable tables</li>
        <li><strong>Warning:</strong> Cards can slide - weight corners with koozies</li>
      </ul>
      <p><Link href="/game/beeramid" className="text-neon-pink hover:underline">Full Beeramid Rules</Link></p>

      <h2>Water Activity Drinking Games</h2>

      <h3>9. Tubing Drinking Game</h3>
      <p>Add drinking rules to tubing behind the boat. Participants drink based on their performance.</p>
      <ul>
        <li><strong>Drinking rules:</strong></li>
        <li>Fall off in under 30 seconds = finish your drink</li>
        <li>Stay on for full run = give 3 drinks</li>
        <li>Scream the whole time = everyone drinks</li>
        <li>Do a trick = give 5 drinks</li>
        <li>Driver (sober!) can&apos;t drink</li>
        <li><strong>Safety note:</strong> Drink AFTER returning to the boat, not while tubing</li>
      </ul>

      <h3>10. Swimming Race</h3>
      <p>When anchored in safe water, race between two points. Losers drink. Winners assign drinks.</p>
      <ul>
        <li><strong>Safety requirements:</strong></li>
        <li>Calm water only</li>
        <li>Sober spotter on the boat</li>
        <li>Short distances only</li>
        <li>Life jackets nearby</li>
        <li><strong>Drinking rules:</strong></li>
        <li>Last place = finish drink</li>
        <li>Winner = gives out 3 drinks</li>
        <li>DNF (didn&apos;t finish) = 2 drinks</li>
      </ul>

      <h3>11. Fishing Drinking Game</h3>
      <p>If you&apos;re fishing while on the boat, add drinking rules to the catch (or lack thereof).</p>
      <ul>
        <li><strong>Drinking rules:</strong></li>
        <li>No bite in 15 minutes = drink</li>
        <li>Catch a fish = everyone else drinks</li>
        <li>Lose a fish = drink 2</li>
        <li>Catch the biggest fish of the day = winner drinks for free, losers finish drinks</li>
        <li>Catch something weird (boot, trash) = chug</li>
      </ul>

      <h3>12. Dive/Jump Contest</h3>
      <p>When anchored safely, judge diving/jumping form. Scores determine drinking.</p>
      <ul>
        <li><strong>Safety first:</strong></li>
        <li>Check water depth</li>
        <li>Clear landing zone</li>
        <li>Sober spotter required</li>
        <li><strong>Scoring (1-10):</strong></li>
        <li>Lowest score = drink their score</li>
        <li>Highest score = gives out their score</li>
        <li>Belly flop = automatic drink but respect points</li>
      </ul>

      <h2>Boat-Specific Games</h2>

      <h3>13. Captain Says</h3>
      <p>Like Simon Says, but boat-themed. The captain (a designated person, not the driver) gives commands. Fail = drink.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Sample commands:</strong></li>
        <li>&quot;Captain says touch the starboard side&quot;</li>
        <li>&quot;Captain says sit on the bow&quot;</li>
        <li>&quot;Swab the deck&quot; (without &quot;Captain says&quot;)</li>
        <li><strong>Rules:</strong> If you follow without &quot;Captain says&quot; = drink</li>
      </ul>

      <h3>14. Boat Trivia</h3>
      <p>Nautical-themed trivia game. Wrong answers = drink. Get creative with questions.</p>
      <ul>
        <li><strong>Equipment:</strong> None (or prepared questions)</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>Sample questions:</strong></li>
        <li>What is the front of a boat called? (Bow)</li>
        <li>What does &quot;port&quot; mean? (Left side)</li>
        <li>What&apos;s a nautical mile in regular miles? (1.15 miles)</li>
        <li>What&apos;s the bathroom called on a boat? (Head)</li>
        <li>Wrong answer = 1 drink, right answer = give 1 drink</li>
      </ul>

      <h3>15. Anchor Drop</h3>
      <p>When the captain drops anchor, everyone must be holding their drink. Last person to grab their drink = chug.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>Rules:</strong></li>
        <li>Can only be called by sober captain</li>
        <li>No warning - just drops anchor</li>
        <li>Fastest to grab drink = safe</li>
        <li>Slowest = chugs</li>
      </ul>

      <h2>What to Bring on the Boat</h2>

      <h3>Essential Items</h3>
      <ul>
        <li><strong>Waterproof playing cards</strong> - Regular cards get ruined</li>
        <li><strong>Koozies for everyone</strong> - Keeps drinks cold and prevents drops</li>
        <li><strong>Cooler with ice</strong> - Essential for long days</li>
        <li><strong>Non-glass containers only</strong> - Glass + boat = disaster</li>
        <li><strong>Sunscreen</strong> - Drunk + sunburn = bad time</li>
        <li><strong>Water bottles</strong> - Hydration is critical</li>
        <li><strong>Snacks</strong> - Don&apos;t drink on empty stomach</li>
        <li><strong>Trash bags</strong> - Leave no trace</li>
      </ul>

      <h3>Best Drinks for Boats</h3>
      <ul>
        <li><strong>Canned beer/seltzers</strong> - Light, easy to pack, no glass</li>
        <li><strong>Canned cocktails</strong> - Pre-mixed, convenient</li>
        <li><strong>Boxed wine</strong> - No glass, stays cooler longer</li>
        <li><strong>Pre-mixed drinks in plastic bottles</strong> - Make ahead at home</li>
        <li><strong>AVOID:</strong> Glass bottles, red wine (stains), dark liquor in sun</li>
      </ul>

      <h2>Boat Type Considerations</h2>

      <h3>Pontoon Boats</h3>
      <ul>
        <li>Most stable = best for card games</li>
        <li>Lots of seating = bigger groups</li>
        <li>Tables available = more game options</li>
        <li>Perfect for: Kings Cup, Beeramid, group conversation games</li>
      </ul>

      <h3>Speedboats/Ski Boats</h3>
      <ul>
        <li>Less stable when moving</li>
        <li>Games best when anchored</li>
        <li>Great for water activity games</li>
        <li>Perfect for: Tubing games, swimming contests</li>
      </ul>

      <h3>Yachts</h3>
      <ul>
        <li>Stable, spacious</li>
        <li>Can play almost anything</li>
        <li>Interior space for more elaborate games</li>
        <li>Perfect for: All boat games, plus some party games</li>
      </ul>

      <h3>Kayaks/Canoes</h3>
      <ul>
        <li>Very limited game options</li>
        <li>Conversation games only</li>
        <li>Save drinking for shore</li>
        <li>Safety is primary concern</li>
      </ul>

      <h2>Games to AVOID on Boats</h2>

      <h3>Dangerous on Water</h3>
      <ul>
        <li><strong>Anything with dice</strong> - Will be lost overboard immediately</li>
        <li><strong>Beer Pong</strong> - Balls, cups, mess = chaos on a boat</li>
        <li><strong>Flip Cup</strong> - Too much movement and spillage</li>
        <li><strong>Physical dare games</strong> - Don&apos;t dare people to jump/dive without safety</li>
        <li><strong>Rage Cage</strong> - Balls everywhere, not boat-friendly</li>
      </ul>

      <h3>Equipment Problems</h3>
      <ul>
        <li><strong>Jenga</strong> - Tower will fall with every wave</li>
        <li><strong>Board games</strong> - Small pieces = overboard</li>
        <li><strong>Regular paper cards</strong> - One splash and they&apos;re ruined</li>
        <li><strong>Games requiring tables</strong> - Unless you have a stable pontoon</li>
      </ul>

      <h2>Sun + Alcohol Safety</h2>

      <h3>Dehydration Prevention</h3>
      <ul>
        <li><strong>Water ratio</strong> - 1:1 water to alcoholic drink</li>
        <li><strong>Electrolytes</strong> - Bring sports drinks or packets</li>
        <li><strong>Shade breaks</strong> - Get under the bimini regularly</li>
        <li><strong>Early signs</strong> - Headache, dizziness = stop drinking, hydrate</li>
      </ul>

      <h3>Sun Protection</h3>
      <ul>
        <li><strong>Sunscreen SPF 30+</strong> - Reapply every 2 hours</li>
        <li><strong>Hats and sunglasses</strong> - Protect head and eyes</li>
        <li><strong>Water reflection</strong> - Burns happen faster on water</li>
        <li><strong>Cover up</strong> - Light layers during peak sun</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/beach-drinking-games" className="text-neon-pink hover:underline">Beach Drinking Games</Link></li>
        <li><Link href="/guides/pool-party-drinking-games" className="text-neon-pink hover:underline">Pool Party Drinking Games</Link></li>
        <li><Link href="/guides/outdoor-drinking-games" className="text-neon-pink hover:underline">Outdoor Drinking Games</Link></li>
        <li><Link href="/guides/large-group-drinking-games" className="text-neon-pink hover:underline">Large Group Drinking Games</Link></li>
      </ul>
    </GuideLayout>
  );
}
