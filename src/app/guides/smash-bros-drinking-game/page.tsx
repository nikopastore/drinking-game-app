import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Super Smash Bros Drinking Game Rules 2025: KO Edition",
  description: "Complete Super Smash Bros drinking game rules! Drink on KOs, SDs, and more. Perfect for Smash Ultimate parties and tournaments.",
  keywords: [
    "Smash Bros drinking game",
    "Super Smash Bros drinking game",
    "Smash Ultimate drinking game",
    "Nintendo drinking game",
    "video game drinking game",
    "Smash party games",
    "fighting game drinking game",
    "gaming party"
  ],
  openGraph: {
    title: "Super Smash Bros Drinking Game: KO Edition",
    description: "Turn your Smash Bros sessions into drinking game chaos.",
    type: "article",
    url: "https://sipwiki.app/guides/smash-bros-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/smash-bros-drinking-game",
  },
};

export default function SmashBrosDrinkingGamePage() {
  return (
    <GuideLayout
      title="Super Smash Bros Drinking Game: KO Edition"
      description="Everyone's favorite fighting game meets everyone's favorite drinking game format. Get ready to get smashed in more ways than one."
      breadcrumb="Smash Bros Drinking Game"
    >
      <div className="bg-gradient-to-r from-red-900/30 to-yellow-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-2">🎮 Game Modes</h2>
        <p className="text-gray-300">
          These rules work for any Smash game (Melee, Brawl, Ultimate), but are
          optimized for Ultimate. Adjust for your preferred game.
        </p>
      </div>

      <h2>Basic Stock Match Rules</h2>
      <p>For standard stock battles (recommended: 3 stock):</p>
      <ul>
        <li><strong>Get KO&apos;d:</strong> Take 1 drink</li>
        <li><strong>SD (Self-Destruct):</strong> Take 2 drinks (embarrassing)</li>
        <li><strong>Get spiked/meteor smashed:</strong> Take 2 drinks</li>
        <li><strong>Get KO&apos;d at 0% (combo&apos;d off stage):</strong> Take 3 drinks</li>
        <li><strong>Lose all stocks first:</strong> Finish your drink</li>
        <li><strong>Get 3-stocked:</strong> Take a shot</li>
        <li><strong>Win the match:</strong> Give out drinks equal to stocks remaining</li>
      </ul>

      <h2>Time Match Rules</h2>
      <p>For timed matches:</p>
      <ul>
        <li>Every death: 1 drink</li>
        <li>Negative KO count at end: Finish drink</li>
        <li>Lowest score: Take a shot</li>
        <li>Highest score: Give out 5 drinks</li>
        <li>Tie for first: Both give out 2 drinks</li>
      </ul>

      <h2>Free-For-All Chaos Rules (4+ Players)</h2>
      <ul>
        <li><strong>Any KO:</strong> KO&apos;d player drinks 1</li>
        <li><strong>Steal a kill:</strong> Give a drink to whoever got stolen from</li>
        <li><strong>Get 2 kills in 5 seconds:</strong> Give out 3 drinks</li>
        <li><strong>Die first:</strong> Waterfall until next death</li>
        <li><strong>Win:</strong> Everyone else drinks</li>
        <li><strong>Last place:</strong> Finish drink + loser picks your character next round</li>
      </ul>

      <h2>Team Battle Rules</h2>
      <ul>
        <li>Teammate gets KO&apos;d: Both team members drink</li>
        <li>Friendly fire KO: KO-er takes a shot (you monster)</li>
        <li>Team gets 2-stocked: Both take a shot</li>
        <li>Carry your teammate (3+ KOs difference): Teammate drinks 3</li>
        <li>Winning team: Gives out drinks equal to total stocks remaining</li>
      </ul>

      <h2>Character-Specific Rules</h2>
      <p>Add these based on character picks:</p>

      <h3>Extra Drinking For:</h3>
      <ul>
        <li><strong>Playing your &quot;main&quot;:</strong> Double drinks if you lose</li>
        <li><strong>Counter-picking:</strong> If you still lose, 3 extra drinks</li>
        <li><strong>Random select:</strong> If you win, give out 5 extra drinks</li>
      </ul>

      <h3>Character Challenges:</h3>
      <ul>
        <li><strong>Jigglypuff:</strong> Rest KO = everyone else takes a shot</li>
        <li><strong>Captain Falcon:</strong> Falcon Punch KO = everyone drinks</li>
        <li><strong>Ganondorf:</strong> Any KO = you give out 2 extra drinks</li>
        <li><strong>Little Mac:</strong> Survive without SD-ing = give out 3 drinks</li>
        <li><strong>King K. Rool:</strong> Belly super armor saves you = 1 drink</li>
        <li><strong>Steve:</strong> Any steve shenanigans = drink</li>
        <li><strong>Ness/Lucas:</strong> PK Fire spam = everyone points at you and you drink</li>
      </ul>

      <h2>Stage-Specific Rules</h2>
      <ul>
        <li><strong>Final Destination:</strong> No excuses. Loser drinks double</li>
        <li><strong>Battlefield:</strong> Platform camp kills = camper drinks</li>
        <li><strong>Temple:</strong> Cave of Life timeout = everyone drinks</li>
        <li><strong>Hyrule Castle:</strong> Tornado KO = everyone drinks</li>
        <li><strong>Big Blue:</strong> Get hit by car = 1 drink</li>
        <li><strong>75m:</strong> Why are you playing this? Everyone drinks</li>
      </ul>

      <h2>Item Rules</h2>
      <p>If playing with items:</p>
      <ul>
        <li>Get KO&apos;d by a Hammer: 2 drinks</li>
        <li>Get KO&apos;d by a Smash Ball final smash: 1 drink</li>
        <li>Bob-omb yourself: 3 drinks</li>
        <li>Home Run Bat KO: Victim takes a shot</li>
        <li>Pokéball legendary appears: Everyone drinks</li>
        <li>Kill with Mr. Saturn: Give out 5 drinks (respect)</li>
      </ul>

      <h2>Tournament Rules</h2>
      <p>For bracket-style drinking tournaments:</p>
      <ul>
        <li>Standard stock match rules apply</li>
        <li>Loser of each match: Take tournament drink</li>
        <li>Get sent to losers bracket: Take a shot</li>
        <li>Eliminate someone from tournament: Give them a drink</li>
        <li>Grand Finals reset: Everyone drinks during the break</li>
        <li>Tournament winner: Gives out 10 drinks total</li>
        <li>Tournament loser: Finishes current drink</li>
      </ul>

      <h2>Spectator Rules</h2>
      <p>For those waiting to play:</p>
      <ul>
        <li>Call a KO correctly before it happens: Give out 1 drink</li>
        <li>Call a KO wrong: Take 1 drink</li>
        <li>Your favorite character gets KO&apos;d: 1 drink</li>
        <li>Hype moment happens: Everyone drinks</li>
        <li>Someone SDs: Point and drink</li>
      </ul>

      <h2>Game Mode Variations</h2>

      <h3>Smashville Draft</h3>
      <ul>
        <li>Each player picks a character for another player</li>
        <li>Must play that character</li>
        <li>Normal rules apply</li>
        <li>If you win with the assigned character: Give out 5 extra drinks</li>
      </ul>

      <h3>Low Tier Night</h3>
      <ul>
        <li>Everyone must play a low tier character</li>
        <li>Get KO&apos;d by a bottom tier move: 2 extra drinks</li>
        <li>Win with a low tier: Give out extra drinks</li>
      </ul>

      <h3>Stamina Mode</h3>
      <ul>
        <li>Drink every time you take 50% damage</li>
        <li>Die: Finish your drink</li>
        <li>Win with over 100 HP remaining: Give out drinks = HP remaining / 20</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=nintendo+switch+controller&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Extra Controllers</h4>
          <p className="text-gray-400 text-sm">You&apos;ll need enough for everyone</p>
          <span className="text-neon-pink font-bold">$25-70</span>
        </a>
        <a href="https://www.amazon.com/s?k=gamecube+controller+ultimate&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">GameCube Controller</h4>
          <p className="text-gray-400 text-sm">For the serious players</p>
          <span className="text-neon-pink font-bold">$30-50</span>
        </a>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Skill Gap Warning</h3>
        <p className="text-gray-300">
          If there&apos;s a big skill gap, use handicaps or the less skilled players
          will just get drunk while the pro stays sober. Consider random select for
          the better player, or use stock handicaps.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Video Game Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/drunk-mario-kart-rules"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Drunk Mario Kart →
          </Link>
          <Link
            href="/guides/video-game-drinking-games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            All Video Game Games
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
