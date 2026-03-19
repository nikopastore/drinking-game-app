import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Drinking Games for Couples (2024) | Date Night Games",
  description: "Romantic drinking games for couples! From deep conversations to flirty challenges. Perfect for date nights, anniversaries, and cozy nights in. Includes spicy games and getting-to-know-you options.",
  keywords: ["drinking games for couples", "couple drinking games", "date night drinking games", "romantic drinking games", "2 player drinking games", "couples game night", "flirty drinking games"],
  openGraph: { title: "15 Best Drinking Games for Couples", description: "Make date night unforgettable with these couple games.", type: "article", url: "https://sipwiki.app/guides/drinking-games-for-couples" },
  alternates: { canonical: "https://sipwiki.app/guides/drinking-games-for-couples" },
};

export default function DrinkingGamesForCouplesPage() {
  return (
    <GuideLayout title="15 Best Drinking Games for Couples" description="Skip the crowded bar. The best couple's drinking games create conversation, laughter, and connection - whether you've been together 3 weeks or 30 years." breadcrumb="Couples Drinking Games" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Deep questions" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Learn about each other" }]}>
      <h2>Why Drinking Games Work for Couples</h2>
      <p>Couples drinking games aren&apos;t just about drinking - they&apos;re tools for connection. After the honeymoon phase, conversations can get routine. These games break patterns and create new dynamics:</p>
      <ul>
        <li><strong>New couples</strong> - Accelerate getting to know each other</li>
        <li><strong>Long-term couples</strong> - Discover things you never knew</li>
        <li><strong>Everyone</strong> - Add playful competition to date night</li>
      </ul>

      <h2>Conversation Starters</h2>
      <p>These games get you talking about things you don&apos;t usually discuss:</p>

      <h3>Truth or Drink</h3>
      <p>The gold standard for couples. Take turns asking questions - answer honestly or take a drink. The &quot;drink instead&quot; option removes pressure while the questions create intimacy.</p>
      <p><strong>Sample questions:</strong></p>
      <ul>
        <li>What were you most nervous about on our first date?</li>
        <li>What habit of mine secretly annoys you?</li>
        <li>What&apos;s something you want to try together?</li>
        <li>When did you know you were falling for me?</li>
      </ul>
      <p><Link href="/games/truth-or-drink" className="text-neon-pink">Play Truth or Drink →</Link></p>

      <h3>Never Have I Ever (Couples Edition)</h3>
      <p>You think you know your partner&apos;s past? This game will surprise you. Keep it fun by mixing innocent questions with spicier ones.</p>
      <p><strong>Couples-specific prompts:</strong></p>
      <ul>
        <li>Never have I ever stalked an ex on social media</li>
        <li>Never have I ever lied to avoid plans with your family</li>
        <li>Never have I ever had a dream about someone else</li>
      </ul>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink">Play Never Have I Ever →</Link></p>

      <h3>Two Truths and a Lie</h3>
      <p>Each person says three statements - two true, one false. Partner guesses the lie. Wrong guess = drink. Great for learning new things even after years together.</p>

      <h2>Competitive Games</h2>
      <p>For couples who love a little rivalry:</p>

      <h3>Higher or Lower</h3>
      <p>Flip a card, guess if the next will be higher or lower. Wrong = drink. Simple but surprisingly tense when you&apos;re on a streak.</p>
      <p><strong>Couples twist:</strong> Winner of each round chooses a dare for the loser (keep it fun).</p>

      <h3>Speed Facts</h3>
      <p>30-second timer. Rapid-fire questions about your relationship. First to hesitate or get one wrong drinks.</p>
      <ul>
        <li>What&apos;s my middle name?</li>
        <li>Where was our first kiss?</li>
        <li>What&apos;s my go-to coffee order?</li>
        <li>What&apos;s my mom&apos;s birthday?</li>
      </ul>

      <h3>Card War</h3>
      <p>Both flip a card. Lower card drinks. Ties = both drink. Simple, no thinking required, good for winding down.</p>

      <h2>Flirty & Spicy Games (21+)</h2>
      <p>For when the mood is right:</p>

      <h3>Strip or Drink</h3>
      <p>Each round, the loser chooses: remove an item OR take a drink. The game naturally escalates as options decrease.</p>

      <h3>Dare Pong (Couples Edition)</h3>
      <p>Mini beer pong on a coffee table. Each cup contains a dare instead of (or in addition to) a drink. Write dares together beforehand so both are comfortable.</p>

      <h3>Body Shot Roulette</h3>
      <p>Spin a bottle or roll dice to determine where the next shot is taken from. Not for every couple, but memorable when it works.</p>

      <h2>Low-Key Options</h2>
      <p>For chill nights that aren&apos;t about intensity:</p>

      <h3>Movie Drinking Game</h3>
      <p>Pick a rom-com and set rules together:</p>
      <ul>
        <li>Someone says &quot;love&quot; - both drink</li>
        <li>Rain kiss scene - finish drinks</li>
        <li>Airport chase - both drink</li>
        <li>Best friend gives advice - drink</li>
      </ul>
      <p>Works with any genre - make rules for action movies, horror, whatever you&apos;re watching.</p>

      <h3>Would You Rather</h3>
      <p>Hypothetical questions, but if you disagree on what you&apos;d choose, you both drink. Leads to hilarious debates.</p>

      <h3>The Alphabet Game</h3>
      <p>Pick a category (movies, places you&apos;d travel, things you love about each other). Take turns going A-Z. Hesitate or repeat = drink.</p>

      <h2>Drinking Levels</h2>
      <p>Adjust based on your night:</p>
      <ul>
        <li><strong>Light (wine/beer)</strong> - Conversation games, movie games</li>
        <li><strong>Medium</strong> - Competitive games, Truth or Drink</li>
        <li><strong>Heavy</strong> - Spicy games, rapid-fire challenges</li>
      </ul>

      <h2>Tips for Couples Games</h2>
      <ul>
        <li><strong>Set boundaries first</strong> - Especially for spicy games, know what&apos;s off-limits</li>
        <li><strong>Skip is always okay</strong> - No one should feel forced</li>
        <li><strong>Keep it playful</strong> - Winning isn&apos;t the point; connection is</li>
        <li><strong>Have snacks ready</strong> - Drinking on an empty stomach = bad date</li>
        <li><strong>New couples:</strong> Start with lighter games and escalate based on comfort</li>
        <li><strong>Long-term couples:</strong> Dig into the deep questions - you might be surprised</li>
      </ul>

      <h2>Perfect Pairings</h2>
      <ul>
        <li><strong>First few dates:</strong> Two Truths + Never Have I Ever</li>
        <li><strong>Anniversary:</strong> Truth or Drink + Movie Game</li>
        <li><strong>Staying in on a Friday:</strong> Card games + snacks</li>
        <li><strong>Spicy night:</strong> Strip or Drink + Dare Pong</li>
      </ul>

      <p>Want more? Browse our <Link href="/games/two-player" className="text-neon-pink hover:underline">complete two-player games collection</Link>.</p>
    </GuideLayout>
  );
}
