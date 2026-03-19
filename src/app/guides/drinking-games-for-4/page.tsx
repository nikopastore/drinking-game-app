import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Drinking Games for 4 People (2025) | Perfect Foursome Games",
  description: "The best drinking games for exactly 4 people. 2v2 team games, perfect card games, and more. Four is the magic number for drinking games!",
  keywords: [
    "drinking games for 4",
    "drinking games for 4 people",
    "four person drinking games",
    "drinking games 4 players",
    "2v2 drinking games",
    "beer pong doubles",
    "quartet drinking games",
    "4 player drinking games",
  ],
  openGraph: {
    title: "Best Drinking Games for 4 People",
    description: "Perfect foursome games for 4 players! 2v2 team games and ideal card games.",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-4",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-4",
  },
};

const gamesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Drinking Games for 4 People",
  "description": "Top drinking games optimized for groups of exactly 4 players",
  "numberOfItems": 15,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Beer Pong (2v2)", "description": "The classic doubles format - teams of 2 face off" },
    { "@type": "ListItem", "position": 2, "name": "Kings Cup", "description": "Sweet spot player count for card-based action" },
    { "@type": "ListItem", "position": 3, "name": "Flip Cup (2v2)", "description": "Relay races with perfect team size" },
    { "@type": "ListItem", "position": 4, "name": "Horse Race", "description": "Each player picks a suit - perfect for 4" },
    { "@type": "ListItem", "position": 5, "name": "Irish Poker", "description": "Ideal player count for card guessing" },
    { "@type": "ListItem", "position": 6, "name": "Beeramid", "description": "Pyramid bluffing works great at 4" },
    { "@type": "ListItem", "position": 7, "name": "Ride the Bus", "description": "Enough players for a challenging bus" },
    { "@type": "ListItem", "position": 8, "name": "Quarters", "description": "Fast-paced bouncing action" },
    { "@type": "ListItem", "position": 9, "name": "Spoons", "description": "Card grabbing chaos - 4 is minimum" },
    { "@type": "ListItem", "position": 10, "name": "Chandelier", "description": "Each player defends their cup" },
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best drinking game for 4 people?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beer Pong (2v2) is the best drinking game for 4 people. It perfectly divides into two teams, offers competitive gameplay, and keeps everyone engaged. Kings Cup is the best card game option, while Flip Cup 2v2 offers fast-paced team action."
      }
    },
    {
      "@type": "Question",
      "name": "Can you play drinking games with only 4 people?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Four people is actually ideal for many drinking games. It's the perfect number for 2v2 team games, ensures fast turn rotation in card games, and is enough people to keep games interesting without being chaotic. Many games like Beer Pong, Horse Race, and Kings Cup are designed with 4 players in mind."
      }
    },
    {
      "@type": "Question",
      "name": "What are good 2v2 drinking games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The best 2v2 drinking games are Beer Pong (the classic), Flip Cup relay races, Civil War (3 cups each, simultaneous shooting), and partner card games. Any team-based game naturally works great as 2v2 with 4 players."
      }
    },
    {
      "@type": "Question",
      "name": "Is 4 people enough for Kings Cup?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! 4 people is actually the sweet spot for Kings Cup. You get 13 cards each (the full deck), turns come frequently, and there's enough variety in rule-makers and social interactions. It's more intimate than larger groups but still dynamic."
      }
    }
  ]
};

