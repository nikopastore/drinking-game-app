import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TV Show Drinking Games (2024) | Binge-Watching Games",
  description: "Drinking games for TV shows! Rules for popular series and how to create games for any show. Perfect for binge-watching.",
  keywords: ["tv show drinking games", "tv drinking games", "binge watching drinking games", "series drinking games", "netflix drinking games"],
  openGraph: { title: "TV Show Drinking Games", description: "Binge and sip!", type: "article", url: "https://sipwiki.app/guides/tv-show-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/tv-show-drinking-games" },
};

export default function TVShowDrinkingGamesPage() {
  return (
    <GuideLayout title="TV Show Drinking Games" description="Make binge-watching interactive! These drinking games sync with your favorite shows for a social viewing experience." breadcrumb="TV Show Games" relatedGames={[{ name: "Movie Drinking Game", slug: "movie-drinking-game", description: "Film version" }]}>
      <h2>Universal TV Rules</h2>
      <ul><li>Theme song plays = everyone drinks</li><li>Catchphrase said = drink</li><li>Plot twist = drink</li><li>Cliffhanger ending = finish drink</li></ul>
      <h2>Reality TV Rules</h2>
      <ul><li>Someone cries = drink</li><li>&quot;I&apos;m not here to make friends&quot; = drink</li><li>Dramatic music = drink</li><li>Confessional = sip</li></ul>
      <h2>Create Your Own</h2>
      <ul><li>Watch one episode first to identify patterns</li><li>Pick character-specific triggers</li><li>Keep it to 5-7 rules max</li><li>Pace for episode length (22 min vs 60 min)</li></ul>
    </GuideLayout>
  );
}
