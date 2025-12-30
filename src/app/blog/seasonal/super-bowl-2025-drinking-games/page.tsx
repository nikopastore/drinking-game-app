import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Super Bowl 2025 Drinking Games: 15+ Games for Your Watch Party",
  description: "The ultimate guide to Super Bowl 2025 drinking games! From commercial bingo to touchdown shots, make your watch party legendary with these fun drinking games.",
  keywords: [
    "Super Bowl 2025 drinking games",
    "Super Bowl drinking game",
    "football drinking games",
    "Super Bowl party games",
    "Super Bowl watch party",
    "Super Bowl LIX drinking games",
    "NFL drinking games",
    "big game drinking games"
  ],
  openGraph: {
    title: "Super Bowl 2025 Drinking Games: The Ultimate Party Guide",
    description: "15+ drinking games to make your Super Bowl 2025 watch party unforgettable.",
    type: "article",
    url: "https://sipwiki.app/blog/seasonal/super-bowl-2025-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/seasonal/super-bowl-2025-drinking-games",
  },
};

export default function SuperBowl2025DrinkingGamesPage() {
  return (
    <BlogLayout
      title="Super Bowl 2025 Drinking Games: The Ultimate Watch Party Guide"
      description="Make Super Bowl LIX the most memorable yet with these 15+ drinking games perfect for any crowd size. From casual sippers to competitive drinkers, we've got you covered."
      author="sipwiki-team"
      publishDate="2025-01-15"
      category="Seasonal"
      categorySlug="seasonal"
      readTime="12 min"
      tableOfContents={[
        { id: "commercial-games", title: "Commercial Break Games" },
        { id: "game-action", title: "Game Action Drinking Rules" },
        { id: "halftime", title: "Halftime Show Games" },
        { id: "classic-games", title: "Classic Party Games" },
        { id: "supplies", title: "Party Supplies Checklist" },
      ]}
      relatedArticles={[
        { title: "How to Host a Safe Drinking Party", slug: "safety/how-to-host-safe-drinking-party", description: "Essential safety tips for hosts" },
        { title: "Best Beer Pong Tables 2025", slug: "buying-guides/best-beer-pong-tables", description: "Top tables for your party" },
        { title: "Party Supplies Checklist", slug: "buying-guides/party-supplies-checklist", description: "Everything you need" },
      ]}
    >
      <p className="lead">
        Super Bowl LIX (2025) is almost here! Whether you&apos;re rooting for a team or just here for
        the commercials and halftime show, these drinking games will keep your watch party
        entertaining from kickoff to the final whistle.
      </p>

      <div className="bg-gradient-to-r from-blue-900/30 to-red-900/30 p-6 rounded-xl border border-dark-600 my-8">
        <h3 className="text-lg font-bold text-white mb-2">Super Bowl LIX (2025) Info</h3>
        <ul className="text-gray-300 space-y-1">
          <li><strong>Date:</strong> February 9, 2025</li>
          <li><strong>Location:</strong> Caesars Superdome, New Orleans</li>
          <li><strong>Kickoff:</strong> 6:30 PM ET</li>
        </ul>
      </div>

      <h2 id="commercial-games">Commercial Break Drinking Games</h2>
      <p>
        Let&apos;s be honest - many people watch the Super Bowl for the commercials. These games
        make the ad breaks even more entertaining.
      </p>

      <h3>Super Bowl Commercial Bingo</h3>
      <p>Create bingo cards with common commercial themes and take a drink when you spot them:</p>
      <ul>
        <li><strong>1 sip:</strong> Car commercial, beer commercial, movie trailer</li>
        <li><strong>2 sips:</strong> Celebrity cameo, talking animal, emotional moment</li>
        <li><strong>3 sips:</strong> Crypto/AI commercial, nostalgic callback, product you&apos;ve never heard of</li>
        <li><strong>Finish your drink:</strong> Get a bingo!</li>
      </ul>

      <h3>Brand Prediction Game</h3>
      <p>Before each commercial break:</p>
      <ul>
        <li>Everyone predicts what brand will appear first</li>
        <li>Wrong guesses drink</li>
        <li>If a brand runs multiple ads, double the penalty</li>
      </ul>

      <h3>Commercial Rating Game</h3>
      <ul>
        <li>After each commercial, everyone rates it 1-10</li>
        <li>Lowest rating drinks</li>
        <li>If you&apos;re the only one who liked/disliked an ad (outlier by 3+ points), you drink</li>
      </ul>

      <h2 id="game-action">Game Action Drinking Rules</h2>
      <p>
        These rules turn every play into a drinking opportunity. Pick and choose based on
        how much your group wants to drink.
      </p>

      <h3>Basic Game Rules (Light Drinking)</h3>
      <ul>
        <li><strong>Touchdown:</strong> Opposing team&apos;s fans drink</li>
        <li><strong>Field Goal:</strong> 1 sip for everyone</li>
        <li><strong>Turnover:</strong> Team that lost the ball&apos;s fans take 3 sips</li>
        <li><strong>Penalty Flag:</strong> Everyone drinks during the explanation</li>
        <li><strong>Timeout:</strong> Social drink (everyone sips together)</li>
      </ul>

      <h3>Advanced Rules (Moderate Drinking)</h3>
      <ul>
        <li><strong>Sack:</strong> Offense fans drink</li>
        <li><strong>First Down:</strong> Defense fans take a sip</li>
        <li><strong>Incomplete Pass:</strong> Offense fans sip</li>
        <li><strong>Challenge Flag:</strong> Everyone drinks until the review is over</li>
        <li><strong>Two-Point Conversion Attempt:</strong> Everyone finishes their drink if successful</li>
      </ul>

      <h3>Announcer Bingo</h3>
      <p>Drink when the announcers say:</p>
      <ul>
        <li>&quot;Championship experience&quot;</li>
        <li>&quot;Big game player&quot;</li>
        <li>Mention a player&apos;s college</li>
        <li>Reference a previous Super Bowl</li>
        <li>&quot;That&apos;s going to be reviewed&quot;</li>
        <li>Mention the weather</li>
      </ul>

      <h2 id="halftime">Halftime Show Drinking Games</h2>
      <p>
        The halftime show is its own event. These games make the 15-minute performance
        even more entertaining.
      </p>

      <h3>Halftime Performance Rules</h3>
      <ul>
        <li><strong>Costume change:</strong> Everyone drinks</li>
        <li><strong>Pyrotechnics:</strong> 1 sip per explosion</li>
        <li><strong>Special guest appears:</strong> Finish your drink</li>
        <li><strong>Lip sync obvious:</strong> 2 sips</li>
        <li><strong>Crowd surfing or entering audience:</strong> 3 sips</li>
        <li><strong>Wardrobe malfunction:</strong> Everyone finishes their drink (unlikely but classic)</li>
      </ul>

      <h3>Song Prediction Game</h3>
      <ul>
        <li>Before halftime, everyone writes down 3 songs they think will be performed</li>
        <li>1 point for each correct guess</li>
        <li>Lowest score after halftime does a shot</li>
      </ul>

      <h2 id="classic-games">Classic Party Games (During Breaks)</h2>
      <p>
        Set up these games in another area for guests who want more action during
        slower moments.
      </p>

      <h3>Beer Pong Tournament</h3>
      <p>
        Run a <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link> tournament
        during commercial breaks and halftime. Use team-colored cups for extra fun!
      </p>

      <h3>Flip Cup Relay</h3>
      <p>
        Split into two teams based on Super Bowl allegiance. Play <Link href="/guides/flip-cup-rules" className="text-neon-pink hover:underline">Flip Cup</Link> during
        the longer breaks.
      </p>

      <h3>Kings Cup</h3>
      <p>
        Set up <Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup</Link> for
        a continuous game throughout the party.
      </p>

      <h2 id="supplies">Party Supplies Checklist</h2>
      <p>Make sure you&apos;re prepared for the big game:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-white mb-4">Drinks</h4>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Beer (domestic and craft options)</li>
            <li>✓ Seltzers/light options</li>
            <li>✓ Spirits for shots/mixed drinks</li>
            <li>✓ Non-alcoholic alternatives</li>
            <li>✓ Plenty of water</li>
            <li>✓ Ice (more than you think)</li>
          </ul>
        </div>
        <div className="bg-dark-800 p-6 rounded-xl border border-dark-600">
          <h4 className="font-bold text-white mb-4">Game Supplies</h4>
          <ul className="text-gray-400 space-y-2">
            <li>✓ Red and blue solo cups</li>
            <li>✓ Ping pong balls</li>
            <li>✓ Playing cards</li>
            <li>✓ Shot glasses</li>
            <li>✓ Printed bingo cards</li>
            <li>✓ Markers/pens</li>
          </ul>
        </div>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Safety First</h3>
        <p className="text-gray-300">
          Super Bowl parties are marathons, not sprints. The game is 3+ hours long, so pace yourself!
          Have plenty of food, water, and non-alcoholic options. Make sure everyone has a safe ride home.
          Check out our <Link href="/blog/safety/how-to-host-safe-drinking-party" className="text-yellow-400 hover:underline">complete party safety guide</Link>.
        </p>
      </div>

      <h2>Team-Specific Drinking Rules</h2>
      <p>
        Add these rules based on which teams are playing. These generic rules work for any matchup:
      </p>
      <ul>
        <li><strong>Your team scores first:</strong> Opponents drink</li>
        <li><strong>Your QB throws an interception:</strong> Your side takes a shot</li>
        <li><strong>Coach shown yelling:</strong> Both sides drink</li>
        <li><strong>Star player mentioned by name:</strong> Opposing fans drink</li>
        <li><strong>Injury timeout:</strong> Moment of silence (no drinking)</li>
      </ul>

      <h2>Final Whistle</h2>
      <ul>
        <li><strong>Winning team&apos;s fans:</strong> Victory lap - everyone else drinks to your toast</li>
        <li><strong>Losing team&apos;s fans:</strong> Consolation shot</li>
        <li><strong>MVP announced:</strong> If you predicted correctly, you give out drinks</li>
        <li><strong>Gatorade shower color:</strong> If you guessed right, everyone drinks to you</li>
      </ul>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Get Ready for Game Day!</h3>
        <p className="text-gray-400 mb-4">
          Browse our full collection of drinking games and party tips.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/super-bowl-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            More Super Bowl Games →
          </Link>
          <Link
            href="/games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Browse All Games
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
