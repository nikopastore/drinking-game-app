import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stanley Cup Drinking Games: NHL Playoff Watch Party (2025)",
  description: "Stanley Cup drinking games for hockey fans! Goal rules, penalty box drinks, hat tricks, and overtime chaos. Make the playoffs even more intense.",
  keywords: [
    "stanley cup drinking games",
    "nhl drinking game",
    "hockey drinking games",
    "playoff hockey drinking",
    "nhl finals party",
    "hockey watch party",
  ],
  openGraph: {
    title: "Stanley Cup Drinking Games",
    description: "Hockey and drinking - a perfect match.",
    type: "article",
    url: "https://sipwiki.app/guides/stanley-cup-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/stanley-cup-drinking-games",
  },
};

export default function StanleyCupDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Stanley Cup Drinking Games: Playoff Hockey Party"
      description="Hockey is already intense. Add drinking rules for goals, penalties, fights, and overtime heroics. These games sync with the fastest sport on ice for the ultimate playoff experience."
      breadcrumb="Stanley Cup Games"
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Intermission game" },
        { name: "Beer Pong", slug: "beer-pong", description: "Pre-game classic" },
        { name: "Rage Cage", slug: "rage-cage", description: "Fast-paced like hockey" },
      ]}
    >
      <QuickAnswer
        question="What are good Stanley Cup drinking game rules?"
        answer="Pick teams - goal = opponents drink 3. Power play goal = opponents drink 4. Shorthanded goal = opponents drink 5. Fight = everyone drinks. Penalty = that team drinks. Hat trick = opponents finish drinks. Overtime goal = losers finish everything. Goalie pulled = both teams drink."
        tips={[
          "Team-based drinking creates stakes",
          "Goals, fights, and penalties all trigger drinks",
          "Overtime = everyone finishes before it starts",
          "Cup presentation = toast and celebrate"
        ]}
        variant="primary"
      />

      <h2>Pick Your Team Rules</h2>
      <p>Hockey moves fast. Pace your drinking accordingly:</p>
      <ul>
        <li><strong>Your team scores:</strong> Opposing fans drink 3</li>
        <li><strong>Your team allows a goal:</strong> You drink 3</li>
        <li><strong>Your team takes a penalty:</strong> You drink 2</li>
        <li><strong>Your team scores on power play:</strong> Opponents drink 4</li>
        <li><strong>Your team scores shorthanded:</strong> Opponents drink 5</li>
      </ul>

      <h2>Goal Celebrations</h2>
      <ul>
        <li><strong>Regular goal:</strong> Defense fans drink 3</li>
        <li><strong>Power play goal:</strong> Penalized team drinks 4</li>
        <li><strong>Shorthanded goal:</strong> Other team drinks 5</li>
        <li><strong>Empty net goal:</strong> Other team drinks 2</li>
        <li><strong>Own goal:</strong> That team finishes drinks</li>
        <li><strong>Hat trick:</strong> Other team finishes drinks</li>
        <li><strong>Gordie Howe hat trick:</strong> Everyone takes a shot</li>
      </ul>

      <h2>Penalty Box Drinks</h2>
      <ul>
        <li><strong>Minor penalty (2 min):</strong> That team drinks 2</li>
        <li><strong>Major penalty (5 min):</strong> That team drinks 5</li>
        <li><strong>Double minor:</strong> That team drinks 4</li>
        <li><strong>Penalty shot:</strong> Everyone drinks during the attempt</li>
        <li><strong>Game misconduct:</strong> That team finishes drinks</li>
        <li><strong>Goalie penalty:</strong> That team drinks 4 (rare!)</li>
      </ul>

      <h2>Fighting Rules</h2>
      <ul>
        <li><strong>Fight breaks out:</strong> Everyone drinks during the fight</li>
        <li><strong>Your player wins:</strong> Opponents drink 2</li>
        <li><strong>Your player loses:</strong> You drink 2</li>
        <li><strong>Line brawl:</strong> Everyone finishes their drink</li>
        <li><strong>Goalie fight:</strong> Everyone takes a shot</li>
      </ul>

      <h2>Period Rules</h2>
      <ul>
        <li><strong>End of each period:</strong> Everyone drinks</li>
        <li><strong>Scoreless period:</strong> Both sides drink</li>
        <li><strong>3+ goal period:</strong> Losing team drinks extra</li>
        <li><strong>Tied after 2:</strong> Social drink</li>
      </ul>

      <h2>Goalie Drinks</h2>
      <ul>
        <li><strong>Big save:</strong> Offense fans drink 1</li>
        <li><strong>Glove save:</strong> Offense fans drink 2</li>
        <li><strong>Puck behind net (delay):</strong> Everyone drinks during</li>
        <li><strong>Goalie pulled:</strong> Both teams drink</li>
        <li><strong>Shutout:</strong> That goalie's opponents finish drinks</li>
      </ul>

      <h2>Broadcaster Triggers</h2>
      <ul>
        <li>"Playoff atmosphere" = drink 1</li>
        <li>"Battle in front of the net" = drink 1</li>
        <li>Slow-mo replay of hit = drink during</li>
        <li>"Lord Stanley" mentioned = drink 1</li>
        <li>Player's playoff beard shown = drink 1</li>
        <li>"This team has heart" = drink 1</li>
        <li>Towel wave shown = drink 1</li>
      </ul>

      <h2>Overtime Rules</h2>
      <p>Playoff overtime is sudden death. The stakes are high:</p>
      <ul>
        <li><strong>OT starts:</strong> Everyone finishes current drink</li>
        <li><strong>Every 5 minutes of OT:</strong> Everyone drinks</li>
        <li><strong>Double OT:</strong> Take a shot before it starts</li>
        <li><strong>Triple OT:</strong> At this point, just keep drinking</li>
        <li><strong>OT goal:</strong> Losing team finishes everything</li>
      </ul>

      <h2>Intermission Games</h2>

      <h3>Hockey Trivia</h3>
      <p>Name Stanley Cup winners, famous plays, etc. Wrong = drink.</p>

      <h3>Flip Cup Tournament</h3>
      <p>
        Run a <Link href="/game/flip-cup" className="text-neon-pink hover:underline">Flip Cup</Link>
        bracket during intermission. Losers wear the other team's colors.
      </p>

      <h3>Prediction Shots</h3>
      <ul>
        <li>Who scores next?</li>
        <li>Will there be a fight?</li>
        <li>Over/under on penalties?</li>
      </ul>

      <h2>Stanley Cup Finals Specials</h2>
      <ul>
        <li><strong>Game 7:</strong> Double all drink amounts</li>
        <li><strong>Cup-clinching game:</strong> Double everything</li>
        <li><strong>Cup presented:</strong> Toast with everyone</li>
        <li><strong>MVP announced:</strong> If predicted correctly, assign 10 drinks</li>
        <li><strong>Cup passed to next player:</strong> Drink each time</li>
      </ul>

      <h2>Playoff Beard Rules</h2>
      <ul>
        <li>Comment on someone's beard = they drink</li>
        <li>Best beard on your team wins = opponents drink</li>
        <li>Beard shown in close-up = that team drinks</li>
      </ul>

      <h2>For Non-Hockey Fans</h2>
      <ul>
        <li>Explain icing vs offside once. After that, wrong call = they drink</li>
        <li>Assign them to track hits</li>
        <li>Give them fight duty - they announce when fights happen</li>
        <li>Put them on snack/drink refill duty</li>
      </ul>

      <h2>End of Game</h2>
      <ul>
        <li>Losing team fans finish drinks</li>
        <li>Shutout = losers take a shot</li>
        <li>OT win = winners assign 5 drinks each</li>
        <li>Predicted exact score = assign 15 drinks</li>
      </ul>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Pacing Tip:</strong> Hockey games can be low-scoring or high-scoring. Adjust your
          drink amounts based on how the game is going. If it's 5-4, ease up. If it's 1-0 in the third,
          you might want to increase the stakes.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Sports Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/super-bowl-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            Super Bowl Games →
          </Link>
          <Link
            href="/guides/nba-finals-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            NBA Finals Games →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
