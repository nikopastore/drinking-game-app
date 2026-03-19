import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Apartment Drinking Games | Small Space Party Games",
  description: "Perfect drinking games for apartments! Games that work in small spaces, won't disturb neighbors, and don't need much setup. Quiet fun for compact living.",
  keywords: ["apartment drinking games", "drinking games for apartments", "small space drinking games", "quiet drinking games", "indoor drinking games", "low noise drinking games"],
  openGraph: { title: "15 Best Apartment Drinking Games", description: "Small space, big fun!", type: "article", url: "https://sipwiki.app/guides/apartment-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/apartment-drinking-games" },
};

export default function ApartmentDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Best Apartment Drinking Games"
      description="Living in an apartment doesn't mean you can't party! These games are perfect for smaller spaces, won't get noise complaints, and don't require much room to play."
      breadcrumb="Apartment Games"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Table-sized fun" },
        { name: "Most Likely To", slug: "most-likely-to", description: "No space needed" },
        { name: "Ride the Bus", slug: "ride-the-bus", description: "Card game classic" },
      ]}
    >
      <QuickAnswer
        question="What are the best drinking games for apartments?"
        answer="The best apartment drinking games are Kings Cup, Never Have I Ever, Most Likely To, Ride the Bus, and Truth or Drink. These games require minimal space (just a table or couch area), use quiet activities like cards or conversation, and won't generate noise complaints. Avoid games like Beer Pong or Flip Cup that need lots of room and create noise."
        tips={[
          "Stick to card and conversation games",
          "Keep music at reasonable levels",
          "End loud activities by 10-11 PM",
          "Use plastic cups - glass is loud when set down"
        ]}
        variant="primary"
      />

      <h2>Top 15 Apartment-Friendly Games</h2>

      <h3>1. Kings Cup</h3>
      <p>The perfect apartment game. All you need is a deck of cards, a table, and drinks. Players draw cards with different rules - 2 is You, 3 is Me, 4 is Floor, etc. Low noise, high entertainment.</p>
      <ul>
        <li><strong>Space needed:</strong> One table</li>
        <li><strong>Noise level:</strong> Conversation only</li>
        <li><strong>Players:</strong> 4-10</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Everyone sits, no movement, quiet gameplay</li>
      </ul>
      <p><Link href="/games/kings-cup" className="text-neon-pink hover:underline">Full Kings Cup Rules</Link></p>

      <h3>2. Never Have I Ever</h3>
      <p>Zero equipment needed. Players take turns saying &quot;Never have I ever...&quot; and anyone who HAS done it drinks. Works anywhere - couch, floor, kitchen table.</p>
      <ul>
        <li><strong>Space needed:</strong> None - sit anywhere</li>
        <li><strong>Noise level:</strong> Quiet conversation</li>
        <li><strong>Players:</strong> 3-15</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> No setup, no cleanup, naturally quiet</li>
      </ul>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Full Never Have I Ever Rules</Link></p>

      <h3>3. Most Likely To</h3>
      <p>Someone asks &quot;Who&apos;s most likely to...?&quot; and on three, everyone points. Whoever has the most fingers pointed at them drinks that many sips.</p>
      <ul>
        <li><strong>Space needed:</strong> None</li>
        <li><strong>Noise level:</strong> Light laughter</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Sedentary game, minimal noise spikes</li>
      </ul>
      <p><Link href="/games/most-likely-to" className="text-neon-pink hover:underline">Full Most Likely To Rules</Link></p>

      <h3>4. Ride the Bus</h3>
      <p>Multi-round card game with guessing (red/black, higher/lower, etc.). Wrong guesses mean drinks. The loser &quot;rides the bus&quot; in a brutal final round.</p>
      <ul>
        <li><strong>Space needed:</strong> Table for cards</li>
        <li><strong>Noise level:</strong> Low to medium</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Card-based, seated, engaging</li>
      </ul>
      <p><Link href="/games/ride-the-bus" className="text-neon-pink hover:underline">Full Ride the Bus Rules</Link></p>

      <h3>5. Truth or Drink</h3>
      <p>Like Truth or Dare minus the dare (which would require space). Answer the question honestly or take a drink. Perfect for deep conversations.</p>
      <ul>
        <li><strong>Space needed:</strong> None</li>
        <li><strong>Noise level:</strong> Quiet talking</li>
        <li><strong>Players:</strong> 2-10</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Intimate, quiet, no movement</li>
      </ul>
      <p><Link href="/games/truth-or-drink" className="text-neon-pink hover:underline">Full Truth or Drink Rules</Link></p>

      <h3>6. Horse Race</h3>
      <p>Card game where Aces &quot;race&quot; across the table as cards are flipped. Players bet on which suit wins. Losers drink based on how far their horse got.</p>
      <ul>
        <li><strong>Space needed:</strong> Table length</li>
        <li><strong>Noise level:</strong> Low with cheering spikes</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Seated, card-based, exciting but not loud</li>
      </ul>
      <p><Link href="/games/horse-race" className="text-neon-pink hover:underline">Full Horse Race Rules</Link></p>

      <h3>7. Across the Bridge</h3>
      <p>Cards laid in a line form a &quot;bridge.&quot; Flip cards one by one - face cards reset your progress and mean drinks. First to cross wins.</p>
      <ul>
        <li><strong>Space needed:</strong> Table for card line</li>
        <li><strong>Noise level:</strong> Low</li>
        <li><strong>Players:</strong> 2-8</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Simple, quiet, tension-building</li>
      </ul>
      <p><Link href="/games/across-the-bridge" className="text-neon-pink hover:underline">Full Across the Bridge Rules</Link></p>

      <h3>8. Pyramid</h3>
      <p>Cards arranged in a pyramid. Players match cards from their hand to pyramid cards to assign drinks. Bluffing encouraged.</p>
      <ul>
        <li><strong>Space needed:</strong> Small table</li>
        <li><strong>Noise level:</strong> Conversation level</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Strategic, seated, engaging</li>
      </ul>
      <p><Link href="/games/pyramid" className="text-neon-pink hover:underline">Full Pyramid Rules</Link></p>

      <h3>9. Cheers to the Governor</h3>
      <p>Count from 1-21 around the circle. At 21, everyone toasts and drinks. The person who says 21 creates a new rule (swap numbers, actions, etc.).</p>
      <ul>
        <li><strong>Space needed:</strong> None - sit in circle</li>
        <li><strong>Noise level:</strong> Moderate (counting)</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> No equipment, seated, escalating fun</li>
      </ul>
      <p><Link href="/games/cheers-to-the-governor" className="text-neon-pink hover:underline">Full Cheers to the Governor Rules</Link></p>

      <h3>10. F*ck the Dealer</h3>
      <p>Players guess card values. Wrong guesses drink based on how far off. If the dealer stumps three people, they pass the deck. Strategy meets luck.</p>
      <ul>
        <li><strong>Space needed:</strong> Small table</li>
        <li><strong>Noise level:</strong> Low</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Seated, quiet, everyone engaged</li>
      </ul>

      <h3>11. Medusa</h3>
      <p>Everyone looks down. On &quot;3-2-1 look up!&quot; everyone looks at someone. If two people lock eyes, both drink. Simple, quick rounds.</p>
      <ul>
        <li><strong>Space needed:</strong> Circle formation</li>
        <li><strong>Noise level:</strong> Brief laughs</li>
        <li><strong>Players:</strong> 4-15</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Fast, quiet, no equipment</li>
      </ul>
      <p><Link href="/games/medusa" className="text-neon-pink hover:underline">Full Medusa Rules</Link></p>

      <h3>12. Would You Rather (Drinking Edition)</h3>
      <p>Classic Would You Rather but minority vote drinks. Creates discussions and reveals preferences without any physical activity.</p>
      <ul>
        <li><strong>Space needed:</strong> None</li>
        <li><strong>Noise level:</strong> Conversation only</li>
        <li><strong>Players:</strong> 4-10</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Zero setup, natural conversation flow</li>
      </ul>

      <h3>13. Drunk Jenga (Quiet Version)</h3>
      <p>Standard Drunk Jenga but played on carpet to muffle sound. Write rules on blocks. Keep the tower on a padded surface.</p>
      <ul>
        <li><strong>Space needed:</strong> Coffee table</li>
        <li><strong>Noise level:</strong> Low (with carpet)</li>
        <li><strong>Players:</strong> 2-8</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Contained to one spot, manageable noise</li>
      </ul>
      <p><Link href="/games/drunk-jenga" className="text-neon-pink hover:underline">Full Drunk Jenga Rules</Link></p>

      <h3>14. Snap</h3>
      <p>Players flip cards simultaneously. When two matching cards appear, race to slap the pile. Loser drinks. Fast-paced but contained.</p>
      <ul>
        <li><strong>Space needed:</strong> Small table</li>
        <li><strong>Noise level:</strong> Slapping sounds (brief)</li>
        <li><strong>Players:</strong> 2-6</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Exciting without excessive noise</li>
      </ul>

      <h3>15. Red or Black</h3>
      <p>Simple guessing game - predict if the next card is red or black. Wrong? Drink. Right? Assign a drink. Keep it going around.</p>
      <ul>
        <li><strong>Space needed:</strong> Minimal</li>
        <li><strong>Noise level:</strong> Low</li>
        <li><strong>Players:</strong> 2-10</li>
        <li><strong>Why it&apos;s apartment-perfect:</strong> Dead simple, no movement</li>
      </ul>

      <h2>Games to AVOID in Apartments</h2>

      <h3>Too Loud/Physical</h3>
      <ul>
        <li><strong>Beer Pong</strong> - Bouncing balls, cheering, needs table space</li>
        <li><strong>Flip Cup</strong> - Slamming cups, racing, gets rowdy</li>
        <li><strong>Rage Cage</strong> - Very loud, lots of movement</li>
        <li><strong>Slap Cup</strong> - Slapping, cups flying</li>
        <li><strong>Civil War</strong> - Chaos and noise guaranteed</li>
      </ul>

      <h3>Too Much Space Required</h3>
      <ul>
        <li><strong>Cornhole</strong> - Outdoor game</li>
        <li><strong>Giant Jenga</strong> - Crash when it falls</li>
        <li><strong>Any relay race</strong> - Running back and forth</li>
        <li><strong>Dance-offs</strong> - Floor impact, music volume</li>
      </ul>

      <h2>Apartment Party Setup Tips</h2>

      <h3>Noise Management</h3>
      <ul>
        <li><strong>Rugs and carpet</strong> - Absorb sound from cups and movement</li>
        <li><strong>Speakers at low-medium</strong> - Music sets mood without complaints</li>
        <li><strong>Close windows</strong> - Reduces noise leaking out</li>
        <li><strong>Wind down by 10-11 PM</strong> - Respect quiet hours</li>
        <li><strong>Warn neighbors</strong> - A heads up goes a long way</li>
      </ul>

      <h3>Space Optimization</h3>
      <ul>
        <li><strong>Move furniture</strong> - Create a central playing area</li>
        <li><strong>Use the floor</strong> - Pillows and sitting on carpet work</li>
        <li><strong>Kitchen island/counter</strong> - Great for standing games</li>
        <li><strong>Balcony/patio</strong> - If you have one, use it for louder activities</li>
      </ul>

      <h3>Practical Considerations</h3>
      <ul>
        <li><strong>Plastic cups only</strong> - Glass breaks and makes noise</li>
        <li><strong>Have enough seating</strong> - People standing = more movement</li>
        <li><strong>Designate a drink station</strong> - One area for all beverages</li>
        <li><strong>Trash bags ready</strong> - Easy cleanup = happy landlord</li>
        <li><strong>Bathroom access</strong> - Keep the path clear</li>
      </ul>

      <h2>Neighbor Relations</h2>

      <h3>Before the Party</h3>
      <ul>
        <li>Give neighbors a heads up (door note or in person)</li>
        <li>Provide your phone number for issues</li>
        <li>Set a clear end time and communicate it</li>
        <li>Consider inviting immediate neighbors</li>
      </ul>

      <h3>During the Party</h3>
      <ul>
        <li>Check noise levels periodically (step outside)</li>
        <li>Keep guests inside (no loud balcony/hallway conversations)</li>
        <li>Respond immediately if neighbors complain</li>
        <li>Have a &quot;noise monitor&quot; friend designated</li>
      </ul>

      <h3>After the Party</h3>
      <ul>
        <li>Clean up common areas if guests used them</li>
        <li>Apologize if things got too loud</li>
        <li>Follow up with neighbors next day</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Drinking Games for Parties</Link></li>
        <li><Link href="/guides/best-card-drinking-games" className="text-neon-pink hover:underline">Best Card Drinking Games</Link></li>
        <li><Link href="/guides/two-player-drinking-games" className="text-neon-pink hover:underline">Two Player Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-small-groups" className="text-neon-pink hover:underline">Games for Small Groups</Link></li>
      </ul>
    </GuideLayout>
  );
}
