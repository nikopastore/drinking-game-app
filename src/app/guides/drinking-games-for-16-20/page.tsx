import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 16-20 People (2025) | Huge Party Games",
  description: "The best drinking games for big groups of 16-20 people. Multi-station setups, Beer Olympics, tournaments, and mass participation games!",
  keywords: [
    "drinking games for 16 people",
    "drinking games for 20 people",
    "drinking games for 16-20",
    "large group drinking games",
    "party games for 20",
    "huge party drinking games",
    "beer olympics",
    "mass drinking games",
  ],
  openGraph: {
    title: "Best Drinking Games for 16-20 People",
    description: "Massive party games for groups of 16-20 people!",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-16-20",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-16-20",
  },
};

export default function DrinkingGamesFor16To20Page() {
  const quickAnswerTips = [
    "16 = 4 teams of 4 or 8v8 mega teams",
    "20 = 5 teams of 4 or 4 teams of 5",
    "Multi-station setups are essential",
    "Mass participation games keep everyone engaged"
  ];

  const games = [
    {
      name: "Beer Olympics",
      category: "Tournament",
      description: "4-5 teams of 4-5 competing across multiple events. The ultimate party format.",
      link: null,
      intensity: "High",
      whyItWorks: "Scales perfectly to 16-20"
    },
    {
      name: "Flip Cup (8v8 or 10v10)",
      category: "Teams",
      description: "Massive relay races down the table. Electric atmosphere.",
      link: "/games/flip-cup",
      intensity: "High",
      whyItWorks: "Maximum team energy"
    },
    {
      name: "Survivor Flip Cup",
      category: "Elimination",
      description: "All 20 in a line. Slowest person eliminated each round until one remains.",
      link: "/games/flip-cup",
      intensity: "High",
      whyItWorks: "Everyone starts together"
    },
    {
      name: "Rage Cage (Multiple Tables)",
      category: "Competitive",
      description: "Two or three tables running simultaneously. Winners compete in finals.",
      link: "/games/rage-cage",
      intensity: "High",
      whyItWorks: "Split into manageable groups"
    },
    {
      name: "Civil War (Mega Edition)",
      category: "Teams",
      description: "Two tables, 5v5 each. Team scores combine. Maximum chaos.",
      link: "/games/civil-war",
      intensity: "Extreme",
      whyItWorks: "Parallel games, unified scores"
    },
    {
      name: "Flip Cup Bracket",
      category: "Tournament",
      description: "Teams of 4 in a 5-team bracket (16) or 8 teams of 2-3 (20).",
      link: "/games/flip-cup",
      intensity: "High",
      whyItWorks: "Clean bracket format"
    },
    {
      name: "Thunderstruck",
      category: "Music",
      description: "20 people passing the drink during Thunder. Someone's getting destroyed.",
      link: "/games/thunderstruck",
      intensity: "High",
      whyItWorks: "Works with any size"
    },
    {
      name: "Kings Cup (Triple Deck)",
      category: "Cards",
      description: "Three decks shuffled together. About 8 cards per person with 20.",
      link: "/games/kings-cup",
      intensity: "Medium",
      whyItWorks: "Multiple decks extend the game"
    },
    {
      name: "Most Likely To (Mass Edition)",
      category: "No Props",
      description: "20 people voting is absolute democracy. Clear winners every time.",
      link: "/games/most-likely-to",
      intensity: "Medium",
      whyItWorks: "More votes = more fun"
    },
    {
      name: "Power Hour Olympics",
      category: "Endurance",
      description: "Teams compete to see which team survives the longest.",
      link: "/games/power-hour",
      intensity: "Extreme",
      whyItWorks: "Team support helps endurance"
    },
    {
      name: "Musical Cups",
      category: "Music",
      description: "Like musical chairs but everyone drinks when eliminated. 20 is perfect.",
      link: null,
      intensity: "Medium",
      whyItWorks: "Mass participation"
    },
    {
      name: "Medusa (Giant Circle)",
      category: "No Props",
      description: "20 heads looking up = chaos. Multiple people match every round.",
      link: "/games/medusa",
      intensity: "Low",
      whyItWorks: "More people = more eye contact"
    },
  ];

  return (
    <>
      <GuideLayout
        title="Best Drinking Games for 16-20 People"
        description="You're throwing a real party now. With 16-20 people, you need organization, multiple game stations, and formats that keep everyone engaged. These are the games and setups that work at scale."
        breadcrumb="Drinking Games for 16-20"
        relatedGames={[
          { name: "Flip Cup", slug: "flip-cup", description: "Massive team relays" },
          { name: "Civil War", slug: "civil-war", description: "Multi-table chaos" },
          { name: "Rage Cage", slug: "rage-cage", description: "Split table tournaments" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 16-20 people?"
          answer="The best games for 16-20 people require organized formats: (1) Beer Olympics - 4-5 teams competing across events, (2) Flip Cup 8v8 or 10v10 - massive relay energy, (3) Survivor Flip Cup - elimination style, (4) Multi-table Rage Cage - split groups, winners compete, (5) Flip Cup Bracket Tournament. The key is running multiple games and using tournament brackets."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>The Challenge of 16-20</h2>
        <p>At this size, single-game formats break down. Here&apos;s what you need:</p>
        <ul>
          <li><strong>Multiple game stations</strong> - 2-3 games running at once</li>
          <li><strong>Tournament coordinator</strong> - Someone to manage brackets</li>
          <li><strong>Clear team divisions</strong> - 4-5 balanced teams</li>
          <li><strong>Space</strong> - You need room for this many people</li>
        </ul>

        <h2>Team Formations</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">16 People</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• 4 teams of 4 (ideal)</li>
              <li>• 8v8 (mega teams)</li>
              <li>• 8 teams of 2 (big bracket)</li>
              <li>• 2 games of 8</li>
            </ul>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">20 People</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• 5 teams of 4 (ideal)</li>
              <li>• 4 teams of 5</li>
              <li>• 10v10 (mega teams)</li>
              <li>• 10 teams of 2 (huge bracket)</li>
            </ul>
          </div>
        </div>

        <h2>Best Games for 16-20</h2>

        <div className="not-prose my-8">
          <div className="space-y-4">
            {games.map((game, index) => (
              <div key={game.name} className="p-5 bg-dark-800 rounded-xl border border-dark-600 hover:border-neon-pink/30 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-neon-pink/20 rounded-lg flex items-center justify-center text-neon-pink font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="font-bold text-white text-lg">{game.name}</h3>
                        <span className="text-xs px-2 py-1 bg-dark-700 rounded-full text-gray-400">{game.category}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          game.intensity === 'Low' ? 'bg-green-500/20 text-green-400' :
                          game.intensity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          game.intensity === 'High' ? 'bg-red-500/20 text-red-400' :
                          'bg-purple-500/20 text-purple-400'
                        }`}>
                          {game.intensity}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-2">{game.description}</p>
                      <p className="text-sm text-neon-blue">✓ {game.whyItWorks}</p>
                    </div>
                  </div>
                  {game.link && (
                    <Link
                      href={game.link}
                      className="flex-shrink-0 text-neon-pink hover:text-neon-pink/80 text-sm font-medium"
                    >
                      Play →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2>Full Beer Olympics Setup</h2>
        <p>The gold standard for 16-20 people:</p>

        <h3>Team Draft</h3>
        <ul>
          <li>Pick 4-5 team captains</li>
          <li>Snake draft the rest (1-2-3-4-4-3-2-1 pattern)</li>
          <li>Each team picks a country name</li>
          <li>Team colors via cup color or bandanas</li>
        </ul>

        <h3>Event Lineup</h3>
        <ul>
          <li><strong>Event 1:</strong> Flip Cup (round robin, all teams play each other)</li>
          <li><strong>Event 2:</strong> Beer Pong (bracket tournament, rotate who shoots)</li>
          <li><strong>Event 3:</strong> Quarters (one rep per team, bracket)</li>
          <li><strong>Event 4:</strong> Civil War (bracket format)</li>
          <li><strong>Event 5:</strong> Boat Race (finals - 1st vs 2nd in points)</li>
        </ul>

        <h3>Scoring</h3>
        <ul>
          <li>1st: 5 pts | 2nd: 4 pts | 3rd: 3 pts | 4th: 2 pts | 5th: 1 pt</li>
          <li>Track on a visible board</li>
          <li>Gold/Silver/Bronze for top 3 teams</li>
        </ul>

        <h2>Multi-Station Layout</h2>
        <p>Running multiple games is essential at this size:</p>

        <h3>3-Station Setup</h3>
        <ul>
          <li><strong>Station 1:</strong> Beer Pong (2 tables if possible)</li>
          <li><strong>Station 2:</strong> Flip Cup table</li>
          <li><strong>Station 3:</strong> Circle games (Kings Cup, Never Have I Ever)</li>
        </ul>

        <h3>Rotation Options</h3>
        <ul>
          <li><strong>Timed:</strong> Everyone rotates every 15-20 minutes</li>
          <li><strong>Winner moves:</strong> Win a game, move to next station</li>
          <li><strong>Free flow:</strong> Play where you want, join when ready</li>
        </ul>

        <h2>Mass Participation Games</h2>
        <p>Games where everyone plays at once:</p>

        <h3>Survivor Flip Cup</h3>
        <p>All 20 in a line. Everyone flips. Slowest is eliminated. Continue until one champion remains. Takes about 20 rounds but everyone starts together.</p>

        <h3>Thunderstruck</h3>
        <p>Play the song. Current person drinks during &quot;Thunder.&quot; Pass on each thunder. With 20 people, whoever gets the long guitar solo in the middle is destroyed.</p>

        <h3>Giant Medusa</h3>
        <p>All 20 in a circle. Look down, look up. Every pair that makes eye contact drinks. With 20 people, 3-4 pairs usually match per round. Gets wild.</p>

        <h2>Pro Tips for Huge Parties</h2>
        <ul>
          <li><strong>Appoint a party captain</strong> - Someone to manage the night</li>
          <li><strong>Use a bracket board</strong> - Big whiteboard or poster</li>
          <li><strong>Have LOTS of drinks</strong> - 20 people drink a lot</li>
          <li><strong>Multiple coolers</strong> - One per station</li>
          <li><strong>Designate a DJ</strong> - Keep music going</li>
          <li><strong>Have backup cups</strong> - They get crushed</li>
          <li><strong>Plan for 4+ hours</strong> - Tournaments take time</li>
          <li><strong>Water station</strong> - Keep everyone hydrated</li>
        </ul>

        <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
          <h3 className="text-lg font-bold text-yellow-400 mb-2">Safety Note</h3>
          <p className="text-gray-300">
            With 16-20 people drinking, have a plan for safe rides home. Designate
            sober drivers, have rideshare apps ready, or make it a sleepover party.
            No one drives drunk.
          </p>
        </div>

        <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <h3 className="text-lg font-bold text-white mb-3">Browse by Group Size</h3>
          <div className="flex flex-wrap gap-2">
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link
                key={num}
                href={`/guides/drinking-games-for-${num}`}
                className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
              >
                {num}
              </Link>
            ))}
            <Link
              href="/guides/drinking-games-for-11-12"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              11-12
            </Link>
            <Link
              href="/guides/drinking-games-for-13-15"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              13-15
            </Link>
            <Link
              href="/guides/drinking-games-for-16-20"
              className="px-4 py-2 bg-neon-pink text-white rounded-lg"
            >
              16-20
            </Link>
            <Link
              href="/guides/drinking-games-for-large-groups"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              20+
            </Link>
          </div>
        </div>
      </GuideLayout>
    </>
  );
}
