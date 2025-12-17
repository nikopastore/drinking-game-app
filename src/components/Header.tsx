"use client";

import Link from "next/link";
import { Wine, Search, CircleDot, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui";

interface HeaderProps {
  onSearchClick?: () => void;
}

export function Header({ onSearchClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-dark-900/95 backdrop-blur border-b border-dark-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
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

          {/* Center Actions - Search & Roulette */}
          <div className="flex items-center gap-2">
            {/* Search Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onSearchClick}
              className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-dark-700"
            >
              <Search className="h-5 w-5" />
              <span className="hidden sm:inline">Search</span>
            </Button>

            {/* Roulette/Spin Button */}
            <Link href="/spin">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-dark-700"
              >
                <CircleDot className="h-5 w-5" />
                <span className="hidden sm:inline">Spin</span>
              </Button>
            </Link>
          </div>

          {/* Right Action - Create/Submit */}
          <Link href="/submit">
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-2 text-neon-pink hover:text-white hover:bg-neon-pink/20"
            >
              <PlusCircle className="h-5 w-5" />
              <span className="hidden sm:inline">Create</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
