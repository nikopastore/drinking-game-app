import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "March Madness Drinking Games 2025: Bracket Party Games",
  description: "The ultimate March Madness drinking games guide! Turn every upset, buzzer beater, and Cinderella run into a drinking game with these NCAA Tournament party ideas.",
  keywords: [
    "March Madness drinking games",
    "NCAA Tournament drinking game",
    "bracket drinking game",
    "college basketball drinking games",
    "March Madness 2025",
    "bracket party games",
    "Final Four drinking games",
    "tournament drinking games"
  ],
  openGraph: {
    title: "March Madness Drinking Games 2025: The Complete Guide",
    description: "Turn your bracket into a drinking game with these March Madness party ideas.",
    type: "article",
    url: "https://sipwiki.app/blog/seasonal/march-madness-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/seasonal/march-madness-drinking-games",
  },
};

export default function MarchMadnessDrinkingGamesPage() {
  return (
    <BlogLayout
      title="March Madness Drinking Games 2025: The Complete Bracket Party Guide"
      description="Turn every game of the NCAA Tournament into a drinking experience. From bracket-based games to buzzer beater rules, make March Madness even more exciting."
      author="game-master"
      publishDate="2025-03-01"
      category="Seasonal"
      categorySlug="seasonal"
      readTime="10 min"
      tableOfContents={[
        { id: "bracket-games", title: "Bracket-Based Drinking Games" },
        { id: "game-rules", title: "In-Game Drinking Rules" },
        { id: "upset-rules", title: "Upset Alert Rules" },
        { id: "multi-game", title: "Multi-Game Viewing Rules" },
        { id: "final-four", title: "Final Four Special Rules" },
      ]}
      relatedArticles={[
        { title: "College Drinking Games", slug: "../guides/college-drinking-games", description: "Campus party classics" },
        { title: "Sports Drinking Games", slug: "../guides/sports-drinking-games", description: "Games for watching sports" },
        { title: "Super Bowl Drinking Games", slug: "super-bowl-2025-drinking-games", description: "Big game party guide" },
      ]}
    >
      <p className="lead">
        March Madness is three weeks of non-stop college basketball action. Whether you&apos;re
        watching for your bracket, your alma mater, or just the chaos, these drinking games
        will make every game more entertaining.
      </p>

      <div className="bg-gradient-to-r from-orange-900/30 to-blue-900/30 p-6 rounded-xl border border-dark-600 my-8">
        <h3 className="text-lg font-bold text-white mb-2">March Madness 2025 Key Dates</h3>
        <ul className="text-gray-300 space-y-1">
          <li><strong>Selection Sunday:</strong> March 16, 2025</li>
          <li><strong>First Four:</strong> March 18-19, 2025</li>
          <li><strong>First/Second Round:</strong> March 20-23, 2025</li>
          <li><strong>Sweet 16/Elite 8:</strong> March 27-30, 2025</li>
          <li><strong>Final Four:</strong> April 5, 2025</li>
          <li><strong>Championship:</strong> April 7, 2025</li>
        </ul>
      </div>

      <h2 id="bracket-games">Bracket-Based Drinking Games</h2>
      <p>
        Your bracket is more than just a chance to win the office pool - it&apos;s a drinking game waiting to happen.
      </p>

      <h3>The Bracket Punishment Game</h3>
      <p>As your picks lose, you drink:</p>
      <ul>
        <li><strong>First Round loss:</strong> 1 drink</li>
        <li><strong>Second Round loss:</strong> 2 drinks</li>
        <li><strong>Sweet 16 loss:</strong> 3 drinks</li>
        <li><strong>Elite 8 loss:</strong> 4 drinks</li>
        <li><strong>Final Four loss:</strong> Shot</li>
        <li><strong>Championship loss:</strong> You&apos;re buying the next round</li>
      </ul>

      <h3>Bracket Bet Game</h3>
      <ul>
        <li>Everyone puts in $5-10 for a drink fund</li>
        <li>After each round, lowest bracket score buys a round</li>
        <li>Winner of bracket gets remaining fund OR chooses who takes shots</li>
      </ul>

      <h3>Correct Pick Rewards</h3>
      <p>The flip side - your correct picks give you power:</p>
      <ul>
        <li><strong>Each correct pick:</strong> Give out 1 drink</li>
        <li><strong>Upset correctly predicted:</strong> Give out drinks equal to seed difference</li>
        <li><strong>Perfect region (rare):</strong> Make someone finish their drink</li>
      </ul>

      <h2 id="game-rules">In-Game Drinking Rules</h2>
      <p>
        Basic rules that work for any March Madness game.
      </p>

      <h3>Standard Game Rules</h3>
      <ul>
        <li><strong>Three-pointer made:</strong> Everyone drinks</li>
        <li><strong>Dunk:</strong> 2 drinks</li>
        <li><strong>Free throw missed:</strong> Drink for each miss</li>
        <li><strong>Technical foul:</strong> Everyone takes a shot</li>
        <li><strong>Timeout:</strong> Social drink</li>
        <li><strong>Coach yelling at ref:</strong> Drink until they stop</li>
      </ul>

      <h3>Announcer Triggers</h3>
      <p>Drink when announcers say:</p>
      <ul>
        <li>&quot;One Shining Moment&quot;</li>
        <li>&quot;Cinderella story&quot;</li>
        <li>&quot;David vs Goliath&quot;</li>
        <li>&quot;Their first tournament since...&quot;</li>
        <li>&quot;Mid-major&quot;</li>
        <li>Any reference to a player&apos;s sob story</li>
        <li>&quot;Survive and advance&quot;</li>
      </ul>

      <h3>Graphic Triggers</h3>
      <ul>
        <li><strong>Crying fan shown:</strong> Everyone drinks</li>
        <li><strong>Mascot on screen:</strong> 1 drink</li>
        <li><strong>Celebrity in crowd:</strong> 2 drinks</li>
        <li><strong>Coach&apos;s family shown:</strong> 1 drink</li>
        <li><strong>Student section going crazy:</strong> Drink until they cut away</li>
      </ul>

      <h2 id="upset-rules">Upset Alert Rules</h2>
      <p>
        Upsets are what make March Madness special. These rules make them even better.
      </p>

      <h3>Upset Drinking Scale</h3>
      <ul>
        <li><strong>12 beats 5:</strong> 2 drinks for 5-seed backers</li>
        <li><strong>13 beats 4:</strong> 3 drinks for 4-seed backers</li>
        <li><strong>14 beats 3:</strong> 4 drinks for 3-seed backers</li>
        <li><strong>15 beats 2:</strong> 5 drinks for 2-seed backers</li>
        <li><strong>16 beats 1 (RARE):</strong> Everyone who didn&apos;t pick it takes a shot</li>
      </ul>

      <h3>Buzzer Beater Rules</h3>
      <ul>
        <li><strong>Game-tying buzzer beater:</strong> Everyone drinks during overtime</li>
        <li><strong>Game-winning buzzer beater:</strong> Losers finish their drinks</li>
        <li><strong>Half-court shot:</strong> Everyone takes a shot</li>
      </ul>

      <h3>Bracket Buster Bonus</h3>
      <p>If your bracket gets destroyed by upsets:</p>
      <ul>
        <li>0 Final Four picks remaining by Elite 8 = You&apos;re the designated drink-getter</li>
        <li>All 4 Final Four picks wrong = You buy pizza for the group</li>
      </ul>

      <h2 id="multi-game">Multi-Game Viewing Rules</h2>
      <p>
        The first weekend features multiple games at once. Here&apos;s how to handle it.
      </p>

      <h3>Channel Flip Rules</h3>
      <ul>
        <li>Everyone picks a game to &quot;own&quot;</li>
        <li>When your game is switched away from, you drink</li>
        <li>When your game goes to commercial, everyone else drinks</li>
        <li>Your game ends = Take a shot (win or lose)</li>
      </ul>

      <h3>Simultaneous Game Rules</h3>
      <ul>
        <li><strong>Close game (within 5 points in final 2 min):</strong> That game gets priority</li>
        <li><strong>Two close games at once:</strong> Split screen, everyone drinks constantly</li>
        <li><strong>Blowout (20+ points):</strong> Anyone who picked that winner gives out drinks</li>
      </ul>

      <h2 id="final-four">Final Four Special Rules</h2>
      <p>
        The last weekend deserves special treatment.
      </p>

      <h3>Final Four Drinking Rules</h3>
      <ul>
        <li><strong>First basket:</strong> Sets the pace - fast start = drink fast</li>
        <li><strong>Halftime lead change:</strong> Everyone drinks during halftime</li>
        <li><strong>Lead changes in 2nd half:</strong> Drink for each change</li>
        <li><strong>Game goes to OT:</strong> Everyone drinks during entire OT</li>
      </ul>

      <h3>Championship Night</h3>
      <ul>
        <li><strong>Confetti drop:</strong> Losers finish drinks</li>
        <li><strong>&quot;One Shining Moment&quot; plays:</strong> Waterfall until it ends (or just enjoy it sober)</li>
        <li><strong>Net cutting:</strong> Drink for each player who cuts</li>
        <li><strong>Trophy presentation:</strong> Toast to the winners</li>
      </ul>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Marathon Viewing Tips</h3>
        <p className="text-gray-300">
          March Madness can mean 12+ hours of basketball on the first Thursday/Friday.
          Pace yourself! Start lighter on drinking rules early and ramp up for evening games.
          Keep water and snacks nearby. Your bracket will survive better if you do too.
        </p>
      </div>

      <h2>Quick Reference Card</h2>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <h4 className="font-bold text-white mb-4">Print This for Your Party</h4>
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
          <div>
            <p className="font-bold text-white">DRINK 1:</p>
            <ul className="ml-4">
              <li>• 3-pointer</li>
              <li>• Free throw miss</li>
              <li>• Timeout</li>
              <li>• Mascot shown</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">DRINK 2:</p>
            <ul className="ml-4">
              <li>• Dunk</li>
              <li>• Coach ejected</li>
              <li>• Celebrity shown</li>
              <li>• Your bracket pick loses (Round 2)</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">TAKE A SHOT:</p>
            <ul className="ml-4">
              <li>• Technical foul</li>
              <li>• 16 beats 1 upset</li>
              <li>• Buzzer beater win</li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-white">FINISH DRINK:</p>
            <ul className="ml-4">
              <li>• Your Final Four pick loses</li>
              <li>• Championship game loss</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Get Your Bracket Ready!</h3>
        <p className="text-gray-400 mb-4">
          Check out more sports and tournament drinking games.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/sports-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            Sports Drinking Games →
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
