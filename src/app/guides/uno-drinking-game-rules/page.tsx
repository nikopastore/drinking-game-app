import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drunk Uno Rules (2024) | Complete Uno Drinking Game Guide",
  description: "The ultimate Uno drinking game rules! Transform the classic card game into a hilarious drinking game with our complete guide, variations, and pro tips.",
  keywords: ["uno drinking game", "drunk uno rules", "uno drinking game rules", "drinking uno", "uno with alcohol", "uno card drinking game"],
  openGraph: { title: "Drunk Uno - The Complete Drinking Game Rules", description: "Turn Uno into the ultimate party game!", type: "article", url: "https://sipwiki.app/guides/uno-drinking-game-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/uno-drinking-game-rules" },
};

export default function UnoDrinkingGameRulesPage() {
  return (
    <GuideLayout title="Drunk Uno: The Complete Guide" description="Everyone knows Uno. Now learn how to turn it into one of the best drinking games ever. Simple rules that make every Draw 4 feel personal." breadcrumb="Drunk Uno" relatedGames={[{ name: "Kings Cup", slug: "kings-cup", description: "Another card classic" }, { name: "Ride the Bus", slug: "ride-the-bus", description: "Card-based drinking" }]}>
      <h2>Why Drunk Uno Works So Well</h2>
      <p>Uno is already competitive, dramatic, and full of betrayal. Adding drinks amplifies everything that makes it great. The &quot;UNO!&quot; call becomes high-stakes, Draw 4s become declarations of war, and forgotten calls mean punishment.</p>

      <h2>Basic Drunk Uno Rules</h2>
      <p>Play standard Uno with these drinking rules added:</p>

      <h3>Card-Based Drinking</h3>
      <ul>
        <li><strong>Draw 2</strong> - Target drinks 2 sips</li>
        <li><strong>Draw 4 (Wild)</strong> - Target drinks 4 sips</li>
        <li><strong>Skip</strong> - Skipped player drinks 1</li>
        <li><strong>Reverse</strong> - Direction changes, everyone drinks 1</li>
        <li><strong>Wild Card</strong> - You choose who drinks 2</li>
      </ul>

      <h3>Game-Based Drinking</h3>
      <ul>
        <li><strong>Forget to say &quot;UNO!&quot;</strong> - Drink 3 and draw 2 cards</li>
        <li><strong>Play wrong card</strong> - Drink 2</li>
        <li><strong>Take too long</strong> - Drink 1 (5 second rule)</li>
        <li><strong>Lose the round</strong> - Finish your drink</li>
        <li><strong>Win the round</strong> - Give out 5 sips total</li>
      </ul>

      <h2>Advanced Rules (For Chaos)</h2>
      <ul>
        <li><strong>Stacking</strong> - If someone plays Draw 2, you can stack another Draw 2. The drinking stacks until someone can&apos;t stack.</li>
        <li><strong>0 and 7 Rule</strong> - Playing a 0 means everyone passes hands left. Playing a 7 lets you swap hands with anyone. Both trigger a &quot;cheers&quot; moment where everyone drinks.</li>
        <li><strong>Jump-In Rule</strong> - If you have the exact same card (number AND color), you can play out of turn. The person who got jumped drinks 1.</li>
        <li><strong>Challenge Draw 4</strong> - If you suspect an illegal Draw 4, challenge it. Loser of the challenge drinks double (8 sips).</li>
      </ul>

      <h2>Drunk Uno Variations</h2>

      <h3>Speed Uno</h3>
      <p>3-second turn limit. Miss it and you drink + draw. Games get wild fast.</p>

      <h3>Strip Uno (21+ Only)</h3>
      <p>Lose a round = remove an item OR finish your drink. Your choice each time.</p>

      <h3>Team Uno</h3>
      <p>Partners sit across from each other. When your partner drinks, you drink half. Teamwork matters.</p>

      <h2>Pro Tips</h2>
      <ul>
        <li>Save your Draw 4s for revenge - it hits harder emotionally</li>
        <li>The &quot;UNO!&quot; call is where most drinks happen - watch your opponents</li>
        <li>Reverse cards are underrated - they change who&apos;s targeting you</li>
        <li>Keep water nearby - Uno games can run long</li>
        <li>Use actual Uno cards, not a phone app - more satisfying to slam down</li>
      </ul>

      <h2>What You Need</h2>
      <ul>
        <li>1 Uno deck (or 2 for larger groups)</li>
        <li>3-10 players (4-6 is ideal)</li>
        <li>Drinks for everyone</li>
        <li>20-45 minutes per game</li>
      </ul>
    </GuideLayout>
  );
}
