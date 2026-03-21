import type { Metadata } from "next";
import { PlayerCountPage } from "../PlayerCountPage";

export const metadata: Metadata = {
  title: "Drinking Games for 3 People | SipWiki",
  description: "The best drinking games for three people. Keep the energy up with rules made for trios.",
};

export default function GamesForThreePage() {
  return (
    <PlayerCountPage
      title="Drinking Games for 3 People"
      description="Perfect for trios, small hangouts, and tight groups."
      minPlayers={3}
      maxPlayers={3}
      slug="for-3-people"
    />
  );
}
