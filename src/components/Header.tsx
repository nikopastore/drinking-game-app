"use client";

import Link from "next/link";
import { Wine, Search, PlusCircle, Menu, User } from "lucide-react";
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

  const handleAccountClick = () => {
    if (!isAuthenticated) {
      requireAuth();
    }
  };

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

          {/* Center: Mode Toggle - Hidden on mobile */}
          <div className="hidden md:flex items-center">
            <ModeToggle />
          </div>

          {/* Right: Search + Account - Hidden on mobile */}
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

            {/* Account/Login Button */}
            {isAuthenticated ? (
              <Link href="/account">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-dark-700"
                >
                  {user?.user_metadata?.avatar_url ? (
                    <img
                      src={user.user_metadata.avatar_url}
                      alt="Avatar"
                      className="h-6 w-6 rounded-full"
                    />
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                  <span>Account</span>
                </Button>
              </Link>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleAccountClick}
                className="flex items-center gap-2 text-neon-pink hover:text-white hover:bg-neon-pink/20"
              >
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </Button>
            )}
          </div>

          {/* Mobile: Mode Toggle (compact) */}
          <div className="md:hidden">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
