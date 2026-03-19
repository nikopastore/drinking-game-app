import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "College Football Drinking Games: Saturday Watch Party (2025)",
  description: "College football drinking games for game day! Touchdown rules, rivalry games, upset specials, and more. Make every Saturday more exciting.",
  keywords: [
    "college football drinking games",
    "cfb drinking game",
    "game day drinking games",
    "college football party",
    "saturday football drinking",
    "ncaa football drinking game",
  ],
  openGraph: {
    title: "College Football Drinking Games",
    description: "Every Saturday is game day.",
    type: "article",
    url: "https://sipwiki.app/guides/college-football-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/college-football-drinking-games",
  },
};

export default function CollegeFootballDrinkingGamesPage() {
  return (
    <GuideLayout
      title="College Football Drinking Games: Game Day Rules"
      description="Saturday means college football, and college football means drinking games. Whether you're watching your team or flipping between games for chaos, these rules make every snap matter."
      breadcrumb="College Football Games"
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "Halftime classic" },
        { name: "Beer Pong", slug: "beer-pong", description: "Tailgate essential" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Commercial break" },
      ]}
    >
      <QuickAnswer
        question="What are good college football drinking game rules?"
        answer="Pick your team - touchdowns = opponents drink 4, field goals = 2. Your team allows a score = your side drinks. Turnovers, sacks, and penalties all have drink rules. GameDay mentions your school = drink. Upset alert = everyone finishes. Conference championship and bowl games get double rules."
        tips={[
          "Team-based drinking creates rivalry stakes",
          "Drink on scores, turnovers, and big plays",
          "GameDay triggers if you're watching pregame",
          "Rivalry games = double all drink amounts"
        ]}
        variant="primary"
      />

      <h2>Your Team Rules</h2>
      <p>The basics for watching your school play:</p>
      <ul>
        <li><strong>Your team scores TD:</strong> Opposing fans drink 4</li>
        <li><strong>Your team kicks FG:</strong> Opposing fans drink 2</li>
        <li><strong>Your team allows TD:</strong> You drink 4</li>
        <li><strong>Your team allows FG:</strong> You drink 2</li>
        <li><strong>Your team turns it over:</strong> You drink 3</li>
        <li><strong>Your team forces turnover:</strong> Opponents drink 3</li>
      </ul>

      <h2>Play-by-Play Rules</h2>

      <h3>Offense</h3>
      <ul>
        <li><strong>First down:</strong> Defense fans sip</li>
        <li><strong>3rd down conversion:</strong> Defense fans drink 2</li>
        <li><strong>4th down conversion:</strong> Defense fans drink 3</li>
        <li><strong>Failed 4th down:</strong> Offense fans drink 3</li>
        <li><strong>50+ yard play:</strong> Defense fans drink 3</li>
        <li><strong>Trick play works:</strong> Defense fans drink 4</li>
        <li><strong>Trick play fails:</strong> Offense fans drink 4</li>
      </ul>

      <h3>Defense</h3>
      <ul>
        <li><strong>Sack:</strong> Offense fans drink 2</li>
        <li><strong>Interception:</strong> Offense fans drink 3</li>
        <li><strong>Pick-six:</strong> Offense fans finish their drink</li>
        <li><strong>Fumble recovery:</strong> Offense fans drink 3</li>
        <li><strong>Safety:</strong> Everyone drinks (rare!)</li>
        <li><strong>Goal line stand:</strong> Offense fans drink 4</li>
      </ul>

      <h3>Special Teams</h3>
      <ul>
        <li><strong>Missed field goal:</strong> Kicker's fans drink 3</li>
        <li><strong>Blocked kick:</strong> That team's fans drink 4</li>
        <li><strong>Punt return TD:</strong> Kicking team finishes drinks</li>
        <li><strong>Kickoff return TD:</strong> Kicking team finishes drinks</li>
        <li><strong>Onside kick recovered:</strong> Receiving team drinks 4</li>
      </ul>

      <h2>Penalty Drinks</h2>
      <ul>
        <li><strong>False start:</strong> Offense fans drink 1</li>
        <li><strong>Offsides:</strong> Defense fans drink 1</li>
        <li><strong>Pass interference:</strong> Defense fans drink 2</li>
        <li><strong>Targeting:</strong> That team finishes drinks</li>
        <li><strong>Unsportsmanlike conduct:</strong> That team drinks 3</li>
        <li><strong>Facemask:</strong> That team drinks 2</li>
      </ul>

      <h2>GameDay Rules</h2>
      <p>If you're watching College GameDay pregame:</p>
      <ul>
        <li>Your school mentioned = drink 1</li>
        <li>Lee Corso headgear pick = drink for whoever he picked against</li>
        <li>Celebrity guest picker = drink during their segment</li>
        <li>Sign shown = try to read it, drink 1</li>
        <li>"Atmosphere" mentioned = drink 1</li>
        <li>Your rival mentioned = drink 2</li>
      </ul>

      <h2>Broadcaster Triggers</h2>
      <ul>
        <li>"College football playoff implications" = drink 1</li>
        <li>Transfer portal mentioned = drink 1</li>
        <li>"NIL deal" mentioned = drink 1</li>
        <li>Coach's salary mentioned = drink 1</li>
        <li>Heisman candidate = drink 1</li>
        <li>"This crowd is electric" = drink 1</li>
        <li>Storming the field = everyone finishes</li>
      </ul>

      <h2>Rivalry Game Rules</h2>
      <p>For your biggest rivalry game, DOUBLE all drink amounts. Plus:</p>
      <ul>
        <li>Any score = both teams drink</li>
        <li>Lead change = everyone finishes</li>
        <li>Overtime = take a shot before it starts</li>
        <li>Win = losers drink for the rest of the night at double rate</li>
      </ul>

      <h2>Multi-Game Saturday</h2>
      <p>Watching multiple games? Pick teams for each:</p>
      <ul>
        <li>Noon games: Light drinking rules</li>
        <li>3:30 games: Standard rules</li>
        <li>Prime time: Full rules</li>
        <li>Pac-12 After Dark: Chaos rules (anything goes)</li>
      </ul>

      <h3>Channel Flipping Rules</h3>
      <ul>
        <li>Every channel change = everyone drinks</li>
        <li>Catch a score while flipping = drink</li>
        <li>Miss your team's score = drink 3</li>
      </ul>

      <h2>Upset Watch</h2>
      <ul>
        <li>Ranked team down at half = drink</li>
        <li>Upset final = everyone watching finishes</li>
        <li>Unranked beats top 10 = take a shot</li>
        <li>#1 team loses = everyone takes a shot</li>
      </ul>

      <h2>Conference Championship Rules</h2>
      <p>For conference championship games:</p>
      <ul>
        <li>All rules are doubled</li>
        <li>Trophy presentation = toast and finish</li>
        <li>Confetti = drink throughout</li>
        <li>Coach gets dumped with Gatorade = drink</li>
      </ul>

      <h2>Bowl Game/Playoff Rules</h2>
      <ul>
        <li>Pregame band performance = drink during</li>
        <li>Mascot shown = drink 1</li>
        <li>Celebrity in crowd = drink 1</li>
        <li>National Anthem = stand and drink after</li>
        <li>Trophy lift = finish drinks</li>
      </ul>

      <h2>Halftime Activities</h2>

      <h3>Flip Cup Tournament</h3>
      <p>
        Run a quick <Link href="/games/flip-cup" className="text-neon-pink hover:underline">Flip Cup</Link> bracket.
        Winning team picks the next game to watch.
      </p>

      <h3>Predict the Second Half</h3>
      <ul>
        <li>Who scores first?</li>
        <li>Total second half points?</li>
        <li>Will there be a turnover?</li>
      </ul>
      <p>Wrong predictions = drinks at game end.</p>

      <h2>For Non-Fans</h2>
      <ul>
        <li>Give them a team to root for randomly</li>
        <li>Assign them the upset underdog</li>
        <li>Have them focus on commercials</li>
        <li>Put them on snack duty</li>
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
