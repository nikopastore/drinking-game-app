import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Oppenheimer Drinking Game Rules (2025) | SipWiki",
  description: "Oppenheimer drinking game rules for your movie night. Drink for Manhattan Project moments, tense courtroom scenes, and every \"I am become death\" reference.",
  keywords: [
    "oppenheimer drinking game",
    "oppenheimer movie drinking game",
    "oppenheimer drinking rules",
    "nolan drinking game",
    "christopher nolan drinking game",
    "manhattan project drinking game",
  ],
  openGraph: {
    title: "Oppenheimer Drinking Game - Complete Rules",
    description: "Make your Oppenheimer watch party unforgettable with these drinking rules.",
    type: "article",
    url: "https://sipwiki.app/guides/oppenheimer-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/oppenheimer-drinking-game",
  },
};

export default function OppenheimerDrinkingGamePage() {
  return (
    <GuideLayout
      title="Oppenheimer Drinking Game"
      description="Turn Christopher Nolan's epic into a cinematic drinking game. Perfect for film nerds, history buffs, and long-movie endurance nights."
      breadcrumb="Oppenheimer Drinking Game"
      relatedGames={[
        { name: "Movie Drinking Games", slug: "movie-drinking-games", description: "More film rules" },
        { name: "Barbie Movie Drinking Game", slug: "barbie-movie-drinking-game", description: "Double feature vibes" },
      ]}
    >
      <h2>Core Rules (Throughout the Movie)</h2>
      <p>These happen constantly - sip every time you see or hear:</p>
      <ul>
        <li><strong>“The bomb” is mentioned</strong> - Drink 1</li>
        <li><strong>Any black-and-white courtroom scene</strong> - Drink 1</li>
        <li><strong>Someone says “Manhattan Project”</strong> - Drink 1</li>
        <li><strong>Oppenheimer looks tortured/haunted</strong> - Drink 1</li>
        <li><strong>Robert Downey Jr. is scheming</strong> - Drink 1</li>
        <li><strong>Boarded-up chalkboards full of equations</strong> - Drink 1</li>
      </ul>

      <h2>Trinity Test Rules</h2>
      <ul>
        <li><strong>The Trinity test is discussed</strong> - Drink 1</li>
        <li><strong>Countdown begins</strong> - Everyone drinks</li>
        <li><strong>Explosion moment</strong> - Finish your drink</li>
        <li><strong>Silent shockwave tension</strong> - Drink 2</li>
      </ul>

      <h2>Character Rules</h2>
      <h3>Oppenheimer</h3>
      <ul>
        <li>Quotes poetry or philosophy - Drink 1</li>
        <li>Mentions quantum mechanics - Drink 1</li>
        <li>Conflicted morality speech - Drink 2</li>
      </ul>

      <h3>Kitty Oppenheimer</h3>
      <ul>
        <li>Kitty has a sharp one-liner - Drink 1</li>
        <li>She stares someone down - Drink 1</li>
      </ul>

      <h3>Lewis Strauss</h3>
      <ul>
        <li>Backroom political maneuvering - Drink 1</li>
        <li>Hears “Los Alamos” or “security clearance” - Drink 1</li>
      </ul>

      <h2>Historical Moment Rules</h2>
      <ul>
        <li><strong>Los Alamos is introduced</strong> - Drink 1</li>
        <li><strong>Any presidential or military meeting</strong> - Drink 1</li>
        <li><strong>Cold War tension</strong> - Drink 1</li>
        <li><strong>Any mention of spies/espionage</strong> - Drink 1</li>
      </ul>

      <h2>Long-Movie Survival Mode</h2>
      <ul>
        <li><strong>Act break (feel the time jump)</strong> - Water break</li>
        <li><strong>Major location shift</strong> - Drink 1</li>
        <li><strong>Montage of intense conversations</strong> - Sip through it</li>
      </ul>

      <h2>Light Version (First Watch)</h2>
      <ul>
        <li>Only drink for “Manhattan Project” mentions</li>
        <li>Trinity test rules only</li>
        <li>One drink per courtroom scene</li>
      </ul>

      <h2>Pairing Ideas</h2>
      <ul>
        <li><strong>Signature drink:</strong> “The Trinity” (whiskey + cherry + bitters)</li>
        <li><strong>Snack:</strong> Popcorn + pretzels (salt balances intensity)</li>
        <li><strong>Double feature:</strong> Watch Barbie first, then Oppenheimer</li>
      </ul>
    </GuideLayout>
  );
}
