"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  ChevronRight,
  CircleDot,
  Grid3X3,
  Search,
  Sparkles,
} from "lucide-react";
import { games } from "@/config/gameData";
import { getClassicGames } from "@/lib/classicGames";
import { gameCategories, getGamesForCategory } from "@/config/categoryData";
import { Header } from "@/components/Header";
import { GameCard } from "@/components/GameCard";
import { GameFinder } from "@/components/GameFinder";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { cn } from "@/lib/utils";

const popularGames = getClassicGames();

const utilityLinks = [
  { href: "/spin", label: "Spin the wheel", description: "Let chance choose the next game.", icon: CircleDot, color: "text-neon-pink" },
  { href: "/party-planner", label: "Party planner", description: "Estimate drinks, ice, and supplies.", icon: Calculator, color: "text-neon-yellow" },
  { href: "/guides", label: "Rules & guides", description: "Get deeper tips and variations.", icon: BookOpen, color: "text-neon-blue" },
  { href: "/quiz/what-drinking-game-are-you", label: "Game personality quiz", description: "Find the game that fits your crew.", icon: Sparkles, color: "text-neon-green" },
];

export function GamesIndexClient() {
  const { isExpanded } = useSidebar();
  const [librarySearch, setLibrarySearch] = useState("");

  const filteredGames = useMemo(() => {
    const term = librarySearch.trim().toLowerCase();
    const sorted = [...games].sort((a, b) => a.name.localeCompare(b.name));
    if (!term) return sorted;
    return sorted.filter((game) =>
      [game.name, game.description, ...game.materials].join(" ").toLowerCase().includes(term)
    );
  }, [librarySearch]);

  function jumpToFinder() {
    document.getElementById("find-a-game")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  return (
    <div className="min-h-screen bg-dark-900">
      <Header onSearchClick={jumpToFinder} />
      <Sidebar />

      <main
        className={cn(
          "pb-28 transition-[margin] duration-300 md:pb-12",
          isExpanded ? "md:ml-60" : "md:ml-[72px]"
        )}
      >
        <section className="night-shell py-10 sm:py-14 lg:py-16">
          <div className="grid items-start gap-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
            <div className="pt-2 lg:sticky lg:top-28">
              <p className="night-kicker">The night starts here</p>
              <h1 className="night-heading mt-5 max-w-2xl text-5xl sm:text-6xl lg:text-7xl">
                Pick a game before the <span className="text-neon-pink">ice melts.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
                Tell us who is playing, what you have, and the mood. SipWiki turns the whole library into a shortlist made for tonight.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button onClick={jumpToFinder} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#fff7eb] px-5 text-sm font-black text-dark-900 transition hover:scale-[1.02]">
                  Find my game <ArrowRight className="h-4 w-4" />
                </button>
                <Link href="#library" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/12 bg-white/[.035] px-5 text-sm font-bold text-white transition hover:border-neon-purple/45">
                  Browse all {games.length}
                </Link>
              </div>
              <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3 border-t border-white/8 pt-6">
                <div><dt className="text-2xl font-black text-white">{games.length}</dt><dd className="text-xs text-muted">complete games</dd></div>
                <div><dt className="text-2xl font-black text-white">{gameCategories.length}</dt><dd className="text-xs text-muted">ways to browse</dd></div>
                <div><dt className="text-2xl font-black text-neon-green">100%</dt><dd className="text-xs text-muted">catalog grounded</dd></div>
              </dl>
            </div>

            <div id="find-a-game" className="night-panel scroll-mt-28 p-5 sm:p-7 lg:p-8">
              <GameFinder />
            </div>
          </div>
        </section>

        <section className="night-shell border-t border-white/8 py-12">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="night-kicker">Start with a classic</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">Crowd favorites</h2>
            </div>
            <Link href="#library" className="hidden items-center gap-1 text-sm font-bold text-muted transition hover:text-white sm:flex">
              Full library <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {popularGames.map((game, index) => (
              <GameCard key={game.id} game={game} size="large" priority={index === 0} />
            ))}
          </div>
        </section>

        <section className="night-shell py-12">
          <div className="mb-6">
            <p className="night-kicker">Browse your way</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">What does tonight look like?</h2>
          </div>
          <div className="flex snap-x gap-3 overflow-x-auto pb-3 scrollbar-hide">
            {gameCategories.map((category) => (
              <Link
                key={category.slug}
                href={"/games/" + category.slug}
                className="group flex min-w-48 snap-start items-center gap-3 rounded-2xl border border-white/10 bg-dark-800/75 p-4 transition hover:-translate-y-0.5 hover:border-neon-pink/45"
              >
                <span className="text-2xl" aria-hidden="true">{category.icon}</span>
                <span>
                  <strong className="block text-sm text-white group-hover:text-neon-pink">{category.name}</strong>
                  <span className="text-xs text-muted">{getGamesForCategory(category.slug).length} games</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section id="library" className="night-shell scroll-mt-24 py-12">
          <div className="mb-6 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="night-kicker">The full deck</p>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">Every game, A?Z</h2>
              <p className="mt-2 text-sm text-muted">{filteredGames.length} of {games.length} games</p>
            </div>
            <label className="flex min-h-12 w-full max-w-sm items-center gap-3 rounded-full border border-white/10 bg-dark-800/85 px-4 focus-within:border-neon-pink/50">
              <Search className="h-4 w-4 text-muted" />
              <span className="sr-only">Filter the game library</span>
              <input
                value={librarySearch}
                onChange={(event) => setLibrarySearch(event.target.value)}
                placeholder="Filter by name or supplies"
                className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-muted focus:outline-none"
              />
            </label>
          </div>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
              {filteredGames.map((game) => (
                <GameCard key={game.id} game={game} showSipFactor />
              ))}
            </div>
          ) : (
            <div className="night-card grid min-h-64 place-items-center p-8 text-center">
              <div>
                <Grid3X3 className="mx-auto h-8 w-8 text-neon-purple" />
                <h3 className="mt-3 text-xl font-bold text-white">No exact matches</h3>
                <p className="mt-2 text-sm text-muted">Try a broader word, or describe the night to the AI finder above.</p>
              </div>
            </div>
          )}
        </section>

        <section className="night-shell py-12">
          <div className="mb-6">
            <p className="night-kicker">More than rules</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">Keep the night moving</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {utilityLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href} className="night-card group p-5 transition hover:-translate-y-1 hover:border-neon-purple/40">
                  <Icon className={cn("h-6 w-6", item.color)} />
                  <h3 className="mt-8 font-extrabold text-white">{item.label}</h3>
                  <p className="mt-1 text-sm leading-5 text-muted">{item.description}</p>
                  <ArrowRight className="mt-5 h-4 w-4 text-white transition group-hover:translate-x-1" />
                </Link>
              );
            })}
          </div>
        </section>

        <section className="night-shell py-8">
          <div className="night-panel grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div>
              <p className="night-kicker">Everything still here</p>
              <h2 className="mt-2 text-2xl font-black text-white">Cocktails, buying guides, safety tips, shop, favorites, and account tools.</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">The redesign changes the experience, not the library. Every existing SipWiki page and feature remains available through the navigation.</p>
            </div>
            <Link href="/blog" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/12 px-5 text-sm font-bold text-white hover:bg-white/5">
              Explore guides <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="night-shell py-12 text-sm leading-7 text-muted">
          <h2 className="text-xl font-bold text-white">About the SipWiki game library</h2>
          <p className="mt-3 max-w-4xl">
            SipWiki brings complete setup instructions, gameplay rules, variations, and practical tips into one searchable library. Browse classics such as King?s Cup, Beer Pong, Flip Cup, and Never Have I Ever, or filter the full collection by name and supplies.
          </p>
        </section>
      </main>
      <MobileNav />
    </div>
  );
}
