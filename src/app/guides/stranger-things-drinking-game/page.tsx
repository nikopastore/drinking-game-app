import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stranger Things Drinking Game Rules 2025: Upside Down Edition",
  description: "Complete Stranger Things drinking game rules! Drink every time Eleven uses her powers, someone says 'Upside Down', or 80s nostalgia appears.",
  keywords: [
    "Stranger Things drinking game",
    "Stranger Things Netflix drinking game",
    "Eleven drinking game",
    "Upside Down drinking game",
    "Hawkins drinking game",
    "Netflix sci-fi drinking game",
    "Stranger Things watch party",
    "80s drinking game"
  ],
  openGraph: {
    title: "Stranger Things Drinking Game: Upside Down Edition",
    description: "Enter the Upside Down with these drinking game rules.",
    type: "article",
    url: "https://sipwiki.app/guides/stranger-things-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/stranger-things-drinking-game",
  },
};

export default function StrangerThingsDrinkingGamePage() {
  return (
    <GuideLayout
      title="Stranger Things Drinking Game: Upside Down Edition"
      description="Friends don't lie, and we won't lie - this drinking game will make your Stranger Things rewatch even more epic. Enter the Upside Down responsibly."
      breadcrumb="Stranger Things Drinking Game"
    >
      <div className="bg-gradient-to-r from-red-900/30 to-purple-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-2">📺 Spoiler Alert</h2>
        <p className="text-gray-300">
          These rules cover all seasons. If you haven&apos;t watched yet, use the
          spoiler-free version at the bottom. Friends don&apos;t let friends get spoiled.
        </p>
      </div>

      <h2>Basic Rules (All Seasons)</h2>
      <p>These rules apply throughout the entire series:</p>
      <ul>
        <li><strong>&quot;Upside Down&quot; mentioned:</strong> 1 drink</li>
        <li><strong>Eleven uses powers:</strong> 1 drink</li>
        <li><strong>Eleven&apos;s nose bleeds:</strong> 2 drinks</li>
        <li><strong>Christmas lights flicker:</strong> 1 drink</li>
        <li><strong>Someone says &quot;friends don&apos;t lie&quot;:</strong> 1 drink</li>
        <li><strong>80s reference/product:</strong> 1 drink</li>
        <li><strong>Demogorgon/monster appears:</strong> 2 drinks</li>
        <li><strong>Walkie-talkie used:</strong> 1 drink</li>
      </ul>

      <h2>Character-Specific Rules</h2>

      <h3>Eleven Rules</h3>
      <ul>
        <li>Uses powers: 1 drink</li>
        <li>Nose bleeds: 2 drinks</li>
        <li>Says &quot;Friends don&apos;t lie&quot;: 1 drink</li>
        <li>Eats Eggos: 1 drink</li>
        <li>Stares intensely: 1 drink</li>
        <li>Has a flashback: 1 drink</li>
        <li>Says something profound: 2 drinks</li>
      </ul>

      <h3>Mike Rules</h3>
      <ul>
        <li>Leads the party: 1 drink</li>
        <li>Gets emotional about El: 1 drink</li>
        <li>Uses D&D terminology: 1 drink</li>
        <li>Fights with someone: 1 drink</li>
      </ul>

      <h3>Dustin Rules</h3>
      <ul>
        <li>Says something scientific: 1 drink</li>
        <li>Makes a pop culture reference: 1 drink</li>
        <li>His friendship is wholesome: 1 drink</li>
        <li>Does his signature growl/scream: 2 drinks</li>
        <li>Mentions his teeth (later seasons): 1 drink</li>
      </ul>

      <h3>Steve Rules</h3>
      <ul>
        <li>Hair is shown in glory: 1 drink</li>
        <li>Being a good babysitter: 1 drink</li>
        <li>Uses the nail bat: 2 drinks</li>
        <li>Has a character growth moment: 2 drinks</li>
        <li>Gets beat up: 1 drink</li>
      </ul>

      <h3>Hopper Rules</h3>
      <ul>
        <li>Dad mode activated: 1 drink</li>
        <li>Drinks/smokes on screen: Match him</li>
        <li>Yells at someone: 1 drink</li>
        <li>Has a tender moment: 2 drinks</li>
        <li>Investigates something: 1 drink</li>
      </ul>

      <h3>Joyce Rules</h3>
      <ul>
        <li>Worried mom face: 1 drink</li>
        <li>Yells &quot;Will!&quot; or searches for him: 1 drink</li>
        <li>Uses Christmas lights: 2 drinks</li>
        <li>Takes charge: 1 drink</li>
        <li>Won&apos;t give up: 1 drink</li>
      </ul>

      <h2>Season-Specific Rules</h2>

      <h3>Season 1</h3>
      <ul>
        <li>Will is missing: 1 drink</li>
        <li>Barb mentioned: 1 drink (RIP)</li>
        <li>Lab/Hawkins Lab shown: 1 drink</li>
        <li>The boys play D&D: 1 drink</li>
        <li>Nancy investigates: 1 drink</li>
        <li>Jonathan is brooding: 1 drink</li>
      </ul>

      <h3>Season 2</h3>
      <ul>
        <li>Bob is wholesome: 1 drink</li>
        <li>Will has a &quot;now memory&quot;: 2 drinks</li>
        <li>Max appears: 1 drink</li>
        <li>Billy is intimidating: 1 drink</li>
        <li>Mind Flayer referenced: 1 drink</li>
        <li>Dart the Demopuppy: 1 drink</li>
      </ul>

      <h3>Season 3</h3>
      <ul>
        <li>Starcourt Mall shown: 1 drink</li>
        <li>Scoops Ahoy uniform: 1 drink</li>
        <li>Robin is sarcastic: 1 drink</li>
        <li>&quot;Russians&quot; mentioned: 1 drink</li>
        <li>Flayed person spotted: 1 drink</li>
        <li>&quot;Never Ending Story&quot; duet: SING ALONG AND DRINK</li>
      </ul>

      <h3>Season 4</h3>
      <ul>
        <li>Vecna appears: 2 drinks</li>
        <li>Someone gets Vecna&apos;d: 2 drinks</li>
        <li>Kate Bush plays: Everyone vibes and drinks</li>
        <li>Running up that hill moment: Finish your drink</li>
        <li>Eddie shreds: Everyone rocks out and drinks</li>
        <li>California scenes: 1 drink</li>
        <li>Russia scenes: 1 drink</li>
      </ul>

      <h2>Monster Rules</h2>
      <ul>
        <li>Demogorgon on screen: 2 drinks</li>
        <li>Demo-dog appears: 1 drink</li>
        <li>Mind Flayer shown: 2 drinks</li>
        <li>Vecna speaks: 1 drink</li>
        <li>Someone escapes a monster: 1 drink</li>
        <li>Monster kills someone: Shot</li>
      </ul>

      <h2>80s Nostalgia Rules</h2>
      <ul>
        <li>80s song plays: Name it for a bonus, drink regardless</li>
        <li>80s product placement: 1 drink</li>
        <li>80s fashion moment: 1 drink</li>
        <li>80s technology used: 1 drink</li>
        <li>Movie/TV reference: 1 drink</li>
        <li>Arcade scene: 1 drink</li>
      </ul>

      <h2>Spoiler-Free Version</h2>
      <p>For first-time watchers:</p>
      <ul>
        <li>Powers used: 1 drink</li>
        <li>Monster appears: 2 drinks</li>
        <li>Someone screams: 1 drink</li>
        <li>Lights flicker: 1 drink</li>
        <li>80s song plays: 1 drink</li>
        <li>Cliffhanger ending: Finish drink</li>
      </ul>

      <h2>Watch Party Theme Ideas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="bg-dark-800 p-4 rounded-lg border border-red-500/30">
          <h4 className="font-bold text-red-400 mb-2">Decorations</h4>
          <p className="text-gray-300 text-sm">
            Christmas lights (obviously), alphabet on wall,
            Hawkins Lab warning signs, 80s posters.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-red-500/30">
          <h4 className="font-bold text-red-400 mb-2">Snacks</h4>
          <p className="text-gray-300 text-sm">
            Eggos (mandatory), 80s candy, pizza, anything
            from Starcourt Mall food court.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-red-500/30">
          <h4 className="font-bold text-red-400 mb-2">Drinks</h4>
          <p className="text-gray-300 text-sm">
            New Coke (if you can find it), Cherry Slurpees,
            any 80s-themed cocktails.
          </p>
        </div>
        <div className="bg-dark-800 p-4 rounded-lg border border-red-500/30">
          <h4 className="font-bold text-red-400 mb-2">Costumes</h4>
          <p className="text-gray-300 text-sm">
            Eleven&apos;s pink dress, Scoops Ahoy uniforms,
            Hellfire Club shirts, or 80s casual.
          </p>
        </div>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Episode Length Warning</h3>
        <p className="text-gray-300">
          Season 4 episodes are LONG (some over 2 hours). The season finale is
          basically a movie. Pace yourself or split into multiple sessions.
          Don&apos;t try to binge the whole season with full rules.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Netflix Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/wednesday-drinking-game"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Wednesday →
          </Link>
          <Link
            href="/guides/squid-game-drinking-game"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Squid Game
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
