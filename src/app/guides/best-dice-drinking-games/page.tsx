import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Best Dice Drinking Games (2025) | Games with Dice",
  description: "The best drinking games that use dice! From Three Man to 7-11 Doubles, complete rules for every dice game classic. Easy to learn, fun to play.",
  keywords: [
    "dice drinking games",
    "drinking games with dice",
    "three man drinking game",
    "7 11 doubles",
    "dice games for adults",
    "bar dice games",
    "beer dice rules",
    "drinking dice games 2 players",
  ],
  openGraph: {
    title: "10 Best Dice Drinking Games",
    description: "Roll the dice, drink the drinks.",
    type: "article",
    url: "https://sipwiki.app/guides/best-dice-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/best-dice-drinking-games",
  },
};

const gamesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Dice Drinking Games",
  "description": "The top drinking games you can play with dice",
  "numberOfItems": 10,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Three Man", "description": "Classic dice game where rolling a 3 makes Three Man drink" },
    { "@type": "ListItem", "position": 2, "name": "7-11 Doubles", "description": "Fast-paced race to roll winning combinations" },
    { "@type": "ListItem", "position": 3, "name": "Beer Die", "description": "Outdoor game - throw dice at a table, catch or drink" },
    { "@type": "ListItem", "position": 4, "name": "Chō-Han", "description": "Japanese betting game - odd or even" },
    { "@type": "ListItem", "position": 5, "name": "Mexican", "description": "Bluffing dice game with escalating claims" },
    { "@type": "ListItem", "position": 6, "name": "Ship Captain Crew", "description": "Roll the right sequence to win" },
    { "@type": "ListItem", "position": 7, "name": "Liar's Dice", "description": "Bluffing under cups with escalating bids" },
    { "@type": "ListItem", "position": 8, "name": "Dice Duel", "description": "Head-to-head highest roll competition" },
    { "@type": "ListItem", "position": 9, "name": "Bunco", "description": "Group dice game with rotating tables" },
    { "@type": "ListItem", "position": 10, "name": "Farkle", "description": "Push-your-luck scoring game" },
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best dice drinking game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three Man is the most popular dice drinking game. Two dice are rolled, and specific combinations trigger drinking rules - rolling a 3 makes the 'Three Man' drink, 7 means the person to your left drinks, 11 means the person to your right drinks, and doubles let you give out drinks."
      }
    },
    {
      "@type": "Question",
      "name": "What are the rules for 7-11 Doubles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In 7-11 Doubles, one person fills a cup and another starts rolling. The drinker must finish before the roller gets a 7, 11, or doubles. If the roller wins, the drinker fills the cup again and continues. If the drinker finishes first, the dice pass left. It's a fast-paced race game."
      }
    },
    {
      "@type": "Question",
      "name": "How do you play drinking games with dice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most dice drinking games assign drinking rules to specific roll results. For example, in Three Man: 3=Three Man drinks, 7=left drinks, 11=right drinks, doubles=give out drinks. Games like 7-11 Doubles are races against the dice. All you need is 2 standard six-sided dice."
      }
    },
    {
      "@type": "Question",
      "name": "What dice games can 2 people play?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Good 2-player dice drinking games include: Mexican (bluffing game), Liar's Dice (bidding and bluffing), Beer Die (outdoor throwing game), and simple High Roll (higher roll wins, loser drinks). Three Man works with 2 but is better with more."
      }
    }
  ]
};

