import { Metadata} from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "20 Best Summer Drinking Games (2024) | Beach & Outdoor Party Games",
  description: "Summer drinking games for outdoors! Beach games, pool party games, backyard BBQ games, and warm weather party ideas. Perfect for summer 2024!",
  keywords: ["summer drinking games", "beach drinking games", "pool party games", "outdoor drinking games summer", "backyard drinking games"],
  openGraph: { title: "20 Best Summer Drinking Games", type: "article", url: "https://sipwiki.app/guides/summer-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/summer-drinking-games" },
};

export default function SummerDrinkingGamesPage() {
  return (
    <GuideLayout
      title="20 Best Summer Drinking Games for Outdoors"
      description="Summer means sun, friends, and outdoor drinking games. From beach parties to backyard BBQs, these games make warm weather gatherings legendary."
      breadcrumb="Summer Drinking Games"
      relatedGames={[
        { name: "Beer Pong", slug: "beer-pong", description: "Classic outdoor game" },
        { name: "Flip Cup", slug: "flip-cup", description: "Perfect for summer" },
        { name: "Cornhole", slug: "cornhole", description: "Lawn game classic" },
      ]}
    >
      <QuickAnswer
        question="What are the best summer drinking games?"
        answer="Best summer drinking games: (1) Beach Beer Pong - waterproof setup on sand, (2) Spikeball Drinking Edition - miss = drink, (3) Cornhole with Drinks - bag scoring assigns drinks, (4) Pool Volleyball - losing team drinks, (5) Flip Cup Outdoors - classic team relay. Beach games need waterproof cards/cups. Pool games add water element. Backyard BBQs = lawn games (Cornhole, KanJam, Washers) with drinking rules. Summer peak: Memorial Day to Labor Day weekends."
        tips={[
          "Beach games = waterproof everything",
          "Pool games = use plastic cups only",
          "Stay hydrated - alternate water & alcohol",
          "Memorial Day/4th of July/Labor Day = peak party days"
        ]}
        variant="primary"
      />

      <h2>Beach Drinking Games</h2>

      <h3>Beach Beer Pong</h3>
      <ul>
        <li>Bring portable Beer Pong table or use coolers</li>
        <li>Weight cups with water/sand so they don't blow away</li>
        <li>Waterproof ping pong balls (they'll get wet)</li>
        <li>Play <Link href="/games/beer-pong" className="text-neon-pink">Beer Pong</Link> normally</li>
        <li>Bonus: "Beach rules" - if wave hits table, restart round</li>
        <li>Use canned drinks (easier than pouring beer constantly)</li>
      </ul>

      <h3>Waterproof Kings Cup</h3>
      <ul>
        <li>Use waterproof playing cards</li>
        <li>Anchor King's Cup with sand</li>
        <li>Standard <Link href="/games/kings-cup" className="text-neon-pink">Kings Cup</Link> rules</li>
        <li>If card blows away, everyone drinks</li>
        <li>Sand in King's Cup? Too bad, drink it anyway</li>
      </ul>

      <h3>Beach Ball Truth or Drink</h3>
      <ul>
        <li>Write questions on beach ball with permanent marker</li>
        <li>Toss ball to someone</li>
        <li>They answer question their right thumb lands on</li>
        <li>Refuse to answer: drink 3</li>
        <li>Everyone thinks answer is a lie: drink 2</li>
      </ul>

      <h3>Beach Frisbee</h3>
      <ul>
        <li>Play catch with frisbee</li>
        <li>Drop it: drink</li>
        <li>Bad throw (uncatchable): thrower drinks</li>
        <li>Trick catches earn the right to assign drinks</li>
      </ul>

      <h2>Pool Party Drinking Games</h2>

      <h3>Pool Volleyball with Drinking</h3>
      <ul>
        <li>Set up volleyball net across pool</li>
        <li>Teams of 2-4 per side</li>
        <li>Losing team of each game drinks</li>
        <li>First to 11 points (win by 2)</li>
        <li>Champion team assigns penalty drinks</li>
      </ul>

      <h3>Marco Polo Drinking Edition</h3>
      <ul>
        <li>Classic Marco Polo rules</li>
        <li>If "Marco" catches you: you drink</li>
        <li>"Marco" catches someone in under 1 min: everyone else drinks</li>
        <li>"Marco" can't catch anyone in 2 min: "Marco" drinks 3</li>
      </ul>

      <h3>Chicken Fight Drinking</h3>
      <ul>
        <li>Pairs form - one on shoulders</li>
        <li>Try to knock opposing top person off</li>
        <li>Fall off: your team drinks</li>
        <li>Win: assign 2 drinks to losing team</li>
        <li>Tournament bracket for multiple pairs</li>
      </ul>

      <h3>Floaty Flip Cup</h3>
      <ul>
        <li>Set cups on inflatable rafts/floaties</li>
        <li>Players swim to raft, drink, flip cup</li>
        <li>Next teammate goes when cup flips</li>
        <li>First team to finish wins</li>
        <li>Extra difficulty: cups constantly moving on water</li>
      </ul>

      <h2>Backyard BBQ Drinking Games</h2>

      <h3>Cornhole with Drinking</h3>
      <p>Classic lawn game with alcohol:</p>
      <ul>
        <li>Bag on board: opponent drinks 1</li>
        <li>Bag in hole: opponent drinks 3</li>
        <li>Get skunked (21-0): finish your drink</li>
        <li>Airball (miss board): you drink 2</li>
        <li>Cancellation scoring still applies</li>
      </ul>

      <h3>KanJam Drinking Edition</h3>
      <ul>
        <li>Dinger (hit can): opponents drink 1</li>
        <li>Deuce (partner slams it in top): opponents drink 2</li>
        <li>Bucket (through slot): opponents finish drinks</li>
        <li>Miss throw: you drink 1</li>
        <li>First to 21 points wins</li>
      </ul>

      <h3>Ladder Toss (Ladder Golf) with Drinks</h3>
      <ul>
        <li>Top rung: opponents drink 3</li>
        <li>Middle rung: opponents drink 2</li>
        <li>Bottom rung: opponents drink 1</li>
        <li>Miss all rungs: you drink 2</li>
      </ul>

      <h3>Washers Drinking Game</h3>
      <ul>
        <li>Land in cup: opponents drink 3</li>
        <li>Land on board: opponents drink 1</li>
        <li>Miss board: you drink</li>
        <li>First to 21 wins, losers finish drinks</li>
      </ul>

      <h2>Classic Games - Summer Edition</h2>

      <h3>Outdoor Flip Cup</h3>
      <ul>
        <li>Perfect for picnic tables</li>
        <li>Warm weather = faster drinking (careful!)</li>
        <li>Losing team does summer-themed penalty (push-ups, sprints)</li>
        <li>Tournament brackets for BBQ competitions</li>
      </ul>

      <h3>Spike Ball with Drinking</h3>
      <ul>
        <li>2v2 teams around Spikeball net</li>
        <li>Lose a point: your team drinks</li>
        <li>Lose game (21 points): finish drinks</li>
        <li>Can play elimination tournament</li>
      </ul>

      <h3>Outdoor Beer Pong Tournament</h3>
      <ul>
        <li>Set up multiple tables</li>
        <li>Run bracket (single or double elimination)</li>
        <li>Championship game at sunset</li>
        <li>Winner gets BBQ prize (best burger, premium beer)</li>
      </ul>

      <h2>Summer-Specific Party Games</h2>

      <h3>Watermelon Keg Stand</h3>
      <ul>
        <li>Hollow out watermelon, fill with vodka punch</li>
        <li>Players do "keg stands" drinking from tap</li>
        <li>Longest time wins</li>
        <li>Very summer, very fun, very messy</li>
      </ul>

      <h3>Ice Luge Races</h3>
      <ul>
        <li>Freeze water in long trough/tube shape</li>
        <li>Pour shots down ice luge</li>
        <li>Race to finish shot at bottom</li>
        <li>Last to finish drinks penalty</li>
      </ul>

      <h3>Dizzy Bat</h3>
      <ul>
        <li>Chug beer from wiffle bat</li>
        <li>Spin around bat 10 times</li>
        <li>Try to hit pitched ball</li>
        <li>Miss: run bases while dizzy</li>
        <li>WARNING: very intense, pace yourself</li>
      </ul>

      <h2>Summer Party Planning</h2>

      <h3>Summer Drinks</h3>
      <ul>
        <li>Light beers (stay refreshed)</li>
        <li>Margaritas (classic summer cocktail)</li>
        <li>Piña coladas (pool party essential)</li>
        <li>Spiked lemonade/iced tea</li>
        <li>Rosé (summer wine)</li>
        <li>White Claws/seltzers (low-calorie, refreshing)</li>
        <li>Frozen daiquiris</li>
      </ul>

      <h3>Summer Party Essentials</h3>
      <ul>
        <li>Coolers with ice (lots of ice)</li>
        <li>Sunscreen (drinking + sun = bad burns)</li>
        <li>Waterproof playing cards</li>
        <li>Portable speaker (summer playlist)</li>
        <li>Plastic cups only (no glass near pool/beach)</li>
        <li>Water for hydration</li>
        <li>Shade (canopy/umbrella)</li>
        <li>Towels</li>
        <li>Bug spray</li>
      </ul>

      <h3>Safety in Summer Heat</h3>
      <ul>
        <li>Hydrate constantly - alternate water and alcohol</li>
        <li>Sunscreen every 2 hours (even when drinking)</li>
        <li>Avoid drinking in direct sun during peak heat (12-3pm)</li>
        <li>Watch for heat exhaustion signs</li>
        <li>Pool safety: no diving drunk</li>
        <li>Beach safety: strong swimmers only, no ocean drunk</li>
        <li>Stay in shade when possible</li>
      </ul>

      <h2>Summer Event Calendar</h2>
      <ul>
        <li><strong>Memorial Day Weekend (late May):</strong> Unofficial summer start, massive parties</li>
        <li><strong>June weekends:</strong> Grad parties, early summer BBQs</li>
        <li><strong>4th of July:</strong> Peak summer party day, fireworks + drinking games</li>
        <li><strong>July weekends:</strong> Pool parties, beach trips</li>
        <li><strong>August weekends:</strong> Last summer hurrah before fall</li>
        <li><strong>Labor Day Weekend (early Sept):</strong> Summer finale, go big</li>
      </ul>

      <h2>Location-Specific Tips</h2>

      <h3>Beach Parties</h3>
      <ul>
        <li>Check local alcohol laws (some beaches ban it)</li>
        <li>Bring trash bags (leave no trace)</li>
        <li>Weight everything down (wind)</li>
        <li>Waterproof phone case essential</li>
        <li>Set up far from families with kids</li>
      </ul>

      <h3>Pool Parties</h3>
      <ul>
        <li>Plastic cups only (NO glass)</li>
        <li>Designate non-swimmer lifeguard</li>
        <li>Music volume: respect neighbors</li>
        <li>Have indoor backup for severe weather</li>
      </ul>

      <h3>Backyard BBQs</h3>
      <ul>
        <li>Set up game stations (Cornhole, KanJam, Beer Pong)</li>
        <li>Grill master stays sober (food safety)</li>
        <li>Bug spray available</li>
        <li>Citronella candles for mosquitoes</li>
      </ul>

      <h2>Best Summer Drinking Game Combinations</h2>
      <p><strong>Beach Day:</strong> Beach Beer Pong → Waterproof Kings Cup → Beach Ball Truth or Drink → Chill drinking as sun sets</p>
      <p><strong>Pool Party:</strong> Pool Volleyball → Marco Polo Drinking → Chicken Fights → Floaty Flip Cup</p>
      <p><strong>BBQ Party:</strong> Cornhole → KanJam → Outdoor Beer Pong Tournament → Dizzy Bat finale</p>

      <p className="mt-8">
        Browse more: <Link href="/guides/outdoor-drinking-games" className="text-neon-pink">Outdoor Games</Link> | <Link href="/guides/beach-drinking-games" className="text-neon-pink">Beach Games</Link>
      </p>
    </GuideLayout>
  );
}
