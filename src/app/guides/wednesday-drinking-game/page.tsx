import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wednesday Drinking Game Rules 2025: Nevermore Edition",
  description: "Complete Wednesday Addams drinking game rules for the Netflix series! Drink every time Wednesday is deadpan, Thing appears, or Enid is enthusiastic.",
  keywords: [
    "Wednesday drinking game",
    "Wednesday Netflix drinking game",
    "Wednesday Addams drinking game",
    "Nevermore drinking game",
    "Jenna Ortega drinking game",
    "Thing drinking game",
    "Netflix drinking games",
    "Wednesday watch party"
  ],
  openGraph: {
    title: "Wednesday Drinking Game: Nevermore Edition",
    description: "Turn your Wednesday binge into a drinking game experience.",
    type: "article",
    url: "https://sipwiki.app/guides/wednesday-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/wednesday-drinking-game",
  },
};

export default function WednesdayDrinkingGamePage() {
  return (
    <GuideLayout
      title="Wednesday Drinking Game: Nevermore Edition"
      description="Embrace your dark side with this drinking game for Netflix's Wednesday. Deadpan humor, mysterious murders, and a dancing hand - what's not to drink to?"
      breadcrumb="Wednesday Drinking Game"
    >
      <div className="bg-gradient-to-r from-purple-900/30 to-gray-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-2">🖤 Trigger Warning</h2>
        <p className="text-gray-300">
          This game involves dark humor, just like Wednesday herself.
          Embrace the macabre, but know your limits. Wednesday would approve of
          self-awareness.
        </p>
      </div>

      <h2>Basic Rules (All Episodes)</h2>
      <p>These rules apply every episode:</p>
      <ul>
        <li><strong>Wednesday is deadpan/sarcastic:</strong> 1 drink</li>
        <li><strong>Thing appears:</strong> 1 drink</li>
        <li><strong>Enid is enthusiastic:</strong> 1 drink</li>
        <li><strong>Wednesday doesn&apos;t smile:</strong> Trick question, she never does</li>
        <li><strong>Someone mentions the Addams family:</strong> 1 drink</li>
        <li><strong>Wednesday plays the cello:</strong> 2 drinks</li>
        <li><strong>Vision/psychic moment:</strong> 2 drinks</li>
        <li><strong>Murder mystery clue found:</strong> 1 drink</li>
      </ul>

      <h2>Character-Specific Rules</h2>

      <h3>Wednesday Rules</h3>
      <ul>
        <li>Makes a morbid comment: 1 drink</li>
        <li>Threatens someone: 1 drink</li>
        <li>Uses sarcasm: 1 drink (you&apos;ll drink a lot)</li>
        <li>Shows genuine emotion (rare!): 3 drinks</li>
        <li>Types on typewriter: 1 drink</li>
        <li>Says something surprisingly insightful: 2 drinks</li>
        <li>Wears all black: Just assume, always</li>
      </ul>

      <h3>Enid Rules</h3>
      <ul>
        <li>Uses colorful language/enthusiasm: 1 drink</li>
        <li>Talks about werewolf things: 1 drink</li>
        <li>Decorates or discusses decor: 1 drink</li>
        <li>Tries to befriend Wednesday: 1 drink</li>
        <li>Actually succeeds: 2 drinks</li>
        <li>Wolf eyes shown: 2 drinks</li>
      </ul>

      <h3>Thing Rules</h3>
      <ul>
        <li>Thing scurries across screen: 1 drink</li>
        <li>Thing communicates something important: 2 drinks</li>
        <li>Thing helps Wednesday: 1 drink</li>
        <li>Thing is adorable: 1 drink</li>
        <li>Thing is in danger: Hold your drink until he&apos;s safe</li>
      </ul>

      <h3>Tyler Rules</h3>
      <ul>
        <li>Appears: 1 drink</li>
        <li>Has a moment with Wednesday: 1 drink</li>
        <li>Works at coffee shop: 1 drink</li>
        <li>Seems suspicious: 2 drinks</li>
        <li>[Spoiler stuff happens]: Shot</li>
      </ul>

      <h3>Xavier Rules</h3>
      <ul>
        <li>Does art stuff: 1 drink</li>
        <li>Is moody: 1 drink</li>
        <li>Has cryptic moment: 1 drink</li>
        <li>Hair flip: 1 drink</li>
      </ul>

      <h2>Nevermore Academy Rules</h2>
      <ul>
        <li>Nevermore shown in full glory: 1 drink</li>
        <li>Student uses powers: 1 drink</li>
        <li>Principal Weems appears: 1 drink</li>
        <li>School uniform shown: 1 drink (first time per episode)</li>
        <li>Secret society mentioned: 2 drinks</li>
        <li>Statue/crypt/secret passage: 1 drink</li>
      </ul>

      <h2>Addams Family Rules</h2>
      <ul>
        <li>Morticia appears: 2 drinks</li>
        <li>Gomez appears: 2 drinks</li>
        <li>Pugsley mentioned: 1 drink</li>
        <li>Uncle Fester shows up: Shot!</li>
        <li>Wednesday is compared to her mother: 1 drink</li>
        <li>Family history revealed: 1 drink</li>
      </ul>

      <h2>Mystery & Murder Rules</h2>
      <ul>
        <li>Monster sighting: 2 drinks</li>
        <li>Someone dies: 2 drinks</li>
        <li>Clue discovered: 1 drink</li>
        <li>False lead: 1 drink</li>
        <li>Wednesday investigates alone: 1 drink</li>
        <li>Someone tells Wednesday to stop investigating: 1 drink</li>
        <li>Wednesday ignores them: 1 drink</li>
      </ul>

      <h2>Iconic Moments Rules</h2>

      <h3>The Dance Scene</h3>
      <ul>
        <li>Wednesday dances: Get up and try the dance</li>
        <li>Succeed: Give out 5 drinks</li>
        <li>Fail: Take 3 drinks</li>
        <li>Don&apos;t attempt: Take a shot, coward</li>
      </ul>

      <h3>The Boat Race</h3>
      <ul>
        <li>Drink throughout the race</li>
        <li>Wednesday is losing: Drink faster</li>
        <li>Wednesday wins: Others drink</li>
      </ul>

      <h2>Drinking Game Variations</h2>

      <h3>Light Version</h3>
      <p>Only drink on:</p>
      <ul>
        <li>Thing appears</li>
        <li>Wednesday plays cello</li>
        <li>Vision happens</li>
        <li>Major plot reveal</li>
      </ul>

      <h3>Expert Mode</h3>
      <p>Add to basic rules:</p>
      <ul>
        <li>Every black outfit: 1 sip</li>
        <li>Every sarcastic comment: 1 drink</li>
        <li>Every time Wednesday outsmarts someone: 1 drink</li>
      </ul>

      <h2>Watch Party Theme Ideas</h2>
      <ul>
        <li><strong>Dress code:</strong> All black, obviously</li>
        <li><strong>Snacks:</strong> Black food coloring everything</li>
        <li><strong>Drinks:</strong> Dark cocktails, black vodka drinks</li>
        <li><strong>Decor:</strong> Gothic, lots of black and purple</li>
        <li><strong>Music:</strong> The Cramps, Goo Goo Muck</li>
      </ul>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h3 className="font-bold text-white mb-4">Wednesday-Themed Cocktail</h3>
        <p className="text-gray-300 mb-2"><strong>The Nevermore</strong></p>
        <ul className="text-gray-400 text-sm">
          <li>• 2 oz vodka (or black vodka)</li>
          <li>• 1 oz blackberry liqueur</li>
          <li>• 1 oz lime juice</li>
          <li>• Top with ginger beer</li>
          <li>• Garnish with blackberries</li>
        </ul>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Pacing Note</h3>
        <p className="text-gray-300">
          Wednesday&apos;s sarcasm is constant. The deadpan rule alone could destroy you.
          Consider only counting &quot;notable&quot; sarcastic moments or switching to sips
          instead of drinks for character-based rules.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Netflix Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/squid-game-drinking-game"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Squid Game →
          </Link>
          <Link
            href="/guides/tv-show-drinking-games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            All TV Show Games
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
