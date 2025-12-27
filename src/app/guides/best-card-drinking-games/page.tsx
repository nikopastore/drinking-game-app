import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Card Drinking Games (2025) | Games with a Deck of Cards",
  description: "The best drinking games you can play with just a deck of cards! From Kings Cup to Ride the Bus, complete rules and strategies for every card game classic.",
  keywords: [
    "card drinking games",
    "drinking games with cards",
    "deck of cards drinking games",
    "best card games for drinking",
    "poker drinking games",
    "kings cup",
    "ride the bus",
    "beeramid",
    "irish poker",
    "drinking card games for 2",
  ],
  openGraph: {
    title: "15 Best Card Drinking Games",
    description: "All you need is a deck of cards.",
    type: "article",
    url: "https://sipwiki.app/guides/best-card-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/best-card-drinking-games",
  },
};

const gamesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Best Card Drinking Games",
  "description": "The definitive list of drinking games you can play with a standard deck of cards",
  "numberOfItems": 15,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Kings Cup", "description": "The classic circle game - each card rank has a rule" },
    { "@type": "ListItem", "position": 2, "name": "Ride the Bus", "description": "Guess card properties, loser rides the brutal bus" },
    { "@type": "ListItem", "position": 3, "name": "Beeramid", "description": "Pyramid bluffing game with escalating stakes" },
    { "@type": "ListItem", "position": 4, "name": "Fuck the Dealer", "description": "Guess the card value or drink the difference" },
    { "@type": "ListItem", "position": 5, "name": "Irish Poker", "description": "Four rounds of card guessing" },
    { "@type": "ListItem", "position": 6, "name": "Horse Race", "description": "Bet on suits racing to the finish" },
    { "@type": "ListItem", "position": 7, "name": "Higher or Lower", "description": "Simple but effective guessing game" },
    { "@type": "ListItem", "position": 8, "name": "Across the Bridge", "description": "Cross the card bridge without hitting face cards" },
    { "@type": "ListItem", "position": 9, "name": "President/Asshole", "description": "Social hierarchy card shedding game" },
    { "@type": "ListItem", "position": 10, "name": "Around the World", "description": "Guess all four card properties to win" },
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best card drinking game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kings Cup (also called Circle of Death or Ring of Fire) is widely considered the best card drinking game. Each card rank triggers a specific rule - waterfall, make a rule, thumb master, etc. The game combines multiple mini-games, works for 4-10 players, and creates memorable moments."
      }
    },
    {
      "@type": "Question",
      "name": "What drinking games can you play with a deck of cards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Popular card drinking games include: Kings Cup (circle game with rules for each rank), Ride the Bus (guessing game with brutal finale), Beeramid (bluffing pyramid), Fuck the Dealer (guess the value), Irish Poker (red/black guessing), Horse Race (betting on suits), Higher or Lower, and President/Asshole. A standard 52-card deck works for all of these."
      }
    },
    {
      "@type": "Question",
      "name": "What are the rules for Kings Cup drinking game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spread cards in a circle around a center cup. Draw cards clockwise. Each rank has a rule: Ace=Waterfall, 2=You (give 2 drinks), 3=Me (drink 3), 4=Floor (touch floor, last drinks), 5=Guys drink, 6=Chicks drink, 7=Heaven (point up), 8=Mate, 9=Rhyme, 10=Categories, Jack=Rule, Queen=Question Master, King=Pour into center cup (4th King drinks it)."
      }
    },
    {
      "@type": "Question",
      "name": "How many people do you need for card drinking games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most card drinking games work best with 4-8 players. Kings Cup works for 4-10, Ride the Bus is ideal for 4-8, and Beeramid works great with 4-6. Some games like Higher or Lower work with just 2 people, making card games versatile for any group size."
      }
    }
  ]
};

