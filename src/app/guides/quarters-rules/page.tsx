import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quarters Rules: How to Play the Classic Coin Drinking Game (2024)",
  description: "Complete Quarters drinking game rules with bouncing techniques, wall shot rules, Speed Quarters, and pro tips. Master the classic coin game that's been played in bars for generations.",
  keywords: ["quarters rules", "quarters drinking game", "how to play quarters", "coin drinking game", "bounce quarters", "quarters game rules", "bar drinking games", "speed quarters"],
  openGraph: { title: "Quarters Rules: Complete Guide", description: "Master the classic Quarters drinking game.", type: "article", url: "https://sipwiki.app/guides/quarters-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/quarters-rules" },
};

export default function QuartersRulesPage() {
  return (
    <GuideLayout
      title="Quarters Rules: The Classic Coin Drinking Game"
      description="Quarters is the OG bar drinking game - just a quarter, a cup, and skill. It's been played in bars and dorm rooms for generations, and for good reason: it's simple to learn, difficult to master, and endlessly replayable."
      breadcrumb="Quarters Rules"
      primaryGame={{ name: "Quarters", slug: "quarters" }}
      relatedGames={[
        { name: "Chandelier", slug: "chandelier", description: "Bouncing cup game" },
        { name: "Beer Pong", slug: "beer-pong", description: "Classic throwing game" },
      ]}
    >
      <h2>What You Need</h2>
      <ul>
        <li><strong>1 quarter</strong> - U.S. quarter works best (size/weight), but any coin works</li>
        <li><strong>1 shot glass or short cup</strong> - Wider = easier, narrower = harder</li>
        <li><strong>Drinks for everyone</strong></li>
        <li><strong>Flat, hard table surface</strong> - Bounce quality matters!</li>
        <li><strong>2+ players</strong> - Works with any group size</li>
      </ul>

      <h2>Basic Quarters Rules</h2>
      <ol>
        <li>Place the shot glass in the center of the table</li>
        <li>First player bounces the quarter off the table, trying to land it in the glass</li>
        <li><strong>Make it?</strong> Choose anyone to drink. Keep shooting until you miss.</li>
        <li><strong>Miss?</strong> Pass the quarter to the next player (clockwise)</li>
        <li>If you make 3 shots in a row, you can create a rule that lasts the whole game</li>
      </ol>

      <h2>Bouncing Technique (This Is Everything)</h2>
      <p>Quarters is a skill game. Here&apos;s how to actually get good:</p>

      <h3>The Grip</h3>
      <ul>
        <li>Hold the quarter between your thumb and index/middle finger</li>
        <li>The flat of the coin should face down toward the table</li>
        <li>Don&apos;t grip too tight - you need a clean release</li>
      </ul>

      <h3>The Bounce</h3>
      <ul>
        <li>Drop from 6-8 inches above the table</li>
        <li>Hit the table about 4-6 inches from the glass</li>
        <li>Aim for a 45-degree bounce angle</li>
        <li>Consistency matters more than power</li>
      </ul>

      <h3>Finding Your Spot</h3>
      <ul>
        <li>Everyone has a &quot;sweet spot&quot; - find yours and stick to it</li>
        <li>Some players go close to the glass, some farther back</li>
        <li>Watch where the quarter lands after misses to adjust</li>
        <li>Table surfaces bounce differently - adjust for wood vs. laminate vs. glass</li>
      </ul>

      <h2>Wall Shot Rules (House Rules Vary)</h2>
      <p>Can you bounce off the wall? Common variations:</p>
      <ul>
        <li><strong>No walls</strong> - Table bounce only (strict rules)</li>
        <li><strong>One wall allowed</strong> - Table → wall → glass is legal</li>
        <li><strong>Anything goes</strong> - As long as it bounces on the table first</li>
        <li><strong>Wall shots = double</strong> - Make a wall shot, target drinks 2x</li>
      </ul>
      <p>Decide wall rules before starting to avoid arguments.</p>

      <h2>Three-in-a-Row Rule</h2>
      <p>Make three consecutive shots? You earn the power to create a rule. Classic rules include:</p>
      <ul>
        <li>No saying &quot;drink&quot; - must say &quot;consume&quot; or drink yourself</li>
        <li>No first names - use last names or nicknames only</li>
        <li>Little green man - pretend to remove him from your cup before drinking</li>
        <li>No pointing - must use elbows or head nods</li>
        <li>Viking rule - make horns, neighbors row when triggered</li>
      </ul>
      <p>Rules stack! Multiple players can add rules throughout the game.</p>

      <h2>Speed Quarters (Advanced)</h2>
      <p>Two quarters in play at once. Much more intense:</p>
      <ol>
        <li>Two players across from each other start with quarters</li>
        <li>Both shoot simultaneously</li>
        <li>Make it? Pass quarter to player on your left</li>
        <li>If you get &quot;caught&quot; (quarter passed to you while you&apos;re still shooting), you drink and both quarters move on</li>
        <li>Faster shooters put pressure on slower ones</li>
      </ol>
      <p>Speed Quarters gets hectic fast. Not recommended for beginners.</p>

      <h2>Other Quarters Variations</h2>

      <h3>Baseball Quarters</h3>
      <p>Set up 4 shot glasses in a line (the bases). Players &quot;bat&quot; by shooting at each cup in order. Make all 4 = home run. Miss = out. Three outs and switch teams.</p>

      <h3>Chandeliers</h3>
      <p>Multiple cups around one center cup. Hit an outer cup = owner drinks. Hit the center = everyone drinks. A hybrid of Quarters and <Link href="/game/chandelier" className="text-neon-pink">Chandelier</Link>.</p>

      <h3>Horse</h3>
      <p>Like basketball HORSE. Make a shot from a specific spot/angle. Opponent must match it. Miss = get a letter. Spell HORSE and you&apos;re out.</p>

      <h3>Knockout Quarters</h3>
      <p>Elimination style. Miss and you&apos;re out. Last shooter standing wins.</p>

      <h2>Pro Tips from Seasoned Players</h2>
      <ul>
        <li><strong>Older quarters bounce better</strong> - The worn edges give more predictable bounces</li>
        <li><strong>Keep your wrist loose</strong> - Tension ruins your release</li>
        <li><strong>Watch successful shooters</strong> - Copy their technique, not their style</li>
        <li><strong>Don&apos;t change spots</strong> - Muscle memory is real</li>
        <li><strong>Practice with water first</strong> - Seriously, it helps</li>
        <li><strong>The glass matters</strong> - Wider rim = easier. Real shot glasses are hard mode.</li>
      </ul>

      <h2>Common Arguments & Rulings</h2>
      <ul>
        <li><strong>Quarter lands on rim and falls out</strong> - Miss. Must stay in.</li>
        <li><strong>Quarter bounces twice on table</strong> - Usually legal unless house rules say otherwise.</li>
        <li><strong>Quarter hits glass but bounces out</strong> - Miss.</li>
        <li><strong>Someone bumps the table</strong> - Re-shoot (accidental) or drink penalty (intentional).</li>
      </ul>

      <h2>Why Quarters Has Lasted Generations</h2>
      <p>Quarters works because it&apos;s the perfect bar game: minimal equipment, scales to any group, skill-based but with enough luck to keep it interesting, and creates genuine excitement when you&apos;re on a streak. It&apos;s been played in college dorms and dive bars since the 1960s, and it&apos;s not going anywhere.</p>

      <p>Ready to play? Try our <Link href="/game/quarters" className="text-neon-pink hover:underline">digital Quarters game</Link> or browse more <Link href="/games/classic" className="text-neon-pink hover:underline">classic drinking games</Link>.</p>
    </GuideLayout>
  );
}
