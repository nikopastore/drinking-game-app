import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Classic Drinking Games Everyone Should Know | SipWiki",
  description: "The classic drinking games that have stood the test of time. From Beer Pong to Kings Cup, these timeless party games are must-knows for any social gathering.",
  keywords: ["classic drinking games", "traditional drinking games", "old school drinking games", "popular drinking games", "best known drinking games", "timeless party games"],
  openGraph: { title: "15 Classic Drinking Games Everyone Should Know", description: "Timeless party games that never get old!", type: "article", url: "https://sipwiki.app/guides/classic-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/classic-drinking-games" },
};

export default function ClassicGamesPage() {
  return (
    <GuideLayout
      title="Classic Drinking Games Everyone Should Know"
      description="These are the legends - games that have been party favorites for generations. Simple rules, maximum fun, and memories that last a lifetime."
      breadcrumb="Classic Games"
      relatedGames={[
        { name: "Beer Pong", slug: "beer-pong", description: "The GOAT" },
        { name: "Kings Cup", slug: "kings-cup", description: "Card classic" },
        { name: "Flip Cup", slug: "flip-cup", description: "Team relay" },
      ]}
    >
      <QuickAnswer
        question="What are the most classic drinking games?"
        answer="The most classic drinking games are Beer Pong, Kings Cup (Circle of Death), Flip Cup, Quarters, and Never Have I Ever. These games have been party staples for decades because they're easy to learn, work with any group size, and are fun whether you're a beginner or expert. Other timeless classics include Drunk Jenga, Power Hour, Ride the Bus, and Flip, Sip, or Strip."
        tips={[
          "Beer Pong is the most recognized worldwide",
          "Kings Cup only requires a deck of cards",
          "Flip Cup is perfect for teams",
          "Never Have I Ever needs no equipment at all"
        ]}
        variant="primary"
      />

      <h2>The Hall of Fame: Top 15 Classic Drinking Games</h2>

      <h3>1. Beer Pong</h3>
      <p>The undisputed king of drinking games. Two teams throw ping pong balls across a table trying to land them in the opponent&apos;s cups arranged in a triangle. When a ball lands, the opponent drinks that cup.</p>
      <ul>
        <li><strong>Players:</strong> 2-4 (1v1 or 2v2)</li>
        <li><strong>Equipment:</strong> Table, cups, ping pong balls, beer</li>
        <li><strong>Why it&apos;s classic:</strong> Perfect blend of skill and drinking, competitive but social</li>
      </ul>
      <p><Link href="/games/beer-pong" className="text-neon-pink hover:underline">Full Beer Pong Rules</Link></p>

      <h3>2. Kings Cup (Circle of Death)</h3>
      <p>The ultimate card-based drinking game. Players draw cards from a deck spread around a cup, with each card triggering a different rule (2 = You, 3 = Me, 4 = Floor, etc.).</p>
      <ul>
        <li><strong>Players:</strong> 4-10</li>
        <li><strong>Equipment:</strong> Deck of cards, large cup</li>
        <li><strong>Why it&apos;s classic:</strong> Infinitely variable rules, every game is different</li>
      </ul>
      <p><Link href="/games/kings-cup" className="text-neon-pink hover:underline">Full Kings Cup Rules</Link></p>

      <h3>3. Flip Cup</h3>
      <p>A team relay race where players must drink their beer and flip their cup upside down by flicking the rim. First team to finish all their cups wins.</p>
      <ul>
        <li><strong>Players:</strong> 6-20 (two equal teams)</li>
        <li><strong>Equipment:</strong> Plastic cups, table</li>
        <li><strong>Why it&apos;s classic:</strong> Fast-paced team excitement, perfect for large groups</li>
      </ul>
      <p><Link href="/games/flip-cup" className="text-neon-pink hover:underline">Full Flip Cup Rules</Link></p>

      <h3>4. Quarters</h3>
      <p>Players take turns bouncing a quarter off the table trying to land it in a shot glass. Make it? Choose someone to drink. Miss? Next player&apos;s turn.</p>
      <ul>
        <li><strong>Players:</strong> 2-8</li>
        <li><strong>Equipment:</strong> Quarter, shot glass</li>
        <li><strong>Why it&apos;s classic:</strong> Simple bar game that&apos;s been played for 50+ years</li>
      </ul>
      <p><Link href="/games/quarters" className="text-neon-pink hover:underline">Full Quarters Rules</Link></p>

      <h3>5. Never Have I Ever</h3>
      <p>Players take turns saying &quot;Never have I ever...&quot; followed by something they haven&apos;t done. Anyone who HAS done it takes a drink. A confession game that reveals secrets.</p>
      <ul>
        <li><strong>Players:</strong> 3-15</li>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Why it&apos;s classic:</strong> No equipment needed, great icebreaker, always entertaining</li>
      </ul>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Full Never Have I Ever Rules</Link></p>

      <h3>6. Drunk Jenga</h3>
      <p>Classic Jenga with a twist - each block has a rule written on it. Pull a block, do what it says (or drink as a penalty), then stack it on top.</p>
      <ul>
        <li><strong>Players:</strong> 2-8</li>
        <li><strong>Equipment:</strong> Jenga set with written rules</li>
        <li><strong>Why it&apos;s classic:</strong> Combines physical skill with drinking, tension builds throughout</li>
      </ul>
      <p><Link href="/games/drunk-jenga" className="text-neon-pink hover:underline">Full Drunk Jenga Rules</Link></p>

      <h3>7. Power Hour</h3>
      <p>Take a shot of beer every minute for 60 minutes. Sounds easy but adds up to 7.5 beers in an hour. Usually done with a playlist that changes songs every minute.</p>
      <ul>
        <li><strong>Players:</strong> Any number</li>
        <li><strong>Equipment:</strong> Shot glasses, timer/playlist</li>
        <li><strong>Why it&apos;s classic:</strong> Communal drinking experience, great pregame activity</li>
      </ul>
      <p><Link href="/games/power-hour" className="text-neon-pink hover:underline">Full Power Hour Rules</Link></p>

      <h3>8. Ride the Bus</h3>
      <p>A multi-round card game where players guess card attributes (red/black, higher/lower, etc.). Wrong guesses mean drinks. The loser &quot;rides the bus&quot; in a brutal final round.</p>
      <ul>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Equipment:</strong> Deck of cards</li>
        <li><strong>Why it&apos;s classic:</strong> Combines luck and strategy, the bus ride is legendary</li>
      </ul>
      <p><Link href="/games/ride-the-bus" className="text-neon-pink hover:underline">Full Ride the Bus Rules</Link></p>

      <h3>9. Rage Cage (Boom Cup)</h3>
      <p>Fast-paced bouncing game where players race to bounce a ball into their cup. Get stacked? Drink a center cup. Last cups standing are trouble.</p>
      <ul>
        <li><strong>Players:</strong> 6-15</li>
        <li><strong>Equipment:</strong> Many cups, 2 ping pong balls</li>
        <li><strong>Why it&apos;s classic:</strong> High energy, gets competitive fast, perfect for parties</li>
      </ul>
      <p><Link href="/games/rage-cage" className="text-neon-pink hover:underline">Full Rage Cage Rules</Link></p>

      <h3>10. Most Likely To</h3>
      <p>Someone asks &quot;Who is most likely to...?&quot; and on the count of three, everyone points. The person with the most fingers pointed at them drinks that many.</p>
      <ul>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Why it&apos;s classic:</strong> Gets personal, hilarious reveals, no setup needed</li>
      </ul>
      <p><Link href="/games/most-likely-to" className="text-neon-pink hover:underline">Full Most Likely To Rules</Link></p>

      <h3>11. Truth or Drink</h3>
      <p>The drinking version of Truth or Dare. Answer the question honestly or take a drink. Questions can get progressively more revealing.</p>
      <ul>
        <li><strong>Players:</strong> 2-10</li>
        <li><strong>Equipment:</strong> Question cards (optional)</li>
        <li><strong>Why it&apos;s classic:</strong> Creates memorable conversations, always unpredictable</li>
      </ul>
      <p><Link href="/games/truth-or-drink" className="text-neon-pink hover:underline">Full Truth or Drink Rules</Link></p>

      <h3>12. Slap Cup</h3>
      <p>Similar to Rage Cage but with slapping. If you bounce your ball in before the person to your right, you slap their cup away and they drink.</p>
      <ul>
        <li><strong>Players:</strong> 6-15</li>
        <li><strong>Equipment:</strong> Many cups, 2 ping pong balls</li>
        <li><strong>Why it&apos;s classic:</strong> More interactive than Rage Cage, satisfying slap mechanic</li>
      </ul>
      <p><Link href="/games/slap-cup" className="text-neon-pink hover:underline">Full Slap Cup Rules</Link></p>

      <h3>13. Thunderstruck</h3>
      <p>Play AC/DC&apos;s &quot;Thunderstruck.&quot; First person drinks when they hear &quot;thunder.&quot; They stop and next person starts on the next &quot;thunder.&quot; Some people get stuck for a long time!</p>
      <ul>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Equipment:</strong> Music player</li>
        <li><strong>Why it&apos;s classic:</strong> Musical, communal, some unlucky souls drink A LOT</li>
      </ul>
      <p><Link href="/games/thunderstruck" className="text-neon-pink hover:underline">Full Thunderstruck Rules</Link></p>

      <h3>14. Civil War</h3>
      <p>Beer Pong on steroids - 3v3 with three triangles per side. No turns, just chaos as everyone shoots simultaneously. First team to eliminate all opposing cups wins.</p>
      <ul>
        <li><strong>Players:</strong> 6 (3v3)</li>
        <li><strong>Equipment:</strong> Large table, 18 cups, multiple balls</li>
        <li><strong>Why it&apos;s classic:</strong> Maximum chaos, fastest Beer Pong variant</li>
      </ul>
      <p><Link href="/games/civil-war" className="text-neon-pink hover:underline">Full Civil War Rules</Link></p>

      <h3>15. Edward 40 Hands</h3>
      <p>Tape a 40oz malt liquor to each hand. You can&apos;t remove them until both are empty. Need to use the bathroom? Better drink faster.</p>
      <ul>
        <li><strong>Players:</strong> Any</li>
        <li><strong>Equipment:</strong> Two 40oz bottles per person, duct tape</li>
        <li><strong>Why it&apos;s classic:</strong> Hilarious commitment, legendary challenge</li>
      </ul>
      <p><Link href="/games/edward-40-hands" className="text-neon-pink hover:underline">Full Edward 40 Hands Rules</Link></p>

      <h2>Why These Games Are Timeless</h2>

      <h3>Simple Rules</h3>
      <p>Classic drinking games can be explained in under a minute. When everyone&apos;s had a few drinks, complicated rules don&apos;t work. These games are drunk-proof.</p>

      <h3>Minimal Equipment</h3>
      <p>Most classics need nothing more than cards, cups, or nothing at all. You can play Never Have I Ever anywhere, anytime, with zero preparation.</p>

      <h3>Scalable</h3>
      <p>Whether you have 4 people or 20, most classics adapt. Beer Pong works 1v1 or 2v2. Kings Cup handles 4-15 players easily.</p>

      <h3>Universal Appeal</h3>
      <p>These games transcend generations and cultures. Your parents played Beer Pong. Your grandparents played Quarters. The classics connect us.</p>

      <h2>How to Choose the Right Classic</h2>

      <h3>For Small Groups (2-4)</h3>
      <ul>
        <li><strong>Beer Pong</strong> - Competitive 1v1 or 2v2</li>
        <li><strong>Quarters</strong> - Quick rounds, easy setup</li>
        <li><strong>Truth or Drink</strong> - Intimate conversations</li>
      </ul>

      <h3>For Medium Groups (5-10)</h3>
      <ul>
        <li><strong>Kings Cup</strong> - The gold standard</li>
        <li><strong>Never Have I Ever</strong> - No equipment needed</li>
        <li><strong>Ride the Bus</strong> - Dramatic conclusions</li>
      </ul>

      <h3>For Large Groups (10+)</h3>
      <ul>
        <li><strong>Flip Cup</strong> - Team relay excitement</li>
        <li><strong>Rage Cage</strong> - Organized chaos</li>
        <li><strong>Power Hour</strong> - Everyone together</li>
      </ul>

      <h3>For Getting to Know People</h3>
      <ul>
        <li><strong>Never Have I Ever</strong> - Learn secrets</li>
        <li><strong>Most Likely To</strong> - See how others perceive you</li>
        <li><strong>Truth or Drink</strong> - Deep conversations</li>
      </ul>

      <h2>Tips for Playing Classics</h2>
      <ul>
        <li><strong>Know house rules</strong> - Every group has variations. Ask before playing.</li>
        <li><strong>Keep water nearby</strong> - Pace yourself with water between drinks</li>
        <li><strong>Include non-drinkers</strong> - Most games work with juice or soda</li>
        <li><strong>Have backup supplies</strong> - Extra cups, balls, and cards</li>
        <li><strong>Set a vibe</strong> - Good music and lighting make any game better</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/college-drinking-games" className="text-neon-pink hover:underline">College Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Drinking Games for Parties</Link></li>
        <li><Link href="/guides/best-card-drinking-games" className="text-neon-pink hover:underline">Best Card Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-beginners" className="text-neon-pink hover:underline">Drinking Games for Beginners</Link></li>
      </ul>
    </GuideLayout>
  );
}
