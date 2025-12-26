import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Call of Duty Drinking Game Rules 2025: Warzone & Multiplayer",
  description: "Complete Call of Duty drinking game rules for Warzone, multiplayer, and Zombies! Drink on deaths, killstreaks, and rage quits.",
  keywords: [
    "Call of Duty drinking game",
    "Warzone drinking game",
    "COD drinking game",
    "multiplayer drinking game",
    "FPS drinking game",
    "gaming drinking game",
    "Black Ops drinking game",
    "Modern Warfare drinking game"
  ],
  openGraph: {
    title: "Call of Duty Drinking Game: Warzone Edition",
    description: "Turn your COD session into a drinking game experience.",
    type: "article",
    url: "https://sipwiki.app/guides/call-of-duty-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/call-of-duty-drinking-game",
  },
};

export default function CallOfDutyDrinkingGamePage() {
  return (
    <GuideLayout
      title="Call of Duty Drinking Game: Warzone & Multiplayer Edition"
      description="Drop in, drink up, respawn. These rules work for Warzone, multiplayer, and even Zombies. Just don't blame the alcohol for your K/D ratio."
      breadcrumb="Call of Duty Drinking Game"
    >
      <div className="bg-gradient-to-r from-green-900/30 to-gray-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-2">🎯 Game Modes</h2>
        <p className="text-gray-300">
          Rules are divided by mode. Pick the section that matches what you&apos;re playing.
          Works for Modern Warfare, Black Ops, Warzone, or any COD game.
        </p>
      </div>

      <h2>Warzone/Battle Royale Rules</h2>

      <h3>Basic Warzone Rules</h3>
      <ul>
        <li><strong>Get downed:</strong> Take 1 drink</li>
        <li><strong>Get fully eliminated:</strong> Take 2 drinks</li>
        <li><strong>Win your Gulag:</strong> Give out 2 drinks</li>
        <li><strong>Lose your Gulag:</strong> Take 2 drinks + watch teammates</li>
        <li><strong>Get bought back:</strong> Take 1 thank-you drink</li>
        <li><strong>Die to the gas:</strong> Take 2 drinks (how?)</li>
        <li><strong>Die off the drop:</strong> Finish your drink</li>
        <li><strong>Win the match:</strong> Everyone else finishes their drinks</li>
      </ul>

      <h3>Kill-Based Warzone Rules</h3>
      <ul>
        <li><strong>Get a kill:</strong> Give out 1 drink</li>
        <li><strong>Get 0 kills and die:</strong> Take 3 drinks</li>
        <li><strong>Get a melee kill:</strong> Give out 3 drinks</li>
        <li><strong>Finishing move:</strong> Give out 5 drinks</li>
        <li><strong>Vehicle kill:</strong> Give out 2 drinks</li>
        <li><strong>Killed by vehicle:</strong> Take 3 drinks</li>
      </ul>

      <h3>Team Warzone Rules</h3>
      <ul>
        <li><strong>Whole squad wipes:</strong> Everyone takes 3 drinks</li>
        <li><strong>Last one alive:</strong> Take 1 drink, carry your team</li>
        <li><strong>Squad gets top 10:</strong> Opponents drink</li>
        <li><strong>Squad win:</strong> Non-squad members finish drinks</li>
      </ul>

      <h2>Multiplayer Rules</h2>

      <h3>Basic Multiplayer Rules</h3>
      <ul>
        <li><strong>Die:</strong> Take 1 drink</li>
        <li><strong>Go negative (K/D under 1):</strong> Finish drink at end of match</li>
        <li><strong>Get killed by the same person 3+ times:</strong> Take a shot</li>
        <li><strong>Kill someone 3+ times:</strong> They take a shot</li>
        <li><strong>Get a kill:</strong> Give out 1 drink (cap at 10 per match)</li>
      </ul>

      <h3>Killstreak Rules</h3>
      <ul>
        <li><strong>Call in UAV:</strong> Give out 1 drink</li>
        <li><strong>Call in Airstrike:</strong> Give out 2 drinks</li>
        <li><strong>Call in Chopper Gunner:</strong> Give out 3 drinks</li>
        <li><strong>Get a Nuke/MOAB:</strong> Everyone else takes a shot + you win the night</li>
        <li><strong>Die to a killstreak:</strong> Take 1 drink</li>
        <li><strong>Shoot down a killstreak:</strong> Give out 2 drinks</li>
      </ul>

      <h3>Death-Specific Rules</h3>
      <ul>
        <li><strong>Get quickscoped:</strong> Take 2 drinks</li>
        <li><strong>Get 360 no-scoped:</strong> Finish your drink (respect)</li>
        <li><strong>Die to a camper:</strong> Take 1 drink + call them out</li>
        <li><strong>Get knifed:</strong> Take 2 drinks</li>
        <li><strong>Get killed by own equipment:</strong> Take 3 drinks</li>
        <li><strong>Fall damage death:</strong> Take 2 drinks</li>
      </ul>

      <h2>Search & Destroy Rules</h2>
      <ul>
        <li>Die: Take 1 drink, watch the rest of the round</li>
        <li>Die first: Take 2 drinks</li>
        <li>Plant the bomb: Give out 2 drinks</li>
        <li>Defuse the bomb: Give out 3 drinks</li>
        <li>Clutch a round: Give out drinks equal to enemies killed</li>
        <li>Get aced (whole team dies): Everyone takes 2 drinks</li>
        <li>Ace the enemy team: Give out a shot to each opponent</li>
        <li>Lose the match: Losing team finishes drinks</li>
      </ul>

      <h2>Zombies Mode Rules</h2>

      <h3>Basic Zombies Rules</h3>
      <ul>
        <li><strong>Go down:</strong> Take 1 drink</li>
        <li><strong>Get revived:</strong> Thank them with a drink</li>
        <li><strong>Bleed out:</strong> Take 2 drinks</li>
        <li><strong>Whole squad goes down:</strong> Everyone takes 3 drinks</li>
        <li><strong>Open a door when you shouldn&apos;t:</strong> Take 1 drink (you know what you did)</li>
      </ul>

      <h3>Pack-a-Punch & Perks</h3>
      <ul>
        <li>Pack-a-Punch a weapon: Give out 1 drink</li>
        <li>Get Juggernog: Give out 1 drink</li>
        <li>Lose all perks: Take 1 drink per perk lost</li>
        <li>Get the Ray Gun: Give out 3 drinks</li>
        <li>Get the Wonder Weapon: Give out 5 drinks</li>
      </ul>

      <h3>Round-Based Rules</h3>
      <ul>
        <li>Survive to Round 10: Toast together</li>
        <li>Survive to Round 20: Give out 5 drinks total</li>
        <li>Survive to Round 30: Everyone else takes a shot</li>
        <li>Hit your personal best round: Give out 3 drinks</li>
        <li>Die on a round ending in 0 or 5: Extra drink</li>
      </ul>

      <h2>Rage Quit Rules</h2>
      <ul>
        <li><strong>Rage quit:</strong> Finish your drink immediately</li>
        <li><strong>Blame lag:</strong> Take 1 drink</li>
        <li><strong>Blame the game:</strong> Take 1 drink</li>
        <li><strong>Blame teammates:</strong> Take 2 drinks</li>
        <li><strong>Actually lag out:</strong> Free pass, everyone else drinks for you</li>
        <li><strong>Throw controller:</strong> Finish drink + buy the next round</li>
      </ul>

      <h2>Lobby Drinking Rules</h2>
      <ul>
        <li>Wait more than 2 minutes for a match: Everyone drinks</li>
        <li>Get trash talked in lobby: Take 1 drink or clap back</li>
        <li>Get put in a match already in progress: Take 1 drink</li>
        <li>Winning team at join = instant loss: Take 2 drinks</li>
      </ul>

      <h2>Variants</h2>

      <h3>1v1 Mode</h3>
      <ul>
        <li>Every death: Take 1 drink</li>
        <li>Every kill: Give 1 drink</li>
        <li>Win the match: Loser takes a shot</li>
        <li>Perfect round (no deaths): Give out 5 drinks</li>
      </ul>

      <h3>Snipers Only</h3>
      <ul>
        <li>Miss a shot: Take 1 sip</li>
        <li>Hit a headshot: Give out 2 drinks</li>
        <li>Get a collateral: Give out 5 drinks</li>
        <li>No scope kill: Give out 3 drinks</li>
      </ul>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Skill-Based Drinking</h3>
        <p className="text-gray-300">
          COD has skill-based matchmaking (SBMM), which means skill levels should
          be somewhat even. But if there&apos;s a big skill gap in your group, adjust
          the rules - maybe better players drink on deaths, worse players drink less.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More FPS Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/video-game-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Video Game Drinking Games →
          </Link>
          <Link
            href="/guides/smash-bros-drinking-game"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Smash Bros
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
