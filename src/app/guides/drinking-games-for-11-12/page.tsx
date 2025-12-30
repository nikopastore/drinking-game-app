import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 11-12 People (2025) | Party Size Games",
  description: "The best drinking games for groups of 11-12 people. Perfect 6v6 or 6v5 team games, tournaments, and high-energy party games!",
  keywords: [
    "drinking games for 11 people",
    "drinking games for 12 people",
    "drinking games for 11-12",
    "12 person drinking games",
    "11 person drinking games",
    "large group drinking games",
    "party games for 12",
    "6v6 drinking games",
  ],
  openGraph: {
    title: "Best Drinking Games for 11-12 People",
    description: "Perfect party games for medium-large groups of 11-12 people!",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-11-12",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-11-12",
  },
};

export default function DrinkingGamesFor11To12Page() {
  const quickAnswerTips = [
    "12 splits into 6v6 perfectly, 4 teams of 3, or 6 teams of 2",
    "11 works as 6v5 with handicaps or 1 person rotating",
    "Multiple game stations keep everyone engaged",
    "Tournament formats shine at this size"
  ];

  const games = [
    {
      name: "Flip Cup (6v6)",
      category: "Teams",
      description: "Long relay races with 6 per side. The energy is electric.",
      link: "/game/flip-cup",
      intensity: "High",
      whyItWorks: "Perfect for 12, works for 11 with one person going twice"
    },
    {
      name: "Rage Cage",
      category: "Competitive",
      description: "12 players around a huge table or multiple smaller games.",
      link: "/game/rage-cage",
      intensity: "High",
      whyItWorks: "Maximum chaos mode"
    },
    {
      name: "Beer Pong Tournament",
      category: "Tournament",
      description: "6 teams of 2 in a bracket. Perfect elimination tournament.",
      link: "/game/beer-pong",
      intensity: "Medium",
      whyItWorks: "Even bracket with 6 teams"
    },
    {
      name: "Civil War (6v6)",
      category: "Teams",
      description: "6 cups per person, 36 total per side. Absolute mayhem.",
      link: "/game/civil-war",
      intensity: "Extreme",
      whyItWorks: "Maximum team size for chaos"
    },
    {
      name: "Survivor Flip Cup",
      category: "Elimination",
      description: "After each round, worst flipper is eliminated. Last person standing wins.",
      link: "/game/flip-cup",
      intensity: "High",
      whyItWorks: "Everyone starts, tension builds"
    },
    {
      name: "Kings Cup (Double Deck)",
      category: "Cards",
      description: "Use 2 decks for 11-12 people. 8-9 cards each keeps it going.",
      link: "/game/kings-cup",
      intensity: "Medium",
      whyItWorks: "Double deck extends the game"
    },
    {
      name: "Slap Cup",
      category: "Competitive",
      description: "11-12 around the table. Multiple people getting caught constantly.",
      link: "/game/slap-cup",
      intensity: "High",
      whyItWorks: "Chaos scales perfectly"
    },
    {
      name: "Most Likely To",
      category: "No Props",
      description: "12 people voting means clear majorities. No debates.",
      link: "/game/most-likely-to",
      intensity: "Medium",
      whyItWorks: "Voting works great with more people"
    },
    {
      name: "Chandelier",
      category: "Cups",
      description: "Each person has a cup to defend. Big circle, lots of targets.",
      link: "/game/chandelier",
      intensity: "High",
      whyItWorks: "Scales well to 12"
    },
    {
      name: "Beer Olympics",
      category: "Tournament",
      description: "4 teams of 3 compete across multiple events. Track points.",
      link: null,
      intensity: "High",
      whyItWorks: "Perfect team divisions"
    },
    {
      name: "Boat Race (6v6)",
      category: "Teams",
      description: "6-person chugging relays. Long, dramatic, crowd-pleasing.",
      link: "/game/boat-race",
      intensity: "Extreme",
      whyItWorks: "Maximum relay intensity"
    },
    {
      name: "Quarters Championship",
      category: "Tournament",
      description: "Bracket tournament. 12 compete, 1 champion emerges.",
      link: "/game/quarters",
      intensity: "Medium",
      whyItWorks: "Works for any number"
    },
  ];

  return (
    <>
      <GuideLayout
        title="Best Drinking Games for 11-12 People"
        description="You've got a solid party going with 11-12 people. These games keep everyone engaged with team battles, tournament brackets, and high-energy free-for-alls that work perfectly at this size."
        breadcrumb="Drinking Games for 11-12"
        relatedGames={[
          { name: "Flip Cup", slug: "flip-cup", description: "6v6 relay races" },
          { name: "Civil War", slug: "civil-war", description: "Epic team battles" },
          { name: "Rage Cage", slug: "rage-cage", description: "Maximum chaos" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 11-12 people?"
          answer="The best games for 11-12 people are: (1) Flip Cup 6v6 - perfect relay size, (2) Civil War 6v6 - maximum team chaos, (3) Beer Pong Tournament - 6 teams of 2, (4) Beer Olympics - 4 teams of 3 competing in multiple events, (5) Rage Cage - peak free-for-all energy. For 11, have one person sit out and rotate, or use handicap rules for team games."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>Team Formations</h2>
        <p>Here&apos;s how to divide 11-12 people:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">12 People</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• 6v6 (head to head)</li>
              <li>• 4 teams of 3 (tournament)</li>
              <li>• 6 teams of 2 (bracket)</li>
              <li>• 3 teams of 4 (round robin)</li>
            </ul>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">11 People</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• 6v5 with handicaps</li>
              <li>• 1 person rotates/refs</li>
              <li>• Free-for-all games only</li>
              <li>• 5 teams of 2 + 1 bye</li>
            </ul>
          </div>
        </div>

        <h2>Best Games for 11-12</h2>

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

        <h2>Beer Olympics Setup (4 Teams of 3)</h2>
        <p>Perfect format for 12 people:</p>

        <h3>Events</h3>
        <ul>
          <li><strong>Flip Cup</strong> - 3v3 relays, all teams play each other</li>
          <li><strong>Beer Pong</strong> - Round robin, rotate who shoots</li>
          <li><strong>Quarters</strong> - Best of each team competes</li>
          <li><strong>Boat Race</strong> - 3-person chugging relay</li>
          <li><strong>Civil War</strong> - 3v3 chaos rounds</li>
        </ul>

        <h3>Scoring</h3>
        <ul>
          <li>1st Place: 4 points</li>
          <li>2nd Place: 3 points</li>
          <li>3rd Place: 2 points</li>
          <li>4th Place: 1 point</li>
          <li>Most points at end wins</li>
        </ul>

        <h2>Running Multiple Games</h2>
        <p>With 11-12 people, consider running 2 games at once:</p>

        <h3>Option 1: Two Beer Pong Tables</h3>
        <ul>
          <li>6 teams of 2, two games running</li>
          <li>Winners advance, losers drop to losers bracket</li>
          <li>Everyone plays constantly</li>
        </ul>

        <h3>Option 2: Split by Energy Level</h3>
        <ul>
          <li>High-energy table: Rage Cage, Flip Cup</li>
          <li>Chill table: Kings Cup, Never Have I Ever</li>
          <li>People move between as they want</li>
        </ul>

        <h2>Handling 11 (The Odd One Out)</h2>
        <p>Several options for the 11th person:</p>
        <ul>
          <li><strong>Rotating ref</strong> - They call fouls, manage the bracket</li>
          <li><strong>DJ duty</strong> - Control the music for a round</li>
          <li><strong>Drink runner</strong> - Keep cups filled</li>
          <li><strong>Double player</strong> - Best on the smaller team goes twice</li>
          <li><strong>Wild card</strong> - Jumps to whichever team needs help</li>
        </ul>

        <h2>Pro Tips for Groups of 11-12</h2>
        <ul>
          <li><strong>Use a bracket board</strong> - Track tournament progress visibly</li>
          <li><strong>Have backup supplies</strong> - 12 people drink a lot</li>
          <li><strong>Assign team captains</strong> - Reduces chaos</li>
          <li><strong>Rotate games every 20 mins</strong> - Keeps energy up</li>
          <li><strong>Plan the night</strong> - Have a loose schedule</li>
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
              className="px-4 py-2 bg-neon-pink text-white rounded-lg"
            >
              11-12 People
            </Link>
            <Link
              href="/guides/drinking-games-for-large-groups"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              15+ People
            </Link>
          </div>
        </div>
      </GuideLayout>
    </>
  );
}
