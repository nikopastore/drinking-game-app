import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Barbie Movie Drinking Game Rules 2025: Hi Barbie Edition",
  description: "Complete Barbie movie drinking game rules! Drink every time someone says 'Hi Barbie', Ken does something kenough, or existential crisis happens.",
  keywords: [
    "Barbie movie drinking game",
    "Barbie drinking game",
    "Hi Barbie drinking game",
    "Ken drinking game",
    "Margot Robbie Barbie drinking game",
    "Greta Gerwig drinking game",
    "pink drinking game",
    "Barbie watch party"
  ],
  openGraph: {
    title: "Barbie Movie Drinking Game: Hi Barbie Edition",
    description: "Make your Barbie movie night even more fabulous with these drinking rules.",
    type: "article",
    url: "https://sipwiki.app/guides/barbie-movie-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/barbie-movie-drinking-game",
  },
};

export default function BarbieMovieDrinkingGamePage() {
  return (
    <GuideLayout
      title="Barbie Movie Drinking Game: Hi Barbie Edition"
      description="It's literally impossible to be sad while playing this drinking game. Grab your pink drink, your favorite Kens, and get ready for a Kenough good time."
      breadcrumb="Barbie Movie Drinking Game"
    >
      <div className="bg-gradient-to-r from-pink-600/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/50 my-6">
        <h2 className="text-xl font-bold text-white mb-2">💖 Pink Drink Alert</h2>
        <p className="text-gray-300">
          This game requires a pink drink. Rosé, pink lemonade vodka, cosmopolitans,
          or any pink cocktail. It&apos;s not optional. It&apos;s Barbie.
        </p>
      </div>

      <h2>Basic Rules</h2>
      <p>These rules apply throughout the entire movie:</p>
      <ul>
        <li><strong>&quot;Hi Barbie&quot;:</strong> 1 drink</li>
        <li><strong>&quot;Hi Ken&quot;:</strong> 1 drink</li>
        <li><strong>Pink is shown prominently:</strong> 1 sip (you&apos;d never stop)</li>
        <li><strong>Barbie does Barbie things:</strong> 1 drink</li>
        <li><strong>Ken does Ken things:</strong> 1 drink</li>
        <li><strong>Existential crisis moment:</strong> 2 drinks</li>
        <li><strong>Mattel reference:</strong> 1 drink</li>
        <li><strong>Real world vs Barbieland contrast:</strong> 1 drink</li>
      </ul>

      <h2>Barbie-Specific Rules</h2>

      <h3>Stereotypical Barbie (Margot Robbie)</h3>
      <ul>
        <li>Perfect morning routine shown: 1 drink</li>
        <li>Floats down from Dream House: 1 drink</li>
        <li>Has a crisis about being &quot;different&quot;: 2 drinks</li>
        <li>Does the iconic Barbie wave: 1 drink</li>
        <li>Wears a new outfit: 1 drink</li>
        <li>Cries or feels human emotions: 2 drinks</li>
        <li>Delivers empowering speech: Finish your drink</li>
      </ul>

      <h3>Ken (Ryan Gosling)</h3>
      <ul>
        <li>&quot;Beach&quot; is mentioned: 1 drink</li>
        <li>Ken tries to get Barbie&apos;s attention: 1 drink</li>
        <li>Ken discovers something in real world: 2 drinks</li>
        <li>Ken does something &quot;Kenough&quot;: 1 drink</li>
        <li>Ken sings: Everyone sings along, drink at end</li>
        <li>Ken has a horse: 1 drink</li>
        <li>Ken wears a new outfit: 1 drink</li>
      </ul>

      <h2>Barbieland Rules</h2>
      <ul>
        <li>Dream House shown: 1 drink</li>
        <li>Fake food/drink shown: 1 drink</li>
        <li>A different Barbie is introduced: 1 drink per new Barbie</li>
        <li>President Barbie speaks: 1 drink</li>
        <li>Doctor Barbie, Lawyer Barbie, etc. shown: 1 drink</li>
        <li>Allan appears: 2 drinks</li>
        <li>Weird Barbie appears: Finish your drink</li>
        <li>Perfect choreography happens: 1 drink</li>
      </ul>

      <h2>Real World Rules</h2>
      <ul>
        <li>Someone doesn&apos;t recognize Barbie as Barbie: 1 drink</li>
        <li>Gloria has a monologue: 2 drinks</li>
        <li>Sasha is sarcastic: 1 drink</li>
        <li>Mattel executives panic: 1 drink</li>
        <li>Will Ferrell says something ridiculous: 1 drink</li>
        <li>Real world is depressing: 1 drink</li>
        <li>Ken discovers patriarchy: Shot</li>
      </ul>

      <h2>Song Rules</h2>
      <ul>
        <li><strong>&quot;Barbie Girl&quot; reference:</strong> Sing along, drink after</li>
        <li><strong>Original song starts:</strong> 1 drink</li>
        <li><strong>Ken&apos;s &quot;I&apos;m Just Ken&quot;:</strong> Everyone must sing, drink after</li>
        <li><strong>Dua Lipa&apos;s song:</strong> Dance in seat, drink</li>
        <li><strong>Any Billie Eilish song:</strong> 2 drinks (it&apos;s emotional)</li>
      </ul>

      <h2>Meta/Joke Rules</h2>
      <ul>
        <li>Fourth wall break: 2 drinks</li>
        <li>Self-aware Mattel joke: 1 drink</li>
        <li>Discontinued Barbie mentioned: 2 drinks</li>
        <li>Real-world issues addressed through Barbie: 1 drink</li>
        <li>Narrator chimes in: 1 drink</li>
        <li>Obviously fake product placement joke: 1 drink</li>
      </ul>

      <h2>Emotional Moments</h2>
      <ul>
        <li>You feel things: 1 drink</li>
        <li>The &quot;What Was I Made For&quot; moment: Tissues and drink</li>
        <li>Mother-daughter moment: 2 drinks</li>
        <li>Gloria&apos;s &quot;impossible standards&quot; speech: Finish drink, it&apos;s earned</li>
        <li>Ruth Handler appears: 2 drinks</li>
        <li>Ending scene: Toast to Barbie</li>
      </ul>

      <h2>Drinking Game Variations</h2>

      <h3>Light Version (First Watch)</h3>
      <ul>
        <li>Only &quot;Hi Barbie/Ken&quot; rules</li>
        <li>Song rules</li>
        <li>Major emotional moments</li>
      </ul>

      <h3>Party Mode</h3>
      <ul>
        <li>All basic rules</li>
        <li>Everyone picks a Barbie/Ken - drink on their moments</li>
        <li>Best dressed Barbie outfit = give out drinks</li>
      </ul>

      <h2>Watch Party Ideas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg border border-pink-500/30">
          <h4 className="font-bold text-pink-400 mb-2">Dress Code</h4>
          <p className="text-gray-300 text-sm">
            All pink everything. Bonus points for rollerblades,
            cowboy hats, or full Barbie costume.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-pink-500/30">
          <h4 className="font-bold text-pink-400 mb-2">Snacks</h4>
          <p className="text-gray-300 text-sm">
            Pink foods: strawberries, pink frosted donuts,
            pink macarons, shrimp, pink popcorn.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-pink-500/30">
          <h4 className="font-bold text-pink-400 mb-2">Drinks</h4>
          <p className="text-gray-300 text-sm">
            Rosé, pink lemonade vodka, cosmopolitans,
            pink champagne, or any pink cocktail.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-pink-500/30">
          <h4 className="font-bold text-pink-400 mb-2">Decor</h4>
          <p className="text-gray-300 text-sm">
            Pink streamers, Barbie dolls, Dream House vibes,
            flowers, anything that screams Barbieland.
          </p>
        </div>
      </div>

      <div className="bg-dark-800 p-6 rounded-xl border border-pink-500/50 my-6">
        <h3 className="font-bold text-white mb-4">Barbie Pink Cocktail</h3>
        <p className="text-gray-300 mb-2"><strong>The Malibu Barbie</strong></p>
        <ul className="text-gray-400 text-sm">
          <li>• 2 oz coconut rum</li>
          <li>• 1 oz watermelon liqueur</li>
          <li>• 2 oz pineapple juice</li>
          <li>• Splash of grenadine</li>
          <li>• Garnish with a cherry</li>
        </ul>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Pacing Reminder</h3>
        <p className="text-gray-300">
          &quot;Hi Barbie&quot; is said A LOT in the opening sequence. Pace yourself for the
          first 10 minutes or you won&apos;t make it to Ken&apos;s big musical number. You
          NEED to experience &quot;I&apos;m Just Ken&quot; properly.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Movie Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/movie-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Movie Drinking Games →
          </Link>
          <Link
            href="/guides/marvel-movie-drinking-game"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Marvel Drinking Game
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
