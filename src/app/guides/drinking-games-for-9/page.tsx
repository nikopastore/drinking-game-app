import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 9 People (2025) | Odd Group Party Games",
  description: "The best drinking games for exactly 9 people. Perfect for odd-numbered groups with games that don't need even teams. Circle games, free-for-alls, and 5v4 setups!",
  keywords: [
    "drinking games for 9 people",
    "drinking games for 9",
    "nine person drinking games",
    "drinking games for nine people",
    "9 player drinking games",
    "party games for 9",
    "odd number party games",
    "group drinking games for 9",
  ],
  openGraph: {
    title: "Best Drinking Games for 9 People",
    description: "Perfect games for odd-numbered groups of 9. Free-for-alls and smart team splits!",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-9",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-9",
  },
};

export default function DrinkingGamesFor9Page() {
  const quickAnswerTips = [
    "9 is perfect for 3 teams of 3 - tournament style",
    "Circle games like Kings Cup work great",
    "Free-for-all games ignore the odd number",
    "For 2-team games, do 5v4 with handicap rules"
  ];

  const games = [
    {
      name: "Kings Cup",
      category: "Cards",
      description: "52 cards, 9 people = about 5-6 cards each. Fast-paced and fun.",
      link: "/games/kings-cup",
      intensity: "Medium",
      whyItWorks: "Quick rounds, everyone stays engaged"
    },
    {
      name: "Rage Cage",
      category: "Competitive",
      description: "9 players around the table creates intense pressure. No teams needed.",
      link: "/games/rage-cage",
      intensity: "High",
      whyItWorks: "Free-for-all ignores odd numbers"
    },
    {
      name: "Flip Cup (3 Teams of 3)",
      category: "Tournament",
      description: "Round-robin tournament. Each team plays each other team. Most wins takes it.",
      link: "/games/flip-cup",
      intensity: "High",
      whyItWorks: "Perfect 3-team split"
    },
    {
      name: "Slap Cup",
      category: "Competitive",
      description: "High-energy bouncing and slapping. 9 players makes it chaotic.",
      link: "/games/slap-cup",
      intensity: "High",
      whyItWorks: "Works with any number"
    },
    {
      name: "Never Have I Ever",
      category: "No Props",
      description: "9 different people means 9 different experiences to share.",
      link: "/games/never-have-i-ever",
      intensity: "Medium",
      whyItWorks: "More people = more surprises"
    },
    {
      name: "Chandelier",
      category: "Cups",
      description: "Each person defends their cup. Center cup is the death cup.",
      link: "/games/chandelier",
      intensity: "High",
      whyItWorks: "One cup per person works perfectly"
    },
    {
      name: "Ride the Bus",
      category: "Cards",
      description: "The pyramid round with 9 people is absolute chaos.",
      link: "/games/ride-the-bus",
      intensity: "High",
      whyItWorks: "Big pyramid, lots of cards"
    },
    {
      name: "Drunk Jenga",
      category: "Props",
      description: "54 blocks, 9 people = 6 pulls each. Tower falls at peak drama.",
      link: "/games/drunk-jenga",
      intensity: "Medium",
      whyItWorks: "Perfect block-to-player ratio"
    },
    {
      name: "Most Likely To",
      category: "No Props",
      description: "Point voting with 9 means no ties. Clear winners every round.",
      link: "/games/most-likely-to",
      intensity: "Medium",
      whyItWorks: "Odd number = no ties"
    },
    {
      name: "Beer Ball (3 Teams)",
      category: "Tournament",
      description: "3 teams rotate playing each other. Can use 3 per team or 3v3v3 chaos mode.",
      link: "/games/beer-ball",
      intensity: "High",
      whyItWorks: "Tournament format works well"
    },
    {
      name: "Thunderstruck",
      category: "Music",
      description: "Drink during 'Thunder', pass on each one. 9 people spreads it fairly.",
      link: "/games/thunderstruck",
      intensity: "High",
      whyItWorks: "Fair rotation with 9"
    },
    {
      name: "Cheers to the Governor",
      category: "No Props",
      description: "Count to 21 with custom rules. 9 voices making mistakes = hilarious.",
      link: "/games/cheers-to-the-governor",
      intensity: "Medium",
      whyItWorks: "More people = more chaos"
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Drinking Games for 9 People",
    "description": "Curated list of drinking games optimized for groups of 9 players.",
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
        title="Best Drinking Games for 9 People"
        description="Nine is a tricky number - too big for small group games, odd for team splits. But these games are specifically chosen because they work perfectly with 9, whether through tournaments, free-for-alls, or creative team setups."
        breadcrumb="Drinking Games for 9"
        relatedGames={[
          { name: "Kings Cup", slug: "kings-cup", description: "Fast-paced with 9" },
          { name: "Rage Cage", slug: "rage-cage", description: "Free-for-all chaos" },
          { name: "Flip Cup", slug: "flip-cup", description: "3-team tournament" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 9 people?"
          answer="The best drinking games for 9 people embrace the odd number: (1) Kings Cup - quick rounds with 5-6 cards each, (2) Rage Cage - free-for-all ignores team needs, (3) Flip Cup 3-team tournament - 3 teams of 3, (4) Most Likely To - odd numbers prevent ties, (5) Chandelier - one cup per person. For team games, use 3 teams of 3 in a tournament format."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>Making 9 Work</h2>
        <p>Nine people can be awkward for drinking games, but here&apos;s how to make it great:</p>
        <ul>
          <li><strong>3 teams of 3</strong> - Run tournament-style games</li>
          <li><strong>Free-for-all games</strong> - Skip teams entirely</li>
          <li><strong>5v4 with handicaps</strong> - Team of 4 gets advantages</li>
          <li><strong>One person referees</strong> - They rotate in next round</li>
        </ul>

        <h2>Best Games for 9 Players</h2>

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

        <h2>3-Team Tournament Format</h2>
        <p>The best way to handle 9 people in team games:</p>

        <h3>Round-Robin Setup</h3>
        <ul>
          <li>Team A vs Team B (Team C spectates/rests)</li>
          <li>Team B vs Team C (Team A spectates)</li>
          <li>Team C vs Team A (Team B spectates)</li>
          <li>Most wins takes the crown</li>
        </ul>

        <h3>Works Great For:</h3>
        <ul>
          <li><strong>Flip Cup</strong> - 3 per side races</li>
          <li><strong>Beer Pong</strong> - Rotate who shoots</li>
          <li><strong>Beer Ball</strong> - 3v3 throwing</li>
          <li><strong>Relay games</strong> - Any chug-and-go format</li>
        </ul>

        <h2>Free-For-All Options</h2>
        <p>Skip the team drama entirely with these games:</p>

        <h3>Rage Cage / Slap Cup</h3>
        <p>Everyone for themselves. 9 around the table means someone&apos;s always getting caught. Two balls bouncing creates chaos.</p>

        <h3>Chandelier</h3>
        <p>9 cups in a circle, 1 death cup in center. Each person defends their own cup. Get eliminated, keep drinking.</p>

        <h3>Quarters Championship</h3>
        <p>9-person bracket. Elimination style until one champion remains.</p>

        <h2>5v4 Handicap Rules</h2>
        <p>If you need 2 teams, make it fair:</p>

        <h3>For Flip Cup (5v4)</h3>
        <ul>
          <li>Team of 4&apos;s best flipper goes first AND last</li>
          <li>Gives them 5 flips to match 5 opponents</li>
        </ul>

        <h3>For Beer Pong (5v4)</h3>
        <ul>
          <li>Team of 4 gets 1 extra cup removed from their rack</li>
          <li>Or: Team of 4 gets 1 free re-rack</li>
        </ul>

        <h2>When Someone Needs a Break</h2>
        <p>8 is easier to split, so consider:</p>
        <ul>
          <li><strong>Rotating referee</strong> - Someone sits out each game</li>
          <li><strong>Drink maker duty</strong> - One person runs the bar</li>
          <li><strong>DJ rotation</strong> - Control the music for a round</li>
        </ul>

        <h2>Pro Tips for Groups of 9</h2>
        <ul>
          <li><strong>Plan tournaments ahead</strong> - 3-team formats need organization</li>
          <li><strong>Have varied games ready</strong> - Switch between team and free-for-all</li>
          <li><strong>Keep track of who&apos;s resting</strong> - Fair rotation matters</li>
          <li><strong>Embrace the chaos</strong> - 9 is a big, fun group</li>
        </ul>

        <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <h3 className="text-lg font-bold text-white mb-3">Browse by Group Size</h3>
          <div className="flex flex-wrap gap-2">
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link
                key={num}
                href={`/guides/drinking-games-for-${num}`}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  num === 9
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
