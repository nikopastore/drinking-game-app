import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Easter Drinking Games: Adult Egg Hunt Party (2025)",
  description: "Easter drinking games for adults! Boozy egg hunts, bunny-themed games, and brunch drinking ideas. Make Easter Sunday fun for grown-ups.",
  keywords: [
    "easter drinking games",
    "adult easter party",
    "boozy egg hunt",
    "easter brunch drinking",
    "easter party games",
    "adult easter ideas",
  ],
  openGraph: {
    title: "Easter Drinking Games",
    description: "Adult Easter celebration games.",
    type: "article",
    url: "https://sipwiki.app/guides/easter-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/easter-drinking-games",
  },
};

export default function EasterDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Easter Drinking Games: Adult Celebration"
      description="Who says Easter is just for kids? Turn the holiday into an adult celebration with boozy egg hunts, bunny-themed games, and brunch drinking activities. Hippity hoppity, drinks are your property."
      breadcrumb="Easter Games"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "With pastel cups" },
        { name: "Flip Cup", slug: "flip-cup", description: "Team competition" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Family questions" },
      ]}
    >
      <QuickAnswer
        question="What drinking games are good for Easter?"
        answer="Adult Egg Hunt: Plastic eggs with drinking challenges inside. Egg Decorating Contest: Worst egg drinks. Bunny Hop Relay: Hop while holding drinks. Easter Movie Drinking: Drink to classic Easter movies. Egg Roulette: One egg is raw, the rest are hardboiled. Jelly Bean Roulette: Mystery flavors with drink stakes."
        tips={[
          "Boozy egg hunts are surprisingly fun",
          "Brunch cocktails work great (mimosas, Bloody Marys)",
          "Keep it light - it's a Sunday funday",
          "Pastel decorations set the mood"
        ]}
        variant="primary"
      />

      <h2>Essential Easter Drinks</h2>
      <ul>
        <li><strong>Mimosas:</strong> The brunch classic</li>
        <li><strong>Bloody Marys:</strong> For savory lovers</li>
        <li><strong>Bellinis:</strong> Peach prosecco perfection</li>
        <li><strong>Spring cocktails:</strong> Anything with fresh fruit</li>
        <li><strong>Rosé:</strong> Perfect for spring weather</li>
      </ul>

      <h2>Adult Easter Egg Hunt</h2>
      <p>The main event - but for grown-ups:</p>
      <ol>
        <li>Fill plastic eggs with slips of paper</li>
        <li>Each slip has a drinking challenge or prize</li>
        <li>Hide eggs around the yard/house</li>
        <li>Hunters collect eggs</li>
        <li>Open and complete challenges</li>
      </ol>

      <h3>Egg Challenge Ideas</h3>
      <ul>
        <li>"Take 2 sips"</li>
        <li>"Assign 3 drinks to someone"</li>
        <li>"Take a shot"</li>
        <li>"Start a waterfall"</li>
        <li>"Switch drinks with someone"</li>
        <li>"Make a rule for the party"</li>
        <li>"Free pass - skip any drink today"</li>
        <li>"Do your best bunny impression or drink"</li>
      </ul>

      <h3>Golden Egg</h3>
      <p>Hide one special golden egg with the ultimate prize - maybe the loser has to buy brunch next year, or they get to assign 10 drinks.</p>

      <h2>Egg Roulette</h2>
      <p>A risky game with real eggs:</p>
      <ol>
        <li>Hardboil most eggs, leave 1-2 raw</li>
        <li>Place them in a bowl</li>
        <li>Take turns picking an egg and cracking it on your forehead</li>
        <li>Raw egg = you drink AND you're covered in egg</li>
        <li>Hardboiled = you're safe</li>
      </ol>
      <p>Play outside or have towels ready!</p>

      <h2>Egg Decorating Contest</h2>
      <p>Arts and crafts with stakes:</p>
      <ol>
        <li>Everyone decorates an egg</li>
        <li>Set a time limit (10-15 minutes)</li>
        <li>Anonymous vote for best and worst</li>
        <li>Worst egg = drinks</li>
        <li>Best egg = assigns drinks</li>
      </ol>

      <h2>Jelly Bean Roulette</h2>
      <p>Use Bean Boozled or similar mystery jelly beans:</p>
      <ul>
        <li>Pick a jelly bean without looking</li>
        <li>Eat it - it's either delicious or disgusting</li>
        <li>Gross flavor = take a drink to wash it down</li>
        <li>Good flavor = assign a drink</li>
        <li>Spit it out = finish your drink</li>
      </ul>

      <h2>Bunny Hop Relay</h2>
      <p>Physical comedy with drinks:</p>
      <ol>
        <li>Split into teams</li>
        <li>Each person hops (bunny style) to the end and back</li>
        <li>While holding a drink - can't spill!</li>
        <li>Spill = drink what's left and refill</li>
        <li>Losing team does a shot together</li>
      </ol>

      <h2>Easter Movie Drinking Game</h2>
      <p>For classic Easter movies:</p>

      <h3>General Easter Movie Rules</h3>
      <ul>
        <li>Easter bunny appears = drink 1</li>
        <li>Eggs shown = drink 1</li>
        <li>"Easter" said = drink 1</li>
        <li>Family drama = drink 2</li>
        <li>Religious reference = social drink</li>
        <li>Character eats chocolate = drink 1</li>
      </ul>

      <h2>Peeps Challenge</h2>
      <p>Using the marshmallow treats:</p>
      <ul>
        <li>Race to eat 5 Peeps = loser drinks</li>
        <li>Guess the Peep flavor blindfolded = wrong = drink</li>
        <li>Microwave a Peep = whoever's expands most assigns drinks</li>
        <li>Stack Peeps tower = collapse = drink</li>
      </ul>

      <h2>Easter Brunch Bingo</h2>
      <p>Create bingo cards with brunch moments:</p>
      <ul>
        <li>Someone mentions church</li>
        <li>Kid throws a tantrum</li>
        <li>Someone asks about your love life</li>
        <li>Ham is served</li>
        <li>Someone takes a food photo</li>
        <li>Relative overshares</li>
        <li>Someone naps after eating</li>
      </ul>
      <p>Bingo = assign 5 drinks</p>

      <h2>Egg and Spoon Race</h2>
      <ol>
        <li>Balance an egg on a spoon</li>
        <li>Race to a finish line and back</li>
        <li>Drop the egg = drink and restart</li>
        <li>Winner assigns drinks to all losers</li>
      </ol>
      <p>Use hardboiled eggs unless you want chaos!</p>

      <h2>Pastel King's Cup</h2>
      <p>Classic <Link href="/game/kings-cup" className="text-neon-pink hover:underline">King's Cup</Link> with Easter themes:</p>
      <ul>
        <li>Use pastel-colored cups</li>
        <li>King's Cup = spring cocktail</li>
        <li>Categories: Easter candy, spring flowers, rabbit breeds</li>
        <li>Never Have I Ever: Easter edition</li>
      </ul>

      <h2>Party Setup Tips</h2>
      <ul>
        <li><strong>Decor:</strong> Pastel colors, spring flowers, bunny decorations</li>
        <li><strong>Dress code:</strong> Sunday best or bunny ears</li>
        <li><strong>Food:</strong> Brunch spread, Easter candy, deviled eggs</li>
        <li><strong>Music:</strong> Light spring playlist</li>
        <li><strong>Timing:</strong> After any family obligations end</li>
      </ul>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Family Tip:</strong> If you're doing adult games at a family gathering, keep
          them separate from kid activities. The adult egg hunt should happen after the kids
          are done and maybe napping.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Holiday Drinking Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/christmas-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            Christmas Games →
          </Link>
          <Link
            href="/guides/thanksgiving-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            Thanksgiving Games →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
