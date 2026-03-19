import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guys Night Drinking Games (2024) | Boys Night Party Games",
  description: "Best drinking games for guys night! Competitive, hilarious, and perfect for poker nights, sports watching, and bro hangs.",
  keywords: ["guys night drinking games", "boys night drinking games", "mens drinking games", "guy drinking games", "drinking games for guys"],
  openGraph: { title: "Guys Night Drinking Games", description: "Boys night!", type: "article", url: "https://sipwiki.app/guides/guys-night-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/guys-night-drinking-games" },
};

export default function GuysNightDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Guys Night Drinking Games"
      description="The boys are back! Whether it's poker night, watching the game, or just hanging, these drinking games bring friendly competition and easy laughs."
      breadcrumb="Guys Night"
      relatedGames={[
        { name: "Beer Pong", slug: "beer-pong", description: "The classic" },
        { name: "Rage Cage", slug: "rage-cage", description: "High energy" },
      ]}
    >
      <p>
        Guys night works best when there is a clear flow: start with something social, move into
        a competitive game, then rotate to lighter games later in the night. This guide gives you
        a simple plan, a mix of game styles, and hosting tips that keep the night fun without
        getting chaotic.
      </p>

      <h2>How to Plan a Great Guys Night</h2>
      <ul>
        <li><strong>Pick 2-3 core games</strong> and rotate to keep energy balanced.</li>
        <li><strong>Keep teams flexible</strong> so people can jump in and out.</li>
        <li><strong>Set a drink pace early</strong> so everyone lasts the night.</li>
        <li><strong>Stock basics</strong>: cups, ice, water, and enough drinks for the group.</li>
      </ul>
      <p>
        Need a shopping list? Use the{" "}
        <Link href="/party-planner" className="text-neon-pink hover:underline">
          Party Planner Calculator
        </Link>{" "}
        and the{" "}
        <Link href="/blog/buying-guides/party-supplies-checklist" className="text-neon-pink hover:underline">
          party supplies checklist
        </Link>.
      </p>

      <h2>Competitive Games</h2>
      <ul>
        <li>
          <Link href="/games/beer-pong" className="text-neon-pink">Beer Pong</Link> - The essential.
          For official rules, see{" "}
          <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">
            Beer Pong Rules
          </Link>.
        </li>
        <li><Link href="/games/rage-cage" className="text-neon-pink">Rage Cage</Link> - Intense energy.</li>
        <li><Link href="/games/flip-cup" className="text-neon-pink">Flip Cup</Link> - Team battles.</li>
        <li><Link href="/games/quarters" className="text-neon-pink">Quarters</Link> - Skill game.</li>
      </ul>

      <h2>Low-Pressure Social Games</h2>
      <p>
        These work well early in the night or as a cooldown between competitive rounds.
      </p>
      <ul>
        <li><Link href="/games/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> - Quick confessions.</li>
        <li><Link href="/guides/never-have-i-ever-questions" className="text-neon-pink">Never Have I Ever Questions</Link> - Grab a list and go.</li>
        <li><Link href="/games/most-likely-to" className="text-neon-pink">Most Likely To</Link> - Vote and drink.</li>
        <li><Link href="/games/roxanne" className="text-neon-pink">Roxanne</Link> - Song-based chaos for 3 minutes.</li>
      </ul>

      <h2>Sports Watching Games</h2>
      <ul>
        <li><strong>Score:</strong> opposing fans drink.</li>
        <li><strong>Penalty or foul:</strong> everyone drinks.</li>
        <li><strong>Commercial break challenge:</strong> flip cup sprint or quick trivia.</li>
        <li><strong>Halftime tournament:</strong> short bracket of Beer Pong or Flip Cup.</li>
      </ul>

      <h2>Poker Night Rules</h2>
      <p>
        Keep the rules light so the game stays fun. Here is a simple format that works every time:
      </p>
      <ul>
        <li><strong>Fold:</strong> sip.</li>
        <li><strong>Win a hand:</strong> assign drinks.</li>
        <li><strong>Bad beat:</strong> take a shot or finish your drink.</li>
        <li><strong>All-in and lose:</strong> finish your drink.</li>
      </ul>

      <h2>Gear Checklist</h2>
      <ul>
        <li>Beer pong table or any 8-foot table.</li>
        <li>Ping pong balls and backup cups.</li>
        <li>Plenty of ice and water.</li>
        <li>Card deck for Kings Cup or Ride the Bus.</li>
      </ul>
      <p>
        Need recommendations? Start with{" "}
        <Link href="/blog/buying-guides/best-beer-pong-tables" className="text-neon-pink hover:underline">
          best beer pong tables
        </Link>{" "}
        and{" "}
        <Link href="/blog/buying-guides/best-party-cups" className="text-neon-pink hover:underline">
          best party cups
        </Link>.
      </p>

      <h2>Pacing and Safety</h2>
      <p>
        Good hosts keep the night fun and safe. Offer water, mix in food breaks, and avoid
        forcing anyone to drink. For a simple checklist, use our{" "}
        <Link href="/blog/safety/how-to-host-safe-drinking-party" className="text-neon-pink hover:underline">
          safe hosting guide
        </Link>.
      </p>

      <h2>Quick Guys Night Schedule</h2>
      <ol>
        <li><strong>Arrival:</strong> Never Have I Ever or Most Likely To.</li>
        <li><strong>Mid-game:</strong> Beer Pong or Rage Cage tournament.</li>
        <li><strong>Late:</strong> Roxanne or another short song game.</li>
      </ol>
    </GuideLayout>
  );
}
