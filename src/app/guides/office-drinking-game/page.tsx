import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Office Drinking Game (2024) | Complete Episode Guide",
  description: "The ultimate Office drinking game rules! Drink to Michael's 'That's what she said,' Jim's camera looks, and Dwight's ridiculous moments. Episode-specific rules included.",
  keywords: ["the office drinking game", "office drinking game rules", "michael scott drinking game", "the office tv drinking game", "watch the office drinking game"],
  openGraph: { title: "The Office Drinking Game - Complete Rules", description: "That's what she said... drink!", type: "article", url: "https://sipwiki.app/guides/office-drinking-game" },
  alternates: { canonical: "https://sipwiki.app/guides/office-drinking-game" },
};

export default function OfficeDrinkingGamePage() {
  return (
    <GuideLayout title="The Office Drinking Game" description="Turn your Office rewatch into a party with these drinking rules. From Michael's catchphrases to Jim's camera looks - every cringe moment becomes a sip." breadcrumb="The Office" relatedGames={[{ name: "TV Show Drinking Games", slug: "tv-show-drinking-games", description: "More TV games" }, { name: "Movie Drinking Games", slug: "movie-drinking-games", description: "Film drinking" }]}>
      <h2>Core Rules (Every Episode)</h2>
      <p>These happen constantly - take a sip:</p>
      <ul>
        <li><strong>&quot;That&apos;s what she said&quot;</strong> - Drink 2</li>
        <li><strong>Jim looks at the camera</strong> - Drink 1</li>
        <li><strong>Dwight mentions beets, bears, or Battlestar Galactica</strong> - Drink 1</li>
        <li><strong>Michael makes things awkward</strong> - Drink 1</li>
        <li><strong>Angela judges someone</strong> - Drink 1</li>
        <li><strong>Kevin says something dumb</strong> - Drink 1</li>
        <li><strong>Stanley sighs or rolls his eyes</strong> - Drink 1</li>
        <li><strong>Creed says something disturbing</strong> - Drink 2</li>
        <li><strong>Toby gets insulted by Michael</strong> - Drink 1</li>
        <li><strong>Someone mentions &quot;the warehouse&quot;</strong> - Drink 1</li>
      </ul>

      <h2>Character-Specific Rules</h2>

      <h3>Michael Scott</h3>
      <ul>
        <li>Does an impression - Drink 2</li>
        <li>References a movie incorrectly - Drink 1</li>
        <li>Talks about being everyone&apos;s friend - Drink 1</li>
        <li>Gets defensive about his intelligence - Drink 2</li>
        <li>World&apos;s Best Boss mug appears - Drink 1</li>
      </ul>

      <h3>Dwight Schrute</h3>
      <ul>
        <li>Mentions the farm - Drink 1</li>
        <li>Asserts authority as AARM - Drink 1</li>
        <li>Does something violent - Drink 2</li>
        <li>Has a weapon - Drink 3</li>
        <li>Sucks up to Michael - Drink 1</li>
      </ul>

      <h3>Jim & Pam</h3>
      <ul>
        <li>They share a look - Drink 1</li>
        <li>Jim pranks Dwight - Drink 2</li>
        <li>Pam does art - Drink 1</li>
        <li>They&apos;re being too cute - Drink 1</li>
      </ul>

      <h2>Big Moment Rules (Drink More)</h2>
      <ul>
        <li><strong>Actual kiss between characters</strong> - Drink 4</li>
        <li><strong>Someone gets fired</strong> - Drink 5</li>
        <li><strong>Someone quits</strong> - Drink 5</li>
        <li><strong>Physical injury</strong> - Drink 3</li>
        <li><strong>Michael does something that would get a real person fired</strong> - Drink 2 (you&apos;ll drink a lot)</li>
        <li><strong>A conference room meeting</strong> - Drink 2</li>
        <li><strong>Episode ends on a sweet moment</strong> - Finish your drink</li>
      </ul>

      <h2>Episode-Specific Rules</h2>

      <h3>&quot;Diversity Day&quot; (S1E2)</h3>
      <p>Add: Drink every time Michael says something racist. (Warning: You will get drunk.)</p>

      <h3>&quot;The Dundies&quot; (S2E1)</h3>
      <p>Add: Drink every time someone gets or is mentioned for a Dundie award.</p>

      <h3>&quot;The Injury&quot; (S2E12)</h3>
      <p>Add: Drink every time Michael&apos;s foot is mentioned.</p>

      <h3>&quot;Dinner Party&quot; (S4E13)</h3>
      <p>Add: Drink every time something awkward happens (you will not survive). Drink 3 for every Jan meltdown moment.</p>

      <h3>&quot;Stress Relief&quot; (S5E14-15)</h3>
      <p>Add: Drink throughout the entire cold open. Drink every time someone mentions the CPR dummy.</p>

      <h3>&quot;Finale&quot; (S9E23)</h3>
      <p>Add: Drink every time you tear up. Finish your drink when you actually cry.</p>

      <h2>Drinking Intensity Guide</h2>
      <ul>
        <li><strong>Light</strong> - Seasons 8-9 (fewer Michael moments)</li>
        <li><strong>Medium</strong> - Season 1 (short season)</li>
        <li><strong>Heavy</strong> - Seasons 2-5 (peak Office, constant drinking triggers)</li>
        <li><strong>Dangerous</strong> - &quot;Dinner Party&quot; or &quot;Scott&apos;s Tots&quot; with full rules</li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li>Pick 3-5 rules max for casual viewing</li>
        <li>All rules = drinking game mode (not for binge-watching)</li>
        <li>Beer or wine recommended over liquor</li>
        <li>Some episodes are deadlier than others - pace accordingly</li>
        <li>The show is ~45 hours total. Do not attempt a full series drinking marathon.</li>
      </ul>
    </GuideLayout>
  );
}
