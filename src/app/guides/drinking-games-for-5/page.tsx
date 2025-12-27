import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 5 People (2025) | Goldilocks Group Size",
  description: "The best drinking games for exactly 5 people. Not too small, not too big - five is the sweet spot for competitive games, card games, and party chaos!",
  keywords: [
    "drinking games for 5",
    "drinking games for 5 people",
    "five person drinking games",
    "drinking games 5 players",
    "5 player drinking games",
    "drinking games for five",
    "party games for 5",
    "5 person party games",
  ],
  openGraph: {
    title: "Best Drinking Games for 5 People",
    description: "Perfect games for groups of 5! The Goldilocks zone for drinking games.",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-5",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-5",
  },
};

const gamesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Drinking Games for 5 People",
  "description": "Top drinking games optimized for groups of exactly 5 players",
  "numberOfItems": 15,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Rage Cage", "description": "5 is the minimum for maximum chaos" },
    { "@type": "ListItem", "position": 2, "name": "Kings Cup", "description": "10-11 cards each for perfect pacing" },
    { "@type": "ListItem", "position": 3, "name": "Chandelier", "description": "Everyone has a cup to defend" },
    { "@type": "ListItem", "position": 4, "name": "Beeramid", "description": "Bluffing with 5 players is ideal" },
    { "@type": "ListItem", "position": 5, "name": "Ride the Bus", "description": "Great loser punishment dynamics" },
    { "@type": "ListItem", "position": 6, "name": "Most Likely To", "description": "Clear majority voting" },
    { "@type": "ListItem", "position": 7, "name": "Never Have I Ever", "description": "Diverse group experiences" },
    { "@type": "ListItem", "position": 8, "name": "Slap Cup", "description": "Perfect table intensity" },
    { "@type": "ListItem", "position": 9, "name": "Quarters", "description": "Fast turn rotation" },
    { "@type": "ListItem", "position": 10, "name": "Medusa", "description": "Multiple eye contact matches" },
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best drinking game for 5 people?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rage Cage is the best drinking game for 5 people. It hits the minimum player count for maximum chaos - enough people for stacking to be exciting, but not so many that you're waiting forever. Kings Cup and Chandelier are also excellent at 5."
      }
    },
    {
      "@type": "Question",
      "name": "Why is 5 considered the 'Goldilocks' number for drinking games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Five players is often called the Goldilocks zone because it's not too small and not too big. You have enough people for competitive dynamics and voting games to work, but not so many that turns take forever or the group becomes hard to manage. Most drinking games are designed for 4-8 players, making 5 the sweet spot."
      }
    },
    {
      "@type": "Question",
      "name": "How do you split 5 people into teams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For team games with 5, you can do 3v2 with handicaps (team of 2 gets an advantage), have 1 person rotate between teams each round, or have 1 person sit out as referee and DJ. For Beer Pong, you can do 2v2 with one rotating or play king of the court (winner stays, new challenger)."
      }
    },
    {
      "@type": "Question",
      "name": "Is 5 people enough for Rage Cage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! 5 is actually the minimum recommended number for Rage Cage, and many consider it ideal. With 5 players, there's constant tension about getting stacked, but games don't drag on too long. The chaos-to-wait ratio is perfect."
      }
    }
  ]
};

