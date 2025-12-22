import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Drinking Games for Large Groups (10+ People) | Party Games 2024",
  description: "The ultimate list of drinking games for large groups and big parties. Team games, elimination games, and activities that keep 10-30+ people entertained. Perfect for house parties!",
  keywords: [
    "drinking games for large groups",
    "drinking games for big groups",
    "party games for large groups",
    "drinking games for 10 people",
    "drinking games for 20 people",
    "big party drinking games",
    "team drinking games",
    "group drinking games",
    "drinking games for parties",
    "college party drinking games",
    "house party games",
    "drinking games for big parties",
    "outdoor drinking games for large groups",
    "flip cup for large groups",
  ],
  openGraph: {
    title: "15 Best Drinking Games for Large Groups",
    description: "Keep 10-30+ people entertained with these epic large group drinking games. Team battles, elimination rounds, and more!",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-large-groups",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drinking Games for Large Groups",
    description: "Epic games for big parties. Team games, elimination rounds, and activities for 10+ people.",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-large-groups",
  },
};

export default function DrinkingGamesLargeGroupsPage() {
  const games = [
    {
      name: "Flip Cup",
      players: "8-20+",
      type: "Team",
      description: "Two teams race to chug and flip their cups. Fast, loud, and incredibly fun.",
      why: "Perfect team energy, quick rounds, everyone's always engaged.",
      link: "/game/flip-cup",
    },
    {
      name: "Rage Cage",
      players: "6-15",
      type: "Elimination",
      description: "Race to bounce balls into cups. Stack on the person next to you to make them drink the center cups.",
      why: "High energy, constant action, dramatic eliminations.",
      link: "/game/rage-cage",
    },
    {
      name: "Civil War",
      players: "6-12",
      type: "Team",
      description: "Chaotic free-for-all beer pong. No turns - just constant throwing and drinking.",
      why: "Non-stop action, team strategy, controlled chaos.",
      link: "/game/civil-war",
    },
    {
      name: "Kings Cup",
      players: "5-15",
      type: "Circle",
      description: "Draw cards and follow rules. Builds up to someone drinking the King's Cup.",
      why: "Everyone participates, customizable rules, building tension.",
      link: "/game/kings-cup",
    },
    {
      name: "Chandelier",
      players: "6-12",
      type: "Circle",
      description: "Bounce a ball at the center cup surrounded by player cups. Hit the center? Everyone races to flip.",
      why: "Combines skill and luck, dramatic sudden-death moments.",
      link: "/game/chandelier",
    },
    {
      name: "Slap Cup",
      players: "8-20",
      type: "Elimination",
      description: "Like Rage Cage but with slapping the cup instead of stacking. Even more intense.",
      why: "Maximum chaos, satisfying slaps, loud reactions.",
      link: "/game/slap-cup",
    },
    {
      name: "Most Likely To",
      players: "8-30+",
      type: "Voting",
      description: "Vote on who's most likely to do something. Scales infinitely with group size.",
      why: "No equipment needed, hilarious revelations, works with huge groups.",
      link: "/game/most-likely-to",
    },
    {
      name: "Never Have I Ever",
      players: "6-20+",
      type: "Circle",
      description: "Admit what you've done by drinking. Classic for learning surprising things about friends.",
      why: "Great icebreaker, no props needed, good for mixed groups.",
      link: "/game/never-have-i-ever",
    },
    {
      name: "Cheers to the Governor",
      players: "8-20",
      type: "Circle",
      description: "Count to 21 but add silly rules for numbers. Gets increasingly chaotic.",
      why: "Escalating difficulty, customized inside jokes, hilarious fails.",
      link: "/game/cheers-to-the-governor",
    },
    {
      name: "Baseball (Drinking)",
      players: "8-16",
      type: "Team",
      description: "Beer pong meets baseball. Hit cups for singles, doubles, etc. Full inning structure.",
      why: "Great for sports fans, team competition, extended gameplay.",
      link: "/game/baseball",
    },
    {
      name: "Vietnam War",
      players: "8-16",
      type: "Team",
      description: "Asymmetric beer pong variant where teams have different setups and rules.",
      why: "Strategic depth, unique gameplay, balances skill differences.",
      link: "/game/vietnam-war",
    },
    {
      name: "Medusa",
      players: "8-20",
      type: "Circle",
      description: "Look down, then up on command. Lock eyes? Race to shout their name first.",
      why: "Fast rounds, dramatic moments, works with any group size.",
      link: "/game/medusa",
    },
    {
      name: "Power Hour",
      players: "Any",
      type: "Individual",
      description: "60 shots of beer in 60 minutes. Play as a group activity with music cues.",
      why: "Everyone drinks together, good background activity, customizable playlist.",
      link: "/game/power-hour",
    },
    {
      name: "Beeramid",
      players: "6-12",
      type: "Cards",
      description: "Cards dealt to players, pyramid built in center. Call bluffs and give/take drinks.",
      why: "Bluffing and strategy, escalating stakes, dramatic reveals.",
      link: "/game/beeramid",
    },
    {
      name: "Thunderstruck",
      players: "8+",
      type: "Music",
      description: "Drink while AC/DC plays. Each 'Thunder' passes the drinking to the next person.",
      why: "Great sing-along energy, suspenseful waiting, shared experience.",
      link: "/game/thunderstruck",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Drinking Games for Large Groups",
    "description": "Curated list of the best drinking games for parties with 10 or more people.",
    "numberOfItems": games.length,
    "itemListElement": games.map((game, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": game.name,
      "description": game.description,
    })),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the best drinking games for large groups?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best drinking games for large groups include Flip Cup (team racing), Rage Cage (elimination style), Kings Cup (card-based circle game), Most Likely To (voting game), and Thunderstruck (music-based). These games keep 10-20+ people engaged and entertained."
        }
      },
      {
        "@type": "Question",
        "name": "What drinking games work for 20+ people?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For 20+ people, the best options are Most Likely To (scales infinitely), Never Have I Ever (circle game), Flip Cup (split into teams), and Power Hour (everyone drinks together). These games don't slow down with more people."
        }
      },
      {
        "@type": "Question",
        "name": "What are good team drinking games?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Great team drinking games include Flip Cup, Civil War (chaotic beer pong), Baseball (beer pong with innings), and Vietnam War (asymmetric team game). These games create exciting team rivalries and competition."
        }
      },
      {
        "@type": "Question",
        "name": "How do you organize drinking games at a big party?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For big parties: 1) Have multiple games running in different areas, 2) Use team games like Flip Cup to keep everyone involved, 3) Start with simple games like Most Likely To before complex ones, 4) Designate a game master to explain rules and keep things moving."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <GuideLayout
        title="15 Best Drinking Games for Large Groups (10+ People)"
        description="Throwing a big party? You need games that keep everyone involved, not bored. These drinking games are specifically designed for large groups of 10-30+ people. From team battles to elimination rounds, we've got your party covered."
        breadcrumb="Large Group Games"
        relatedGames={[
          { name: "Flip Cup", slug: "flip-cup", description: "Classic team relay game" },
          { name: "Rage Cage", slug: "rage-cage", description: "Intense elimination game" },
          { name: "Kings Cup", slug: "kings-cup", description: "Card-based circle game" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for large groups?"
          answer="Best large group drinking games: (1) Flip Cup - team relay for 8-20+ people, (2) Rage Cage - elimination game for 6-15, (3) Kings Cup - circle game for 5-15, (4) Most Likely To - voting game for 8-30+, (5) Slap Cup - elimination for 8-20. Team games (Flip Cup, Civil War) work best for 10+ people. Circle games (Never Have I Ever, Cheers to the Governor) scale infinitely. Elimination games (Rage Cage, Slap Cup) create dramatic moments. For 20+ people, run multiple game stations simultaneously."
          tips={[
            "Team games > turn-based for big groups",
            "Run multiple game stations for 20+ people",
            "Start simple (Most Likely To) then escalate to Rage Cage",
            "Designate a game master to explain rules"
          ]}
          variant="primary"
        />

        <h2>What Makes a Great Large Group Drinking Game?</h2>
        <p>Not all drinking games work with big crowds. The best large group games have:</p>
        <ul>
          <li><strong>Minimal downtime</strong> - Nobody waits too long for their turn</li>
          <li><strong>Easy rules</strong> - Explaining to 15 drunk people should be simple</li>
          <li><strong>Spectator appeal</strong> - Fun to watch even when not playing</li>
          <li><strong>Scalability</strong> - Works with 10, 15, or 20+ people</li>
          <li><strong>High energy</strong> - Keeps the party atmosphere going</li>
        </ul>

        <h2>The Best Large Group Drinking Games</h2>

        <div className="not-prose my-8">
          <div className="space-y-4">
            {games.map((game, index) => (
              <div key={game.name} className="p-5 bg-dark-800 rounded-xl border border-dark-600">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-neon-pink/20 rounded-lg flex items-center justify-center text-neon-pink font-bold">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-bold text-white text-lg">{game.name}</h3>
                      <span className="text-xs px-2 py-1 bg-dark-700 rounded-full text-gray-400">{game.players}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        game.type === 'Team' ? 'bg-blue-500/20 text-blue-400' :
                        game.type === 'Elimination' ? 'bg-red-500/20 text-red-400' :
                        game.type === 'Circle' ? 'bg-green-500/20 text-green-400' :
                        game.type === 'Voting' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {game.type}
                      </span>
                      {game.link && (
                        <Link href={game.link} className="text-neon-pink text-sm hover:underline">Play →</Link>
                      )}
                    </div>
                    <p className="text-gray-300 mb-2">{game.description}</p>
                    <p className="text-sm text-gray-500"><strong className="text-neon-pink">Why it works:</strong> {game.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2>Games by Type</h2>

        <h3>Team Games (Best for Competition)</h3>
        <p>Nothing brings party energy like team rivalry:</p>
        <ul>
          <li><strong>Flip Cup</strong> - The gold standard. Fast, loud, and everyone gets involved</li>
          <li><strong>Civil War</strong> - Chaotic beer pong with no turns. Pure chaos</li>
          <li><strong>Baseball</strong> - For groups that want structured competition</li>
        </ul>

        <h3>Elimination Games (Best for Drama)</h3>
        <p>Watch people get knocked out one by one:</p>
        <ul>
          <li><strong>Rage Cage</strong> - Stack on your neighbor and watch them scramble</li>
          <li><strong>Slap Cup</strong> - Same energy, more satisfying slaps</li>
          <li><strong>Chandelier</strong> - Sudden death when someone hits the center cup</li>
        </ul>

        <h3>Circle Games (Best for Talking)</h3>
        <p>Everyone sits together and shares:</p>
        <ul>
          <li><strong>Kings Cup</strong> - Card-based with customizable rules</li>
          <li><strong>Never Have I Ever</strong> - Learn surprising things about friends</li>
          <li><strong>Cheers to the Governor</strong> - Counting with increasingly silly rules</li>
        </ul>

        <h3>No-Prop Games (Best for Spontaneity)</h3>
        <p>No setup required:</p>
        <ul>
          <li><strong>Most Likely To</strong> - Works with 30+ people easily</li>
          <li><strong>Medusa</strong> - Quick rounds, dramatic eye contact moments</li>
          <li><strong>Thunderstruck</strong> - Just need the song</li>
        </ul>

        <h2>How to Run Games at a Big Party</h2>

        <h3>1. Designate a Game Master</h3>
        <p>Someone needs to explain rules, settle disputes, and keep things moving. This person should stay relatively sober.</p>

        <h3>2. Set Up Multiple Stations</h3>
        <p>For parties over 15 people, run different games in different areas:</p>
        <ul>
          <li><strong>Table area</strong> - Flip Cup, Beer Pong, Rage Cage</li>
          <li><strong>Living room</strong> - Kings Cup, Never Have I Ever</li>
          <li><strong>Backyard</strong> - Cornhole (with drinking rules), outdoor games</li>
        </ul>

        <h3>3. Start Simple, Then Escalate</h3>
        <p>Begin with games everyone knows (Never Have I Ever), then introduce more complex ones (Civil War) as the night goes on.</p>

        <h3>4. Have Supplies Ready</h3>
        <ul>
          <li>Extra cups (you&apos;ll need more than you think)</li>
          <li>Multiple ping pong balls</li>
          <li>Paper towels for spills</li>
          <li>A deck of cards</li>
          <li>Speaker for music games</li>
        </ul>

        <h2>Games for Specific Situations</h2>

        <h3>Outdoor/Backyard Parties</h3>
        <ul>
          <li><strong>Flip Cup</strong> - Needs minimal space</li>
          <li><strong>KanJam</strong> - Great outdoor drinking game</li>
          <li><strong>Dizzy Bat</strong> - If you want to go wild</li>
        </ul>

        <h3>House Parties with Mixed Crowds</h3>
        <ul>
          <li><strong>Most Likely To</strong> - Works even if people don&apos;t know each other well</li>
          <li><strong>Kings Cup</strong> - Easy to explain, everyone participates</li>
          <li><strong>Power Hour</strong> - Background activity while people mingle</li>
        </ul>

        <h3>College Parties</h3>
        <ul>
          <li><strong>Rage Cage</strong> - High energy matches college vibes</li>
          <li><strong>Civil War</strong> - Beer pong on steroids</li>
          <li><strong>Thunderstruck</strong> - Everyone knows the song</li>
        </ul>

        <h2>Frequently Asked Questions</h2>

        <h3>How many cups do I need for a large group party?</h3>
        <p>Plan for 5-10 cups per person for the night. For a party of 20, that&apos;s 100-200 cups. Solo cups are cheap - better to have extra.</p>

        <h3>What if people don&apos;t know the rules?</h3>
        <p>Start with Never Have I Ever or Most Likely To - everyone understands these immediately. For complex games, have your Game Master do a quick demo round.</p>

        <h3>How do I keep everyone involved?</h3>
        <p>Rotate team games frequently. If someone&apos;s been spectating for a while, invite them onto the next team. Team games are best because even while waiting, you&apos;re cheering for your side.</p>

        <h3>What about people who don&apos;t drink?</h3>
        <p>Every game works with any beverage. Designate &quot;drinking&quot; as taking a sip of whatever&apos;s in your cup - water, soda, beer, whatever. The games are fun regardless.</p>

        <h2>Browse More Games</h2>
        <p>Looking for more options? Check out our full <Link href="/games/large-groups" className="text-neon-pink hover:underline">large group games collection</Link> or use our <Link href="/party-planner" className="text-neon-pink hover:underline">party planner calculator</Link> to figure out how much you need for your party!</p>
      </GuideLayout>
    </>
  );
}
