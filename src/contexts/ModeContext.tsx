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
    } else if (pathname.startsWith("/game") || pathname.startsWith("/games") || pathname === "/") {
      setModeState("games");
    }
    // For other routes (spin, shop, favorites), keep current mode
  }, [pathname]);

  // Load preference from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("sipwiki-mode");
    if (saved === "games" || saved === "cocktails") {
      setModeState(saved);
    }
  }, []);

  // Save preference to localStorage
  const setMode = (newMode: AppMode) => {
    setModeState(newMode);
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
