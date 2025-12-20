import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beerio Kart Rules (2024) | Mario Kart Drinking Game Guide",
  description: "Complete Beerio Kart rules - the legendary Mario Kart drinking game! Finish your beer before the race ends, but you can't drink and drive. Full guide with variations.",
  keywords: ["beerio kart", "beerio kart rules", "mario kart drinking game", "drunk mario kart", "mario kart beer game", "don't drink and drive game"],
  openGraph: { title: "Beerio Kart - Mario Kart Drinking Game", description: "Don't drink and drive!", type: "article", url: "https://sipwiki.app/guides/beerio-kart-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/beerio-kart-rules" },
};

export default function BeerioKartRulesPage() {
  return (
    <GuideLayout title="Beerio Kart: The Complete Guide" description="The legendary Mario Kart drinking game with one simple rule: you must finish your beer before crossing the finish line, but you can't drink and drive at the same time." breadcrumb="Beerio Kart" relatedGames={[{ name: "Video Game Drinking Games", slug: "video-game-drinking-games", description: "More gaming drinks" }, { name: "Rage Cage", slug: "rage-cage", description: "Fast-paced drinking" }]}>
      <h2>The Golden Rule</h2>
      <p className="text-xl"><strong>You must finish your entire beer before crossing the finish line. BUT you cannot drink while your kart is moving.</strong></p>
      <p>That&apos;s it. That&apos;s the game. This simple rule creates an incredible strategic layer on top of Mario Kart. Do you stop early and often? One long pit stop? Risk it on the final lap?</p>

      <h2>Basic Rules</h2>
      <ol>
        <li>Each player has one full beer/drink at the start</li>
        <li>Race starts normally (countdown)</li>
        <li>You CAN drink, but your kart must be completely stopped</li>
        <li>You must finish your drink before crossing the finish line</li>
        <li>If you cross with drink remaining: you&apos;re disqualified</li>
        <li>Drinking while driving = disqualified</li>
      </ol>

      <h2>What Counts as &quot;Stopped&quot;?</h2>
      <ul>
        <li>✅ Completely stationary on track</li>
        <li>✅ Holding brake/reverse to stay still</li>
        <li>✅ Stuck on obstacle (as long as not moving)</li>
        <li>❌ Rolling slowly</li>
        <li>❌ Being hit by items while drinking</li>
        <li>❌ Falling off track (you&apos;re still &quot;moving&quot; when Lakitu gets you)</li>
      </ul>

      <h2>Strategy Guide</h2>

      <h3>The Pit Stop Strategy</h3>
      <p>Pull over 2-3 times per race for medium drinks. Safest approach, maintains decent position.</p>
      <ul>
        <li>Pro: Consistent, hard to mess up</li>
        <li>Con: Others may pass you during stops</li>
      </ul>

      <h3>The Early Chug</h3>
      <p>Stop immediately at race start and chug entire beer. Then race uninterrupted.</p>
      <ul>
        <li>Pro: Full focus on racing after</li>
        <li>Con: Start in last place, rough start to the night</li>
      </ul>

      <h3>The Final Lap Gambit</h3>
      <p>Race hard, then do one long stop on the final lap. High risk, high reward.</p>
      <ul>
        <li>Pro: Stay competitive throughout</li>
        <li>Con: Pressure chugging = spillage risk</li>
      </ul>

      <h3>The Item Box Stop</h3>
      <p>Stop at item boxes to drink while collecting items. Efficiency play.</p>

      <h2>Best Tracks for Beerio Kart</h2>
      <ul>
        <li><strong>Moo Moo Meadows</strong> - Wide roads, easy pit stops</li>
        <li><strong>Coconut Mall</strong> - Indoor sections provide natural stopping points</li>
        <li><strong>Rainbow Road</strong> - Chaos + drinking = legendary moments</li>
        <li><strong>Any 3-lap track</strong> - Avoid 1-lap or 5-lap tracks</li>
      </ul>

      <h2>Variations</h2>

      <h3>Beerio Kart Battle Mode</h3>
      <p>Same rules but in battle mode. Lose a balloon = take a drink. Still can&apos;t drink while moving.</p>

      <h3>Team Beerio Kart</h3>
      <p>2v2. Team&apos;s total placement matters. Coordinate who stops when.</p>

      <h3>Beerio Kart Grand Prix</h3>
      <p>Full 4-race cup. One beer per race. Overall winner determined by total points.</p>

      <h3>Kario Mart (Harder Version)</h3>
      <p>Same rules but: getting hit by any item = stop and drink extra. Red shells become terrifying.</p>

      <h2>What You Need</h2>
      <ul>
        <li>Mario Kart (any version works: 64, Wii, 8 Deluxe)</li>
        <li>2-4 players (local multiplayer)</li>
        <li>One 12oz beer/drink per person per race</li>
        <li>Straws recommended for easier drinking while watching screen</li>
        <li>Towels (spillage happens)</li>
      </ul>

      <h2>Pro Tips</h2>
      <ul>
        <li>Use cups with straws - easier to drink while watching screen</li>
        <li>Pick characters with good acceleration (you&apos;ll be stopping a lot)</li>
        <li>150cc is the sweet spot - 200cc is too fast to stop safely</li>
        <li>Don&apos;t pick Rainbow Road first - save it for when you&apos;re warmed up</li>
        <li>Light beers make for longer sessions</li>
        <li>Designate someone to watch for &quot;drinking while driving&quot; cheaters</li>
      </ul>

      <h2>Works With Other Racing Games</h2>
      <p>The rules work with any racing game: Crash Team Racing, Sonic Racing, F-Zero, etc. The &quot;don&apos;t drink and drive&quot; rule is universal.</p>
    </GuideLayout>
  );
}
