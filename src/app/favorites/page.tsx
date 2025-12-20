import { Metadata } from "next";
import { FavoritesClient } from "./FavoritesClient";

export const metadata: Metadata = {
  title: "My Favorites | SipWiki",
  description: "Your saved drinking games and cocktails. Quick access to your favorite party games and drinks.",
};

export default function FavoritesPage() {
  return <FavoritesClient />;
}
