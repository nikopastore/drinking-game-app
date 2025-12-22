"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";

export type AppMode = "games" | "cocktails";

interface ModeContextValue {
  mode: AppMode;
  setMode: (mode: AppMode) => void;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextValue | null>(null);

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return ctx;
}

// Helper to set cookie
function setModeCookie(mode: AppMode) {
  // Set cookie with 1 year expiry
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  document.cookie = `sipwiki-mode=${mode};path=/;expires=${expires.toUTCString()};SameSite=Lax`;
}

// Helper to get cookie
function getModeCookie(): AppMode | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/sipwiki-mode=(games|cocktails)/);
  return match ? (match[1] as AppMode) : null;
}

interface ModeProviderProps {
  children: ReactNode;
}

export function ModeProvider({ children }: ModeProviderProps) {
  const [mode, setModeState] = useState<AppMode>("games");
  const pathname = usePathname();

  // Auto-detect mode from URL
  useEffect(() => {
    if (pathname.startsWith("/cocktail") || pathname.startsWith("/cocktails")) {
      setModeState("cocktails");
    } else if (pathname.startsWith("/game") || pathname.startsWith("/games")) {
      setModeState("games");
    }
    // For other routes (spin, shop, favorites, home), keep current mode from cookie/state
  }, [pathname]);

  // Load preference from cookie on mount
  useEffect(() => {
    const saved = getModeCookie();
    if (saved) {
      setModeState(saved);
    }
  }, []);

  // Save preference to cookie and localStorage
  const setMode = (newMode: AppMode) => {
    setModeState(newMode);
    setModeCookie(newMode);
    localStorage.setItem("sipwiki-mode", newMode);
  };

  const toggleMode = () => {
    const newMode = mode === "games" ? "cocktails" : "games";
    setMode(newMode);
  };

  return (
    <ModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}
