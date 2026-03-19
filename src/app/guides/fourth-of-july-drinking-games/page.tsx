import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "4th of July Drinking Games (2024) | Independence Day Party",
  description: "Best drinking games for July 4th! Complete guide with patriotic games, BBQ activities, firework drinking rules, and all-American party games.",
  keywords: ["4th of july drinking games", "fourth of july drinking games", "independence day drinking games", "july 4th party games", "patriotic drinking games", "fireworks drinking game"],
  openGraph: { title: "4th of July Drinking Games", description: "USA! USA! Drink!", type: "article", url: "https://sipwiki.app/guides/fourth-of-july-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/fourth-of-july-drinking-games" },
};

export default function FourthOfJulyDrinkingGamesPage() {
  return (
    <GuideLayout title="4th of July Drinking Games" description="Celebrate America's birthday with red, white, and booze! These patriotic games are perfect for BBQs, rooftops, backyards, and anywhere you're watching fireworks." breadcrumb="4th of July" relatedGames={[{ name: "Flip Cup", slug: "flip-cup", description: "USA vs USA" }, { name: "Beer Pong", slug: "beer-pong", description: "Backyard classic" }, { name: "Rage Cage", slug: "rage-cage", description: "High energy" }]}>
      <h2>The 4th of July Party Arc</h2>
      <p>Independence Day parties have a natural flow:</p>
      <ul>
        <li><strong>Afternoon BBQ</strong> - Lawn games, casual drinking</li>
        <li><strong>Pre-fireworks</strong> - Games pick up intensity</li>
        <li><strong>Fireworks</strong> - Watch and drink to the show</li>
        <li><strong>After dark</strong> - Party continues</li>
      </ul>

      <h2>Patriotic Team Games</h2>

      <h3>Red vs Blue Flip Cup</h3>
      <p>Divide into two teams for the ultimate showdown.</p>
      <ul>
        <li>Half the group is Team Red, half is Team Blue</li>
        <li>Standard flip cup rules</li>
        <li>Best of 7 rounds</li>
        <li>Losing team does a patriotic forfeit (sing anthem, do push-ups)</li>
        <li>Use red and blue solo cups for authenticity</li>
      </ul>
      <p><Link href="/games/flip-cup" className="text-neon-pink">Flip Cup rules →</Link></p>

      <h3>Presidential Relay</h3>
      <p>Name all the presidents - a true American challenge.</p>
      <ul>
        <li>Teams race to name presidents in order</li>
        <li>Each person names one, passes to teammate</li>
        <li>Wrong order or repeat = team drinks and restarts</li>
        <li>First team to all 46 wins</li>
        <li>Winning team assigns drinks based on how far losers got</li>
      </ul>

      <h3>State Capital Challenge</h3>
      <p>How well do you know America?</p>
      <ul>
        <li>Someone names a state</li>
        <li>First to yell the capital wins</li>
        <li>Wrong answer = drink 2</li>
        <li>No answer in 10 seconds = everyone drinks</li>
        <li>Go through all 50 for the ultimate showdown</li>
      </ul>

      <h2>BBQ/Backyard Games</h2>

      <h3>Beer Pong Tournament</h3>
      <p>The backyard essential with 4th of July rules.</p>
      <ul>
        <li>Standard beer pong setup</li>
        <li>Winners stay on, losers rotate out</li>
        <li>Championship match uses red, white, and blue cups</li>
        <li>Declaration: announce your shot before taking it</li>
      </ul>
      <p><Link href="/games/beer-pong" className="text-neon-pink">Beer Pong rules →</Link></p>

      <h3>Patriotic Cornhole</h3>
      <p>America&apos;s lawn game with drinking stakes.</p>
      <ul>
        <li>Standard cornhole scoring (3 for in hole, 1 for on board)</li>
        <li>Losing team drinks the point difference</li>
        <li>Perfect game (21-0) = losers do a waterfall</li>
        <li>Hit the board with a bald eagle throw = automatic 5 points</li>
      </ul>

      <h3>Kan Jam with Drinks</h3>
      <ul>
        <li>Standard Kan Jam rules</li>
        <li>Slot hit = opponents finish drinks</li>
        <li>Deflection goal = opponents drink 2</li>
        <li>Missed throw = thrower drinks</li>
      </ul>

      <h3>Horseshoes</h3>
      <ul>
        <li>Ringer = opponents drink 3</li>
        <li>Leaner = opponents drink 2</li>
        <li>Closest to stake = opponents drink 1</li>
        <li>Complete miss = you drink</li>
      </ul>

      <h2>USA Trivia Games</h2>

      <h3>Founding Fathers Trivia</h3>
      <p>Questions about American history:</p>
      <ul>
        <li>Who wrote the Declaration of Independence? (Jefferson)</li>
        <li>Year of independence? (1776)</li>
        <li>How many original colonies? (13)</li>
        <li>Who said &quot;Give me liberty or give me death&quot;? (Patrick Henry)</li>
        <li>Wrong answer = drink</li>
      </ul>

      <h3>American Pop Culture</h3>
      <ul>
        <li>Name the 50 states (drink for each one you miss)</li>
        <li>American movies, bands, sports teams</li>
        <li>Name cities in each state</li>
        <li>National parks trivia</li>
      </ul>

      <h3>Presidential Drinking Trivia</h3>
      <ul>
        <li>Which president appears on which bill/coin?</li>
        <li>Match presidents to their eras</li>
        <li>First name of each president</li>
        <li>Wrong answer = patriotic drink</li>
      </ul>

      <h2>Fireworks Drinking Game</h2>
      <p>When the show starts, the drinking rules kick in.</p>

      <h3>Color Rules</h3>
      <ul>
        <li><strong>Red firework</strong> - People with red cups drink</li>
        <li><strong>White/silver firework</strong> - Everyone takes a sip</li>
        <li><strong>Blue firework</strong> - People with blue cups drink</li>
        <li><strong>Gold/yellow firework</strong> - Give a drink to someone</li>
        <li><strong>Green firework</strong> - Waterfall until it fades</li>
        <li><strong>Purple firework</strong> - Everyone cheers and drinks</li>
      </ul>

      <h3>Shape Rules</h3>
      <ul>
        <li><strong>Heart or smiley</strong> - Toast to America</li>
        <li><strong>Huge burst</strong> - Drink for the whole explosion</li>
        <li><strong>Crackle/sparkle</strong> - Take tiny sips while it sparkles</li>
        <li><strong>Whistle on the way up</strong> - Everyone says &quot;wheeeee&quot; and drinks</li>
      </ul>

      <h3>Finale Rules</h3>
      <ul>
        <li>Grand finale starts = everyone starts drinking</li>
        <li>Keep drinking until it&apos;s completely over</li>
        <li>First person to stop = buys next round</li>
        <li>Last person still drinking = assigns a round</li>
      </ul>

      <h2>All-Day Drinking Tips</h2>

      <h3>Pacing for a Long Day</h3>
      <ul>
        <li>Start light in the afternoon heat</li>
        <li>Hydrate between drinks (summer heat is real)</li>
        <li>Eat BBQ - protein and carbs help</li>
        <li>Save the heavy drinking for after dark</li>
        <li>Sunscreen - drunk sunburn is the worst</li>
      </ul>

      <h3>Drink Ideas</h3>
      <ul>
        <li><strong>Beer</strong> - The classic American choice</li>
        <li><strong>Hard seltzer</strong> - Light for hot days</li>
        <li><strong>Red, white, and blue cocktails</strong> - Layered drinks</li>
        <li><strong>Jello shots</strong> - Make them in flag colors</li>
        <li><strong>Sangria</strong> - Batch cocktail for crowds</li>
      </ul>

      <h3>Patriotic Cocktails</h3>
      <ul>
        <li><strong>American Flag Shot</strong> - Layered grenadine, blue curacao, cream</li>
        <li><strong>Firecracker</strong> - Vodka, blue curacao, lemonade</li>
        <li><strong>Red, White, and Booze</strong> - Strawberry vodka, coconut rum, blue curacao</li>
      </ul>

      <h2>Party Setup</h2>
      <ul>
        <li>Red, white, and blue decorations (obviously)</li>
        <li>American flag everything</li>
        <li>Lawn games set up</li>
        <li>Coolers stocked and accessible</li>
        <li>Shade available (pop-up tents)</li>
        <li>Good view of fireworks</li>
        <li>Bluetooth speaker with patriotic playlist</li>
        <li>Bug spray station</li>
      </ul>

      <h2>Safety Notes</h2>
      <ul>
        <li><strong>No drunk fireworks</strong> - Leave pyrotechnics to professionals or the sober</li>
        <li><strong>Heat exhaustion</strong> - Watch for signs, especially while drinking</li>
        <li><strong>Designated drivers</strong> - Plan rides home</li>
        <li><strong>Grill safety</strong> - Keep drunk people away from the grill</li>
        <li><strong>Pool safety</strong> - If there&apos;s a pool, be extra careful</li>
      </ul>

      <p>More holiday games: <Link href="/guides/super-bowl-drinking-games" className="text-neon-pink hover:underline">Super Bowl games</Link> | <Link href="/guides/tailgate-drinking-games" className="text-neon-pink hover:underline">tailgate games</Link></p>
    </GuideLayout>
  );
}
