import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Slap Cup Rules: How to Play This Intense Drinking Game (2024)",
  description: "Slap Cup rules explained! Learn how to play this fast-paced bouncing and slapping drinking game. Similar to Rage Cage but with more drama.",
  keywords: ["slap cup rules", "slap cup drinking game", "how to play slap cup", "slap cup vs rage cage", "cup slapping game", "bounce cup game"],
  openGraph: { title: "Slap Cup Rules", description: "Master the intense Slap Cup game.", type: "article", url: "https://sipwiki.app/guides/slap-cup-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/slap-cup-rules" },
};

export default function SlapCupRulesPage() {
  return (
    <GuideLayout title="Slap Cup: Rules & How to Play" description="Slap Cup is like Rage Cage's aggressive cousin. Same racing energy, but instead of stacking, you SLAP the opponent's cup away. It's loud, dramatic, and incredibly satisfying." breadcrumb="Slap Cup Rules" primaryGame={{ name: "Slap Cup", slug: "slap-cup" }} relatedGames={[{ name: "Rage Cage", slug: "rage-cage", description: "Stack instead of slap" }, { name: "Flip Cup", slug: "flip-cup", description: "Team relay racing" }]}>
      <h2>What You Need</h2>
      <ul><li>20-30 cups filled with beer</li><li>2 ping pong balls</li><li>6-15 players</li><li>Round table</li></ul>
      <h2>Setup</h2>
      <ol><li>Fill cups with beer and arrange in center</li><li>One full cup (death cup) in the very middle</li><li>Players stand around the table</li><li>Two players across from each other start with empty cups and balls</li></ol>
      <h2>How to Play</h2>
      <ol><li>Bounce the ball into your cup</li><li>Make it first try = pass to anyone</li><li>If you make it while your neighbor is still bouncing, SLAP their cup off the table</li><li>They drink a center cup and use that cup to continue</li><li>Death cup = game over for you</li></ol>
      <h2>Slap Cup vs Rage Cage</h2>
      <p>In Rage Cage, you stack. In Slap Cup, you slap. The slap is more dramatic and sends cups flying - more chaos, more fun!</p>
      <p>Play <Link href="/games/slap-cup" className="text-neon-pink hover:underline">Slap Cup</Link> on SipWiki!</p>
    </GuideLayout>
  );
}
