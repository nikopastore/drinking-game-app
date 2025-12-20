import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Bachelor Drinking Game (2024) | Bachelorette Rules Too",
  description: "The ultimate Bachelor/Bachelorette drinking game! Drink for roses, dramatic pauses, 'here for the right reasons,' and helicopter dates. Complete rules for every episode.",
  keywords: ["the bachelor drinking game", "bachelor drinking game rules", "bachelorette drinking game", "bachelor watch party", "bachelor finale drinking game"],
  openGraph: { title: "The Bachelor Drinking Game - Complete Rules", description: "Will you accept this drink?", type: "article", url: "https://sipwiki.app/guides/the-bachelor-drinking-game" },
  alternates: { canonical: "https://sipwiki.app/guides/the-bachelor-drinking-game" },
};

export default function BachelorDrinkingGamePage() {
  return (
    <GuideLayout title="The Bachelor/Bachelorette Drinking Game" description="Turn Bachelor night into a party! Every rose, every dramatic pause, every 'journey' - there's a drinking rule for it. Works for Bachelor, Bachelorette, and Paradise." breadcrumb="The Bachelor" relatedGames={[{ name: "TV Show Drinking Games", slug: "tv-show-drinking-games", description: "More TV games" }, { name: "Girls Night Drinking Games", slug: "girls-night-drinking-games", description: "Perfect pairing" }]}>
      <h2>Essential Rules (Use Every Episode)</h2>
      <ul>
        <li><strong>&quot;Here for the right reasons&quot;</strong> - Drink 2</li>
        <li><strong>&quot;My journey&quot;</strong> - Drink 1</li>
        <li><strong>&quot;Connection&quot;</strong> - Drink 1</li>
        <li><strong>&quot;Open up&quot; or &quot;vulnerable&quot;</strong> - Drink 1</li>
        <li><strong>&quot;I could see myself falling for you&quot;</strong> - Drink 2</li>
        <li><strong>Someone cries</strong> - Drink 1</li>
        <li><strong>Dramatic pause before rose</strong> - Drink 1</li>
        <li><strong>Helicopter/plane date</strong> - Drink 3</li>
        <li><strong>Hot tub scene</strong> - Drink 2</li>
        <li><strong>&quot;Can I steal you for a sec?&quot;</strong> - Drink 2</li>
        <li><strong>Toast/cheers moment</strong> - Take a real drink with them</li>
      </ul>

      <h2>Contestant Behavior</h2>
      <ul>
        <li><strong>Someone gets a villain edit</strong> - Drink 1</li>
        <li><strong>Group date drama</strong> - Drink 2</li>
        <li><strong>Someone has a &quot;trauma reveal&quot;</strong> - Drink 2</li>
        <li><strong>Obvious producer manipulation</strong> - Drink 2</li>
        <li><strong>Someone complains about not getting enough time</strong> - Drink 1</li>
        <li><strong>Someone pulls the lead aside dramatically</strong> - Drink 1</li>
        <li><strong>&quot;I&apos;m not here to make friends&quot;</strong> - Drink 3 (instant classic)</li>
        <li><strong>Fake apology or confrontation</strong> - Drink 2</li>
      </ul>

      <h2>Rose Ceremony Rules</h2>
      <ul>
        <li><strong>Each rose given</strong> - Sip</li>
        <li><strong>Final rose call-out</strong> - Drink 2</li>
        <li><strong>Someone leaves voluntarily</strong> - Drink 3</li>
        <li><strong>Shocking elimination</strong> - Drink 4</li>
        <li><strong>Someone cries in limo exit</strong> - Drink 2</li>
        <li><strong>&quot;I just want to find love&quot; in exit interview</strong> - Drink 1</li>
      </ul>

      <h2>Date Types</h2>
      <ul>
        <li><strong>One-on-one date</strong> - Drink 2 when it starts</li>
        <li><strong>Group date</strong> - Drink 1 when it starts</li>
        <li><strong>Two-on-one (drama guaranteed)</strong> - Drink 3</li>
        <li><strong>Hometown date</strong> - Drink 2 per family you meet</li>
        <li><strong>Fantasy suite</strong> - Finish your drink</li>
      </ul>

      <h2>Host Moments</h2>
      <ul>
        <li><strong>&quot;Ladies/Gentlemen, this is the final rose&quot;</strong> - Drink 2</li>
        <li><strong>Host drops shocking news</strong> - Drink 3</li>
        <li><strong>&quot;The most dramatic season ever&quot;</strong> - Drink 3</li>
      </ul>

      <h2>Finale-Specific Rules</h2>
      <ul>
        <li><strong>Neil Lane appears</strong> - Drink 3</li>
        <li><strong>Final two walking to final location</strong> - Drink throughout</li>
        <li><strong>Rejection speech</strong> - Drink 4</li>
        <li><strong>Proposal</strong> - Finish your drink</li>
        <li><strong>Plot twist/breakup reveal</strong> - Finish everything</li>
        <li><strong>After the Final Rose drama</strong> - Drink for every awkward moment</li>
      </ul>

      <h2>Bachelor in Paradise Additions</h2>
      <ul>
        <li><strong>New arrival</strong> - Drink 2</li>
        <li><strong>Date card appears</strong> - Drink 1</li>
        <li><strong>Love triangle drama</strong> - Drink 3</li>
        <li><strong>Someone leaves Paradise</strong> - Drink 2</li>
        <li><strong>Wells makes a drink</strong> - Make yourself one too</li>
        <li><strong>Rose ceremony (Paradise)</strong> - Drink per rose</li>
      </ul>

      <h2>Pro Tips</h2>
      <ul>
        <li>Use wine - it&apos;s thematic and won&apos;t destroy you</li>
        <li>Two-hour episodes are LONG - pace yourself</li>
        <li>Finale nights need extra supplies</li>
        <li>Best with 3-6 friends who watch regularly</li>
        <li>Pause for bathroom breaks - the show won&apos;t wait</li>
      </ul>
    </GuideLayout>
  );
}
