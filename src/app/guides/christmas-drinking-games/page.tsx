import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Christmas Drinking Games (2024) | Holiday Party Games",
  description: "Festive drinking games for Christmas parties! Complete guide with holiday movie drinking games, Secret Santa games, family-friendly options, and Christmas party activities.",
  keywords: ["christmas drinking games", "holiday drinking games", "christmas party games", "festive drinking games", "xmas drinking games", "holiday party games"],
  openGraph: { title: "Christmas Drinking Games", description: "Ho ho hold my beer!", type: "article", url: "https://sipwiki.app/guides/christmas-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/christmas-drinking-games" },
};

export default function ChristmasPage() {
  return (
    <GuideLayout title="Christmas Drinking Games" description="'Tis the season to be tipsy! These holiday-themed drinking games will make your Christmas party merry and bright - whether you're with family, friends, or both." breadcrumb="Christmas Games" relatedGames={[{ name: "Never Have I Ever", slug: "never-have-i-ever", description: "Holiday edition" }, { name: "Kings Cup", slug: "kings-cup", description: "Festive rules" }, { name: "Most Likely To", slug: "most-likely-to", description: "Christmas version" }]}>
      <h2>Holiday Movie Drinking Games</h2>
      <p>Nothing says Christmas like drinking to classic films:</p>

      <h3>Elf</h3>
      <ul>
        <li>Buddy eats something sugary - drink 1</li>
        <li>Buddy says &quot;Santa!&quot; - drink 1</li>
        <li>Someone calls Buddy &quot;special&quot; or weird - drink 1</li>
        <li>Buddy breaks something - drink 2</li>
        <li>Buddy hugs someone - drink 1</li>
        <li>Musical number - drink throughout</li>
      </ul>

      <h3>Home Alone / Home Alone 2</h3>
      <ul>
        <li>Kevin sets a trap - drink 1</li>
        <li>Kevin talks to himself - drink 1</li>
        <li>Harry or Marv gets injured - drink 2</li>
        <li>Someone mentions Kevin&apos;s family - drink 1</li>
        <li>Old man/pigeon lady appears - drink 1</li>
        <li>Police are useless - drink 2</li>
      </ul>

      <h3>The Grinch (2000)</h3>
      <ul>
        <li>Grinch makes a face - drink 1</li>
        <li>Cindy Lou appears - drink 1</li>
        <li>Grinch flashback - drink 2</li>
        <li>Max the dog suffers - drink 1</li>
        <li>Grinch&apos;s heart grows - finish your drink</li>
      </ul>

      <h3>Die Hard (yes, it&apos;s a Christmas movie)</h3>
      <ul>
        <li>John McClane is barefoot - drink 1</li>
        <li>Someone says &quot;Hans&quot; - drink 1</li>
        <li>John talks to himself or on the radio - drink 1</li>
        <li>Explosion - drink 2</li>
        <li>Glass breaks - drink 1</li>
        <li>&quot;Yippee ki-yay&quot; - finish drink</li>
      </ul>

      <h3>Love Actually</h3>
      <ul>
        <li>Storyline switches - drink 1</li>
        <li>British awkwardness - drink 1</li>
        <li>Hugh Grant does something charming - drink 1</li>
        <li>Cue cards appear - drink 3</li>
        <li>Airport reunion - drink 2</li>
      </ul>

      <h2>Christmas Party Games</h2>

      <h3>Secret Santa Guessing</h3>
      <p>When opening Secret Santa gifts, everyone guesses who gave each gift before revealing. Wrong guesses = drink. Giver revealed = giver drinks.</p>

      <h3>White Elephant Drinking Rules</h3>
      <ul>
        <li>Gift gets stolen = original holder drinks 1</li>
        <li>Gift stolen twice = stealer drinks 2</li>
        <li>Gift dies (can&apos;t be stolen anymore) = holder gives 3 drinks</li>
        <li>Someone complains about their gift = they drink 2</li>
      </ul>

      <h3>Carol Karaoke</h3>
      <p>Everyone takes turns singing Christmas carols. Group votes on performance. Lowest score drinks. Forgotten lyrics = automatic drink.</p>

      <h3>Ugly Sweater Contest</h3>
      <p>Vote on ugly sweaters. Winner assigns drinks to everyone. Second place assigns half as many. Last place finishes their drink.</p>

      <h3>Christmas Trivia</h3>
      <p>Holiday trivia with drinking penalties. Categories: movies, songs, traditions, history. Wrong answer = drink. Get three in a row right = assign drinks.</p>

      <h2>Christmas-Themed Classic Games</h2>

      <h3>Never Have I Ever: Christmas Edition</h3>
      <p>Holiday-specific prompts:</p>
      <ul>
        <li>Never have I ever regifted something</li>
        <li>Never have I ever faked excitement for a gift</li>
        <li>Never have I ever eaten all the cookies for Santa</li>
        <li>Never have I ever started holiday shopping on Christmas Eve</li>
        <li>Never have I ever cried during a Christmas movie</li>
      </ul>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink">Play Never Have I Ever →</Link></p>

      <h3>Most Likely To: Holiday Edition</h3>
      <p>Christmas prompts:</p>
      <ul>
        <li>Who&apos;s most likely to eat all the cookies before dinner?</li>
        <li>Who&apos;s most likely to fall asleep during a Christmas movie?</li>
        <li>Who&apos;s most likely to regift something?</li>
        <li>Who&apos;s most likely to start a family argument?</li>
        <li>Who&apos;s most likely to wear a matching family outfit?</li>
      </ul>
      <p><Link href="/game/most-likely-to" className="text-neon-pink">Play Most Likely To →</Link></p>

      <h3>Kings Cup: Christmas Rules</h3>
      <p>Replace standard rules with holiday versions:</p>
      <ul>
        <li>Ace = &quot;Jingle Bell Race&quot; - Waterfall</li>
        <li>2 = You (give 2 drinks like giving a gift)</li>
        <li>King = Pour into the &quot;Santa&apos;s Sack&quot; center cup</li>
        <li>Queen = Christmas Queen - ask holiday questions only</li>
        <li>Jack = Never Have I Ever (Christmas topics)</li>
      </ul>
      <p><Link href="/game/kings-cup" className="text-neon-pink">Play Kings Cup →</Link></p>

      <h2>Family-Friendly Options</h2>
      <p>Playing with family or mixed ages? Substitute drinks:</p>
      <ul>
        <li><strong>Hot cocoa</strong> - Small sips still work</li>
        <li><strong>Eggnog</strong> - Rich enough to pace naturally</li>
        <li><strong>Apple cider</strong> - Festive and safe for all ages</li>
        <li><strong>Candy canes</strong> - Eat a piece instead of drinking</li>
      </ul>

      <h2>Drink Pairings</h2>
      <ul>
        <li><strong>Movie games</strong> - Wine, mulled wine, or spiked cider</li>
        <li><strong>Active games</strong> - Beer or light cocktails</li>
        <li><strong>After dinner</strong> - Eggnog, Irish coffee, bourbon</li>
        <li><strong>Mixed ages</strong> - Have both alcoholic and non-alcoholic versions ready</li>
      </ul>

      <h2>Christmas Party Tips</h2>
      <ul>
        <li><strong>Know your audience</strong> - Conservative family vs. wild friends = different games</li>
        <li><strong>Time games around food</strong> - Before dinner energy vs. food coma games</li>
        <li><strong>Have options</strong> - Some people may not want to play at all</li>
        <li><strong>Pace the night</strong> - Christmas parties go long, start light</li>
      </ul>

      <p>More holiday games: <Link href="/guides/new-years-eve-drinking-games" className="text-neon-pink hover:underline">New Year&apos;s Eve games</Link> | <Link href="/guides/thanksgiving-drinking-games" className="text-neon-pink hover:underline">Thanksgiving games</Link></p>
    </GuideLayout>
  );
}
