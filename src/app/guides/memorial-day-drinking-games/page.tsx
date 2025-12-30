import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Memorial Day Drinking Games: Summer Kickoff Party (2025)",
  description: "Memorial Day drinking games for the first big BBQ of summer! Backyard games, pool party kickoff, and patriotic celebrations. Start summer right.",
  keywords: [
    "memorial day drinking games",
    "memorial day party games",
    "summer kickoff party",
    "bbq drinking games",
    "backyard party games",
    "memorial day weekend",
  ],
  openGraph: {
    title: "Memorial Day Drinking Games",
    description: "Summer kickoff party games.",
    type: "article",
    url: "https://sipwiki.app/guides/memorial-day-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/memorial-day-drinking-games",
  },
};

export default function MemorialDayDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Memorial Day Drinking Games: Summer Kickoff"
      description="Memorial Day marks the unofficial start of summer. Kick off the season with backyard BBQ games, pool party fun, and the first big outdoor celebration of the year. Here's to summer!"
      breadcrumb="Memorial Day Games"
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "BBQ essential" },
        { name: "Beer Pong", slug: "beer-pong", description: "Backyard classic" },
        { name: "Rage Cage", slug: "rage-cage", description: "Party energy" },
      ]}
    >
      <QuickAnswer
        question="What drinking games are good for Memorial Day?"
        answer="Backyard classics: Cornhole with drinking rules, Flip Cup tournaments, Beer Pong. Pool kickoff games if you're opening the pool. Patriotic themes: Red/white/blue drink challenges, USA trivia. BBQ games: Grill challenges, taste tests. Social: Summer plans Never Have I Ever, Most Likely To BBQ edition."
        tips={[
          "First big backyard party of summer",
          "Cornhole and lawn games are perfect",
          "Pool opening = pool games",
          "3-day weekend = pace for the long haul"
        ]}
        variant="primary"
      />

      <h2>Memorial Day Drink Ideas</h2>
      <ul>
        <li><strong>Beer:</strong> The classic BBQ choice</li>
        <li><strong>Hard seltzers:</strong> Summer refreshment</li>
        <li><strong>Red, white, blue cocktails:</strong> Patriotic theme</li>
        <li><strong>Lemonade cocktails:</strong> Summer vibes</li>
        <li><strong>Rosé:</strong> Officially in season now</li>
      </ul>

      <h2>Backyard Game Rules</h2>

      <h3>Cornhole (Bags)</h3>
      <ul>
        <li><strong>Board hit (1 pt):</strong> Other team drinks 1</li>
        <li><strong>Hole (3 pts):</strong> Other team drinks 3</li>
        <li><strong>Shutout win:</strong> Losers finish drinks</li>
        <li><strong>Complete miss:</strong> You drink 1</li>
        <li><strong>Knock opponent's bag in:</strong> You drink 2</li>
      </ul>

      <h3>Ladder Toss</h3>
      <ul>
        <li><strong>Top rung:</strong> Opponents drink 3</li>
        <li><strong>Middle rung:</strong> Opponents drink 2</li>
        <li><strong>Bottom rung:</strong> Opponents drink 1</li>
        <li><strong>Bounce hit:</strong> Double the drinks</li>
        <li><strong>Win game:</strong> Losers do a shot</li>
      </ul>

      <h3>Bocce Ball</h3>
      <ul>
        <li><strong>Closest ball:</strong> Other team drinks 1</li>
        <li><strong>Two closest:</strong> Other team drinks 3</li>
        <li><strong>Touch the pallino:</strong> Other team drinks 4</li>
        <li><strong>Knock opponent away:</strong> They drink 2</li>
      </ul>

      <h2>Pool Opening Games</h2>
      <p>If you're opening the pool for summer:</p>

      <h3>First Splash</h3>
      <ul>
        <li>Everyone holds a drink</li>
        <li>First person in the pool = assigns 5 drinks</li>
        <li>Last person in = finishes their drink</li>
        <li>Cannonball = assign 3 drinks</li>
      </ul>

      <h3>Marco Polo</h3>
      <ul>
        <li>Get tagged = drink</li>
        <li>Be "it" too long = drink</li>
        <li>Peek = finish your drink</li>
      </ul>

      <h3>Pool Float Race</h3>
      <ol>
        <li>Race across the pool on floaties</li>
        <li>Holding your drink</li>
        <li>Spill = drink what's left + penalty</li>
        <li>Last place = finishes their drink</li>
      </ol>

      <h2>Table Games</h2>

      <h3>Memorial Day Flip Cup</h3>
      <p><Link href="/game/flip-cup" className="text-neon-pink hover:underline">Flip Cup</Link> tournament style:</p>
      <ul>
        <li>Red vs Blue teams (patriotic)</li>
        <li>Best of 5 finals</li>
        <li>Winning team gets summer bragging rights</li>
      </ul>

      <h3>Beer Pong</h3>
      <p><Link href="/game/beer-pong" className="text-neon-pink hover:underline">Beer Pong</Link> is essential:</p>
      <ul>
        <li>Set up in garage or on patio</li>
        <li>All-day winner stays format</li>
        <li>Champion at the end of the day = legend</li>
      </ul>

      <h2>Patriotic-Themed Games</h2>

      <h3>Red, White, and Blue Challenge</h3>
      <ul>
        <li>Red cup = beer</li>
        <li>White cup = seltzer</li>
        <li>Blue cup = mystery drink</li>
        <li>Shuffle and distribute - drink what you get</li>
      </ul>

      <h3>USA Trivia</h3>
      <p>American history and facts:</p>
      <ul>
        <li>When was the first Memorial Day? (1868)</li>
        <li>What was it originally called? (Decoration Day)</li>
        <li>How many stars on the flag?</li>
        <li>Name all military branches</li>
      </ul>
      <p>Wrong = drink. Three right = assign drinks.</p>

      <h3>State Capital Challenge</h3>
      <ul>
        <li>Go around naming states and their capitals</li>
        <li>Wrong capital = drink</li>
        <li>Hesitate too long = drink</li>
        <li>Name all 50 correctly = legendary status + assign 10 drinks</li>
      </ul>

      <h2>BBQ Grill Games</h2>

      <h3>Grill Master Challenge</h3>
      <ul>
        <li>Drop food = drink</li>
        <li>Burn something = drink 2</li>
        <li>Undercook something = drink 2</li>
        <li>Perfect cook = assign drinks</li>
      </ul>

      <h3>Hot Dog Eating Contest</h3>
      <ol>
        <li>Set a 2-minute timer</li>
        <li>Race to eat hot dogs</li>
        <li>Winner = assigns drinks to all</li>
        <li>Last place = finishes their drink</li>
      </ol>

      <h2>Social Games</h2>

      <h3>Summer Plans Never Have I Ever</h3>
      <p>Looking ahead to summer:</p>
      <ul>
        <li>"Never have I ever booked a summer vacation"</li>
        <li>"Never have I ever been to a music festival"</li>
        <li>"Never have I ever been camping this year"</li>
        <li>"Never have I ever been on a boat this spring"</li>
      </ul>

      <h3>Most Likely To: Summer Edition</h3>
      <ul>
        <li>"Most likely to get the worst sunburn this summer"</li>
        <li>"Most likely to go to the most cookouts"</li>
        <li>"Most likely to do something crazy on vacation"</li>
        <li>"Most likely to buy a boat"</li>
      </ul>

      <h2>Moment of Remembrance</h2>
      <p>Before the party gets too wild, take a moment:</p>
      <ul>
        <li>3 PM is the National Moment of Remembrance</li>
        <li>Toast to those who served</li>
        <li>A respectful pause before continuing celebrations</li>
      </ul>

      <h2>Day to Night Transition</h2>

      <h3>Sunset Toast</h3>
      <ul>
        <li>First day of summer (almost) sunset</li>
        <li>Everyone shares what they're looking forward to</li>
        <li>Toast to a great summer ahead</li>
      </ul>

      <h3>Evening Firepit Games</h3>
      <ul>
        <li>Truth or drink around the fire</li>
        <li>Story telling with drink penalties for bad stories</li>
        <li>Would you rather with summer themes</li>
      </ul>

      <h2>3-Day Weekend Tips</h2>
      <ul>
        <li><strong>Saturday:</strong> Setup day, lighter drinking</li>
        <li><strong>Sunday:</strong> Main party day</li>
        <li><strong>Monday:</strong> Recovery/round two (your choice)</li>
        <li><strong>Hydrate:</strong> First hot weekend of the year - drink water</li>
        <li><strong>Sunscreen:</strong> You're not used to the sun yet</li>
      </ul>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Summer Kickoff Reminder:</strong> This is the first big sun exposure of the year
          for many people. Wear sunscreen, hydrate extra, and take breaks in the shade. The
          summer is long - pace yourself!
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">More Holiday Games</h3>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/fourth-of-july-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            4th of July →
          </Link>
          <Link
            href="/guides/labor-day-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            Labor Day →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
