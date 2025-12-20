import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drunk Mario Kart Rules (2024) | All Variations & Drinking Games",
  description: "Every Mario Kart drinking game variation! From Beerio Kart to item-based drinking rules. The complete guide to drinking and Mario Kart.",
  keywords: ["drunk mario kart", "mario kart drinking game rules", "mario kart drinking", "drunk driving game mario kart", "mario kart alcohol game"],
  openGraph: { title: "Drunk Mario Kart - All Drinking Game Variations", description: "Every way to drink and race!", type: "article", url: "https://sipwiki.app/guides/drunk-mario-kart-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/drunk-mario-kart-rules" },
};

export default function DrunkMarioKartRulesPage() {
  return (
    <GuideLayout title="Drunk Mario Kart: All Variations" description="There are many ways to combine Mario Kart and drinking. Here's every variation from the classic Beerio Kart to item-based drinking rules." breadcrumb="Drunk Mario Kart" relatedGames={[{ name: "Beerio Kart", slug: "beerio-kart-rules", description: "The classic version" }, { name: "Video Game Drinking Games", slug: "video-game-drinking-games", description: "More gaming drinks" }]}>
      <h2>Variation 1: Classic Beerio Kart</h2>
      <p>The original and most popular version.</p>
      <ul>
        <li>Must finish your beer before crossing finish line</li>
        <li>Cannot drink while kart is moving</li>
        <li>DQ if you cross with beer remaining or drink while driving</li>
      </ul>
      <p><Link href="/guides/beerio-kart-rules" className="text-neon-pink">See full Beerio Kart rules →</Link></p>

      <h2>Variation 2: Item-Based Drinking</h2>
      <p>Simpler rules based on items and events:</p>
      <ul>
        <li><strong>Hit by red shell</strong> - Drink 2</li>
        <li><strong>Hit by blue shell</strong> - Drink 5</li>
        <li><strong>Fall off track</strong> - Drink 2</li>
        <li><strong>Hit by lightning</strong> - Everyone drinks 1</li>
        <li><strong>Get star power</strong> - Give out 3 drinks</li>
        <li><strong>Use golden mushroom</strong> - Drink 1 per boost you use</li>
        <li><strong>Finish last</strong> - Finish your drink</li>
        <li><strong>Finish first</strong> - Give out 5 drinks</li>
      </ul>

      <h2>Variation 3: Position Drinking</h2>
      <p>Based on where you finish:</p>
      <ul>
        <li><strong>1st place</strong> - Give out 4 drinks</li>
        <li><strong>2nd place</strong> - Give out 2 drinks</li>
        <li><strong>3rd place</strong> - Nothing</li>
        <li><strong>4th place</strong> - Drink 2</li>
        <li><strong>5th-8th place</strong> - Drink 3</li>
        <li><strong>Last place</strong> - Finish drink</li>
      </ul>

      <h2>Variation 4: Character Rules</h2>
      <p>Assign drinking rules to characters:</p>
      <ul>
        <li><strong>If you&apos;re hit by Bowser</strong> - Drink 3</li>
        <li><strong>If you&apos;re hit by Princess</strong> - Person who picked Princess drinks</li>
        <li><strong>If Waluigi wins</strong> - Everyone but Waluigi drinks 2</li>
        <li><strong>If baby character wins</strong> - Everyone else drinks 3</li>
      </ul>

      <h2>Variation 5: Battle Mode Drinking</h2>
      <ul>
        <li><strong>Lose a balloon</strong> - Drink 2</li>
        <li><strong>Get eliminated</strong> - Finish your drink</li>
        <li><strong>Win the match</strong> - Give out 1 drink per balloon you have left</li>
        <li><strong>Steal a balloon (Renegade Roundup)</strong> - Give 2 drinks</li>
      </ul>

      <h2>Variation 6: Grand Prix Tournament</h2>
      <p>For longer sessions:</p>
      <ul>
        <li>Play a full 4-race cup</li>
        <li>Track standings after each race</li>
        <li>After each race: bottom half drinks based on position</li>
        <li>Winner of cup: immune from drinking next cup</li>
        <li>Last place overall: waterfall led by winner</li>
      </ul>

      <h2>Variation 7: Combo Rules</h2>
      <p>Combine Beerio Kart with item drinking for maximum chaos:</p>
      <ul>
        <li>Must finish beer before crossing (Beerio Kart rule)</li>
        <li>PLUS take extra drinks when hit by items</li>
        <li>This gets messy fast - experienced players only</li>
      </ul>

      <h2>Best Mario Kart Versions for Drinking</h2>
      <ol>
        <li><strong>Mario Kart 8 Deluxe (Switch)</strong> - Best graphics, most players, great track selection</li>
        <li><strong>Mario Kart Wii</strong> - Nostalgic, chaotic, lots of items</li>
        <li><strong>Mario Kart 64</strong> - Classic, everyone knows the tracks</li>
        <li><strong>Mario Kart Double Dash</strong> - Two characters = unique drinking rules possible</li>
      </ol>

      <h2>Recommended Settings</h2>
      <ul>
        <li><strong>CC</strong> - 150cc (100cc if people are getting too drunk)</li>
        <li><strong>Items</strong> - Normal or Frantic for more chaos</li>
        <li><strong>CPU</strong> - Off (players only) for fairest drinking</li>
        <li><strong>Tracks</strong> - Random selection keeps it fresh</li>
      </ul>

      <h2>Safety Tips</h2>
      <ul>
        <li>Use lighter beers for longer sessions</li>
        <li>Keep water and snacks nearby</li>
        <li>Take breaks between cups</li>
        <li>No one drives home for real</li>
        <li>It&apos;s a game - don&apos;t pressure anyone to drink more than comfortable</li>
      </ul>
    </GuideLayout>
  );
}
