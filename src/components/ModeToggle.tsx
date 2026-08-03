"use client";

import { Dice5, Martini } from "lucide-react";
import { useRouter } from "next/navigation";
import { AppMode, useMode } from "@/contexts/ModeContext";
import { cn } from "@/lib/utils";

export function ModeToggle() {
  const { mode, setMode } = useMode();
  const router = useRouter();

  const selectMode = (nextMode: AppMode) => {
    setMode(nextMode);
    router.push(nextMode === "games" ? "/games" : "/cocktails");
  };

  return (
    <div className="flex items-center rounded-full border border-white/10 bg-dark-800 p-1">
      <button
        type="button"
        onClick={() => selectMode("games")}
        className={cn(
          "flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-bold transition",
          mode === "games" ? "bg-[#fff7eb] text-dark-900 shadow-sm" : "text-muted hover:text-white"
        )}
        aria-pressed={mode === "games"}
      >
        <Dice5 className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Games</span>
      </button>
      <button
        type="button"
        onClick={() => selectMode("cocktails")}
        className={cn(
          "flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-bold transition",
          mode === "cocktails" ? "bg-neon-purple text-white shadow-sm" : "text-muted hover:text-white"
        )}
        aria-pressed={mode === "cocktails"}
      >
        <Martini className="h-3.5 w-3.5" />
        <span className="hidden sm:inline">Cocktails</span>
      </button>
    </div>
  );
}

export function ModeToggleCompact() {
  return <ModeToggle />;
}
