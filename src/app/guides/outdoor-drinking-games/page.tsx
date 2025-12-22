import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Outdoor Drinking Games (2024) | Backyard & BBQ Games",
  description: "Best drinking games for outdoors! Perfect for backyards, BBQs, parks, and beaches. Complete guide with lawn games, no-prop games, and outdoor party tips.",
  keywords: ["outdoor drinking games", "backyard drinking games", "bbq drinking games", "yard games with drinking", "outdoor party games", "lawn drinking games"],
  openGraph: { title: "15 Best Outdoor Drinking Games", description: "Take the party outside.", type: "article", url: "https://sipwiki.app/guides/outdoor-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/outdoor-drinking-games" },
};

export default function OutdoorDrinkingGamesPage() {
  return (
    <GuideLayout title="15 Best Outdoor Drinking Games" description="Sun's out, drinks out! When the weather's nice and you've got space to spread out, these are the games that make outdoor gatherings legendary." breadcrumb="Outdoor Games" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "Works anywhere" }, { name: "Beer Pong", slug: "beer-pong", description: "Classic outdoor game" }]}>
      <QuickAnswer
        question="What are the best outdoor drinking games?"
        answer="Best outdoor drinking games: (1) Cornhole with drinking rules - bag on board = opponent drinks 1, in hole = drinks 3, (2) KanJam - frisbee game with drinking penalties, (3) Beer Pong - outdoor table setup, (4) Flip Cup - works anywhere with a table, (5) Spikeball - miss = drink. Lawn games (Cornhole, Ladder Toss, Washers) are perfect for backyards and BBQs. No equipment? Play Flip Cup, Never Have I Ever, or Thunderstruck outdoors. Outdoor advantages: space to move, no noise complaints, multiple games simultaneously."
        tips={[
          "Cornhole is easiest to set up for drinking",
          "Keep coolers in shade - drinks stay cold longer",
          "Run multiple games simultaneously in large yards",
          "No noise complaints outdoors - get loud!"
        ]}
        variant="primary"
      />

      <h2>Why Outdoor Games Hit Different</h2>
      <p>Outdoor drinking games have advantages indoor games can&apos;t match:</p>
      <ul>
        <li><strong>Space to move</strong> - Lawn games need room to throw</li>
        <li><strong>No noise complaints</strong> - Get loud without neighbors banging walls</li>
        <li><strong>Natural cooling</strong> - Coolers stay colder longer in shade</li>
        <li><strong>Spectator friendly</strong> - People can watch from lawn chairs</li>
        <li><strong>Multiple games simultaneously</strong> - Cornhole in one corner, pong in another</li>
      </ul>

      <h2>Lawn Games with Drinking Rules</h2>
      <p>These games are built for the backyard. Add drinking rules and they become legendary:</p>

      <h3>Cornhole (Bags)</h3>
      <p>The king of backyard games. 2v2 or 1v1, toss bean bags at a board with a hole.</p>
      <p><strong>Drinking rules:</strong></p>
      <ul>
        <li>Bag on board = opponent drinks 1</li>
        <li>Bag in hole = opponent drinks 3</li>
        <li>Get skunked (21-0) = finish your drink</li>
        <li>Airball (miss the board entirely) = you drink 2</li>
      </ul>
      <p><strong>Pro tip:</strong> Set up near the cooler so refills are easy.</p>

      <h3>KanJam</h3>
      <p>Frisbee game where your partner deflects the disc into a can. Teams of 2.</p>
      <p><strong>Drinking rules:</strong></p>
      <ul>
        <li>Dinger (hit the can) = opponents drink 1</li>
        <li>Deuce (partner slams it in top) = opponents drink 2</li>
        <li>Bucket (direct hit through slot) = opponents finish drinks</li>
        <li>Missed throw = you drink 1</li>
      </ul>

      <h3>Ladder Toss (Ladder Golf)</h3>
      <p>Throw bolas (two balls connected by rope) at a three-rung ladder.</p>
      <p><strong>Drinking rules:</strong></p>
      <ul>
        <li>Each rung hit = opponent drinks that many (top=1, middle=2, bottom=3)</li>
        <li>Wrap both bolas on same rung = opponent drinks double</li>
        <li>Miss the ladder = you drink 1</li>
      </ul>

      <h3>Spikeball</h3>
      <p>2v2, bounce a ball off a trampoline net. Intense and athletic.</p>
      <p><strong>Drinking rules:</strong></p>
      <ul>
        <li>Point scored = losing team drinks</li>
        <li>Rim shot (hits the rim) = contested replay, both teams drink</li>
        <li>Get to 0 (skunked) = finish drinks</li>
      </ul>

      <h3>Bocce Ball</h3>
      <p>Italian lawn bowling. Get your balls closest to the pallino (target ball).</p>
      <p><strong>Drinking rules:</strong></p>
      <ul>
        <li>Closest ball = assign drinks equal to points scored</li>
        <li>Knock opponent away from pallino = they drink 2</li>
        <li>Hit the pallino = everyone drinks 1</li>
      </ul>

      <h2>Table Games Taken Outside</h2>

      <h3>Beer Pong</h3>
      <p>The classic works even better outdoors. Set up on a folding table in the shade.</p>
      <p><strong>Outdoor advantages:</strong> No ceiling for high arcs, space for spectators, tournament brackets</p>
      <p><strong>Wind tip:</strong> Put a bit more liquid in cups to weight them down</p>
      <p><Link href="/game/beer-pong" className="text-neon-pink">Full Beer Pong rules →</Link></p>

      <h3>Flip Cup</h3>
      <p>Team relay racing. Works on any flat surface - picnic tables are perfect.</p>
      <p><strong>Outdoor advantage:</strong> Spills don&apos;t matter, can run multiple tables simultaneously</p>
      <p><Link href="/game/flip-cup" className="text-neon-pink">Full Flip Cup rules →</Link></p>

      <h3>Rage Cage</h3>
      <p>High-energy cup stacking chaos. Needs a solid table but works great outside.</p>
      <p><Link href="/game/rage-cage" className="text-neon-pink">Full Rage Cage rules →</Link></p>

      <h2>No-Props Games</h2>
      <p>Sometimes you just have drinks and people. These games need nothing else:</p>
      <ul>
        <li><strong><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link></strong> - Point and drink. Works sitting in lawn chairs.</li>
        <li><strong><Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link></strong> - Classic confession game. Great for mixed groups.</li>
        <li><strong><Link href="/game/medusa" className="text-neon-pink">Medusa</Link></strong> - Eye contact game. Works standing in a circle.</li>
        <li><strong><Link href="/game/cheers-to-the-governor" className="text-neon-pink">Cheers to the Governor</Link></strong> - Count to 21 with rules. Works anywhere.</li>
      </ul>

      <h2>Water-Adjacent Games</h2>
      <p>If you&apos;re near a pool, lake, or beach:</p>
      <ul>
        <li><strong>Pool Pong</strong> - Floating beer pong with inflatable racks</li>
        <li><strong>Marco Polo Drinking</strong> - Finder assigns drinks</li>
        <li><strong>Chicken Fight</strong> - Losers drink</li>
        <li><strong>Diving Contest</strong> - Judges assign drinks for bad form</li>
      </ul>

      <h2>Outdoor Drinking Tips</h2>

      <h3>Temperature Management</h3>
      <ul>
        <li>Multiple coolers &gt; one big cooler (less opening/closing)</li>
        <li>Pre-chill drinks before adding to cooler</li>
        <li>Keep coolers in shade at all times</li>
        <li>Koozies are essential - warm beer is sad beer</li>
      </ul>

      <h3>Safety & Logistics</h3>
      <ul>
        <li><strong>Plastic only</strong> - No glass near bare feet</li>
        <li><strong>Sunscreen</strong> - Drunk sunburns are brutal</li>
        <li><strong>Hydration</strong> - Water station should be as visible as the cooler</li>
        <li><strong>Shade options</strong> - Tents, umbrellas, or tree cover</li>
        <li><strong>Bug spray</strong> - Mosquitoes love standing targets</li>
      </ul>

      <h3>Wind Management</h3>
      <ul>
        <li>Weight cups with extra liquid</li>
        <li>Cards blow away - use poker chips or play no-prop games</li>
        <li>Anchor tablecloths with clips</li>
        <li>Set up games perpendicular to wind direction</li>
      </ul>

      <h2>Best Settings for Outdoor Drinking</h2>
      <ul>
        <li><strong>Backyard BBQ</strong> - Cornhole, Flip Cup, Beer Pong</li>
        <li><strong>Tailgate</strong> - Beer Pong, Most Likely To, Flip Cup</li>
        <li><strong>Beach</strong> - Spikeball, Bocce, No-props games</li>
        <li><strong>Park</strong> - KanJam, Ladder Toss (check local laws)</li>
        <li><strong>Camping</strong> - <Link href="/guides/camping-drinking-games" className="text-neon-pink">See our camping guide</Link></li>
      </ul>

      <p>Find more games: <Link href="/games" className="text-neon-pink hover:underline">Browse all drinking games</Link> | <Link href="/guides/backyard-drinking-games" className="text-neon-pink hover:underline">Backyard specific games</Link></p>
    </GuideLayout>
  );
}
