import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Year's Eve Drinking Games 2026: NYE Party Games & Countdown",
  description: "Ring in 2026 with the best New Year's Eve drinking games! Countdown games, champagne pong, resolution games, and everything you need for an epic NYE party.",
  keywords: [
    "New Years Eve drinking games",
    "NYE drinking games",
    "New Years party games",
    "countdown drinking game",
    "champagne pong",
    "NYE 2026 party",
    "New Years Eve party ideas",
    "midnight drinking game"
  ],
  openGraph: {
    title: "New Year's Eve Drinking Games 2026: NYE Party Guide",
    description: "Make your NYE party unforgettable with these countdown and celebration games.",
    type: "article",
    url: "https://sipwiki.app/blog/seasonal/new-years-eve-drinking-games-2025",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/seasonal/new-years-eve-drinking-games-2025",
  },
};

export default function NewYearsEveDrinkingGamesPage() {
  return (
    <BlogLayout
      title="New Year's Eve Drinking Games 2026: The Ultimate NYE Party Guide"
      description="Countdown to 2026 with the best New Year's Eve drinking games. From champagne pong to resolution games, make your NYE celebration one for the history books."
      author="party-pro"
      publishDate="2025-12-15"
      category="Seasonal"
      categorySlug="seasonal"
      readTime="13 min"
      tableOfContents={[
        { id: "countdown", title: "Countdown Games" },
        { id: "champagne", title: "Champagne Games" },
        { id: "resolutions", title: "Resolution Games" },
        { id: "year-review", title: "Year in Review Games" },
        { id: "midnight", title: "Midnight Celebration" },
        { id: "supplies", title: "Party Supplies" },
      ]}
      relatedArticles={[
        { title: "New Year's Eve Drinking Games", slug: "../../guides/new-years-eve-drinking-games", description: "Complete NYE games guide" },
        { title: "House Party Drinking Games", slug: "../../guides/house-party-drinking-games", description: "Party game essentials" },
        { title: "Drinking Games for Large Groups", slug: "../../guides/drinking-games-for-large-groups", description: "Games for big parties" },
      ]}
    >
      <p className="lead">
        New Year&apos;s Eve is the biggest party night of the year, and it deserves games that
        match the occasion. Whether you&apos;re hosting a house party or just celebrating with
        close friends, these drinking games will make your countdown to 2026 unforgettable.
      </p>

      <div className="bg-gradient-to-r from-gold-900/30 to-purple-900/30 p-6 rounded-xl border border-dark-600 my-8">
        <h3 className="text-lg font-bold text-white mb-2">🎆 NYE 2025 → 2026</h3>
        <p className="text-gray-300">
          New Year&apos;s Eve falls on a <strong>Wednesday</strong> this year. Plan for a late night
          (or early morning) and maybe take Thursday off!
        </p>
      </div>

      <h2 id="countdown">Countdown Drinking Games</h2>

      <h3>The Final Countdown</h3>
      <p>A game that intensifies as midnight approaches:</p>
      <ul>
        <li><strong>10 PM:</strong> Drink every time someone mentions midnight</li>
        <li><strong>11 PM:</strong> Add drink for every &quot;Happy New Year&quot; (premature)</li>
        <li><strong>11:30 PM:</strong> Add drink for every phone check for the time</li>
        <li><strong>11:45 PM:</strong> Add drink for every TV channel flip to find countdown</li>
        <li><strong>11:50 PM:</strong> Start the Waterfall - stops at midnight</li>
        <li><strong>11:59 PM:</strong> 60 second countdown - sip each second if you dare</li>
        <li><strong>MIDNIGHT:</strong> CHAMPAGNE TOAST 🥂</li>
      </ul>

      <h3>Time Zone Toasts</h3>
      <p>Celebrate midnight in every timezone:</p>
      <ul>
        <li>Toast when it hits midnight in major cities around the world</li>
        <li>Sydney (8 AM EST), Tokyo (10 AM EST), London (7 PM EST), NYC (Midnight)</li>
        <li>Mini toast each hour leading up to your local midnight</li>
        <li>Each toast = one drink + a fact about that country</li>
      </ul>

      <h3>Ball Drop Bingo</h3>
      <p>Watch the Times Square broadcast and drink when you see:</p>
      <ul>
        <li>Ryan Seacrest talks to a celebrity</li>
        <li>Crowd shot of people freezing</li>
        <li>Confetti shown</li>
        <li>Couple kissing</li>
        <li>Musical performance begins</li>
        <li>Someone mentions the cold</li>
        <li>2025 reflection montage</li>
        <li>2026 predictions</li>
      </ul>

      <h3>Hourly Challenge</h3>
      <p>Different drinking rule each hour leading to midnight:</p>
      <ul>
        <li><strong>8 PM:</strong> <Link href="/guides/flip-cup-rules" className="text-neon-pink hover:underline">Flip Cup</Link> tournament</li>
        <li><strong>9 PM:</strong> <Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup</Link></li>
        <li><strong>10 PM:</strong> <Link href="/guides/never-have-i-ever-questions" className="text-neon-pink hover:underline">Never Have I Ever</Link></li>
        <li><strong>11 PM:</strong> <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link> championship</li>
        <li><strong>Midnight:</strong> Champagne and celebration!</li>
      </ul>

      <h2 id="champagne">Champagne Games</h2>

      <h3>Champagne Pong</h3>
      <p>The classy NYE version of Beer Pong:</p>
      <ul>
        <li>Use champagne flutes instead of Solo cups</li>
        <li>Fill with champagne or sparkling wine</li>
        <li>6 cups per side (flutes hold less)</li>
        <li>Pinky out while shooting (optional but encouraged)</li>
        <li>Winner gets to make the first toast at midnight</li>
      </ul>

      <h3>Pop the Cork Challenge</h3>
      <ul>
        <li>Each person tries to pop a champagne cork</li>
        <li>Furthest cork distance wins</li>
        <li>Loser of each round drinks from the winner&apos;s bottle</li>
        <li>Hit a target = everyone toasts to you</li>
        <li>Cork doesn&apos;t pop properly = finish a glass</li>
      </ul>

      <h3>Champagne Tower Race</h3>
      <ul>
        <li>Two teams build champagne glass towers</li>
        <li>First to successfully pour champagne down the tower wins</li>
        <li>Tower collapses = team drinks the spillage (carefully)</li>
        <li>Successful tower = other team drinks</li>
      </ul>

      <h2 id="resolutions">Resolution Drinking Games</h2>

      <h3>Resolution Roulette</h3>
      <ul>
        <li>Everyone writes a resolution on paper</li>
        <li>Mix them up in a hat</li>
        <li>Draw a resolution and guess whose it is</li>
        <li>Wrong guess = drink</li>
        <li>Correct guess = author drinks</li>
        <li>No one guesses correctly = everyone drinks</li>
      </ul>

      <h3>Resolution Confessions</h3>
      <p>Admit your broken resolutions from 2025:</p>
      <ul>
        <li>Go around sharing resolutions you failed</li>
        <li>Group votes on most relatable failure</li>
        <li>Winner gives out drinks</li>
        <li>Refused to share = take a shot</li>
      </ul>

      <h3>Resolution Predictions</h3>
      <ul>
        <li>Predict what resolutions others will make</li>
        <li>Write predictions for each person</li>
        <li>Read aloud - if accurate, they drink</li>
        <li>If insulting, predictor drinks</li>
        <li>If everyone agrees it&apos;s accurate, person drinks double</li>
      </ul>

      <h3>Would You Rather: 2026 Edition</h3>
      <ul>
        <li>&quot;Would you rather give up social media or alcohol for 2026?&quot;</li>
        <li>&quot;Would you rather only drink beer or only drink wine all year?&quot;</li>
        <li>&quot;Would you rather host every party or never host again?&quot;</li>
        <li>Minority answer drinks</li>
      </ul>

      <h2 id="year-review">Year in Review Games</h2>

      <h3>2025 Trivia</h3>
      <p>Test your memory of the past year:</p>
      <ul>
        <li>Questions about major events, viral moments, pop culture</li>
        <li>Wrong answer = drink</li>
        <li>Correct answer = give out a drink</li>
        <li>No one knows = everyone drinks to forgetting</li>
      </ul>
      <p>Sample categories: Movies, Music, Sports, News, Memes, Celebrity Gossip</p>

      <h3>Best/Worst of 2025</h3>
      <ul>
        <li>Go around sharing best and worst moments of 2025</li>
        <li>Most embarrassing story = storyteller gives out drinks</li>
        <li>Most wholesome story = everyone toasts</li>
        <li>Refuse to share = drink</li>
      </ul>

      <h3>Photo Roulette 2025</h3>
      <ul>
        <li>Everyone puts phone in center (if comfortable)</li>
        <li>Random photo from 2025 shown</li>
        <li>Person must explain the context</li>
        <li>Good story = give out drinks</li>
        <li>Embarrassing photo = take drinks</li>
        <li>Skip explanation = finish drink</li>
      </ul>

      <h3>Superlatives</h3>
      <p>Vote on your friend group&apos;s year:</p>
      <ul>
        <li>Most likely to break their resolution first</li>
        <li>Best party moment of 2025</li>
        <li>Most dramatic 2025 story</li>
        <li>Winner of each category gives out drinks</li>
      </ul>

      <h2 id="midnight">Midnight Celebration</h2>

      <h3>The Midnight Ritual</h3>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Countdown Protocol</h4>
        <ol className="text-gray-300 space-y-2">
          <li><strong>11:55 PM:</strong> Everyone gets champagne glasses</li>
          <li><strong>11:58 PM:</strong> Gather together, hold glasses high</li>
          <li><strong>11:59 PM:</strong> 60-second countdown begins</li>
          <li><strong>MIDNIGHT:</strong> Pop bottles, toast, kiss someone, drink!</li>
          <li><strong>12:01 AM:</strong> Hugs all around, first song of 2026</li>
          <li><strong>12:05 AM:</strong> Games resume with new year energy</li>
        </ol>
      </div>

      <h3>New Year Kiss Challenge</h3>
      <ul>
        <li>Must kiss someone (anyone, even on cheek) at midnight</li>
        <li>No kiss = take a shot alone</li>
        <li>Kiss a stranger = give out 3 drinks</li>
        <li>Kiss your partner = wholesome toast together</li>
        <li>Kiss multiple people = you&apos;re the NYE champion</li>
      </ul>

      <h3>First _____ of 2026</h3>
      <p>Compete to be first in the new year:</p>
      <ul>
        <li>First to finish champagne = makes first rule of 2026</li>
        <li>First to take a photo = gives out drinks</li>
        <li>First to post on social media = phone taken for 10 min</li>
        <li>First to fall asleep = everyone signs their face</li>
      </ul>

      <h2 id="supplies">Party Supplies</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=new+years+eve+party+decorations&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">NYE Decoration Kit</h4>
          <p className="text-gray-400 text-sm">Gold, silver, black theme</p>
          <span className="text-neon-pink font-bold">$20-40</span>
        </a>
        <a href="https://www.amazon.com/s?k=champagne+flutes+plastic&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Plastic Champagne Flutes</h4>
          <p className="text-gray-400 text-sm">Classy but practical</p>
          <span className="text-neon-pink font-bold">$15-25</span>
        </a>
        <a href="https://www.amazon.com/s?k=2026+new+year+glasses&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">2026 Glasses/Headbands</h4>
          <p className="text-gray-400 text-sm">Photo booth essentials</p>
          <span className="text-neon-pink font-bold">$10-15</span>
        </a>
        <a href="https://www.amazon.com/s?k=confetti+cannons+party&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Confetti Cannons</h4>
          <p className="text-gray-400 text-sm">Pop at midnight!</p>
          <span className="text-neon-pink font-bold">$15-25</span>
        </a>
        <a href="https://www.amazon.com/s?k=champagne+sparkling+wine&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Sparkling Wine/Champagne</h4>
          <p className="text-gray-400 text-sm">Stock up for toasts</p>
          <span className="text-neon-pink font-bold">$10-50/bottle</span>
        </a>
        <a href="https://www.amazon.com/s?k=noisemakers+party&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Noisemakers</h4>
          <p className="text-gray-400 text-sm">Horns, poppers, streamers</p>
          <span className="text-neon-pink font-bold">$10-20</span>
        </a>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">NYE Safety</h3>
        <p className="text-gray-300">
          New Year&apos;s Eve is the most dangerous night for drunk driving. Plan transportation
          BEFORE you start drinking. Book Ubers early (surge pricing hits hard after midnight),
          designate drivers, or plan to stay over. Starting 2026 with everyone safe is the real goal.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Happy New Year 2026! 🎆</h3>
        <p className="text-gray-400 mb-4">
          Check out more party games and celebration ideas.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/new-years-eve-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            NYE Games Guide →
          </Link>
          <Link
            href="/party-planner"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Party Planner Tool
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
