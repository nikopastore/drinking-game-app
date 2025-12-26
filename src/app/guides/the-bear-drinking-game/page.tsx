import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Bear Drinking Game Rules 2025: Yes Chef Edition",
  description: "Complete drinking game rules for The Bear on Hulu/FX. Drink every time someone says 'Yes Chef', the kitchen descends into chaos, or Carmy has a meltdown.",
  keywords: [
    "The Bear drinking game",
    "The Bear TV show drinking game",
    "Yes Chef drinking game",
    "FX The Bear drinking game",
    "Hulu drinking game",
    "restaurant drinking game",
    "The Bear watch party",
    "Carmy drinking game"
  ],
  openGraph: {
    title: "The Bear Drinking Game: Yes Chef Edition",
    description: "Turn The Bear into a drinking game with these stress-inducing rules.",
    type: "article",
    url: "https://sipwiki.app/guides/the-bear-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/the-bear-drinking-game",
  },
};

export default function TheBearDrinkingGamePage() {
  return (
    <GuideLayout
      title="The Bear Drinking Game: Yes Chef Edition"
      description="Feel the stress of a Chicago kitchen from your couch. These rules will have you drinking as much as you sweat watching this show."
      breadcrumb="The Bear Drinking Game"
    >
      <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-2">📍 Behind (You)</h2>
        <p className="text-gray-300">
          Fair warning: This show is intense. These rules will get you buzzed fast.
          Pace yourself like a long service - it&apos;s a marathon, not a sprint, chef.
        </p>
      </div>

      <h2>Basic Rules (All Episodes)</h2>
      <p>These rules apply every episode:</p>
      <ul>
        <li><strong>&quot;Yes Chef&quot;:</strong> 1 drink (you will drink A LOT)</li>
        <li><strong>&quot;Behind&quot;:</strong> 1 drink</li>
        <li><strong>&quot;Corner&quot;:</strong> 1 drink</li>
        <li><strong>&quot;Heard&quot;:</strong> 1 drink</li>
        <li><strong>Someone yells:</strong> 1 drink</li>
        <li><strong>Chaos in the kitchen:</strong> Drink until calm returns</li>
        <li><strong>Beautiful plating shown:</strong> 1 drink (appreciate the art)</li>
        <li><strong>Carmy stares intensely:</strong> 1 drink</li>
      </ul>

      <h2>Character-Specific Rules</h2>

      <h3>Carmy Rules</h3>
      <ul>
        <li>Has a flashback: 2 drinks</li>
        <li>Mentions Copenhagen/fine dining past: 1 drink</li>
        <li>Gets overwhelmed: Drink with him</li>
        <li>Actually smiles: 2 drinks (rare!)</li>
        <li>Gives a genuine compliment: 3 drinks</li>
        <li>Has a panic moment: Hold your breath, drink when he breathes</li>
      </ul>

      <h3>Sydney Rules</h3>
      <ul>
        <li>Creates a new dish: 1 drink</li>
        <li>Stands up for herself: 2 drinks (you go, Syd)</li>
        <li>Gets frustrated with Carmy: 1 drink</li>
        <li>Shows her notebook: 1 drink</li>
        <li>Lists get mentioned: 1 drink</li>
      </ul>

      <h3>Richie Rules</h3>
      <ul>
        <li>Says &quot;cousin&quot;: 1 drink</li>
        <li>Fights with someone: 1 drink</li>
        <li>Has a character growth moment: 2 drinks</li>
        <li>Mentions his daughter: 1 drink</li>
        <li>Surprisingly competent: 2 drinks</li>
      </ul>

      <h3>Marcus Rules</h3>
      <ul>
        <li>Experiments with pastry: 1 drink</li>
        <li>Gets a donut right: Give out 2 drinks</li>
        <li>Talks about Luca: 1 drink</li>
        <li>Has a breakthrough: Toast to Marcus</li>
      </ul>

      <h3>Tina Rules</h3>
      <ul>
        <li>Calls someone &quot;Jeff&quot;: 1 drink</li>
        <li>Shows skepticism: 1 drink</li>
        <li>Becomes supportive: 2 drinks (growth!)</li>
        <li>Cooks something amazing: 1 drink</li>
      </ul>

      <h2>Chaos Meter Rules</h2>
      <p>Based on kitchen stress levels:</p>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <ul className="text-gray-300 space-y-2">
          <li><strong>Calm Service:</strong> Sip casually</li>
          <li><strong>Building Tension:</strong> Drink every kitchen call</li>
          <li><strong>Things Going Wrong:</strong> Drink every 30 seconds</li>
          <li><strong>Full Meltdown:</strong> Waterfall until scene changes</li>
          <li><strong>Post-Service Calm:</strong> Catch your breath, water break</li>
        </ul>
      </div>

      <h2>Season-Specific Rules</h2>

      <h3>Season 1</h3>
      <ul>
        <li>Original Beef shown: 1 drink</li>
        <li>Money problems mentioned: 1 drink</li>
        <li>Michael reference: 2 drinks (heavy)</li>
        <li>Cicero (Uncle Jimmy) appears: 1 drink</li>
        <li>&quot;The Bear&quot; nickname used: 1 drink</li>
      </ul>

      <h3>Season 2</h3>
      <ul>
        <li>Restaurant transformation scene: 1 drink</li>
        <li>New staff training: 1 drink</li>
        <li>Opening night stress: Drink constantly</li>
        <li>Forks episode: Take a shot for Richie</li>
        <li>That Christmas episode: Wine. Just wine.</li>
      </ul>

      <h3>Season 3</h3>
      <ul>
        <li>Bear restaurant shown: 1 drink</li>
        <li>Star rating mentioned: 1 drink</li>
        <li>Critical pressure: 2 drinks</li>
        <li>Staff conflict: 1 drink</li>
        <li>Beautiful dish close-up: 1 drink</li>
      </ul>

      <h2>One-Shot Episodes</h2>
      <p>For the intense single-take style episodes:</p>
      <ul>
        <li><strong>Forks (S2E7):</strong> Drink every time Richie improves</li>
        <li><strong>Fishes (Christmas Episode):</strong> Switch to wine, drink at every family interaction</li>
        <li><strong>Review (S1E7):</strong> Drink with the chaos, it&apos;s A LOT</li>
      </ul>

      <h2>Drinking Game Variations</h2>

      <h3>Light Version (Beginners)</h3>
      <p>Only drink on:</p>
      <ul>
        <li>&quot;Yes Chef&quot; (main character only)</li>
        <li>Scene changes</li>
        <li>Food close-ups</li>
      </ul>

      <h3>Expert Mode</h3>
      <p>Add these to basic rules:</p>
      <ul>
        <li>Every kitchen term: 1 drink</li>
        <li>Every cut/camera change: 1 sip</li>
        <li>Background kitchen sounds: Continuous sipping</li>
      </ul>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Pace Yourself, Chef</h3>
        <p className="text-gray-300">
          The Bear is 20-40 minutes per episode but DENSE with drinking triggers.
          Consider playing one episode at a time, or using the light rules for
          binge sessions. The Christmas episode alone could end your night.
        </p>
      </div>

      <h2>Watch Party Ideas</h2>
      <ul>
        <li><strong>Dress code:</strong> Everyone wears aprons</li>
        <li><strong>Snacks:</strong> Italian beef sandwiches, donuts</li>
        <li><strong>Drinks:</strong> Chicago beers (Old Style), coffee cocktails</li>
        <li><strong>Roles:</strong> Assign everyone a character, drink on their moments</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More TV Show Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/tv-show-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            TV Show Drinking Games →
          </Link>
          <Link
            href="/guides/friends-tv-show-drinking-game"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Friends Drinking Game
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
