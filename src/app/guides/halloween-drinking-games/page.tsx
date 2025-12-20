import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halloween Drinking Games (2024) | Spooky Party Games",
  description: "Spooky drinking games for Halloween parties! Complete guide with horror movie games, costume contests, themed challenges, and October 31st party ideas.",
  keywords: ["halloween drinking games", "spooky drinking games", "halloween party games", "horror movie drinking game", "costume party drinking games", "october drinking games"],
  openGraph: { title: "Halloween Drinking Games", description: "Get spooky!", type: "article", url: "https://sipwiki.app/guides/halloween-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/halloween-drinking-games" },
};

export default function HalloweenPage() {
  return (
    <GuideLayout title="Halloween Drinking Games" description="Halloween parties need more than costumes - they need games! These spooky-themed drinking games will haunt your guests in the best way possible." breadcrumb="Halloween Games" relatedGames={[{ name: "Medusa", slug: "medusa", description: "Spooky eye contact" }, { name: "Kings Cup", slug: "kings-cup", description: "Horror themed" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Scary edition" }]}>
      <h2>Horror Movie Drinking Games</h2>
      <p>The heart of any Halloween night - drink to classic horror tropes:</p>

      <h3>Universal Horror Movie Rules</h3>
      <p>These rules work for almost any horror movie:</p>
      <ul>
        <li>Someone investigates a noise alone - drink 1</li>
        <li>Someone says &quot;Hello?&quot; into darkness - drink 1</li>
        <li>Character dies - drink 2</li>
        <li>Jump scare - drink 1</li>
        <li>False scare (it&apos;s just a cat) - drink 2</li>
        <li>Someone trips while running - drink 1</li>
        <li>Phone/car doesn&apos;t work - drink 1</li>
        <li>&quot;We should split up&quot; - drink 3</li>
        <li>Final girl survives - toast and finish drinks</li>
      </ul>

      <h3>Scream (1996)</h3>
      <ul>
        <li>&quot;What&apos;s your favorite scary movie?&quot; - drink 2</li>
        <li>Meta horror reference - drink 1</li>
        <li>Ghostface appears - drink 1</li>
        <li>Someone suspects wrong person - drink 1</li>
        <li>Horror movie rule is explained - drink 2</li>
      </ul>

      <h3>Hocus Pocus</h3>
      <ul>
        <li>A sister says another sister&apos;s name - drink 1</li>
        <li>Binx talks - drink 1</li>
        <li>Virgin joke - drink 2</li>
        <li>A sister gets confused by modern things - drink 1</li>
        <li>&quot;I Put a Spell on You&quot; scene - drink throughout</li>
      </ul>

      <h3>Friday the 13th / Nightmare on Elm Street / Halloween</h3>
      <ul>
        <li>Killer appears - drink 1</li>
        <li>Someone has sex - drink 2 (they&apos;re gonna die)</li>
        <li>Someone drinks/does drugs - drink 1 (they&apos;re gonna die)</li>
        <li>Iconic music plays - drink 1</li>
        <li>Body count increases - drink per body</li>
      </ul>

      <h2>Costume Games</h2>

      <h3>Costume Contest Drinking</h3>
      <p>When voting on costumes:</p>
      <ul>
        <li>If your costume gets no votes - drink 2</li>
        <li>Winner assigns drinks equal to number of votes received</li>
        <li>&quot;What are you supposed to be?&quot; asked - the asker drinks</li>
        <li>Two people have similar costumes - both drink</li>
      </ul>

      <h3>Costume Bingo</h3>
      <p>Create bingo cards with common costumes (witch, vampire, cat, superhero, etc.). When you spot one, mark it and assign a drink. Bingo = assign 5 drinks.</p>

      <h3>Guess the Costume</h3>
      <p>If you can&apos;t identify someone&apos;s costume within 3 guesses, you drink. If no one can guess your costume, YOU drink.</p>

      <h3>Drink If You See</h3>
      <p>Throughout the night, drink when you spot:</p>
      <ul>
        <li>Cat ears - drink 1</li>
        <li>Sexy version of a non-sexy thing - drink 2</li>
        <li>Couples costume - both people drink</li>
        <li>Pop culture reference from this year - drink 1</li>
        <li>Costume that&apos;s actually scary - drink 2 (rare!)</li>
      </ul>

      <h2>Spooky-Themed Classic Games</h2>

      <h3>Medusa (Perfect for Halloween!)</h3>
      <p>The game is literally named after a monster. Everyone looks down, then up on command. Lock eyes with someone = both drink. The spooky eye contact fits perfectly.</p>
      <p><Link href="/game/medusa" className="text-neon-pink">Play Medusa →</Link></p>

      <h3>Witch&apos;s Brew Kings Cup</h3>
      <p>Play <Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> with the center cup renamed &quot;Witch&apos;s Brew.&quot; Use a cauldron-style cup. Fourth King drinks the potion.</p>
      <p>Halloween rule additions:</p>
      <ul>
        <li>Ace = Graveyard (Waterfall)</li>
        <li>2 = Boo (scare someone, they drink)</li>
        <li>Jack = Monster Mash (everyone dances or drinks)</li>
      </ul>

      <h3>Never Have I Ever: Scary Edition</h3>
      <ul>
        <li>Never have I ever seen a ghost (or thought I did)</li>
        <li>Never have I ever used a Ouija board</li>
        <li>Never have I ever slept with the lights on as an adult</li>
        <li>Never have I ever been to a haunted house and cried</li>
        <li>Never have I ever dressed as something &quot;sexy&quot; for Halloween</li>
      </ul>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink">Play Never Have I Ever →</Link></p>

      <h3>Most Likely To: Halloween Edition</h3>
      <ul>
        <li>Who&apos;s most likely to die first in a horror movie?</li>
        <li>Who&apos;s most likely to befriend a ghost?</li>
        <li>Who&apos;s most likely to investigate a strange noise?</li>
        <li>Who&apos;s most likely to survive the zombie apocalypse?</li>
        <li>Who&apos;s most likely to read from a cursed book?</li>
      </ul>
      <p><Link href="/game/most-likely-to" className="text-neon-pink">Play Most Likely To →</Link></p>

      <h2>Decorating for Drinking Games</h2>
      <ul>
        <li><strong>Glow sticks in cups</strong> - Makes flip cup/rage cage spooky</li>
        <li><strong>Themed cup labels</strong> - Poison, potion, blood</li>
        <li><strong>Fog machine near game table</strong> - Atmosphere matters</li>
        <li><strong>Black lights</strong> - Everything looks more haunted</li>
        <li><strong>Spooky playlist</strong> - Monster Mash, Thriller, Ghostbusters</li>
      </ul>

      <h2>Halloween Drink Ideas</h2>
      <ul>
        <li><strong>Vampire&apos;s Kiss</strong> - Red cocktails</li>
        <li><strong>Witch&apos;s Brew</strong> - Green drinks with dry ice</li>
        <li><strong>Poison Apple</strong> - Apple cider with bourbon</li>
        <li><strong>Black cocktails</strong> - Use activated charcoal</li>
        <li><strong>Jello shots</strong> - In orange and black</li>
      </ul>

      <h2>Party Flow Tips</h2>
      <ul>
        <li><strong>Costume arrival games</strong> - Bingo and guessing as people arrive</li>
        <li><strong>Peak party</strong> - Medusa, Kings Cup, team games</li>
        <li><strong>Movie time</strong> - Horror movie drinking game to wind down</li>
        <li><strong>Have non-spooky options</strong> - Some people don&apos;t like horror</li>
      </ul>

      <p>More holiday games: <Link href="/guides/christmas-drinking-games" className="text-neon-pink hover:underline">Christmas games</Link> | <Link href="/guides/thanksgiving-drinking-games" className="text-neon-pink hover:underline">Thanksgiving games</Link></p>
    </GuideLayout>
  );
}