export default function BestDiceDrinkingGamesPage() {
  const quickAnswerTips = [
    "Only need 2 standard dice for most games",
    "Three Man is the most popular dice game",
    "Dice games are pure luck - no skill advantage",
    "Fast rounds keep everyone engaged"
  ];

  const games = [
    {
      name: "Three Man",
      category: "Classic",
      description: "Roll to become Three Man. Every 3 = Three Man drinks. 7/11/doubles have special rules.",
      link: "/game/three-man",
      players: "3+",
      intensity: "Medium"
    },
    {
      name: "7-11 Doubles",
      category: "Racing",
      description: "Race to finish your drink before the roller gets 7, 11, or doubles. Pure chaos.",
      link: "/game/7-11-doubles",
      players: "4+",
      intensity: "High"
    },
    {
      name: "Beer Die",
      category: "Outdoor",
      description: "Throw dice at a table. If it lands on 5, opponent drinks. If they catch it, you drink.",
      link: null,
      players: "4 (2v2)",
      intensity: "High"
    },
    {
      name: "Mexican",
      category: "Bluffing",
      description: "Roll under a cup, claim any value. Next player must beat it or call your bluff.",
      link: null,
      players: "3+",
      intensity: "Medium"
    },
    {
      name: "Chō-Han",
      category: "Betting",
      description: "Japanese game. Bet on odd or even before the reveal. Simple but addictive.",
      link: null,
      players: "2+",
      intensity: "Low"
    },
    {
      name: "Ship Captain Crew",
      category: "Sequence",
      description: "Roll 6-5-4 in order. Remaining dice = your cargo score. Lowest score drinks.",
      link: null,
      players: "2+",
      intensity: "Medium"
    },
    {
      name: "Liar's Dice",
      category: "Bluffing",
      description: "Hidden dice under cups. Bid on total dice showing a face. Get caught lying = drink.",
      link: null,
      players: "2+",
      intensity: "Medium"
    },
    {
      name: "Dice Duel",
      category: "Simple",
      description: "Roll two dice. Highest total wins. Loser drinks. Ties = both drink.",
      link: null,
      players: "2+",
      intensity: "Low"
    },
    {
      name: "Bunco",
      category: "Party",
      description: "Rotating table game. Roll matching numbers to score. Losers drink, winners rotate.",
      link: null,
      players: "12 (ideal)",
      intensity: "Medium"
    },
    {
      name: "Farkle",
      category: "Push Luck",
      description: "Keep rolling for points or stop. Push too far and lose everything = drink.",
      link: null,
      players: "2+",
      intensity: "Medium"
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
        title="10 Best Dice Drinking Games"
        description="Dice add perfect randomness to drinking games. A quick roll determines your fate - no skill required, just luck. These are the best dice games for parties, from classic Three Man to intense 7-11 Doubles."
        breadcrumb="Dice Drinking Games"
        relatedGames={[
          { name: "Three Man", slug: "three-man", description: "Classic dice game" },
          { name: "7-11 Doubles", slug: "7-11-doubles", description: "Fast-paced racing" },
        ]}
      >
        <QuickAnswer
          question="What are the best dice drinking games?"
          answer="The best dice drinking games are: (1) Three Man - roll to become the Three Man who drinks on every 3, 7=left drinks, 11=right drinks, (2) 7-11 Doubles - race to finish your drink before a 7/11/doubles is rolled, (3) Beer Die - outdoor throwing game, (4) Mexican - bluffing dice game, (5) Liar's Dice - hidden dice bidding. All you need is 2 standard six-sided dice for most games."
          tips={quickAnswerTips}
          variant="primary"
        />

        <h2>Why Dice Games Work</h2>
        <p>Dice are the perfect drinking game tool:</p>
        <ul>
          <li><strong>Pure luck</strong> - No skill advantage, everyone's equal</li>
          <li><strong>Fast rounds</strong> - Quick rolls keep the action moving</li>
          <li><strong>Portable</strong> - Two dice fit anywhere</li>
          <li><strong>Simple</strong> - Everyone understands rolling dice</li>
          <li><strong>Dramatic</strong> - The roll creates natural suspense</li>
        </ul>

        <h2>All Dice Drinking Games</h2>

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
                        <span className="text-xs px-2 py-1 bg-dark-700 rounded-full text-gray-400">{game.players}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          game.intensity === 'Low' ? 'bg-green-500/20 text-green-400' :
                          game.intensity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {game.intensity}
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
                      Rules →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2>Three Man - Complete Rules</h2>
        <p>The most popular dice drinking game. Here&apos;s how to play:</p>

        <h3>Setup</h3>
        <ul>
          <li>Everyone sits in a circle with drinks</li>
          <li>Roll one die each - lowest roll is the first Three Man</li>
          <li>Two dice are used for the game</li>
        </ul>

        <h3>The Rules</h3>
        <div className="p-4 bg-dark-800 rounded-lg border border-dark-600 my-4">
          <ul className="text-gray-300 space-y-2">
            <li><strong>Roll a 3:</strong> Three Man drinks</li>
            <li><strong>Roll a 7:</strong> Person to your left drinks</li>
            <li><strong>Roll an 11:</strong> Person to your right drinks</li>
            <li><strong>Roll doubles:</strong> Give that many drinks (double 4s = give 4 drinks)</li>
            <li><strong>Roll 7 + 3 (two dice):</strong> Three Man drinks AND left drinks</li>
            <li><strong>Roll 1 + 1 (snake eyes):</strong> Everyone drinks</li>
            <li><strong>Roll 4 + 1 (5):</strong> Social - everyone drinks</li>
          </ul>
        </div>

        <h3>Escaping Three Man</h3>
        <p>The Three Man stays Three Man until they roll doubles or a 3 themselves. When they do, they pick the next Three Man. Being Three Man can get brutal if you're unlucky.</p>

        <h2>7-11 Doubles - Complete Rules</h2>
        <p>The most intense dice drinking game. It&apos;s a race:</p>

        <h3>Setup</h3>
        <ul>
          <li>One person is the Roller, one is the Drinker</li>
          <li>A cup is filled with beer in the center</li>
          <li>Two dice for rolling</li>
        </ul>

        <h3>How It Works</h3>
        <ol>
          <li>Roller fills the center cup and points at someone (the Drinker)</li>
          <li>Once the Drinker touches the cup, the Roller starts rolling</li>
          <li>Drinker must finish the cup before Roller gets 7, 11, or doubles</li>
          <li>If Roller wins: cup refilled, Drinker continues</li>
          <li>If Drinker wins: dice pass left, new Roller fills and picks</li>
        </ol>

        <h3>Pro Tips</h3>
        <ul>
          <li>Don't touch the cup until you're ready to chug</li>
          <li>Fill cups strategically - too full makes it impossible</li>
          <li>Roll fast - no pausing to aim</li>
          <li>Rollers can target someone for multiple rounds</li>
        </ul>

        <h2>Beer Die (Snappa)</h2>
        <p>An outdoor dice game that's become a college staple:</p>

        <h3>Setup</h3>
        <ul>
          <li>4 players, teams of 2</li>
          <li>Standard 4x8 foot table (plywood works)</li>
          <li>Beer in each corner, one die</li>
        </ul>

        <h3>Basic Rules</h3>
        <ul>
          <li>Underhand toss the die to land on opponent's half</li>
          <li>Die must peak above head height</li>
          <li>Land on 5 = opponents drink</li>
          <li>Catch the die before it hits ground = thrower drinks</li>
          <li>Die lands in cup = instant win</li>
          <li>First to 7 points wins (must win by 2)</li>
        </ul>

        <h2>Mexican (Liar's Dice Light)</h2>
        <p>A bluffing game with two dice:</p>

        <h3>How It Works</h3>
        <ul>
          <li>Roll two dice under a cup, peek secretly</li>
          <li>Announce your roll (can lie)</li>
          <li>Values: 21 (Mexican) is highest, then 66, 55, 44, 33, 22, 11, then 65, 64, etc.</li>
          <li>Next player must beat your claim or call you a liar</li>
          <li>Liar caught = liar drinks</li>
          <li>False accusation = accuser drinks</li>
        </ul>

        <h2>Quick Games for 2 Players</h2>
        <p>Dice games that work great with just two people:</p>

        <h3>High Roll</h3>
        <p>Each player rolls two dice. Highest total wins. Loser drinks. Ties = both drink. Simple, fast, brutal.</p>

        <h3>Under/Over 7</h3>
        <p>One player rolls. Other guesses: under 7, exactly 7, or over 7. Exactly 7 = roller drinks double. Right guess = roller drinks. Wrong guess = guesser drinks.</p>

        <h3>Dice Duel</h3>
        <p>Best of 3 rolls. Higher total each round wins that round. Overall loser finishes their drink.</p>

        <h2>Dice Game Equipment</h2>
        <p>What you need:</p>
        <ul>
          <li><strong>Two standard dice</strong> - Any size works, larger are easier to read</li>
          <li><strong>A cup (for Mexican)</strong> - Opaque to hide dice</li>
          <li><strong>Flat surface</strong> - Dice need to land fair</li>
          <li><strong>Optional: dice tray</strong> - Keeps dice from flying everywhere</li>
        </ul>

        <h2>Games by Situation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">By Group Size</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• <strong>2 players:</strong> Mexican, Dice Duel, Under/Over</li>
              <li>• <strong>3-4 players:</strong> Three Man, Liar's Dice</li>
              <li>• <strong>5+ players:</strong> 7-11 Doubles, Three Man</li>
              <li>• <strong>Large groups:</strong> Bunco, 7-11 Doubles</li>
            </ul>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">By Vibe</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• <strong>Chill:</strong> Chō-Han, Dice Duel</li>
              <li>• <strong>Competitive:</strong> Beer Die, Farkle</li>
              <li>• <strong>Chaotic:</strong> 7-11 Doubles</li>
              <li>• <strong>Strategic:</strong> Mexican, Liar's Dice</li>
            </ul>
          </div>
        </div>

        <h2>FAQ</h2>

        <div className="space-y-4 my-6">
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">What if dice keep falling off the table?</h4>
            <p className="text-gray-400">Use a dice tray, box lid, or roll onto a soft surface. Some groups rule that off-table = automatic drink.</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">Do we need special dice?</h4>
            <p className="text-gray-400">Nope - any standard six-sided dice work. Board game dice, casino dice, whatever you have. Larger dice are easier to read after a few drinks.</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">Can we combine dice and card games?</h4>
            <p className="text-gray-400">Absolutely. Use dice rolls for punishment intensity (roll to determine sips), or add dice mini-games within card games like Kings Cup.</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">Best dice game for beginners?</h4>
            <p className="text-gray-400">Three Man is the classic for a reason - rules are simple, everyone participates, and being Three Man is memorable. Start there.</p>
          </div>
        </div>

        <p>See all <Link href="/games/dice-games" className="text-neon-pink hover:underline">dice games</Link> or check out <Link href="/guides/best-card-drinking-games" className="text-neon-pink hover:underline">card drinking games</Link>!</p>
      </GuideLayout>
    </>
  );
}
