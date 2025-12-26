import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Squid Game Drinking Game Rules 2025: Red Light, Green Light & More",
  description: "Complete Squid Game drinking game rules! Drink along to the hit Netflix show with rules for every episode. Includes games inspired by the show.",
  keywords: [
    "Squid Game drinking game",
    "Squid Game Netflix drinking game",
    "Red Light Green Light drinking game",
    "Korean drama drinking game",
    "Squid Game party games",
    "Squid Game watch party",
    "Netflix drinking game",
    "Squid Game season 2 drinking game"
  ],
  openGraph: {
    title: "Squid Game Drinking Game: Complete Rules",
    description: "Turn your Squid Game watch party into a drinking game experience.",
    type: "article",
    url: "https://sipwiki.app/guides/squid-game-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/squid-game-drinking-game",
  },
};

export default function SquidGameDrinkingGamePage() {
  return (
    <GuideLayout
      title="Squid Game Drinking Game: Red Light, Drink!"
      description="Turn the most intense show on Netflix into a drinking game. These rules work for rewatching or first-time viewing. Just don't get eliminated..."
      breadcrumb="Squid Game Drinking Game"
    >
      <div className="bg-gradient-to-r from-pink-900/30 to-green-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-2">⚠️ Spoiler Warning</h2>
        <p className="text-gray-300">
          These rules contain spoilers for Squid Game Seasons 1 and 2. If you haven&apos;t
          watched yet, play our simplified version at the bottom.
        </p>
      </div>

      <h2>General Rules (All Episodes)</h2>
      <p>These rules apply throughout the entire series:</p>
      <ul>
        <li><strong>Someone gets eliminated:</strong> Take a drink 🔫</li>
        <li><strong>Giant doll/robot appears:</strong> Everyone freezes, last to freeze drinks</li>
        <li><strong>Guards in pink appear:</strong> 1 drink</li>
        <li><strong>Front Man appears:</strong> 2 drinks</li>
        <li><strong>Prize money is shown:</strong> 1 drink</li>
        <li><strong>Someone cries:</strong> 1 drink</li>
        <li><strong>Alliance formed:</strong> Choose a drinking buddy for the episode</li>
        <li><strong>Betrayal happens:</strong> Give 3 drinks to your buddy</li>
        <li><strong>Gi-hun makes a speech:</strong> Everyone drinks until he stops</li>
      </ul>

      <h2>Episode-Specific Rules (Season 1)</h2>

      <h3>Episode 1: Red Light, Green Light</h3>
      <ul>
        <li>The doll says &quot;Red Light&quot;: Everyone must freeze, mover drinks</li>
        <li>First elimination: Take a shot as tribute</li>
        <li>Every 10 eliminations: 1 drink</li>
        <li>Time almost runs out: Finish your drink if they barely make it</li>
      </ul>

      <h3>Episode 2: Hell</h3>
      <ul>
        <li>Someone wants to leave: 1 drink</li>
        <li>Vote happens: Drink based on how you&apos;d vote</li>
        <li>Fight breaks out: 2 drinks</li>
        <li>Lights go out: Everyone closes eyes, last to open drinks</li>
      </ul>

      <h3>Episode 3: The Man with the Umbrella</h3>
      <ul>
        <li>Honeycomb game begins: Everyone picks a shape (mentally)</li>
        <li>Your shape shown: Drink continuously while character does it</li>
        <li>Someone licks the honeycomb: 1 drink</li>
        <li>Umbrella shape chosen: Take a shot (RIP)</li>
        <li>Creative solution used: Give out 2 drinks</li>
      </ul>

      <h3>Episode 4: Stick to the Team</h3>
      <ul>
        <li>Team selection drama: 1 drink per rejected person</li>
        <li>Tug of war strategy explained: 2 drinks</li>
        <li>Your team falling: Drink until they recover or fall</li>
        <li>Team wins: Opponents (other players watching with you) drink</li>
      </ul>

      <h3>Episode 5: A Fair World</h3>
      <ul>
        <li>Marble game rules explained: 1 drink</li>
        <li>Someone tricks their partner: 2 drinks</li>
        <li>Emotional backstory shared: 1 drink</li>
        <li>Time almost runs out: Finish drink</li>
        <li>Il-nam&apos;s fate: Take a shot</li>
      </ul>

      <h3>Episode 6: Gganbu</h3>
      <ul>
        <li>Each marble game: Loser of a mini-game drinks</li>
        <li>Ali&apos;s moment: Everyone takes a moment of silence, then drinks</li>
        <li>Manipulation revealed: 3 drinks</li>
        <li>Anyone cries: 1 drink per tear (okay, per person crying)</li>
      </ul>

      <h3>Episode 7: VIPS</h3>
      <ul>
        <li>VIPs appear: 2 drinks</li>
        <li>VIP makes a bet: Bet along, loser drinks</li>
        <li>Glass bridge step: Everyone guesses, wrong guessers drink</li>
        <li>Someone pushes another: 3 drinks</li>
        <li>Glassmaker revelation: 1 drink</li>
      </ul>

      <h3>Episode 8 & 9: The Final Games</h3>
      <ul>
        <li>Squid game rules explained: 1 drink</li>
        <li>Final confrontation: Drink based on who you&apos;re rooting for</li>
        <li>Winner revealed: Winners (who picked right) give out drinks</li>
        <li>Aftermath twist: Shot if you saw it coming, 2 if you didn&apos;t</li>
      </ul>

      <h2>Physical Games Inspired by Squid Game</h2>

      <h3>Red Light, Green Light (IRL)</h3>
      <p>Play the actual game with drinking rules:</p>
      <ul>
        <li>One person is the doll (faces wall)</li>
        <li>&quot;Green light&quot; = Everyone moves toward finish</li>
        <li>&quot;Red light&quot; = Everyone freezes</li>
        <li>If the doll catches you moving: Take a drink, go back to start</li>
        <li>First to finish: Gives out 5 drinks</li>
        <li>Last to finish: Takes a shot</li>
      </ul>

      <h3>Honeycomb Challenge</h3>
      <p>DIY version with cookies or crackers:</p>
      <ul>
        <li>Draw shapes on cookies/crackers with icing</li>
        <li>Players must eat around the shape without breaking it</li>
        <li>Break the shape: Drink</li>
        <li>Finish first with shape intact: Give out 3 drinks</li>
        <li>Use your hands: Drink and restart</li>
      </ul>

      <h3>Marble Drinking Games</h3>
      <p>Various marble games from the show:</p>
      <ul>
        <li><strong>Odd or Even:</strong> Guess how many marbles opponent has, wrong = drink</li>
        <li><strong>Marble Toss:</strong> Throw marbles at a target, furthest drinks</li>
        <li><strong>All or Nothing:</strong> Bet drinks instead of marbles</li>
      </ul>

      <h2>Season 2 Rules</h2>
      <ul>
        <li><strong>New character introduced:</strong> 1 drink</li>
        <li><strong>Returning character:</strong> 2 drinks (you know who)</li>
        <li><strong>New game type:</strong> 1 drink</li>
        <li><strong>Front Man revealed:</strong> Shot</li>
        <li><strong>Gi-hun&apos;s red hair shown:</strong> 1 drink</li>
        <li><strong>Reference to Season 1:</strong> 1 drink</li>
      </ul>

      <h2>Spoiler-Free Version</h2>
      <p>For first-time watchers who want to play but avoid spoilers:</p>
      <ul>
        <li>Someone runs: 1 drink</li>
        <li>Someone cries: 1 drink</li>
        <li>Guards appear: 1 drink</li>
        <li>Money shown: 1 drink</li>
        <li>Game starts: Everyone toasts</li>
        <li>Game ends: Losers drink</li>
        <li>Plot twist: Everyone drinks</li>
      </ul>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Pacing Warning</h3>
        <p className="text-gray-300">
          Squid Game is intense and has a LOT of eliminations. Pace yourself! Consider
          using lighter drinks or taking every other rule. Episodes 5-6 are especially
          heavy - have tissues and water ready.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Streaming Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/movie-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Movie Drinking Games →
          </Link>
          <Link
            href="/guides/tv-show-drinking-games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            TV Show Games
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
