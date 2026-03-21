import type { Metadata } from "next";
import { PlayerCountPage } from "../PlayerCountPage";

export const metadata: Metadata = {
  title: "Drinking Games for Large Groups (10+) | SipWiki",
  description: "Drinking games designed for 10 or more players. Big energy, big laughs, and easy rules.",
};

export default function GamesForLargeGroupsPage() {
  return (
    <PlayerCountPage
      title="Drinking Games for Large Groups"
      description="Party-friendly games that work best with 10+ players."
      minPlayers={10}
      slug="for-large-groups"
    />
  );
}