export default function DrinkingGamesFor4Page() {
  const quickAnswerTips = [
    "4 people = perfect 2v2 teams",
    "Card games hit the sweet spot (13 cards each)",
    "Fast turn rotation keeps everyone engaged",
    "Every classic drinking game works at 4"
  ];

  const games = [
    {
      name: "Beer Pong (2v2)",
      category: "Team Classic",
      description: "The classic doubles format. Teams of 2 alternate shots at the opposing cups. The definitive 4-player game.",
      link: "/games/beer-pong",
      intensity: "Medium",
      whyItWorks: "Designed for exactly 4 players"
    },
    {
      name: "Kings Cup",
      category: "Cards",
      description: "Draw cards, follow rules. At 4 players, everyone gets 13 cards - the entire deck is used perfectly.",
      link: "/games/kings-cup",
      intensity: "Medium",
      whyItWorks: "Sweet spot player count"
    },
    {
      name: "Flip Cup (2v2)",
      category: "Team Relay",
      description: "Quick relay races with teams of 2. Do multiple rounds - best of 5 gets bragging rights.",
      link: "/games/flip-cup",
      intensity: "High",
      whyItWorks: "Fast, competitive team action"
    },
    {
      name: "Horse Race",
      category: "Cards",
      description: "Each player picks a suit (4 suits, 4 players). Bet on your horse and watch it race across the table.",
      link: "/games/horse-race",
      intensity: "Medium",
      whyItWorks: "Literally designed for 4 players"
    },
    {
      name: "Irish Poker",
      category: "Cards",
      description: "Guess your cards: red/black, higher/lower, in-between, suit. Wrong guesses mean drinks.",
      link: "/games/irish-poker",
      intensity: "Medium",
      whyItWorks: "Perfect card distribution"
    },
    {
      name: "Beeramid",
      category: "Cards",
      description: "Build a pyramid, bluff about your cards. 4 is ideal - enough targets, not too chaotic.",
      link: "/games/beeramid",
      intensity: "Medium",
      whyItWorks: "Bluffing dynamics work perfectly"
    },
    {
      name: "Ride the Bus",
      category: "Cards",
      description: "Card guessing elimination. The loser 'rides the bus' through a gauntlet of cards.",
      link: "/games/ride-the-bus",
      intensity: "High",
      whyItWorks: "Enough players for a long bus"
    },
    {
      name: "Quarters",
      category: "Skill",
      description: "Bounce quarters into cups. At 4, turns come fast and the competition stays fierce.",
      link: "/games/quarters",
      intensity: "Medium",
      whyItWorks: "Fast turn rotation"
    },
    {
      name: "Spoons",
      category: "Cards",
      description: "Pass cards, grab spoons. 4 is the minimum for maximum fun - 3 spoons, constant tension.",
      link: null,
      intensity: "High",
      whyItWorks: "Minimum players for chaos"
    },
    {
      name: "Chandelier",
      category: "Cups",
      description: "Bounce a ball, hit others' cups. Each of 4 players has a cup to defend.",
      link: "/games/chandelier",
      intensity: "High",
      whyItWorks: "Everyone has a target"
    },
    {
      name: "Civil War (2v2)",
      category: "Team Battle",
      description: "Like Beer Pong but each person has 3 cups. Both teammates shoot simultaneously. Pure chaos.",
      link: "/games/civil-war",
      intensity: "Extreme",
      whyItWorks: "Intense team battles"
    },
    {
      name: "Most Likely To",
      category: "No Props",
      description: "Vote on who's most likely to do something. At 4, ties happen often - both drink!",
      link: "/games/most-likely-to",
      intensity: "Low",
      whyItWorks: "Intimate but revealing"
    },
    {
      name: "Never Have I Ever",
      category: "No Props",
      description: "Share experiences, drink if you've done it. 4 people means you learn real secrets.",
      link: "/games/never-have-i-ever",
      intensity: "Low",
      whyItWorks: "Intimate group confessions"
    },
    {
      name: "Medusa",
      category: "No Props",
      description: "Look down, look up - if you make eye contact, drink. 4 means fewer matches per round.",
      link: "/games/medusa",
      intensity: "Low",
      whyItWorks: "Quick, silly ice breaker"
    },
    {
      name: "Boat Race (2v2)",
      category: "Team Relay",
      description: "Chugging relay - first team to finish all drinks wins. Short but intense at 2v2.",
      link: "/games/boat-race",
      intensity: "Extreme",
      whyItWorks: "Quick team showdown"
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
        title="Best Drinking Games for 4 People"
        description="Four is the magic number for drinking games. It's the perfect size for 2v2 team games, card games deal evenly, and everyone stays engaged. Whether you're looking for competitive team battles or casual card games, 4 players is the sweet spot."
        breadcrumb="Drinking Games for 4"
        relatedGames={[
          { name: "Beer Pong", slug: "beer-pong", description: "Classic 2v2" },
          { name: "Kings Cup", slug: "kings-cup", description: "13 cards each" },
          { name: "Horse Race", slug: "horse-race", description: "4 suits, 4 players" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 4 people?"
          answer="The best drinking games for 4 people are: (1) Beer Pong 2v2 - the classic doubles format, (2) Kings Cup - perfect card distribution with 13 cards each, (3) Flip Cup 2v2 - fast team relays, (4) Horse Race - one suit per player, (5) Irish Poker - ideal for card guessing games. Four is the magic number because it divides perfectly into teams and works for almost every classic drinking game."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>Why 4 Is the Magic Number</h2>
        <p>Four players is often considered the ideal group size for drinking games:</p>
        <ul>
          <li><strong>Perfect teams</strong> - 2v2 splits evenly every time</li>
          <li><strong>Card game sweet spot</strong> - 52 cards ÷ 4 = 13 cards each</li>
          <li><strong>Fast turns</strong> - No waiting forever for your turn</li>
          <li><strong>Engaged group</strong> - Everyone stays involved</li>
          <li><strong>Easy coordination</strong> - Not too many people to manage</li>
          <li><strong>Works everywhere</strong> - Most games are designed for 4+</li>
        </ul>

        <h2>Best Games for 4 People</h2>

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

        <h2>2v2 Team Games</h2>
        <p>The biggest advantage of 4 players is perfect team division. Here are the best team options:</p>

        <h3>Beer Pong Doubles</h3>
        <p>The gold standard of 4-player drinking games:</p>
        <ul>
          <li>Teams alternate shots (player 1, then player 2)</li>
          <li>10 cups in triangle formation per side</li>
          <li>Communicate strategy with your partner</li>
          <li>Re-racks available at 6, 3, and 1 cups</li>
          <li>Both players shoot on redemption</li>
        </ul>

        <h3>Flip Cup Relay</h3>
        <p>Quick team battles:</p>
        <ul>
          <li>2 players per side, facing each other</li>
          <li>First player drinks, flips, then partner goes</li>
          <li>First team to complete both flips wins</li>
          <li>Best of 5 or 7 for a real competition</li>
          <li>Losers drink penalty shots</li>
        </ul>

        <h3>Civil War (2v2)</h3>
        <p>Chaotic team beer pong:</p>
        <ul>
          <li>Each player has 3 cups in front of them</li>
          <li>Both teammates shoot simultaneously</li>
          <li>No turns - grab balls and fire</li>
          <li>When your cups are gone, you're out</li>
          <li>Last player standing wins for their team</li>
        </ul>

        <h2>Card Games for 4</h2>
        <p>A standard deck of 52 cards divides perfectly among 4 players. Here's how to use it:</p>

        <h3>Kings Cup at 4</h3>
        <p>Why 4 is the sweet spot:</p>
        <ul>
          <li>13 cards per person - you'll draw the entire deck</li>
          <li>Each person will draw 3-4 Kings</li>
          <li>Someone's making rules frequently</li>
          <li>Waterfall isn't too long</li>
          <li>Game lasts about 30-45 minutes</li>
        </ul>

        <h3>Horse Race</h3>
        <p>Literally designed for 4 players:</p>
        <ul>
          <li>4 suits = 4 horses = 4 players</li>
          <li>Each player bets drinks on their suit</li>
          <li>Flip cards, horses advance when their suit appears</li>
          <li>Winner doesn't drink, losers drink their bet</li>
          <li>Perfect 1:1 player-to-horse ratio</li>
        </ul>

        <h3>Irish Poker</h3>
        <p>Guess your cards, drink for wrong guesses:</p>
        <ul>
          <li><strong>Round 1:</strong> Red or Black?</li>
          <li><strong>Round 2:</strong> Higher or Lower?</li>
          <li><strong>Round 3:</strong> In-between or Outside?</li>
          <li><strong>Round 4:</strong> Guess the suit</li>
          <li>Each wrong guess = more drinks</li>
        </ul>

        <h2>No-Props Games</h2>
        <p>Nothing needed but drinks and friends:</p>

        <h3>Most Likely To</h3>
        <p>At 4 players, votes often tie 2-2. When tied, both people drink. This actually makes it more fun - more drinking, more debate about the next question.</p>

        <h3>Never Have I Ever</h3>
        <p>Four people is intimate enough that you'll actually learn things about your friends. The game gets more revealing with smaller groups who know each other.</p>

        <h3>Would You Rather</h3>
        <p>Go around asking "would you rather" questions. Anyone in the minority drinks. With 4 people, you need at least 3-1 for someone to be in the minority - or drink ties.</p>

        <h2>Tournament Ideas</h2>
        <p>With 4 people, you can run mini-tournaments:</p>

        <h3>Beer Pong Bracket</h3>
        <ul>
          <li>2 games of 1v1</li>
          <li>Winners play finals</li>
          <li>Losers play for 3rd</li>
          <li>Winner of finals is champion</li>
        </ul>

        <h3>Quarters Championship</h3>
        <ul>
          <li>Round robin - everyone plays everyone</li>
          <li>Best of 3 each matchup</li>
          <li>Track wins, top 2 play finals</li>
          <li>Or just elimination bracket</li>
        </ul>

        <h2>Games to Avoid at 4</h2>
        <p>Some games don't work well with exactly 4 people:</p>
        <ul>
          <li><strong>Rage Cage</strong> - Needs 5+ for proper chaos</li>
          <li><strong>Slap Cup</strong> - Better with more people passing</li>
          <li><strong>Large-scale Flip Cup</strong> - 2v2 works, but longer teams are more exciting</li>
          <li><strong>Power Hour</strong> - Works but better as a group activity</li>
        </ul>

        <h2>FAQ</h2>

        <div className="space-y-4 my-6">
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">What if we have uneven skill levels?</h4>
            <p className="text-gray-400">For team games, pair the best player with the weakest. This balances competition and keeps games close.</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">How do we pick teams?</h4>
            <p className="text-gray-400">Rock-paper-scissors, high card draw, or winner of the last game picks first. Avoid couple vs couple if you want to stay friends.</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">Is 4 people enough for a good party?</h4>
            <p className="text-gray-400">Absolutely. 4 is ideal for game nights. You can run tournaments, play every classic game, and everyone stays involved all night.</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">What's the best game order for the night?</h4>
            <p className="text-gray-400">Start with a warm-up (Quarters), move to main events (Beer Pong, Kings Cup), and end with something social (Never Have I Ever) when people are loose.</p>
          </div>
        </div>

        <h2>Looking for Different Group Sizes?</h2>
        <p>Check our guides for <Link href="/guides/drinking-games-for-3" className="text-neon-pink hover:underline">3 people</Link>, <Link href="/guides/drinking-games-for-5" className="text-neon-pink hover:underline">5 people</Link>, or <Link href="/guides/drinking-games-for-2" className="text-neon-pink hover:underline">just 2</Link>.</p>

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
              className="px-4 py-2 bg-neon-pink text-white rounded-lg"
            >
              4 People
            </Link>
            {[5, 6, 7, 8, 9, 10].map((num) => (
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
