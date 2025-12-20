import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Bachelor Party Drinking Games (2024) | Stag Do Games",
  description: "Epic drinking games for bachelor parties! Games to roast the groom, compete with the crew, and create legendary stories. Complete guide with groom-focused games and group activities.",
  keywords: ["bachelor party drinking games", "stag do games", "bachelor party games", "groom drinking games", "guys night drinking games", "stag party games"],
  openGraph: { title: "Bachelor Party Drinking Games", description: "Send him off in style.", type: "article", url: "https://sipwiki.app/guides/bachelor-party-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/bachelor-party-drinking-games" },
};

export default function BachelorPartyPage() {
  return (
    <GuideLayout title="Best Bachelor Party Drinking Games" description="The final countdown to married life deserves legendary games. The goal: embarrass the groom, bond the group, and create stories that'll be told at every reunion (or sworn to secrecy forever)." breadcrumb="Bachelor Party Games" relatedGames={[{ name: "Never Have I Ever", slug: "never-have-i-ever", description: "Expose the groom" }, { name: "Most Likely To", slug: "most-likely-to", description: "Roast everyone" }, { name: "Rage Cage", slug: "rage-cage", description: "High energy chaos" }]}>
      <h2>The Bachelor Party Vibe</h2>
      <p>Bachelor party games serve specific purposes:</p>
      <ul>
        <li><strong>Roast the groom</strong> - He&apos;s the main character all night</li>
        <li><strong>Bond diverse friend groups</strong> - College friends meet work friends meet family</li>
        <li><strong>Create stories</strong> - These become wedding speech material</li>
        <li><strong>Keep energy high</strong> - This isn&apos;t a casual hangout</li>
      </ul>

      <h2>Groom-Focused Games</h2>
      <p>Put the groom in the hot seat:</p>

      <h3>Groom Trivia</h3>
      <p>The best man prepares questions about the groom and bride. Group answers. Wrong answers = groom drinks. Right answers = group drinks.</p>
      <p><strong>Sample questions:</strong></p>
      <ul>
        <li>Where was their first date?</li>
        <li>What&apos;s [bride]&apos;s biggest pet peeve about him?</li>
        <li>What did he say when asked about marriage on date 3?</li>
        <li>What&apos;s [bride]&apos;s drink order?</li>
        <li>Who said &quot;I love you&quot; first?</li>
      </ul>
      <p><strong>Pro tip:</strong> Best man should coordinate with the bride for embarrassing answers.</p>

      <h3>The Dare List</h3>
      <p>Before the night, create a list of dares the groom must complete throughout the evening. Incomplete dares = drinks.</p>
      <p><strong>Example dares:</strong></p>
      <ul>
        <li>Get a stranger to buy him a drink</li>
        <li>Do karaoke (specific song chosen by best man)</li>
        <li>Wear a ridiculous accessory all night</li>
        <li>Take a photo with someone named [bride&apos;s name]</li>
        <li>Get a bartender&apos;s phone number (for &quot;best man emergency purposes&quot;)</li>
      </ul>

      <h3>Rate the Groom</h3>
      <p>Everyone predicts things about his married life. Groom must answer honestly. Disagreement = drinks.</p>
      <p><strong>Topics:</strong></p>
      <ul>
        <li>Who will control the TV remote?</li>
        <li>Who will cook most meals?</li>
        <li>How long until they get a pet?</li>
        <li>Kids: how many, when?</li>
        <li>Who will win most arguments?</li>
      </ul>

      <h3>Never Have I Ever: Groom Edition</h3>
      <p>Play <Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> but every prompt must be about the groom. Expose his past, make him drink, create stories.</p>
      <p><strong>Examples:</strong></p>
      <ul>
        <li>Never have I ever cried during a movie with [groom]</li>
        <li>Never have I ever seen [groom] do something embarrassing drunk</li>
        <li>Never have I ever been bailed out by [groom]</li>
      </ul>

      <h2>Group Competition Games</h2>
      <p>These games pit the crew against each other:</p>

      <h3>Beer Pong Tournament</h3>
      <p>Set up a bracket. Winner plays the groom in the finals (groom gets a bye to the end). Champion gets bragging rights forever.</p>
      <p><Link href="/game/beer-pong" className="text-neon-pink">Full Beer Pong rules →</Link></p>

      <h3>Flip Cup</h3>
      <p>Split into teams. College friends vs. work friends vs. family. Tournament style. Losers buy next round.</p>
      <p><Link href="/game/flip-cup" className="text-neon-pink">Full Flip Cup rules →</Link></p>

      <h3>Rage Cage</h3>
      <p>High-energy chaos for larger bachelor parties. Everyone around a table, two balls bouncing, cups stacking. Pure mayhem.</p>
      <p><strong>Why it works:</strong> Fast, loud, everyone&apos;s involved. Peak bachelor party energy.</p>
      <p><Link href="/game/rage-cage" className="text-neon-pink">Full Rage Cage rules →</Link></p>

      <h3>Civil War</h3>
      <p>3v3 beer pong with no turns. All six players shoot simultaneously. Chaos. Perfect for medium-sized bachelor parties.</p>
      <p><Link href="/game/civil-war" className="text-neon-pink">Full Civil War rules →</Link></p>

      <h2>Bar/Club Games</h2>
      <p>For when you&apos;re moving between venues:</p>

      <h3>Bar Golf</h3>
      <p>Each bar is a &quot;hole.&quot; Specific drinks are assigned (par 3 = finish a beer, par 4 = mixed drink, par 5 = shot). Track scores. Lowest score wins.</p>

      <h3>Pub Crawl Bingo</h3>
      <p>Bingo cards with things like &quot;groom talks about wedding planning,&quot; &quot;someone orders a girly drink,&quot; &quot;bathroom line over 5 people.&quot; First bingo = group buys your drinks at the next bar.</p>

      <h3>Photo Hunt</h3>
      <p>List of photos the group must capture throughout the night. Missing photos = drinks at the final bar. Photos might include:</p>
      <ul>
        <li>Groom with a bouncer</li>
        <li>Group in a ridiculous pose</li>
        <li>Someone arm wrestling a stranger</li>
      </ul>

      <h2>Pacing the Groom</h2>
      <p>He needs to survive the night. Strategies:</p>
      <ul>
        <li><strong>Water rounds</strong> - Every third drink is water for everyone</li>
        <li><strong>Food breaks</strong> - Schedule dinner/late-night food</li>
        <li><strong>Best man backup</strong> - Someone takes drinks for him when needed</li>
        <li><strong>Groom substitutes</strong> - Some games let him tag someone else in</li>
        <li><strong>End time</strong> - Know when to call it before he&apos;s destroyed</li>
      </ul>

      <h2>Best Man Responsibilities</h2>
      <ul>
        <li>Prep trivia questions in advance</li>
        <li>Coordinate with bride for embarrassing info</li>
        <li>Keep the groom&apos;s drink count mentally tracked</li>
        <li>Have backup games ready if energy dips</li>
        <li>Manage competing friend group dynamics</li>
        <li>Document (or prevent documentation of) key moments</li>
      </ul>

      <h2>Mixing Friend Groups</h2>
      <p>Bachelor parties often combine people who don&apos;t know each other. Games help:</p>
      <ul>
        <li>Start with <Link href="/game/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> to learn about each other</li>
        <li>Team games should mix groups (don&apos;t let college friends dominate)</li>
        <li><Link href="/game/most-likely-to" className="text-neon-pink">Most Likely To</Link> works even with strangers</li>
        <li>Groom-focused games unite everyone around the common purpose</li>
      </ul>

      <p>More party games: <Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Party game guide</Link> | <Link href="/guides/drinking-games-for-large-groups" className="text-neon-pink hover:underline">Large group games</Link></p>
    </GuideLayout>
  );
}
