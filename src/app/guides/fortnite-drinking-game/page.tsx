import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fortnite Drinking Game Rules 2025: Victory Royale Edition",
  description: "Complete Fortnite drinking game rules! Drink on eliminations, storm deaths, and failed builds. Perfect for squad games and viewing parties.",
  keywords: [
    "Fortnite drinking game",
    "Fortnite Battle Royale drinking game",
    "Victory Royale drinking game",
    "gaming drinking game",
    "battle royale drinking game",
    "Fortnite party game",
    "video game drinking",
    "squad drinking game"
  ],
  openGraph: {
    title: "Fortnite Drinking Game: Victory Royale Edition",
    description: "Turn your Fortnite sessions into a drinking game.",
    type: "article",
    url: "https://sipwiki.app/guides/fortnite-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/fortnite-drinking-game",
  },
};

export default function FortniteDrinkingGamePage() {
  return (
    <GuideLayout
      title="Fortnite Drinking Game: Victory Royale Edition"
      description="Where we droppin'? Into a drinking game. These rules turn every match into a party, whether you're cranking 90s or hiding in bushes."
      breadcrumb="Fortnite Drinking Game"
    >
      <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-2">🎮 Note</h2>
        <p className="text-gray-300">
          These rules work for any Fortnite mode - Battle Royale, Zero Build, or
          special event modes. Adjust based on what you&apos;re playing!
        </p>
      </div>

      <h2>Basic Solo Rules</h2>
      <p>For solo Battle Royale matches:</p>
      <ul>
        <li><strong>Get eliminated:</strong> Take 2 drinks</li>
        <li><strong>Die off the drop:</strong> Take 3 drinks (rough start)</li>
        <li><strong>Die to the storm:</strong> Take 3 drinks (you had time)</li>
        <li><strong>Get a kill:</strong> Give out 1 drink</li>
        <li><strong>Win the match:</strong> Everyone else finishes their drinks</li>
        <li><strong>Top 10:</strong> Give out 2 drinks</li>
        <li><strong>Top 3:</strong> Give out 3 drinks</li>
        <li><strong>2nd place:</strong> So close... take 2 drinks</li>
      </ul>

      <h2>Squad/Duo Rules</h2>
      <p>For team modes:</p>
      <ul>
        <li><strong>Get knocked:</strong> Take 1 drink</li>
        <li><strong>Get eliminated:</strong> Take 2 drinks</li>
        <li><strong>Whole squad gets wiped:</strong> Everyone takes 3 drinks</li>
        <li><strong>Get revived:</strong> Thank-you drink</li>
        <li><strong>Revive a teammate:</strong> They owe you a drink next round</li>
        <li><strong>Be the last one alive in squad:</strong> Carry mode - give out 1 drink</li>
        <li><strong>Clutch a 1v3+:</strong> Give out drinks equal to enemies killed</li>
        <li><strong>Squad Victory Royale:</strong> Non-squad members finish drinks</li>
      </ul>

      <h2>Kill-Based Rules</h2>
      <ul>
        <li><strong>Every kill:</strong> Give out 1 drink</li>
        <li><strong>Headshot elimination:</strong> Give out 2 drinks</li>
        <li><strong>Pickaxe kill:</strong> Give out 3 drinks (disrespectful)</li>
        <li><strong>Sniper headshot:</strong> Give out 3 drinks</li>
        <li><strong>Vehicle kill:</strong> Give out 2 drinks</li>
        <li><strong>Fall damage kill:</strong> Give out 2 drinks</li>
        <li><strong>Get 0 kills and die:</strong> Take 3 drinks</li>
        <li><strong>5+ kill game:</strong> Give out 5 total drinks</li>
        <li><strong>10+ kill game:</strong> Everyone takes a shot to your skill</li>
      </ul>

      <h2>Building/Zero Build Rules</h2>

      <h3>Building Mode</h3>
      <ul>
        <li>Get outbuilt and killed: Take 2 drinks</li>
        <li>Fall off your own build: Take 2 drinks</li>
        <li>Build battle win: Give out 2 drinks</li>
        <li>Crank successful 90s in a fight: Give out 1 drink</li>
        <li>Get edited on: Take 2 drinks</li>
      </ul>

      <h3>Zero Build Mode</h3>
      <ul>
        <li>Die in the open with no cover: Take 2 drinks</li>
        <li>Win without using vehicles: Give out 3 drinks</li>
        <li>Die to someone you didn&apos;t see: Take 1 drink</li>
        <li>Perfectly positioned the whole game: Give out 2 drinks</li>
      </ul>

      <h2>Loot & Item Rules</h2>
      <ul>
        <li><strong>Find a Legendary (gold) weapon:</strong> Give out 1 drink</li>
        <li><strong>Find a Mythic weapon:</strong> Give out 2 drinks</li>
        <li><strong>Drink a Slurp/Shield:</strong> Take a real drink</li>
        <li><strong>Open a Supply Drop:</strong> Give out 1 drink</li>
        <li><strong>Steal a kill with a trap:</strong> Give out 3 drinks</li>
        <li><strong>Die to a trap:</strong> Take 3 drinks</li>
        <li><strong>Chug Jug completed:</strong> Take a big drink</li>
      </ul>

      <h2>Drop Location Rules</h2>
      <ul>
        <li><strong>Hot drop and survive:</strong> Give out 2 drinks</li>
        <li><strong>Hot drop and die immediately:</strong> Take 3 drinks</li>
        <li><strong>Land somewhere with no one:</strong> Take 1 drink (safe but boring)</li>
        <li><strong>Land at a named location:</strong> Take 1 drink</li>
        <li><strong>Land at POI and get all the loot:</strong> Give out 2 drinks</li>
      </ul>

      <h2>Emote & Style Rules</h2>
      <ul>
        <li>Successfully emote on someone you killed: Give out 2 drinks</li>
        <li>Die while emoting: Take 3 drinks (hubris)</li>
        <li>Get emoted on: Take 1 drink</li>
        <li>Default dance: Everyone drinks</li>
        <li>Use a throwback emote: Give out 1 drink</li>
      </ul>

      <h2>Special Event Rules</h2>
      <p>During live events or special modes:</p>
      <ul>
        <li>Event starts: Everyone toasts</li>
        <li>Map change: Everyone drinks</li>
        <li>New weapon introduced: First to get a kill with it gives out 5 drinks</li>
        <li>Boss killed: Killer gives out 3 drinks</li>
        <li>NPC interaction: Take 1 drink</li>
      </ul>

      <h2>Watching/Spectating Rules</h2>
      <p>For those watching after elimination:</p>
      <ul>
        <li>Your killer gets killed: Give out 2 drinks (karma)</li>
        <li>Your killer wins: You finish your drink</li>
        <li>Correctly predict next death: Give out 1 drink</li>
        <li>Backseat game and they die: Take 1 drink</li>
        <li>Teammate clutches because of your callout: They give you a drink</li>
      </ul>

      <h2>Game Variants</h2>

      <h3>Drop Roulette</h3>
      <ul>
        <li>Spin a wheel or random generator for drop location</li>
        <li>Everyone must drop there</li>
        <li>Last one alive from the group gives out drinks</li>
        <li>First eliminated takes a shot</li>
      </ul>

      <h3>Weapon Restriction</h3>
      <ul>
        <li>Can only use certain weapon types</li>
        <li>Die to a restricted weapon: Double drinks</li>
        <li>Win with restriction: Give out 5 drinks</li>
      </ul>

      <h3>Meme Loadout</h3>
      <ul>
        <li>Worst possible loadout (gray guns only)</li>
        <li>Get a kill: Give out 3 drinks</li>
        <li>Win: Legendary status, everyone takes a shot</li>
      </ul>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Match Length Note</h3>
        <p className="text-gray-300">
          Fortnite matches can be quick (if you die off the drop) or long (if you
          camp to victory). If you&apos;re playing multiple games, pace yourself. Consider
          lighter drinks or reducing rules after 3-4 games.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Battle Royale Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/call-of-duty-drinking-game"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Call of Duty/Warzone →
          </Link>
          <Link
            href="/guides/video-game-drinking-games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            All Gaming Games
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
