import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 8 People (2025) | Perfect Party Games",
  description: "The best drinking games for exactly 8 people. Perfect 4v4 team splits for Flip Cup, Beer Pong tournaments, and more. Ideal party size!",
  keywords: [
    "drinking games for 8 people",
    "drinking games for 8",
    "eight person drinking games",
    "drinking games for eight people",
    "8 player drinking games",
    "party games for 8",
    "drinking games 8 players",
    "4v4 drinking games",
  ],
  openGraph: {
    title: "Best Drinking Games for 8 People",
    description: "Perfect 4v4 team games and party games for groups of 8!",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-8",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-8",
  },
};

export default function DrinkingGamesFor8Page() {
  const quickAnswerTips = [
    "8 splits perfectly into 4v4 teams",
    "Run a mini beer pong tournament with 4 teams of 2",
    "Two Flip Cup tables can run simultaneously",
    "Kings Cup with 8 is the classic experience"
  ];

  const games = [
    {
      name: "Flip Cup (4v4)",
      category: "Teams",
      description: "The ideal team size. 4 people per side makes for exciting, balanced relay races.",
      link: "/games/flip-cup",
      intensity: "High",
      whyItWorks: "Perfect 4v4 split"
    },
    {
      name: "Beer Pong Tournament",
      category: "Tournament",
      description: "4 teams of 2 in bracket format. Winners play winners, losers play losers.",
      link: "/games/beer-pong",
      intensity: "Medium",
      whyItWorks: "Perfect bracket with 4 teams"
    },
    {
      name: "Kings Cup",
      category: "Cards",
      description: "Classic card game at its best. 6-7 cards per person keeps it moving.",
      link: "/games/kings-cup",
      intensity: "Medium",
      whyItWorks: "Ideal card distribution"
    },
    {
      name: "Civil War (4v4)",
      category: "Teams",
      description: "Beer pong chaos mode. 4 cups per person, no turns, just madness.",
      link: "/games/civil-war",
      intensity: "Extreme",
      whyItWorks: "Maximum team chaos"
    },
    {
      name: "Rage Cage",
      category: "Competitive",
      description: "8 players around a table bouncing and stacking. Energy is electric.",
      link: "/games/rage-cage",
      intensity: "High",
      whyItWorks: "Great energy level"
    },
    {
      name: "Chandelier",
      category: "Cups",
      description: "8 cups in a circle with one in the center. Everyone has their own cup to defend.",
      link: "/games/chandelier",
      intensity: "High",
      whyItWorks: "One cup per person"
    },
    {
      name: "Ride the Bus",
      category: "Cards",
      description: "The pyramid phase gets wild with 8 people all hiding cards.",
      link: "/games/ride-the-bus",
      intensity: "High",
      whyItWorks: "Pyramid round is intense"
    },
    {
      name: "Never Have I Ever",
      category: "No Props",
      description: "Plenty of variety with 8 people sharing experiences.",
      link: "/games/never-have-i-ever",
      intensity: "Medium",
      whyItWorks: "Good variety, good pace"
    },
    {
      name: "Drunk Jenga",
      category: "Props",
      description: "With 8, the tower reaches peak instability at the perfect time.",
      link: "/games/drunk-jenga",
      intensity: "Medium",
      whyItWorks: "Tower falls dramatically"
    },
    {
      name: "Slap Cup",
      category: "Competitive",
      description: "The table gets loud with 8 people slapping cups and racing.",
      link: "/games/slap-cup",
      intensity: "High",
      whyItWorks: "Perfect chaos level"
    },
    {
      name: "Medusa",
      category: "No Props",
      description: "Everyone looks down, then up. Make eye contact? Both drink. Gets spicy.",
      link: "/games/medusa",
      intensity: "Low",
      whyItWorks: "More people = more drama"
    },
    {
      name: "Boat Race",
      category: "Teams",
      description: "4v4 relay chugging. Down your drink, flip cup, next person goes.",
      link: "/games/boat-race",
      intensity: "Extreme",
      whyItWorks: "Even teams, maximum speed"
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Drinking Games for 8 People",
    "description": "Curated list of drinking games optimized for groups of 8 players.",
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
        title="Best Drinking Games for 8 People"
        description="Eight is the ultimate party number. Perfect 4v4 team splits, ideal tournament brackets, and enough people for real energy. These games are specifically optimized for groups of exactly 8."
        breadcrumb="Drinking Games for 8"
        relatedGames={[
          { name: "Flip Cup", slug: "flip-cup", description: "4v4 relay race" },
          { name: "Beer Pong", slug: "beer-pong", description: "Tournament style" },
          { name: "Rage Cage", slug: "rage-cage", description: "8-player chaos" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 8 people?"
          answer="The best drinking games for 8 people take advantage of the perfect 4v4 split: (1) Flip Cup - ideal team size, (2) Beer Pong Tournament - 4 teams of 2 in brackets, (3) Civil War - 4v4 chaos, (4) Rage Cage - electric energy with 8, (5) Kings Cup - classic at its best. Eight players is considered the ideal group size for most competitive team drinking games."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>Why 8 is the Magic Number</h2>
        <p>Eight players is often called the perfect party size because:</p>
        <ul>
          <li><strong>Perfect team splits</strong> - 4v4 is the ideal team size</li>
          <li><strong>Tournament ready</strong> - 4 teams of 2 makes a perfect bracket</li>
          <li><strong>High energy</strong> - Enough people for real excitement</li>
          <li><strong>Everyone involved</strong> - No one waits too long</li>
          <li><strong>Can split for variety</strong> - 2 games of 4, or 4 games of 2</li>
        </ul>

        <h2>Top Games for 8 Players</h2>

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

        <h2>Team Setups for 8 Players</h2>

        <h3>4v4 Games</h3>
        <p>The classic split. Works for:</p>
        <ul>
          <li><strong>Flip Cup</strong> - Standard relay with 4 per side</li>
          <li><strong>Civil War</strong> - 4 cups each, 16 cups per side total</li>
          <li><strong>Boat Race</strong> - Chug, flip, relay</li>
          <li><strong>Team Rage Cage</strong> - Teams try to stack the other side</li>
        </ul>

        <h3>Tournament Bracket (4 Teams of 2)</h3>
        <p>Perfect for beer pong or other 2v2 games:</p>
        <ul>
          <li>Round 1: Team A vs B, Team C vs D</li>
          <li>Finals: Winners vs Winners</li>
          <li>Consolation: Losers vs Losers</li>
          <li>Everyone plays at least 2 games</li>
        </ul>

        <h3>Rotating 2v2</h3>
        <p>For games that work best with 4:</p>
        <ul>
          <li>Run 2 beer pong games simultaneously</li>
          <li>Winners play winners for the championship</li>
          <li>Keeps everyone playing constantly</li>
        </ul>

        <h2>Circle Games for 8</h2>

        <h3>Kings Cup</h3>
        <p>52 cards ÷ 8 = about 6.5 cards each. The game lasts the perfect amount of time, and there are enough people for &quot;Categories&quot; and &quot;Make a Rule&quot; to get interesting.</p>

        <h3>Rage Cage</h3>
        <p>8 cups in the center means the stacking gets intense quickly. Two balls bouncing around keeps everyone on edge.</p>

        <h3>Ride the Bus</h3>
        <p>The pyramid phase with 8 people is where it shines. So many cards being slapped down, so much drinking.</p>

        <h2>Running Multiple Games</h2>
        <p>With 8 people, you can easily split up:</p>
        <ul>
          <li><strong>2 Beer Pong games</strong> - If you have the space</li>
          <li><strong>Flip Cup + Kings Cup</strong> - Different vibes for different people</li>
          <li><strong>Rotate through games</strong> - 4 play one, 4 play another, then switch</li>
        </ul>

        <h2>Pro Tips for 8 Players</h2>
        <ul>
          <li><strong>Draft teams</strong> - Makes team games more competitive</li>
          <li><strong>Keep a bracket</strong> - Track tournament results</li>
          <li><strong>Have backup drinks</strong> - 8 people go through drinks fast</li>
          <li><strong>Set time limits</strong> - Keep games moving if some run long</li>
        </ul>

        <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <h3 className="text-lg font-bold text-white mb-3">Browse by Group Size</h3>
          <div className="flex flex-wrap gap-2">
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link
                key={num}
                href={`/guides/drinking-games-for-${num}`}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  num === 8
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
