import type { Metadata } from "next";
import { PlayerCountPage } from "../PlayerCountPage";

export const metadata: Metadata = {
  title: "Drinking Games for 4 People | SipWiki",
  description: "Four-player drinking games that keep everyone involved. Great for double dates and small groups.",
};

export default function GamesForFourPage() {
  return (
    <PlayerCountPage
      title="Drinking Games for 4 People"
      description="Balanced games for exactly four players—teams or free-for-all."
      minPlayers={4}
      maxPlayers={4}
      slug="for-4-people"
    />
  );
}
