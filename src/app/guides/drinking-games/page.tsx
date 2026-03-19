import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer, ComparisonTable, GameComparisonTable } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinking Games: The Complete Guide to 100+ Party Games (2025)",
  description: "The ultimate drinking games guide. Learn rules for 100+ games including Beer Pong, Kings Cup, Flip Cup, and more. Organized by player count, materials, and occasion.",
  keywords: [
    "drinking games",
    "party drinking games",
    "drinking game rules",
    "best drinking games",
    "drinking games list",
    "adult drinking games",
    "college drinking games",
    "fun drinking games",
    "easy drinking games",
    "popular drinking games",
  ],
  openGraph: {
    title: "Drinking Games: Complete Guide to 100+ Party Games",
    description: "The definitive drinking games encyclopedia. Rules, variations, and tips for every occasion.",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games",
  },
};

export default function DrinkingGamesPillarPage() {
  // Schema for the pillar page
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Complete Guide to Drinking Games",
    "description": "Comprehensive encyclopedia of drinking games with rules, strategies, and recommendations for every occasion.",
    "author": {
      "@type": "Organization",
      "name": "SipWiki",
      "url": "https://sipwiki.app"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SipWiki",
      "url": "https://sipwiki.app",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sipwiki.app/logo.png"
      }
    },
    "datePublished": "2024-12-22",
    "dateModified": "2024-12-22",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <GuideLayout
        title="Drinking Games: The Ultimate Guide"
        description="Welcome to the most comprehensive drinking games encyclopedia on the internet. Whether you're hosting your first college party or you're a seasoned party veteran, this guide covers everything you need to know about drinking games."
        breadcrumb="Drinking Games Guide"
      >
        {/* Quick Answer for AI Overviews */}
        <QuickAnswer
          question="What are the best drinking games?"
          answer="The most popular drinking games are Beer Pong (throwing balls into cups), Kings Cup (card-based with unique rules per card), Flip Cup (team relay race), Rage Cage (fast-paced bouncing game), and Never Have I Ever (social question game). Beer Pong and Flip Cup are best for large groups, while Kings Cup works great for any size party. Choose based on your group size, available materials, and desired energy level."
          tips={[
            "Beer Pong: Best for competitive players, needs table and cups",
            "Kings Cup: Perfect for getting to know people, just need cards",
            "Flip Cup: High energy team game, simple setup",
            "Never Have I Ever: No materials needed, great icebreaker"
          ]}
          variant="primary"
        />

        <h2>What Are Drinking Games?</h2>
        <p>
          Drinking games are social activities that combine rules, competition, and drinking into entertaining party experiences. They range from skill-based games like <Link href="/games/beer-pong" className="text-neon-pink hover:underline">Beer Pong</Link> to social games like <Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Never Have I Ever</Link>. The best drinking games create memorable moments, break the ice at parties, and bring people together.
        </p>
        <p>
          This guide covers <strong>over 100 drinking games</strong>, organized by player count, materials needed, difficulty level, and occasion. Whether you're looking for <Link href="/guides/drinking-games-for-2" className="text-neon-pink hover:underline">games for couples</Link>, <Link href="/guides/drinking-games-for-large-groups" className="text-neon-pink hover:underline">large group games</Link>, or <Link href="/guides/drinking-games-without-cards" className="text-neon-pink hover:underline">games that need no equipment</Link>, we've got you covered.
        </p>

        <h2>The Most Popular Drinking Games</h2>
        <p>These are the games that have stood the test of time and are played at parties worldwide:</p>

        <h3>1. Beer Pong - The King of Party Games</h3>
        <p>
          <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link> is the quintessential drinking game. Two teams stand at opposite ends of a table with triangular formations of cups. Players throw ping pong balls into opponent cups. When a ball lands, the defending team drinks and removes the cup. First team to eliminate all cups wins.
        </p>
        <p><strong>Why it's popular:</strong> Perfect mix of skill and luck, competitive but social, works for all skill levels.</p>
        <p><strong>Best for:</strong> 4-8 players, competitive groups, parties with tables available.</p>

        <h3>2. Kings Cup - The Ultimate Card Game</h3>
        <p>
          <Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup</Link> (also called Ring of Fire or Circle of Death) is a card-based game where each card has a unique rule. Place a cup in the center, spread cards around it, and draw in turn. Cards trigger actions like "Waterfall" (everyone drinks), "Categories" (name items in a category), or "Make a Rule" (create a custom rule).
        </p>
        <p><strong>Why it's popular:</strong> Easy to learn, customizable rules, great for mixed groups, minimal setup.</p>
        <p><strong>Best for:</strong> 3-12 players, getting to know people, parties without much space.</p>

        <h3>3. Flip Cup - Fast-Paced Team Game</h3>
        <p>
          <Link href="/guides/flip-cup-rules" className="text-neon-pink hover:underline">Flip Cup</Link> is a relay race drinking game. Teams line up on opposite sides of a table. Each player drinks their cup, then flips it upside down by flicking the rim. First team to flip all cups wins.
        </p>
        <p><strong>Why it's popular:</strong> High energy, team-building, easy to learn, scales to large groups.</p>
        <p><strong>Best for:</strong> 6-20+ players, competitive teams, outdoor parties.</p>

        <h3>4. Rage Cage (Stack Cup) - Chaos Unleashed</h3>
        <p>
          <Link href="/guides/rage-cage-rules" className="text-neon-pink hover:underline">Rage Cage</Link> is a fast-paced game where players bounce ping pong balls into cups. If you make your shot while the person to your left is still trying, you "stack" your cup on theirs and they must drink a penalty cup and continue with a new cup. Last player standing wins.
        </p>
        <p><strong>Why it's popular:</strong> Intense, unpredictable, keeps everyone engaged simultaneously.</p>
        <p><strong>Best for:</strong> 5-15 players, high-energy crowds, experienced drinkers.</p>

        <h3>5. Never Have I Ever - The Social Classic</h3>
        <p>
          <Link href="/guides/never-have-i-ever-questions" className="text-neon-pink hover:underline">Never Have I Ever</Link> requires zero materials. Players take turns saying "Never have I ever [done something]." Anyone who has done it drinks. Great for learning secrets and creating funny moments.
        </p>
        <p><strong>Why it's popular:</strong> No setup needed, works anywhere, perfect icebreaker, reveals interesting stories.</p>
        <p><strong>Best for:</strong> Any group size, new friends, low-key gatherings.</p>

        <h2>How to Choose the Perfect Drinking Game</h2>
        <p>Not all drinking games are created equal. Here's how to pick the right one for your party:</p>

        <h3>By Player Count</h3>
        <ul>
          <li><strong>2 Players:</strong> <Link href="/guides/drinking-games-for-2" className="text-neon-pink hover:underline">Never Have I Ever</Link>, Truth or Dare, Power Hour, Higher or Lower</li>
          <li><strong>3-5 Players:</strong> <Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup</Link>, <Link href="/guides/ride-the-bus-rules" className="text-neon-pink hover:underline">Ride the Bus</Link>, Quarters, Most Likely To</li>
          <li><strong>6-10 Players:</strong> <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link>, <Link href="/guides/flip-cup-rules" className="text-neon-pink hover:underline">Flip Cup</Link>, <Link href="/guides/rage-cage-rules" className="text-neon-pink hover:underline">Rage Cage</Link>, Drunk Jenga</li>
          <li><strong>10+ Players:</strong> Flip Cup, <Link href="/guides/civil-war-rules" className="text-neon-pink hover:underline">Civil War</Link>, Chandelier, Thunderstruck</li>
        </ul>

        <h3>By Materials Needed</h3>
        <ul>
          <li><strong>No Materials:</strong> <Link href="/guides/never-have-i-ever-questions" className="text-neon-pink hover:underline">Never Have I Ever</Link>, <Link href="/guides/most-likely-to-questions" className="text-neon-pink hover:underline">Most Likely To</Link>, Thumper, Categories</li>
          <li><strong>Just Cards:</strong> <Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup</Link>, <Link href="/guides/ride-the-bus-rules" className="text-neon-pink hover:underline">Ride the Bus</Link>, Higher or Lower, Pyramid</li>
          <li><strong>Cups & Balls:</strong> <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link>, <Link href="/guides/flip-cup-rules" className="text-neon-pink hover:underline">Flip Cup</Link>, <Link href="/guides/rage-cage-rules" className="text-neon-pink hover:underline">Rage Cage</Link>, Slap Cup</li>
          <li><strong>Special Equipment:</strong> Drunk Jenga (Jenga set), Quarters (quarter coin), Beer Ball (baseball)</li>
        </ul>

        <h3>By Energy Level</h3>
        <ul>
          <li><strong>Chill/Social:</strong> Never Have I Ever, Kings Cup, Two Truths and a Lie, Movie Drinking Games</li>
          <li><strong>Medium Energy:</strong> Beer Pong, Quarters, Drunk Jenga, Categories</li>
          <li><strong>High Energy:</strong> Flip Cup, Rage Cage, Slap Cup, Civil War</li>
        </ul>

        <h2>Game Comparison: Find Your Perfect Match</h2>
        <GameComparisonTable
          games={[
            {
              name: "Beer Pong",
              slug: "beer-pong",
              players: "2-8",
              difficulty: "Medium",
              duration: "15-30 min",
              materials: "Cups, balls, table",
              drunkenness: 3,
              teamGame: true
            },
            {
              name: "Kings Cup",
              slug: "kings-cup",
              players: "3-12",
              difficulty: "Easy",
              duration: "20-40 min",
              materials: "Cards, cup",
              drunkenness: 4,
              teamGame: false
            },
            {
              name: "Flip Cup",
              slug: "flip-cup",
              players: "6-20+",
              difficulty: "Easy",
              duration: "5-15 min",
              materials: "Cups only",
              drunkenness: 4,
              teamGame: true
            },
            {
              name: "Rage Cage",
              slug: "rage-cage",
              players: "5-15",
              difficulty: "Medium",
              duration: "10-20 min",
              materials: "Cups, balls",
              drunkenness: 5,
              teamGame: false
            },
          ]}
        />

        <h2>Drinking Games by Occasion</h2>
        <p>Different occasions call for different games. Here's what works best:</p>

        <h3>College Parties</h3>
        <p>College parties need games that handle large groups and create energy. Top picks:</p>
        <ul>
          <li><Link href="/guides/flip-cup-rules" className="text-neon-pink hover:underline">Flip Cup</Link> - Tournament bracket for competition</li>
          <li><Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong</Link> - Multiple tables, winner-stays format</li>
          <li><Link href="/guides/rage-cage-rules" className="text-neon-pink hover:underline">Rage Cage</Link> - Gets everyone involved quickly</li>
          <li><Link href="/guides/kings-cup-rules" className="text-neon-pink hover:underline">Kings Cup</Link> - For smaller pre-game groups</li>
        </ul>

        <h3>Birthday Parties</h3>
        <p>Birthday celebrations need games that spotlight the birthday person:</p>
        <ul>
          <li>Modified Kings Cup with birthday-specific rules</li>
          <li>Power Hour with birthday person choosing songs</li>
          <li>Never Have I Ever focused on birthday person stories</li>
          <li>Beer Pong tournament with birthday person as judge</li>
        </ul>
        <p>Full guide: <Link href="/guides/birthday-drinking-games" className="text-neon-pink hover:underline">Birthday Drinking Games</Link></p>

        <h3>Bachelor/Bachelorette Parties</h3>
        <p>Pre-wedding celebrations need memorable, photo-worthy moments:</p>
        <ul>
          <li>Scavenger hunt drinking games</li>
          <li>Custom Kings Cup with wedding-themed rules</li>
          <li>Team-based competitions (bride's team vs groom's team)</li>
          <li>Truth or Dare with wedding stories</li>
        </ul>
        <p>Full guides: <Link href="/guides/bachelor-party-drinking-games" className="text-neon-pink hover:underline">Bachelor Party Games</Link> | <Link href="/guides/bachelorette-party-drinking-games" className="text-neon-pink hover:underline">Bachelorette Party Games</Link></p>

        <h3>Tailgates & Outdoor Parties</h3>
        <p>Outdoor settings need durable games that work in any weather:</p>
        <ul>
          <li>Cornhole drinking version</li>
          <li>Beer Pong (bring portable tables)</li>
          <li>Flip Cup (works on any flat surface)</li>
          <li>Kan Jam drinking rules</li>
        </ul>
        <p>Full guide: <Link href="/guides/tailgate-drinking-games" className="text-neon-pink hover:underline">Tailgate Drinking Games</Link></p>

        <h2>Complete Drinking Games Directory</h2>
        <p>Explore our complete collection organized by category:</p>

        <h3>By Player Count</h3>
        <ul>
          <li><Link href="/guides/drinking-games-for-2" className="text-neon-pink hover:underline">Drinking Games for 2 People</Link> - Perfect for couples or small gatherings</li>
          <li><Link href="/guides/drinking-games-for-3" className="text-neon-pink hover:underline">Drinking Games for 3 People</Link> - Trio-friendly options</li>
          <li><Link href="/guides/drinking-games-for-4" className="text-neon-pink hover:underline">Drinking Games for 4 People</Link> - Ideal foursome games</li>
          <li><Link href="/guides/drinking-games-for-5" className="text-neon-pink hover:underline">Drinking Games for 5 People</Link> - Five player favorites</li>
          <li><Link href="/guides/drinking-games-for-large-groups" className="text-neon-pink hover:underline">Large Group Drinking Games</Link> - 10+ player games</li>
        </ul>

        <h3>By Materials</h3>
        <ul>
          <li><Link href="/guides/drinking-games-without-cards" className="text-neon-pink hover:underline">Drinking Games Without Cards</Link> - No deck required</li>
          <li><Link href="/guides/best-card-drinking-games" className="text-neon-pink hover:underline">Card Drinking Games</Link> - Classic card-based fun</li>
          <li><Link href="/guides/best-dice-drinking-games" className="text-neon-pink hover:underline">Dice Drinking Games</Link> - Roll and drink</li>
        </ul>

        <h3>By Vibe</h3>
        <ul>
          <li><Link href="/guides/chill-drinking-games" className="text-neon-pink hover:underline">Chill Drinking Games</Link> - Low-key social games</li>
          <li><Link href="/guides/high-energy-drinking-games" className="text-neon-pink hover:underline">High Energy Drinking Games</Link> - Fast-paced action</li>
          <li><Link href="/guides/competitive-drinking-games" className="text-neon-pink hover:underline">Competitive Drinking Games</Link> - For winners only</li>
          <li><Link href="/guides/icebreaker-drinking-games" className="text-neon-pink hover:underline">Icebreaker Drinking Games</Link> - Meet new people</li>
        </ul>

        <h2>Drinking Game Safety & Responsibility</h2>
        <p>Drinking games should be fun, not dangerous. Follow these essential safety guidelines:</p>

        <h3>Know Your Limits</h3>
        <ul>
          <li>Pace yourself - drinking games can escalate quickly</li>
          <li>Eat before and during drinking</li>
          <li>Drink water between rounds</li>
          <li>Never feel pressured to finish games</li>
        </ul>

        <h3>Create a Safe Environment</h3>
        <ul>
          <li>Plan transportation beforehand - designate drivers or arrange rideshares</li>
          <li>Never drive after playing drinking games</li>
          <li>Look out for friends who've had too much</li>
          <li>Have water and snacks readily available</li>
        </ul>

        <h3>Alternative Options</h3>
        <ul>
          <li>Use non-alcoholic beverages - games work with any drink</li>
          <li>Lower alcohol content (beer vs spirits)</li>
          <li>Reduce cup fill levels</li>
          <li>Set maximum rounds limits</li>
        </ul>

        <h2>Pro Tips for Hosting Drinking Game Parties</h2>
        <p>Make your party legendary with these hosting tips:</p>

        <h3>Preparation</h3>
        <ul>
          <li><strong>Stock up on supplies:</strong> More cups, balls, and cards than you think you need</li>
          <li><strong>Set up multiple stations:</strong> Multiple Beer Pong tables, Kings Cup circles, etc.</li>
          <li><strong>Create a tournament bracket:</strong> Adds competitive structure</li>
          <li><strong>Prep playlist:</strong> Music sets the energy level</li>
        </ul>

        <h3>During the Party</h3>
        <ul>
          <li><strong>Explain rules clearly:</strong> Quick tutorial before each game starts</li>
          <li><strong>Enforce house rules:</strong> Consistency prevents arguments</li>
          <li><strong>Rotate games:</strong> Keep things fresh, prevent fatigue</li>
          <li><strong>Document moments:</strong> Photos/videos create memories</li>
        </ul>

        <h3>Supply Checklist</h3>
        <p>Essential items for a drinking game party:</p>
        <ul>
          <li>✓ 100+ plastic cups (red Solo cups work best)</li>
          <li>✓ 2-3 decks of playing cards</li>
          <li>✓ 6-10 ping pong balls</li>
          <li>✓ Portable tables (if playing Beer Pong/Flip Cup)</li>
          <li>✓ Large pitcher for water/rinse cup</li>
          <li>✓ Trash bags and cleaning supplies</li>
          <li>✓ First aid kit (just in case)</li>
          <li>✓ Phone charger stations</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>What's the easiest drinking game to learn?</h3>
        <p>
          Never Have I Ever is the easiest - zero materials, simple concept (drink if you've done the thing), works anywhere. Kings Cup is also beginner-friendly once you memorize the card meanings.
        </p>

        <h3>What drinking game gets you drunk fastest?</h3>
        <p>
          Power Hour (shot of beer every minute for 60 minutes) and Rage Cage (continuous fast-paced drinking) are the fastest. Century Club (100 shots in 100 minutes) is even more intense. Always pace yourself!
        </p>

        <h3>Can you play drinking games without alcohol?</h3>
        <p>
          Absolutely! All drinking games work with water, juice, soda, or mocktails. The game mechanics are fun regardless of what you're drinking. Great for designated drivers or alcohol-free events.
        </p>

        <h3>What's the most popular drinking game in college?</h3>
        <p>
          Beer Pong is #1 in colleges, followed by Flip Cup and Kings Cup. These three are played at virtually every college party in America.
        </p>

        <h3>How do you win at Beer Pong?</h3>
        <p>
          Consistency beats power - use a gentle arc shot, aim for back cups (easier angles), practice your bounce shots, stay hydrated (steady hands), and communicate with your partner. Full strategy guide: <Link href="/guides/beer-pong-rules" className="text-neon-pink hover:underline">Beer Pong Rules</Link>
        </p>

        <h2>Start Playing Now</h2>
        <p>
          Ready to get the party started? Browse our collection of <Link href="/games" className="text-neon-pink hover:underline">30+ drinking games with full rules</Link>, use our <Link href="/party-planner" className="text-neon-pink hover:underline">party planner calculator</Link> to figure out how much alcohol you need, or try our <Link href="/spin" className="text-neon-pink hover:underline">random game picker</Link> if you can't decide.
        </p>
        <p>
          For interactive experiences, check out our <Link href="/play/kings-cup" className="text-neon-pink hover:underline">AI-powered Live Mode</Link> where a virtual referee helps you play popular games with automated rules and timers.
        </p>

        <div className="mt-12 p-6 bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 rounded-xl border border-neon-pink/30">
          <h3 className="text-xl font-bold text-white mb-2">🎉 Party Planning Made Easy</h3>
          <p className="text-gray-300 mb-4">
            Get personalized game recommendations, calculate exact alcohol amounts, and access our complete rule library.
          </p>
          <div className="flex gap-3">
            <Link href="/party-planner" className="px-4 py-2 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors">
              Plan My Party
            </Link>
            <Link href="/games" className="px-4 py-2 bg-dark-700 text-white rounded-lg hover:bg-dark-600 transition-colors">
              Browse All Games
            </Link>
          </div>
        </div>
      </GuideLayout>
    </>
  );
}
