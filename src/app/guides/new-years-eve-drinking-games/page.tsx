import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best New Year's Eve Drinking Games (2024) | NYE Party Games",
  description: "Ring in the new year with these drinking games! Complete guide with countdown games, champagne challenges, midnight activities, and NYE party ideas to remember.",
  keywords: ["new years eve drinking games", "nye drinking games", "new years party games", "countdown drinking games", "new years eve party ideas", "midnight drinking games"],
  openGraph: { title: "New Year's Eve Drinking Games", description: "Countdown to midnight!", type: "article", url: "https://sipwiki.app/guides/new-years-eve-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/new-years-eve-drinking-games" },
};

export default function NewYearsEvePage() {
  return (
    <GuideLayout title="Best New Year's Eve Drinking Games" description="Make the countdown to midnight unforgettable! These games build excitement throughout the night and culminate in epic celebrations as the ball drops." breadcrumb="NYE Games" relatedGames={[{ name: "Power Hour", slug: "power-hour", description: "Time-based drinking" }, { name: "Kings Cup", slug: "kings-cup", description: "Classic party game" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Year in review" }]}>
      <h2>The NYE Party Timeline</h2>
      <p>New Year&apos;s Eve parties have a unique structure - games should match the energy:</p>
      <ul>
        <li><strong>Early (8-10 PM)</strong> - Warm-up games, arrivals still happening</li>
        <li><strong>Peak (10-11:30 PM)</strong> - High-energy games, everyone&apos;s there</li>
        <li><strong>Countdown (11:45-midnight)</strong> - Build to the moment</li>
        <li><strong>After midnight</strong> - Celebrate and wind down</li>
      </ul>

      <h2>Countdown Games</h2>

      <h3>Hourly Toast Challenge</h3>
      <p>At the top of every hour, someone proposes a toast. Theme suggestions:</p>
      <ul>
        <li>8 PM - Toast to new beginnings</li>
        <li>9 PM - Toast to friendships</li>
        <li>10 PM - Toast to the best memory of the year</li>
        <li>11 PM - Toast to the worst thing you&apos;re leaving behind</li>
        <li>Midnight - Toast to the new year</li>
      </ul>
      <p>Miss the hour? Drink penalty.</p>

      <h3>Resolution Roulette</h3>
      <p>Everyone writes a resolution on a paper. Papers go in a hat. Draw one and read it aloud. If you won&apos;t keep yours, drink. Group votes on most unrealistic resolution - that person drinks double.</p>

      <h3>Countdown Categories</h3>
      <p>At each hour, play Categories with a themed topic:</p>
      <ul>
        <li>9 PM - &quot;Things that happened this year&quot;</li>
        <li>10 PM - &quot;Songs from this year&quot;</li>
        <li>11 PM - &quot;Predictions for next year&quot;</li>
      </ul>
      <p>Can&apos;t name one? Drink.</p>

      <h3>Year in Review Trivia</h3>
      <p>Questions about the past year - news, pop culture, sports, music. Wrong answer = drink. First to 10 points wins and assigns drinks.</p>

      <h2>Midnight Games</h2>

      <h3>Champagne Race</h3>
      <p>When the ball drops, everyone races to finish their champagne. Last to finish = designated designated driver check (or assigns drinks in the new year).</p>

      <h3>Kiss or Drink</h3>
      <p>Classic NYE rule: no kiss at midnight = finish your drink. Can be a kiss on the cheek to include everyone.</p>

      <h3>New Year&apos;s Resolution Reveal</h3>
      <p>Write resolutions in sealed envelopes earlier in the night. Open at midnight. Read aloud. Group drinks to toast each resolution.</p>

      <h3>Midnight Predictions</h3>
      <p>Before midnight, everyone writes a prediction for the new year on paper. Read them at midnight. Revisit next NYE - whoever was right doesn&apos;t have to drink all night.</p>

      <h2>All-Night Games</h2>
      <p>Games that work throughout the evening:</p>

      <h3>Never Have I Ever: Year in Review</h3>
      <p>Prompts specific to the past year:</p>
      <ul>
        <li>Never have I ever broken a resolution</li>
        <li>Never have I ever ghosted someone this year</li>
        <li>Never have I ever gone viral (or tried to)</li>
        <li>Never have I ever said &quot;new year, new me&quot; unironically</li>
        <li>Never have I ever cried about the passing of time</li>
      </ul>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink">Play Never Have I Ever →</Link></p>

      <h3>Most Likely To: Next Year Edition</h3>
      <p>Predict next year&apos;s events:</p>
      <ul>
        <li>Who&apos;s most likely to get engaged next year?</li>
        <li>Who&apos;s most likely to move cities?</li>
        <li>Who&apos;s most likely to get promoted?</li>
        <li>Who&apos;s most likely to have a glow-up?</li>
        <li>Who&apos;s most likely to still be single next NYE?</li>
      </ul>
      <p><Link href="/game/most-likely-to" className="text-neon-pink">Play Most Likely To →</Link></p>

      <h3>Kings Cup: NYE Edition</h3>
      <p>Themed rule changes:</p>
      <ul>
        <li>Ace = &quot;Auld Lang Syne&quot; Waterfall</li>
        <li>2 = &quot;New You&quot; - give 2 drinks</li>
        <li>5 = &quot;Dive into the new year&quot; - guys drink</li>
        <li>8 = &quot;2-0-2-X&quot; countdown - everyone counts from 10</li>
        <li>King = Pour into the &quot;Ball Drop&quot; center cup</li>
      </ul>
      <p><Link href="/game/kings-cup" className="text-neon-pink">Play Kings Cup →</Link></p>

      <h3>Power Hour: Countdown Edition</h3>
      <p>Start a Power Hour at 11 PM. One shot of beer per minute. You&apos;ll be 60 shots in at midnight. Only for those who can handle it.</p>
      <p><Link href="/guides/power-hour-rules" className="text-neon-pink">Power Hour rules →</Link></p>

      <h2>TV Watching Games</h2>
      <p>Watching the ball drop on TV? Add drinking rules:</p>
      <ul>
        <li>Celebrity appearance - drink 1</li>
        <li>Ryan Seacrest says &quot;amazing&quot; - drink 1</li>
        <li>Times Square crowd shot - drink 1</li>
        <li>Musical performance starts - drink throughout</li>
        <li>Awkward interview - drink 2</li>
        <li>Countdown clock shown - everyone drinks</li>
        <li>Ball drops - toast and finish drink</li>
      </ul>

      <h2>After Midnight Games</h2>
      <p>Once the clock strikes, the party continues:</p>

      <h3>First of the Year</h3>
      <p>First to do things in the new year assigns drinks:</p>
      <ul>
        <li>First to say something stupid</li>
        <li>First to spill a drink</li>
        <li>First to mention how tired they are</li>
        <li>First to check their phone</li>
      </ul>

      <h3>New Year&apos;s Superlatives</h3>
      <p>Vote on the past year:</p>
      <ul>
        <li>Best couple moment</li>
        <li>Most embarrassing story</li>
        <li>Best glow-up</li>
        <li>Worst decision that turned out okay</li>
      </ul>
      <p>Winners and &quot;winners&quot; drink.</p>

      <h2>NYE Drink Suggestions</h2>
      <ul>
        <li><strong>Before midnight</strong> - Beer, wine, cocktails (pacing)</li>
        <li><strong>At midnight</strong> - Champagne/sparkling wine for the toast</li>
        <li><strong>After midnight</strong> - Whatever keeps you going</li>
        <li><strong>Hydration</strong> - NYE is a marathon, not a sprint</li>
      </ul>

      <h2>Party Tips</h2>
      <ul>
        <li><strong>Pace the night</strong> - 4+ hours is a long party, start slow</li>
        <li><strong>Have non-drinkers covered</strong> - Sparkling cider for toasts</li>
        <li><strong>Food throughout</strong> - Not just before, but during</li>
        <li><strong>Ride situation</strong> - No one drives, Ubers surge, plan ahead</li>
        <li><strong>Have the countdown visible</strong> - TV, phone, or clock</li>
      </ul>

      <h2>What Not to Do</h2>
      <ul>
        <li><strong>Don&apos;t peak too early</strong> - Save energy for midnight</li>
        <li><strong>Don&apos;t forget the toast</strong> - Have champagne ready</li>
        <li><strong>Don&apos;t skip the countdown</strong> - It&apos;s the whole point</li>
        <li><strong>Don&apos;t forget to eat</strong> - Drunk before 11 PM is bad planning</li>
      </ul>

      <p>More holiday games: <Link href="/guides/christmas-drinking-games" className="text-neon-pink hover:underline">Christmas games</Link> | <Link href="/guides/super-bowl-drinking-games" className="text-neon-pink hover:underline">Super Bowl games</Link></p>
    </GuideLayout>
  );
}
