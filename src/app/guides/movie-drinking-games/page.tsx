import { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Movie Drinking Games (2024) | Watch & Drink Rules",
  description: "The best movie drinking games! Rules for popular movies and how to create your own. Perfect for movie nights.",
  keywords: ["movie drinking games", "film drinking games", "drinking games for movies", "watch and drink", "movie night drinking games"],
  openGraph: { title: "Movie Drinking Games", description: "Watch and sip!", type: "article", url: "https://sipwiki.app/guides/movie-drinking-games" },
  alternates: { canonical: "https://sipwiki.app/guides/movie-drinking-games" },
};

export default function MovieDrinkingGamesPage() {
  return (
    <GuideLayout title="Movie Drinking Games" description="Turn movie night into a party! Drink for tropes, catchphrases, and clichés. We've got rules for popular movies plus tips for creating your own." breadcrumb="Movie Games" primaryGame={{ name: "Movie Drinking Game", slug: "movie-drinking-game" }} relatedGames={[{ name: "Thunderstruck", slug: "thunderstruck", description: "Music version" }]}>
      <h2>Popular Movie Rules</h2>
      <h3>Any Action Movie</h3>
      <ul><li>Explosion = drink</li><li>One-liner = drink</li><li>Car chase = drink throughout</li></ul>
      <h3>Any Horror Movie</h3>
      <ul><li>Jump scare = drink</li><li>Someone goes alone = drink</li><li>&quot;Hello?&quot; into darkness = drink</li><li>Death = finish drink</li></ul>
      <h3>Any Rom-Com</h3>
      <ul><li>Misunderstanding = drink</li><li>Airport chase = drink</li><li>Rain kiss = finish drink</li></ul>
      <h2>Create Your Own</h2>
      <ol><li>Pick 3-5 recurring elements</li><li>Assign drink amounts</li><li>Don&apos;t go overboard - movies are long!</li></ol>
    </GuideLayout>
  );
}
