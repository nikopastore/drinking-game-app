import { Metadata } from "next";
import { GamesIndexClient } from "./GamesIndexClient";

export const metadata: Metadata = {
  title: "All Drinking Games - Complete Rules & How to Play | SipWiki",
  description:
    "Browse 30+ drinking games with complete rules. Card games, cup games, dice games, and more. Find the perfect game for your party tonight!",
  keywords: [
    "drinking games",
    "drinking game rules",
    "party games",
    "beer pong rules",
    "kings cup rules",
    "flip cup rules",
    "card drinking games",
  ],
};

export default function GamesIndexPage() {
  return <GamesIndexClient />;
}
