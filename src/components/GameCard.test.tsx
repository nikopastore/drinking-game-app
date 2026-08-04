
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { GameCard } from "./GameCard";
import { Game } from "@/types";

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

const createMockGame = (overrides: Partial<Game> = {}): Game => ({
  id: "test-game-1",
  slug: "beer-pong",
  name: "Beer Pong",
  description: "Classic drinking game with ping pong balls",
  rules_text: "Throw the ball into cups...",
  materials: ["ping pong balls", "cups"],
  min_players: 2,
  max_players: 10,
  alcohol_type: "beer",
  drunkenness_level: 3,
  created_at: "2024-01-01",
  is_user_submitted: false,
  ...overrides,
});

describe("GameCard", () => {
  it("always renders the game name and description", () => {
    render(<GameCard game={createMockGame()} />);
    expect(screen.getByText("Beer Pong")).toBeInTheDocument();
    expect(screen.getByText(/Classic drinking game/)).toBeInTheDocument();
  });

  it("renders every supported size", () => {
    const game = createMockGame();
    const { rerender } = render(<GameCard game={game} size="small" />);
    expect(screen.getByText(game.name)).toBeInTheDocument();
    rerender(<GameCard game={game} size="medium" />);
    rerender(<GameCard game={game} size="large" />);
    expect(screen.getByText(game.name)).toBeInTheDocument();
  });

  it("retains the existing cover artwork", () => {
    render(<GameCard game={createMockGame({ image: "/games/beer-pong.webp" })} />);
    expect(screen.getByRole("img", { name: "Beer Pong" })).toHaveAttribute("src", "/games/beer-pong.webp");
  });

  it("uses a semantic link to the game page", () => {
    render(<GameCard game={createMockGame({ slug: "flip-cup" })} />);
    expect(screen.getByRole("link", { name: /View Beer Pong rules/i })).toHaveAttribute("href", "/games/flip-cup");
  });

  it("renders sip factor when requested", () => {
    render(<GameCard game={createMockGame({ drunkenness_level: 4 })} showSipFactor />);
    expect(screen.getByLabelText("Sip factor 4 out of 5")).toBeInTheDocument();
    expect(screen.getByText(/more glasses means more sips/i)).toBeInTheDocument();
  });

  it("does not render the expanded sip factor by default", () => {
    render(<GameCard game={createMockGame()} />);
    expect(screen.queryByText(/more glasses means more sips/i)).not.toBeInTheDocument();
  });

  it.each([
    [["cards"], "Card game", "??"],
    [["ping pong balls"], "Pong", "??"],
    [["dice"], "Dice game", "??"],
    [["cups"], "Cup game", "??"],
    [[], "Movie game", "??"],
    [[], "Thunderstruck", "??"],
    [["no prop"], "Conversation", "???"],
    [["random stuff"], "Other game", "??"],
  ])("shows the right fallback artwork for %s", (materials, name, emoji) => {
    render(<GameCard game={createMockGame({ image: undefined, materials, name })} />);
    expect(screen.getByText(emoji)).toBeInTheDocument();
  });
});
