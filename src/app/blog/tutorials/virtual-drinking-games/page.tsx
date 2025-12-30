import { Metadata } from "next";
import { BlogLayout } from "@/components/BlogLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Virtual Drinking Games 2025: Play Online with Friends",
  description: "Host the perfect virtual drinking game night! Complete guide to playing drinking games over Zoom, Discord, and video chat with friends near and far.",
  keywords: [
    "virtual drinking games",
    "online drinking games",
    "Zoom drinking games",
    "drinking games over video chat",
    "remote drinking games",
    "Discord drinking games",
    "long distance drinking games",
    "quarantine drinking games"
  ],
  openGraph: {
    title: "Virtual Drinking Games 2025: The Complete Guide",
    description: "How to play drinking games over video chat with friends.",
    type: "article",
    url: "https://sipwiki.app/blog/tutorials/virtual-drinking-games",
  },
  alternates: {
    canonical: "https://sipwiki.app/blog/tutorials/virtual-drinking-games",
  },
};

export default function VirtualDrinkingGamesPage() {
  return (
    <BlogLayout
      title="Virtual Drinking Games 2025: The Complete Guide"
      description="Distance doesn't have to stop the party. Learn how to host epic drinking game nights over Zoom, Discord, and other video platforms with friends anywhere in the world."
      author="game-master"
      publishDate="2025-01-25"
      category="Tutorials"
      categorySlug="tutorials"
      readTime="12 min"
      tableOfContents={[
        { id: "setup", title: "Setting Up Your Virtual Party" },
        { id: "best-games", title: "Best Games for Video Chat" },
        { id: "platforms", title: "Platform-Specific Tips" },
        { id: "tools", title: "Online Tools & Apps" },
        { id: "hosting", title: "Hosting Tips" },
      ]}
      relatedArticles={[
        { title: "Kings Cup Rules", slug: "../guides/kings-cup-rules", description: "Card game perfect for video chat" },
        { title: "Never Have I Ever Questions", slug: "../guides/never-have-i-ever-questions", description: "200+ questions for virtual play" },
        { title: "Most Likely To Questions", slug: "../guides/most-likely-to-questions", description: "300+ prompts for groups" },
      ]}
    >
      <p className="lead">
        Whether you&apos;re separated by distance, can&apos;t make it to the party, or just prefer
        staying home, virtual drinking games let you connect with friends over shared drinks
        and laughter. Here&apos;s how to make it work.
      </p>

      <h2 id="setup">Setting Up Your Virtual Party</h2>

      <h3>What You&apos;ll Need</h3>
      <ul>
        <li><strong>Video chat platform:</strong> Zoom, Discord, Google Meet, FaceTime, etc.</li>
        <li><strong>Good lighting:</strong> So everyone can see you</li>
        <li><strong>Stable internet:</strong> Nothing kills the vibe like lag</li>
        <li><strong>Drinks:</strong> Obviously</li>
        <li><strong>Game supplies:</strong> Cards, dice, or phone apps depending on games</li>
        <li><strong>Snacks:</strong> Pace yourself</li>
      </ul>

      <h3>Technical Setup Tips</h3>
      <ul>
        <li>Test your camera and mic before the party starts</li>
        <li>Use headphones to avoid echo</li>
        <li>Close other apps to prevent lag</li>
        <li>Have a backup platform ready (if Zoom fails, switch to Discord)</li>
        <li>Designate a host to manage the call and game</li>
      </ul>

      <h2 id="best-games">Best Games for Video Chat</h2>

      <h3>1. Never Have I Ever</h3>
      <p>
        The perfect virtual game - no equipment needed, everyone plays simultaneously.
      </p>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <h4 className="font-bold text-white mb-2">How to Play Virtually</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Everyone holds up 5 fingers on camera</li>
          <li>• Take turns saying &quot;Never have I ever...&quot;</li>
          <li>• Put a finger down AND drink if you&apos;ve done it</li>
          <li>• First to lose all fingers = loser drinks extra</li>
        </ul>
        <Link href="/guides/never-have-i-ever-questions" className="text-neon-pink text-sm hover:underline">
          Get 200+ questions →
        </Link>
      </div>

      <h3>2. Most Likely To</h3>
      <p>
        Another equipment-free classic that works perfectly over video.
      </p>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <h4 className="font-bold text-white mb-2">How to Play Virtually</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• One person reads a &quot;Most likely to...&quot; prompt</li>
          <li>• On count of 3, everyone points at who they think fits</li>
          <li>• Person with most votes drinks that many sips</li>
          <li>• Use screen sharing to show prompts</li>
        </ul>
        <Link href="/guides/most-likely-to-questions" className="text-neon-pink text-sm hover:underline">
          Get 300+ prompts →
        </Link>
      </div>

      <h3>3. Kings Cup (Virtual Version)</h3>
      <p>
        Use a virtual card deck or app for this classic.
      </p>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <h4 className="font-bold text-white mb-2">How to Play Virtually</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Host shares screen with virtual deck</li>
          <li>• Take turns drawing cards</li>
          <li>• Follow the rules for each card</li>
          <li>• &quot;King&apos;s Cup&quot; is an extra large drink</li>
        </ul>
        <Link href="/guides/kings-cup-rules" className="text-neon-pink text-sm hover:underline">
          Full rules + card meanings →
        </Link>
      </div>

      <h3>4. Truth or Drink</h3>
      <p>
        Truth or Dare meets drinking game. Perfect for video chat.
      </p>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <h4 className="font-bold text-white mb-2">How to Play</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Ask someone a truth question</li>
          <li>• They either answer honestly or drink</li>
          <li>• The more personal the question, the bigger the drink</li>
          <li>• Everyone can vote if they think someone is lying</li>
        </ul>
      </div>

      <h3>5. Trivia Drinking Game</h3>
      <p>
        Use any trivia source - apps, websites, or make your own.
      </p>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <h4 className="font-bold text-white mb-2">How to Play</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Host asks trivia questions (use Kahoot, Jackbox, or custom)</li>
          <li>• Wrong answers = drink</li>
          <li>• Last place after each round = extra drink</li>
          <li>• Categories can match the group (sports, pop culture, etc.)</li>
        </ul>
      </div>

      <h3>6. Movie/TV Show Drinking Game</h3>
      <p>
        Watch together using a streaming party feature.
      </p>
      <div className="bg-dark-800 p-4 rounded-lg my-4">
        <h4 className="font-bold text-white mb-2">How to Play</h4>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Use Teleparty, Disney+ GroupWatch, or screen share</li>
          <li>• Set drinking rules before starting</li>
          <li>• Drink when triggers happen on screen</li>
          <li>• Works great for rewatching favorites</li>
        </ul>
        <Link href="/guides/movie-drinking-games" className="text-neon-pink text-sm hover:underline">
          Movie drinking game rules →
        </Link>
      </div>

      <h2 id="platforms">Platform-Specific Tips</h2>

      <h3>Zoom</h3>
      <ul>
        <li><strong>Gallery view:</strong> See everyone at once</li>
        <li><strong>Screen share:</strong> Perfect for game boards and prompts</li>
        <li><strong>Breakout rooms:</strong> Team games with private discussions</li>
        <li><strong>Virtual backgrounds:</strong> Add party atmosphere</li>
        <li><strong>Time limit:</strong> Free version limits to 40 min, get Pro or restart</li>
      </ul>

      <h3>Discord</h3>
      <ul>
        <li><strong>No time limits:</strong> Party as long as you want</li>
        <li><strong>Screen share with audio:</strong> Great for watch parties</li>
        <li><strong>Game bots:</strong> Many drinking game bots available</li>
        <li><strong>Text channels:</strong> Side conversations during games</li>
        <li><strong>Best for:</strong> Gaming-focused groups</li>
      </ul>

      <h3>FaceTime</h3>
      <ul>
        <li><strong>Simple:</strong> Just works with Apple users</li>
        <li><strong>SharePlay:</strong> Watch movies together</li>
        <li><strong>Smaller groups:</strong> Best for intimate games</li>
        <li><strong>Limitation:</strong> Apple devices only</li>
      </ul>

      <h3>Google Meet</h3>
      <ul>
        <li><strong>Free:</strong> No time limits for personal use</li>
        <li><strong>Browser-based:</strong> No app needed</li>
        <li><strong>Screen share:</strong> Works well</li>
        <li><strong>Tiles view:</strong> See everyone clearly</li>
      </ul>

      <h2 id="tools">Online Tools & Apps</h2>

      <h3>Virtual Card Decks</h3>
      <ul>
        <li><a href="https://playingcards.io" className="text-neon-pink hover:underline" target="_blank" rel="noopener noreferrer">PlayingCards.io</a> - Customizable virtual deck</li>
        <li>Random card generator apps</li>
        <li>Our site&apos;s game pages (host shares screen)</li>
      </ul>

      <h3>Party Game Platforms</h3>
      <ul>
        <li><strong>Jackbox Games:</strong> Host buys, everyone plays on phones</li>
        <li><strong>Kahoot:</strong> Trivia competitions</li>
        <li><strong>Psych:</strong> Great for &quot;fake answer&quot; games</li>
        <li><strong>Houseparty:</strong> Built-in party games</li>
      </ul>

      <h3>Watch Party Tools</h3>
      <ul>
        <li><strong>Teleparty:</strong> Netflix, Disney+, HBO Max sync</li>
        <li><strong>Disney+ GroupWatch:</strong> Built-in sync</li>
        <li><strong>Amazon Watch Party:</strong> Prime Video sync</li>
        <li><strong>Discord Screen Share:</strong> Works with anything</li>
      </ul>

      <h2 id="hosting">Hosting Tips for Success</h2>

      <h3>Before the Party</h3>
      <ul>
        <li>Send a calendar invite with the link</li>
        <li>Share the games you&apos;ll play so people can prepare</li>
        <li>Suggest drink types (beer, wine, cocktails) so it&apos;s fair</li>
        <li>Set a clear start time (and stick to it)</li>
        <li>Have backup games ready</li>
      </ul>

      <h3>During the Party</h3>
      <ul>
        <li>One host manages the game, another handles tech</li>
        <li>Take breaks between games</li>
        <li>Mute people who have background noise</li>
        <li>Keep energy up with music between games</li>
        <li>Rotate who picks the next game</li>
      </ul>

      <h3>Etiquette</h3>
      <ul>
        <li>Camera on is more fun, but don&apos;t force it</li>
        <li>Mute when not speaking in large groups</li>
        <li>Don&apos;t pressure people to drink more than comfortable</li>
        <li>Have a &quot;safe word&quot; for when someone needs a break</li>
        <li>Respect different time zones</li>
      </ul>

      <div className="bg-yellow-900/30 p-6 rounded-xl border border-yellow-600/50 my-8">
        <h3 className="text-lg font-bold text-yellow-400 mb-2">Safety Reminder</h3>
        <p className="text-gray-300">
          Virtual drinking is still drinking! Pace yourself, have water nearby, and remember
          you still have to be safe at home. The advantage of virtual parties is you&apos;re
          already home - use it wisely.
        </p>
      </div>

      <h2>Sample Virtual Party Schedule</h2>
      <div className="bg-dark-800 p-6 rounded-xl border border-dark-600 my-6">
        <ul className="space-y-3 text-gray-300">
          <li><strong>8:00 PM:</strong> Everyone joins, casual chat</li>
          <li><strong>8:15 PM:</strong> Icebreaker game (Never Have I Ever)</li>
          <li><strong>8:45 PM:</strong> Main game (Kings Cup or custom)</li>
          <li><strong>9:30 PM:</strong> Break - refill drinks, bathroom</li>
          <li><strong>9:45 PM:</strong> Trivia or Most Likely To</li>
          <li><strong>10:15 PM:</strong> Watch party or wind down games</li>
          <li><strong>11:00 PM:</strong> Optional overtime or end</li>
        </ul>
      </div>

      <div className="mt-8 p-6 bg-dark-800 rounded-xl border border-dark-600">
        <h3 className="text-lg font-bold text-white mb-3">Ready to Host?</h3>
        <p className="text-gray-400 mb-4">
          Browse our game rules for ideas on what to play.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/guides/virtual-drinking-games"
            className="inline-block px-6 py-3 bg-neon-pink text-white rounded-lg hover:bg-neon-pink/80 transition-colors"
          >
            More Virtual Games →
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
