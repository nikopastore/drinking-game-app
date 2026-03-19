import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 10 People (2025) | Big Party Games",
  description: "The best drinking games for exactly 10 people. Perfect 5v5 team splits, tournament brackets, and games that keep everyone engaged!",
  keywords: [
    "drinking games for 10 people",
    "drinking games for 10",
    "ten person drinking games",
    "drinking games for ten people",
    "10 player drinking games",
    "party games for 10",
    "5v5 drinking games",
    "big group drinking games",
  ],
  openGraph: {
    title: "Best Drinking Games for 10 People",
    description: "Perfect 5v5 team games and big group party games for 10 people!",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-10",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-10",
  },
};

export default function DrinkingGamesFor10Page() {
  const quickAnswerTips = [
    "10 splits perfectly into 5v5 teams",
    "Or run 5 teams of 2 for tournament brackets",
    "Multiple games can run simultaneously",
    "Rage Cage with 10 is peak chaos"
  ];

  const games = [
    {
      name: "Flip Cup (5v5)",
      category: "Teams",
      description: "The gold standard for 10 people. 5 per side creates long, exciting relays.",
      link: "/games/flip-cup",
      intensity: "High",
      whyItWorks: "Perfect team size"
    },
    {
      name: "Rage Cage",
      category: "Competitive",
      description: "10 players around the table is maximum chaos. Cups stacking everywhere.",
      link: "/games/rage-cage",
      intensity: "High",
      whyItWorks: "Peak energy level"
    },
    {
      name: "Beer Pong Tournament",
      category: "Tournament",
      description: "5 teams of 2 in a bracket. Losers go to the losers bracket.",
      link: "/games/beer-pong",
      intensity: "Medium",
      whyItWorks: "5-team bracket works great"
    },
    {
      name: "Civil War (5v5)",
      category: "Teams",
      description: "5 cups per person, 25 total per side. No turns, pure mayhem.",
      link: "/games/civil-war",
      intensity: "Extreme",
      whyItWorks: "Maximum team chaos"
    },
    {
      name: "Kings Cup",
      category: "Cards",
      description: "5 cards per person keeps it fast. Double decks for longer games.",
      link: "/games/kings-cup",
      intensity: "Medium",
      whyItWorks: "Can use 2 decks if needed"
    },
    {
      name: "Slap Cup",
      category: "Competitive",
      description: "10-person free-for-all. Someone's always getting slapped.",
      link: "/games/slap-cup",
      intensity: "High",
      whyItWorks: "Big group energy"
    },
    {
      name: "Chandelier",
      category: "Cups",
      description: "10 cups in a circle with death cup center. Everyone has skin in the game.",
      link: "/games/chandelier",
      intensity: "High",
      whyItWorks: "One cup per person"
    },
    {
      name: "Most Likely To",
      category: "No Props",
      description: "Point voting with 10 people. Clear majorities every round.",
      link: "/games/most-likely-to",
      intensity: "Medium",
      whyItWorks: "Even number, no ties"
    },
    {
      name: "Never Have I Ever",
      category: "No Props",
      description: "10 different life experiences. Rounds are fast and revelatory.",
      link: "/games/never-have-i-ever",
      intensity: "Medium",
      whyItWorks: "Max variety"
    },
    {
      name: "Boat Race (5v5)",
      category: "Teams",
      description: "Team chugging relay. 5 deep on each side for maximum pressure.",
      link: "/games/boat-race",
      intensity: "Extreme",
      whyItWorks: "Long, exciting relays"
    },
    {
      name: "Medusa",
      category: "No Props",
      description: "Everyone looks down, then up. More people = more eye contact chances.",
      link: "/games/medusa",
      intensity: "Low",
      whyItWorks: "Bigger group, more drama"
    },
    {
      name: "Power Hour (Team Edition)",
      category: "Endurance",
      description: "Two teams racing to complete power hour. First team out loses.",
      link: "/games/power-hour",
      intensity: "High",
      whyItWorks: "Team support helps endurance"
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Drinking Games for 10 People",
    "description": "Curated list of drinking games optimized for groups of 10 players.",
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
        title="Best Drinking Games for 10 People"
        description="Ten people is where parties really get going. Perfect for 5v5 team battles, tournament brackets, or high-energy free-for-alls. These games are specifically designed to keep everyone involved at this larger group size."
        breadcrumb="Drinking Games for 10"
        relatedGames={[
          { name: "Flip Cup", slug: "flip-cup", description: "5v5 relay races" },
          { name: "Rage Cage", slug: "rage-cage", description: "10-person chaos" },
          { name: "Civil War", slug: "civil-war", description: "5v5 beer pong mayhem" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 10 people?"
          answer="The best drinking games for 10 people maximize the perfect 5v5 split: (1) Flip Cup - ideal relay size, (2) Rage Cage - peak chaos with 10 around the table, (3) Civil War - 5v5 beer pong with no turns, (4) Beer Pong Tournament - 5 teams of 2 in brackets, (5) Boat Race - intense team chugging relay. Ten is the perfect number for competitive team drinking games."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>Why 10 People is Perfect</h2>
        <p>Ten players hit the sweet spot between &quot;big party&quot; and &quot;manageable&quot;:</p>
        <ul>
          <li><strong>Perfect 5v5 splits</strong> - The ideal team size for most games</li>
          <li><strong>5 teams of 2</strong> - Clean tournament brackets</li>
          <li><strong>2 games of 5</strong> - Can split up and rotate</li>
          <li><strong>Big enough for energy</strong> - Real party atmosphere</li>
          <li><strong>Small enough to manage</strong> - Everyone stays involved</li>
        </ul>

        <h2>Top Games for 10 Players</h2>

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

        <h2>5v5 Team Game Setups</h2>

        <h3>Flip Cup (5v5)</h3>
        <p>The classic relay format. 5 people per side makes for longer, more dramatic races. The pressure on the anchor position is intense.</p>

        <h3>Civil War (5v5)</h3>
        <p>Each person has 5 cups, 25 total per side. No turns - just grab balls and shoot. Games are fast and furious. Have backup drinks ready.</p>

        <h3>Boat Race (5v5)</h3>
        <p>Chugging relay. Down your drink, slam it down, next person goes. 5 deep on each side creates real pressure.</p>

        <h2>Tournament Formats</h2>

        <h3>5-Team Double Elimination</h3>
        <p>For beer pong or similar games:</p>
        <ul>
          <li>Round 1: Team A vs B, Team C vs D (Team E gets bye)</li>
          <li>Winners bracket continues</li>
          <li>Losers go to losers bracket</li>
          <li>Must lose twice to be eliminated</li>
        </ul>

        <h3>Round Robin</h3>
        <p>Everyone plays everyone:</p>
        <ul>
          <li>Each team plays 4 games</li>
          <li>Track wins, losses, and run differential</li>
          <li>Top 2 teams face off in finals</li>
        </ul>

        <h2>Split the Party Options</h2>
        <p>With 10 people, you can run multiple games:</p>

        <h3>Setup 1: Two Beer Pong Tables</h3>
        <ul>
          <li>2v2 games running simultaneously</li>
          <li>Winners play winners</li>
          <li>Losers play losers</li>
          <li>Keeps everyone playing constantly</li>
        </ul>

        <h3>Setup 2: Flip Cup + Circle Game</h3>
        <ul>
          <li>5 people play flip cup</li>
          <li>5 people play Kings Cup or Never Have I Ever</li>
          <li>Switch after 15-20 minutes</li>
        </ul>

        <h2>Free-For-All Options</h2>
        <p>Skip teams entirely with these games:</p>

        <h3>Rage Cage / Slap Cup</h3>
        <p>10 around the table is peak chaos. Balls bouncing, cups stacking, people drinking. It&apos;s beautiful chaos.</p>

        <h3>Chandelier</h3>
        <p>10 cups in a circle, 1 death cup center. Everyone bounces, everyone defends. Gets intense fast.</p>

        <h2>Pro Tips for Groups of 10</h2>
        <ul>
          <li><strong>Have enough drinks</strong> - 10 people go through beer FAST</li>
          <li><strong>Draft teams</strong> - Makes it competitive and fair</li>
          <li><strong>Assign team captains</strong> - Organize the chaos</li>
          <li><strong>Keep a bracket</strong> - Track tournament progress</li>
          <li><strong>Rotate games</strong> - Variety prevents fatigue</li>
        </ul>

        <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <h3 className="text-lg font-bold text-white mb-3">Browse by Group Size</h3>
          <div className="flex flex-wrap gap-2">
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link
                key={num}
                href={`/guides/drinking-games-for-${num}`}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  num === 10
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
