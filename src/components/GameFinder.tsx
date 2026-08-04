"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, Search, ShieldCheck, Sparkles } from "lucide-react";
import { games } from "@/config/gameData";
import { findCatalogMatches, GameFinderResult } from "@/lib/gameFinder";
import { GameCard } from "@/components/GameCard";
import { cn } from "@/lib/utils";

const quickPrompts = [
  "6 people / no props / quick",
  "2 players / chill / cards",
  "big group / high energy",
  "beer game / 20 minutes",
];

export function GameFinder() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<GameFinderResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const matchedGames = useMemo(
    () => result?.recommendations.flatMap((recommendation) => {
      const game = games.find((candidate) => candidate.slug === recommendation.slug);
      return game ? [{ game, recommendation }] : [];
    }) ?? [],
    [result]
  );

  async function search(searchQuery: string) {
    const cleaned = searchQuery.trim();
    if (cleaned.length < 3) {
      setError("Tell us a little more - group size, supplies, mood, or time.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/game-finder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: cleaned }),
      });
      if (!response.ok) throw new Error("Search request failed");
      setResult(await response.json() as GameFinderResult);
    } catch {
      setResult(findCatalogMatches(cleaned, games));
      setError("The AI is taking a breather, so we matched these directly from the SipWiki catalog.");
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    void search(query);
  }

  return (
    <section aria-labelledby="game-finder-title">
      <div className="mb-5 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-neon-green text-dark-900">
          <Sparkles className="h-5 w-5" />
        </span>
        <div>
          <p className="night-kicker">SipWiki AI</p>
          <h2 id="game-finder-title" className="text-xl font-extrabold tracking-tight text-white">Describe the night. We&apos;ll pick the game.</h2>
        </div>
      </div>

      <form onSubmit={submit} className="rounded-[1.45rem] border border-white/12 bg-dark-900/70 p-2 shadow-inner">
        <div className="flex items-center gap-2">
          <Search className="ml-3 h-5 w-5 shrink-0 text-muted" aria-hidden="true" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="e.g. 6 people, no cards, something funny under 20 minutes"
            maxLength={300}
            className="min-w-0 flex-1 bg-transparent px-2 py-3.5 text-sm text-white placeholder:text-muted focus:outline-none sm:text-base"
            aria-label="Describe the game you want"
          />
          <button
            type="submit"
            disabled={loading}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-neon-pink text-white shadow-[0_8px_24px_rgba(255,61,129,.3)] transition hover:scale-105 disabled:opacity-60"
            aria-label="Find games"
          >
            {loading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" /> : <ArrowRight className="h-5 w-5" />}
          </button>
        </div>
      </form>

      <div className="mt-3 flex flex-wrap gap-2" aria-label="Quick searches">
        {quickPrompts.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => {
              setQuery(prompt);
              void search(prompt);
            }}
            className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-xs font-semibold text-gray-300 transition hover:border-neon-purple/50 hover:bg-neon-purple/10 hover:text-white"
          >
            {prompt}
          </button>
        ))}
      </div>

      <p className="mt-3 flex items-center gap-2 text-xs text-muted">
        <ShieldCheck className="h-3.5 w-3.5 text-neon-green" />
        Grounded in SipWiki&apos;s catalog. Recommendations are verified before they appear.
      </p>

      {(error || result?.notice) && (
        <p className={cn("mt-4 rounded-xl border px-4 py-3 text-sm", error ? "border-neon-yellow/25 bg-neon-yellow/8 text-neon-yellow" : "border-white/8 bg-white/[.025] text-muted")}>
          {error || result?.notice}
        </p>
      )}

      {result && (
        <div className="mt-8" aria-live="polite">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="night-kicker">{result.source === "gemini" ? "Gemini shortlist" : "Catalog shortlist"}</p>
              <p className="mt-1 text-sm text-gray-300">{result.summary}</p>
            </div>
            <button type="button" onClick={() => setResult(null)} className="text-xs font-bold text-muted hover:text-white">Clear results</button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {matchedGames.map(({ game, recommendation }, index) => (
              <div key={game.slug} className={cn(index === 0 && "sm:-translate-y-2")}>
                <div className="mb-2 flex items-center justify-between px-1">
                  <span className="text-xs font-bold uppercase tracking-[.13em] text-neon-green">{index === 0 ? "Best match" : "Also great"}</span>
                  <span className="text-xs font-black text-white">{recommendation.matchScore}%</span>
                </div>
                <GameCard game={game} priority={index === 0} />
                <p className="mt-3 px-1 text-sm leading-5 text-muted">{recommendation.reason}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
