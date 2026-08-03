"use client";

import Link from "next/link";
import { Menu, Search, Sparkles, User, Wine } from "lucide-react";
import { Button } from "@/components/ui";
import { useSidebar } from "@/components/Sidebar";
import { ModeToggle } from "@/components/ModeToggle";
import { useAuthContext } from "@/components/auth/AuthProvider";

interface HeaderProps {
  onSearchClick?: () => void;
}

export function Header({ onSearchClick }: HeaderProps) {
  const { toggle } = useSidebar();
  const { user, isAuthenticated, requireAuth } = useAuthContext();

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-dark-900/82 backdrop-blur-xl">
      <div className="flex h-[72px] items-center gap-4 px-4 md:px-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggle}
          className="hidden h-10 w-10 rounded-full p-0 md:flex"
          aria-label="Toggle navigation"
        >
          <Menu className="h-5 w-5" />
        </Button>

        <Link href="/games" className="group flex items-center gap-2" aria-label="SipWiki home">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-neon-pink text-dark-900 shadow-[0_8px_25px_rgba(255,61,129,.3)] transition group-hover:rotate-6">
            <Wine className="h-5 w-5" />
          </span>
          <span className="text-xl font-black tracking-[-0.04em] text-[#fff7eb]">SipWiki</span>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          <Link href="/games" className="rounded-full px-4 py-2 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white">Games</Link>
          <Link href="/cocktails" className="rounded-full px-4 py-2 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white">Cocktails</Link>
          <Link href="/party-planner" className="rounded-full px-4 py-2 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white">Party Planner</Link>
          <Link href="/blog" className="rounded-full px-4 py-2 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white">Guides</Link>
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <ModeToggle />
          {onSearchClick ? (
            <Button variant="ghost" size="sm" onClick={onSearchClick} className="h-10 rounded-full px-4">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          ) : (
            <Link href="/search" className="flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white">
              <Search className="h-4 w-4" />
              Search
            </Link>
          )}
          {isAuthenticated ? (
            <Link href="/account" className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-dark-700 text-white" aria-label="Account">
              {user?.user_metadata?.avatar_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={user.user_metadata.avatar_url} alt="" className="h-full w-full object-cover" />
              ) : (
                <User className="h-4 w-4" />
              )}
            </Link>
          ) : (
            <Button variant="outline" size="sm" onClick={requireAuth} className="h-10 rounded-full px-4">
              <Sparkles className="mr-2 h-4 w-4" />
              Sign in
            </Button>
          )}
        </div>

        <div className="ml-auto md:hidden">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
