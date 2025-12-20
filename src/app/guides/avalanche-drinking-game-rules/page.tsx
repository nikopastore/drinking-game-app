import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Avalanche Drinking Game Rules (2024) | Dice Drinking Game",
  description: "Complete Avalanche drinking game rules! A fast-paced dice game where the cup builds until someone has to drink it all. Full rules, variations, and strategy.",
  keywords: ["avalanche drinking game", "avalanche rules", "avalanche dice game", "dice drinking game", "avalanche drinking game rules", "cup dice game"],
  openGraph: { title: "Avalanche Drinking Game", description: "Roll or drink!", type: "article", url: "https://sipwiki.app/guides/avalanche-drinking-game-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/avalanche-drinking-game-rules" },
};

export default function AvalancheDrinkingGameRulesPage() {
  return (
    <GuideLayout title="Avalanche Drinking Game Rules" description="A dice game where the cup gets fuller and fuller until someone has to drink it all. Watch the tension build as the avalanche grows - and crashes down on the unlucky roller!" breadcrumb="Avalanche Rules" relatedGames={[{ name: "Three Man", slug: "three-man", description: "Another dice classic" }, { name: "Mexicali", slug: "mexicali", description: "Dice bluffing" }, { name: "Beer Die", slug: "beer-die", description: "Skill-based dice" }]}>
      <h2>What You Need</h2>
      <ul>
        <li>One standard 6-sided die</li>
        <li>One large cup (the Avalanche cup)</li>
        <li>Everyone&apos;s drinks (beer works best)</li>
        <li>3+ players (works great with 4-8)</li>
      </ul>

      <h2>Basic Rules</h2>
      <p>Players take turns rolling the die. Each number means something different:</p>

      <h3>Die Roll Results</h3>
      <ul>
        <li><strong>Roll a 1</strong> - Pour some of your drink into the Avalanche cup. Pass the die left.</li>
        <li><strong>Roll a 2</strong> - Pour some of your drink into the Avalanche cup. Pass the die left.</li>
        <li><strong>Roll a 3</strong> - You must DRINK the Avalanche cup! Then pour some of your drink in to restart. Pass left.</li>
        <li><strong>Roll a 4</strong> - Yell &quot;FLOOR!&quot; Last person to touch the floor with their hand drinks. Pass left.</li>
        <li><strong>Roll a 5</strong> - The person to your RIGHT takes a drink from their own drink. Pass left.</li>
        <li><strong>Roll a 6</strong> - Everyone drinks from their own drink. Pass left.</li>
      </ul>

      <h2>The Avalanche Effect</h2>
      <p>This is what makes the game intense:</p>
      <ul>
        <li>Every 1 and 2 adds to the cup, making it bigger</li>
        <li>The cup grows and grows with each pass</li>
        <li>Rolling a 3 becomes increasingly terrifying</li>
        <li>The longer the cup builds, the more everyone watches in anticipation</li>
        <li>When someone finally drinks it, it could be half a cup or completely full</li>
      </ul>

      <h2>Step-by-Step Gameplay</h2>
      <ol>
        <li>Place an empty cup in the center of the table</li>
        <li>Determine who goes first (youngest, birthday closest, or roll for it)</li>
        <li>First player rolls the die and follows the corresponding rule</li>
        <li>Die always passes to the left</li>
        <li>Game continues until people want to stop</li>
        <li>No fixed end - it&apos;s designed to keep going</li>
      </ol>

      <h2>Important Details</h2>

      <h3>&quot;Some of Your Drink&quot;</h3>
      <p>When pouring into the Avalanche cup:</p>
      <ul>
        <li>Typically a splash - 1-2 oz</li>
        <li>Don&apos;t be stingy, don&apos;t be excessive</li>
        <li>Group sets the standard early</li>
        <li>Consistency matters - same pour each time</li>
        <li>If someone barely pours, call them out (socially, not mechanically)</li>
      </ul>

      <h3>The Floor Rule (Roll 4)</h3>
      <p>When someone yells &quot;FLOOR!&quot;:</p>
      <ul>
        <li>Everyone races to touch the floor</li>
        <li>Can be full palm or just fingertips</li>
        <li>Last person to touch drinks from their own drink</li>
        <li>Ties = both drink</li>
        <li>The roller should yell immediately upon seeing the 4</li>
      </ul>

      <h2>Variations</h2>

      <h3>Hardcore Avalanche</h3>
      <ul>
        <li>Rolling a 3 means chug the cup completely</li>
        <li>Pour more on 1s and 2s (heavier pours)</li>
        <li>Add: Roll three 3s in a row = double cup next time</li>
      </ul>

      <h3>Social Avalanche</h3>
      <ul>
        <li>Roll 6 = everyone drinks AND makes a toast</li>
        <li>Roll 5 = pick anyone (not just right side)</li>
        <li>Roll consecutive 4s = last person to touch floor makes a rule</li>
      </ul>

      <h3>Two Dice Avalanche</h3>
      <ul>
        <li>Roll two dice, use the sum:</li>
        <li>2-4 = pour into cup</li>
        <li>5-6 = FLOOR</li>
        <li>7 = drink the cup</li>
        <li>8-9 = person to right drinks</li>
        <li>10-12 = everyone drinks</li>
        <li>Doubles = roll again, both results apply</li>
      </ul>

      <h3>Speed Avalanche</h3>
      <ul>
        <li>5-second time limit to roll and act</li>
        <li>Hesitation = automatic pour into cup</li>
        <li>Increases chaos and pace</li>
      </ul>

      <h2>Strategy Tips</h2>

      <h3>Pour Strategy</h3>
      <ul>
        <li>Pour moderately - too little and people complain, too much and you&apos;re emptying your drink</li>
        <li>Different drinks mix in the cup - be prepared for a gross combo</li>
        <li>If everyone&apos;s drinking the same thing, no problem</li>
        <li>Mixed drinks + beer in one cup = not pleasant</li>
      </ul>

      <h3>Floor Awareness</h3>
      <ul>
        <li>Stay alert when anyone is about to roll</li>
        <li>Keep your hands somewhere accessible</li>
        <li>Don&apos;t get distracted right before someone rolls</li>
        <li>React immediately - hesitation costs you</li>
      </ul>

      <h3>Pace Yourself</h3>
      <ul>
        <li>6s happen regularly - that&apos;s everyone drinking</li>
        <li>Being on someone&apos;s right means more drinks (5s target you)</li>
        <li>Change seats if one position is getting hammered</li>
      </ul>

      <h2>Common House Rules</h2>
      <ul>
        <li><strong>Bounce rule</strong> - Die must bounce once before counting</li>
        <li><strong>Edge roll</strong> - Die lands on edge = everyone drinks</li>
        <li><strong>Off table</strong> - Die leaves table = roller drinks and re-rolls</li>
        <li><strong>Cup touch</strong> - Touch the Avalanche cup accidentally = take a drink from it</li>
        <li><strong>Name rule</strong> - Can&apos;t use first names (violation = pour into cup)</li>
      </ul>

      <h2>Why Avalanche Works</h2>
      <ul>
        <li><strong>Building tension</strong> - Everyone watches the cup grow</li>
        <li><strong>Simple rules</strong> - Easy to learn, remember drunk</li>
        <li><strong>Active participation</strong> - FLOOR keeps everyone engaged</li>
        <li><strong>Fair randomness</strong> - Dice are truly random</li>
        <li><strong>Natural pacing</strong> - Sometimes calm, sometimes chaos</li>
        <li><strong>Group moments</strong> - 6s and FLOORs involve everyone</li>
      </ul>

      <h2>What You&apos;ll Need</h2>
      <ul>
        <li>A good die - weighted or trick dice ruin the game</li>
        <li>A cup that can hold at least 12 oz</li>
        <li>A flat table surface for rolling</li>
        <li>Enough drink supply - cups drain and refill</li>
      </ul>

      <h2>Combining with Other Games</h2>
      <p>Avalanche works as:</p>
      <ul>
        <li>A warm-up before bigger games</li>
        <li>A break from card-heavy games</li>
        <li>Background game during other activities</li>
        <li>A finisher when energy is winding down</li>
      </ul>

      <p>More dice games: <Link href="/guides/best-dice-drinking-games" className="text-neon-pink hover:underline">all dice drinking games</Link> | <Link href="/game/three-man" className="text-neon-pink hover:underline">Three Man</Link></p>
    </GuideLayout>
  );
}
