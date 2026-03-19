import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Bar Drinking Games | Games to Play at Bars & Pubs",
  description: "Best drinking games to play at bars! Games that work in public, don't need much space, and won't get you kicked out. Perfect for nights out with friends.",
  keywords: ["bar drinking games", "drinking games at bars", "pub drinking games", "bar games with friends", "games to play at a bar", "pub games"],
  openGraph: { title: "15 Best Bar Drinking Games", description: "Games for going out!", type: "article", url: "https://sipwiki.app/guides/bar-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/bar-drinking-games" },
};

export default function BarDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Bar Drinking Games"
      description="Out at a bar with friends? These games work in public settings, need minimal equipment, and keep the fun going without causing a scene or getting kicked out."
      breadcrumb="Bar Games"
      relatedGames={[
        { name: "Most Likely To", slug: "most-likely-to", description: "Just need friends" },
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "No equipment" },
        { name: "Truth or Drink", slug: "truth-or-drink", description: "Bar classic" },
      ]}
    >
      <QuickAnswer
        question="What are the best drinking games to play at bars?"
        answer="The best bar drinking games are Most Likely To, Never Have I Ever, Two Truths and a Lie, Categories, and Would You Rather. These games need zero equipment, can be played sitting at a table, and won't disturb other patrons. You can also add drinking rules to bar games like darts, pool, and trivia nights."
        tips={[
          "Stick to conversation-based games",
          "Keep voices at reasonable levels",
          "Don't involve strangers without asking",
          "Tip your bartender well"
        ]}
        variant="primary"
      />

      <h2>Best Games for Bar Settings</h2>

      <h3>1. Most Likely To</h3>
      <p>Perfect bar game. Someone asks &quot;Who is most likely to...?&quot; and on three, everyone points. Most fingers pointed at you? Drink that many sips. Works at any table.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Volume level:</strong> Normal conversation</li>
        <li><strong>Bar-friendly:</strong> Contained to your table, no equipment needed</li>
      </ul>
      <p><Link href="/games/most-likely-to" className="text-neon-pink hover:underline">Full Most Likely To Rules</Link></p>

      <h3>2. Never Have I Ever</h3>
      <p>The classic. Take turns saying &quot;Never have I ever...&quot; followed by something you haven&apos;t done. Anyone who HAS done it drinks. Great for learning secrets about friends.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-15</li>
        <li><strong>Volume level:</strong> Quiet to normal</li>
        <li><strong>Bar-friendly:</strong> Works anywhere, can get personal but stays at your table</li>
      </ul>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Full Never Have I Ever Rules</Link></p>

      <h3>3. Two Truths and a Lie</h3>
      <p>State three things about yourself - two true, one false. Others guess the lie. Wrong guesses drink, right guesses mean you drink. Great icebreaker.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Volume level:</strong> Normal conversation</li>
        <li><strong>Bar-friendly:</strong> Actually better in public where statements can involve the environment</li>
      </ul>

      <h3>4. Categories</h3>
      <p>Pick a category (car brands, countries, types of beer). Go around naming items in the category. Hesitate too long or repeat? Drink. Simple and quick.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-10</li>
        <li><strong>Volume level:</strong> Normal</li>
        <li><strong>Bar-friendly:</strong> Can be played quietly, good for waiting on food/drinks</li>
      </ul>

      <h3>5. Would You Rather</h3>
      <p>Present two options, everyone picks one. Minority vote drinks. Can go from silly to deep depending on your group and the vibe.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Volume level:</strong> Depends on questions</li>
        <li><strong>Bar-friendly:</strong> Natural conversation flow, doesn&apos;t look like a &quot;game&quot;</li>
      </ul>

      <h3>6. Truth or Drink</h3>
      <p>Like Truth or Dare, but without dares (which would be disruptive at a bar). Answer honestly or drink. Questions can escalate throughout the night.</p>
      <ul>
        <li><strong>Equipment:</strong> Optional question cards</li>
        <li><strong>Players:</strong> 2-10</li>
        <li><strong>Volume level:</strong> Quiet conversation</li>
        <li><strong>Bar-friendly:</strong> Intimate, works well at small tables or booths</li>
      </ul>
      <p><Link href="/games/truth-or-drink" className="text-neon-pink hover:underline">Full Truth or Drink Rules</Link></p>

      <h3>7. 21 Questions (Drinking Edition)</h3>
      <p>One person thinks of something/someone. Others ask yes/no questions to guess. Wrong guess? Drink. Guess correctly? The thinker drinks.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 3-8</li>
        <li><strong>Volume level:</strong> Normal</li>
        <li><strong>Bar-friendly:</strong> Engaging without being loud, kills time between rounds</li>
      </ul>

      <h3>8. I&apos;m Going on a Picnic</h3>
      <p>Memory game with drinks. &quot;I&apos;m going on a picnic and bringing...&quot; Each person adds an item while repeating previous items. Forget something? Drink.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-10</li>
        <li><strong>Volume level:</strong> Normal</li>
        <li><strong>Bar-friendly:</strong> Gets funnier as drinks pile up</li>
      </ul>

      <h3>9. Cheers to the Governor</h3>
      <p>Count 1-21 around the group. At 21, toast &quot;to the governor!&quot; and drink. Person who says 21 creates a rule (swap numbers, add actions). Gets chaotic.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Volume level:</strong> Medium (counting, cheering)</li>
        <li><strong>Bar-friendly:</strong> Watch the volume as rules pile up</li>
      </ul>
      <p><Link href="/games/cheers-to-the-governor" className="text-neon-pink hover:underline">Full Cheers to the Governor Rules</Link></p>

      <h3>10. Fingers (Paranoia)</h3>
      <p>Everyone puts a finger on a cup. One person asks a question to another person secretly. That person answers by naming someone at the table. Paranoia ensues.</p>
      <ul>
        <li><strong>Equipment:</strong> One cup (or use your drink)</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Volume level:</strong> Whispered + normal</li>
        <li><strong>Bar-friendly:</strong> Creates intrigue, minimal disruption</li>
      </ul>

      <h2>Bar Games with Added Drinking Rules</h2>

      <h3>11. Darts</h3>
      <p>Most bars have a dartboard. Add drinking rules to any dart game:</p>
      <ul>
        <li><strong>Cricket:</strong> Hit an already-closed number = drink</li>
        <li><strong>301/501:</strong> Bust = drink</li>
        <li><strong>Around the World:</strong> Miss your target number = drink</li>
        <li><strong>Bullseye:</strong> Hit bullseye = others drink</li>
        <li><strong>Pro tip:</strong> Play after a few drinks, not too many</li>
      </ul>

      <h3>12. Pool (Billiards)</h3>
      <p>Pool tables are bar staples. Add drinks to standard rules:</p>
      <ul>
        <li><strong>Scratch:</strong> Drink</li>
        <li><strong>Sink a ball:</strong> Opponent drinks</li>
        <li><strong>Miss the cue ball:</strong> Drink</li>
        <li><strong>Sink the 8-ball early (lose):</strong> Finish your drink</li>
        <li><strong>Win the game:</strong> Loser buys next round</li>
      </ul>

      <h3>13. Bar Trivia Night</h3>
      <p>Many bars host trivia. Turn it into a drinking game:</p>
      <ul>
        <li><strong>Wrong answer:</strong> Team drinks</li>
        <li><strong>Perfect round:</strong> Other teams drink</li>
        <li><strong>Last place per round:</strong> Finish drinks</li>
        <li><strong>Win overall:</strong> Losers buy winners a round</li>
      </ul>

      <h3>14. Jukebox Roulette</h3>
      <p>Take turns putting random songs on the jukebox. Rules for what plays:</p>
      <ul>
        <li><strong>Someone groans:</strong> They drink</li>
        <li><strong>Song over 5 minutes:</strong> Picker drinks</li>
        <li><strong>People sing along:</strong> Picker gives drinks</li>
        <li><strong>Bartender changes song:</strong> Picker finishes drink</li>
      </ul>

      <h3>15. Predict the Bill</h3>
      <p>Everyone secretly guesses the final tab before paying. Closest wins; furthest buys a round. Higher stakes, more drinking.</p>
      <ul>
        <li><strong>Equipment:</strong> Paper/phone for guesses</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>When to play:</strong> Near end of the night</li>
        <li><strong>Pro tip:</strong> Works best at new bars where no one knows prices</li>
      </ul>

      <h2>Games to AVOID at Bars</h2>

      <h3>Will Get You Kicked Out</h3>
      <ul>
        <li><strong>Beer Pong</strong> - Too much space, too messy</li>
        <li><strong>Flip Cup</strong> - Way too loud and chaotic</li>
        <li><strong>Rage Cage</strong> - Same issues, amplified</li>
        <li><strong>Any card game with many cards</strong> - Takes up table space others need</li>
      </ul>

      <h3>Will Annoy Other Patrons</h3>
      <ul>
        <li><strong>Loud chanting games</strong> - Save for house parties</li>
        <li><strong>Games involving strangers</strong> - Without explicit consent</li>
        <li><strong>Physical challenge games</strong> - Not appropriate in public</li>
        <li><strong>Drinking songs</strong> - Unless the whole bar is doing it</li>
      </ul>

      <h2>Bar Etiquette</h2>

      <h3>General Guidelines</h3>
      <ul>
        <li><strong>Keep volume reasonable</strong> - Other people are trying to enjoy themselves too</li>
        <li><strong>Stay at your table/area</strong> - Don&apos;t spread out into others&apos; space</li>
        <li><strong>Tip well</strong> - Especially if you&apos;re ordering lots of drinks</li>
        <li><strong>Clean up after yourself</strong> - Don&apos;t leave trash or spills</li>
        <li><strong>Know when to stop</strong> - Bars can and will cut you off</li>
      </ul>

      <h3>Staff Relations</h3>
      <ul>
        <li><strong>Be friendly to bartenders</strong> - They control your drinks</li>
        <li><strong>Don&apos;t get too rowdy</strong> - Staff can ask you to leave</li>
        <li><strong>Order efficiently</strong> - Know what you want before reaching the bar</li>
        <li><strong>Pay attention</strong> - When staff give you warnings</li>
      </ul>

      <h3>Involving Strangers</h3>
      <ul>
        <li><strong>Ask first</strong> - Never assume they want to play</li>
        <li><strong>Accept &quot;no&quot; gracefully</strong> - Don&apos;t pressure anyone</li>
        <li><strong>Keep it light</strong> - If they join, don&apos;t get too intense</li>
        <li><strong>Buy them a drink</strong> - If they participate, it&apos;s polite to offer</li>
      </ul>

      <h2>Best Bar Types for Games</h2>

      <h3>Dive Bars</h3>
      <p>Often the most game-friendly. Casual atmosphere, regulars don&apos;t mind, often have pool and darts.</p>
      <ul>
        <li>Usually more relaxed about behavior</li>
        <li>Cheaper drinks = more game-friendly</li>
        <li>Regular crowd may join in</li>
      </ul>

      <h3>Sports Bars</h3>
      <p>Game already happening on TV. Drinking games blend right in during commercial breaks or between games.</p>
      <ul>
        <li>Already loud - games fit in</li>
        <li>Booths and tables for groups</li>
        <li>Food available for pacing</li>
      </ul>

      <h3>Pubs</h3>
      <p>Traditional pub games like darts and trivia built in. Usually welcoming of group activities.</p>
      <ul>
        <li>Game-friendly culture</li>
        <li>Often host trivia nights</li>
        <li>Community atmosphere</li>
      </ul>

      <h3>Avoid for Games</h3>
      <ul>
        <li><strong>Upscale cocktail bars</strong> - Wrong vibe, will be asked to leave</li>
        <li><strong>Packed nightclubs</strong> - Too loud, no space</li>
        <li><strong>Restaurant bars</strong> - People are trying to eat</li>
        <li><strong>Hotel bars</strong> - Often too formal</li>
      </ul>

      <h2>Bar Night Timeline</h2>

      <h3>Sample Evening</h3>
      <ul>
        <li><strong>8:00 PM:</strong> Arrive, get first drinks, settle in</li>
        <li><strong>8:30 PM:</strong> Casual conversation games (Would You Rather, Two Truths)</li>
        <li><strong>9:00 PM:</strong> If available, grab a pool table or darts</li>
        <li><strong>9:30 PM:</strong> Trivia if the bar hosts it</li>
        <li><strong>10:30 PM:</strong> Most Likely To, Never Have I Ever (group is warmed up)</li>
        <li><strong>11:30 PM:</strong> Wind down games, water breaks</li>
        <li><strong>12:00 AM:</strong> Predict the bill, settle up, arrange rides</li>
      </ul>

      <h2>Safety Reminders</h2>

      <ul>
        <li><strong>Pace yourself</strong> - You&apos;re at a bar all night, not a race</li>
        <li><strong>Eat something</strong> - Order food or eat before going out</li>
        <li><strong>Arrange rides in advance</strong> - Uber, DD, or public transit</li>
        <li><strong>Watch your drinks</strong> - Never leave them unattended</li>
        <li><strong>Stick together</strong> - Don&apos;t let friends leave alone</li>
        <li><strong>Know the bar&apos;s address</strong> - For ride apps or emergencies</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Drinking Games for Parties</Link></li>
        <li><Link href="/guides/apartment-drinking-games" className="text-neon-pink hover:underline">Apartment Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-small-groups" className="text-neon-pink hover:underline">Games for Small Groups</Link></li>
        <li><Link href="/guides/classic-drinking-games" className="text-neon-pink hover:underline">Classic Drinking Games</Link></li>
      </ul>
    </GuideLayout>
  );
}
