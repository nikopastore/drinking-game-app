import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rocket League Drinking Game Rules 2025: Nice Shot Edition",
  description: "Complete Rocket League drinking game rules! Drink on goals, own goals, and savage quick chats. Perfect for 1v1, 2v2, and 3v3 matches.",
  keywords: [
    "Rocket League drinking game",
    "Rocket League party game",
    "gaming drinking game",
    "car soccer drinking game",
    "esports drinking game",
    "Rocket League rules",
    "video game drinking",
    "multiplayer drinking game"
  ],
  openGraph: {
    title: "Rocket League Drinking Game: Nice Shot Edition",
    description: "Turn your Rocket League matches into a drinking game.",
    type: "article",
    url: "https://sipwiki.app/guides/rocket-league-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/rocket-league-drinking-game",
  },
};

export default function RocketLeagueDrinkingGamePage() {
  return (
    <GuideLayout
      title="Rocket League Drinking Game: Nice Shot Edition"
      description="Supersonic Acrobatic Rocket-Powered Battle-Drinking. These rules turn every aerial, every goal, and every 'What a save!' into a drinking opportunity."
      breadcrumb="Rocket League Drinking Game"
    >
      <div className="bg-gradient-to-r from-blue-900/30 to-orange-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-2">🚗⚽ Mode Selection</h2>
        <p className="text-gray-300">
          These rules work for any Rocket League mode. 1v1 is most intense,
          3v3 spreads the drinking more evenly. Choose your difficulty!
        </p>
      </div>

      <h2>Basic Goal Rules</h2>
      <p>The core drinking rules for every match:</p>
      <ul>
        <li><strong>Get scored on:</strong> Take 1 drink per goal</li>
        <li><strong>Score a goal:</strong> Give out 1 drink</li>
        <li><strong>Score an own goal:</strong> Take 3 drinks (maximum shame)</li>
        <li><strong>Get shutout:</strong> Finish your drink at end of match</li>
        <li><strong>Win the match:</strong> Losers drink difference in score</li>
        <li><strong>Overtime:</strong> Everyone drinks at OT start</li>
        <li><strong>Overtime winner:</strong> Losers take 2 extra drinks</li>
      </ul>

      <h2>Assist & Save Rules</h2>
      <ul>
        <li><strong>Get an assist:</strong> Give out 1 drink</li>
        <li><strong>Epic save:</strong> Give out 2 drinks</li>
        <li><strong>Save that should&apos;ve been a goal:</strong> Other team drinks for frustration</li>
        <li><strong>Miss an open net:</strong> Take 2 drinks</li>
        <li><strong>Hit the post/crossbar:</strong> Take 1 drink</li>
      </ul>

      <h2>Style Points Rules</h2>
      <p>Bonus drinks for impressive plays:</p>
      <ul>
        <li><strong>Aerial goal:</strong> Give out 2 extra drinks</li>
        <li><strong>Bicycle kick goal:</strong> Give out 3 extra drinks</li>
        <li><strong>Double touch:</strong> Give out 2 extra drinks</li>
        <li><strong>Ceiling shot:</strong> Give out 3 extra drinks</li>
        <li><strong>Flip reset goal:</strong> Give out 4 drinks + respect</li>
        <li><strong>Pool shot (passing to yourself off the wall):</strong> Give out 2 drinks</li>
        <li><strong>Dribble goal:</strong> Give out 2 extra drinks</li>
        <li><strong>Demo goal (demolish then score):</strong> Give out 3 drinks</li>
      </ul>

      <h2>Quick Chat Rules</h2>
      <p>Based on quick chat usage:</p>
      <ul>
        <li><strong>Use &quot;What a save!&quot; sarcastically:</strong> Everyone drinks</li>
        <li><strong>Get hit with &quot;What a save!&quot;:</strong> Take 1 drink</li>
        <li><strong>Use &quot;Nice shot!&quot; sincerely:</strong> Recipient gives out 1 drink</li>
        <li><strong>Spam quick chat:</strong> Take 1 drink</li>
        <li><strong>Use &quot;Okay.&quot;:</strong> Take 1 passive-aggressive drink</li>
        <li><strong>Use &quot;No Problem.&quot; after a mistake:</strong> Take 1 drink</li>
        <li><strong>Use &quot;gg&quot; before the game ends:</strong> Finish your drink (bad luck)</li>
      </ul>

      <h2>Demolition Rules</h2>
      <ul>
        <li><strong>Demolish an opponent:</strong> They take 1 drink</li>
        <li><strong>Get demolished:</strong> Take 1 drink</li>
        <li><strong>Extermination (multiple demos):</strong> Victims take 2 drinks each</li>
        <li><strong>Demo someone right before they score:</strong> Give out 3 drinks</li>
        <li><strong>Get demo&apos;d right before you score:</strong> Take 3 drinks</li>
      </ul>

      <h2>1v1 Rules</h2>
      <p>Most intense mode - adjusted rules:</p>
      <ul>
        <li>Every goal against: 1 drink</li>
        <li>Every goal you score: Opponent drinks 1</li>
        <li>Lose 5-0 or worse: Take a shot</li>
        <li>Win 5-0 or worse: Opponent takes a shot</li>
        <li>Own goal: 3 drinks + shame</li>
        <li>OT goal: Loser finishes drink</li>
      </ul>

      <h2>2v2 Team Rules</h2>
      <ul>
        <li>Get scored on: Both teammates drink</li>
        <li>Score a goal: Both opponents drink</li>
        <li>Teammate whiffs: Don&apos;t comment, just drink together</li>
        <li>Ball chase each other: Both drink for bad rotation</li>
        <li>Perfect passing play: Opponents drink 2 each</li>
      </ul>

      <h2>3v3 Team Rules</h2>
      <ul>
        <li>Get scored on: Whole team drinks</li>
        <li>Person who last touched it: Extra drink</li>
        <li>Team that scores: Give out total of 3 drinks to other team</li>
        <li>Hat trick (3 goals, 1 player): Other team takes a shot</li>
        <li>Whole team touches ball for goal: Other team drinks 2 each</li>
      </ul>

      <h2>Rank/Competitive Rules</h2>
      <ul>
        <li><strong>Rank up:</strong> Everyone else takes a drink</li>
        <li><strong>Rank down:</strong> You take a shot</li>
        <li><strong>Division up:</strong> Give out 1 drink</li>
        <li><strong>Division down:</strong> Take 1 drink</li>
        <li><strong>Play against higher rank and win:</strong> Give out 3 drinks</li>
        <li><strong>Lose to lower rank:</strong> Take 3 drinks</li>
      </ul>

      <h2>Casual/Party Mode</h2>
      <p>For chill sessions:</p>
      <ul>
        <li>Opponent leaves mid-match: Toast to your skill</li>
        <li>Bot joins: Everyone drinks to the bot</li>
        <li>Beat a team with a bot: Slight shame, 1 drink</li>
        <li>Lose to a team with a bot: Massive shame, 3 drinks</li>
      </ul>

      <h2>Mutators Mode</h2>
      <p>Special rules for mutator matches:</p>
      <ul>
        <li><strong>Rumble powerup kill:</strong> Give out 2 drinks</li>
        <li><strong>Get killed by powerup:</strong> Take 2 drinks</li>
        <li><strong>Score in Snow Day (hockey):</strong> Give out 1 drink</li>
        <li><strong>Score in Hoops:</strong> Give out 2 drinks (it&apos;s hard)</li>
        <li><strong>Score in Dropshot:</strong> Give out 1 drink per tile broken</li>
      </ul>

      <h2>Game Variants</h2>

      <h3>Free Play Drinking</h3>
      <ul>
        <li>Set up shots, take turns trying</li>
        <li>Miss the shot: Take 1 drink</li>
        <li>Make the shot: Give out 1 drink</li>
        <li>Style on the shot: Give out 2 drinks</li>
      </ul>

      <h3>Training Pack Race</h3>
      <ul>
        <li>Same training pack, race to complete</li>
        <li>First to finish: Gives out 5 drinks</li>
        <li>Last to finish: Takes 5 drinks</li>
        <li>Reset a shot: Take 1 drink</li>
      </ul>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Skill Gap Warning</h3>
        <p className="text-gray-300">
          Rocket League skill varies WILDLY. A Diamond player will destroy a Silver.
          If there&apos;s a big skill gap, consider handicaps: better player has to
          score aerials only, or plays with camera shake on. Balance the drinking!
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Sports Game Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/video-game-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            All Video Game Drinking →
          </Link>
          <Link
            href="/guides/mario-party-drinking-game"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Mario Party
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
