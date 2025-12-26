import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mario Party Drinking Game Rules 2025: Star Cup Edition",
  description: "Complete Mario Party drinking game rules! Drink on mini-game losses, star steals, and Bowser appearances. Perfect for Mario Party Superstars.",
  keywords: [
    "Mario Party drinking game",
    "Mario Party Superstars drinking game",
    "Nintendo drinking game",
    "video game drinking game",
    "Mario Party rules",
    "party game drinking game",
    "Switch drinking game",
    "mini game drinking"
  ],
  openGraph: {
    title: "Mario Party Drinking Game: Star Cup Edition",
    description: "Turn Mario Party into the ultimate drinking game party.",
    type: "article",
    url: "https://sipwiki.app/guides/mario-party-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/mario-party-drinking-game",
  },
};

export default function MarioPartyDrinkingGamePage() {
  return (
    <GuideLayout
      title="Mario Party Drinking Game: Star Cup Edition"
      description="Mario Party already destroys friendships. Add alcohol and watch the chaos unfold. These rules work for any Mario Party but are optimized for Superstars."
      breadcrumb="Mario Party Drinking Game"
    >
      <div className="bg-gradient-to-r from-red-900/30 to-blue-900/30 p-6 rounded-xl border border-dark-600 my-6">
        <h2 className="text-xl font-bold text-white mb-2">🌟 Star Warning</h2>
        <p className="text-gray-300">
          Mario Party games can last 60-90 minutes. Pace yourself! Consider a
          10-15 turn game instead of 20+ for drinking sessions.
        </p>
      </div>

      <h2>Basic Turn Rules</h2>
      <p>These rules apply every turn:</p>
      <ul>
        <li><strong>Roll a 1:</strong> Take 1 drink</li>
        <li><strong>Roll a 10:</strong> Give out 2 drinks</li>
        <li><strong>Land on Red Space:</strong> Take 1 drink</li>
        <li><strong>Land on Bowser Space:</strong> Take 2 drinks</li>
        <li><strong>Get coins stolen:</strong> Take 1 drink</li>
        <li><strong>Buy a star:</strong> Everyone else drinks</li>
        <li><strong>Star stolen from you:</strong> Finish your drink</li>
        <li><strong>Pass a star (can&apos;t afford it):</strong> Take 2 drinks of shame</li>
      </ul>

      <h2>Mini-Game Rules</h2>
      <p>After every mini-game:</p>
      <ul>
        <li><strong>Lose a Free-For-All:</strong> Take 1 drink</li>
        <li><strong>Come in last place:</strong> Take 2 drinks</li>
        <li><strong>Win a Free-For-All:</strong> Give out 3 drinks (split however you want)</li>
        <li><strong>1v3 (the 1):</strong> Win = 1 gives out 3 drinks each. Lose = 1 takes 3 drinks</li>
        <li><strong>2v2 (losing team):</strong> Each takes 2 drinks</li>
        <li><strong>Duel mini-game loser:</strong> Loser takes drinks equal to coins lost / 10</li>
        <li><strong>Battle mini-game:</strong> Losers take drinks equal to their placement</li>
      </ul>

      <h2>Item Rules</h2>
      <ul>
        <li><strong>Use a Golden Pipe:</strong> Take a drink (you cheater)</li>
        <li><strong>Boo steals your coins:</strong> Take 1 drink</li>
        <li><strong>Boo steals your star:</strong> Finish your drink (devastating)</li>
        <li><strong>Use a Cursed Dice:</strong> Take 1 drink for being evil</li>
        <li><strong>Get an item from Toad:</strong> Give 1 drink</li>
        <li><strong>Use Warp Block:</strong> Both players swap drinks</li>
      </ul>

      <h2>Event Space Rules</h2>
      <ul>
        <li><strong>Chance Time:</strong> Everyone drinks during the animation</li>
        <li><strong>Lucky Space:</strong> Give out 2 drinks</li>
        <li><strong>Unlucky Space:</strong> Take 2 drinks</li>
        <li><strong>Bowser Roulette:</strong> Drink based on result</li>
        <li><strong>Koopa Bank:</strong> Pay in = take drinks equal to amount / 5</li>
        <li><strong>Collect from Bank:</strong> Give out drinks equal to amount / 5</li>
      </ul>

      <h2>End of Game Rules</h2>
      <ul>
        <li><strong>Bonus Stars awarded:</strong> Recipients give out 2 drinks each</li>
        <li><strong>Last place overall:</strong> Take a shot</li>
        <li><strong>Win the game:</strong> Give out 5 drinks total</li>
        <li><strong>Win with 0 stars:</strong> Everyone else takes a shot (coin victory!)</li>
        <li><strong>Lose despite having most stars:</strong> Bonus star salt = 3 drinks</li>
      </ul>

      <h2>Specific Mini-Game Drinking</h2>
      <p>Special rules for classic mini-games:</p>

      <h3>Button Mashers</h3>
      <ul>
        <li>Lose Tug of War: 2 drinks</li>
        <li>Lose Face Lift: 1 drink + do an impression</li>
        <li>Last in Platform Peril: 3 drinks</li>
      </ul>

      <h3>Luck-Based Games</h3>
      <ul>
        <li>Pick wrong mushroom (Mushroom Mix-Up): 1 drink</li>
        <li>Wrong box in chance games: 1 drink</li>
        <li>Get unlucky: Everyone laughs, you drink</li>
      </ul>

      <h3>Skill Games</h3>
      <ul>
        <li>Fall off in Bumper Balls: 2 drinks</li>
        <li>First out in Hot Rope Jump: 2 drinks</li>
        <li>Miss in Shy Guy Says: 1 drink per miss</li>
      </ul>

      <h2>Board-Specific Rules</h2>

      <h3>Peach&apos;s Birthday Cake</h3>
      <ul>
        <li>Plant a Piranha Plant: Give 1 drink</li>
        <li>Get eaten by Piranha Plant: Take 2 drinks</li>
        <li>Wrong path to star: 1 drink</li>
      </ul>

      <h3>Yoshi&apos;s Tropical Island</h3>
      <ul>
        <li>Pay Bowser: Drinks equal to coins / 10</li>
        <li>Get swapped to wrong island: 1 drink</li>
      </ul>

      <h3>Space Land</h3>
      <ul>
        <li>Get hit by Bowser beam: 2 drinks</li>
        <li>Countdown gets close: Everyone drinks</li>
      </ul>

      <h3>Horror Land</h3>
      <ul>
        <li>Get scared by Boo: 1 drink</li>
        <li>Day/Night change hurts you: 1 drink</li>
        <li>Whomped: 2 drinks</li>
      </ul>

      <h2>Character Pick Rules</h2>
      <ul>
        <li><strong>Same character as someone else wanted:</strong> Duel for it (coin flip, loser drinks)</li>
        <li><strong>Play as your main:</strong> Double penalties if you lose</li>
        <li><strong>Random character:</strong> Win = give out 3 extra drinks at end</li>
        <li><strong>Waluigi:</strong> WAH every time you win something or drink</li>
      </ul>

      <h2>Variants</h2>

      <h3>Chaos Mode</h3>
      <ul>
        <li>Every red space = community drink</li>
        <li>Every ? space = mini drinking game</li>
        <li>Every star = waterfall led by buyer</li>
      </ul>

      <h3>Last Place Curse</h3>
      <ul>
        <li>Player in last place after each turn: Must drink on their next action</li>
        <li>Curse passes to new last place player</li>
        <li>Break the curse by winning a mini-game</li>
      </ul>

      <h3>Star Hunter</h3>
      <ul>
        <li>First to each star gets immunity next mini-game</li>
        <li>Miss a star = double drinks until you get one</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=mario+party+superstars+switch&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Mario Party Superstars</h4>
          <p className="text-gray-400 text-sm">Best for drinking games</p>
          <span className="text-neon-pink font-bold">$50-60</span>
        </a>
        <a href="https://www.amazon.com/s?k=nintendo+switch+controllers+4+pack&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Joy-Con Set</h4>
          <p className="text-gray-400 text-sm">Need 4 controllers</p>
          <span className="text-neon-pink font-bold">$80-100</span>
        </a>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Friendship Warning</h3>
        <p className="text-gray-300">
          Mario Party + alcohol = maximum salt potential. Star steals hit different
          when everyone&apos;s been drinking. Have snacks ready, take breaks, and remember
          it&apos;s just a game. (Until someone steals your star. Then it&apos;s war.)
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Nintendo Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/drunk-mario-kart-rules"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Drunk Mario Kart →
          </Link>
          <Link
            href="/guides/smash-bros-drinking-game"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Smash Bros Drinking
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
