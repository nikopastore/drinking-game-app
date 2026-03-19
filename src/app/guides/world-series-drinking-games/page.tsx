import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "World Series Drinking Games: MLB Playoff Watch Party (2025)",
  description: "World Series drinking games for baseball fans! Game action rules, inning-by-inning drinking, pitcher changes, and more. Make the Fall Classic even better.",
  keywords: [
    "world series drinking games",
    "baseball drinking games",
    "mlb playoff drinking game",
    "world series party games",
    "baseball watching drinking game",
    "fall classic party",
  ],
  openGraph: {
    title: "World Series Drinking Games",
    description: "Baseball's biggest stage meets drinking games.",
    type: "article",
    url: "https://sipwiki.app/guides/world-series-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/world-series-drinking-games",
  },
};

export default function WorldSeriesDrinkingGamesPage() {
  return (
    <GuideLayout
      title="World Series Drinking Games: Fall Classic Party"
      description="Turn the World Series into the ultimate watch party. These games sync with every pitch, hit, and dramatic moment. Baseball is already a drinking sport - now make it official."
      breadcrumb="World Series Games"
      relatedGames={[
        { name: "Beer Pong", slug: "beer-pong", description: "Classic game" },
        { name: "Flip Cup", slug: "flip-cup", description: "Between innings" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Rain delay fun" },
      ]}
    >
      <QuickAnswer
        question="What are good World Series drinking game rules?"
        answer="Pick teams - your team scores, opponents drink. Home run = opponents drink 3. Strikeout = batter's team drinks. Base hit = defense fans drink 1. Walk = pitcher's team drinks. Caught stealing = runner's team drinks 2. Every inning change = everyone drinks. Extra innings = finish and refill."
        tips={[
          "Divide by teams - creates stakes",
          "Drink on runs, strikeouts, and key plays",
          "7th inning stretch = mini game break",
          "Extra innings = everyone finishes drinks"
        ]}
        variant="primary"
      />

      <h2>Pick Your Team Rules</h2>
      <p>Divide the party by team allegiance. Neutral fans pick a side or drink on everything:</p>
      <ul>
        <li><strong>Your team scores a run:</strong> Opposing fans drink 1</li>
        <li><strong>Your team gives up a run:</strong> Your side drinks 1</li>
        <li><strong>Your team hits a home run:</strong> Opposing fans drink 3</li>
        <li><strong>Your team strikes out:</strong> Your side drinks 1</li>
        <li><strong>Your team walks someone:</strong> Your side drinks 1</li>
      </ul>

      <h2>Play-by-Play Drinking</h2>

      <h3>Hits</h3>
      <ul>
        <li><strong>Single:</strong> Defense fans drink 1</li>
        <li><strong>Double:</strong> Defense fans drink 2</li>
        <li><strong>Triple:</strong> Defense fans drink 3</li>
        <li><strong>Home run:</strong> Defense fans drink 3 + the batter's jersey number divided by 10</li>
        <li><strong>Grand slam:</strong> Defense fans finish their drink</li>
      </ul>

      <h3>Strikeouts & Walks</h3>
      <ul>
        <li><strong>Strikeout looking:</strong> Batter's team drinks 2</li>
        <li><strong>Strikeout swinging:</strong> Batter's team drinks 1</li>
        <li><strong>Walk:</strong> Pitcher's team drinks 1</li>
        <li><strong>Hit by pitch:</strong> Everyone drinks (dangerous play)</li>
        <li><strong>Intentional walk:</strong> Social drink</li>
      </ul>

      <h3>Baserunning</h3>
      <ul>
        <li><strong>Stolen base:</strong> Defense fans drink 1</li>
        <li><strong>Caught stealing:</strong> Runner's team drinks 2</li>
        <li><strong>Pickoff:</strong> Runner's team drinks 2</li>
        <li><strong>Balk:</strong> Everyone drinks (rare and confusing)</li>
      </ul>

      <h3>Defense</h3>
      <ul>
        <li><strong>Error:</strong> That team's fans drink 2</li>
        <li><strong>Double play:</strong> Offense fans drink 2</li>
        <li><strong>Triple play:</strong> Offense fans finish drinks (legendary)</li>
        <li><strong>Spectacular catch:</strong> Offense fans drink and applaud</li>
      </ul>

      <h2>Inning-by-Inning</h2>
      <ul>
        <li><strong>Every inning change:</strong> Everyone drinks 1</li>
        <li><strong>1-2-3 inning:</strong> That team's fans celebrate and assign 3 drinks</li>
        <li><strong>7th inning stretch:</strong> Stand, stretch, everyone drinks</li>
        <li><strong>Scoreless inning:</strong> Both teams drink 1</li>
      </ul>

      <h2>Pitcher Rules</h2>
      <ul>
        <li><strong>Pitcher change:</strong> That team drinks during warmup</li>
        <li><strong>Mound visit:</strong> Everyone drinks during the visit</li>
        <li><strong>Pitch clock violation:</strong> Everyone drinks</li>
        <li><strong>Wild pitch:</strong> Pitcher's fans drink 2</li>
        <li><strong>Passed ball:</strong> Catcher's fans drink 2</li>
      </ul>

      <h2>Broadcaster Triggers</h2>
      <ul>
        <li>"World Series history" mentioned - drink 1</li>
        <li>Stat from regular season - drink 1</li>
        <li>Player's backstory segment - drink throughout</li>
        <li>Crowd shot of nervous fans - drink 1</li>
        <li>"Clutch" or "pressure" mentioned - drink 1</li>
        <li>Camera on manager looking stressed - drink 1</li>
      </ul>

      <h2>Between Innings Games</h2>

      <h3>Quick Flip Cup</h3>
      <p>
        Commercial breaks are 2-3 minutes. Set up a quick <Link href="/games/flip-cup" className="text-neon-pink hover:underline">Flip Cup</Link> race.
        Winning team gets to skip the next drinking penalty.
      </p>

      <h3>Prediction Shots</h3>
      <p>Between innings, predict:</p>
      <ul>
        <li>Will there be a hit this inning?</li>
        <li>Will there be a strikeout?</li>
        <li>First pitch ball or strike?</li>
      </ul>
      <p>Wrong predictions = drink.</p>

      <h2>Extra Innings Rules</h2>
      <p>When the game goes to extras:</p>
      <ul>
        <li>10th inning starts = everyone finishes current drink</li>
        <li>Each additional inning = mandatory drink</li>
        <li>Runner on 2nd rule (Manfred runner) = both teams drink</li>
        <li>Walk-off hit = losing team finishes drinks</li>
      </ul>

      <h2>World Series Specials</h2>
      <ul>
        <li><strong>Series-clinching game:</strong> Double all drink amounts</li>
        <li><strong>Game 7:</strong> Everyone drinks on every pitch (just kidding - maybe every strikeout)</li>
        <li><strong>Trophy presentation:</strong> Toast and finish drinks</li>
        <li><strong>MVP announcement:</strong> If you predicted correctly, assign 10 drinks</li>
      </ul>

      <h2>Pregame Predictions</h2>
      <p>Before first pitch, everyone predicts:</p>
      <ul>
        <li>Final score</li>
        <li>First home run hitter</li>
        <li>Total strikeouts</li>
        <li>Will there be extra innings?</li>
        <li>MVP of the game</li>
      </ul>
      <p>Most wrong = penalty drinks at game's end.</p>

      <h2>For Non-Baseball Fans</h2>
      <ul>
        <li>Assign them a random player number to follow</li>
        <li>Drink when your number does anything</li>
        <li>Focus on home runs and strikeouts - easiest to track</li>
        <li>Give them commercial game duties</li>
      </ul>

      <h2>End of Game</h2>
      <ul>
        <li>Losing team fans finish drinks</li>
        <li>Walk-off winner = winning fans assign 5 drinks each</li>
        <li>Shutout = losing fans finish drinks AND take a shot</li>
        <li>Predicted score exactly = assign 15 drinks</li>
      </ul>

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
            href="/guides/tailgate-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            Tailgate Games →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
