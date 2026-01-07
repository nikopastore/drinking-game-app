import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Flirty Drinking Games for Sparks & Chemistry | SipWiki",
  description: "Flirty drinking games perfect for date nights, couples parties, and when the chemistry is undeniable. From Truth or Drink to romantic card games.",
  keywords: ["flirty drinking games", "romantic drinking games", "sexy drinking games", "drinking games for couples", "spicy drinking games", "date night drinking games", "flirty party games"],
  openGraph: { title: "15 Best Flirty Drinking Games", description: "Turn up the heat with these romantic party games!", type: "article", url: "https://sipwiki.app/guides/flirty-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/flirty-drinking-games" },
};

export default function FlirtyDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Flirty Drinking Games"
      description="Sparks flying? These games add romantic tension to your night - perfect for date nights, couples parties, or when the chemistry is undeniable."
      breadcrumb="Flirty Games"
      relatedGames={[
        { name: "Truth or Drink", slug: "truth-or-drink", description: "Ask anything" },
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Spicy edition" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Who would?" },
      ]}
    >
      <QuickAnswer
        question="What are the best flirty drinking games?"
        answer="The best flirty drinking games include Truth or Drink (ask spicy questions or drink), Never Have I Ever (romantic edition), Spin the Bottle, Strip or Drink, and Two Truths & a Lie. These games work for couples or groups where there's chemistry. The key is choosing games that encourage conversation and create fun tension without making anyone uncomfortable."
        tips={[
          "Start mild and let the group escalate naturally",
          "Always have an easy opt-out (just drink instead)",
          "Best with 2-6 people who know each other",
          "Set boundaries upfront so everyone's comfortable"
        ]}
        variant="primary"
      />

      <h2>Top Flirty Drinking Games</h2>

      <h3>1. Truth or Drink</h3>
      <p>The classic flirty game! Take turns asking each other questions. Answer honestly or take a drink. The questions can start innocent and get progressively spicier.</p>
      <p><strong>How to play:</strong> Prepare questions in advance or use a Truth or Drink app. Take turns asking. The person asked must answer truthfully or drink.</p>
      <p><strong>Best for:</strong> Date nights, small groups with chemistry</p>
      <p><Link href="/game/truth-or-drink" className="text-neon-pink hover:underline">Play Truth or Drink on SipWiki</Link></p>

      <h3>2. Never Have I Ever (Spicy Edition)</h3>
      <p>The classic party game gets a romantic twist with spicier statements. Learn surprising things about each other while keeping drinks flowing.</p>
      <p><strong>How to play:</strong> Take turns saying &quot;Never have I ever...&quot; followed by something flirty. Anyone who HAS done it drinks.</p>
      <p><strong>Sample statements:</strong></p>
      <ul>
        <li>Never have I ever had a crush on someone in this room</li>
        <li>Never have I ever sent a risky text</li>
        <li>Never have I ever been on a first date that led nowhere</li>
        <li>Never have I ever kissed someone I just met</li>
      </ul>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink hover:underline">Play Never Have I Ever on SipWiki</Link></p>

      <h3>3. Spin the Bottle (Adult Edition)</h3>
      <p>A nostalgic classic that still works! Spin a bottle and whoever it points to, you either complete a dare or both drink.</p>
      <p><strong>How to play:</strong> Sit in a circle. Spin the bottle. The spinner and the person it lands on complete a dare (like a compliment, a truth, or a quick peck) or both drink.</p>
      <p><strong>Best for:</strong> Groups of 4-8 with existing chemistry</p>

      <h3>4. Strip or Drink</h3>
      <p>Each round, someone draws a card with a challenge. Complete the challenge, remove an article of clothing, or take a drink. You always have options!</p>
      <p><strong>How to play:</strong> Prepare challenge cards. Each turn, draw a card. Complete the challenge, remove clothing, or drink - your choice every time.</p>
      <p><strong>Best for:</strong> Couples only or very close friends</p>

      <h3>5. Two Truths and a Lie (Flirty Edition)</h3>
      <p>Share two true statements and one lie about your romantic history. Others guess which is the lie - wrong guesses drink!</p>
      <p><strong>How to play:</strong> Take turns sharing 2 truths and 1 lie. The group votes on the lie. Wrong voters drink.</p>
      <p><strong>Sample statements:</strong></p>
      <ul>
        <li>&quot;I&apos;ve dated someone I met at a bar / I&apos;ve never had a one-night stand / I&apos;ve been in love twice&quot;</li>
      </ul>

      <h2>Games for Couples</h2>

      <h3>6. Compliment or Drink</h3>
      <p>Set a timer. Every 30 seconds, give your partner a genuine compliment. Run out of ideas? Take a drink! See how long you can keep the compliments flowing.</p>
      <p><strong>Why it works:</strong> Builds connection while having fun. Gets harder (and sillier) as the night goes on.</p>

      <h3>7. The Question Game</h3>
      <p>Take turns asking each other questions. You MUST answer with another question. First person to mess up (statement, repeat, or hesitation) drinks.</p>
      <p><strong>How to make it flirty:</strong> Questions can be romantic or suggestive. &quot;What do you find attractive about me?&quot; &quot;Would you want to know?&quot;</p>

      <h3>8. Drink If You Love Me</h3>
      <p>Take turns trying to make your partner smile or laugh. Say &quot;Drink if you love me&quot; in the most ridiculous, flirty, or creative way. If they smile, they drink!</p>
      <p><strong>Pro tip:</strong> Get creative with accents, dramatic performances, or unexpected compliments.</p>

      <h3>9. Would You Rather (Romantic Edition)</h3>
      <p>Classic would you rather but with romantic or spicy scenarios. Disagree on the answer? Both drink!</p>
      <p><strong>Sample questions:</strong></p>
      <ul>
        <li>Would you rather go on a beach date or mountain cabin getaway?</li>
        <li>Would you rather receive a surprise gift or a handwritten love letter?</li>
        <li>Would you rather have breakfast in bed or dinner by candlelight?</li>
      </ul>

      <h2>Group Games with Chemistry</h2>

      <h3>10. Most Likely To (Flirty)</h3>
      <p>Someone reads a &quot;Most Likely To&quot; statement. Everyone points at who they think fits. Person with the most fingers pointed drinks!</p>
      <p><strong>Flirty statements:</strong></p>
      <ul>
        <li>Most likely to flirt with the bartender</li>
        <li>Most likely to date someone from this group</li>
        <li>Most likely to send a 2am text</li>
      </ul>
      <p><Link href="/game/most-likely-to" className="text-neon-pink hover:underline">Play Most Likely To on SipWiki</Link></p>

      <h3>11. Seven Minutes in Heaven (Drinking Edition)</h3>
      <p>Spin a bottle - the two people go into another room for 7 minutes. What happens is up to them! Others drink while waiting.</p>
      <p><strong>Alternate rule:</strong> If either person opts out, both drink instead.</p>

      <h3>12. Truth or Dare (with Drinks)</h3>
      <p>Classic truth or dare but with a drinking twist. Refuse a truth? 2 drinks. Refuse a dare? 3 drinks. Adds stakes without forcing anyone outside their comfort zone.</p>
      <p><strong>Flirty dares:</strong> Give a compliment, do a slow dance, whisper something to someone, demonstrate your best flirty look</p>
      <p><Link href="/guides/truth-or-dare-drinking-game" className="text-neon-pink hover:underline">Full Truth or Dare rules</Link></p>

      <h3>13. Kiss, Marry, Kill (Drinking Edition)</h3>
      <p>Name 3 people (celebrities, people in the room, etc). The person must assign kiss, marry, kill. Group votes if they agree - wrong side drinks!</p>

      <h3>14. Body Shot Roulette</h3>
      <p>Write body parts on cards (shoulder, hand, cheek, etc.). Draw a card and someone must take a shot from that location on another player.</p>
      <p><strong>Keep it consensual:</strong> Both parties must agree, or the drawer just drinks normally.</p>

      <h3>15. Dare Pong</h3>
      <p>Beer pong but each cup has a flirty dare at the bottom. Sink a cup? Opponent does the dare AND drinks.</p>
      <p><strong>Sample dares:</strong> Give a compliment, do 10 seconds of eye contact, tell your most embarrassing crush story</p>

      <h2>Tips for Flirty Drinking Games</h2>

      <h3>Setting the Right Mood</h3>
      <ul>
        <li><strong>Dim lighting</strong> - Candles or fairy lights work great</li>
        <li><strong>Good music</strong> - Keep it low enough for conversation</li>
        <li><strong>Comfortable seating</strong> - Couches or floor pillows</li>
        <li><strong>Right drinks</strong> - Something you can sip, not chug</li>
      </ul>

      <h3>Keeping Everyone Comfortable</h3>
      <ul>
        <li><strong>Always have an opt-out</strong> - &quot;Just drink&quot; should always be acceptable</li>
        <li><strong>Start mild</strong> - Let the group set the pace</li>
        <li><strong>Read the room</strong> - If someone seems uncomfortable, dial it back</li>
        <li><strong>Set boundaries upfront</strong> - What&apos;s off-limits?</li>
        <li><strong>No pressure</strong> - Flirty games should be fun, not awkward</li>
      </ul>

      <h3>When to Play</h3>
      <ul>
        <li><strong>Date nights at home</strong> - Just the two of you</li>
        <li><strong>Double dates</strong> - When everyone&apos;s comfortable</li>
        <li><strong>Small parties</strong> - Where people already have chemistry</li>
        <li><strong>After other games</strong> - Once the group is warmed up</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/drinking-games-for-couples" className="text-neon-pink hover:underline">Drinking Games for Couples</Link></li>
        <li><Link href="/guides/date-night-drinking-games" className="text-neon-pink hover:underline">Date Night Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-2" className="text-neon-pink hover:underline">Drinking Games for 2</Link></li>
        <li><Link href="/guides/truth-or-dare-drinking-game" className="text-neon-pink hover:underline">Truth or Dare Drinking Game</Link></li>
      </ul>
    </GuideLayout>
  );
}
