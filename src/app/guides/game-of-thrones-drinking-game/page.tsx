import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Game of Thrones Drinking Game (2024) | Complete Rules by Season",
  description: "The ultimate Game of Thrones drinking game! Drink for deaths, nudity, 'Winter is Coming,' and dragon appearances. Season-specific rules included.",
  keywords: ["game of thrones drinking game", "got drinking game", "game of thrones drinking rules", "watch game of thrones drinking", "thrones drinking game"],
  openGraph: { title: "Game of Thrones Drinking Game", description: "Drink or die!", type: "article", url: "https://sipwiki.app/guides/game-of-thrones-drinking-game" },
  alternates: { canonical: "https://sipwiki.app/guides/game-of-thrones-drinking-game" },
};

export default function GameOfThronesDrinkingGamePage() {
  return (
    <GuideLayout title="Game of Thrones Drinking Game" description="The Seven Kingdoms demand drinking! From 'Winter is Coming' to Red Weddings - every iconic moment has a rule. Warning: Some episodes will destroy you." breadcrumb="Game of Thrones" relatedGames={[{ name: "TV Show Drinking Games", slug: "tv-show-drinking-games", description: "More TV games" }, { name: "Movie Drinking Games", slug: "movie-drinking-games", description: "Film drinking" }]}>
      <h2>Core Rules (All Seasons)</h2>
      <ul>
        <li><strong>&quot;Winter is Coming&quot;</strong> - Drink 3</li>
        <li><strong>&quot;You know nothing, Jon Snow&quot;</strong> - Drink 3</li>
        <li><strong>Someone dies</strong> - Drink 1 (you&apos;ll drink a lot)</li>
        <li><strong>Main character dies</strong> - Finish your drink</li>
        <li><strong>Nudity appears</strong> - Drink 1</li>
        <li><strong>Dragon appears</strong> - Drink 2</li>
        <li><strong>White Walkers appear</strong> - Drink 2</li>
        <li><strong>Wine is drunk on screen</strong> - Drink with them</li>
        <li><strong>Tyrion drinks</strong> - Drink with him (RIP)</li>
        <li><strong>Someone mentions &quot;The Iron Throne&quot;</strong> - Drink 1</li>
        <li><strong>Betrayal happens</strong> - Drink 2</li>
      </ul>

      <h2>House-Specific Rules</h2>

      <h3>House Stark</h3>
      <ul>
        <li>A Stark is honorable to a fault - Drink 1</li>
        <li>Direwolf appears - Drink 2</li>
        <li>&quot;The North Remembers&quot; - Drink 2</li>
        <li>Arya adds to her list - Drink 1</li>
        <li>Bran has a vision - Drink 2</li>
      </ul>

      <h3>House Lannister</h3>
      <ul>
        <li>&quot;A Lannister always pays his debts&quot; - Drink 3</li>
        <li>Cersei schemes - Drink 1</li>
        <li>Cersei drinks wine - Drink 2</li>
        <li>Jaime does something redeemable - Drink 2</li>
        <li>Tyrion gives a speech - Drink throughout</li>
      </ul>

      <h3>House Targaryen</h3>
      <ul>
        <li>Daenerys uses a title - Drink 1 per title used</li>
        <li>&quot;Dracarys&quot; - Drink 3</li>
        <li>Dragons breathe fire - Drink 2</li>
        <li>Someone mentions the Mad King - Drink 1</li>
      </ul>

      <h2>Location Rules</h2>
      <ul>
        <li><strong>King&apos;s Landing scene</strong> - Drink 1</li>
        <li><strong>The Wall appears</strong> - Drink 1</li>
        <li><strong>Scene north of the Wall</strong> - Drink 2</li>
        <li><strong>Braavos</strong> - Drink 2</li>
        <li><strong>The Iron Throne is shown</strong> - Drink 1</li>
      </ul>

      <h2>Danger Episodes (High Drink Count)</h2>
      <p>These episodes will DESTROY you with standard rules. Consider limiting to 3-4 rules:</p>
      <ul>
        <li><strong>&quot;The Rains of Castamere&quot; (Red Wedding)</strong> - Deaths everywhere</li>
        <li><strong>&quot;Hardhome&quot;</strong> - Non-stop White Walkers</li>
        <li><strong>&quot;Battle of the Bastards&quot;</strong> - Constant action/death</li>
        <li><strong>&quot;The Long Night&quot;</strong> - 80 minutes of chaos</li>
        <li><strong>&quot;The Bells&quot;</strong> - Mass destruction</li>
      </ul>

      <h2>Season-Specific Additions</h2>

      <h3>Seasons 1-4 (Political Intrigue Era)</h3>
      <ul>
        <li>Small council meeting - Drink 2</li>
        <li>Littlefinger schemes - Drink 1</li>
        <li>Joffrey is awful - Drink 1</li>
      </ul>

      <h3>Seasons 5-8 (Battle Era)</h3>
      <ul>
        <li>Large battle scene - Drink continuously until it ends</li>
        <li>Jon Snow comes back from something impossible - Drink 3</li>
        <li>Night King appears - Drink 3</li>
      </ul>

      <h2>Pro Tips</h2>
      <ul>
        <li>Beer/wine only - liquor will end you</li>
        <li>Some episodes have 20+ deaths - adjust rules accordingly</li>
        <li>Tyrion&apos;s drinking scenes alone could hospitalize you</li>
        <li>The Tyrion rule works best in early seasons</li>
        <li>Red Wedding episode - maybe just watch sober first time</li>
        <li>8 seasons × ~10 episodes - don&apos;t binge with full rules</li>
      </ul>

      <h2>Drinking Intensity by Season</h2>
      <ul>
        <li><strong>Season 1</strong> - Moderate (lots of setup)</li>
        <li><strong>Season 2</strong> - Moderate (Blackwater is heavy)</li>
        <li><strong>Season 3</strong> - Heavy (Red Wedding)</li>
        <li><strong>Season 4</strong> - Heavy (deaths galore)</li>
        <li><strong>Season 5</strong> - Moderate</li>
        <li><strong>Season 6</strong> - Very Heavy (battles)</li>
        <li><strong>Season 7</strong> - Heavy (dragons everywhere)</li>
        <li><strong>Season 8</strong> - Extreme (constant dragon action)</li>
      </ul>
    </GuideLayout>
  );
}
