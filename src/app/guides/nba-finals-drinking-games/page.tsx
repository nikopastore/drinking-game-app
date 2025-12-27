import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NBA Finals Drinking Games: Basketball Watch Party (2025)",
  description: "NBA Finals drinking games for basketball fans! Three-pointers, dunks, fouls, and timeout games. Make the Finals even more exciting with these rules.",
  keywords: [
    "nba finals drinking games",
    "basketball drinking games",
    "nba playoff drinking game",
    "finals party games",
    "basketball watching drinking game",
    "nba championship party",
  ],
  openGraph: {
    title: "NBA Finals Drinking Games",
    description: "Basketball's championship meets drinking games.",
    type: "article",
    url: "https://sipwiki.app/guides/nba-finals-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/nba-finals-drinking-games",
  },
};

export default function NBAFinalsDrinkingGamesPage() {
  return (
    <GuideLayout
      title="NBA Finals Drinking Games: Championship Watch Party"
      description="Basketball is fast-paced and high-scoring - perfect for drinking games. These rules sync with the action from tipoff to the final buzzer. Get ready for a lot of three-pointers and a lot of drinks."
      breadcrumb="NBA Finals Games"
      relatedGames={[
        { name: "Beer Pong", slug: "beer-pong", description: "Halftime game" },
        { name: "Flip Cup", slug: "flip-cup", description: "Timeout fun" },
        { name: "Rage Cage", slug: "rage-cage", description: "Postgame celebration" },
      ]}
    >
      <QuickAnswer
        question="What are good NBA Finals drinking game rules?"
        answer="Pick teams - your team scores, opponents drink 1 per basket. Three-pointer = opponents drink 3. Dunk = opponents drink 2. Foul = fouling team drinks. Technical foul = that team finishes drinks. Every timeout = everyone drinks. Overtime = everyone finishes and refills."
        tips={[
          "Divide by teams for stakes",
          "Three-pointers and dunks = more drinks",
          "Lots of scoring = pace yourself",
          "Timeouts are your break time"
        ]}
        variant="primary"
      />

      <h2>Pick Your Team Rules</h2>
      <p>Basketball is high-scoring. Adjust drink amounts to survive:</p>
      <ul>
        <li><strong>Your team scores 2:</strong> Opposing fans sip</li>
        <li><strong>Your team hits a 3:</strong> Opposing fans drink 2</li>
        <li><strong>Your team dunks:</strong> Opposing fans drink 2</li>
        <li><strong>Your team gets dunked on:</strong> Your side drinks 2</li>
        <li><strong>Your team misses a free throw:</strong> Your side drinks 1</li>
      </ul>

      <h2>Scoring Drinks</h2>

      <h3>Field Goals</h3>
      <ul>
        <li><strong>Regular 2-pointer:</strong> Defense fans sip</li>
        <li><strong>Three-pointer:</strong> Defense fans drink 2</li>
        <li><strong>And-one (foul + made basket):</strong> Defense fans drink 2</li>
        <li><strong>Buzzer beater:</strong> Defense fans finish their drink</li>
        <li><strong>Half-court shot:</strong> Defense fans finish + take a shot</li>
      </ul>

      <h3>Dunks</h3>
      <ul>
        <li><strong>Regular dunk:</strong> Defense fans drink 2</li>
        <li><strong>Poster dunk (over a defender):</strong> Defense fans drink 3</li>
        <li><strong>Alley-oop:</strong> Defense fans drink 3</li>
        <li><strong>360/between legs/windmill:</strong> Defense fans drink 4</li>
      </ul>

      <h3>Free Throws</h3>
      <ul>
        <li><strong>Made free throw:</strong> Defense sips</li>
        <li><strong>Missed free throw:</strong> Shooter's team drinks 1</li>
        <li><strong>Airball free throw:</strong> Shooter's team drinks 3</li>
        <li><strong>Technical free throw:</strong> Penalized team drinks 2</li>
      </ul>

      <h2>Foul Drinks</h2>
      <ul>
        <li><strong>Regular foul:</strong> Fouling team drinks 1</li>
        <li><strong>Flagrant foul:</strong> Fouling team drinks 3</li>
        <li><strong>Technical foul:</strong> That player's fans finish their drink</li>
        <li><strong>Double technical:</strong> Everyone finishes</li>
        <li><strong>Ejection:</strong> That player's fans take a shot</li>
      </ul>

      <h2>Defense & Turnovers</h2>
      <ul>
        <li><strong>Steal:</strong> Offense fans drink 1</li>
        <li><strong>Block:</strong> Offense fans drink 2</li>
        <li><strong>Turnover:</strong> That team's fans drink 1</li>
        <li><strong>Shot clock violation:</strong> Offense fans drink 2</li>
        <li><strong>Travel:</strong> That team's fans drink 1</li>
        <li><strong>Charge taken:</strong> Offense fans drink 2</li>
      </ul>

      <h2>Quarter Rules</h2>
      <ul>
        <li><strong>End of each quarter:</strong> Everyone drinks</li>
        <li><strong>Team trailing by 10+ at quarter end:</strong> Those fans drink extra</li>
        <li><strong>Tied at quarter end:</strong> Social drink</li>
        <li><strong>Halftime:</strong> Play a quick game (see below)</li>
      </ul>

      <h2>Timeout Activities</h2>

      <h3>Prediction Game</h3>
      <p>Each timeout, predict what happens next:</p>
      <ul>
        <li>Will the next possession be a score?</li>
        <li>2 or 3 pointer on next made shot?</li>
        <li>Who scores next?</li>
      </ul>
      <p>Wrong = drink when it happens.</p>

      <h3>Quick Challenges</h3>
      <ul>
        <li>Paper basketball: Crumple and shoot into a cup - miss = drink</li>
        <li>Name players: Name a player from each team before timeout ends - fail = drink</li>
      </ul>

      <h2>Broadcaster Triggers</h2>
      <ul>
        <li>"Finals experience" mentioned - drink 1</li>
        <li>Michael Jordan comparison - drink 1</li>
        <li>LeBron's championships mentioned - drink 1</li>
        <li>"Mamba mentality" - drink 1</li>
        <li>Replay of same dunk 3+ times - drink throughout</li>
        <li>Coach interview - drink during interview</li>
        <li>"Championship DNA" - drink 1</li>
      </ul>

      <h2>Halftime Games</h2>

      <h3>Pop-a-Shot Competition</h3>
      <p>If you have a mini hoop, shoot for drinks. Miss = drink. Make 3 in a row = assign drinks.</p>

      <h3>Flip Cup</h3>
      <p>
        Team vs team <Link href="/game/flip-cup" className="text-neon-pink hover:underline">Flip Cup</Link>.
        Losing team wears the other team's colors for second half (if you have gear).
      </p>

      <h3>Halftime Predictions</h3>
      <ul>
        <li>Final score</li>
        <li>Who hits the next three</li>
        <li>Total points in third quarter</li>
        <li>Will there be a technical foul?</li>
      </ul>

      <h2>Overtime Rules</h2>
      <p>When the game goes to OT:</p>
      <ul>
        <li>Start of OT = everyone finishes current drink</li>
        <li>Double all drinking rules during OT</li>
        <li>Second OT = take a shot before it starts</li>
        <li>Walk-off shot = losing team finishes drinks</li>
      </ul>

      <h2>Star Player Rules</h2>
      <p>Pick a star player from each team:</p>
      <ul>
        <li>Your star scores = opponents drink 2</li>
        <li>Your star gets a triple-double = opponents take a shot</li>
        <li>Your star fouls out = your team finishes drinks</li>
      </ul>

      <h2>For Non-Basketball Fans</h2>
      <ul>
        <li>Assign them a player number to track</li>
        <li>Focus only on dunks and three-pointers</li>
        <li>Put them in charge of timeout activities</li>
        <li>Have them track fouls for both teams</li>
      </ul>

      <h2>End of Game</h2>
      <ul>
        <li>Losing team fans finish drinks</li>
        <li>Blowout (20+ point win) = losing fans take a shot</li>
        <li>Predicted final score within 5 points = assign 10 drinks</li>
        <li>Predicted exact score = legendary status + assign 20 drinks</li>
      </ul>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Pacing Tip:</strong> NBA games are high-scoring. Use sips instead of drinks for
          regular baskets or you'll be gone by halftime. Save the bigger drinks for dunks,
          threes, and dramatic moments.
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
            href="/guides/world-series-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            World Series Games →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
