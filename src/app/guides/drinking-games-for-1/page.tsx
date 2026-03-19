import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solo Drinking Games: Best Games to Play Alone (2025)",
  description: "The best drinking games you can play by yourself. Movie drinking games, video game rules, solo card games, and more. Perfect for a night in.",
  keywords: [
    "solo drinking games",
    "drinking games for 1 person",
    "drinking games alone",
    "drinking games by yourself",
    "single player drinking games",
    "drinking games for one",
    "movie drinking games solo",
    "video game drinking games",
  ],
  openGraph: {
    title: "Solo Drinking Games: Best Games to Play Alone",
    description: "Fun drinking games you can play by yourself. Movies, video games, and more!",
    type: "article",
    url: "https://sipwiki.app/guides/drinking-games-for-1",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/drinking-games-for-1",
  },
};

export default function DrinkingGamesFor1Page() {
  const quickAnswerTips = [
    "Movie and TV drinking games are the classic solo option",
    "Video game drinking games add stakes to gaming sessions",
    "Solo card games like Solitaire can have drinking rules",
    "Always pace yourself when drinking alone"
  ];

  const games = [
    {
      name: "Movie Drinking Games",
      category: "TV/Movies",
      description: "Pick a movie, set rules for when to drink (tropes, phrases, etc.). Classic solo activity.",
      link: "/guides/movie-drinking-games",
      intensity: "Varies",
      whyItWorks: "Entertainment + drinking combined"
    },
    {
      name: "TV Show Binge Rules",
      category: "TV/Movies",
      description: "Set drinking rules for your favorite show and binge a season.",
      link: "/guides/tv-show-drinking-games",
      intensity: "Medium",
      whyItWorks: "Makes binge-watching more fun"
    },
    {
      name: "Video Game Drinking",
      category: "Gaming",
      description: "Drink on deaths, wins, losses, or specific in-game events.",
      link: "/guides/video-game-drinking-games",
      intensity: "High",
      whyItWorks: "Adds stakes to your gaming session"
    },
    {
      name: "Power Hour (Solo)",
      category: "Endurance",
      description: "Shot of beer every minute for 60 minutes. Just you vs the hour.",
      link: "/games/power-hour",
      intensity: "High",
      whyItWorks: "Classic endurance challenge"
    },
    {
      name: "Drunk Solitaire",
      category: "Cards",
      description: "Play solitaire. Drink when you flip a face card. Drink twice if you lose.",
      link: null,
      intensity: "Low",
      whyItWorks: "Classic card game with stakes"
    },
    {
      name: "Sports Drinking Game",
      category: "Sports",
      description: "Watch a game, drink on touchdowns, goals, fouls, commercials, etc.",
      link: "/guides/sports-drinking-games",
      intensity: "Medium",
      whyItWorks: "Makes watching sports more engaging"
    },
    {
      name: "Music Shuffle",
      category: "Music",
      description: "Put music on shuffle. Drink based on genre, tempo, or if you skip.",
      link: null,
      intensity: "Low",
      whyItWorks: "Background entertainment"
    },
    {
      name: "Drunk Wikipedia",
      category: "Online",
      description: "Start at a random article. Click internal links. Drink on each page.",
      link: null,
      intensity: "Low",
      whyItWorks: "Learn weird facts while drinking"
    },
    {
      name: "Online Poker",
      category: "Gaming",
      description: "Play online poker. Drink on losses, double on bluff catches.",
      link: null,
      intensity: "Medium",
      whyItWorks: "High stakes feel"
    },
    {
      name: "Puzzle Games",
      category: "Gaming",
      description: "Tetris, Wordle, etc. Drink on mistakes or when you fail.",
      link: null,
      intensity: "Low",
      whyItWorks: "Casual gaming with stakes"
    },
    {
      name: "YouTube Roulette",
      category: "Online",
      description: "Random video generator. Drink based on video type, length, or cringe level.",
      link: null,
      intensity: "Low",
      whyItWorks: "Endless entertainment"
    },
    {
      name: "Reading Drinking Game",
      category: "Reading",
      description: "Drink every chapter, every death, every twist. Works with any book.",
      link: null,
      intensity: "Low",
      whyItWorks: "Pairs well with a good book"
    },
  ];

  return (
    <>
      <GuideLayout
        title="Solo Drinking Games: Best Games to Play Alone"
        description="No friends available? No problem. These drinking games are designed for when you're flying solo. Movies, video games, and creative ways to make a night in more entertaining."
        breadcrumb="Solo Drinking Games"
        relatedGames={[
          { name: "Movie Drinking Games", slug: "movie-drinking-games", description: "Film-based rules" },
          { name: "Power Hour", slug: "power-hour", description: "60-minute challenge" },
          { name: "Video Game Rules", slug: "video-game-drinking-games", description: "Gaming + drinking" },
        ]}
      >
        <QuickAnswer
          question="What are the best drinking games for 1 person?"
          answer="The best solo drinking games are: (1) Movie/TV drinking games - set rules and drink along, (2) Video game drinking rules - drink on deaths/wins/events, (3) Power Hour - shot of beer every minute, (4) Sports drinking games - drink on plays, (5) Drunk Solitaire - classic card game with stakes. Solo drinking games work best with media (movies, games, sports) that provides natural triggers for drinking."
          tips={quickAnswerTips}
          variant="primary"
        />

        <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-6">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">A Note on Solo Drinking</h2>
          <p className="text-gray-300">
            Drinking alone is fine - sometimes you just want a relaxed night in. But always
            pace yourself. Without friends around, there&apos;s no one to tell you to slow down.
            Stick to lighter drinks, have water and snacks nearby, and know your limits.
          </p>
        </div>

        <h2>Why Play Drinking Games Solo?</h2>
        <ul>
          <li><strong>Makes movies more fun</strong> - Especially rewatches</li>
          <li><strong>Adds stakes to gaming</strong> - Makes wins/losses matter</li>
          <li><strong>Structured relaxation</strong> - More engaging than just drinking</li>
          <li><strong>Practice for parties</strong> - Know the rules before game night</li>
        </ul>

        <h2>Best Solo Drinking Games</h2>

        <div className="not-prose my-8">
          <div className="space-y-4">
            {games.map((game, index) => (
              <div key={game.name} className="p-5 bg-dark-800 rounded-xl border border-dark-600 hover:border-neon-pink/30 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-neon-pink/20 rounded-lg flex items-center justify-center text-neon-pink font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="font-bold text-white text-lg">{game.name}</h3>
                        <span className="text-xs px-2 py-1 bg-dark-700 rounded-full text-gray-400">{game.category}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          game.intensity === 'Low' ? 'bg-green-500/20 text-green-400' :
                          game.intensity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          game.intensity === 'High' ? 'bg-red-500/20 text-red-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {game.intensity}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-2">{game.description}</p>
                      <p className="text-sm text-neon-blue">✓ {game.whyItWorks}</p>
                    </div>
                  </div>
                  {game.link && (
                    <Link
                      href={game.link}
                      className="flex-shrink-0 text-neon-pink hover:text-neon-pink/80 text-sm font-medium"
                    >
                      Play →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2>Movie & TV Drinking Games</h2>
        <p>The classic solo option. Here&apos;s how to set them up:</p>

        <h3>Universal Movie Rules</h3>
        <ul>
          <li>Drink when the title is said</li>
          <li>Drink on obvious foreshadowing</li>
          <li>Drink on a plot twist</li>
          <li>Drink when someone dies</li>
          <li>Finish your drink at the climax</li>
        </ul>

        <h3>Genre-Specific Ideas</h3>
        <ul>
          <li><strong>Horror:</strong> Drink on jump scares, stupid decisions, deaths</li>
          <li><strong>Rom-Com:</strong> Drink on meet-cutes, miscommunication, rain scenes</li>
          <li><strong>Action:</strong> Drink on explosions, one-liners, car chases</li>
          <li><strong>Marvel:</strong> Drink on Stan Lee cameos, post-credits scenes, quips</li>
        </ul>

        <h2>Video Game Drinking Rules</h2>
        <p>Turn your gaming session into a drinking game:</p>

        <h3>FPS Games (CoD, Fortnite, etc.)</h3>
        <ul>
          <li>Death = 1 drink</li>
          <li>Kill = give yourself a toast (don&apos;t drink, you earned it)</li>
          <li>Victory Royale = take a celebratory shot</li>
          <li>Rage quit = finish your drink</li>
        </ul>

        <h3>Racing Games</h3>
        <ul>
          <li>Not 1st place = drink</li>
          <li>Wipeout = drink</li>
          <li>Use an item = sip</li>
          <li>Get blue shelled = finish drink</li>
        </ul>

        <h3>RPGs / Story Games</h3>
        <ul>
          <li>Die = drink</li>
          <li>Skip dialogue = drink</li>
          <li>Unskippable cutscene = drink during it</li>
          <li>Beat a boss = take a shot</li>
        </ul>

        <h2>Power Hour Solo</h2>
        <p>The ultimate endurance test:</p>
        <ul>
          <li>Set a timer for 60 minutes</li>
          <li>Every minute, take a shot of beer (about 1oz)</li>
          <li>60 shots = about 7 beers</li>
          <li>Put on a Power Hour playlist (they change songs every minute)</li>
          <li>Make it through? You&apos;re a champion</li>
        </ul>

        <h2>Solo Drinking Tips</h2>
        <ul>
          <li><strong>Eat beforehand</strong> - Never drink on empty</li>
          <li><strong>Stay hydrated</strong> - Water between drinks</li>
          <li><strong>Set a limit</strong> - Decide max drinks before you start</li>
          <li><strong>Skip the hard stuff</strong> - Stick to beer or wine</li>
          <li><strong>Have snacks ready</strong> - You&apos;ll want them</li>
          <li><strong>Don&apos;t drive anywhere</strong> - Stay home</li>
        </ul>

        <h2>Looking for More Players?</h2>
        <p>Ready to add more people? Check out our guides for <Link href="/guides/drinking-games-for-2" className="text-neon-pink hover:underline">2 people</Link> or <Link href="/guides/drinking-games-for-couples" className="text-neon-pink hover:underline">couples</Link>.</p>

        <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
          <h3 className="text-lg font-bold text-white mb-3">Browse by Group Size</h3>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/guides/drinking-games-for-1"
              className="px-4 py-2 bg-neon-pink text-white rounded-lg"
            >
              Solo
            </Link>
            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <Link
                key={num}
                href={`/guides/drinking-games-for-${num}`}
                className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
              >
                {num} People
              </Link>
            ))}
            <Link
              href="/guides/drinking-games-for-large-groups"
              className="px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-dark-600 transition-colors"
            >
              10+ People
            </Link>
          </div>
        </div>
      </GuideLayout>
    </>
  );
}
