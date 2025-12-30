import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halloween Drinking Games 2025: Spooky Party Games & Costumes",
  description: "Get spooky with the best Halloween drinking games for 2025! Costume-based games, horror movie drinking rules, and themed party ideas for an unforgettable Halloween.",
  keywords: [
    "Halloween drinking games",
    "Halloween party games",
    "spooky drinking games",
    "costume drinking games",
    "horror movie drinking game",
    "Halloween 2025 party",
    "scary drinking games",
    "Halloween party ideas"
  ],
  openGraph: {
    title: "Halloween Drinking Games 2025: The Spooky Party Guide",
    description: "Make your Halloween party legendary with these spooky drinking games.",
    type: "article",
    url: "https://sipwiki.app/blog/seasonal/halloween-drinking-games-2025",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/seasonal/halloween-drinking-games-2025",
  },
};

export default function HalloweenDrinkingGames2025Page() {
  return (
    <BlogLayout
      title="Halloween Drinking Games 2025: The Ultimate Spooky Party Guide"
      description="From costume-based drinking rules to horror movie games, make your Halloween party terrifyingly fun with these spooky drinking games and party ideas."
      author="game-master"
      publishDate="2025-10-01"
      category="Seasonal"
      categorySlug="seasonal"
      readTime="14 min"
      tableOfContents={[
        { id: "costume-games", title: "Costume-Based Games" },
        { id: "horror-movies", title: "Horror Movie Drinking Games" },
        { id: "themed-games", title: "Halloween Themed Games" },
        { id: "party-games", title: "Party Games" },
        { id: "drinks", title: "Spooky Drinks & Potions" },
        { id: "decorations", title: "Party Setup" },
      ]}
      relatedArticles={[
        { title: "Halloween Drinking Games Guide", slug: "../../guides/halloween-drinking-games", description: "Complete Halloween games guide" },
        { title: "Movie Drinking Games", slug: "../../guides/movie-drinking-games", description: "Games for any movie" },
        { title: "House Party Drinking Games", slug: "../../guides/house-party-drinking-games", description: "Games for parties" },
      ]}
    >
      <p className="lead">
        Halloween is the one night a year where costumes, candy, and cocktails collide.
        Whether you&apos;re hosting a spooky house party or having a horror movie marathon,
        these drinking games will make your Halloween 2025 absolutely legendary.
      </p>

      <div className="bg-gradient-to-r from-orange-900/30 to-purple-900/30 p-6 rounded-xl border border-dark-600 my-8">
        <h3 className="text-lg font-bold text-white mb-2">🎃 Halloween 2025</h3>
        <p className="text-gray-300">
          Halloween falls on a <strong>Friday</strong> this year! Perfect for an all-night
          party without worrying about work the next day. Start planning your costume now!
        </p>
      </div>

      <h2 id="costume-games">Costume-Based Drinking Games</h2>

      <h3>Costume Bingo</h3>
      <p>Create bingo cards with common costumes and drink when you spot them:</p>
      <ul>
        <li>Sexy cat</li>
        <li>Pop culture character from this year</li>
        <li>Couples costume</li>
        <li>Inflatable costume</li>
        <li>Someone who &quot;didn&apos;t have time&quot; for a costume</li>
        <li>Group costume</li>
        <li>Punny costume</li>
        <li>Last-minute sheet ghost</li>
      </ul>
      <p><strong>Get a line = give out 5 drinks. Blackout = everyone takes a shot.</strong></p>

      <h3>Costume Category Rules</h3>
      <p>Assign drinking rules based on costume type:</p>
      <ul>
        <li><strong>Superheroes:</strong> Can give out drinks (they&apos;re powerful)</li>
        <li><strong>Villains:</strong> Take a drink every time a hero gives them one</li>
        <li><strong>Animals:</strong> Must make animal sounds when drinking</li>
        <li><strong>Zombies:</strong> Can only hold drinks with one hand (the &quot;dead&quot; hand)</li>
        <li><strong>Vampires:</strong> Can only drink red drinks</li>
        <li><strong>Ghosts:</strong> Must say &quot;boo&quot; before drinking</li>
        <li><strong>Witches/Wizards:</strong> Can cast &quot;spells&quot; (make rules) once per hour</li>
      </ul>

      <h3>Costume Contest Drinking Game</h3>
      <ul>
        <li>Everyone votes for best costume</li>
        <li>Each vote you receive = give out that many drinks</li>
        <li>Winner gets to make a rule for the rest of the night</li>
        <li>Worst costume takes a punishment shot</li>
      </ul>

      <h3>Guess My Costume</h3>
      <ul>
        <li>Player acts out their costume without talking</li>
        <li>Others guess what it is</li>
        <li>Wrong guesses = guesser drinks</li>
        <li>Give up? = Actor drinks</li>
        <li>Correct guess = both give out drinks</li>
      </ul>

      <h2 id="horror-movies">Horror Movie Drinking Games</h2>

      <h3>Universal Horror Movie Rules</h3>
      <p>These rules work for any horror movie:</p>
      <ul>
        <li><strong>Jump scare:</strong> Everyone drinks</li>
        <li><strong>&quot;I&apos;ll be right back&quot;:</strong> Drink (they won&apos;t be back)</li>
        <li><strong>Character investigates a noise:</strong> Drink</li>
        <li><strong>Phone/flashlight dies:</strong> 2 drinks</li>
        <li><strong>Car won&apos;t start:</strong> Finish your drink</li>
        <li><strong>Someone trips while running:</strong> 2 drinks</li>
        <li><strong>The killer &quot;dies&quot; but isn&apos;t dead:</strong> Take a shot</li>
        <li><strong>Sex scene interrupted by killer:</strong> Everyone drinks</li>
        <li><strong>Final girl survives:</strong> Toast and drink</li>
      </ul>

      <h3>Specific Movie Rules</h3>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Scream</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• Ghostface calls someone: Drink</li>
          <li>• Someone mentions horror movie rules: 2 drinks</li>
          <li>• &quot;What&apos;s your favorite scary movie?&quot;: Take a shot</li>
          <li>• Someone gets stabbed: Drink</li>
          <li>• Red herring suspect: Drink</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">The Conjuring/Annabelle</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• Ed and Lorraine hold hands: Drink</li>
          <li>• Someone says &quot;Annabelle&quot;: Drink</li>
          <li>• Door opens/closes on its own: 2 drinks</li>
          <li>• Clapping game: Everyone claps and drinks</li>
          <li>• Exorcism scene: Waterfall</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">A Quiet Place</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• Complete silence for 30+ seconds: Everyone stays quiet and sips</li>
          <li>• Someone makes a loud noise: Drink quickly</li>
          <li>• Sign language used: Learn a sign and drink</li>
          <li>• Monster appears: 2 drinks</li>
          <li>• Baby almost cries: Hold your breath and drink when it stops</li>
        </ul>
      </div>

      <h2 id="themed-games">Halloween Themed Classic Games</h2>

      <h3>Monster Mash Pong</h3>
      <p>Halloween-themed <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link>:</p>
      <ul>
        <li>Use orange and black cups</li>
        <li>Write monster names on cups (Dracula, Frankenstein, etc.)</li>
        <li>When you sink &quot;Dracula&quot;: Opponent must drink like a vampire (fangs optional)</li>
        <li>When you sink &quot;Werewolf&quot;: Opponent howls and drinks</li>
        <li>When you sink &quot;Zombie&quot;: Opponent plays with one hand for next turn</li>
      </ul>

      <h3>Haunted Kings Cup</h3>
      <p>Spooky version of <Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup</Link>:</p>
      <ul>
        <li><strong>Ace - Ghost:</strong> Invisible - skip your turn</li>
        <li><strong>2 - Boo:</strong> Give 2 drinks</li>
        <li><strong>3 - Zombie:</strong> Take 3 drinks</li>
        <li><strong>4 - Werewolf:</strong> Howl and give 4 drinks</li>
        <li><strong>5 - Vampire:</strong> Suck drinks from others (take from their cups)</li>
        <li><strong>6 - Witch:</strong> Cast a spell (make a rule)</li>
        <li><strong>7 - Skeleton:</strong> Dance like bones and drink</li>
        <li><strong>8 - Monster:</strong> Pick a mate who drinks with you</li>
        <li><strong>9 - Mummy:</strong> Rhyme game</li>
        <li><strong>10 - Pumpkin:</strong> Categories (Halloween themed)</li>
        <li><strong>Jack - Frankenstein:</strong> All guys drink</li>
        <li><strong>Queen - Bride:</strong> All girls drink</li>
        <li><strong>King - Death:</strong> Pour into center cup</li>
      </ul>

      <h3>Trick or Drink</h3>
      <p>A Halloween twist on Truth or Dare:</p>
      <ul>
        <li><strong>Trick:</strong> Do a dare or take 3 drinks</li>
        <li><strong>Treat:</strong> Answer a question or give out 3 drinks</li>
        <li>Halloween-themed dares: ghost impression, spooky story, scary sound</li>
        <li>Halloween questions: worst costume ever worn, scariest movie, etc.</li>
      </ul>

      <h2 id="party-games">Party Games</h2>

      <h3>Bobbing for... Shots</h3>
      <ul>
        <li>Float mini sealed bottles/shooters in a tub</li>
        <li>Bob for them hands-free</li>
        <li>Whatever you grab, you drink</li>
        <li>Option: Some are treats (Fireball), some are tricks (Malört)</li>
      </ul>

      <h3>Mummy Wrap Race</h3>
      <ul>
        <li>Teams of 2</li>
        <li>One person wraps the other in toilet paper (mummy)</li>
        <li>First complete mummy wins</li>
        <li>Losers drink, but mummies can&apos;t use their hands</li>
      </ul>

      <h3>Monster Freeze Dance</h3>
      <ul>
        <li>Dance when music plays</li>
        <li>Freeze in a monster pose when it stops</li>
        <li>Last to freeze = drinks</li>
        <li>Best pose each round = gives out drinks</li>
      </ul>

      <h2 id="drinks">Spooky Drinks & Potions</h2>

      <h3>Signature Halloween Cocktails</h3>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Witch&apos;s Brew</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• 1 part vodka</li>
          <li>• 2 parts grape juice</li>
          <li>• Splash of lime juice</li>
          <li>• Dry ice for smoking effect (don&apos;t drink the ice!)</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Blood Punch (Batch)</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• 1 bottle rum</li>
          <li>• 2 liters cranberry juice</li>
          <li>• 1 liter ginger ale</li>
          <li>• Frozen hand mold (freeze water in rubber glove)</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Poison Apple Shot</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• 1 oz apple vodka</li>
          <li>• 1 oz sour apple schnapps</li>
          <li>• Splash of grenadine (sinks to bottom)</li>
        </ul>
      </div>

      <h3>Creepy Presentation Ideas</h3>
      <ul>
        <li>Serve drinks in beakers and test tubes</li>
        <li>Freeze gummy worms in ice cubes</li>
        <li>Use syringes to inject shots</li>
        <li>Label bottles with potion names</li>
        <li>Serve punch in a cauldron</li>
      </ul>

      <h2 id="decorations">Party Setup</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=halloween+party+decorations&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Halloween Decoration Kit</h4>
          <p className="text-gray-400 text-sm">Complete party setup</p>
          <span className="text-neon-pink font-bold">$25-50</span>
        </a>
        <a href="https://www.amazon.com/s?k=halloween+cups+party&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Spooky Party Cups</h4>
          <p className="text-gray-400 text-sm">Orange and black cups</p>
          <span className="text-neon-pink font-bold">$12-20</span>
        </a>
        <a href="https://www.amazon.com/s?k=dry+ice+machine+fog&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Fog Machine</h4>
          <p className="text-gray-400 text-sm">Spooky atmosphere</p>
          <span className="text-neon-pink font-bold">$30-60</span>
        </a>
        <a href="https://www.amazon.com/s?k=led+candles+halloween&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">LED Candles</h4>
          <p className="text-gray-400 text-sm">Safe flickering candlelight</p>
          <span className="text-neon-pink font-bold">$15-25</span>
        </a>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Costume Safety Tip</h3>
        <p className="text-gray-300">
          If your costume includes a mask, be careful about vision and breathing while drinking.
          Consider face paint instead. And if you have long flowing costume pieces, keep them
          away from candles and the stove!
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Have a Spooktacular Halloween! 🎃</h3>
        <p className="text-gray-400 mb-4">
          Check out more party games and movie drinking games.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/halloween-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Halloween Games Guide →
          </Link>
          <Link
            href="/guides/movie-drinking-games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Movie Drinking Games
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
