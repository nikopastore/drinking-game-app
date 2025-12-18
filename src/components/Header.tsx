"use client";

import Link from "next/link";
import { Wine, Search, CircleDot, PlusCircle, ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui";
import { useSidebar } from "@/components/Sidebar";

interface HeaderProps {
  onSearchClick?: () => void;
}

export function Header({ onSearchClick }: HeaderProps) {
  const { toggle } = useSidebar();

  return (
    <header className="sticky top-0 z-40 bg-dark-900/95 backdrop-blur border-b border-dark-600">
      <div className="px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left: Menu Toggle + Logo */}
          <div className="flex items-center gap-2">
            {/* Menu Toggle - Hidden on mobile (bottom nav used instead) */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggle}
              className="hidden md:flex items-center justify-center text-gray-300 hover:text-white hover:bg-dark-700 p-2"
              aria-label="Toggle sidebar"
            >
              <Menu className="h-5 w-5" />
            </Button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Wine className="h-7 w-7 text-neon-pink" />
              <span
                className="text-2xl bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent"
                style={{ fontFamily: "'Pacifico', cursive" }}
              >
                SipWiki
              </span>
            </Link>
          </div>

          {/* Center Actions - Hidden on mobile (bottom nav used instead) */}
          <div className="hidden md:flex items-center gap-2">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onSearchClick}
              className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-dark-700"
            >
              <Search className="h-5 w-5" />
              <span>Search</span>
            </Button>

            {/* Roulette/Spin Button */}
            <Link href="/spin">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-dark-700"
              >
                <CircleDot className="h-5 w-5" />
                <span>Spin</span>
              </Button>
            </Link>

            {/* Shop Button */}
            <Link href="/shop">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-dark-700"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Shop</span>
              </Button>
            </Link>
          </div>

          {/* Right Action - Create/Submit - Hidden on mobile */}
          <Link href="/submit" className="hidden md:block">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-neon-pink hover:text-white hover:bg-neon-pink/20"
            >
              <PlusCircle className="h-5 w-5" />
              <span>Create</span>
            </Button>
          </Link>

          {/* Mobile placeholder for layout balance */}
          <div className="w-8 md:hidden" />
        </div>
      </div>
    </header>
  );
}
