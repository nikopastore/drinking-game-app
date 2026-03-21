import type { Metadata } from "next";
import { PlayerCountPage } from "../PlayerCountPage";

export const metadata: Metadata = {
  title: "Drinking Games for 5+ People | SipWiki",
  description: "Find the best drinking games for five or more players. Perfect for parties and group nights.",
};

export default function GamesForFivePlusPage() {
  return (
    <PlayerCountPage
      title="Drinking Games for 5+ People"
      description="Games that scale to five or more players for bigger hangouts."
      minPlayers={5}
      slug="for-5-plus"
    />
  );
}
