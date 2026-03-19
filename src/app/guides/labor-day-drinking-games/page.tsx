import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Labor Day Drinking Games: End of Summer BBQ Party (2025)",
  description: "Labor Day drinking games for the last big summer party! BBQ games, backyard challenges, and end-of-summer celebrations. Send off summer right.",
  keywords: [
    "labor day drinking games",
    "labor day party games",
    "end of summer party",
    "bbq drinking games",
    "backyard party games",
    "labor day weekend",
  ],
  openGraph: {
    title: "Labor Day Drinking Games",
    description: "Last summer bash drinking games.",
    type: "article",
    url: "https://sipwiki.app/guides/labor-day-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/labor-day-drinking-games",
  },
};

export default function LaborDayDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Labor Day Drinking Games: End of Summer Bash"
      description="Labor Day is summer's last hurrah. Make the most of the long weekend with backyard BBQ games, pool party classics, and end-of-summer celebrations. Send off the season in style."
      breadcrumb="Labor Day Games"
      relatedGames={[
        { name: "Flip Cup", slug: "flip-cup", description: "BBQ classic" },
        { name: "Beer Pong", slug: "beer-pong", description: "Backyard essential" },
        { name: "Cornhole", slug: "cornhole", description: "Yard game" },
      ]}
    >
      <QuickAnswer
        question="What drinking games are good for Labor Day?"
        answer="BBQ classics: Cornhole drinking rules, ladder toss with stakes, horseshoes with drinks. Pool games if you have one. Backyard: Flip Cup, Beer Pong, Kan Jam drinking. Social: Summer recap Never Have I Ever, Most Likely To BBQ edition. Grill master challenges with drink penalties."
        tips={[
          "Backyard games work perfectly",
          "BBQ + beer = natural combo",
          "Last pool party of summer vibes",
          "3-day weekend = pace yourself"
        ]}
        variant="primary"
      />

      <h2>Labor Day Drink Essentials</h2>
      <ul>
        <li><strong>Beer:</strong> BBQ staple - light lagers, IPAs, whatever you prefer</li>
        <li><strong>Hard seltzers:</strong> Refreshing for day drinking</li>
        <li><strong>Whiskey:</strong> For those cooler evenings</li>
        <li><strong>Wine:</strong> Rosé for the summer send-off</li>
        <li><strong>Cocktails:</strong> Mojitos, margaritas, summer favorites</li>
      </ul>

      <h2>Backyard Lawn Games</h2>

      <h3>Cornhole Drinking Rules</h3>
      <ul>
        <li><strong>Bag on board (1 point):</strong> Other team drinks 1</li>
        <li><strong>Bag in hole (3 points):</strong> Other team drinks 3</li>
        <li><strong>Shutout:</strong> Losing team finishes drinks</li>
        <li><strong>Miss the board entirely:</strong> You drink 1</li>
        <li><strong>Bag knocks opponent's in:</strong> Tough luck, you drink 2</li>
      </ul>

      <h3>Ladder Toss/Ladder Golf</h3>
      <ul>
        <li><strong>Top rung (3 pts):</strong> Opponents drink 3</li>
        <li><strong>Middle rung (2 pts):</strong> Opponents drink 2</li>
        <li><strong>Bottom rung (1 pt):</strong> Opponents drink 1</li>
        <li><strong>Wrap around:</strong> Opponents drink 4</li>
        <li><strong>Miss completely:</strong> You drink 1</li>
        <li><strong>Win the round:</strong> Losers finish drinks</li>
      </ul>

      <h3>Horseshoes</h3>
      <ul>
        <li><strong>Ringer:</strong> Opponents drink 3</li>
        <li><strong>Leaner:</strong> Opponents drink 2</li>
        <li><strong>Within a horseshoe:</strong> Opponents drink 1</li>
        <li><strong>Miss the pit:</strong> You drink 1</li>
        <li><strong>Hit the stake:</strong> Social drink</li>
      </ul>

      <h3>Kan Jam</h3>
      <ul>
        <li><strong>Dinger (1 pt):</strong> Opponents drink 1</li>
        <li><strong>Deuce (2 pts):</strong> Opponents drink 2</li>
        <li><strong>Bucket (3 pts):</strong> Opponents drink 3</li>
        <li><strong>Instant win (slot):</strong> Opponents finish drinks + shot</li>
        <li><strong>Deflect into can:</strong> Double the points and drinks</li>
      </ul>

      <h2>BBQ Grill Games</h2>

      <h3>Grill Master Challenge</h3>
      <ul>
        <li>Flip a burger and it falls = drink</li>
        <li>Burn something = drink 2</li>
        <li>Forget to flip = drink</li>
        <li>Perfect grill marks = assign drinks</li>
        <li>Best dish (voted) = assign 5 drinks</li>
      </ul>

      <h3>Guess the Meat</h3>
      <ol>
        <li>Blindfold a player</li>
        <li>Give them a bite of grilled food</li>
        <li>Guess what it is</li>
        <li>Wrong = drink</li>
        <li>Right = assign drinks</li>
      </ol>

      <h2>Pool Games (Last Splash of Summer)</h2>

      <h3>Marco Polo Drinking</h3>
      <ul>
        <li>Tagged = drink</li>
        <li>Don't say "Polo" = drink</li>
        <li>"It" for 2+ minutes = finish drink</li>
      </ul>

      <h3>Pool Volleyball</h3>
      <ul>
        <li>Point scored = losers drink</li>
        <li>Ball hits water = both sides drink</li>
        <li>Win the game = losers do a shot</li>
      </ul>

      <h2>Day Drinking Table Games</h2>

      <h3>Labor Day Flip Cup Tournament</h3>
      <p>Run a <Link href="/games/flip-cup" className="text-neon-pink hover:underline">Flip Cup</Link> bracket:</p>
      <ul>
        <li>Teams of 4-5</li>
        <li>Single elimination</li>
        <li>Finals = best of 3</li>
        <li>Champions get Labor Day trophy rights</li>
      </ul>

      <h3>Beer Pong</h3>
      <p><Link href="/games/beer-pong" className="text-neon-pink hover:underline">Beer Pong</Link> is a backyard essential:</p>
      <ul>
        <li>Set up on a folding table</li>
        <li>Winner stays on</li>
        <li>End-of-day champion = legend</li>
      </ul>

      <h2>End of Summer Social Games</h2>

      <h3>Summer Recap Never Have I Ever</h3>
      <ul>
        <li>"Never have I ever gotten a sunburn this summer"</li>
        <li>"Never have I ever been to the beach"</li>
        <li>"Never have I ever grilled something"</li>
        <li>"Never have I ever been on a boat"</li>
        <li>"Never have I ever been to a concert this summer"</li>
      </ul>

      <h3>Most Likely To: BBQ Edition</h3>
      <ul>
        <li>"Most likely to burn the burgers"</li>
        <li>"Most likely to pass out in the sun"</li>
        <li>"Most likely to eat the most"</li>
        <li>"Most likely to get too drunk before dinner"</li>
        <li>"Most likely to fall asleep in a lawn chair"</li>
      </ul>

      <h2>Labor Day Trivia</h2>
      <p>Test your knowledge:</p>
      <ul>
        <li>When did Labor Day become a federal holiday? (1894)</li>
        <li>Which city had the first Labor Day parade? (NYC, 1882)</li>
        <li>What's the "rule" about white clothing after Labor Day?</li>
        <li>How many hot dogs are eaten on Labor Day? (~millions)</li>
      </ul>
      <p>Wrong = drink. Three right in a row = assign drinks.</p>

      <h2>Evening Wind-Down Games</h2>

      <h3>Sunset Cheers</h3>
      <p>As summer sunsets:</p>
      <ul>
        <li>When the sun touches the horizon = toast</li>
        <li>When it disappears = finish your drink</li>
        <li>Best summer memory shared = everyone drinks to it</li>
      </ul>

      <h3>Campfire Games</h3>
      <p>If you have a fire pit:</p>
      <ul>
        <li>Story circle = bad story = drink</li>
        <li>Song circle = forget lyrics = drink</li>
        <li>Truth or drink around the fire</li>
      </ul>

      <h2>3-Day Weekend Pacing</h2>
      <ul>
        <li><strong>Saturday:</strong> Pregame energy, pace yourself</li>
        <li><strong>Sunday:</strong> Main event day, go for it</li>
        <li><strong>Monday:</strong> Recovery day, light drinking</li>
      </ul>

      <div className="bg-yellow-900/30 p-4 rounded-lg my-4 border border-yellow-600/50">
        <p className="text-yellow-300 text-sm">
          <strong>Long Weekend Reminder:</strong> It's a 3-day weekend, not a sprint. Hydrate,
          eat plenty of BBQ, and take breaks. Save some energy for the actual Monday holiday.
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
            href="/guides/memorial-day-drinking-games"
            className="inline-block px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors"
          >
            Memorial Day →
          </Link>
        </div>
      </div>
    </GuideLayout>
  );
}
