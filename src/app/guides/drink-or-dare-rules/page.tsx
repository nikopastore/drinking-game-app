import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drink or Dare Rules (2024) | Drinking Truth or Dare",
  description: "Complete Drink or Dare rules - the drinking version of truth or dare! Get a dare, do it or drink. Full rules, dare ideas by intensity, and party tips.",
  keywords: ["drink or dare", "drink or dare rules", "drinking truth or dare", "dare or drink game", "drink or dare drinking game", "truth or dare drinking"],
  openGraph: { title: "Drink or Dare Rules", description: "Dare or drink!", type: "article", url: "https://sipwiki.app/guides/drink-or-dare-rules" },
  alternates: { canonical: "https://sipwiki.app/guides/drink-or-dare-rules" },
};

export default function DrinkOrDareRulesPage() {
  return (
    <GuideLayout title="Drink or Dare Rules" description="The classic party game with a drinking twist. Get a dare - either do it or drink! The question is: how brave are you feeling tonight?" breadcrumb="Drink or Dare" relatedGames={[{ name: "Truth or Drink", slug: "truth-or-drink", description: "Question version" }, { name: "Most Likely To", slug: "most-likely-to", description: "Pointing game" }, { name: "Never Have I Ever", slug: "never-have-i-ever", description: "Reveal secrets" }]}>
      <h2>Basic Rules</h2>
      <ol>
        <li>Sit in a circle (or around a table)</li>
        <li>Take turns in order - first person dares the person to their left</li>
        <li>The dared person has a choice: <strong>do the dare</strong> or <strong>drink</strong></li>
        <li>If they do the dare, they stay sober (for that round)</li>
        <li>If they drink, they skip the dare</li>
        <li>After resolving, that person dares the next person</li>
      </ol>

      <h2>The Drink Cost System</h2>
      <p>Not all dares are created equal. The harder the dare, the more drinks to skip it:</p>

      <h3>Easy Dares (1 Drink to Skip)</h3>
      <ul>
        <li>Do an impression of someone in the room</li>
        <li>Sing a verse of a song</li>
        <li>Do 10 jumping jacks</li>
        <li>Speak in an accent for the next 3 rounds</li>
        <li>Tell a joke (has to be actually funny)</li>
        <li>Show the last photo in your camera roll</li>
        <li>Let someone read your last text message out loud</li>
      </ul>

      <h3>Medium Dares (2 Drinks to Skip)</h3>
      <ul>
        <li>Call a random contact and talk for 30 seconds</li>
        <li>Post something on social media (group approves)</li>
        <li>Send a text to someone (group chooses who and what)</li>
        <li>Do your best dance move</li>
        <li>Let someone go through your DMs for 30 seconds</li>
        <li>Switch an item of clothing with someone</li>
        <li>Reveal your screen time for the week</li>
        <li>Show your search history</li>
      </ul>

      <h3>Hard Dares (3 Drinks to Skip)</h3>
      <ul>
        <li>Text your ex (group writes the message)</li>
        <li>Let someone post on your Instagram story</li>
        <li>Do a convincing fake phone call with an ex</li>
        <li>Tell an embarrassing secret about yourself</li>
        <li>Demonstrate your O-face (yikes)</li>
        <li>Let someone send a DM from your account</li>
        <li>Eat something weird (hot sauce, lemon, weird combo)</li>
      </ul>

      <h3>Extreme Dares (4+ Drinks to Skip)</h3>
      <ul>
        <li>Change your profile pic to something embarrassing for 24 hours</li>
        <li>Prank call your parents</li>
        <li>Venmo someone $1 with an embarrassing message</li>
        <li>Let the group scroll through your dating app and swipe</li>
        <li>Text &quot;I love you&quot; to a random contact</li>
        <li>Go outside and talk to a stranger (supervised)</li>
      </ul>

      <h2>Dare Categories</h2>

      <h3>Physical Dares</h3>
      <ul>
        <li>Do a handstand (or try)</li>
        <li>Planks for 60 seconds</li>
        <li>Dance with no music</li>
        <li>Give someone a piggyback ride</li>
        <li>Do your best model walk</li>
        <li>Hold a yoga pose until your next turn</li>
      </ul>

      <h3>Social Media Dares</h3>
      <ul>
        <li>Post a story (approved by group)</li>
        <li>Change your bio temporarily</li>
        <li>Like someone&apos;s oldest photo</li>
        <li>Comment something nice on someone&apos;s post</li>
        <li>Send a voice note to someone</li>
        <li>Make a TikTok (doesn&apos;t have to be posted)</li>
      </ul>

      <h3>Communication Dares</h3>
      <ul>
        <li>Call someone and sing happy birthday</li>
        <li>Leave a voicemail for someone</li>
        <li>Text your crush</li>
        <li>Send a random emoji to 5 contacts</li>
        <li>DM a celebrity</li>
        <li>Reply to an old message thread</li>
      </ul>

      <h3>Performance Dares</h3>
      <ul>
        <li>Lip sync a song dramatically</li>
        <li>Do a poetry reading (improvised)</li>
        <li>Give a one-minute speech on a random topic</li>
        <li>Roast someone in the group (lovingly)</li>
        <li>Act out a movie scene</li>
        <li>Do your best celebrity impression</li>
      </ul>

      <h2>Important Guidelines</h2>

      <h3>Respect Boundaries</h3>
      <ul>
        <li><strong>No means no</strong> - If someone doesn&apos;t want to do it, they drink and move on</li>
        <li>Don&apos;t push people past their comfort zone</li>
        <li>Dares should be fun, not humiliating</li>
        <li>Know your audience - some groups can handle more than others</li>
        <li>Check in: &quot;Are you actually okay with this?&quot;</li>
      </ul>

      <h3>What&apos;s Off Limits</h3>
      <ul>
        <li>Anything illegal</li>
        <li>Dares that could cause injury</li>
        <li>Anything involving non-consenting third parties</li>
        <li>Dares that could damage relationships seriously</li>
        <li>Anything that involves driving or operating machinery</li>
        <li>Using someone&apos;s personal fears against them</li>
      </ul>

      <h3>The Veto Rule</h3>
      <p>Consider adding this house rule:</p>
      <ul>
        <li>Anyone can veto a dare they find too far</li>
        <li>No explanation required</li>
        <li>A vetoed dare must be replaced</li>
        <li>Person who gave the vetoed dare drinks 1</li>
      </ul>

      <h2>Escalation Strategy</h2>

      <h3>Early Game (First Hour)</h3>
      <ul>
        <li>Stick to easy and medium dares</li>
        <li>People are warming up</li>
        <li>Build comfort and trust</li>
        <li>Set the tone for the night</li>
      </ul>

      <h3>Mid-Game (Peak Energy)</h3>
      <ul>
        <li>Introduce harder dares</li>
        <li>People are looser, braver</li>
        <li>More creative dares work better</li>
        <li>Watch for people hitting their limits</li>
      </ul>

      <h3>Late Game (Winding Down)</h3>
      <ul>
        <li>Can go either way - wild or chill</li>
        <li>Read the room</li>
        <li>Some groups get bolder, some get tired</li>
        <li>Adjust accordingly</li>
      </ul>

      <h2>Variations</h2>

      <h3>Spin the Bottle + Dare</h3>
      <ul>
        <li>Spin a bottle to choose who gets dared</li>
        <li>Spinner gives the dare</li>
        <li>Adds randomness to who gets targeted</li>
      </ul>

      <h3>Card Draw Dare</h3>
      <ul>
        <li>Assign dare difficulties to card values</li>
        <li>2-6 = Easy, 7-10 = Medium, J-K = Hard, A = Extreme</li>
        <li>Draw determines intensity, darer still creates the dare</li>
      </ul>

      <h3>Team Drink or Dare</h3>
      <ul>
        <li>Split into teams</li>
        <li>Teams dare each other</li>
        <li>Team votes on whether dare was completed successfully</li>
        <li>Failed team dares = whole team drinks</li>
      </ul>

      <h3>Truth OR Drink or Dare</h3>
      <p>Combine both games:</p>
      <ul>
        <li>Person chooses: Truth, Dare, or Drink</li>
        <li>Truth = answer honestly or drink</li>
        <li>Dare = do it or drink more</li>
        <li>Drink = take 2 drinks, no question or dare</li>
      </ul>

      <h2>Pre-Written Dare Cards</h2>
      <p>For lazy daring or inspiration, write dares on cards beforehand:</p>
      <ul>
        <li>Shuffle and draw when it&apos;s your turn to dare</li>
        <li>Mix easy, medium, and hard in the deck</li>
        <li>Removes &quot;I can&apos;t think of anything&quot; moments</li>
        <li>Can download/print dare lists online</li>
      </ul>

      <h2>Safety Notes</h2>
      <ul>
        <li>Drinking is optional - always have an out</li>
        <li>Watch for people getting too drunk</li>
        <li>No one should feel pressured to either drink OR dare</li>
        <li>Have water available</li>
        <li>Everyone can tap out at any time</li>
      </ul>

      <p>More dare games: <Link href="/game/truth-or-drink" className="text-neon-pink hover:underline">Truth or Drink</Link> | <Link href="/guides/truth-or-dare-drinking-game" className="text-neon-pink hover:underline">full Truth or Dare guide</Link></p>
    </GuideLayout>
  );
}
