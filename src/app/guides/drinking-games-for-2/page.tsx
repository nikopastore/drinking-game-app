import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Drinking Games for 2 People (2024) | Games for Couples & Friends",
  description: "The ultimate list of fun drinking games for 2 people. Perfect for couples, dates, or two friends. Includes card games, no-prop games, and quick games you can play tonight!",
  keywords: [
    "drinking games for 2",
    "drinking games for two people",
    "two player drinking games",
    "drinking games for couples",
    "fun drinking games for 2",
    "easy drinking games for two",
    "drinking games for two with cards",
    "drinking games for two without cards",
    "couple drinking games",
    "date night drinking games",
    "drinking games for 2 players",
    "best two person drinking games",
    "romantic drinking games",
  ],
  openGraph: {
    title: "15 Best Drinking Games for 2 People",
    description: "Fun drinking games perfect for couples or two friends. Card games, no-prop games, and more!",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-2",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Drinking Games for 2 People",
    description: "Perfect games for couples or two friends. Quick, fun, and easy to play!",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-2",
  },
};

export default function DrinkingGamesFor2Page() {
  const quickAnswerTips = [
    "Truth or Drink works great for couples getting to know each other",
    "Never Have I Ever reveals fun secrets",
    "Card games like Higher/Lower are easy with just a deck",
    "Speed Quarters is competitive and fast-paced"
  ];

  const games = [
    {
      name: "Truth or Drink",
      category: "No Props",
      description: "Ask each other questions. Refuse to answer? Take a drink. Perfect for getting to know someone better.",
      link: "/game/truth-or-drink",
      intensity: "Medium",
    },
    {
      name: "Never Have I Ever",
      category: "No Props",
      description: "Take turns saying things you haven't done. If the other person has done it, they drink.",
      link: "/game/never-have-i-ever",
      intensity: "Medium",
    },
    {
      name: "Two Truths and a Lie",
      category: "No Props",
      description: "Each person says 3 statements - 2 true, 1 false. Guess wrong? Drink.",
      link: null,
      intensity: "Low",
    },
    {
      name: "Higher or Lower",
      category: "Cards",
      description: "Flip a card. Guess if the next will be higher or lower. Wrong? Drink.",
      link: null,
      intensity: "Low",
    },
    {
      name: "Ride the Bus",
      category: "Cards",
      description: "Guess card properties (color, higher/lower, suit, etc.). Get it wrong and drink.",
      link: "/game/ride-the-bus",
      intensity: "High",
    },
    {
      name: "Quarters",
      category: "Props",
      description: "Bounce a quarter into a cup. Miss and drink. Make it and your partner drinks.",
      link: "/game/quarters",
      intensity: "Medium",
    },
    {
      name: "Battle Shots",
      category: "Props",
      description: "Like Battleship but with shot glasses. Sink your opponent's fleet!",
      link: null,
      intensity: "High",
    },
    {
      name: "Speed Facts",
      category: "No Props",
      description: "Say a fact about your partner. Right? They drink. Wrong? You drink.",
      link: null,
      intensity: "Low",
    },
    {
      name: "Movie Drinking Game",
      category: "No Props",
      description: "Pick a movie and drink when specific things happen. Great for date night!",
      link: "/game/movie-drinking-game",
      intensity: "Low",
    },
    {
      name: "Flip Cup (1v1)",
      category: "Props",
      description: "Race to flip your cup. Loser drinks. Best of 5!",
      link: "/game/flip-cup",
      intensity: "Medium",
    },
    {
      name: "Would You Rather",
      category: "No Props",
      description: "Ask increasingly wild hypotheticals. Refuse to choose? Drink.",
      link: null,
      intensity: "Low",
    },
    {
      name: "Drunk Jenga",
      category: "Props",
      description: "Pull blocks with rules written on them. Collapse the tower? Finish your drink.",
      link: "/game/drunk-jenga",
      intensity: "Medium",
    },
    {
      name: "The Name Game",
      category: "No Props",
      description: "Name celebrities. Next name must start with the first letter of the previous last name. Stumble and drink.",
      link: null,
      intensity: "Low",
    },
    {
      name: "Caps",
      category: "Props",
      description: "Throw bottle caps at each other's cups across the room. Land one in? They drink.",
      link: null,
      intensity: "Medium",
    },
    {
      name: "Power Hour (Duo Edition)",
      category: "No Props",
      description: "Take a shot of beer every minute for an hour. Race to see who lasts longer!",
      link: "/game/power-hour",
      intensity: "High",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Drinking Games for 2 People",
    "description": "Curated list of the best drinking games that work perfectly with just two players.",
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
        "name": "What are the best drinking games for 2 people?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best drinking games for 2 people include Truth or Drink, Never Have I Ever, Higher or Lower, Ride the Bus, and Battle Shots. These games work perfectly with just two players and range from casual conversation games to competitive challenges."
        }
      },
      {
        "@type": "Question",
        "name": "What drinking games can couples play?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Great drinking games for couples include Truth or Drink (gets conversations flowing), Never Have I Ever (learn new things about each other), Movie Drinking Games (cozy date night), and Would You Rather. These games help couples connect while having fun."
        }
      },
      {
        "@type": "Question",
        "name": "What are easy drinking games for 2 without cards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Easy drinking games for 2 without cards include Truth or Drink, Never Have I Ever, Two Truths and a Lie, Would You Rather, Speed Facts, and The Name Game. All you need is your drinks and each other!"
        }
      },
      {
        "@type": "Question",
        "name": "What's a good drinking game for a first date?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a first date, try lighter games like Two Truths and a Lie or Would You Rather - they're fun conversation starters without getting too wild. Avoid high-intensity games that might get someone too drunk too fast."
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
        title="15 Best Drinking Games for 2 People"
        description="Don't have a big group? No problem! These drinking games are perfect for just two people - whether you're on a date, hanging with a friend, or just want a chill night in. From card games to no-prop options, we've got you covered."
        breadcrumb="Drinking Games for 2"
        relatedGames={[
          { name: "Truth or Drink", slug: "truth-or-drink", description: "Ask questions or drink" },
          { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Share experiences" },
          { name: "Ride the Bus", slug: "ride-the-bus", description: "Card guessing game" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 2 people?"
          answer="Top drinking games for 2 people: (1) Truth or Drink - ask questions or drink instead of answering, (2) Never Have I Ever - reveal experiences, (3) Higher or Lower - guess cards, (4) Ride the Bus - multi-round card game, (5) Quarters - bounce coin into cup, (6) Two Truths and a Lie - guess wrong and drink. No-prop options work best for spontaneous games. Card games like Higher/Lower need just a deck. All take 15-45 minutes and perfect for couples or friends."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>Why Two-Player Drinking Games Are Great</h2>
        <p>Sometimes you don&apos;t need a whole party. Two-player drinking games are perfect for:</p>
        <ul>
          <li><strong>Date nights</strong> - Break the ice and get conversations going</li>
          <li><strong>Pregaming</strong> - When it&apos;s just you and a buddy before going out</li>
          <li><strong>Rainy nights in</strong> - Better than just watching Netflix</li>
          <li><strong>Getting to know someone</strong> - Great for new friendships or relationships</li>
        </ul>

        <h2>Best Drinking Games for 2: The Complete List</h2>

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
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-white text-lg">{game.name}</h3>
                        <span className="text-xs px-2 py-1 bg-dark-700 rounded-full text-gray-400">{game.category}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          game.intensity === 'Low' ? 'bg-green-500/20 text-green-400' :
                          game.intensity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {game.intensity} Intensity
                        </span>
                      </div>
                      <p className="text-gray-400">{game.description}</p>
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

        <h2>Drinking Games for 2 Without Cards</h2>
        <p>Don&apos;t have a deck of cards? These games require absolutely no props:</p>

        <h3>1. Truth or Drink</h3>
        <p>Take turns asking each other questions. You can find question lists online or make up your own. If someone doesn&apos;t want to answer, they drink instead. This game can get deep, so set boundaries if needed!</p>

        <h3>2. Never Have I Ever</h3>
        <p>Classic for a reason. Hold up 5 fingers. Say &quot;Never have I ever...&quot; and if your partner has done it, they drink and put a finger down. First to put all fingers down loses.</p>

        <h3>3. Two Truths and a Lie</h3>
        <p>Each person says three statements about themselves - two true, one false. If the other person guesses the lie correctly, you drink. Guess wrong? They drink.</p>

        <h3>4. Would You Rather</h3>
        <p>Ask increasingly wild hypothetical questions. If you can&apos;t decide or refuse to answer, drink. The scenarios get funnier as the night goes on.</p>

        <h2>Drinking Games for 2 With Cards</h2>
        <p>Have a deck? These games are perfect:</p>

        <h3>Higher or Lower</h3>
        <p>Flip a card face-up. Guess if the next card will be higher or lower. Get it right? Your partner drinks. Wrong? You drink. Simple but surprisingly fun.</p>

        <h3>Ride the Bus</h3>
        <p>This multi-round game has you guessing card properties. Red or black? Higher or lower? Inside or outside? Pick a suit? Wrong answers mean drinks, and the &quot;bus ride&quot; at the end can be brutal.</p>

        <h2>Couple-Specific Drinking Games</h2>
        <p>These games are especially good for romantic partners:</p>

        <ul>
          <li><strong>Speed Facts</strong> - Say facts about your partner. Right? They drink. Wrong? You drink. Tests how well you know each other.</li>
          <li><strong>Movie Drinking Game</strong> - Pick a rom-com and drink when tropes happen. Cozy and fun.</li>
          <li><strong>Truth or Drink: Couples Edition</strong> - Questions specifically about your relationship and history together.</li>
        </ul>

        <h2>Tips for Two-Player Drinking Games</h2>
        <ul>
          <li><strong>Pace yourselves</strong> - With only two people, you&apos;re drinking more often</li>
          <li><strong>Use weaker drinks</strong> - Beer or wine instead of shots</li>
          <li><strong>Set boundaries</strong> - Especially for question-based games</li>
          <li><strong>Have snacks ready</strong> - You&apos;ll thank us later</li>
          <li><strong>Keep it fun</strong> - Don&apos;t get too competitive</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>What&apos;s the best drinking game for a first date?</h3>
        <p>Start with something light like Two Truths and a Lie or Would You Rather. They&apos;re great conversation starters without getting too intense. Save Truth or Drink for when you know each other better!</p>

        <h3>Can you play beer pong with 2 people?</h3>
        <p>Yes! Set up 6 cups each instead of 10, and take turns shooting (no teammates). It works, though it&apos;s definitely more fun with teams.</p>

        <h3>What drinking games help you get to know someone?</h3>
        <p>Truth or Drink and Never Have I Ever are the best for learning about someone. They naturally lead to stories and deeper conversations.</p>

        <h3>What if we run out of questions?</h3>
        <p>Look up question lists online, or switch games! That&apos;s why we listed 15 - variety keeps the night interesting.</p>

        <h2>Browse More Two-Player Options</h2>
        <p>Looking for more games that work with two people? Check out our full <Link href="/games/two-player" className="text-neon-pink hover:underline">two-player drinking games collection</Link> or explore <Link href="/games/no-props" className="text-neon-pink hover:underline">games that need no props</Link>.</p>
      </GuideLayout>
    </>
  );
}
