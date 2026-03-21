import type { Metadata } from "next";
import { PlayerCountPage } from "../PlayerCountPage";

export const metadata: Metadata = {
  title: "Drinking Games for 2 People | SipWiki",
  description: "Find the best drinking games for two people. Perfect for couples, roommates, or a low-key night in.",
};

export default function GamesForTwoPage() {
  return (
    <PlayerCountPage
      title="Drinking Games for 2 People"
      description="Quick, competitive, and conversation-friendly games built for two players."
      minPlayers={2}
      maxPlayers={2}
      slug="for-2-people"
    />
  );
}
