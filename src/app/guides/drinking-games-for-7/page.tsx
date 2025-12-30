import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 7 People (2025) | Odd Number Party Games",
  description: "The best drinking games for exactly 7 people. Perfect games for odd-numbered groups that don't require even teams. Kings Cup, Rage Cage, and more!",
  keywords: [
    "drinking games for 7 people",
    "drinking games for 7",
    "seven person drinking games",
    "drinking games for seven people",
    "7 player drinking games",
    "party games for 7",
    "odd number drinking games",
    "group drinking games for 7",
  ],
  openGraph: {
    title: "Best Drinking Games for 7 People",
    description: "Perfect party games for odd-numbered groups of 7. Circle games, competitive games, and more!",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-7",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-7",
  },
};

export default function DrinkingGamesFor7Page() {
  const quickAnswerTips = [
    "7 is perfect for free-for-all games - no teams needed",
    "Kings Cup gets spicy with 7 players",
    "Rage Cage is chaotic perfection with 7",
    "For team games, do 4v3 with the smaller team getting an advantage"
  ];

  const games = [
    {
      name: "Kings Cup",
      category: "Cards",
      description: "Perfect for 7 players. The card count works out so everyone gets enough turns and rules stack up nicely.",
      link: "/game/kings-cup",
      intensity: "Medium",
      whyItWorks: "7-8 cards per person is ideal"
    },
    {
      name: "Rage Cage",
      category: "Competitive",
      description: "Free-for-all chaos. No teams needed, just pure competition around the table.",
      link: "/game/rage-cage",
      intensity: "High",
      whyItWorks: "Odd numbers don't matter"
    },
    {
      name: "Never Have I Ever",
      category: "No Props",
      description: "Confession game that works with any number. 7 gives great variety in responses.",
      link: "/game/never-have-i-ever",
      intensity: "Medium",
      whyItWorks: "More people = more interesting confessions"
    },
    {
      name: "Most Likely To",
      category: "No Props",
      description: "Point at who's most likely to do something. 7 means no ties!",
      link: "/game/most-likely-to",
      intensity: "Medium",
      whyItWorks: "Odd number prevents tie votes"
    },
    {
      name: "Drunk Jenga",
      category: "Props",
      description: "Works with any number. With 7, the tower falls at exciting moments.",
      link: "/game/drunk-jenga",
      intensity: "Medium",
      whyItWorks: "Good pace, dramatic falls"
    },
    {
      name: "Ride the Bus",
      category: "Cards",
      description: "Build a pyramid and call out cards. 7 players means a packed pyramid.",
      link: "/game/ride-the-bus",
      intensity: "High",
      whyItWorks: "Pyramid phase gets intense"
    },
    {
      name: "Thunderstruck",
      category: "Music",
      description: "Drink during Thunder in the song. Pass on every 'Thunder'. 7 spreads it well.",
      link: "/game/thunderstruck",
      intensity: "High",
      whyItWorks: "Fair distribution of drinking"
    },
    {
      name: "Cheers to the Governor",
      category: "No Props",
      description: "Count to 21 with custom rules. 7 people create hilarious rule combinations.",
      link: "/game/cheers-to-the-governor",
      intensity: "Medium",
      whyItWorks: "Enough people to stack rules"
    },
    {
      name: "Slap Cup",
      category: "Competitive",
      description: "Like Rage Cage but with slapping. Free-for-all works perfectly with 7.",
      link: "/game/slap-cup",
      intensity: "High",
      whyItWorks: "No teams required"
    },
    {
      name: "Quarters",
      category: "Skill",
      description: "Bounce quarters into a glass. Take turns around the circle.",
      link: "/game/quarters",
      intensity: "Medium",
      whyItWorks: "Turn-based works with any number"
    },
    {
      name: "Flip Cup (4v3)",
      category: "Teams",
      description: "Uneven teams, but the team of 3 gets to use their best flipper twice.",
      link: "/game/flip-cup",
      intensity: "High",
      whyItWorks: "Handicap makes it fair"
    },
    {
      name: "Beer Ball",
      category: "Teams",
      description: "4v3 teams. Hit the can, chug while they retrieve. Handicap the smaller team.",
      link: "/game/beer-ball",
      intensity: "High",
      whyItWorks: "Works with uneven teams"
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Drinking Games for 7 People",
    "description": "Curated list of drinking games optimized for groups of 7 players.",
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
        title="Best Drinking Games for 7 People"
        description="Seven players? Don't let the odd number stop you. These games are specifically chosen because they work great without needing even teams - or have smart handicap rules for 4v3 matchups."
        breadcrumb="Drinking Games for 7"
        relatedGames={[
          { name: "Kings Cup", slug: "kings-cup", description: "Classic card game" },
          { name: "Rage Cage", slug: "rage-cage", description: "Free-for-all chaos" },
          { name: "Most Likely To", slug: "most-likely-to", description: "No-tie voting" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 7 people?"
          answer="The best drinking games for 7 people focus on free-for-all formats: (1) Kings Cup - perfect card distribution, (2) Rage Cage - no teams needed, (3) Most Likely To - odd numbers prevent ties, (4) Never Have I Ever - works with any group size, (5) Ride the Bus - pyramid round gets intense. For team games, use 4v3 with the smaller team getting an advantage (like using their best player twice)."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>The Odd Number Advantage</h2>
        <p>Seven players is actually great for drinking games because:</p>
        <ul>
          <li><strong>No ties in voting games</strong> - Someone always wins Most Likely To</li>
          <li><strong>Free-for-all games shine</strong> - Rage Cage, Slap Cup work perfectly</li>
          <li><strong>Card games pace well</strong> - 7-8 cards per person in Kings Cup</li>
          <li><strong>Big enough for energy</strong> - Small enough for intimacy</li>
        </ul>

        <h2>Best Games for 7 Players</h2>

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
                          'bg-red-500/20 text-red-400'
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

        <h2>Free-For-All Games (Best for 7)</h2>
        <p>These games don&apos;t need teams at all - perfect for odd numbers:</p>

        <h3>Rage Cage / Stack Cup</h3>
        <p>Everyone starts with a cup. Two balls start opposite each other. Bounce into your cup, pass it clockwise. If you catch up to someone, stack on them. Pure chaos, no teams needed.</p>

        <h3>Most Likely To</h3>
        <p>Ask &quot;Who is most likely to...&quot; and everyone points. Most votes drinks. With 7 people, you&apos;ll never have a tie - there&apos;s always a clear winner (or loser, depending on perspective).</p>

        <h3>Kings Cup</h3>
        <p>52 cards ÷ 7 people = about 7 cards each. The game lasts long enough to get interesting, and there&apos;s no team dynamic to worry about.</p>

        <h2>Making Team Games Work With 7</h2>
        <p>Need teams? Here&apos;s how to make 4v3 fair:</p>

        <h3>Flip Cup (4v3)</h3>
        <ul>
          <li>Team of 3: Best flipper goes twice (first and anchor)</li>
          <li>Team of 4: Standard rotation</li>
          <li>This usually balances out well</li>
        </ul>

        <h3>Beer Pong (4v3)</h3>
        <ul>
          <li>Team of 3: Remove one cup from their side to start</li>
          <li>Or: Team of 3 gets one re-rack for free</li>
          <li>Or: Everyone shoots, smaller team drinks less per make</li>
        </ul>

        <h3>Alternative: One Person Rotates</h3>
        <p>Have one person sit out each round/game as the &quot;ref&quot; or drink maker. They rotate in for the next round. Actually works well if someone needs a break anyway.</p>

        <h2>Pro Tips for Groups of 7</h2>
        <ul>
          <li><strong>Embrace the chaos</strong> - Free-for-all games are your friend</li>
          <li><strong>Use voting games</strong> - Odd numbers = no ties</li>
          <li><strong>Rotate fairly</strong> - If someone sits out, they get first pick next game</li>
          <li><strong>Combine games</strong> - Play Kings Cup while watching a movie drinking game</li>
        </ul>

        <h2>Looking for Different Group Sizes?</h2>
        <p>Not quite 7? Check out <Link href="/guides/drinking-games-for-6" className="text-neon-pink hover:underline">games for 6</Link> or <Link href="/guides/drinking-games-for-8" className="text-neon-pink hover:underline">games for 8</Link>.</p>

        <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <h3 className="text-lg font-bold text-white mb-3">Browse by Group Size</h3>
          <div className="flex flex-wrap gap-2">
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link
                key={num}
                href={`/guides/drinking-games-for-${num}`}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  num === 7
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
