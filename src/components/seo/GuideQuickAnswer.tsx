"use client";

import { QuickAnswer } from "./QuickAnswer";

export interface GuideQuickAnswerContent {
  question: string;
  answer: string;
  tips: string[];
}

// Authored answer-first copy for high-intent guides that previously had no
// visible answer block. Keep this list curated; do not generate thin copy for
// every programmatic or city page.
const GUIDE_QUICK_ANSWERS: Record<string, GuideQuickAnswerContent> = {
  "/guides/baseball-drinking-game-rules": {
    question: "How do you play the Baseball drinking game?",
    answer: "Baseball is a team game that combines innings with flip-cup challenges. Teams earn singles, doubles, triples, or home runs by winning quick cup battles, then track runs through innings. Set the scoring and drink amounts together before starting; non-alcoholic drinks work just as well.",
    tips: ["Use a visible scorecard and clear inning limit", "Keep cup fills small and offer water", "Best with two balanced teams"],
  },
  "/guides/avalanche-drinking-game-rules": {
    question: "What are the rules for Avalanche?",
    answer: "Avalanche is a dice game where players roll, follow the number’s action, and gradually add liquid to a shared cup. The cup grows until a player triggers the Avalanche rule and must deal with the full cup. Agree on small pours and use any beverage before the first roll.",
    tips: ["Use a small cup and measured pours", "Explain every die result before playing", "Stop or reset when the cup becomes unsafe"],
  },
  "/guides/5-minute-drinking-games": {
    question: "What are the best five-minute drinking games?",
    answer: "The best five-minute games have one or two rules, minimal setup, and short rounds: quick categories, Most Likely To, Medusa, Quarters, and rapid-fire question games. Pick a time limit, rotate the host, and let players use non-alcoholic drinks so the pace stays fun rather than pressured.",
    tips: ["Choose one game before the timer starts", "Keep rounds short and rotate turns", "Water and alcohol-free options are always welcome"],
  },
  "/guides/easy-drinking-games": {
    question: "What are the easiest drinking games to learn?",
    answer: "Easy drinking games use a sentence or two of rules and little equipment. Never Have I Ever, Most Likely To, simple categories, Higher or Lower, and basic card guesses are quick to teach. Start with small, optional sips and let the group choose the pace.",
    tips: ["Explain the rule once, then demonstrate", "Skip any prompt someone dislikes", "No-prop games work for almost any group"],
  },
  "/guides/drinking-game-ideas": {
    question: "How do you choose a drinking game idea?",
    answer: "Choose a game by group size, energy, available props, and time. Card games suit focused groups, team games raise the energy, and no-prop conversation games work anywhere. SipWiki’s catalog lets you filter those constraints, and every game can use non-alcoholic drinks.",
    tips: ["Match the game to the room and noise level", "Check player count before setting up", "Keep a second short game ready"],
  },
  "/guides/drinking-games-for-couples": {
    question: "What are good drinking games for couples?",
    answer: "Couples usually enjoy question games, Two Truths and a Lie, Higher or Lower, and cooperative mini challenges. Choose prompts together, keep the drink-or-skip option explicit, and use the games to create conversation rather than pressure either partner.",
    tips: ["Agree on boundaries and skip rules first", "Mix conversation with light competition", "Alcohol-free drinks work for the same games"],
  },
  "/guides/drinking-games-for-small-groups": {
    question: "What are the best drinking games for three to five people?",
    answer: "Small groups work well with Kings Cup, Ride the Bus, Never Have I Ever, Most Likely To, and focused card or dice games. Choose games where everyone gets frequent turns, keep the setup compact, and adjust any rule that assumes a larger crowd.",
    tips: ["Three to five players is ideal for conversation games", "Avoid long elimination rounds", "Rotate the host so everyone participates"],
  },
  "/guides/game-night-drinking-games": {
    question: "How do you turn game night into a drinking game night?",
    answer: "Add simple, optional drink triggers to board games, video games, or a dedicated card game. Keep the original win conditions intact, set a small-sip rule, and choose a non-alcoholic alternative so the night stays about playing together rather than drinking speed.",
    tips: ["Use triggers that happen often but not constantly", "Keep water and snacks available", "Pick a stop time before the first round"],
  },
  "/guides/high-energy-drinking-games": {
    question: "What are the highest-energy drinking games?",
    answer: "Flip Cup, Rage Cage, Beer Pong variants, and other relay or rapid-turn games create the most energy because players move, cheer, and act in short bursts. Clear the play area, define turns, and keep drinking amounts optional so the excitement stays physical and social.",
    tips: ["Clear tables, cables, and breakables first", "Use small fills and short rounds", "Pause for water between games"],
  },
  "/guides/flip-cup-vs-rage-cage": {
    question: "Should you play Flip Cup or Rage Cage?",
    answer: "Choose Flip Cup for organized teams and a relay race where every player gets a clear turn. Choose Rage Cage for a fast free-for-all with more chaos and bouncing. Flip Cup needs teams and cups; Rage Cage needs a central cup, balls, and rapid reactions.",
    tips: ["Flip Cup suits larger balanced teams", "Rage Cage works when the group wants chaos", "Use water or non-alcoholic drinks for the same mechanics"],
  },
};

export function getGuideQuickAnswer(pathname: string): GuideQuickAnswerContent | null {
  return GUIDE_QUICK_ANSWERS[pathname] ?? null;
}

export function GuideQuickAnswer({ pathname }: { pathname: string }) {
  const content = getGuideQuickAnswer(pathname);
  if (!content) return null;
  return <QuickAnswer {...content} variant="primary" />;
}
