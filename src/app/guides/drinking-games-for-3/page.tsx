import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Drinking Games for 3 People (2025) | Trio Party Games",
  description: "The ultimate list of drinking games for exactly 3 people. Perfect for trios, threesomes of friends, or when someone bailed. Card games, no-prop games, and competitive options!",
  keywords: [
    "drinking games for 3",
    "drinking games for 3 people",
    "three person drinking games",
    "trio drinking games",
    "drinking games 3 players",
    "drinking games for three",
    "3 player drinking games",
    "best drinking games for 3",
    "three way drinking games",
    "drinking games small group",
  ],
  openGraph: {
    title: "15 Best Drinking Games for 3 People",
    description: "Perfect drinking games for trios! Card games, no-prop options, and competitive games that work with exactly three players.",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-3",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Drinking Games for 3 People",
    description: "Three's company with these games!",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-3",
  },
};

export default function DrinkingGamesFor3Page() {
  const quickAnswerTips = [
    "Kings Cup works great - each person gets 17+ cards",
    "Three Man is literally designed for 3 people",
    "Avoid team games - stick to free-for-all formats",
    "Card games shine with 3 players"
  ];

  const games = [
    {
      name: "Kings Cup",
      category: "Cards",
      description: "The classic card game shines with 3 players. Each person gets 17+ cards, so the game lasts longer and rules stack up nicely.",
      link: "/games/kings-cup",
      intensity: "Medium",
      whyItWorks: "17 cards each = longer game, more fun"
    },
    {
      name: "Three Man",
      category: "Dice",
      description: "Literally designed for this. Roll dice, assign drinking based on combinations. The 'Three Man' gets targeted until they roll out.",
      link: "/games/three-man",
      intensity: "High",
      whyItWorks: "Made specifically for 3+ players"
    },
    {
      name: "Ride the Bus",
      category: "Cards",
      description: "Multi-round guessing game. The pyramid round gets intense with 3 people since you know who has which cards.",
      link: "/games/ride-the-bus",
      intensity: "High",
      whyItWorks: "Pyramid is more strategic with 3"
    },
    {
      name: "Truth or Drink",
      category: "No Props",
      description: "Ask deep questions, refuse to answer = drink. With 3, conversations flow naturally and everyone stays engaged.",
      link: "/games/truth-or-drink",
      intensity: "Medium",
      whyItWorks: "Intimate but not awkward"
    },
    {
      name: "Never Have I Ever",
      category: "No Props",
      description: "Classic confession game. 3 people means you learn a lot about each other quickly.",
      link: "/games/never-have-i-ever",
      intensity: "Medium",
      whyItWorks: "Quick rounds, lots of confessions"
    },
    {
      name: "Fuck the Dealer",
      category: "Cards",
      description: "Guess the card value. Get it wrong, drink the difference. With 3, dealer rotates faster.",
      link: "/games/fuck-the-dealer",
      intensity: "High",
      whyItWorks: "Faster dealer rotation"
    },
    {
      name: "Beeramid",
      category: "Cards",
      description: "Build a pyramid, flip cards, call out who has matching cards. Bluffing is key with 3.",
      link: "/games/beeramid",
      intensity: "High",
      whyItWorks: "Easier to track cards, harder to bluff"
    },
    {
      name: "Most Likely To",
      category: "No Props",
      description: "Point at who's most likely to do something. With 3, two pointing at one person = they drink.",
      link: "/games/most-likely-to",
      intensity: "Medium",
      whyItWorks: "2v1 voting creates clear outcomes"
    },
    {
      name: "Higher or Lower",
      category: "Cards",
      description: "Simple but effective. Guess if next card is higher or lower. Take turns around the trio.",
      link: null,
      intensity: "Low",
      whyItWorks: "Easy to learn, fast turns"
    },
    {
      name: "Quarters",
      category: "Skill",
      description: "Bounce a quarter into a cup. Make it = assign a drink. Miss = your turn ends.",
      link: "/games/quarters",
      intensity: "Medium",
      whyItWorks: "Turn-based works with any number"
    },
    {
      name: "Drunk Jenga",
      category: "Props",
      description: "Pull blocks with rules written on them. With 3, each person pulls more blocks before it falls.",
      link: "/games/drunk-jenga",
      intensity: "Medium",
      whyItWorks: "18 pulls each = perfect pacing"
    },
    {
      name: "Trivia Drinking",
      category: "No Props",
      description: "Ask trivia questions. Wrong answer = drink. Can use phones for questions or just know stuff.",
      link: null,
      intensity: "Low",
      whyItWorks: "Educational and competitive"
    },
    {
      name: "Speed Facts",
      category: "No Props",
      description: "Say a fact about another player. They confirm or deny. Wrong = you drink. Right = they drink.",
      link: null,
      intensity: "Low",
      whyItWorks: "Tests how well you know each other"
    },
    {
      name: "Cheers to the Governor",
      category: "No Props",
      description: "Count to 21, adding rules at each number. With 3, rules accumulate fast and chaos ensues.",
      link: "/games/cheers-to-the-governor",
      intensity: "Medium",
      whyItWorks: "Rules stack quickly"
    },
    {
      name: "Horse Race",
      category: "Cards",
      description: "Bet on which suit will 'win' the race. Cards flip to move horses. Lose your bet = drink.",
      link: "/games/horse-race",
      intensity: "Low",
      whyItWorks: "Betting game works with any size"
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Drinking Games for 3 People",
    "description": "Curated list of drinking games that work perfectly with exactly three players.",
    "numberOfItems": games.length,
    "itemListElement": games.map((game, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": game.name,
      "description": game.description,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the best drinking games for 3 people?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best drinking games for 3 people include Kings Cup (cards last longer), Three Man (designed for 3+), Ride the Bus, Truth or Drink, and Never Have I Ever. Card games work especially well because each person gets more cards, making games last longer and feel more complete."
        }
      },
      {
        "@type": "Question",
        "name": "Can you play beer pong with 3 people?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Set up a triangular table with 6 cups each, positioned 120° apart. Each person shoots at both other players' cups. It's called Three-Way Beer Pong. Alternatively, play 2v1 where the solo player gets a smaller rack (6 cups vs 10)."
        }
      },
      {
        "@type": "Question",
        "name": "What is Three Man drinking game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Three Man is a dice game where one person is designated the 'Three Man' and must drink whenever a 3 appears on either die. Players roll and follow rules based on combinations. The Three Man changes when they roll doubles. It's perfect for 3-8 players."
        }
      },
      {
        "@type": "Question",
        "name": "Are drinking games fun with only 3 people?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Three people is actually ideal for many games because everyone stays engaged, conversations flow naturally, and you get more turns per person. It's more intimate than large groups but more dynamic than just 2 people. Card games especially shine with 3 players."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <GuideLayout
        title="15 Best Drinking Games for 3 People"
        description="Three's company, not a crowd! When someone bails or it's just the trio, these games work perfectly. Card games shine with 3 players, conversation games flow naturally, and everyone stays engaged."
        breadcrumb="Drinking Games for 3"
        relatedGames={[
          { name: "Kings Cup", slug: "kings-cup", description: "17+ cards each" },
          { name: "Three Man", slug: "three-man", description: "Made for this" },
          { name: "Ride the Bus", slug: "ride-the-bus", description: "Strategic pyramid" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 3 people?"
          answer="Top drinking games for 3 people: (1) Kings Cup - each person gets 17+ cards for longer games, (2) Three Man - literally designed for 3+ players, (3) Ride the Bus - pyramid round is more strategic, (4) Truth or Drink - conversations flow naturally, (5) Never Have I Ever - quick rounds, lots of confessions. Card games work best because the deck lasts longer per person. Avoid team games - stick to free-for-all formats."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>Why 3 Players is Actually Great</h2>
        <p>Three might seem awkward, but it&apos;s actually a sweet spot:</p>
        <ul>
          <li><strong>More cards per person</strong> - Kings Cup gives everyone 17+ cards</li>
          <li><strong>Faster turns</strong> - No waiting around, constant action</li>
          <li><strong>Better conversations</strong> - Intimate but not one-on-one awkward</li>
          <li><strong>Clear voting</strong> - 2v1 means someone always wins/loses</li>
          <li><strong>No teams needed</strong> - All free-for-all, no odd person out</li>
        </ul>

        <h2>Best Drinking Games for 3</h2>

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

        <h2>Card Games for 3 (The Best Category)</h2>
        <p>Card games are perfect for trios because each person gets more cards:</p>

        <h3>Kings Cup (52 ÷ 3 = 17+ cards each)</h3>
        <p>The deck lasts much longer than with 6-8 people. Rules have time to stack up, the King&apos;s Cup fills slowly, and everyone gets multiple turns with each card type. This is arguably the ideal group size for Kings Cup.</p>

        <h3>Ride the Bus</h3>
        <p>With only 3 players in the pyramid phase, you can actually track who has what cards. Bluffing is harder, but catching bluffs is easier. The strategy deepens significantly.</p>

        <h3>Fuck the Dealer</h3>
        <p>Dealer rotates after 3 incorrect guesses. With 3 players, you cycle through dealer positions faster, and the dealer gets burned out quicker. Fast and brutal.</p>

        <h2>No-Props Games for Spontaneous Trios</h2>
        <p>When you don&apos;t have cards or cups handy:</p>

        <h3>Truth or Drink</h3>
        <p>Ask questions. Won&apos;t answer? Drink. With 3, the dynamic is perfect - you&apos;re not isolated like with 2, but it&apos;s intimate enough for real conversations.</p>

        <h3>Never Have I Ever</h3>
        <p>Hold up 5 fingers. State something you&apos;ve never done. Others who have done it drink and put a finger down. With 3, rounds go fast and you learn a LOT about each other.</p>

        <h3>Most Likely To</h3>
        <p>&quot;Who&apos;s most likely to...&quot; and everyone points. With 3, it&apos;s always 2v1 or a three-way tie - never ambiguous.</p>

        <h2>Three-Way Beer Pong</h2>
        <p>Yes, you can play beer pong with 3. Here&apos;s how:</p>
        <ul>
          <li>Set up a triangular table or mark 3 positions on a round table</li>
          <li>Each player sets up 6 cups in a triangle pointing at them</li>
          <li>You shoot at BOTH other players&apos; cups</li>
          <li>Rotation: A→B→C→A... or shoot at whoever you want</li>
          <li>First person eliminated watches, final 2 play a sudden death round</li>
        </ul>

        <h2>The Three Man Game</h2>
        <p>The most fitting game for 3 people - it&apos;s in the name:</p>
        <ul>
          <li>Everyone rolls one die - lowest becomes &quot;Three Man&quot;</li>
          <li>Players take turns rolling 2 dice</li>
          <li>If ANY die shows 3, Three Man drinks</li>
          <li>Other combinations: 7 (left drinks), 11 (right drinks), doubles (give out that many), etc.</li>
          <li>Three Man escapes by rolling doubles</li>
          <li>Game continues until you decide to stop</li>
        </ul>

        <h2>Games to Avoid With 3</h2>
        <p>Some games just don&apos;t work well:</p>
        <ul>
          <li><strong>Flip Cup</strong> - Needs teams</li>
          <li><strong>Beer Pong (standard)</strong> - 2v2 format</li>
          <li><strong>Civil War</strong> - Team-based chaos</li>
          <li><strong>Boat Race</strong> - Relay needs even teams</li>
        </ul>
        <p>Stick to free-for-all games or games designed for small groups.</p>

        <h2>Pro Tips for Trio Drinking</h2>
        <ul>
          <li><strong>Embrace the intimacy</strong> - Great for getting to know people</li>
          <li><strong>Rotate who picks games</strong> - Everyone gets input</li>
          <li><strong>Use more cards</strong> - 2 decks makes games last even longer</li>
          <li><strong>Set a clear end time</strong> - Small groups drink more per person</li>
          <li><strong>Have variety</strong> - Switch games every 20-30 min</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>What&apos;s the best drinking game for exactly 3 people?</h3>
        <p>Kings Cup is the best overall - the deck splits perfectly, games last longer, and rules stack up nicely. Three Man is also excellent since it&apos;s literally designed for 3+ players.</p>

        <h3>Can we play flip cup with 3?</h3>
        <p>Not really - it&apos;s a team relay game. Try Three-Way Beer Pong instead, or stick to free-for-all games like Rage Cage (though even that benefits from more players).</p>

        <h3>Do conversation games get awkward with 3?</h3>
        <p>Actually, 3 is the sweet spot! It&apos;s more dynamic than 2 (no one-on-one pressure) but intimate enough for real conversations. Truth or Drink and Never Have I Ever both work great.</p>

        <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <h3 className="text-lg font-bold text-white mb-3">Browse by Group Size</h3>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/guides/drinking-games-for-1"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              Solo
            </Link>
            <Link
              href="/guides/drinking-games-for-2"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              2 People
            </Link>
            <Link
              href="/guides/drinking-games-for-3"
              className="px-4 py-2 bg-neon-pink text-white rounded-lg"
            >
              3 People
            </Link>
            {[4, 5, 6, 7, 8, 9, 10].map((num) => (
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
              10+
            </Link>
          </div>
        </div>
      </GuideLayout>
    </>
  );
}
