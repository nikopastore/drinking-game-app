import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "20 Best Drinking Games Without Cards or Props (2024) | No Equipment Needed",
  description: "The ultimate list of drinking games that need no cards, no props, nothing but drinks and friends. Perfect for parties when you don't have supplies. Play instantly!",
  keywords: [
    "drinking games without cards",
    "drinking games no cards",
    "no prop drinking games",
    "drinking games without props",
    "easy drinking games no cards",
    "drinking games without equipment",
    "drinking games no supplies",
    "simple drinking games",
    "verbal drinking games",
    "drinking games just with drinks",
    "party games without cards",
    "drinking games nothing needed",
    "most likely to drinking game",
    "never have i ever",
  ],
  openGraph: {
    title: "20 Best Drinking Games Without Cards or Props",
    description: "No cards? No dice? No problem! These drinking games need nothing but drinks and friends.",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-without-cards",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drinking Games Without Cards or Props",
    description: "Play instantly with no equipment needed. Perfect for any party!",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-without-cards",
  },
};

export default function DrinkingGamesWithoutCardsPage() {
  const games = [
    {
      name: "Never Have I Ever",
      players: "3+",
      description: "Players take turns saying things they've never done. Anyone who has done it drinks. Great for learning surprising things about friends.",
      rules: "Hold up 5-10 fingers. Say 'Never have I ever [done something].' If you've done it, drink and lower a finger. First to lose all fingers = loser.",
      link: "/game/never-have-i-ever",
    },
    {
      name: "Most Likely To",
      players: "4+",
      description: "Vote on who in the group is most likely to do something. The person with the most votes drinks.",
      rules: "One person asks 'Who is most likely to [do something]?' On the count of 3, everyone points at someone. You drink once for each finger pointed at you.",
      link: "/game/most-likely-to",
    },
    {
      name: "Truth or Drink",
      players: "2+",
      description: "Answer a question truthfully or take a drink instead. Gets conversations going fast.",
      rules: "Take turns asking each other questions. You can answer honestly or drink to skip. Questions usually get more personal as the game goes on.",
      link: "/game/truth-or-drink",
    },
    {
      name: "Cheers to the Governor",
      players: "4+",
      description: "Count to 21 as a group, but numbers get replaced with silly rules. Hilariously chaotic.",
      rules: "Count around the circle. Say 'Cheers to the Governor' at 21. That person makes a new rule (e.g., 'bark instead of saying 5'). Mess up = drink.",
      link: "/game/cheers-to-the-governor",
    },
    {
      name: "Medusa",
      players: "4+",
      description: "Look at the floor, then up on command. If you make eye contact with someone, race to shout their name!",
      rules: "Everyone looks down. Someone says '3, 2, 1, look up!' Lock eyes with someone? Both race to shout the other's name. Loser drinks.",
      link: "/game/medusa",
    },
    {
      name: "Paranoia",
      players: "4+",
      description: "Whisper questions about the group. The answer is always a person's name.",
      rules: "Whisper a question to your neighbor (e.g., 'Who's the worst texter?'). They say a name out loud. That person can drink to hear the question, or leave it a mystery.",
      link: null,
    },
    {
      name: "Fingers",
      players: "4+",
      description: "Predict how many people will keep their finger on the cup.",
      rules: "Everyone puts a finger on a cup. Count down, then shout a number while choosing to lift or stay. Guess correctly how many fingers remain = you're out. Last one drinks the cup.",
      link: null,
    },
    {
      name: "21 Questions Drinking Game",
      players: "3+",
      description: "Guess what someone's thinking of. Wrong guesses = drinks.",
      rules: "One person thinks of something. Others ask yes/no questions. Wrong final guesses drink. Get it right = the thinker drinks.",
      link: null,
    },
    {
      name: "I'm Going to the Bar",
      players: "3+",
      description: "Memory game where you build a shopping list. Forget something? Drink.",
      rules: "First person: 'I'm going to the bar and getting a beer.' Next person repeats and adds an item. Mess up the order = drink.",
      link: null,
    },
    {
      name: "Word Association",
      players: "3+",
      description: "Say a related word without hesitating. Fast and frantic.",
      rules: "Start with any word. Next person immediately says a related word. Hesitate, repeat, or say something unrelated = drink.",
      link: null,
    },
    {
      name: "Categories",
      players: "3+",
      description: "Name items in a category without repeating or hesitating.",
      rules: "One person picks a category (e.g., beer brands). Go around naming items. Repeat something, hesitate, or say something invalid = drink.",
      link: null,
    },
    {
      name: "Would You Rather",
      players: "2+",
      description: "Choose between two options. Refuse to answer? Drink.",
      rules: "Ask 'Would you rather [option A] or [option B]?' Everyone chooses. Minority drinks. Or, refuse to choose and drink instead.",
      link: null,
    },
    {
      name: "Roxanne",
      players: "2+",
      description: "Drink every time you hear 'Roxanne' in the song. Devastatingly simple.",
      rules: "Play 'Roxanne' by The Police. Team 1 drinks on 'Roxanne.' Team 2 drinks on 'red light.' Prepare for chaos.",
      link: "/game/roxanne",
    },
    {
      name: "Thunderstruck",
      players: "4+",
      description: "Drink while 'Thunder' plays in AC/DC's song. Don't stop until the next 'Thunder.'",
      rules: "Play 'Thunderstruck.' First person starts drinking at the first 'Thunder.' They stop at the next 'Thunder' and the next person goes.",
      link: "/game/thunderstruck",
    },
    {
      name: "Buffalo",
      players: "Any",
      description: "Drink with your non-dominant hand all night. Get caught = chug.",
      rules: "Announce you're playing Buffalo. If anyone sees you drinking with your dominant hand and calls 'Buffalo!' you chug your drink.",
      link: "/game/buffalo",
    },
    {
      name: "Two Truths and a Lie",
      players: "2+",
      description: "Tell three statements. Others guess which is false.",
      rules: "Say 2 true things and 1 lie about yourself. Others guess the lie. Guess right = you drink. Guess wrong = they drink.",
      link: null,
    },
    {
      name: "Bite the Bag",
      players: "3+",
      description: "Pick up a bag with your mouth. Miss it? Drink. Bag gets shorter each round.",
      rules: "Put a paper bag on the floor. Take turns picking it up with your mouth (no hands!). Each round, cut an inch off the bag. Fail = drink.",
      link: "/game/bite-the-bag",
    },
    {
      name: "Name Game",
      players: "3+",
      description: "Name celebrities. Next name starts with the previous last name's first letter.",
      rules: "'Tom Hanks' → 'Harrison Ford' → 'Fred Astaire'... Hesitate or repeat = drink. Same letter first and last name reverses direction.",
      link: null,
    },
    {
      name: "Drink While You Think",
      players: "3+",
      description: "Like the Name Game, but you drink the entire time you're thinking.",
      rules: "Say a celebrity name. The next person must drink continuously while thinking of a name starting with that person's last initial.",
      link: null,
    },
    {
      name: "Picolo (App)",
      players: "2+",
      description: "While technically an app, it needs no physical props and runs the game for you.",
      rules: "Download Picolo. Enter player names. Follow the prompts on screen. The app tells you what to do!",
      link: null,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Drinking Games Without Cards or Props",
    "description": "Comprehensive list of drinking games that require no cards, dice, or equipment - just drinks and friends.",
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
        "name": "What are the best drinking games without cards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best drinking games without cards include Never Have I Ever, Most Likely To, Truth or Drink, Cheers to the Governor, and Medusa. These games only require drinks and friends - no equipment needed!"
        }
      },
      {
        "@type": "Question",
        "name": "What drinking games can you play with just drinks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can play Never Have I Ever, Most Likely To, Truth or Drink, Word Association, Categories, Would You Rather, and many more. These verbal games need nothing but drinks and people."
        }
      },
      {
        "@type": "Question",
        "name": "What is the easiest drinking game to play?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The easiest drinking games are Never Have I Ever, Would You Rather, and Most Likely To. They have simple rules everyone understands immediately and require no setup."
        }
      },
      {
        "@type": "Question",
        "name": "What drinking games work for large groups without props?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most Likely To, Cheers to the Governor, Medusa, and Never Have I Ever all work great for large groups with no equipment. They scale well from 4 to 15+ people."
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
        title="20 Best Drinking Games Without Cards or Props"
        description="No cards? No dice? No beer pong table? No problem! These drinking games require absolutely nothing except drinks and friends. Perfect for spontaneous parties, traveling, or when you just don't have supplies."
        breadcrumb="Drinking Games Without Cards"
        relatedGames={[
          { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Classic verbal drinking game" },
          { name: "Most Likely To", slug: "most-likely-to", description: "Vote on who's most likely" },
          { name: "Cheers to the Governor", slug: "cheers-to-the-governor", description: "Count to 21 with rules" },
        ]}
      >
        <h2>Why No-Prop Drinking Games Are the Best</h2>
        <p>Sometimes the best parties are unplanned. These games are perfect because:</p>
        <ul>
          <li><strong>Zero setup</strong> - Start playing in seconds</li>
          <li><strong>Work anywhere</strong> - Bar, house, camping, hotel room</li>
          <li><strong>Nothing to forget</strong> - Can&apos;t lose what you don&apos;t need</li>
          <li><strong>Everyone can play</strong> - No learning complex equipment</li>
          <li><strong>Infinitely replayable</strong> - Rules live in your head</li>
        </ul>

        <h2>The Ultimate No-Prop Drinking Games List</h2>

        <div className="not-prose my-8">
          <div className="space-y-4">
            {games.map((game, index) => (
              <div key={game.name} className="p-5 bg-dark-800 rounded-xl border border-dark-600">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-neon-pink/20 rounded-lg flex items-center justify-center text-neon-pink font-bold">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-bold text-white text-lg">{game.name}</h3>
                      <span className="text-xs px-2 py-1 bg-dark-700 rounded-full text-gray-400">{game.players} players</span>
                      {game.link && (
                        <Link href={game.link} className="text-neon-pink text-sm hover:underline">Play →</Link>
                      )}
                    </div>
                    <p className="text-gray-300 mb-2">{game.description}</p>
                    <p className="text-sm text-gray-500"><strong className="text-gray-400">How to play:</strong> {game.rules}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2>Best No-Prop Games by Category</h2>

        <h3>Best for Getting to Know People</h3>
        <ul>
          <li><strong>Never Have I Ever</strong> - Learn surprising things about your friends</li>
          <li><strong>Truth or Drink</strong> - Deep conversations guaranteed</li>
          <li><strong>Two Truths and a Lie</strong> - Figure out who&apos;s the best liar</li>
        </ul>

        <h3>Best for Large Groups</h3>
        <ul>
          <li><strong>Most Likely To</strong> - Works with 15+ people easily</li>
          <li><strong>Cheers to the Governor</strong> - Scales beautifully with more people</li>
          <li><strong>Medusa</strong> - Chaos increases with group size</li>
        </ul>

        <h3>Best for Quick Drinking</h3>
        <ul>
          <li><strong>Thunderstruck</strong> - Song dictates the drinking</li>
          <li><strong>Roxanne</strong> - Rapid-fire drink triggers</li>
          <li><strong>Word Association</strong> - Fast and frantic</li>
        </ul>

        <h3>Best for Competitive People</h3>
        <ul>
          <li><strong>Categories</strong> - Test your knowledge under pressure</li>
          <li><strong>Name Game</strong> - Celebrity knowledge showdown</li>
          <li><strong>Fingers</strong> - Strategy and guessing combined</li>
        </ul>

        <h2>How to Choose the Right Game</h2>
        <p>Consider these factors when picking a no-prop game:</p>
        <ul>
          <li><strong>Group size</strong> - Some games work better with more people</li>
          <li><strong>Energy level</strong> - Chill conversation or high-energy chaos?</li>
          <li><strong>How well people know each other</strong> - Personal questions for close friends</li>
          <li><strong>Drinking pace</strong> - Music games = fast drinking</li>
        </ul>

        <h2>Tips for No-Prop Drinking Games</h2>
        <ul>
          <li><strong>Explain rules clearly</strong> - Everyone should understand before starting</li>
          <li><strong>Adjust for your group</strong> - Skip inappropriate questions for mixed company</li>
          <li><strong>Have a backup game ready</strong> - Switch it up if energy dies</li>
          <li><strong>Pace yourselves</strong> - No-prop games can be intense since drinking is constant</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>What drinking game has the simplest rules?</h3>
        <p>Never Have I Ever and Would You Rather have the simplest rules - literally anyone can understand them in seconds. &quot;Say something, drink if it applies.&quot; That&apos;s it.</p>

        <h3>What games work when you don&apos;t know everyone?</h3>
        <p>Most Likely To and Would You Rather work great with strangers. Never Have I Ever can work too, but keep questions less personal until people warm up.</p>

        <h3>Can these games be played with non-alcoholic drinks?</h3>
        <p>Absolutely! All these games work with any beverage. The game mechanics are fun regardless of what&apos;s in your cup.</p>

        <h3>How do I get people to participate?</h3>
        <p>Start with simple, low-stakes games like Most Likely To. Once people are comfortable and having fun, you can move to more personal games like Truth or Drink.</p>

        <h2>Need More Options?</h2>
        <p>Check out our full collection of <Link href="/games/no-props" className="text-neon-pink hover:underline">no-props drinking games</Link> or browse <Link href="/games" className="text-neon-pink hover:underline">all drinking games</Link> on SipWiki.</p>
      </GuideLayout>
    </>
  );
}
