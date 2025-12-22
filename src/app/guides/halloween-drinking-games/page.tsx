import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "20 Best Halloween Drinking Games (2024) | Spooky Party Games for Adults",
  description: "Halloween drinking games for adults! Horror movie drinking games, costume-based games, pumpkin beer pong, and spooky party ideas. Perfect for Halloween parties 2024!",
  keywords: ["halloween drinking games", "halloween party games for adults", "spooky drinking games", "horror movie drinking games", "halloween beer pong"],
  openGraph: { title: "20 Best Halloween Drinking Games", type: "article", url: "https://sipwiki.app/guides/halloween-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/halloween-drinking-games" },
};

export default function HalloweenDrinkingGamesPage() {
  return (
    <GuideLayout
      title="20 Best Halloween Drinking Games for Adults"
      description="Halloween isn't just for kids. These drinking games bring horror, costumes, and party energy together for an unforgettable spooky season celebration."
      breadcrumb="Halloween Drinking Games"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Add spooky rules" },
        { name: "Beer Pong", slug: "beer-pong", description: "Halloween themed" },
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Horror edition" },
      ]}
    >
      <QuickAnswer
        question="What are the best Halloween drinking games?"
        answer="Best Halloween drinking games: (1) Horror Movie Drinking Game - drink on jump scares, deaths, horror tropes, (2) Costume Kings Cup - card rules based on costume types, (3) Pumpkin Beer Pong - carved pumpkins as cup holders, (4) Halloween Never Have I Ever - spooky questions only, (5) Werewolf Mafia - social deduction with drinking. Horror movies: Halloween, Scream, Hocus Pocus. Costume games leverage what people wear. Halloweekend (last weekend October) = peak party time."
        tips={[
          "Horror movie drinking games = easy entertainment",
          "Use costumes as game mechanics",
          "Pumpkin Beer Pong is Instagram-worthy",
          "Halloweekend = peak party time"
        ]}
        variant="primary"
      />

      <h2>Horror Movie Drinking Games</h2>
      <p>Put on a horror movie, establish rules, drink when they happen. Perfect for getting the party started or winding down.</p>

      <h3>Classic Horror Rules (Works for Most Films)</h3>
      <ul>
        <li>Someone dies: everyone drinks</li>
        <li>Jump scare: drink if you jumped</li>
        <li>"Don't go in there!": character makes bad decision = drink</li>
        <li>Phone/power goes out: drink</li>
        <li>Someone says "Hello?": drink</li>
        <li>Weapon appears: drink</li>
        <li>Someone trips while running: finish your drink</li>
      </ul>

      <h3>Halloween (1978) Drinking Game</h3>
      <ul>
        <li>Michael Myers appears: drink</li>
        <li>Someone says "Michael": drink</li>
        <li>Halloween theme plays: drink</li>
        <li>Michael tilts his head: drink</li>
      </ul>

      <h3>Scream (1996) Drinking Game</h3>
      <ul>
        <li>Phone rings: drink</li>
        <li>Ghostface appears: drink</li>
        <li>Horror movie rules explained: drink</li>
        <li>"What's your favorite scary movie?": drink</li>
        <li>Killer revealed: finish your drink</li>
      </ul>

      <h3>Hocus Pocus (1993) - Family Friendly Horror</h3>
      <ul>
        <li>Sanderson Sisters sing: drink</li>
        <li>Someone says "virgin": drink</li>
        <li>Binx the cat talks: drink</li>
        <li>Spell is cast: drink</li>
        <li>Modern technology confuses witches: drink</li>
      </ul>

      <h2>Costume-Based Drinking Games</h2>

      <h3>Costume Kings Cup</h3>
      <p>Play <Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> with Halloween-themed rules based on costumes:</p>
      <ul>
        <li>Ace: All scary costumes drink</li>
        <li>2: Pick someone - they drink if costumes share theme</li>
        <li>3: All sexy costumes drink</li>
        <li>4: All pop culture costumes drink</li>
        <li>5: All guys drink</li>
        <li>6: All girls drink</li>
        <li>7: Most creative costume drinks (group votes)</li>
        <li>8: Pick costume buddy - drink together rest of game</li>
        <li>9: Costume category - name costumes (horror villains, etc.)</li>
        <li>10: All people who bought costume drink</li>
        <li>Jack: All people who made costume drink</li>
        <li>Queen: Couples costumes drink</li>
        <li>King: Pour into King's Cup (4th drinks it)</li>
      </ul>

      <h3>Costume Matching Game</h3>
      <ul>
        <li>On "go," mingle to find costume pairs (Batman finds Joker)</li>
        <li>After 2 minutes, anyone without match drinks</li>
        <li>Most creative match wins, assigns 3 drinks</li>
      </ul>

      <h2>Halloween-Themed Classic Games</h2>

      <h3>Pumpkin Beer Pong</h3>
      <p>Most Instagram-worthy Halloween game:</p>
      <ul>
        <li>Carve small/medium pumpkins as cup holders</li>
        <li>Place cups inside carved pumpkins</li>
        <li>Play <Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> normally</li>
        <li>Bonus: Hitting pumpkin rim = opponent drinks double</li>
        <li>Use orange/black cups, glow-in-the-dark balls</li>
      </ul>

      <h3>Zombie Flip Cup</h3>
      <ul>
        <li>Play <Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> normally</li>
        <li>Losing team becomes "zombies"</li>
        <li>Zombies flip with non-dominant hand next round</li>
        <li>Zombies win = cured. Lose again = add third penalty</li>
      </ul>

      <h3>Halloween Never Have I Ever</h3>
      <p>Spooky prompts only:</p>
      <ul>
        <li>Never have I ever been to haunted house</li>
        <li>Never have I ever seen a ghost</li>
        <li>Never have I ever dressed as sexy [something]</li>
        <li>Never have I ever gone trick-or-treating as adult</li>
        <li>Never have I ever watched horror movie alone</li>
        <li>Never have I ever believed in ghosts</li>
        <li>Never have I ever stolen Halloween candy</li>
      </ul>

      <h2>Spooky Original Games</h2>

      <h3>Werewolf Mafia (Drinking Edition)</h3>
      <ul>
        <li>Players assigned roles: Werewolves, Villagers, Seer, Doctor</li>
        <li>Night: Werewolves choose victim (player drinks 2)</li>
        <li>Day: Village votes to eliminate someone (they drink 3)</li>
        <li>Eliminated players are "ghosts" - drink whenever anyone drinks</li>
        <li>Continue until werewolves caught or villagers eliminated</li>
      </ul>

      <h3>Horror Trivia</h3>
      <ul>
        <li>Quiz on horror movies, Halloween history</li>
        <li>Wrong answer = drink</li>
        <li>First to 10 correct wins, assigns 5 drinks</li>
      </ul>

      <h3>Candy Corn Toss</h3>
      <ul>
        <li>Set up cups at various distances</li>
        <li>Toss candy corn into cups</li>
        <li>Make it = opponent drinks</li>
        <li>Miss = you drink</li>
        <li>Further cups = more drinks</li>
      </ul>

      <h2>Halloween Party Planning</h2>

      <h3>Themed Drinks</h3>
      <ul>
        <li>Witch's Brew: Green punch (Midori, lemonade, Sprite)</li>
        <li>Vampire's Kiss: Red punch (cranberry, vodka, grenadine)</li>
        <li>Pumpkin Beer: Seasonal ales</li>
        <li>Apple Cider: Spiked with cinnamon whiskey</li>
        <li>Jell-O Shots: Orange and black layers</li>
      </ul>

      <h3>Decorations for Games</h3>
      <ul>
        <li>Orange & black cups for Beer Pong</li>
        <li>Glow sticks for glow-in-the-dark cup markers</li>
        <li>LED candles for safe ambient lighting</li>
        <li>Carved pumpkins as functional cup holders</li>
        <li>Skull cups as novelty drinkware</li>
      </ul>

      <h3>Party Timeline</h3>
      <p><strong>Early (7-9pm):</strong> Costume Kings Cup, horror movie (Hocus Pocus), Halloween Never Have I Ever</p>
      <p><strong>Peak (9pm-12am):</strong> Pumpkin Beer Pong tournaments, Zombie Flip Cup, Werewolf Mafia, costume contests</p>
      <p><strong>Late (12am+):</strong> Scarier horror movies (Halloween, Scream), horror trivia, chill games</p>

      <h2>Halloweekend vs Halloween Night</h2>
      <p><strong>Halloweekend (Last Weekend October):</strong> Bar crawls, college parties peak, competitive tournaments. Best for large groups, going out.</p>
      <p><strong>Halloween Night (October 31):</strong> Intimate house parties, horror marathons, trick-or-treaters early then adult party. Best for close friends, themed decorations.</p>

      <h2>Safety Tips</h2>
      <ul>
        <li>Pace yourself - Halloween parties last 6+ hours</li>
        <li>Candy doesn't count as food - have pizza/snacks</li>
        <li>Alternate alcoholic drinks with water</li>
        <li>Avoid masks that restrict vision while drinking</li>
        <li>Arrange transportation beforehand</li>
        <li>All games work with non-alcoholic drinks</li>
      </ul>

      <p className="mt-8">
        Browse more: <Link href="/games" className="text-neon-pink">All Drinking Games</Link> | <Link href="/guides/drinking-games-for-parties" className="text-neon-pink">Party Games</Link>
      </p>
    </GuideLayout>
  );
}
