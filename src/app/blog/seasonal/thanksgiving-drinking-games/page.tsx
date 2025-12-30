import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thanksgiving Drinking Games 2025: Family & Friendsgiving Games",
  description: "Survive the holidays with the best Thanksgiving drinking games! Family-friendly options, Friendsgiving party games, and football drinking rules for Turkey Day.",
  keywords: [
    "Thanksgiving drinking games",
    "Friendsgiving drinking games",
    "Turkey Day drinking games",
    "Thanksgiving party games",
    "family drinking games",
    "Thanksgiving football drinking",
    "holiday drinking games",
    "Thanksgiving 2025"
  ],
  openGraph: {
    title: "Thanksgiving Drinking Games 2025: Turkey Day Party Guide",
    description: "Make your Thanksgiving or Friendsgiving unforgettable with these drinking games.",
    type: "article",
    url: "https://sipwiki.app/blog/seasonal/thanksgiving-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/seasonal/thanksgiving-drinking-games",
  },
};

export default function ThanksgivingDrinkingGamesPage() {
  return (
    <BlogLayout
      title="Thanksgiving Drinking Games 2025: The Ultimate Turkey Day Guide"
      description="Whether you're surviving family dinner or hosting Friendsgiving, these drinking games will make your Thanksgiving celebration one to remember."
      author="game-master"
      publishDate="2025-11-01"
      category="Seasonal"
      categorySlug="seasonal"
      readTime="12 min"
      tableOfContents={[
        { id: "family", title: "Family-Friendly Games" },
        { id: "friendsgiving", title: "Friendsgiving Party Games" },
        { id: "football", title: "Football Drinking Games" },
        { id: "dinner", title: "Dinner Table Games" },
        { id: "drinks", title: "Festive Drinks" },
      ]}
      relatedArticles={[
        { title: "Thanksgiving Drinking Games Guide", slug: "../../guides/thanksgiving-drinking-games", description: "Complete Thanksgiving guide" },
        { title: "Sports Drinking Games", slug: "../../guides/sports-drinking-games", description: "Football drinking rules" },
        { title: "Drinking Games for Large Groups", slug: "../../guides/drinking-games-for-large-groups", description: "Games for big gatherings" },
      ]}
    >
      <p className="lead">
        Thanksgiving brings together family, food, football, and the occasional need for
        liquid courage. Whether you&apos;re navigating awkward family questions or hosting a
        full-blown Friendsgiving bash, these games will help you celebrate the holiday in style.
      </p>

      <div className="bg-gradient-to-r from-orange-900/30 to-amber-900/30 p-6 rounded-xl border border-dark-600 my-8">
        <h3 className="text-lg font-bold text-white mb-2">🦃 Thanksgiving 2025</h3>
        <p className="text-gray-300">
          Thanksgiving is <strong>Thursday, November 27, 2025</strong>. Black Friday means
          you have time to recover (or keep the party going)!
        </p>
      </div>

      <h2 id="family">Family-Friendly (But Still Drinking) Games</h2>

      <h3>Thanksgiving Bingo</h3>
      <p>Create bingo cards with things that happen every Thanksgiving:</p>
      <ul>
        <li>Someone asks about your love life</li>
        <li>Political discussion starts</li>
        <li>&quot;Remember when you were little...&quot;</li>
        <li>Someone falls asleep on the couch</li>
        <li>Comment about weight (gain or loss)</li>
        <li>&quot;When are you having kids?&quot;</li>
        <li>Discussion of someone&apos;s job</li>
        <li>Sports argument</li>
        <li>Someone takes a food photo</li>
        <li>Leftover distribution negotiations</li>
      </ul>
      <p><strong>Get a line = Take a drink. Blackout = You survived Thanksgiving!</strong></p>

      <h3>Subtly Drink When...</h3>
      <p>Discrete drinking rules for family dinner (sip wine, no one notices):</p>
      <ul>
        <li>Someone mentions politics</li>
        <li>Relative asks about your relationship status</li>
        <li>Someone complains about cooking something</li>
        <li>&quot;I&apos;m so full&quot; followed by more eating</li>
        <li>Someone brings up &quot;the old days&quot;</li>
        <li>Kids table gets loud</li>
        <li>Someone mentions Black Friday shopping</li>
        <li>Grace goes longer than 30 seconds</li>
      </ul>

      <h3>Thanksgiving Trivia</h3>
      <p>Family-friendly trivia with drinking penalties:</p>
      <ul>
        <li>Wrong answer = take a sip</li>
        <li>Correct answer = give out a sip</li>
        <li>No one knows = everyone drinks</li>
      </ul>
      <p>Sample questions:</p>
      <ul>
        <li>What year was the first Thanksgiving? (1621)</li>
        <li>What NFL team always plays on Thanksgiving? (Lions and Cowboys)</li>
        <li>What&apos;s the Butterball Turkey hotline number? (1-800-BUTTERBALL)</li>
        <li>How many calories in average Thanksgiving dinner? (~3,000)</li>
      </ul>

      <h2 id="friendsgiving">Friendsgiving Party Games</h2>

      <h3>Grateful Pong</h3>
      <p>Thanksgiving-themed <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link>:</p>
      <ul>
        <li>Before each throw, say something you&apos;re grateful for</li>
        <li>Can&apos;t repeat what&apos;s been said</li>
        <li>Repeat or can&apos;t think of something = drink and lose turn</li>
        <li>Heartfelt gratitude = applause and bonus throw</li>
      </ul>

      <h3>Friendsgiving Kings Cup</h3>
      <p>Holiday-themed <Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup</Link>:</p>
      <ul>
        <li><strong>Ace - Feast:</strong> Everyone eats a snack and drinks</li>
        <li><strong>2 - You:</strong> Give 2 drinks</li>
        <li><strong>3 - Me:</strong> Take 3 drinks</li>
        <li><strong>4 - Turkey:</strong> Gobble before drinking for rest of game</li>
        <li><strong>5 - Pie:</strong> Pick your favorite pie, anyone who agrees drinks</li>
        <li><strong>6 - Grateful:</strong> Say what you&apos;re thankful for, others drink if moved</li>
        <li><strong>7 - Heaven:</strong> Point up, last person drinks</li>
        <li><strong>8 - Mate:</strong> Pick a &quot;dinner date&quot; who drinks with you</li>
        <li><strong>9 - Rhyme:</strong> Thanksgiving themed</li>
        <li><strong>10 - Categories:</strong> Thanksgiving foods, family members, etc.</li>
        <li><strong>Jack - Pilgrim:</strong> All guys drink</li>
        <li><strong>Queen - Native:</strong> All girls drink</li>
        <li><strong>King - Gravy Boat:</strong> Pour into center cup</li>
      </ul>

      <h3>Pass the Cranberry Sauce</h3>
      <p>Like hot potato but with a twist:</p>
      <ul>
        <li>Pass a can of cranberry sauce while music plays</li>
        <li>When music stops, holder drinks</li>
        <li>Drop it = finish your drink</li>
        <li>Catch it one-handed = give out drinks</li>
      </ul>

      <h3>Thanksgiving Never Have I Ever</h3>
      <p>Holiday-themed confessions:</p>
      <ul>
        <li>&quot;Never have I ever eaten pie for breakfast the day after Thanksgiving&quot;</li>
        <li>&quot;Never have I ever lied about liking someone&apos;s cooking&quot;</li>
        <li>&quot;Never have I ever skipped out on dish duty&quot;</li>
        <li>&quot;Never have I ever unbuttoned my pants at the table&quot;</li>
        <li>&quot;Never have I ever started eating before grace was said&quot;</li>
      </ul>

      <h2 id="football">Football Drinking Games</h2>

      <h3>Turkey Bowl Drinking Rules</h3>
      <p>For the three NFL games on Thanksgiving:</p>
      <ul>
        <li><strong>Touchdown:</strong> Opponent&apos;s team fans drink</li>
        <li><strong>Field goal:</strong> 3 sips for opposing fans</li>
        <li><strong>Interception:</strong> Throwing team fans take a shot</li>
        <li><strong>Fumble:</strong> Both teams drink</li>
        <li><strong>Penalty flag:</strong> Guilty team fans drink</li>
        <li><strong>Commercial break:</strong> Social drink</li>
        <li><strong>Announcer mentions Thanksgiving food:</strong> Everyone drinks</li>
        <li><strong>Turkey leg shown:</strong> Finish your drink</li>
      </ul>

      <h3>Lions/Cowboys Traditions</h3>
      <p>For the traditional Thanksgiving games:</p>
      <ul>
        <li><strong>Lions lose (tradition):</strong> Pour one out for Detroit</li>
        <li><strong>Cowboys star shown:</strong> Dallas fans drink</li>
        <li><strong>Halftime show:</strong> Everyone refreshes drinks</li>
        <li><strong>Game goes to overtime:</strong> Everyone takes a shot</li>
      </ul>

      <h3>Fantasy Football Thanksgiving</h3>
      <p>If you have fantasy players in Thursday games:</p>
      <ul>
        <li>Your player scores = give out drinks equal to points</li>
        <li>Your player gets hurt = Take a drink for every week they&apos;re out</li>
        <li>Your player benched = You should have started someone else, drink</li>
      </ul>

      <h2 id="dinner">Dinner Table Games</h2>

      <h3>The Gratitude Game</h3>
      <ul>
        <li>Go around the table saying what you&apos;re thankful for</li>
        <li>Can&apos;t repeat previous answers</li>
        <li>If you repeat something = drink</li>
        <li>If you make someone emotional = they drink and you drink</li>
        <li>Skip your turn = take a shot</li>
      </ul>

      <h3>Turkey Talk</h3>
      <p>During dinner, drink when:</p>
      <ul>
        <li>Someone says &quot;delicious&quot;</li>
        <li>Someone asks for seconds</li>
        <li>Someone mentions their diet (before or after Thanksgiving)</li>
        <li>A dish runs out</li>
        <li>Someone mentions Black Friday</li>
        <li>A food fight breaks out (finish your drink)</li>
      </ul>

      <h3>Two Truths and a Lie: Thanksgiving Edition</h3>
      <ul>
        <li>Each person shares two true Thanksgiving memories and one fake</li>
        <li>Others guess the lie</li>
        <li>Guess wrong = drink</li>
        <li>Fool everyone = give out drinks</li>
      </ul>

      <h2 id="drinks">Festive Thanksgiving Drinks</h2>

      <h3>Signature Cocktails</h3>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">The Gobbler</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• 2 oz bourbon</li>
          <li>• 1 oz apple cider</li>
          <li>• 1/2 oz maple syrup</li>
          <li>• Dash of cinnamon</li>
          <li>• Garnish with apple slice</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Cranberry Mule</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• 2 oz vodka</li>
          <li>• 2 oz cranberry juice</li>
          <li>• 4 oz ginger beer</li>
          <li>• Lime wedge</li>
          <li>• Fresh cranberries for garnish</li>
        </ul>
      </div>

      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Pumpkin Pie Shot</h4>
        <ul className="text-gray-300 space-y-1">
          <li>• 1 oz Kahlua</li>
          <li>• 1 oz Bailey&apos;s</li>
          <li>• Dash of pumpkin spice</li>
          <li>• Whipped cream topping</li>
        </ul>
      </div>

      <h3>Easy Batch Options</h3>
      <ul>
        <li><strong>Spiked Apple Cider:</strong> Hot cider + bourbon + cinnamon sticks</li>
        <li><strong>Cranberry Punch:</strong> Cranberry juice + vodka + ginger ale</li>
        <li><strong>Wine:</strong> Pinot noir with turkey, or sparkling for toasts</li>
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <a href="https://www.amazon.com/s?k=thanksgiving+wine+glasses&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Festive Wine Glasses</h4>
          <p className="text-gray-400 text-sm">Themed stemless glasses</p>
          <span className="text-neon-pink font-bold">$15-25</span>
        </a>
        <a href="https://www.amazon.com/s?k=copper+mule+mugs&tag=sipwiki-20" target="_blank" rel="noopener noreferrer" className="block p-4 bg-dark-800 rounded-lg border border-dark-600 hover:border-neon-pink/50 transition-colors">
          <h4 className="font-bold text-white">Copper Mule Mugs</h4>
          <p className="text-gray-400 text-sm">For cranberry mules</p>
          <span className="text-neon-pink font-bold">$25-40</span>
        </a>
      </div>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Holiday Hosting Tip</h3>
        <p className="text-gray-300">
          Make sure there are plenty of non-alcoholic options too - some family members might
          be in recovery, pregnant, designated driving, or just not drinking. Sparkling cider,
          mocktails, and fancy sodas make everyone feel included.
        </p>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Happy Thanksgiving! 🦃</h3>
        <p className="text-gray-400 mb-4">
          Check out more holiday and party games.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/thanksgiving-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Thanksgiving Games Guide →
          </Link>
          <Link
            href="/guides/sports-drinking-games"
            className="inline-block px-6 py-3 bg-dark-600 text-white rounded-lg hover:bg-dark-500 transition-colors"
          >
            Football Drinking Games
          </Link>
        </div>
      </div>
    </BlogLayout>
  );
}
