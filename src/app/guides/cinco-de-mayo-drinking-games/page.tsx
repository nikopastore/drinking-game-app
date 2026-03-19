import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cinco de Mayo Drinking Games: Fiesta Party Ideas (2025)",
  description: "Cinco de Mayo drinking games for your fiesta! Tequila games, Mexican-themed challenges, and margarita madness. Make your celebration unforgettable.",
  keywords: [
    "cinco de mayo drinking games",
    "mexican drinking games",
    "tequila games",
    "fiesta party games",
    "margarita drinking games",
    "may 5th party",
  ],
  openGraph: {
    title: "Cinco de Mayo Drinking Games",
    description: "Fiesta-ready party games.",
    type: "article",
    url: "https://sipwiki.app/guides/cinco-de-mayo-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/cinco-de-mayo-drinking-games",
  },
};

export default function CincoDeMayoDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Cinco de Mayo Drinking Games: Fiesta Edition"
      description="Turn your Cinco de Mayo celebration into an epic fiesta with these themed drinking games. From tequila challenges to mariachi music games, here's everything you need for May 5th."
      breadcrumb="Cinco de Mayo Games"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "With tequila" },
        { name: "Flip Cup", slug: "flip-cup", description: "Margarita edition" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Fiesta questions" },
      ]}
    >
      <QuickAnswer
        question="What drinking games are good for Cinco de Mayo?"
        answer="Tequila Roulette: Shots of tequila and water, guess which you got. Mexican Train Dominoes: Drink when you can't play. Limbo Drinking: Lower the bar, drink if you fail. Piñata Flip Cup: Winners get candy. Mariachi Music Game: Drink when the song changes. Salsa Challenge: Dance-off, loser drinks."
        tips={[
          "Tequila games are traditional",
          "Add lime and salt to everything",
          "Margaritas work for lighter drinking",
          "Decorate for full fiesta vibes"
        ]}
        variant="primary"
      />

      <h2>Essential Cinco de Mayo Drinks</h2>
      <ul>
        <li><strong>Tequila shots:</strong> The classic - with lime and salt</li>
        <li><strong>Margaritas:</strong> Frozen or on the rocks</li>
        <li><strong>Palomas:</strong> Tequila and grapefruit soda</li>
        <li><strong>Micheladas:</strong> Beer cocktail with lime and spices</li>
        <li><strong>Corona with lime:</strong> Beach-ready beer</li>
      </ul>

      <h2>Tequila Roulette</h2>
      <p>A Cinco de Mayo classic:</p>
      <ol>
        <li>Fill shot glasses - some with tequila, some with water</li>
        <li>Shuffle them around</li>
        <li>Everyone picks one without smelling first</li>
        <li>Drink on 3</li>
        <li>Water = you're safe. Tequila = you got the real deal</li>
        <li>Those who got water take another shot (for real this time)</li>
      </ol>

      <h2>Sombrero Spin</h2>
      <ol>
        <li>Place a sombrero in the center of the table</li>
        <li>Take turns spinning it</li>
        <li>Whoever the front points to = asks a truth or gives a dare</li>
        <li>Refuse = take a shot of tequila</li>
        <li>Complete the task = assign a shot</li>
      </ol>

      <h2>Mariachi Music Game</h2>
      <p>Put on a mariachi or Mexican music playlist:</p>
      <ul>
        <li>When the song changes = everyone drinks</li>
        <li>Trumpet solo = take a shot</li>
        <li>"Ay ay ay" sung = everyone drinks</li>
        <li>You know the words = show off and assign drinks</li>
        <li>Can name the song = assign 3 drinks</li>
      </ul>

      <h2>Cinco de Mayo Flip Cup</h2>
      <p>Classic <Link href="/games/flip-cup" className="text-neon-pink hover:underline">Flip Cup</Link> with a twist:</p>
      <ul>
        <li>Use margaritas instead of beer</li>
        <li>Winning team gets sombrero privileges</li>
        <li>Losers do a tequila shot</li>
        <li>Best of 5 - ultimate fiesta champions</li>
      </ul>

      <h2>Piñata Challenge</h2>
      <p>If you have a piñata:</p>
      <ol>
        <li>Blindfold the player</li>
        <li>They get 3 swings</li>
        <li>Miss completely = drink</li>
        <li>Hit but no candy = drink</li>
        <li>Candy falls = everyone else drinks, you get the candy</li>
      </ol>
      <p>No piñata? Do paper bag piñata - tape a bag up, same rules.</p>

      <h2>Limón (Lime) Challenge</h2>
      <p>A tequila-themed skill game:</p>
      <ol>
        <li>Balance a lime on your head</li>
        <li>Take a shot of tequila without dropping it</li>
        <li>Lime falls = take another shot</li>
        <li>Successfully balance through 3 shots = you're the Lime King/Queen</li>
      </ol>

      <h2>Guac and Roll</h2>
      <p>While making guacamole:</p>
      <ul>
        <li>Drop an ingredient = drink</li>
        <li>Taste before it's ready = drink</li>
        <li>Spill something = drink</li>
        <li>Best guac (voted) = assign 5 drinks</li>
        <li>Worst guac = finish your drink</li>
      </ul>

      <h2>Mexican Train (Dominoes Drinking)</h2>
      <p>Play Mexican Train Dominoes with drinking rules:</p>
      <ul>
        <li>Can't play on your turn = drink 1</li>
        <li>Play a double = assign 2 drinks</li>
        <li>Have to draw = drink 1</li>
        <li>Put train on someone = they drink 2</li>
        <li>Win the round = assign 5 drinks</li>
      </ul>

      <h2>Salsa Dance-Off</h2>
      <p>Clear some space and compete:</p>
      <ol>
        <li>Pairs face off dancing to Mexican music</li>
        <li>Crowd votes on winner</li>
        <li>Loser takes a shot</li>
        <li>Winner moves to next round</li>
        <li>Champion assigns shots to everyone</li>
      </ol>

      <h2>Cinco de Mayo Trivia</h2>
      <p>Test knowledge with shots as stakes:</p>
      <ul>
        <li>What does Cinco de Mayo celebrate? (Not Mexican Independence Day!)</li>
        <li>What year was the Battle of Puebla?</li>
        <li>What's in a traditional margarita?</li>
        <li>Name 3 Mexican states</li>
        <li>Who is on the 20 peso bill?</li>
      </ul>
      <p>Wrong = drink. Three right in a row = assign drinks.</p>

      <h2>Taco Eating Challenge</h2>
      <p>If you're serving tacos:</p>
      <ul>
        <li>Race to finish a taco = winner assigns drinks</li>
        <li>Drop toppings = drink</li>
        <li>Shell breaks = drink</li>
        <li>Need water from spice = drink more (water counts as a drink)</li>
      </ul>

      <h2>Party Setup Tips</h2>
      <ul>
        <li><strong>Decorations:</strong> Papel picado, sombreros, piñatas</li>
        <li><strong>Music:</strong> Mariachi, modern Mexican artists, Latin pop</li>
        <li><strong>Food:</strong> Tacos, guacamole, chips and salsa</li>
        <li><strong>Dress code:</strong> Colorful clothing encouraged</li>
        <li><strong>Hydration:</strong> Tequila is strong - have water available</li>
      </ul>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Tequila Warning:</strong> Tequila hits hard. Pace yourself, eat plenty of food,
          and have non-alcoholic options available. The fiesta should be fun, not a disaster.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Holiday Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/st-patricks-day-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            St. Patrick's Day →
          </Link>
          <Link
            href="/guides/fourth-of-july-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            4th of July →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
