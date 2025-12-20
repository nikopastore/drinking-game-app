import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wizard Staff Drinking Game Rules (2024) | Build Your Staff!",
  description: "Complete Wizard Staff drinking game guide! Tape your empty cans into a staff and battle other wizards. Rules, strategies, and legendary staff-building tips.",
  keywords: ["wizard staff drinking game", "wizard staff rules", "wisest wizard", "staff drinking game", "can stacking drinking game", "wizard staff beer game"],
  openGraph: { title: "Wizard Staff - The Epic Beer Staff Game", description: "Build your staff, become the wizard!", type: "article", url: "https://sipwiki.app/guides/wizard-staff-drinking-game" },
  alternates: { canonical: "https://sipwiki.app/guides/wizard-staff-drinking-game" },
};

export default function WizardStaffDrinkingGamePage() {
  return (
    <GuideLayout title="Wizard Staff: The Complete Guide" description="The legendary drinking game where you tape your empty cans together to build an epic wizard staff. The tallest staff wins. Simple, ridiculous, unforgettable." breadcrumb="Wizard Staff" relatedGames={[{ name: "Power Hour", slug: "power-hour", description: "Another endurance game" }, { name: "Century Club", slug: "century-club-rules", description: "100-minute challenge" }]}>
      <h2>What is Wizard Staff?</h2>
      <p>Wizard Staff (also called &quot;Wisest Wizard&quot;) is an endurance drinking game where players tape their empty beer cans end-to-end, building a &quot;wizard staff.&quot; The person with the tallest staff at the end of the night is crowned the Wisest Wizard.</p>
      <p>It&apos;s simple, visual, and creates an incredible sense of accomplishment as your staff grows taller than you.</p>

      <h2>Basic Rules</h2>
      <ol>
        <li>Everyone starts with a fresh beer/cider can</li>
        <li>When you finish a can, tape it to your previous can (bottom to top)</li>
        <li>Continue building throughout the night</li>
        <li>You must carry your staff with you at all times</li>
        <li>The tallest staff at game end wins</li>
      </ol>

      <h2>What You Need</h2>
      <ul>
        <li>Canned beer, cider, or seltzer (lots of it)</li>
        <li>Duct tape or packing tape</li>
        <li>4+ players</li>
        <li>3-5 hours (this is a marathon)</li>
        <li>A space where tall staffs won&apos;t hit ceilings/lights</li>
      </ul>

      <h2>Staff Building Strategy</h2>

      <h3>Tape Technique</h3>
      <ul>
        <li>Wrap tape around the connection point 3-4 times minimum</li>
        <li>Duct tape is strongest but packing tape works</li>
        <li>Tape while cans are dry for best adhesion</li>
        <li>Consider a &quot;spine&quot; of tape running vertically for extra support</li>
      </ul>

      <h3>Pacing</h3>
      <ul>
        <li>Average pace: 1 beer per 20-30 minutes</li>
        <li>A 6-can staff is respectable</li>
        <li>A 10+ can staff is legendary</li>
        <li>Record staffs exceed 15 cans (do not attempt)</li>
      </ul>

      <h2>Advanced Rules & Variations</h2>

      <h3>Wizard Battles</h3>
      <p>At certain milestones (5 cans, 8 cans), wizards can challenge each other to staff battles. Rock-paper-scissors, trivia, or physical challenges. Loser&apos;s staff is destroyed and they start over.</p>

      <h3>Level-Up Powers</h3>
      <ul>
        <li><strong>Level 3 (3 cans)</strong> - You can make one person drink</li>
        <li><strong>Level 5</strong> - You can skip a round of any other game</li>
        <li><strong>Level 7</strong> - You can &quot;curse&quot; someone to drink double for 10 min</li>
        <li><strong>Level 10</strong> - You become a &quot;Grand Wizard&quot; with veto power</li>
      </ul>

      <h3>Staff Jousting (Outdoor Only)</h3>
      <p>Two wizards hold their staffs like lances and try to knock the other&apos;s staff. Broken staff = you drink and rebuild. ONLY do this with soft ground and sober enough judgment.</p>

      <h2>Tips for Success</h2>
      <ul>
        <li>Start early - you need hours to build a good staff</li>
        <li>Eat plenty of food throughout</li>
        <li>Pace yourself - it&apos;s a marathon, not a sprint</li>
        <li>Lighter beers = faster drinking = taller staff</li>
        <li>Be careful with doorways as your staff grows</li>
        <li>Take photos at each level milestone</li>
        <li>The staff is fragile - protect it from falls</li>
      </ul>

      <h2>End Game</h2>
      <p>Set an end time before starting (midnight, end of party, etc.). At that time, all wizards present their staffs. The tallest staff wins.</p>
      <p><strong>The Wisest Wizard</strong> receives glory, bragging rights, and should probably drink some water.</p>

      <h2>Safety Note</h2>
      <p>This game involves sustained drinking over hours. Know your limits. Having a staff of 4 cans and calling it a night is completely valid. The real win is having fun with friends.</p>
    </GuideLayout>
  );
}
