import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Super Bowl Drinking Games (2024) | Football Watching Games",
  description: "Make the Super Bowl even more exciting with these drinking games! Complete guide with game action rules, commercial games, halftime activities, and party tips for the big game.",
  keywords: ["super bowl drinking games", "football drinking games", "super bowl party games", "nfl drinking games", "watching football drinking game", "big game drinking games"],
  openGraph: { title: "Super Bowl Drinking Games", description: "Game day, drink day!", type: "article", url: "https://sipwiki.app/guides/super-bowl-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/super-bowl-drinking-games" },
};

export default function SuperBowlPage() {
  return (
    <GuideLayout title="Super Bowl Drinking Games" description="The biggest game deserves the biggest party. These drinking games sync with the action on screen and keep everyone engaged - even non-football fans who are just there for the commercials." breadcrumb="Super Bowl Games" relatedGames={[{ name: "Most Likely To", slug: "most-likely-to", description: "Halftime fun" }, { name: "Flip Cup", slug: "flip-cup", description: "Commercial break" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Sports edition" }]}>
      <h2>Pick Your Team, Pick Your Rules</h2>
      <p>Divide the party by which team they&apos;re rooting for. Team-based drinking creates stakes:</p>
      <ul>
        <li>Your team scores a touchdown = opposing fans drink</li>
        <li>Your team allows a touchdown = you drink</li>
        <li>Your team turns it over = you drink</li>
        <li>Your team gets a sack = opposing fans drink</li>
      </ul>
      <p>Non-fans? They drink on every score.</p>

      <h2>Game Action Drinking Rules</h2>

      <h3>Every Play Counts</h3>
      <ul>
        <li><strong>Touchdown</strong> - Opposing fans drink 3</li>
        <li><strong>Field goal</strong> - Opposing fans drink 1</li>
        <li><strong>Safety</strong> - Everyone drinks 2 (rare but worth celebrating)</li>
        <li><strong>Interception</strong> - Offense fans finish their drink</li>
        <li><strong>Fumble</strong> - Offense fans drink 2</li>
        <li><strong>Sack</strong> - Offense fans drink 1</li>
        <li><strong>4th down conversion</strong> - Defense fans drink 2</li>
        <li><strong>Missed field goal</strong> - Kicker&apos;s team fans drink 2</li>
      </ul>

      <h3>Penalty Drinks</h3>
      <ul>
        <li>Flag thrown - everyone drinks 1</li>
        <li>False start - offense fans drink</li>
        <li>Pass interference - defense fans drink</li>
        <li>Personal foul - that team&apos;s fans finish their drink</li>
        <li>Overturned call after review - everyone drinks during review</li>
      </ul>

      <h3>Broadcaster Triggers</h3>
      <ul>
        <li>&quot;Underthrown&quot; or &quot;overthrown&quot; - drink 1</li>
        <li>Replay shown more than twice - drink throughout</li>
        <li>Announcer mentions a player&apos;s college - drink 1</li>
        <li>Injury timeout - moment of silence, then drink</li>
        <li>&quot;That&apos;s a catch!&quot; controversy - drink during review</li>
      </ul>

      <h2>Commercial Break Games</h2>
      <p>The real Super Bowl for many people:</p>

      <h3>Commercial Bingo</h3>
      <p>Create bingo cards with common commercial themes:</p>
      <ul>
        <li>Celebrity cameo</li>
        <li>Cute animal</li>
        <li>Beer commercial</li>
        <li>Car commercial</li>
        <li>Movie trailer</li>
        <li>Tech company</li>
        <li>Crypto/financial services</li>
        <li>Emotional tearjerker</li>
        <li>Attempt at humor that fails</li>
      </ul>
      <p>First bingo = assigns 5 drinks.</p>

      <h3>Commercial Drinking Rules</h3>
      <ul>
        <li>Celebrity appears - drink 1</li>
        <li>Dog or cat - drink 1</li>
        <li>Baby - drink 1</li>
        <li>Beer commercial - everyone drinks (obviously)</li>
        <li>Car jumps or does something unrealistic - drink 2</li>
        <li>Cryptic commercial where you don&apos;t know the product - drink 2</li>
        <li>Actually funny commercial - toast and drink</li>
        <li>Cringeworthy commercial - drink to forget</li>
      </ul>

      <h3>Rate the Commercials</h3>
      <p>Everyone rates each commercial 1-10. Lowest rater for the group consensus winner = drinks. Highest rater for group consensus worst = drinks.</p>

      <h2>Halftime Show Games</h2>

      <h3>Halftime Drinking Bingo</h3>
      <ul>
        <li>Costume change - drink 1</li>
        <li>Pyrotechnics - drink 1</li>
        <li>Guest appearance - drink 2</li>
        <li>Crowd shot - drink 1</li>
        <li>Flying/zip line moment - drink 2</li>
        <li>Lip sync fail - drink 3</li>
        <li>Classic song from 10+ years ago - drink 1</li>
        <li>New song debut - drink 2</li>
      </ul>

      <h3>Halftime Flip Cup Tournament</h3>
      <p>15-20 minute break = perfect for a quick <Link href="/games/flip-cup" className="text-neon-pink">Flip Cup</Link> tournament. Team A fans vs Team B fans. Losers wear the winner&apos;s team colors for the second half.</p>

      <h3>Halftime Predictions</h3>
      <p>During halftime, write predictions for the second half:</p>
      <ul>
        <li>Final score</li>
        <li>First to score</li>
        <li>Total points</li>
        <li>Will there be an interception?</li>
      </ul>
      <p>Wrong predictions = drink at end of game.</p>

      <h2>Pregame Party Games</h2>
      <p>Before kickoff:</p>

      <h3>Football Trivia</h3>
      <p>Super Bowl history, teams, players. Wrong answer = drink. Three right in a row = assign drinks.</p>

      <h3>Prediction Pool</h3>
      <p>Everyone puts in predictions for:</p>
      <ul>
        <li>Winner</li>
        <li>MVP</li>
        <li>First scorer</li>
        <li>Total points (over/under)</li>
        <li>Will there be a safety?</li>
        <li>Longest touchdown</li>
      </ul>
      <p>Wrong predictions = drinks. Most correct = assigns drinks all game.</p>

      <h3>Most Likely To: Sports Edition</h3>
      <ul>
        <li>Who&apos;s most likely to fall asleep by halftime?</li>
        <li>Who&apos;s most likely to only watch for commercials?</li>
        <li>Who&apos;s most likely to argue about a call?</li>
        <li>Who&apos;s most likely to eat all the wings?</li>
      </ul>
      <p><Link href="/games/most-likely-to" className="text-neon-pink">Play Most Likely To →</Link></p>

      <h2>For Non-Football Fans</h2>
      <p>Keep everyone engaged:</p>
      <ul>
        <li>Commercial rating is their game</li>
        <li>Player number bingo - pick numbers, drink when they&apos;re mentioned</li>
        <li>Fashion police - drink for questionable sideline outfits</li>
        <li>Guess the next play type - pass/run, drink if wrong</li>
      </ul>

      <h2>Super Bowl Snacks + Drinks</h2>
      <ul>
        <li><strong>Wings</strong> - Pace the heat with the drinking</li>
        <li><strong>Beer</strong> - Classic choice, easy to pace</li>
        <li><strong>Cocktails</strong> - Make themed drinks for each team</li>
        <li><strong>Shots</strong> - Save for touchdowns only</li>
        <li><strong>Water</strong> - 4-hour game, stay hydrated</li>
      </ul>

      <h2>Party Setup Tips</h2>
      <ul>
        <li><strong>Multiple screens</strong> - Living room + kitchen if possible</li>
        <li><strong>TV volume</strong> - Important for call-related triggers</li>
        <li><strong>Score tracker visible</strong> - Everyone should see the score</li>
        <li><strong>Drink refill station</strong> - Don&apos;t miss plays getting drinks</li>
        <li><strong>Food near TV</strong> - But not blocking the view</li>
      </ul>

      <h2>End of Game Rules</h2>
      <ul>
        <li>Losing team fans finish their drinks</li>
        <li>MVP correctly predicted = that person assigns 10 drinks</li>
        <li>Score exactly correct = assigns 20 drinks</li>
        <li>Game goes to overtime = everyone finishes and refills</li>
      </ul>

      <p>More event games: <Link href="/guides/new-years-eve-drinking-games" className="text-neon-pink hover:underline">New Year&apos;s Eve games</Link> | <Link href="/guides/tailgate-drinking-games" className="text-neon-pink hover:underline">Tailgate games</Link></p>
    </GuideLayout>
  );
}
