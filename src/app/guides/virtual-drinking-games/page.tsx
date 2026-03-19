import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Drinking Games (2024) | Online & Zoom Party Games",
  description: "Best drinking games for video calls! Complete guide for Zoom parties, Discord hangouts, and long-distance friend groups with platform-specific tips.",
  keywords: ["virtual drinking games", "zoom drinking games", "online drinking games", "video call drinking games", "remote drinking games", "discord drinking games"],
  openGraph: { title: "Virtual Drinking Games", description: "Cheers through the screen!", type: "article", url: "https://sipwiki.app/guides/virtual-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/virtual-drinking-games" },
};

export default function VirtualDrinkingGamesPage() {
  return (
    <GuideLayout title="Virtual Drinking Games" description="Can't be together in person? These games work perfectly over Zoom, FaceTime, Discord, or any video call platform. Long-distance friendships need drinking games too." breadcrumb="Virtual Games" relatedGames={[{ name: "Never Have I Ever", slug: "never-have-i-ever", description: "Works perfectly online" }, { name: "Most Likely To", slug: "most-likely-to", description: "Point at camera" }, { name: "Truth or Drink", slug: "truth-or-drink", description: "Q&A format" }]}>
      <h2>Why Virtual Drinking Games Hit Different</h2>
      <p>Virtual games have unique advantages:</p>
      <ul>
        <li><strong>Everyone has their own drinks</strong> - No sharing germs or running out</li>
        <li><strong>Private home comfort</strong> - PJs are acceptable attire</li>
        <li><strong>Screenshots</strong> - Capture the chaos for later</li>
        <li><strong>Include anyone anywhere</strong> - Geography doesn&apos;t matter</li>
        <li><strong>Mute button exists</strong> - Take calls, use bathroom discretely</li>
      </ul>

      <h2>Best Games for Video Calls</h2>

      <h3>Never Have I Ever</h3>
      <p>The virtual gold standard. Works exactly the same online.</p>
      <ul>
        <li>Everyone holds up 5-10 fingers visible on camera</li>
        <li>One person states &quot;Never have I ever...&quot;</li>
        <li>Put down a finger if you&apos;ve done it AND drink</li>
        <li>First to lose all fingers = big drink</li>
      </ul>
      <p>Works flawlessly because everyone can see everyone&apos;s fingers.</p>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink">Play Never Have I Ever →</Link></p>

      <h3>Most Likely To</h3>
      <p>Perfect for video because pointing at screens is hilarious.</p>
      <ul>
        <li>Someone asks &quot;Who&apos;s most likely to...&quot;</li>
        <li>On count of 3, everyone points at a screen (the person)</li>
        <li>Person with most votes drinks one drink per vote</li>
        <li>Ties mean both drink</li>
      </ul>
      <p>Pro tip: Use their name while pointing so there&apos;s no confusion.</p>
      <p><Link href="/games/most-likely-to" className="text-neon-pink">Play Most Likely To →</Link></p>

      <h3>Truth or Drink</h3>
      <p>Works even better online - harder to dodge questions.</p>
      <ul>
        <li>Take turns asking each other questions</li>
        <li>Answer truthfully or drink</li>
        <li>Camera on = accountability</li>
        <li>Group can challenge if they think you&apos;re lying</li>
      </ul>
      <p><Link href="/games/truth-or-drink" className="text-neon-pink">Play Truth or Drink →</Link></p>

      <h3>Categories</h3>
      <p>Lightning round word game.</p>
      <ul>
        <li>Pick a category (beer brands, countries, 90s movies)</li>
        <li>Go around naming things in that category</li>
        <li>5-second limit - hesitate or repeat and you drink</li>
        <li>Works great with screen share showing a timer</li>
      </ul>

      <h3>Trivia Night</h3>
      <p>One person hosts, everyone else competes.</p>
      <ul>
        <li>Host shares screen with questions</li>
        <li>Everyone writes answers privately (chat to host)</li>
        <li>Reveal answers - wrong answers drink</li>
        <li>Themes: pop culture, general knowledge, group inside jokes</li>
      </ul>
      <p>Sites like Kahoot or random trivia generators work well.</p>

      <h2>Games That Need Adaptation</h2>

      <h3>Virtual Kings Cup</h3>
      <p>Use an online card deck or card drawing app.</p>
      <ul>
        <li>One person shares screen with virtual deck</li>
        <li>Take turns virtually &quot;drawing&quot; cards</li>
        <li>Everyone drinks from their own cups for waterfall</li>
        <li>Skip physical King&apos;s cup - just assign drinks</li>
      </ul>
      <p>Try: playingcards.io or random card generators</p>
      <p><Link href="/games/kings-cup" className="text-neon-pink">Kings Cup rules →</Link></p>

      <h3>Online Charades</h3>
      <p>Drinking charades works great on video.</p>
      <ul>
        <li>One person acts, everyone guesses in chat</li>
        <li>Wrong guessers drink</li>
        <li>Actor drinks if no one gets it in 60 seconds</li>
        <li>Use random word generators for prompts</li>
      </ul>

      <h3>Would You Rather</h3>
      <p>Debate-style drinking game.</p>
      <ul>
        <li>Present two options</li>
        <li>Everyone votes (hands up, chat, or verbal)</li>
        <li>Minority choice drinks</li>
        <li>Tie = everyone drinks</li>
      </ul>

      <h2>Online Tools and Platforms</h2>

      <h3>Video Platforms</h3>
      <ul>
        <li><strong>Zoom</strong> - Most reliable, screen share works great, breakout rooms for team games</li>
        <li><strong>Discord</strong> - Better for ongoing groups, streaming built-in, screen share audio works</li>
        <li><strong>FaceTime</strong> - Simple for Apple users, limited screen share</li>
        <li><strong>Google Meet</strong> - Easy access, solid screen share</li>
        <li><strong>Houseparty (RIP)</strong> - The original, we miss you</li>
      </ul>

      <h3>Game-Specific Tools</h3>
      <ul>
        <li><strong>Jackbox Party Packs</strong> - One person buys, screen shares, everyone plays on phones</li>
        <li><strong>PlayingCards.io</strong> - Virtual card decks, fully customizable</li>
        <li><strong>Random wheel spinners</strong> - Wheel Decide, Picker Wheel</li>
        <li><strong>Kahoot</strong> - Great for trivia nights</li>
        <li><strong>Skribbl.io</strong> - Pictionary-style drawing game</li>
        <li><strong>Among Us</strong> - Add drinking rules to the game</li>
      </ul>

      <h3>Music Integration</h3>
      <ul>
        <li>Spotify listening parties - share a playlist</li>
        <li>Discord music bots - synced listening</li>
        <li>Name that tune games</li>
      </ul>

      <h2>Virtual Party Etiquette</h2>

      <h3>Technical Must-Haves</h3>
      <ul>
        <li><strong>Stable internet</strong> - Nothing kills vibe like freezing</li>
        <li><strong>Good lighting</strong> - People need to see you drink</li>
        <li><strong>Camera angle</strong> - Face and drink visible</li>
        <li><strong>Headphones</strong> - Reduces echo for everyone</li>
      </ul>

      <h3>Communication Rules</h3>
      <ul>
        <li><strong>One person talks at a time</strong> - Crosstalk is chaos online</li>
        <li><strong>Use names</strong> - &quot;Sarah, your turn&quot; keeps things moving</li>
        <li><strong>Hand raise to speak</strong> - Prevents interruptions</li>
        <li><strong>Mute when drinking</strong> - No one needs slurp sounds</li>
        <li><strong>Chat for reactions</strong> - Type while others talk</li>
      </ul>

      <h3>Keep Energy Up</h3>
      <ul>
        <li>Shorter sessions than in-person (2-3 hours max)</li>
        <li>Take breaks every hour</li>
        <li>Switch games regularly</li>
        <li>Have a designated host/MC</li>
        <li>Plan the agenda loosely</li>
      </ul>

      <h2>Virtual Party Ideas</h2>

      <h3>Theme Nights</h3>
      <ul>
        <li><strong>Costume party</strong> - Dress up for the camera</li>
        <li><strong>Same drink night</strong> - Everyone makes the same cocktail</li>
        <li><strong>Background competition</strong> - Best virtual background wins</li>
        <li><strong>Decade night</strong> - 80s, 90s, 2000s themes</li>
      </ul>

      <h3>Hybrid Events</h3>
      <p>Some people together, some virtual:</p>
      <ul>
        <li>Set up a laptop for virtual attendees to &quot;be there&quot;</li>
        <li>Include them in games explicitly</li>
        <li>Designate someone to manage the virtual connection</li>
        <li>Keep camera steady so they can see the action</li>
      </ul>

      <h2>What Doesn&apos;t Work Online</h2>
      <ul>
        <li><strong>Physical games</strong> - Flip cup, beer pong (obviously)</li>
        <li><strong>Whispering games</strong> - Everyone can hear in their headphones</li>
        <li><strong>Reaction speed games</strong> - Lag kills the timing</li>
        <li><strong>Games requiring passed objects</strong> - Can&apos;t pass cards through screens</li>
      </ul>

      <h2>Time Zone Management</h2>
      <ul>
        <li>Find overlap that works - someone&apos;s afternoon, someone&apos;s evening</li>
        <li>Rotate who gets the bad time slot</li>
        <li>Weekend afternoons often work best</li>
        <li>Keep it shorter for inconvenient time zones</li>
      </ul>

      <p>More social games: <Link href="/guides/drinking-games-for-couples" className="text-neon-pink hover:underline">couples games</Link> | <Link href="/guides/icebreaker-drinking-games" className="text-neon-pink hover:underline">icebreaker games</Link></p>
    </GuideLayout>
  );
}
