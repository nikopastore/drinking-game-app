import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "18 Best Christmas Drinking Games (2024) | Holiday Party Games for Adults",
  description: "Christmas drinking games for adults! Holiday movie drinking games, gift exchange games, ugly sweater games, and festive party ideas. Perfect for Christmas parties 2024!",
  keywords: ["christmas drinking games", "holiday drinking games", "christmas party games for adults", "holiday party games", "christmas movie drinking games"],
  openGraph: { title: "18 Best Christmas Drinking Games", type: "article", url: "https://sipwiki.app/guides/christmas-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/christmas-drinking-games" },
};

export default function ChristmasDrinkingGamesPage() {
  return (
    <GuideLayout
      title="18 Best Christmas Drinking Games for Adults"
      description="Make your Christmas party legendary with holiday-themed drinking games. From festive twists on classics to original holiday games, we've got your party covered."
      breadcrumb="Christmas Drinking Games"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Holiday edition" },
        { name: "Beer Pong", slug: "beer-pong", description: "Christmas themed" },
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Holiday prompts" },
      ]}
    >
      <QuickAnswer
        question="What are the best Christmas drinking games?"
        answer="Best Christmas drinking games: (1) Christmas Movie Drinking Game - drink on holiday tropes (Elf, Home Alone, Love Actually), (2) Ugly Sweater Kings Cup - card rules based on ugly sweaters, (3) White Elephant with Drinks - steal gifts AND assign drinks, (4) Christmas Carol Karaoke - sing or drink, (5) Holiday Never Have I Ever - festive prompts. Classic movies work best: Elf, Home Alone, Christmas Vacation. Ugly sweater parties = built-in costume mechanic. Office parties and Friendsmas gatherings love White Elephant drinking edition."
        tips={[
          "Christmas movie games = easy party starter",
          "Ugly sweater parties = costume-based game mechanics",
          "White Elephant + drinking = legendary",
          "December 20-31 = peak party season"
        ]}
        variant="primary"
      />

      <h2>Holiday Movie Drinking Games</h2>

      <h3>Elf (2003) Drinking Game</h3>
      <ul>
        <li>Buddy says "Santa": drink</li>
        <li>Someone doesn't believe in Christmas: drink</li>
        <li>Syrup/candy mentioned: drink</li>
        <li>Buddy smiles: drink (warning: frequent!)</li>
        <li>"Best way to spread Christmas cheer": everyone drinks</li>
      </ul>

      <h3>Home Alone (1990) Drinking Game</h3>
      <ul>
        <li>Kevin sets a trap: drink</li>
        <li>Burglars get hurt: drink</li>
        <li>Kevin screams: drink</li>
        <li>"KEVIN!": everyone drinks</li>
        <li>Someone mentions Paris: drink</li>
      </ul>

      <h3>Love Actually (2003) Drinking Game</h3>
      <ul>
        <li>New storyline appears: drink</li>
        <li>Someone says "love": drink</li>
        <li>Airport scene: drink</li>
        <li>Colin Firth speaks Portuguese: drink</li>
        <li>"Christmas is all around": everyone finishes drink</li>
      </ul>

      <h3>National Lampoon's Christmas Vacation (1989)</h3>
      <ul>
        <li>Clark has a fantasy: drink</li>
        <li>Something breaks/explodes: drink</li>
        <li>Eddie says "shitter": drink</li>
        <li>Christmas lights mentioned: drink</li>
        <li>Squirrel appears: finish your drink</li>
      </ul>

      <h2>Ugly Sweater Drinking Games</h2>

      <h3>Ugly Sweater Kings Cup</h3>
      <p>Play <Link href="/game/kings-cup" className="text-neon-pink">Kings Cup</Link> with ugly sweater rules:</p>
      <ul>
        <li>Ace: All light-up sweaters drink</li>
        <li>2: All 3D sweaters (pom-poms, bells) drink</li>
        <li>3: All homemade sweaters drink</li>
        <li>4: All store-bought sweaters drink</li>
        <li>5: All red sweaters drink</li>
        <li>6: All green sweaters drink</li>
        <li>7: Ugliest sweater drinks (group votes)</li>
        <li>8: Pick sweater buddy - drink together</li>
        <li>9: Christmas song category - name songs, fail = drink</li>
        <li>10: All couples sweaters drink</li>
        <li>Jack: All people who didn't wear ugly sweater drink double</li>
        <li>Queen: Sweater compliment round</li>
        <li>King: Pour into King's Cup</li>
      </ul>

      <h3>Ugly Sweater Contest Drinking Edition</h3>
      <ul>
        <li>Everyone votes on categories (ugliest, funniest, most creative)</li>
        <li>Losers of each category drink</li>
        <li>Winner assigns 5 drinks</li>
        <li>Crowd favorite gets immunity next round</li>
      </ul>

      <h2>Gift Exchange Drinking Games</h2>

      <h3>White Elephant with Drinking</h3>
      <ul>
        <li>Pick a gift: take 1 sip</li>
        <li>Steal a gift: assign 2 drinks to person you stole from</li>
        <li>Your gift gets stolen: drink 2</li>
        <li>Gift gets stolen 3 times (frozen): everyone drinks</li>
        <li>Worst gift at end: finish your drink</li>
      </ul>

      <h3>Secret Santa Drinking Edition</h3>
      <ul>
        <li>Reveal gifts one by one</li>
        <li>Recipient guesses who gave it</li>
        <li>Wrong guess: recipient drinks</li>
        <li>Correct guess: giver drinks</li>
        <li>Everyone loves the gift: giver assigns 3 drinks</li>
      </ul>

      <h2>Christmas-Themed Classic Games</h2>

      <h3>Reindeer Beer Pong</h3>
      <ul>
        <li>Arrange cups in Christmas tree formation</li>
        <li>Use red/green cups</li>
        <li>Add antlers/red nose to players (costume)</li>
        <li>Play <Link href="/game/beer-pong" className="text-neon-pink">Beer Pong</Link> normally</li>
        <li>Bonus: "Rudolf shot" (hitting specific cup) = opponent drinks double</li>
      </ul>

      <h3>Holiday Flip Cup</h3>
      <ul>
        <li>Play <Link href="/game/flip-cup" className="text-neon-pink">Flip Cup</Link> in Santa hats</li>
        <li>Losing team sings Christmas carol</li>
        <li>Refuse to sing = extra drink penalty</li>
        <li>Best caroling team gets immunity next round</li>
      </ul>

      <h3>Christmas Never Have I Ever</h3>
      <p>Holiday prompts only:</p>
      <ul>
        <li>Never have I ever re-gifted a Christmas present</li>
        <li>Never have I ever kissed someone under mistletoe</li>
        <li>Never have I ever lied about liking a gift</li>
        <li>Never have I ever peeked at Christmas presents early</li>
        <li>Never have I ever gotten coal (or equivalent bad gift)</li>
        <li>Never have I ever cried during a Christmas movie</li>
        <li>Never have I ever worn an ugly Christmas sweater seriously</li>
      </ul>

      <h2>Original Holiday Games</h2>

      <h3>Christmas Carol Karaoke Drinking Game</h3>
      <ul>
        <li>Everyone must sing a Christmas carol verse</li>
        <li>Mess up lyrics: drink 2</li>
        <li>Refuse to sing: drink 3</li>
        <li>Perfect performance: assign 2 drinks</li>
        <li>Crowd votes on best/worst performances</li>
      </ul>

      <h3>Christmas Trivia</h3>
      <ul>
        <li>Questions about Christmas movies, traditions, songs</li>
        <li>Wrong answer: drink</li>
        <li>First to 10 correct: assigns 5 drinks</li>
        <li>Sample: "What year was Elf released?" (2003)</li>
      </ul>

      <h3>Holiday Most Likely To</h3>
      <p>Christmas-themed <Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> questions:</p>
      <ul>
        <li>Most likely to regift a present</li>
        <li>Most likely to burn Christmas cookies</li>
        <li>Most likely to get drunk at family Christmas</li>
        <li>Most likely to start crying during Elf</li>
        <li>Most likely to wear an ugly sweater unironically</li>
      </ul>

      <h3>Ornament Pong</h3>
      <ul>
        <li>Hang plastic ornaments at various heights</li>
        <li>Try to hit ornaments with ping pong balls</li>
        <li>Hit ornament: assign drinks based on difficulty</li>
        <li>Miss: you drink</li>
      </ul>

      <h2>Christmas Party Planning</h2>

      <h3>Holiday Themed Drinks</h3>
      <ul>
        <li>Eggnog (spiked with rum/bourbon)</li>
        <li>Hot toddy (whiskey, honey, lemon, hot water)</li>
        <li>Peppermint schnapps hot chocolate</li>
        <li>Cranberry Moscow Mule</li>
        <li>Mulled wine</li>
        <li>White Christmas margarita (coconut rim)</li>
        <li>Candy cane cocktails</li>
      </ul>

      <h3>Decorations for Games</h3>
      <ul>
        <li>Red & green cups for Beer Pong</li>
        <li>Christmas lights as ambient lighting</li>
        <li>Mistletoe over game tables (kiss penalty rules)</li>
        <li>Santa hats for all players</li>
        <li>Tinsel on cups</li>
        <li>Christmas tree as backdrop</li>
      </ul>

      <h3>Party Timeline</h3>
      <p><strong>Early (6-8pm):</strong> White Elephant with drinking, Ugly Sweater contest, Christmas trivia</p>
      <p><strong>Peak (8-11pm):</strong> Reindeer Beer Pong, Holiday Flip Cup, Christmas Carol Karaoke</p>
      <p><strong>Late (11pm+):</strong> Christmas movie drinking games (Elf, Home Alone), chill carol singing</p>

      <h2>Christmas Party Types</h2>

      <h3>Office Christmas Party</h3>
      <ul>
        <li>White Elephant with drinking (PG-13 version)</li>
        <li>Ugly sweater contest</li>
        <li>Christmas trivia (safe topics)</li>
        <li>Secret Santa reveal with drinking penalties</li>
      </ul>

      <h3>Friendsmas Party</h3>
      <ul>
        <li>Full-on drinking games (no holds barred)</li>
        <li>Competitive ugly sweater contest</li>
        <li>Christmas movie marathon with drinking</li>
        <li>Late-night Carol Karaoke</li>
      </ul>

      <h3>Family Christmas (Adult Siblings)</h3>
      <ul>
        <li>Christmas Never Have I Ever (family edition)</li>
        <li>Holiday trivia about family traditions</li>
        <li>Light drinking games while parents aren't watching</li>
        <li>Gift exchange with drinking penalties</li>
      </ul>

      <h2>December Party Calendar</h2>
      <ul>
        <li><strong>Early December (1-10):</strong> Friendsmas parties start</li>
        <li><strong>Mid December (11-20):</strong> Office parties peak</li>
        <li><strong>Late December (21-23):</strong> Last-minute Friendsmas celebrations</li>
        <li><strong>Christmas Eve (Dec 24):</strong> Intimate gatherings</li>
        <li><strong>Christmas Day (Dec 25):</strong> Family time, light drinking</li>
        <li><strong>Post-Christmas (26-31):</strong> New Year's prep parties</li>
      </ul>

      <h2>Safety & Etiquette</h2>
      <ul>
        <li>Office parties: moderate drinking, professional behavior</li>
        <li>Ugly sweater games: ensure sweaters are actually ugly</li>
        <li>White Elephant: set price limits ($10-25 typical)</li>
        <li>Holiday movies: pick crowd-appropriate films</li>
        <li>Food: Christmas cookies don't count - have real food</li>
        <li>Transportation: arrange rides for snowy/icy conditions</li>
        <li>Non-drinkers: eggnog (virgin), hot chocolate, cider work for all games</li>
      </ul>

      <p className="mt-8">
        Browse more: <Link href="/games" className="text-neon-pink">All Drinking Games</Link> | <Link href="/guides/drinking-games-for-parties" className="text-neon-pink">Party Games</Link>
      </p>
    </GuideLayout>
  );
}
