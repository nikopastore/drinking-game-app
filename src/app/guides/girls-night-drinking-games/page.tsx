import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Girls Night Drinking Games | Ladies Night Party Games",
  description: "Best drinking games for girls night! Fun, flirty games perfect for wine nights, bachelorettes, sleepovers, and ladies' gatherings. Spill the tea and have fun!",
  keywords: ["girls night drinking games", "ladies night drinking games", "wine night games", "girls night in games", "drinking games for girls", "bachelorette games"],
  openGraph: { title: "15 Best Girls Night Drinking Games", description: "Ladies night!", type: "article", url: "https://sipwiki.app/guides/girls-night-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/girls-night-drinking-games" },
};

export default function GirlsNightDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Best Girls Night Drinking Games"
      description="Whether it's wine night, a sleepover, or pre-gaming before going out - these games are perfect for girls night! Spill the tea, share secrets, and make memories."
      breadcrumb="Girls Night"
      relatedGames={[
        { name: "Most Likely To", slug: "most-likely-to", description: "Spill the tea" },
        { name: "Truth or Drink", slug: "truth-or-drink", description: "Get deep" },
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Classic confessions" },
      ]}
    >
      <QuickAnswer
        question="What are the best drinking games for girls night?"
        answer="The best girls night drinking games are Most Likely To, Truth or Drink, Never Have I Ever, and Wine Tasting Challenge. These games encourage conversation, storytelling, and bonding. Add games like 'Rate the Text' where you judge each other's messages, or 'Bad Date Stories' where the best story gets immunity. Focus on games that spark conversation and laughter over competition."
        tips={[
          "Choose games that encourage stories and sharing",
          "Wine games work great for chill nights in",
          "Pre-going-out games should be quick and fun",
          "Have snacks - drunk texting on an empty stomach is dangerous"
        ]}
        variant="primary"
      />

      <h2>Tea-Spilling Games</h2>

      <h3>1. Most Likely To</h3>
      <p>The ultimate girls night game. &quot;Who is most likely to...?&quot; Count to three, everyone points. Most fingers = drink that many. Gets personal, reveals truths, and sparks conversation.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Girls night questions:</strong></li>
        <li>&quot;Who is most likely to drunk text their ex?&quot;</li>
        <li>&quot;Who is most likely to cry at a wedding?&quot;</li>
        <li>&quot;Who is most likely to fall for someone completely wrong for them?&quot;</li>
        <li>&quot;Who is most likely to ghost someone?&quot;</li>
      </ul>
      <p><Link href="/games/most-likely-to" className="text-neon-pink hover:underline">Full Most Likely To Rules</Link></p>

      <h3>2. Truth or Drink</h3>
      <p>No dares, just truths. Answer honestly or drink. The wine flows, the secrets spill. Perfect for deep conversations and bonding moments.</p>
      <ul>
        <li><strong>Equipment:</strong> None or question cards</li>
        <li><strong>Players:</strong> 2-10</li>
        <li><strong>Sample questions:</strong></li>
        <li>&quot;What&apos;s something you&apos;ve never told anyone in this room?&quot;</li>
        <li>&quot;What&apos;s your biggest relationship red flag?&quot;</li>
        <li>&quot;Who here would you set up with your ex?&quot;</li>
        <li>&quot;What&apos;s the worst lie you&apos;ve told a guy?&quot;</li>
      </ul>
      <p><Link href="/games/truth-or-drink" className="text-neon-pink hover:underline">Full Truth or Drink Rules</Link></p>

      <h3>3. Never Have I Ever</h3>
      <p>The classic confession game. &quot;Never have I ever...&quot; - anyone who HAS done it drinks. Girls night edition gets spicy fast.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-15</li>
        <li><strong>Spicy statements:</strong></li>
        <li>&quot;Never have I ever stalked an ex&apos;s new girlfriend&quot;</li>
        <li>&quot;Never have I ever lied about my body count&quot;</li>
        <li>&quot;Never have I ever pretended to like someone&apos;s partner&quot;</li>
        <li>&quot;Never have I ever screenshot a text to analyze in the group chat&quot;</li>
      </ul>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Full Never Have I Ever Rules</Link></p>

      <h3>4. Hot Takes</h3>
      <p>Someone shares a controversial opinion or hot take. Others vote thumbs up or down. Minority drinks. Debates ensue.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Sample hot takes:</strong></li>
        <li>&quot;Matching with someone on a dating app and never messaging is worse than ghosting&quot;</li>
        <li>&quot;You should always look through your partner&apos;s phone at least once&quot;</li>
        <li>&quot;Love at first sight is real&quot;</li>
        <li>&quot;It&apos;s okay to stay friends with an ex&quot;</li>
      </ul>

      <h2>Wine Night Games</h2>

      <h3>5. Wine Tasting Challenge</h3>
      <p>Blindfold tasting - guess the wine varietal, brand, or price point. Wrong guesses drink more wine (oh no!).</p>
      <ul>
        <li><strong>Equipment:</strong> Various wines, blindfolds</li>
        <li><strong>Players:</strong> 3-8</li>
        <li><strong>How to play:</strong></li>
        <li>Pour samples of different wines</li>
        <li>Blindfolded taste test</li>
        <li>Guess: red vs white, varietal, cheap vs expensive</li>
        <li>Wrong answer = finish your glass</li>
      </ul>

      <h3>6. Bad Date Stories</h3>
      <p>Everyone shares their worst date story. Group votes on the worst one. Winner doesn&apos;t drink; everyone else does. Best stories always come out during wine night.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Rules:</strong></li>
        <li>Take turns sharing worst dates</li>
        <li>Group votes on &quot;winner&quot; each round</li>
        <li>Winner gets immunity, others drink</li>
        <li>Stories must be true (verifiable if possible)</li>
      </ul>

      <h3>7. Rate the Text</h3>
      <p>Someone shares a recent text exchange (names blocked out). Group rates it 1-10. If your rating is furthest from the average, drink.</p>
      <ul>
        <li><strong>Equipment:</strong> Phones</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Categories:</strong></li>
        <li>Texts from guys/dates</li>
        <li>Work emails</li>
        <li>Family group chat messages</li>
        <li>Old cringy texts from years ago</li>
      </ul>

      <h3>8. The Ex Files</h3>
      <p>Draw topics from a bowl. Share a story about an ex related to that topic. If you can&apos;t, drink. Topics can be mild or spicy depending on the group.</p>
      <ul>
        <li><strong>Equipment:</strong> Paper slips, bowl</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Sample topics:</strong></li>
        <li>&quot;Most embarrassing moment together&quot;</li>
        <li>&quot;Red flag you ignored&quot;</li>
        <li>&quot;Best thing they taught you&quot;</li>
        <li>&quot;How you knew it was over&quot;</li>
      </ul>

      <h2>Pre-Going-Out Games</h2>

      <h3>9. Getting Ready Playlist Game</h3>
      <p>Create rules based on your getting-ready playlist. When certain words or themes come up in songs, designated people drink.</p>
      <ul>
        <li><strong>Equipment:</strong> Good playlist, speakers</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>Sample rules:</strong></li>
        <li>Word &quot;love&quot; = everyone drinks</li>
        <li>Word &quot;baby&quot; = single people drink</li>
        <li>Artist you&apos;ve seen live = you drink</li>
        <li>Song from high school = waterfall</li>
      </ul>

      <h3>10. Rate the Fit</h3>
      <p>As people show off their outfit options, group rates 1-10. Below a 7? Drink and change. Perfect for helping everyone look their best.</p>
      <ul>
        <li><strong>Equipment:</strong> Outfits, honest friends</li>
        <li><strong>Players:</strong> 3-8</li>
        <li><strong>How it works:</strong></li>
        <li>Model your outfit choice</li>
        <li>Everyone holds up fingers (1-10)</li>
        <li>Below 7 = drink and try again</li>
        <li>10 = you&apos;re ready, pour everyone else a drink</li>
      </ul>

      <h3>11. Quick Fire Kings</h3>
      <p>Speed round Kings Cup to get the party started before going out. Only use half the deck for a faster game.</p>
      <ul>
        <li><strong>Equipment:</strong> Half deck of cards</li>
        <li><strong>Players:</strong> 4-8</li>
        <li><strong>Modification:</strong></li>
        <li>Use only 26 cards</li>
        <li>Faster rules (no long stories)</li>
        <li>Timer on each round (30 seconds)</li>
      </ul>
      <p><Link href="/games/kings-cup" className="text-neon-pink hover:underline">Full Kings Cup Rules</Link></p>

      <h2>Sleepover/Chill Night Games</h2>

      <h3>12. Two Truths and a Lie</h3>
      <p>Share three statements - two true, one false. Others guess the lie. Wrong guesses drink. Great for learning new things about friends you thought you knew.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Strategy tips:</strong></li>
        <li>Make truths sound unbelievable</li>
        <li>Add specific details to lies</li>
        <li>Use stories they wouldn&apos;t know</li>
      </ul>

      <h3>13. Compliment or Drink</h3>
      <p>Go around giving genuine compliments. Can&apos;t think of one? Drink. Repeat compliments aren&apos;t allowed. Gets wholesome and sweet.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Rules:</strong></li>
        <li>Must be genuine and specific</li>
        <li>No repeating previous compliments</li>
        <li>Hesitation over 10 seconds = drink</li>
        <li>Best compliments get snaps</li>
      </ul>

      <h3>14. Would You Rather (Girls Edition)</h3>
      <p>Two options, vote by raising hands. Minority drinks. Customize with relationship, career, and lifestyle scenarios.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Sample questions:</strong></li>
        <li>&quot;Would you rather date someone your mom picked or someone your ex picked?&quot;</li>
        <li>&quot;Would you rather always know when someone is lying or never be lied to again?&quot;</li>
        <li>&quot;Would you rather have all your private messages leaked or your search history?&quot;</li>
      </ul>

      <h3>15. Fortune Teller</h3>
      <p>Make predictions about each other&apos;s future. The person votes whether they like the prediction. Bad prediction = drink.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Categories:</strong></li>
        <li>&quot;In 5 years you&apos;ll be...&quot;</li>
        <li>&quot;Your next relationship will be...&quot;</li>
        <li>&quot;Your dream life looks like...&quot;</li>
        <li>&quot;You&apos;ll achieve X within Y years...&quot;</li>
      </ul>

      <h2>Girls Night Vibes</h2>

      <h3>Setting the Mood</h3>
      <ul>
        <li><strong>Lighting:</strong> Fairy lights, candles, dim lamps</li>
        <li><strong>Music:</strong> Girls night playlist (throwbacks, empowerment anthems)</li>
        <li><strong>Snacks:</strong> Charcuterie, chocolate, comfort foods</li>
        <li><strong>Drinks:</strong> Wine, rosé, seltzers, cocktails</li>
        <li><strong>Comfort:</strong> Blankets, cushions, cozy seating</li>
      </ul>

      <h3>Girls Night Drink Ideas</h3>
      <ul>
        <li><strong>Wine flight:</strong> Different wines to taste and compare</li>
        <li><strong>Rosé all day:</strong> Multiple rosé options</li>
        <li><strong>Cocktail bar:</strong> Set up a DIY cocktail station</li>
        <li><strong>Champagne:</strong> For celebrating anything or nothing</li>
        <li><strong>Mocktail options:</strong> For those taking it easy</li>
      </ul>

      <h2>Different Types of Girls Nights</h2>

      <h3>Wine Night</h3>
      <ul>
        <li><strong>Best games:</strong> Wine Tasting Challenge, Bad Date Stories, Hot Takes</li>
        <li><strong>Vibe:</strong> Relaxed, conversational, cozy</li>
        <li><strong>Activity:</strong> Face masks while playing</li>
      </ul>

      <h3>Pre-Going-Out</h3>
      <ul>
        <li><strong>Best games:</strong> Getting Ready Playlist, Rate the Fit, Quick Fire Kings</li>
        <li><strong>Vibe:</strong> Energetic, fun, fast-paced</li>
        <li><strong>Activity:</strong> Getting ready together</li>
      </ul>

      <h3>Bachelorette Pregame</h3>
      <ul>
        <li><strong>Best games:</strong> Truth or Drink (bride edition), Most Likely To</li>
        <li><strong>Vibe:</strong> Celebratory, slightly wild</li>
        <li><strong>Special rules:</strong> Bride drinks for certain topics</li>
      </ul>

      <h3>Breakup Recovery</h3>
      <ul>
        <li><strong>Best games:</strong> Compliment or Drink, Fortune Teller</li>
        <li><strong>Vibe:</strong> Supportive, uplifting, empowering</li>
        <li><strong>Focus:</strong> Hype up your friend</li>
      </ul>

      <h2>Girls Night Rules</h2>

      <h3>Golden Rules</h3>
      <ul>
        <li><strong>What happens at girls night stays at girls night</strong></li>
        <li><strong>No phones for texting exes</strong> (designate a phone holder)</li>
        <li><strong>Hype each other up</strong> - always</li>
        <li><strong>No judgment zone</strong> - safe space for sharing</li>
        <li><strong>Support the friend who needs it most</strong></li>
      </ul>

      <h3>Phone Rules</h3>
      <ul>
        <li>Appoint a &quot;phone guardian&quot; after 11 PM</li>
        <li>Group approval needed for any text to crushes/exes</li>
        <li>Screenshot accountability - no lone texting</li>
        <li>Social media posts must be approved by group</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/bachelorette-drinking-games" className="text-neon-pink hover:underline">Bachelorette Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-small-groups" className="text-neon-pink hover:underline">Drinking Games for Small Groups</Link></li>
        <li><Link href="/guides/wine-drinking-games" className="text-neon-pink hover:underline">Wine Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-two-people" className="text-neon-pink hover:underline">Drinking Games for Two People</Link></li>
      </ul>
    </GuideLayout>
  );
}
