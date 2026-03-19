import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 6 People (2025) | Perfect Group Size Games",
  description: "The best drinking games for exactly 6 people. From team games to free-for-alls, these games are optimized for groups of six. Kings Cup, Flip Cup, and more!",
  keywords: [
    "drinking games for 6 people",
    "drinking games for 6",
    "six person drinking games",
    "drinking games for six people",
    "6 player drinking games",
    "party games for 6",
    "drinking games 6 players",
    "group drinking games for 6",
  ],
  openGraph: {
    title: "Best Drinking Games for 6 People",
    description: "Perfect party games for groups of 6. Team games, card games, and classics!",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-6",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-6",
  },
};

export default function DrinkingGamesFor6Page() {
  const quickAnswerTips = [
    "6 people splits perfectly into 2 teams of 3 for Flip Cup",
    "Kings Cup is ideal with 6 players - not too fast, not too slow",
    "Beer Pong works great as 3v3",
    "Rage Cage gets intense with 6 players"
  ];

  const games = [
    {
      name: "Kings Cup",
      category: "Cards",
      description: "The classic card game shines with 6 players. Cards last long enough to get fun, and everyone stays engaged.",
      link: "/games/kings-cup",
      intensity: "Medium",
      whyItWorks: "Perfect pace - not too fast, not too slow"
    },
    {
      name: "Flip Cup",
      category: "Teams",
      description: "Split into two teams of 3 for the perfect relay race. Fast-paced and competitive.",
      link: "/games/flip-cup",
      intensity: "High",
      whyItWorks: "Even teams of 3v3"
    },
    {
      name: "Beer Pong (3v3)",
      category: "Teams",
      description: "Two teams of 3 playing beer pong. Each person shoots once per round.",
      link: "/games/beer-pong",
      intensity: "Medium",
      whyItWorks: "More social than 2v2, everyone participates"
    },
    {
      name: "Rage Cage",
      category: "Competitive",
      description: "High-energy bouncing game where you stack cups on slower players. 6 is the sweet spot.",
      link: "/games/rage-cage",
      intensity: "High",
      whyItWorks: "Just enough chaos without being overwhelming"
    },
    {
      name: "Never Have I Ever",
      category: "No Props",
      description: "Classic confession game. With 6 people, you get variety without rounds taking forever.",
      link: "/games/never-have-i-ever",
      intensity: "Medium",
      whyItWorks: "Good variety of experiences"
    },
    {
      name: "Most Likely To",
      category: "No Props",
      description: "Point at whoever is most likely to do something. Majority wins, others drink.",
      link: "/games/most-likely-to",
      intensity: "Medium",
      whyItWorks: "Majority voting works well with 6"
    },
    {
      name: "Drunk Jenga",
      category: "Props",
      description: "Write rules on Jenga blocks. With 6 players, the tower gets precarious fast.",
      link: "/games/drunk-jenga",
      intensity: "Medium",
      whyItWorks: "Tower falls at perfect timing"
    },
    {
      name: "Ride the Bus",
      category: "Cards",
      description: "Multi-round card guessing game. The pyramid round gets intense with 6 players.",
      link: "/games/ride-the-bus",
      intensity: "High",
      whyItWorks: "Pyramid has enough cards for drama"
    },
    {
      name: "Chandelier",
      category: "Cups",
      description: "Bounce balls into cups arranged in a circle with a center cup. Great with 6.",
      link: "/games/chandelier",
      intensity: "High",
      whyItWorks: "Perfect cup-to-player ratio"
    },
    {
      name: "Power Hour",
      category: "Endurance",
      description: "Shot of beer every minute for an hour. With 6, you can cheer each other on.",
      link: "/games/power-hour",
      intensity: "High",
      whyItWorks: "Group support makes it easier"
    },
    {
      name: "Civil War",
      category: "Teams",
      description: "3v3 beer pong with no turns - just chaos. Everyone shoots whenever they get a ball.",
      link: "/games/civil-war",
      intensity: "Extreme",
      whyItWorks: "Perfect team size for maximum chaos"
    },
    {
      name: "Cheers to the Governor",
      category: "No Props",
      description: "Count to 21, replacing numbers with rules. Gets hilarious with 6 people.",
      link: "/games/cheers-to-the-governor",
      intensity: "Medium",
      whyItWorks: "Enough people to create lots of rules"
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Drinking Games for 6 People",
    "description": "Curated list of drinking games optimized for groups of 6 players.",
    "numberOfItems": games.length,
    "itemListElement": games.map((game, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": game.name,
      "description": game.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideLayout
        title="Best Drinking Games for 6 People"
        description="Six is the magic number for drinking games. Big enough for team games, small enough that everyone stays involved. These games are specifically chosen because they work perfectly with exactly 6 players."
        breadcrumb="Drinking Games for 6"
        relatedGames={[
          { name: "Kings Cup", slug: "kings-cup", description: "Classic card game" },
          { name: "Flip Cup", slug: "flip-cup", description: "Team relay race" },
          { name: "Rage Cage", slug: "rage-cage", description: "High-energy bouncing" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 6 people?"
          answer="The best drinking games for 6 people are: (1) Kings Cup - perfect pace with 6 players, (2) Flip Cup - splits evenly into 3v3 teams, (3) Beer Pong 3v3 - everyone participates, (4) Rage Cage - ideal chaos level, (5) Civil War - 3v3 beer pong with no turns. Six players is optimal for most team-based drinking games and keeps card games moving at a fun pace."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>Why 6 People is the Perfect Group Size</h2>
        <p>Six players hit a sweet spot for drinking games because:</p>
        <ul>
          <li><strong>Perfect team splits</strong> - 3v3 works for almost every team game</li>
          <li><strong>Card games pace well</strong> - Decks last long enough to be fun</li>
          <li><strong>Everyone stays engaged</strong> - No one waits too long for their turn</li>
          <li><strong>Circle games work</strong> - Small enough to hear everyone</li>
          <li><strong>Voting games have clear outcomes</strong> - No constant ties</li>
        </ul>

        <h2>Best Games for Exactly 6 Players</h2>

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

        <h2>Team Games for 6 (3v3)</h2>
        <p>Six people split perfectly into two teams of three. Here&apos;s how to run each:</p>

        <h3>Flip Cup (3v3)</h3>
        <p>Line up 3 people on each side of the table. Standard relay rules - drink, flip, next person goes. Best of 5 rounds makes for a solid competition.</p>

        <h3>Beer Pong (3v3)</h3>
        <p>Each team of 3 rotates who shoots. You can either have all 3 shoot per round, or have 2 shoot while 1 rests. Either way, everyone stays involved.</p>

        <h3>Civil War</h3>
        <p>The ultimate chaos game. Each side has 3 cups per person (9 total). No turns - everyone shoots whenever they can get a ball. When your cups are gone, you&apos;re out. Last team standing wins.</p>

        <h2>Circle Games That Shine With 6</h2>

        <h3>Kings Cup</h3>
        <p>With 6 players, you get about 9 cards each. That&apos;s enough for the game to develop, for rules to stack up, and for the King&apos;s Cup to become properly scary.</p>

        <h3>Never Have I Ever</h3>
        <p>Rounds move at a good pace. You&apos;ll hear 5 different responses to each statement, and games typically last 20-30 minutes before someone runs out of fingers.</p>

        <h3>Cheers to the Governor</h3>
        <p>Counting to 21 with 6 people means the rule list grows quickly. By round 10, you&apos;ll have forgotten half of them.</p>

        <h2>Pro Tips for Groups of 6</h2>
        <ul>
          <li><strong>Rotate teams</strong> - Switch up 3v3 teams every few rounds to keep it social</li>
          <li><strong>Assign a dealer</strong> - For card games, having one person deal speeds things up</li>
          <li><strong>Set up two games</strong> - If people want variety, run 2 games of 3</li>
          <li><strong>Watch the pacing</strong> - 6 is enough people that drinks add up fast</li>
        </ul>

        <h2>What About 5 or 7 People?</h2>
        <p>Close but not quite 6? Check out our guides for <Link href="/guides/drinking-games-for-5" className="text-neon-pink hover:underline">5 people</Link> or <Link href="/guides/drinking-games-for-7" className="text-neon-pink hover:underline">7 people</Link> for games that work better with those exact numbers.</p>

        <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <h3 className="text-lg font-bold text-white mb-3">Browse by Group Size</h3>
          <div className="flex flex-wrap gap-2">
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link
                key={num}
                href={`/guides/drinking-games-for-${num}`}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  num === 6
                    ? 'bg-neon-pink text-white'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                {num} People
              </Link>
            ))}
            <Link
              href="/guides/drinking-games-for-large-groups"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              10+ People
            </Link>
          </div>
        </div>
      </GuideLayout>
    </>
  );
}
