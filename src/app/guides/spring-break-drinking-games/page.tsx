import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spring Break Drinking Games: Beach & Pool Party (2025)",
  description: "Spring break drinking games for beach, pool, and hotel parties! Pool games, beach challenges, and vacation classics. Make your break unforgettable.",
  keywords: [
    "spring break drinking games",
    "beach drinking games",
    "pool party games",
    "vacation drinking games",
    "college spring break",
    "spring break party",
  ],
  openGraph: {
    title: "Spring Break Drinking Games",
    description: "Party games for the ultimate break.",
    type: "article",
    url: "https://sipwiki.app/guides/spring-break-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/spring-break-drinking-games",
  },
};

export default function SpringBreakDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Spring Break Drinking Games: Ultimate Party Guide"
      description="Spring break is the ultimate party week. Whether you're hitting the beach, poolside, or partying in a hotel room, these games will make your break legendary. Sun, drinks, and good times."
      breadcrumb="Spring Break Games"
      relatedGames={[
        { name: "Beer Pong", slug: "beer-pong", description: "The classic" },
        { name: "Flip Cup", slug: "flip-cup", description: "Team battles" },
        { name: "Rage Cage", slug: "rage-cage", description: "Chaos mode" },
      ]}
    >
      <QuickAnswer
        question="What are the best spring break drinking games?"
        answer="Pool/Beach: Chicken fights with drink stakes, volleyball drinking rules, Marco Polo drinking. Hotel: Beer Pong, Rage Cage, Flip Cup tournaments. Day drinking: Boat races, power hours with playlists. Night: Kings Cup, Most Likely To, Never Have I Ever for new friends. Anywhere: Waterfall, 7-11-Doubles, Quarters."
        tips={[
          "Beach/pool = waterproof games",
          "Day drinking = pace yourself",
          "Meet new people with social games",
          "Stay hydrated - sun + alcohol is intense"
        ]}
        variant="primary"
      />

      <h2>Essential Spring Break Drinks</h2>
      <ul>
        <li><strong>Beer:</strong> Light beers for day drinking</li>
        <li><strong>Seltzers:</strong> Refreshing and hydrating</li>
        <li><strong>Frozen drinks:</strong> Piña coladas, daiquiris</li>
        <li><strong>Jungle juice:</strong> For hotel parties</li>
        <li><strong>Shots:</strong> Tequila for beach vibes</li>
      </ul>

      <h2>Beach/Pool Games</h2>

      <h3>Volleyball Drinking Rules</h3>
      <ul>
        <li>Point scored = losing team drinks</li>
        <li>Ace (unreturnable) = losing team drinks 2</li>
        <li>Ball hits the sand = whoever missed drinks</li>
        <li>Win the set = losers finish drinks</li>
        <li>Epic rally (10+ hits) = everyone drinks</li>
      </ul>

      <h3>Chicken Fight Championships</h3>
      <ol>
        <li>Pair up (one on shoulders)</li>
        <li>Fight other pairs</li>
        <li>Fall = both drink</li>
        <li>Win = assign drinks</li>
        <li>Tournament style until one pair is champion</li>
      </ol>

      <h3>Marco Polo Drinking</h3>
      <ul>
        <li>"It" calls Marco = if you don't say Polo, you drink</li>
        <li>Get tagged = drink</li>
        <li>Tag someone = they drink</li>
        <li>Cheating (peeking) = finish your drink</li>
      </ul>

      <h3>Noodle Jousting</h3>
      <ol>
        <li>On pool noodles or floaties</li>
        <li>Try to knock each other off</li>
        <li>Fall off = drink</li>
        <li>Stay on = assign drinks</li>
      </ol>

      <h2>Hotel Room Games</h2>

      <h3>Spring Break Beer Pong Tournament</h3>
      <p>Classic <Link href="/game/beer-pong" className="text-neon-pink hover:underline">Beer Pong</Link> with tournament brackets:</p>
      <ul>
        <li>Teams of 2</li>
        <li>Single elimination</li>
        <li>Champions get bragging rights all week</li>
        <li>Losers in finals do a special punishment (song performance, etc.)</li>
      </ul>

      <h3>Rage Cage Marathon</h3>
      <p><Link href="/game/rage-cage" className="text-neon-pink hover:underline">Rage Cage</Link> is perfect for big groups:</p>
      <ul>
        <li>Fast-paced chaos</li>
        <li>Works with 6-20 people</li>
        <li>Death cup = do a dare from the group</li>
      </ul>

      <h3>Spring Break Flip Cup</h3>
      <p><Link href="/game/flip-cup" className="text-neon-pink hover:underline">Flip Cup</Link> variations:</p>
      <ul>
        <li>Survivor: Losers eliminate one player each round</li>
        <li>Reverse: Flip THEN drink</li>
        <li>Mystery cup: One cup has liquor instead of beer</li>
      </ul>

      <h2>Day Drinking Games</h2>

      <h3>Boat Race</h3>
      <ol>
        <li>Two teams line up</li>
        <li>First person drinks and flips</li>
        <li>Next person goes</li>
        <li>Relay race - first team done wins</li>
        <li>Losers do a penalty</li>
      </ol>

      <h3>Beach Power Hour</h3>
      <p>Take a shot of beer every minute for 60 minutes:</p>
      <ul>
        <li>Use a playlist that changes songs every minute</li>
        <li>Works great for pre-gaming the night</li>
        <li>About 6-7 beers total</li>
        <li>Finish = legend status</li>
      </ul>

      <h2>Meeting New People Games</h2>

      <h3>Two Truths and a Lie Drinking</h3>
      <p>Great for strangers:</p>
      <ul>
        <li>Tell two truths and one lie about yourself</li>
        <li>Others guess the lie</li>
        <li>Wrong guessers drink</li>
        <li>If everyone guesses right, you drink</li>
      </ul>

      <h3>Spring Break Never Have I Ever</h3>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink hover:underline">Never Have I Ever</Link> themed questions:</p>
      <ul>
        <li>"Never have I ever hooked up on spring break"</li>
        <li>"Never have I ever gotten a vacation tattoo"</li>
        <li>"Never have I ever blacked out before sunset"</li>
        <li>"Never have I ever skinny dipped"</li>
        <li>"Never have I ever lost my phone on vacation"</li>
      </ul>

      <h3>Most Likely To: Spring Break Edition</h3>
      <ul>
        <li>"Most likely to hook up with a stranger"</li>
        <li>"Most likely to get sunburned today"</li>
        <li>"Most likely to lose their wallet"</li>
        <li>"Most likely to make friends with everyone here"</li>
        <li>"Most likely to be the last one awake"</li>
      </ul>

      <h2>Anywhere Games</h2>

      <h3>Waterfall</h3>
      <p>Simple and effective:</p>
      <ul>
        <li>Someone starts drinking</li>
        <li>Next person starts</li>
        <li>You can't stop until person before you stops</li>
        <li>Last person drinks the longest</li>
      </ul>

      <h3>7-11-Doubles</h3>
      <p>Only needs dice:</p>
      <ul>
        <li>Roll 7, 11, or doubles</li>
        <li>Pick someone to drink</li>
        <li>Race - keep rolling while they chug</li>
        <li>See <Link href="/guides/7-11-doubles-rules" className="text-neon-pink hover:underline">full rules</Link></li>
      </ul>

      <h2>Safety Tips for Spring Break</h2>
      <ul>
        <li><strong>Hydrate:</strong> Sun + alcohol = dangerous dehydration</li>
        <li><strong>Sunscreen:</strong> Don't forget just because you're drinking</li>
        <li><strong>Buddy system:</strong> Look out for each other</li>
        <li><strong>Know your limits:</strong> It's a marathon, not a sprint</li>
        <li><strong>Eat:</strong> Don't drink on an empty stomach</li>
        <li><strong>Pace:</strong> You have all week - don't burn out day one</li>
      </ul>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Day Drinking Warning:</strong> Drinking in the sun hits harder and faster.
          Start slower than you would at night. Drink water between drinks. Take breaks in
          the shade. Spring break is more fun if you actually remember it.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Seasonal Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/summer-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            Summer Games →
          </Link>
          <Link
            href="/guides/pool-party-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            Pool Party Games →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