export default function DrinkingGamesFor5Page() {
  const quickAnswerTips = [
    "5 = the 'Goldilocks' number for drinking games",
    "Minimum size for competitive elimination games",
    "Voting games get clear majorities",
    "Card games have ideal pacing (10-11 cards each)"
  ];

  const games = [
    {
      name: "Rage Cage",
      category: "Competitive",
      description: "Two balls, stacking elimination, pure chaos. 5 is the minimum for this legendary game.",
      link: "/game/rage-cage",
      intensity: "High",
      whyItWorks: "Perfect chaos-to-wait ratio"
    },
    {
      name: "Kings Cup",
      category: "Cards",
      description: "Everyone gets 10-11 cards. Perfect pacing - game lasts about 30-45 minutes.",
      link: "/game/kings-cup",
      intensity: "Medium",
      whyItWorks: "Ideal cards per person"
    },
    {
      name: "Chandelier",
      category: "Cups",
      description: "5 cups in a circle, one in the center. Bounce balls to make others drink.",
      link: "/game/chandelier",
      intensity: "High",
      whyItWorks: "Plenty of targets to aim for"
    },
    {
      name: "Beeramid",
      category: "Cards",
      description: "Build a pyramid, bluff your cards. 5 is perfect for social deduction.",
      link: "/game/beeramid",
      intensity: "Medium",
      whyItWorks: "Enough players to hide bluffs"
    },
    {
      name: "Ride the Bus",
      category: "Cards",
      description: "Card guessing elimination. Loser rides the bus through a brutal gauntlet.",
      link: "/game/ride-the-bus",
      intensity: "High",
      whyItWorks: "Dramatic loser punishment"
    },
    {
      name: "Most Likely To",
      category: "No Props",
      description: "Vote on who's most likely. With 5, majority is clear (3+ votes wins).",
      link: "/game/most-likely-to",
      intensity: "Low",
      whyItWorks: "Clear voting majorities"
    },
    {
      name: "Never Have I Ever",
      category: "No Props",
      description: "5 different life experiences makes for surprising revelations.",
      link: "/game/never-have-i-ever",
      intensity: "Low",
      whyItWorks: "Diverse group dynamics"
    },
    {
      name: "Slap Cup",
      category: "Competitive",
      description: "Stack cups, drink penalties. 5 keeps the action fast and intense.",
      link: "/game/slap-cup",
      intensity: "High",
      whyItWorks: "Non-stop competitive action"
    },
    {
      name: "Quarters",
      category: "Skill",
      description: "Bounce quarters into cups. Quick turns, constant competition.",
      link: "/game/quarters",
      intensity: "Medium",
      whyItWorks: "Fast turn rotation"
    },
    {
      name: "Medusa",
      category: "No Props",
      description: "Look down, look up, eye contact = drink. More players = more matches.",
      link: "/game/medusa",
      intensity: "Low",
      whyItWorks: "Multiple matches per round"
    },
    {
      name: "Irish Poker",
      category: "Cards",
      description: "Guess your cards through 4 rounds. Everyone plays, everyone drinks.",
      link: "/game/irish-poker",
      intensity: "Medium",
      whyItWorks: "Good card distribution"
    },
    {
      name: "Horse Race",
      category: "Cards",
      description: "5 players, 4 suits - one person is the bookie taking bets from all.",
      link: "/game/horse-race",
      intensity: "Medium",
      whyItWorks: "Natural bookie rotation"
    },
    {
      name: "Drunk Jenga",
      category: "Skill",
      description: "Each block has a rule. 5 players means faster tower building.",
      link: "/game/drunk-jenga",
      intensity: "Medium",
      whyItWorks: "Quick rounds, high stakes"
    },
    {
      name: "Flip Cup",
      category: "Team Relay",
      description: "3v2 with the smaller team going twice, or rotate one person out.",
      link: "/game/flip-cup",
      intensity: "High",
      whyItWorks: "Adaptable team format"
    },
    {
      name: "Power Hour",
      category: "Endurance",
      description: "Shot of beer every minute for 60 minutes. Group support helps everyone finish.",
      link: "/game/power-hour",
      intensity: "Extreme",
      whyItWorks: "Group encouragement"
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gamesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GuideLayout
        title="Best Drinking Games for 5 People"
        description="Five is the Goldilocks zone for drinking games - not too small, not too big, just right. With 5 players you have enough people for competitive games, clear voting majorities, and proper card game pacing. This is where many games really shine."
        breadcrumb="Drinking Games for 5"
        relatedGames={[
          { name: "Rage Cage", slug: "rage-cage", description: "Minimum chaos count" },
          { name: "Kings Cup", slug: "kings-cup", description: "10-11 cards each" },
          { name: "Chandelier", slug: "chandelier", description: "5-cup circle" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 5 people?"
          answer="The best drinking games for 5 people are: (1) Rage Cage - 5 is the minimum for maximum chaos, (2) Kings Cup - perfect card distribution with 10-11 cards each, (3) Chandelier - everyone has a cup to defend, (4) Beeramid - ideal for bluffing dynamics, (5) Most Likely To - clear voting majorities. Five is the Goldilocks number because it's enough for competitive games but not so many that turns drag."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>Why 5 Is the Goldilocks Number</h2>
        <p>Five players hits the sweet spot for almost every drinking game:</p>
        <ul>
          <li><strong>Minimum for chaos games</strong> - Rage Cage, Slap Cup hit their stride</li>
          <li><strong>Clear voting</strong> - 3 votes is always a majority</li>
          <li><strong>Card game pacing</strong> - 10-11 cards each in Kings Cup</li>
          <li><strong>Quick turns</strong> - Never waiting too long</li>
          <li><strong>Enough targets</strong> - Cup games have multiple options</li>
          <li><strong>Intimate but lively</strong> - Good energy, still personal</li>
        </ul>

        <h2>Best Games for 5 People</h2>

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

        <h2>Competitive Games That Shine at 5</h2>
        <p>These games need at least 5 to reach their full potential:</p>

        <h3>Rage Cage</h3>
        <p>The gold standard of chaos games:</p>
        <ul>
          <li>5 is the minimum recommended - and many say ideal</li>
          <li>Two balls circling the table simultaneously</li>
          <li>Make your cup, pass to the left</li>
          <li>Get stacked? Drink a center cup and continue</li>
          <li>Constant tension about being caught</li>
          <li>Nobody waits long between turns</li>
        </ul>

        <h3>Chandelier</h3>
        <p>Cup defense with ping pong balls:</p>
        <ul>
          <li>5 cups in a circle, one center cup (the chandelier)</li>
          <li>Bounce a ball to hit others' cups</li>
          <li>Hit someone's cup = they drink</li>
          <li>Hit the chandelier = everyone drinks</li>
          <li>Last person to finish becomes the target</li>
        </ul>

        <h3>Slap Cup</h3>
        <p>Fast-paced stacking elimination:</p>
        <ul>
          <li>Similar to Rage Cage but with cup slapping</li>
          <li>Make your cup, slap the next person's cup away</li>
          <li>They drink a penalty cup and continue</li>
          <li>5 players keeps the intensity high</li>
          <li>Quick games, play multiple rounds</li>
        </ul>

        <h2>Card Games for 5</h2>
        <p>With 5 players, a 52-card deck distributes perfectly for great game pacing:</p>

        <h3>Kings Cup at 5</h3>
        <p>Why 5 works great:</p>
        <ul>
          <li>10-11 cards per person after dealing</li>
          <li>Game lasts 30-40 minutes - not too short, not too long</li>
          <li>Waterfall is manageable length</li>
          <li>Enough variety in rule-makers</li>
          <li>Social cards (8 = mate, 6 = chicks, etc.) have options</li>
        </ul>

        <h3>Beeramid</h3>
        <p>Bluffing with 5 players hits the sweet spot:</p>
        <ul>
          <li>Build a pyramid of cards face-down</li>
          <li>Flip cards one at a time</li>
          <li>Claim you have a matching card (bluff or not)</li>
          <li>5 players = hard to track who's lying</li>
          <li>Enough targets to spread the damage</li>
        </ul>

        <h3>Ride the Bus</h3>
        <p>Dramatic elimination with a brutal finale:</p>
        <ul>
          <li>Red or black → Higher or lower → In-between → Suit</li>
          <li>Wrong guesses accumulate drinks</li>
          <li>Loser "rides the bus" through card gauntlet</li>
          <li>5 players = good odds someone gets destroyed</li>
          <li>Crowd cheers/jeers the bus rider</li>
        </ul>

        <h2>Handling Team Games with 5</h2>
        <p>Odd numbers can be tricky. Here's how to adapt:</p>

        <h3>Beer Pong Options</h3>
        <ul>
          <li><strong>2v2 + Rotator:</strong> One person rotates in after each game</li>
          <li><strong>King of the Court:</strong> Winner stays, loser tags out, new challenger</li>
          <li><strong>3v2 handicap:</strong> Team of 2 gets extra re-racks or shots</li>
          <li><strong>1v1 tournament:</strong> 5-person bracket, someone gets a bye</li>
        </ul>

        <h3>Flip Cup Options</h3>
        <ul>
          <li><strong>3v2 + double flip:</strong> Team of 2, each person flips twice</li>
          <li><strong>Rotating referee:</strong> One person refs, switches each round</li>
          <li><strong>All vs All:</strong> 5-person race, slowest drinks penalty</li>
          <li><strong>Survivor Flip Cup:</strong> Slowest eliminated each round</li>
        </ul>

        <h2>Social Games for 5</h2>
        <p>Games that work great around conversation:</p>

        <h3>Most Likely To</h3>
        <p>With 5 players, voting is clear:</p>
        <ul>
          <li>3 votes is always a clear majority</li>
          <li>Ties (2-2-1) mean both top vote-getters drink</li>
          <li>Go around with each person asking a question</li>
          <li>Count to 3, everyone points</li>
          <li>Person with most votes drinks that many</li>
        </ul>

        <h3>Never Have I Ever</h3>
        <p>5 different backgrounds make for revelations:</p>
        <ul>
          <li>Enough variety in experiences</li>
          <li>Small enough that you'll learn real secrets</li>
          <li>Each person says one "Never have I ever..."</li>
          <li>Anyone who HAS done it drinks</li>
          <li>Gets more interesting as inhibitions lower</li>
        </ul>

        <h3>Two Truths and a Lie</h3>
        <p>Guessing game with drinks:</p>
        <ul>
          <li>Each person states two truths and one lie</li>
          <li>Others vote on which is the lie</li>
          <li>Correct guessers give out drinks</li>
          <li>Wrong guessers drink themselves</li>
          <li>If no one guesses right, speaker drinks</li>
        </ul>

        <h2>The 5-Person Night Structure</h2>
        <p>Here's a recommended flow for a night with 5 friends:</p>

        <div className="p-4 bg-dark-800 rounded-lg border border-dark-600 my-6">
          <h4 className="font-bold text-white mb-3">Recommended Night Flow</h4>
          <ol className="text-gray-400 space-y-2">
            <li><strong>Warm-up (30 min):</strong> Never Have I Ever or Most Likely To - gets conversation going</li>
            <li><strong>Card game (45 min):</strong> Kings Cup or Beeramid - peak card game experience</li>
            <li><strong>High energy (30 min):</strong> Rage Cage or Chandelier - everyone's loose, max fun</li>
            <li><strong>Cool down:</strong> Back to social games as energy winds down</li>
          </ol>
        </div>

        <h2>Games to Skip at 5</h2>
        <p>Some games work better with different numbers:</p>
        <ul>
          <li><strong>Large Flip Cup</strong> - 5 is minimum; works but more exciting with more</li>
          <li><strong>Civil War</strong> - Designed for even teams (4 or 6)</li>
          <li><strong>Horse Race</strong> - Works at 5 but designed for 4 (4 suits)</li>
          <li><strong>Big team games</strong> - Save for 6+ groups</li>
        </ul>

        <h2>FAQ</h2>

        <div className="space-y-4 my-6">
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">What if one person doesn't drink much?</h4>
            <p className="text-gray-400">They can take smaller sips, drink something lighter (beer vs. liquor), or be the designated "rule enforcer" and DJ. Most games work fine with mixed drinking levels.</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">Best game to start with for 5 strangers?</h4>
            <p className="text-gray-400">Never Have I Ever or Most Likely To. They get conversation flowing and help people learn about each other without requiring coordination or skill.</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">Is 5 enough for Rage Cage?</h4>
            <p className="text-gray-400">Absolutely - 5 is the minimum recommended and many argue it's ideal. Games are fast, everyone's engaged, and there's constant tension. More than 8 can actually slow things down.</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">How do we pick who sits out for team games?</h4>
            <p className="text-gray-400">Rotate after each game, loser of last game refs, or have the odd person be "DJ/refill duty" for a round. Make sure everyone gets equal play time over the night.</p>
          </div>
        </div>

        <h2>Looking for Different Group Sizes?</h2>
        <p>Check our guides for <Link href="/guides/drinking-games-for-4" className="text-neon-pink hover:underline">4 people</Link>, <Link href="/guides/drinking-games-for-6" className="text-neon-pink hover:underline">6 people</Link>, or <Link href="/guides/drinking-games-for-3" className="text-neon-pink hover:underline">smaller groups</Link>.</p>

        <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <h3 className="text-lg font-bold text-white mb-3">Browse by Group Size</h3>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/guides/drinking-games-for-2"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              2 People
            </Link>
            <Link
              href="/guides/drinking-games-for-3"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              3 People
            </Link>
            <Link
              href="/guides/drinking-games-for-4"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              4 People
            </Link>
            <Link
              href="/guides/drinking-games-for-5"
              className="px-4 py-2 bg-neon-pink text-white rounded-lg"
            >
              5 People
            </Link>
            {[6, 7, 8, 9, 10].map((num) => (
              <Link
                key={num}
                href={`/guides/drinking-games-for-${num}`}
                className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
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
