import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disney Movie Drinking Game (2024) | Rules for Classic & New Films",
  description: "The ultimate Disney drinking game! Drink for villain songs, dead parents, 'I want' songs, and happily ever afters. Rules for classics and new releases.",
  keywords: ["disney drinking game", "disney movie drinking game", "disney drinking rules", "watch disney drinking game", "disney princess drinking game"],
  openGraph: { title: "Disney Movie Drinking Game", description: "The most magical drinking game on earth!", type: "article", url: "https://sipwiki.app/guides/disney-drinking-game" },
  alternates: { canonical: "https://sipwiki.app/guides/disney-drinking-game" },
};

export default function DisneyDrinkingGamePage() {
  return (
    <GuideLayout title="Disney Movie Drinking Game" description="Turn your Disney movie night into an adult experience. From dead parents to villain songs - every Disney trope becomes a sip. Works for classics and new releases!" breadcrumb="Disney Movies" relatedGames={[{ name: "Movie Drinking Games", slug: "movie-drinking-games", description: "More movie games" }, { name: "Marvel Drinking Game", slug: "marvel-movie-drinking-game", description: "Disney owns Marvel!" }]}>
      <h2>Universal Disney Rules</h2>
      <p>These apply to virtually every Disney movie:</p>
      <ul>
        <li><strong>Dead parent revealed/mentioned</strong> - Drink 2</li>
        <li><strong>Parent dies on screen</strong> - Finish your drink (looking at you, Bambi)</li>
        <li><strong>&quot;I Want&quot; song begins</strong> - Drink 2</li>
        <li><strong>Villain song begins</strong> - Drink 2</li>
        <li><strong>Castle appears (including logo)</strong> - Drink 1</li>
        <li><strong>True love&apos;s kiss</strong> - Drink 3</li>
        <li><strong>Happily ever after ending</strong> - Finish your drink</li>
        <li><strong>Sidekick provides comic relief</strong> - Drink 1</li>
        <li><strong>Animal sidekick appears</strong> - Drink 1</li>
        <li><strong>Magic is used</strong> - Drink 1</li>
        <li><strong>Character transformation</strong> - Drink 2</li>
      </ul>

      <h2>Princess Movies</h2>
      <ul>
        <li><strong>Princess dreams of something more</strong> - Drink 1</li>
        <li><strong>Princess meets prince</strong> - Drink 2</li>
        <li><strong>Evil stepmother/queen appears</strong> - Drink 2</li>
        <li><strong>Dress transformation</strong> - Drink 2</li>
        <li><strong>Princess is captured/cursed</strong> - Drink 2</li>
        <li><strong>Prince saves princess</strong> - Drink 2</li>
        <li><strong>Princess saves herself (modern)</strong> - Drink 2 + cheer</li>
      </ul>

      <h2>Movie-Specific Rules</h2>

      <h3>The Lion King</h3>
      <ul>
        <li>&quot;Hakuna Matata&quot; is said or sung - Drink 2</li>
        <li>Scar is dramatic - Drink 1</li>
        <li>Mufasa&apos;s death - Finish drink + sob</li>
        <li>Timon and Pumbaa banter - Drink 1</li>
      </ul>

      <h3>Frozen</h3>
      <ul>
        <li>&quot;Let It Go&quot; or any song - Drink throughout</li>
        <li>Elsa uses ice powers - Drink 1</li>
        <li>Olaf says something naive - Drink 1</li>
        <li>Anna makes impulsive decision - Drink 1</li>
        <li>Kristoff talks to Sven like a person - Drink 1</li>
      </ul>

      <h3>Moana</h3>
      <ul>
        <li>Ocean does something sentient - Drink 1</li>
        <li>Maui references himself - Drink 1</li>
        <li>&quot;You&apos;re Welcome&quot; plays - Drink 2</li>
        <li>Moana&apos;s grandmother appears/mentioned - Drink 2</li>
      </ul>

      <h3>The Little Mermaid</h3>
      <ul>
        <li>Ariel touches human object - Drink 1</li>
        <li>Sebastian worries - Drink 1</li>
        <li>Ursula is fabulous - Drink 1</li>
        <li>King Triton yells - Drink 1</li>
      </ul>

      <h3>Beauty and the Beast</h3>
      <ul>
        <li>Beast loses temper - Drink 1</li>
        <li>Enchanted object speaks - Drink 1</li>
        <li>Gaston flexes/brags - Drink 1</li>
        <li>Belle reads - Drink 1</li>
        <li>Rose petal falls - Drink 2</li>
      </ul>

      <h3>Aladdin</h3>
      <ul>
        <li>Genie reference/impression - Drink 1</li>
        <li>Aladdin lies - Drink 1</li>
        <li>Jasmine asserts independence - Drink 1</li>
        <li>Magic carpet ride - Drink 2</li>
        <li>Jafar schemes - Drink 1</li>
      </ul>

      <h2>Pixar Additions</h2>
      <ul>
        <li><strong>Pizza Planet truck</strong> - Drink 3</li>
        <li><strong>A113 reference</strong> - Drink 3</li>
        <li><strong>Emotional gut punch</strong> - Drink 2 + tissues</li>
        <li><strong>Lamp hops (logo)</strong> - Drink 1</li>
        <li><strong>Adult joke kids won&apos;t get</strong> - Drink 2</li>
      </ul>

      <h2>Marathon Warnings</h2>
      <ul>
        <li><strong>Up (first 10 min)</strong> - Will destroy you emotionally, maybe skip drinking</li>
        <li><strong>Encanto</strong> - SO MANY SONGS, pace yourself</li>
        <li><strong>Coco</strong> - Dead family = constant drinking + crying</li>
        <li><strong>Any Princess marathon</strong> - 8+ movies = dangerous</li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li>Wine/cocktails feel more Disney-adult appropriate</li>
        <li>Songs pile up fast - consider drinking only for specific songs</li>
        <li>Disney+ makes marathons too easy - pace yourself</li>
        <li>Have tissues for emotional moments</li>
      </ul>
    </GuideLayout>
  );
}
