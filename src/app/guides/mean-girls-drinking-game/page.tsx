import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Mean Girls Drinking Game Rules (2025) | SipWiki",
  description: "Mean Girls drinking game rules for the ultimate watch party. Drink for “On Wednesdays,” Burn Book drama, and every iconic quote.",
  keywords: [
    "mean girls drinking game",
    "mean girls movie drinking game",
    "mean girls drinking rules",
    "mean girls quotes drinking game",
    "lindsay lohan drinking game",
  ],
  openGraph: {
    title: "Mean Girls Drinking Game - Complete Rules",
    description: "Make your Mean Girls movie night fetch with these drinking rules.",
    type: "article",
    url: "https://sipwiki.app/guides/mean-girls-drinking-game",
  },
  alternates: {
    canonical: "https://sipwiki.app/guides/mean-girls-drinking-game",
  },
};

export default function MeanGirlsDrinkingGamePage() {
  return (
    <GuideLayout
      title="Mean Girls Drinking Game"
      description="Get your pink drink and make this movie night totally fetch. Classic rules, quote sips, and Burn Book chaos."
      breadcrumb="Mean Girls Drinking Game"
      relatedGames={[
        { name: "Movie Drinking Games", slug: "movie-drinking-games", description: "More film rules" },
        { name: "Friends Drinking Game", slug: "friends-tv-show-drinking-game", description: "Sitcom sips" },
      ]}
    >
      <h2>Core Rules (All Movie)</h2>
      <ul>
        <li><strong>“On Wednesdays we wear pink”</strong> - Drink 2</li>
        <li><strong>Someone wears pink</strong> - Drink 1</li>
        <li><strong>“That is so fetch”</strong> - Drink 2</li>
        <li><strong>“You can’t sit with us”</strong> - Drink 2</li>
        <li><strong>Burn Book appears</strong> - Drink 1</li>
        <li><strong>Someone gets roasted</strong> - Drink 1</li>
      </ul>

      <h2>Plastics Rules</h2>
      <h3>Regina George</h3>
      <ul>
        <li>Regina gives a backhanded compliment - Drink 1</li>
        <li>Regina manipulates someone - Drink 1</li>
        <li>Regina says something iconic - Drink 2</li>
      </ul>

      <h3>Cady Heron</h3>
      <ul>
        <li>Cady narrates - Drink 1</li>
        <li>Cady tries to fit in - Drink 1</li>
        <li>Cady does something cringe - Drink 2</li>
      </ul>

      <h3>Gretchen & Karen</h3>
      <ul>
        <li>Gretchen tries to make “fetch” happen - Drink 2</li>
        <li>Karen says something clueless - Drink 1</li>
        <li>Karen makes a weather prediction - Drink 2</li>
      </ul>

      <h2>Quote Rules</h2>
      <ul>
        <li><strong>“She doesn’t even go here!”</strong> - Drink 2</li>
        <li><strong>“Boo, you whore.”</strong> - Drink 2</li>
        <li><strong>“It’s like I have ESPN or something.”</strong> - Drink 2</li>
        <li><strong>“Get in loser, we’re going shopping.”</strong> - Finish your drink</li>
      </ul>

      <h2>School Drama Rules</h2>
      <ul>
        <li><strong>Mathletes appear</strong> - Drink 1</li>
        <li><strong>Cafeteria chaos</strong> - Drink 1</li>
        <li><strong>Someone cries in the bathroom</strong> - Drink 1</li>
        <li><strong>Any party scene</strong> - Drink 2</li>
      </ul>

      <h2>Light Version (First Watch)</h2>
      <ul>
        <li>Drink only for major quotes</li>
        <li>Drink when someone wears pink</li>
        <li>Drink when the Burn Book appears</li>
      </ul>

      <h2>Watch Party Ideas</h2>
      <ul>
        <li><strong>Dress code:</strong> Pink on Wednesdays (or anytime)</li>
        <li><strong>Snack:</strong> Animal crackers + pink frosting</li>
        <li><strong>Signature drink:</strong> Pink lemonade vodka or rosé spritz</li>
      </ul>
    </GuideLayout>
  );
}