export default function BestCardDrinkingGamesPage() {
  const games = [
    {
      name: "Kings Cup",
      category: "Circle Game",
      description: "The definitive card drinking game. Each card rank triggers a rule. 4th King drinks the cup.",
      link: "/game/kings-cup",
      players: "4-10",
      intensity: "Medium"
    },
    {
      name: "Ride the Bus",
      category: "Guessing",
      description: "Four rounds of guessing, then the loser 'rides the bus' through a brutal gauntlet.",
      link: "/game/ride-the-bus",
      players: "4-8",
      intensity: "High"
    },
    {
      name: "Beeramid",
      category: "Bluffing",
      description: "Pyramid of face-down cards. Match or bluff - get called out and drink double.",
      link: "/game/beeramid",
      players: "4-8",
      intensity: "High"
    },
    {
      name: "Fuck the Dealer",
      category: "Guessing",
      description: "Guess the card value. Wrong = drink the difference. Being dealer sucks.",
      link: "/game/fuck-the-dealer",
      players: "4-8",
      intensity: "Medium"
    },
    {
      name: "Irish Poker",
      category: "Guessing",
      description: "Red/black, higher/lower, inside/outside, suit. Four rounds of guessing.",
      link: "/game/irish-poker",
      players: "4-6",
      intensity: "Medium"
    },
    {
      name: "Horse Race",
      category: "Betting",
      description: "Four Aces race. Bet drinks on your suit. Watch the race unfold.",
      link: "/game/horse-race",
      players: "4+",
      intensity: "Medium"
    },
    {
      name: "Higher or Lower",
      category: "Guessing",
      description: "The simplest game. Guess if the next card is higher or lower.",
      link: null,
      players: "2+",
      intensity: "Low"
    },
    {
      name: "Across the Bridge",
      category: "Solo Challenge",
      description: "Cross the 10-card bridge. Face cards add more cards. Can you escape?",
      link: "/guides/across-the-bridge-rules",
      players: "Any",
      intensity: "Medium"
    },
    {
      name: "President / Asshole",
      category: "Social",
      description: "Card shedding with social hierarchy. President rules, Asshole serves.",
      link: null,
      players: "4-8",
      intensity: "Medium"
    },
    {
      name: "Around the World",
      category: "Solo Challenge",
      description: "Guess all four properties correctly to make it around the world.",
      link: null,
      players: "Any",
      intensity: "Low"
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
        title="15 Best Card Drinking Games"
        description="A standard deck of cards is the ultimate drinking game toolkit - portable, cheap, and capable of endless game variations. Here's your complete guide to mastering card-based drinking games."
        breadcrumb="Card Drinking Games"
        relatedGames={[
          { name: "Kings Cup", slug: "kings-cup", description: "The classic" },
          { name: "Ride the Bus", slug: "ride-the-bus", description: "Guessing game" },
          { name: "Beeramid", slug: "beeramid", description: "Bluffing pyramid" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games with cards?"
          answer="Top card drinking games: (1) Kings Cup - card circle game where each rank has a rule, 4th King drinks the center cup, (2) Ride the Bus - guess card properties through 4 rounds, loser 'rides the bus', (3) Beeramid - pyramid bluffing game, (4) Fuck the Dealer - guess the card value, (5) Irish Poker - red/black guessing game. All you need is a standard 52-card deck. Kings Cup is most popular for groups of 4-10. Ride the Bus works best for 4-8 players."
          tips={[
            "Waterproof plastic cards last longer for drinking games",
            "Kings Cup is the most popular card game",
            "Learn 3-4 games and you're set for any party",
            "Cards are portable - fits in any pocket"
          ]}
          variant="primary"
        />

        <h2>Why a Deck of Cards Is All You Need</h2>
        <p>Cards have been the backbone of drinking games for centuries, and for good reason:</p>
        <ul>
          <li><strong>Portability</strong> - Fits in any pocket, bag, or jacket</li>
          <li><strong>Cost</strong> - $3 for endless entertainment</li>
          <li><strong>Versatility</strong> - One deck, dozens of different games</li>
          <li><strong>Built-in randomness</strong> - Shuffling creates unpredictable gameplay</li>
          <li><strong>Universal</strong> - Everyone knows basic card mechanics</li>
        </ul>

        <h2>All Card Drinking Games</h2>

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
                        <span className="text-xs px-2 py-1 bg-dark-700 rounded-full text-gray-400">{game.players} players</span>
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

        <h2>The Essential Games (Master These First)</h2>

        <h3>Kings Cup (Circle of Death)</h3>
        <p>The definitive card drinking game. Cards spread in a circle around a center cup. Each card rank triggers a specific rule or action. Draw a King = pour into the King&apos;s Cup. Draw the fourth King = drink the King&apos;s Cup.</p>
        <p><strong>Why it works:</strong> Combines memory, social interaction, and mini-games into one. Every card creates action. Never boring.</p>
        <p><strong>Best for:</strong> 4-10 players, medium energy, 30-60 minutes</p>
        <p><Link href="/game/kings-cup" className="text-neon-pink">Full Kings Cup rules →</Link></p>

        <h3>Ride the Bus</h3>
        <p>Four rounds of guessing card properties (red/black, higher/lower, inside/outside, suit). Build a pyramid. Whoever has the most cards at the end &quot;rides the bus&quot; - a brutal final round of consecutive correct guesses.</p>
        <p><strong>Why it works:</strong> The tension builds throughout. The bus ride ending creates dramatic moments. Skill matters but luck can save you.</p>
        <p><strong>Best for:</strong> 4-8 players, medium-high energy, 20-40 minutes</p>
        <p><Link href="/game/ride-the-bus" className="text-neon-pink">Full Ride the Bus rules →</Link></p>

        <h3>Beeramid</h3>
        <p>Build a pyramid of face-down cards. Players get dealt hands. Flip pyramid cards one by one - if you have a matching card (or claim to), assign drinks. But you can bluff, and if called out, YOU drink double.</p>
        <p><strong>Why it works:</strong> Bluffing adds psychology. Do they have it or not? The stakes increase as you climb the pyramid.</p>
        <p><strong>Best for:</strong> 4-8 players, high energy, 20-30 minutes</p>
        <p><Link href="/game/beeramid" className="text-neon-pink">Full Beeramid rules →</Link></p>

        <h2>Guessing Games</h2>
        <p>These games test your intuition (and luck):</p>

        <h3>Fuck the Dealer</h3>
        <p>Guess the card value. Wrong = drink the difference. Dealer must give away card if guessed within 3. Three wrong guesses in a row = next person becomes dealer. Being the dealer sucks (hence the name).</p>
        <p><strong>Pro tip:</strong> Count cards to narrow down possibilities. Later rounds become more predictable.</p>
        <p><Link href="/game/fuck-the-dealer" className="text-neon-pink">Full Fuck the Dealer rules →</Link></p>

        <h3>Irish Poker</h3>
        <p>Four face-down cards per player. Guess: red/black, higher/lower, inside/outside, suit. Wrong = drink. Then a give phase where you assign drinks to others. Simple but effective.</p>
        <p><strong>Best for:</strong> Quick rounds, 4-6 players</p>
        <p><Link href="/game/irish-poker" className="text-neon-pink">Full Irish Poker rules →</Link></p>

        <h3>Higher or Lower</h3>
        <p>The simplest card drinking game. Flip a card. Guess if the next is higher or lower. Wrong = drink. Chain correct guesses for bonus points or dare privileges.</p>
        <p><strong>Best for:</strong> Beginners, couples, casual settings</p>

        <h2>Betting & Racing Games</h2>

        <h3>Horse Race</h3>
        <p>Four Aces are &quot;horses&quot; lined up. Players bet drinks on a suit. Flip cards from the deck - that suit&apos;s horse moves forward. First to cross the finish line wins. Losers drink their bets, winner assigns drinks.</p>
        <p><strong>Why it works:</strong> Creates spectator excitement. Everyone watches the same race. Betting adds investment.</p>
        <p><Link href="/game/horse-race" className="text-neon-pink">Full Horse Race rules →</Link></p>

        <h3>Across the Bridge</h3>
        <p>Ten cards laid out as a bridge. Flip cards one by one. Number card = safe, move forward. Face card = drink and add replacement cards. Must cross the entire bridge to win.</p>
        <p><strong>Why it works:</strong> The bridge can extend indefinitely. Some unlucky players get trapped.</p>
        <p><Link href="/guides/across-the-bridge-rules" className="text-neon-pink">Full Across the Bridge rules →</Link></p>

        <h2>Social Card Games</h2>

        <h3>Around the World</h3>
        <p>Four cards face down. Guess properties sequentially. Get all four right = &quot;make it around the world&quot; and assign 4 drinks. Get any wrong = drink and start over.</p>

        <h3>President (Asshole)</h3>
        <p>Shedding game where card rank determines who drinks. President makes rules, Asshole does grunt work. Social hierarchy creates drama and trash talk. A party favorite that can go for hours.</p>

        <h2>Quick Reference: Games by Situation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">By Group Size</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• <strong>2 players:</strong> Higher/Lower</li>
              <li>• <strong>3-4 players:</strong> Irish Poker, Ride the Bus</li>
              <li>• <strong>4-8 players:</strong> Most games work</li>
              <li>• <strong>8+ players:</strong> Kings Cup, Horse Race, President</li>
            </ul>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">By Vibe</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• <strong>First time:</strong> Kings Cup, Higher/Lower</li>
              <li>• <strong>Strategy:</strong> Beeramid, Fuck the Dealer</li>
              <li>• <strong>High intensity:</strong> Ride the Bus, Beeramid</li>
              <li>• <strong>Chill:</strong> Higher/Lower, Around the World</li>
            </ul>
          </div>
        </div>

        <h2>Card Game Hosting Tips</h2>
        <ul>
          <li><strong>Use plastic-coated cards</strong> - They survive spills better</li>
          <li><strong>Have 2 decks</strong> - One for play, one as backup</li>
          <li><strong>Agree on rules first</strong> - House rules vary wildly</li>
          <li><strong>Rotate dealers/starters</strong> - Some games disadvantage specific positions</li>
          <li><strong>Keep drinks off the play surface</strong> - Soggy cards end games early</li>
        </ul>

        <h2>Card Care Tips</h2>
        <ul>
          <li>Wipe down cards between games</li>
          <li>Store in a dry place</li>
          <li>Replace marked or bent cards</li>
          <li>Consider a dedicated &quot;drinking game deck&quot; separate from your nice cards</li>
        </ul>

        <h2>FAQ</h2>

        <div className="space-y-4 my-6">
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">What if we only have 2 people?</h4>
            <p className="text-gray-400">Higher or Lower is perfect for 2. You can also adapt Kings Cup by alternating draws or play Irish Poker head-to-head.</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">Best game for people who don&apos;t know each other?</h4>
            <p className="text-gray-400">Kings Cup is ideal - the rules are simple, everyone's involved, and the social cards (like Question Master) encourage interaction.</p>
          </div>
          <div className="p-4 bg-dark-800 rounded-lg border border-dark-600">
            <h4 className="font-bold text-white mb-2">How do we pick which game to play?</h4>
            <p className="text-gray-400">Start with Kings Cup if anyone's new. Move to higher-intensity games (Beeramid, Ride the Bus) once everyone's warmed up.</p>
          </div>
        </div>

        <p>Browse all <Link href="/games/card-games" className="text-neon-pink hover:underline">card drinking games</Link> or find games by <Link href="/games" className="text-neon-pink hover:underline">category</Link>.</p>
      </GuideLayout>
    </>
  );
}
