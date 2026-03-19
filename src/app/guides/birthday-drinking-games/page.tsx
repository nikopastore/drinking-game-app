import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Best Birthday Drinking Games | Party Games for Any Age",
  description: "Make any birthday party epic with these drinking games! Games that celebrate the birthday person and keep all guests entertained throughout the night.",
  keywords: ["birthday drinking games", "birthday party games adults", "drinking games for birthday", "birthday party drinking games", "adult birthday games"],
  openGraph: { title: "15 Best Birthday Drinking Games", description: "Celebrate in style!", type: "article", url: "https://sipwiki.app/guides/birthday-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/birthday-drinking-games" },
};

export default function BirthdayDrinkingGamesPage() {
  return (
    <GuideLayout
      title="Best Birthday Drinking Games"
      description="It's their special day - make it unforgettable! These games put the birthday person in the spotlight while keeping everyone entertained and drinking."
      breadcrumb="Birthday Games"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Crown them king" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Roast them lovingly" },
        { name: "Power Hour", slug: "power-hour", description: "Endurance test" },
      ]}
    >
      <QuickAnswer
        question="What are the best birthday drinking games?"
        answer="The best birthday drinking games put the birthday person in the spotlight while keeping guests entertained. Top picks include Birthday Kings Cup (with special birthday rules), Most Likely To (birthday roast edition), Birthday Scavenger Hunt, and Memory Lane (story-sharing game). Mix games that focus on the birthday person with group games everyone can play."
        tips={[
          "Balance spotlight games with group games",
          "Pace the birthday person throughout the night",
          "Have birthday-themed rules ready",
          "Take photos early - memories get fuzzy later"
        ]}
        variant="primary"
      />

      <h2>Games Starring the Birthday Person</h2>

      <h3>1. Birthday Rules</h3>
      <p>The birthday person becomes the party&apos;s ruling monarch. Throughout the night, they can create and enforce drinking rules that everyone must follow.</p>
      <ul>
        <li><strong>Equipment:</strong> Crown or sash (optional but fun)</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>How it works:</strong></li>
        <li>Birthday person announces rules whenever they want</li>
        <li>Breaking a rule = drink</li>
        <li>Limit to 5 active rules at a time</li>
        <li><strong>Sample rules:</strong> No saying &quot;drink,&quot; no pointing, must call birthday person &quot;Your Majesty&quot;</li>
      </ul>

      <h3>2. Age = Drinks Given</h3>
      <p>The birthday person gets to distribute drinks equal to their new age throughout the night. They can give them all at once or spread them out.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>How it works:</strong></li>
        <li>Turning 30? Give out 30 drinks throughout the night</li>
        <li>Can target specific people or spread it around</li>
        <li>Track with a countdown (physical or mental)</li>
        <li><strong>Variation:</strong> Drinks must come with a toast or compliment</li>
      </ul>

      <h3>3. Birthday Trivia</h3>
      <p>Test how well guests know the birthday person. Questions about their life, preferences, embarrassing stories. Wrong answers = drinks.</p>
      <ul>
        <li><strong>Equipment:</strong> Pre-written questions</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>How to prepare:</strong></li>
        <li>Ask friends/family for obscure facts beforehand</li>
        <li>Include childhood stories, college memories, inside jokes</li>
        <li>Mix easy and hard questions</li>
        <li><strong>Sample questions:</strong></li>
        <li>What was [name]&apos;s first job?</li>
        <li>What&apos;s [name]&apos;s most embarrassing moment?</li>
        <li>What&apos;s [name]&apos;s go-to karaoke song?</li>
      </ul>

      <h3>4. Memory Lane</h3>
      <p>Friends share stories and memories about the birthday person. True stories = birthday person drinks. Made up (and caught) = storyteller drinks.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>How it works:</strong></li>
        <li>Go around sharing &quot;Remember when [name]...&quot; stories</li>
        <li>Birthday person confirms if true</li>
        <li>Best stories get applause, worst get groans</li>
        <li><strong>Best for:</strong> Close friend groups with shared history</li>
      </ul>

      <h3>5. Birthday Scavenger Hunt</h3>
      <p>Create a list of challenges for the birthday person to complete throughout the night. Each completed challenge = everyone else takes a drink.</p>
      <ul>
        <li><strong>Equipment:</strong> Pre-made challenge list</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>Sample challenges:</strong></li>
        <li>Get someone to buy you a drink</li>
        <li>Take a photo with a stranger</li>
        <li>Get someone to sing happy birthday</li>
        <li>Dance on a table (or elevated surface)</li>
        <li>Make someone blush with a compliment</li>
      </ul>

      <h2>Group Games with Birthday Twists</h2>

      <h3>6. Birthday Kings Cup</h3>
      <p>Classic Kings Cup with birthday-themed modifications. The birthday person gets special powers and the rules favor celebrating them.</p>
      <ul>
        <li><strong>Equipment:</strong> Deck of cards, King&apos;s cup</li>
        <li><strong>Players:</strong> 4-10</li>
        <li><strong>Birthday rule changes:</strong></li>
        <li>Queen = Birthday person makes a rule</li>
        <li>Jack = Everyone says something nice about birthday person or drinks</li>
        <li>10 = Categories about the birthday person (favorite things, embarrassing moments)</li>
        <li>King = Poured into birthday person&apos;s final cup (if they want it)</li>
      </ul>
      <p><Link href="/games/kings-cup" className="text-neon-pink hover:underline">Full Kings Cup Rules</Link></p>

      <h3>7. Most Likely To: Birthday Roast</h3>
      <p>Classic Most Likely To but all questions relate to the birthday person somehow. Light roasting encouraged.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-15</li>
        <li><strong>Sample questions:</strong></li>
        <li>&quot;Who&apos;s most likely to have embarrassed [name] in public?&quot;</li>
        <li>&quot;Who&apos;s most likely to know [name]&apos;s biggest secret?&quot;</li>
        <li>&quot;Who&apos;s most likely to still be friends with [name] in 20 years?&quot;</li>
        <li>&quot;Who&apos;s most likely to get [name] in trouble tonight?&quot;</li>
      </ul>
      <p><Link href="/games/most-likely-to" className="text-neon-pink hover:underline">Full Most Likely To Rules</Link></p>

      <h3>8. Never Have I Ever: Birthday Edition</h3>
      <p>Statements specifically crafted to target the birthday person. Use insider knowledge to make them drink.</p>
      <ul>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Players:</strong> 4-15</li>
        <li><strong>How it works:</strong></li>
        <li>Guests prepare statements they know apply to birthday person</li>
        <li>Mix embarrassing with complimentary</li>
        <li>&quot;Never have I ever been voted most likely to...&quot;</li>
        <li><strong>Pro tip:</strong> Coordinate with other guests beforehand for maximum impact</li>
      </ul>
      <p><Link href="/games/never-have-i-ever" className="text-neon-pink hover:underline">Full Never Have I Ever Rules</Link></p>

      <h3>9. Birthday Flip Cup Tournament</h3>
      <p>Standard Flip Cup but birthday person is the permanent anchor for both teams. They&apos;re always involved without drinking too much more than others.</p>
      <ul>
        <li><strong>Equipment:</strong> Cups, table</li>
        <li><strong>Players:</strong> 8+</li>
        <li><strong>Birthday rules:</strong></li>
        <li>Birthday person anchors every round</li>
        <li>If their team wins, they take a victory sip</li>
        <li>If their team loses, losing team drinks extra</li>
      </ul>
      <p><Link href="/games/flip-cup" className="text-neon-pink hover:underline">Full Flip Cup Rules</Link></p>

      <h3>10. Birthday Power Hour</h3>
      <p>Standard Power Hour but with a curated playlist of songs from significant years in the birthday person&apos;s life.</p>
      <ul>
        <li><strong>Equipment:</strong> Timer, shot glasses, curated playlist</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>Playlist ideas:</strong></li>
        <li>Songs from their birth year</li>
        <li>Songs from high school/college years</li>
        <li>Songs from major life events</li>
        <li>Their personal favorites</li>
      </ul>
      <p><Link href="/games/power-hour" className="text-neon-pink hover:underline">Full Power Hour Rules</Link></p>

      <h2>Milestone Birthday Games</h2>

      <h3>11. Decade Shots (30th, 40th, etc.)</h3>
      <p>For milestone birthdays, take shots representing each decade. Share a memory or toast for each one.</p>
      <ul>
        <li><strong>Equipment:</strong> Shot glasses</li>
        <li><strong>Players:</strong> Birthday person + closest friends</li>
        <li><strong>How it works:</strong></li>
        <li>30th birthday = 3 shots representing 0-10, 10-20, 20-30</li>
        <li>Toast or share memory from each decade before the shot</li>
        <li>Spread throughout the night, not all at once!</li>
      </ul>

      <h3>12. Bucket List Bingo</h3>
      <p>Create bingo cards with things the birthday person wants to do. Mark off as they complete them throughout the night or year ahead.</p>
      <ul>
        <li><strong>Equipment:</strong> Pre-made bingo cards</li>
        <li><strong>Players:</strong> Any</li>
        <li><strong>Sample squares:</strong></li>
        <li>Dance with a stranger</li>
        <li>Make a heartfelt speech</li>
        <li>Try a drink they&apos;ve never had</li>
        <li>Get a surprise gift</li>
      </ul>

      <h2>Party Games Everyone Can Play</h2>

      <h3>13. Drink Whenever...</h3>
      <p>Create a list of &quot;drink whenever&quot; rules based on the birthday person&apos;s predictable behaviors.</p>
      <ul>
        <li><strong>Equipment:</strong> Poster with rules visible</li>
        <li><strong>Players:</strong> All party guests</li>
        <li><strong>Sample rules:</strong></li>
        <li>Drink when [name] takes a selfie</li>
        <li>Drink when [name] says their catchphrase</li>
        <li>Drink when [name] hugs someone</li>
        <li>Drink when [name] checks their phone</li>
        <li>Drink when [name] talks about getting old</li>
      </ul>

      <h3>14. This or That: Birthday Edition</h3>
      <p>Present the birthday person with two options. Guests predict their choice. Wrong predictions drink.</p>
      <ul>
        <li><strong>Equipment:</strong> Pre-written questions</li>
        <li><strong>Players:</strong> 4+</li>
        <li><strong>Sample questions:</strong></li>
        <li>Beach vacation or mountain cabin?</li>
        <li>Early bird or night owl?</li>
        <li>Sweet or savory?</li>
        <li>Cats or dogs?</li>
      </ul>

      <h3>15. Birthday Truth or Drink</h3>
      <p>Guests write truth questions for the birthday person. They draw and must answer honestly or drink.</p>
      <ul>
        <li><strong>Equipment:</strong> Paper slips, container</li>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>How it works:</strong></li>
        <li>Everyone writes 2-3 questions for the birthday person</li>
        <li>Birthday person draws and answers or drinks</li>
        <li>Guests whose questions aren&apos;t picked also drink</li>
      </ul>
      <p><Link href="/games/truth-or-drink" className="text-neon-pink hover:underline">Full Truth or Drink Rules</Link></p>

      <h2>Birthday Party Timeline</h2>

      <h3>House Party</h3>
      <ul>
        <li><strong>7:00 PM:</strong> Guests arrive, casual drinks and mingling</li>
        <li><strong>8:00 PM:</strong> Dinner or food service</li>
        <li><strong>9:00 PM:</strong> First games begin (Kings Cup, Most Likely To)</li>
        <li><strong>10:00 PM:</strong> Birthday cake, toasts, presents</li>
        <li><strong>11:00 PM:</strong> Higher energy games (Flip Cup, dancing)</li>
        <li><strong>12:00 AM:</strong> Midnight toast if milestone birthday</li>
        <li><strong>12:30 AM:</strong> Wind down, people start leaving</li>
      </ul>

      <h3>Bar/Restaurant Party</h3>
      <ul>
        <li><strong>7:00 PM:</strong> Reservation time, order drinks</li>
        <li><strong>7:30 PM:</strong> Dinner</li>
        <li><strong>9:00 PM:</strong> Bar games begin (conversation games)</li>
        <li><strong>10:00 PM:</strong> Cake/dessert if arranged</li>
        <li><strong>10:30 PM:</strong> More games, pool, darts if available</li>
        <li><strong>12:00 AM:</strong> Wrap up, arrange rides home</li>
      </ul>

      <h2>Birthday Party Tips</h2>

      <h3>Preparing Games</h3>
      <ul>
        <li>Gather stories/facts from family for Birthday Trivia</li>
        <li>Create custom Kings Cup rules in advance</li>
        <li>Prepare scavenger hunt challenges beforehand</li>
        <li>Make &quot;Drink Whenever&quot; poster visible to everyone</li>
      </ul>

      <h3>Pacing the Birthday Person</h3>
      <ul>
        <li>Designate a &quot;guardian&quot; to watch their intake</li>
        <li>Mix in water and food throughout</li>
        <li>Spotlight games should be spread out, not continuous</li>
        <li>They don&apos;t have to drink every time - substitutions allowed</li>
      </ul>

      <h3>Including Everyone</h3>
      <ul>
        <li>Mix birthday-focused games with general group games</li>
        <li>Make sure non-drinkers can participate (water/soda)</li>
        <li>Rotate games so different personalities shine</li>
        <li>Have backup games if some aren&apos;t working</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/21st-birthday-drinking-games" className="text-neon-pink hover:underline">21st Birthday Drinking Games</Link></li>
        <li><Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Drinking Games for Parties</Link></li>
        <li><Link href="/guides/classic-drinking-games" className="text-neon-pink hover:underline">Classic Drinking Games</Link></li>
        <li><Link href="/guides/large-group-drinking-games" className="text-neon-pink hover:underline">Large Group Drinking Games</Link></li>
      </ul>
    </GuideLayout>
  );
}
