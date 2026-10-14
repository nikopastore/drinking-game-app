import type { Game } from "@/types";

/** Client helper: do not import the full catalog into the chat component. */
export function refereeSuggestions(game: Pick<Game, "materials">): string[] {
  const materials = game.materials.join(" ").toLowerCase();
  const specific = materials.includes("dice") ? "What happens if I roll doubles?"
    : materials.includes("card") ? "How do the cards work?"
    : materials.includes("cup") ? "How do we set up the cups?"
    : "How do we take turns?";
  return [specific, "How do I win?", "Can you explain the rules?"];
}
