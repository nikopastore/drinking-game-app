import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 13-15 People (2025) | Large Party Games",
  description: "The best drinking games for groups of 13-15 people. Multi-station setups, tournament formats, and games that keep big groups engaged!",
  keywords: [
    "drinking games for 13 people",
    "drinking games for 14 people",
    "drinking games for 15 people",
    "drinking games for 13-15",
    "large group drinking games",
    "party games for 15",
    "big party drinking games",
    "tournament drinking games",
  ],
  openGraph: {
    title: "Best Drinking Games for 13-15 People",
    description: "Big party games for groups of 13-15 people!",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-13-15",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-13-15",
  },
};

export default function DrinkingGamesFor13To15Page() {
  const quickAnswerTips = [
    "15 splits into 5 teams of 3 or 3 teams of 5",
    "Run multiple game stations simultaneously",
    "Tournament brackets keep everyone playing",
    "Elimination games work great at this size"
  ];

  const games = [
    {
      name: "Beer Olympics",
      category: "Tournament",
      description: "5 teams of 3 competing across multiple events. The ultimate party format.",
      link: null,
      intensity: "High",
      whyItWorks: "Perfect team divisions for 15"
    },
    {
      name: "Survivor Flip Cup",
      category: "Elimination",
      description: "All 15 start in a line. Each round, slowest flipper is eliminated.",
      link: "/games/flip-cup",
      intensity: "High",
      whyItWorks: "Keeps everyone involved until eliminated"
    },
    {
      name: "Rage Cage (Split Tables)",
      category: "Competitive",
      description: "7 and 8 at two tables. Winners face off in finals.",
      link: "/games/rage-cage",
      intensity: "High",
      whyItWorks: "Split into manageable groups"
    },
    {
      name: "Flip Cup (5v5v5)",
      category: "Tournament",
      description: "Three teams round robin. Winners take the crown.",
      link: "/games/flip-cup",
      intensity: "High",
      whyItWorks: "Perfect for 15"
    },
    {
      name: "Civil War Tournament",
      category: "Tournament",
      description: "5 teams of 3. Bracket style elimination. Maximum chaos.",
      link: "/games/civil-war",
      intensity: "Extreme",
      whyItWorks: "3v3 is perfect for Civil War"
    },
    {
      name: "Kings Cup (Double Deck)",
      category: "Cards",
      description: "Two decks shuffled together. 7 cards per person at 15.",
      link: "/games/kings-cup",
      intensity: "Medium",
      whyItWorks: "Two decks extends the game"
    },
    {
      name: "Musical Cups",
      category: "Music",
      description: "Like musical chairs but with cups of drink. Last one drinks.",
      link: null,
      intensity: "Medium",
      whyItWorks: "Scales to any size"
    },
    {
      name: "Boat Race Gauntlet",
      category: "Teams",
      description: "5 teams of 3 in single elimination. Fast and furious.",
      link: "/games/boat-race",
      intensity: "Extreme",
      whyItWorks: "Exciting bracket format"
    },
    {
      name: "Most Likely To",
      category: "No Props",
      description: "15 people pointing means clear majorities every time.",
      link: "/games/most-likely-to",
      intensity: "Medium",
      whyItWorks: "More people = more fun"
    },
    {
      name: "Never Have I Ever",
      category: "No Props",
      description: "15 different life experiences. Lots of surprises.",
      link: "/games/never-have-i-ever",
      intensity: "Medium",
      whyItWorks: "Great variety"
    },
    {
      name: "Medusa",
      category: "No Props",
      description: "15 heads up, lots of potential eye contact. Mass drinking potential.",
      link: "/games/medusa",
      intensity: "Low",
      whyItWorks: "More people = more matches"
    },
    {
      name: "Chandelier (Split)",
      category: "Cups",
      description: "Two games of 7-8. Winners from each face off.",
      link: "/games/chandelier",
      intensity: "High",
      whyItWorks: "Split keeps games manageable"
    },
  ];

  return (
    <>
      <GuideLayout
        title="Best Drinking Games for 13-15 People"
        description="Now we're talking big party territory. With 13-15 people, you need games that can handle the crowd, keep everyone engaged, and maintain the energy. These formats are specifically designed for larger groups."
        breadcrumb="Drinking Games for 13-15"
        relatedGames={[
          { name: "Flip Cup", slug: "flip-cup", description: "Multi-team tournaments" },
          { name: "Civil War", slug: "civil-war", description: "3v3 team battles" },
          { name: "Rage Cage", slug: "rage-cage", description: "Split table chaos" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 13-15 people?"
          answer="The best games for 13-15 people focus on multi-team formats: (1) Beer Olympics - 5 teams of 3 competing across events, (2) Survivor Flip Cup - elimination style keeps everyone involved, (3) Flip Cup tournament - 5v5v5 round robin, (4) Civil War - 5 teams of 3 in brackets, (5) Split Rage Cage - two tables, winners face off. The key is running multiple games or using tournament formats."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>Managing 13-15 People</h2>
        <p>At this size, you need to think like an event organizer:</p>
        <ul>
          <li><strong>Multiple stations</strong> - Run 2-3 games at once</li>
          <li><strong>Tournament format</strong> - Everyone plays, clear winners</li>
          <li><strong>Rotation schedule</strong> - Move people between games</li>
          <li><strong>Team competitions</strong> - Keep it organized</li>
        </ul>

        <h2>Team Formations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">13 People</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• 4 teams of 3 + 1 ref</li>
              <li>• 6v7 with handicaps</li>
              <li>• Free-for-all games</li>
            </ul>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">14 People</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• 7v7 (big teams)</li>
              <li>• 7 teams of 2</li>
              <li>• 4 teams of 3 + 2 refs</li>
            </ul>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">15 People</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• 5 teams of 3</li>
              <li>• 3 teams of 5</li>
              <li>• 5v5 + 5 rotating</li>
            </ul>
          </div>
        </div>

        <h2>Best Games for 13-15</h2>

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

        <h2>Beer Olympics: The Perfect Format</h2>
        <p>With 15 people, Beer Olympics is the move:</p>

        <h3>Team Setup</h3>
        <ul>
          <li>5 teams of 3</li>
          <li>Each team picks a country name</li>
          <li>Make simple flags or color code with cups</li>
        </ul>

        <h3>Event Rotation</h3>
        <ul>
          <li><strong>Round 1:</strong> Flip Cup (all 5 teams rotate)</li>
          <li><strong>Round 2:</strong> Beer Pong (bracket, 1 team has bye)</li>
          <li><strong>Round 3:</strong> Quarters (one rep per team competes)</li>
          <li><strong>Round 4:</strong> Civil War (bracket)</li>
          <li><strong>Round 5:</strong> Boat Race (round robin)</li>
        </ul>

        <h3>Scoring</h3>
        <ul>
          <li>1st: 5 pts | 2nd: 4 pts | 3rd: 3 pts | 4th: 2 pts | 5th: 1 pt</li>
          <li>Tally after all events</li>
          <li>Tie-breaker: Head-to-head flip cup</li>
        </ul>

        <h2>Multi-Station Setup</h2>
        <p>Keep everyone playing by running multiple games:</p>

        <h3>Recommended Layout</h3>
        <ul>
          <li><strong>Station 1:</strong> Beer Pong table (4-6 people at a time)</li>
          <li><strong>Station 2:</strong> Flip Cup table (6-8 people)</li>
          <li><strong>Station 3:</strong> Circle game area (rest of group)</li>
        </ul>

        <h3>Rotation Schedule</h3>
        <ul>
          <li>Set 15-20 minute rounds</li>
          <li>Winners move to next station</li>
          <li>Or: Free flow, people move when ready</li>
        </ul>

        <h2>Elimination Games</h2>
        <p>Great for keeping everyone involved until they&apos;re out:</p>

        <h3>Survivor Flip Cup</h3>
        <p>All 15 in a line. Everyone flips at once. Slowest person is eliminated each round. Last one standing wins. Takes about 15 rounds to get a champion.</p>

        <h3>Quarters Bracket</h3>
        <p>Head-to-head brackets. 15 players = 7 first-round games + 1 bye. Single or double elimination.</p>

        <h2>Pro Tips for Large Groups</h2>
        <ul>
          <li><strong>Designate a host</strong> - Someone to organize games</li>
          <li><strong>Visible bracket board</strong> - Whiteboard or big paper</li>
          <li><strong>Stock up on drinks</strong> - 15 people = lots of beer</li>
          <li><strong>Multiple trash cans</strong> - Keep the area clean</li>
          <li><strong>Have music going</strong> - Fills gaps between games</li>
          <li><strong>Plan for 3 hours minimum</strong> - Tournaments take time</li>
        </ul>

        <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <h3 className="text-lg font-bold text-white mb-3">Browse by Group Size</h3>
          <div className="flex flex-wrap gap-2">
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link
                key={num}
                href={`/guides/drinking-games-for-${num}`}
                className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
              >
                {num} People
              </Link>
            ))}
            <Link
              href="/guides/drinking-games-for-11-12"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              11-12 People
            </Link>
            <Link
              href="/guides/drinking-games-for-13-15"
              className="px-4 py-2 bg-neon-pink text-white rounded-lg"
            >
              13-15 People
            </Link>
            <Link
              href="/guides/drinking-games-for-16-20"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              16-20 People
            </Link>
          </div>
        </div>
      </GuideLayout>
    </>
  );
}
