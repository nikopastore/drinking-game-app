import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { QuickAnswer } from "@/components/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "21st Birthday Drinking Games | Legal Drinking Age Party Ideas",
  description: "Best drinking games for 21st birthday parties! Games that put the birthday star in the spotlight while celebrating their first legal drinks. Safe, fun, memorable.",
  keywords: ["21st birthday drinking games", "21st birthday party games", "turning 21 drinking games", "21 birthday games", "legal drinking birthday", "21st birthday ideas"],
  openGraph: { title: "21st Birthday Drinking Games", description: "Finally legal! Celebrate the big 2-1!", type: "article", url: "https://sipwiki.app/guides/21st-birthday-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/21st-birthday-drinking-games" },
};

export default function TwentyFirstBirthdayGamesPage() {
  return (
    <GuideLayout
      title="21st Birthday Drinking Games"
      description="The big 2-1! Finally legal to drink - celebrate with games that put the birthday star in the spotlight while keeping them alive for the rest of the night."
      breadcrumb="21st Birthday"
      relatedGames={[
        { name: "Kings Cup", slug: "kings-cup", description: "Make birthday rules" },
        { name: "Most Likely To", slug: "most-likely-to", description: "Birthday roast" },
        { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Reveal secrets" },
      ]}
    >
      <QuickAnswer
        question="What are the best 21st birthday drinking games?"
        answer="The best 21st birthday drinking games put the birthday person in the spotlight while keeping them from getting too drunk too fast. Try 21 Shots Challenge (paced throughout night), Birthday Kings Cup (special rules targeting the birthday star), Birthday Scavenger Hunt, and Most Likely To (birthday roast edition). The key is balancing fun with responsibility - it's their first legal night!"
        tips={[
          "Pace the birthday person throughout the night",
          "Designate a friend to watch out for them",
          "Eat before and during drinking",
          "Water between alcoholic drinks"
        ]}
        variant="primary"
      />

      <h2>Games Starring the Birthday Person</h2>

      <h3>1. The 21 Shots Challenge (Paced Edition)</h3>
      <p>The classic - but done responsibly. Take 21 shots over the course of the ENTIRE night (not an hour). One shot every 20-30 minutes. Use shot-sized portions of beer or wine, not liquor for every shot.</p>
      <ul>
        <li><strong>How it works:</strong> Set a timer for every 20-30 minutes for a shot</li>
        <li><strong>Safer version:</strong> Mix in water &quot;shots&quot; or half-shots</li>
        <li><strong>Tracking:</strong> Use a shot board or countdown to keep count</li>
        <li><strong>Warning:</strong> 21 actual liquor shots in a row is dangerous - don&apos;t do it</li>
      </ul>

      <h3>2. Birthday Scavenger Hunt</h3>
      <p>The birthday person gets a list of 21 challenges to complete throughout the night. Each completed challenge = a drink. Challenges range from easy to embarrassing.</p>
      <ul>
        <li><strong>Equipment:</strong> Pre-made challenge list</li>
        <li><strong>Sample challenges:</strong></li>
      </ul>
      <p>Easy challenges:</p>
      <ul>
        <li>Get a stranger to buy you a drink</li>
        <li>Take a photo with someone you just met</li>
        <li>Dance on a table (or elevated surface)</li>
        <li>Get 5 phone numbers</li>
      </ul>
      <p>Medium challenges:</p>
      <ul>
        <li>Get someone to give you their shirt</li>
        <li>Convince a stranger to serenade you</li>
        <li>Do a body shot off someone</li>
        <li>Get carried by two people</li>
      </ul>
      <p>Hard challenges:</p>
      <ul>
        <li>Get a bartender to sing happy birthday</li>
        <li>Get someone to buy a round for your table</li>
        <li>Get a stranger to do 10 push-ups for you</li>
      </ul>

      <h3>3. Memory Lane Drinking Game</h3>
      <p>Friends share embarrassing stories and memories about the birthday person. For each TRUE story, the birthday person drinks. For made-up stories (that they call out), the storyteller drinks.</p>
      <ul>
        <li><strong>Players:</strong> All friends</li>
        <li><strong>Equipment:</strong> None, just good memories</li>
        <li><strong>Best for:</strong> Close friend groups who have history</li>
        <li><strong>Pro tip:</strong> Prepare stories in advance for maximum impact</li>
      </ul>

      <h3>4. 21 Questions Drinking Edition</h3>
      <p>Everyone takes turns asking the birthday person a question. They can answer honestly (questioner drinks) or refuse to answer (birthday person drinks). 21 questions total.</p>
      <ul>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Best for:</strong> Revealing secrets and embarrassing the birthday star</li>
        <li><strong>Pro tip:</strong> Prepare spicy questions in advance</li>
      </ul>

      <h3>5. Birthday Crown Rules</h3>
      <p>The birthday person wears a crown/sash all night and becomes the &quot;ruler.&quot; Throughout the night, they can decree drinking rules that everyone must follow. Breaking a rule = drink.</p>
      <ul>
        <li><strong>Equipment:</strong> Crown, tiara, or sash</li>
        <li><strong>Sample rules:</strong> No saying &quot;drink,&quot; no pointing, must address birthday person as &quot;Your Majesty&quot;</li>
        <li><strong>Power balance:</strong> Limit to 3-5 active rules at once</li>
      </ul>

      <h2>Group Games for the Party</h2>

      <h3>6. Birthday Kings Cup</h3>
      <p>Classic Kings Cup with birthday-themed rules. The birthday person can add extra rules or modify existing ones. All Kings go to the birthday person&apos;s cup at the end.</p>
      <ul>
        <li><strong>Special birthday rules:</strong></li>
        <li>Queen = Birthday person makes a rule</li>
        <li>Jack = Everyone tells birthday person a compliment or drinks</li>
        <li>10 = Category about the birthday person (favorite foods, embarrassing moments, etc.)</li>
      </ul>
      <p><Link href="/game/kings-cup" className="text-neon-pink hover:underline">Full Kings Cup Rules</Link></p>

      <h3>7. Most Likely To: Birthday Roast</h3>
      <p>Play Most Likely To but every question is about the birthday person. &quot;Who&apos;s most likely to embarrass [name] tonight?&quot; Person pointed at most drinks.</p>
      <ul>
        <li><strong>Players:</strong> 4-15</li>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Sample questions:</strong></li>
      </ul>
      <ul>
        <li>&quot;Who&apos;s most likely to lose [birthday person] tonight?&quot;</li>
        <li>&quot;Who&apos;s most likely to have dated [birthday person]&apos;s crush?&quot;</li>
        <li>&quot;Who&apos;s most likely to make [birthday person] cry happy tears?&quot;</li>
        <li>&quot;Who&apos;s most likely to share [birthday person]&apos;s most embarrassing story?&quot;</li>
      </ul>
      <p><Link href="/game/most-likely-to" className="text-neon-pink hover:underline">Full Most Likely To Rules</Link></p>

      <h3>8. Never Have I Ever: Birthday Edition</h3>
      <p>Standard game but all statements are crafted to target the birthday person specifically. Use knowledge of their past to create statements they&apos;ll definitely drink to.</p>
      <ul>
        <li><strong>Players:</strong> 4-15</li>
        <li><strong>Equipment:</strong> None</li>
        <li><strong>Pro tip:</strong> Coordinate with friends beforehand to cover their biggest secrets</li>
        <li><strong>Balance:</strong> Mix embarrassing ones with complimentary ones</li>
      </ul>
      <p><Link href="/game/never-have-i-ever" className="text-neon-pink hover:underline">Full Never Have I Ever Rules</Link></p>

      <h3>9. Birthday Flip Cup Tournament</h3>
      <p>Standard Flip Cup but birthday person is permanent anchor on both teams. They flip for whichever team is currently racing. If they win, they take a victory sip. If they lose, the losing team drinks extra.</p>
      <ul>
        <li><strong>Players:</strong> 8+</li>
        <li><strong>Equipment:</strong> Cups, table</li>
        <li><strong>Why it works:</strong> Birthday person is always involved without drinking too much more than others</li>
      </ul>
      <p><Link href="/game/flip-cup" className="text-neon-pink hover:underline">Full Flip Cup Rules</Link></p>

      <h3>10. Drink Whenever...</h3>
      <p>Create a list of &quot;drink whenever&quot; rules based on the birthday person&apos;s habits. Everyone drinks when they do something on the list.</p>
      <ul>
        <li><strong>Sample rules:</strong></li>
        <li>Drink when [name] takes a selfie</li>
        <li>Drink when [name] says their catchphrase</li>
        <li>Drink when [name] hugs someone</li>
        <li>Drink when [name] checks their phone</li>
        <li>Drink when [name] talks about being 21</li>
      </ul>

      <h2>Bar/Club Birthday Games</h2>

      <h3>11. Birthday Passport</h3>
      <p>Create a &quot;passport&quot; card with drink stamps. The birthday person must get a different drink at each bar and get it &quot;stamped&quot; (bartender signature, photo, or actual stamp). Complete the passport for a prize.</p>
      <ul>
        <li><strong>Bars visited:</strong> 4-7 is reasonable</li>
        <li><strong>Tracking:</strong> Polaroid photos work great</li>
        <li><strong>Prize:</strong> Final bar tab covered, or silly crown</li>
      </ul>

      <h3>12. Buy Me a Drink Bingo</h3>
      <p>Create a bingo card of different drink types. Birthday person must get strangers to buy them these specific drinks to fill the card. More fun than just &quot;get 5 drinks bought.&quot;</p>
      <ul>
        <li><strong>Card squares:</strong> Shot, beer, cocktail, wine, birthday drink, most expensive drink, cheapest drink, etc.</li>
        <li><strong>Bingo prize:</strong> Loser friends buy next round</li>
      </ul>

      <h3>13. 21 Strangers Photo Challenge</h3>
      <p>Take photos with 21 different strangers throughout the night. Each photo = a sip. Can combine with other challenges (photo with tallest person, with someone in red, etc.).</p>
      <ul>
        <li><strong>Tracking:</strong> Dedicated camera roll or polaroids</li>
        <li><strong>Bonus points:</strong> Get their names and remember them later</li>
      </ul>

      <h2>At-Home 21st Birthday Games</h2>

      <h3>14. This or That: Birthday Edition</h3>
      <p>Friends present the birthday person with two options. They pick one. If the majority guessed their pick, birthday person drinks. If not, everyone else drinks.</p>
      <ul>
        <li><strong>Sample questions:</strong></li>
        <li>Beach vacation or mountain cabin?</li>
        <li>Text or call?</li>
        <li>Morning person or night owl?</li>
        <li>Sweet or savory?</li>
      </ul>

      <h3>15. Birthday Truth or Drink</h3>
      <p>Everyone writes truth questions on slips of paper. Birthday person draws and must answer truthfully or drink. Friends drink if their question isn&apos;t picked.</p>
      <ul>
        <li><strong>Players:</strong> 4-12</li>
        <li><strong>Equipment:</strong> Paper, pen, container</li>
        <li><strong>Pro tip:</strong> Write questions in advance for quality</li>
      </ul>
      <p><Link href="/game/truth-or-drink" className="text-neon-pink hover:underline">Full Truth or Drink Rules</Link></p>

      <h3>16. Birthday Power Hour</h3>
      <p>Standard Power Hour but with a special birthday playlist. Include songs from every year of their life (one per year = 21 songs minimum). Drink at each song change.</p>
      <ul>
        <li><strong>Duration:</strong> 30-60 minutes</li>
        <li><strong>Playlist:</strong> Songs from their birth year to now</li>
        <li><strong>Memory lane:</strong> Share memories associated with each song</li>
      </ul>
      <p><Link href="/game/power-hour" className="text-neon-pink hover:underline">Full Power Hour Rules</Link></p>

      <h2>Safety Tips for 21st Birthdays</h2>

      <h3>Before the Party</h3>
      <ul>
        <li><strong>Eat a big meal</strong> - Never drink on an empty stomach, especially tonight</li>
        <li><strong>Designate a guardian</strong> - One sober or mostly-sober friend watches the birthday person</li>
        <li><strong>Plan transportation</strong> - Uber, Lyft, or DD arranged in advance</li>
        <li><strong>Set a budget</strong> - Know when to stop buying rounds</li>
        <li><strong>Charge phones</strong> - Everyone needs working phones for safety</li>
      </ul>

      <h3>During the Party</h3>
      <ul>
        <li><strong>Water between drinks</strong> - Every other drink should be water</li>
        <li><strong>Snacks available</strong> - Keep food accessible all night</li>
        <li><strong>Watch the clock</strong> - Pace drinks, especially early on</li>
        <li><strong>Check in regularly</strong> - Guardian should check birthday person every 30 minutes</li>
        <li><strong>Know the signs</strong> - Slurring, stumbling, confusion = time to stop</li>
      </ul>

      <h3>After the Party</h3>
      <ul>
        <li><strong>Safe ride home</strong> - Never drive, always have a plan</li>
        <li><strong>Water and food</strong> - Before bed</li>
        <li><strong>Recovery kit ready</strong> - Painkillers, electrolytes, bland food for morning</li>
        <li><strong>Check-in next day</strong> - Make sure everyone got home safe</li>
      </ul>

      <h2>21st Birthday Party Timeline</h2>

      <h3>Bar Hop Version</h3>
      <ul>
        <li><strong>7:00 PM:</strong> Dinner together (big meal, moderate drinking)</li>
        <li><strong>9:00 PM:</strong> First bar - casual drinks, warm up</li>
        <li><strong>10:00 PM:</strong> Second bar - birthday games begin</li>
        <li><strong>11:00 PM:</strong> Third bar - peak energy, more games</li>
        <li><strong>12:00 AM:</strong> Midnight toast, birthday wishes</li>
        <li><strong>12:30 AM:</strong> Fourth bar or club - dancing, celebrating</li>
        <li><strong>2:00 AM:</strong> Wind down, water, food</li>
        <li><strong>3:00 AM:</strong> Home safely</li>
      </ul>

      <h3>House Party Version</h3>
      <ul>
        <li><strong>7:00 PM:</strong> Guests arrive, casual drinks</li>
        <li><strong>8:00 PM:</strong> Dinner/food service</li>
        <li><strong>9:00 PM:</strong> First round of games (Kings Cup, Most Likely To)</li>
        <li><strong>10:00 PM:</strong> Birthday cake, presents if any</li>
        <li><strong>11:00 PM:</strong> Higher energy games (Flip Cup, Rage Cage)</li>
        <li><strong>12:00 AM:</strong> Midnight toast, birthday moment</li>
        <li><strong>12:30 AM:</strong> Dance party, continued games</li>
        <li><strong>2:00 AM:</strong> Wind down, people start leaving or crashing</li>
      </ul>

      <h2>What NOT to Do</h2>

      <ul>
        <li><strong>21 shots in a row</strong> - This is genuinely dangerous. Pace throughout the night.</li>
        <li><strong>Mixing too many types</strong> - Beer before liquor, or stick to one type</li>
        <li><strong>Losing the birthday person</strong> - Always know where they are</li>
        <li><strong>Embarrassing them permanently</strong> - No photos/videos they&apos;ll regret forever</li>
        <li><strong>Ignoring &quot;I&apos;m done&quot;</strong> - When they say stop, stop</li>
        <li><strong>Forgetting water and food</strong> - Essential for survival</li>
      </ul>

      <h2>Related Guides</h2>
      <ul>
        <li><Link href="/guides/birthday-drinking-games" className="text-neon-pink hover:underline">Birthday Drinking Games (All Ages)</Link></li>
        <li><Link href="/guides/drinking-games-for-parties" className="text-neon-pink hover:underline">Drinking Games for Parties</Link></li>
        <li><Link href="/guides/classic-drinking-games" className="text-neon-pink hover:underline">Classic Drinking Games</Link></li>
        <li><Link href="/guides/bar-drinking-games" className="text-neon-pink hover:underline">Bar Drinking Games</Link></li>
      </ul>
    </GuideLayout>
  );
}
