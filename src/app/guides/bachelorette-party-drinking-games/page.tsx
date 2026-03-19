import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Bachelorette Party Drinking Games (2024) | Hen Party Games",
  description: "Fun drinking games for bachelorette parties! Games to celebrate the bride, bond the squad, and create unforgettable memories. Complete guide with bride-focused activities and group games.",
  keywords: ["bachelorette party drinking games", "hen party games", "bachelorette games", "bride drinking games", "girls night drinking games", "bridal shower games"],
  openGraph: { title: "Bachelorette Party Drinking Games", description: "Celebrate the bride-to-be!", type: "article", url: "https://sipwiki.app/guides/bachelorette-party-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/bachelorette-party-drinking-games" },
};

export default function BachelorettePartyPage() {
  return (
    <GuideLayout title="Best Bachelorette Party Drinking Games" description="The bride deserves an epic celebration! These games put her in the spotlight, bring the squad together, and create the kind of memories that last a lifetime (or get sworn to brunch secrecy)." breadcrumb="Bachelorette Party Games" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Spill the tea" }, { name: "Most Likely To", slug: "most-likely-to", description: "Roast the bride" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Confessions" }]}>
      <h2>The Bachelorette Vibe</h2>
      <p>Bachelorette games should:</p>
      <ul>
        <li><strong>Celebrate the bride</strong> - She&apos;s the star of the show</li>
        <li><strong>Connect different friend circles</strong> - Bridesmaids, college friends, work friends, family</li>
        <li><strong>Balance spicy and sweet</strong> - Know your crowd&apos;s comfort level</li>
        <li><strong>Create shareable moments</strong> - Instagram vs. &quot;vault&quot; content</li>
        <li><strong>Keep energy flowing</strong> - Games should enhance the party, not dominate it</li>
      </ul>

      <h2>Bride-Focused Games</h2>

      <h3>He Said She Said</h3>
      <p>The maid of honor collects quotes from the groom beforehand. Read statements, and guess: did the groom say this or the bride? Wrong answers drink.</p>
      <p><strong>Sample questions to ask the groom:</strong></p>
      <ul>
        <li>What was your first impression of [bride]?</li>
        <li>What&apos;s [bride]&apos;s most annoying habit?</li>
        <li>Where do you see yourselves in 10 years?</li>
        <li>What&apos;s something [bride] does that always makes you laugh?</li>
        <li>What&apos;s your favorite memory together?</li>
      </ul>
      <p><strong>Pro tip:</strong> Get video answers from the groom to play at the party.</p>

      <h3>Bride Trivia</h3>
      <p>How well does the squad know the bride? Multiple choice or open-ended questions about her life, relationship, and preferences.</p>
      <p><strong>Example questions:</strong></p>
      <ul>
        <li>What was her first job?</li>
        <li>What&apos;s her go-to karaoke song?</li>
        <li>Where was the proposal?</li>
        <li>What&apos;s her biggest fear?</li>
        <li>What did she want to be when she grew up?</li>
      </ul>
      <p>Wrong answers = drink. Most correct = gets to assign drinks.</p>

      <h3>Truth or Drink: Bride Edition</h3>
      <p>Every question is about the bride or directed at her. She can answer honestly or drink to skip.</p>
      <p><strong>Sample questions:</strong></p>
      <ul>
        <li>What&apos;s the most embarrassing thing that happened on a date with [groom]?</li>
        <li>What&apos;s one thing about [groom] that drove you crazy at first?</li>
        <li>Have you ever stalked an ex on social media?</li>
        <li>What&apos;s your hottest celebrity crush?</li>
      </ul>
      <p><Link href="/games/truth-or-drink" className="text-neon-pink">Full Truth or Drink rules →</Link></p>

      <h3>Drink If (Bride Edition)</h3>
      <p>Read statements about the bride. If they apply to you, drink.</p>
      <ul>
        <li>Drink if you&apos;ve known the bride for over 5 years</li>
        <li>Drink if you&apos;ve seen her ugly cry</li>
        <li>Drink if you&apos;ve heard her rant about [groom]</li>
        <li>Drink if she&apos;s been there for you during a breakup</li>
        <li>Drink if you&apos;ve traveled together</li>
      </ul>

      <h2>Squad Games</h2>
      <p>Games that bring everyone together:</p>

      <h3>Never Have I Ever</h3>
      <p>The classic confession game. Bachelorette parties tend to get spicy. Know your audience.</p>
      <p><strong>Bachelorette-themed prompts:</strong></p>
      <ul>
        <li>Never have I ever dated someone my friends hated</li>
        <li>Never have I ever been in love with two people at once</li>
        <li>Never have I ever said &quot;I love you&quot; first</li>
        <li>Never have I ever been on a dating app</li>
      </ul>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink">Full Never Have I Ever rules →</Link></p>

      <h3>Most Likely To</h3>
      <p>Point and vote. Perfect for mixed groups - even people who just met can participate.</p>
      <p><strong>Bachelorette prompts:</strong></p>
      <ul>
        <li>Who&apos;s most likely to cry at the wedding?</li>
        <li>Who&apos;s most likely to catch the bouquet?</li>
        <li>Who&apos;s most likely to give a speech that&apos;s too long?</li>
        <li>Who&apos;s most likely to get married next?</li>
      </ul>
      <p><Link href="/games/most-likely-to" className="text-neon-pink">Full Most Likely To rules →</Link></p>

      <h3>Prosecco Pong</h3>
      <p>Beer pong but make it bougie. Use champagne or rosé instead of beer. Same rules, fancier vibes.</p>
      <p><Link href="/games/beer-pong" className="text-neon-pink">Full Beer Pong rules →</Link></p>

      <h3>Kings Cup</h3>
      <p>Classic card game that works for any group size. Customize rules to include bride-specific actions.</p>
      <p><strong>Bride rule ideas:</strong></p>
      <ul>
        <li>Queens = &quot;Questions for the Bride&quot;</li>
        <li>Kings = Bride makes a rule</li>
        <li>Jacks = Everyone toasts the bride</li>
      </ul>
      <p><Link href="/games/kings-cup" className="text-neon-pink">Full Kings Cup rules →</Link></p>

      <h2>Active & Moving Games</h2>

      <h3>Scavenger Hunt</h3>
      <p>Create a list of tasks to complete during the night out:</p>
      <ul>
        <li>Get a stranger to buy the bride a drink</li>
        <li>Take a photo with someone who shares the groom&apos;s name</li>
        <li>Get 5 people to sign the bride&apos;s sash</li>
        <li>Find someone wearing white (besides the bride)</li>
        <li>Get a bartender to write a marriage tip on a napkin</li>
        <li>Collect a business card from a stranger</li>
      </ul>
      <p>Incomplete tasks = penalty drinks at the end.</p>

      <h3>Photo Challenge</h3>
      <p>Similar to scavenger hunt but all photo-based. Best photos win prizes (or losers buy drinks).</p>

      <h2>Wine Night Games</h2>
      <p>For lower-key bachelorettes:</p>
      <ul>
        <li><strong>Wine rating</strong> - Blind taste test, rate wines, wrong guesses drink</li>
        <li><strong><Link href="/games/truth-or-drink" className="text-neon-pink">Truth or Drink</Link></strong> - Intimate conversation starter</li>
        <li><strong>The Newlywed Game (Bride Edition)</strong> - Test how well the bride knows the groom</li>
        <li><strong>Movie drinking game</strong> - Watch a rom-com with custom rules</li>
      </ul>

      <h2>Maid of Honor Prep</h2>
      <ul>
        <li>Coordinate with groom for He Said She Said answers</li>
        <li>Prepare trivia questions in advance</li>
        <li>Know the group&apos;s vibe (spicy vs. sweet)</li>
        <li>Have games ready for different energy levels</li>
        <li>Mix Instagram-worthy moments with vault-worthy ones</li>
        <li>Keep the bride&apos;s drink count loosely tracked</li>
      </ul>

      <h2>Mixing Friend Groups</h2>
      <p>Bachelorettes often combine bridesmaids, childhood friends, work friends, and family:</p>
      <ul>
        <li>Start with Bride Trivia - shared interest in the bride</li>
        <li><Link href="/games/never-have-i-ever" className="text-neon-pink">Never Have I Ever</Link> reveals common ground</li>
        <li>Team games should intentionally mix groups</li>
        <li>Include non-drinkers with mocktail versions</li>
      </ul>

      <h2>Matching the Venue</h2>
      <ul>
        <li><strong>Hotel room/Airbnb:</strong> Kings Cup, Truth or Drink, Prosecco Pong</li>
        <li><strong>Bar crawl:</strong> Scavenger Hunt, Photo Challenge, Bar Golf</li>
        <li><strong>Pool/Beach:</strong> Most Likely To, Never Have I Ever, Floatie Pong</li>
        <li><strong>Wine country:</strong> Wine tasting games, Truth or Drink</li>
        <li><strong>Brunch:</strong> Mimosa pong, light trivia</li>
      </ul>

      <p>More celebration games: <Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Party games</Link> | <Link href="/guides/girls-night-drinking-games" className="text-neon-pink hover:underline">Girls night games</Link></p>
    </GuideLayout>
  );
}
