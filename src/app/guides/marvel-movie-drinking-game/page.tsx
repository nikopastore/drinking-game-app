import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Marvel Movie Drinking Game (2024) | MCU Rules for Every Film",
  description: "The ultimate Marvel Cinematic Universe drinking game! Rules for every MCU movie - drink for Stan Lee cameos, post-credit scenes, and Avengers assembling.",
  keywords: ["marvel drinking game", "mcu drinking game", "avengers drinking game", "marvel movie drinking rules", "superhero movie drinking game"],
  openGraph: { title: "Marvel Movie Drinking Game - MCU Rules", description: "Avengers, assemble your drinks!", type: "article", url: "https://sipwiki.app/guides/marvel-movie-drinking-game" },
  alternates: { canonical: "https://sipwiki.app/guides/marvel-movie-drinking-game" },
};

export default function MarvelMovieDrinkingGamePage() {
  return (
    <GuideLayout title="Marvel Movie Drinking Game" description="The MCU has 30+ movies. Here are drinking rules that work across all of them, plus movie-specific rules for the biggest films." breadcrumb="Marvel Movies" relatedGames={[{ name: "Movie Drinking Games", slug: "movie-drinking-games", description: "More movie games" }, { name: "Disney Drinking Game", slug: "disney-drinking-game", description: "Disney owns Marvel!" }]}>
      <h2>Universal MCU Rules</h2>
      <p>These work for ANY Marvel movie:</p>
      <ul>
        <li><strong>Stan Lee cameo</strong> - Drink 3 (RIP Legend)</li>
        <li><strong>Post-credit scene</strong> - Finish your drink</li>
        <li><strong>Marvel Studios logo</strong> - Opening sip</li>
        <li><strong>&quot;I am [hero name]&quot;</strong> - Drink 2</li>
        <li><strong>Infinity Stone appears</strong> - Drink 2</li>
        <li><strong>Crossover character cameo</strong> - Drink 2</li>
        <li><strong>Villain explains their plan</strong> - Drink 1</li>
        <li><strong>Hero makes a quip during fight</strong> - Drink 1</li>
        <li><strong>Slow-mo hero shot</strong> - Drink 1</li>
        <li><strong>City/landmark destruction</strong> - Drink 2</li>
        <li><strong>Reference to other MCU event</strong> - Drink 1</li>
      </ul>

      <h2>Character-Specific Rules</h2>

      <h3>Iron Man / Tony Stark</h3>
      <ul>
        <li>Sarcastic comment - Drink 1</li>
        <li>New suit reveal - Drink 2</li>
        <li>&quot;I am Iron Man&quot; - Drink 3</li>
        <li>Daddy issues mentioned - Drink 2</li>
      </ul>

      <h3>Captain America</h3>
      <ul>
        <li>&quot;I can do this all day&quot; - Drink 3</li>
        <li>Inspiring speech - Drink 2</li>
        <li>Shield throw - Drink 1</li>
        <li>References being from the 40s - Drink 1</li>
      </ul>

      <h3>Thor</h3>
      <ul>
        <li>Mjolnir/Stormbreaker catch - Drink 1</li>
        <li>Lightning power - Drink 2</li>
        <li>Calls someone by wrong name - Drink 1</li>
        <li>References being a god - Drink 1</li>
      </ul>

      <h3>Hulk</h3>
      <ul>
        <li>&quot;HULK SMASH&quot; or similar - Drink 3</li>
        <li>Banner transforms - Drink 2</li>
        <li>Hulk throws someone - Drink 1</li>
      </ul>

      <h3>Spider-Man</h3>
      <ul>
        <li>Web swing - Drink 1</li>
        <li>Mentions being from Queens - Drink 1</li>
        <li>&quot;Mr. Stark&quot; - Drink 1</li>
        <li>Peter Parker tingle/Spider-sense - Drink 2</li>
      </ul>

      <h3>Guardians of the Galaxy</h3>
      <ul>
        <li>&quot;I am Groot&quot; - Drink 1</li>
        <li>Classic song plays - Drink 2</li>
        <li>Rocket insults someone - Drink 1</li>
        <li>Drax doesn&apos;t understand metaphor - Drink 1</li>
      </ul>

      <h2>Movie-Specific Rules</h2>

      <h3>Avengers Movies</h3>
      <ul>
        <li>Team assembles shot - Drink 3</li>
        <li>Avengers fight each other - Drink 2</li>
        <li>Team strategy session - Drink 1</li>
      </ul>

      <h3>Endgame Specific</h3>
      <ul>
        <li>Time heist reference - Drink 1</li>
        <li>Past MCU callback - Drink 1</li>
        <li>&quot;Avengers... Assemble&quot; - Finish everything</li>
        <li>&quot;I love you 3000&quot; - Cry and drink</li>
      </ul>

      <h3>Spider-Man Movies</h3>
      <ul>
        <li>Happy appears - Drink 2</li>
        <li>MJ being sarcastic - Drink 1</li>
        <li>Ned being supportive - Drink 1</li>
      </ul>

      <h2>Marathon Rules</h2>
      <p>For MCU marathons (you brave soul):</p>
      <ul>
        <li>Use only 3-4 rules to survive</li>
        <li>Lighter drinks recommended</li>
        <li>Take breaks between phases</li>
        <li>30+ movies = pace yourself over days, not hours</li>
      </ul>

      <h2>Phase Drinking Intensity</h2>
      <ul>
        <li><strong>Phase 1</strong> - Moderate (fewer callbacks)</li>
        <li><strong>Phase 2</strong> - Moderate</li>
        <li><strong>Phase 3</strong> - Heavy (constant crossovers)</li>
        <li><strong>Phase 4+</strong> - Varies wildly by movie</li>
      </ul>
    </GuideLayout>
  );
}
