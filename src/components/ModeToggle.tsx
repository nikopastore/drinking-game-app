"use client";

import { useMode, AppMode } from "@/contexts/ModeContext";
import { Dice5, Martini } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ModeToggle() {
  const { mode, setMode } = useMode();
  const router = useRouter();

  const handleModeChange = (newMode: AppMode) => {
    setMode(newMode);
    // Navigate to the appropriate landing page
    if (newMode === "games") {
      router.push("/games");
    } else {
      router.push("/cocktails");
    }
  };

  return (
    <div className="flex items-center bg-dark-800 rounded-full p-1 border border-dark-600">
      <button
        onClick={() => handleModeChange("games")}
        className={`
          flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
          ${mode === "games"
            ? "bg-neon-pink text-white shadow-lg shadow-neon-pink/25"
            : "text-gray-400 hover:text-white"
          }
        `}
      >
        <Dice5 className="h-4 w-4" />
        <span className="hidden sm:inline">Games</span>
      </button>
      <button
        onClick={() => handleModeChange("cocktails")}
        className={`
          flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200
          ${mode === "cocktails"
            ? "bg-neon-purple text-white shadow-lg shadow-neon-purple/25"
            : "text-gray-400 hover:text-white"
          }
        `}
      >
        <Martini className="h-4 w-4" />
        <span className="hidden sm:inline">Cocktails</span>
      </button>
    </div>
  );
}

// Compact version for mobile nav
export function ModeToggleCompact() {
  const { mode, setMode } = useMode();
  const router = useRouter();

  const handleModeChange = (newMode: AppMode) => {
    setMode(newMode);
    if (newMode === "games") {
      router.push("/games");
    } else {
      router.push("/cocktails");
    }
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => handleModeChange("games")}
        className={`
          p-2 rounded-lg transition-all duration-200
          ${mode === "games"
            ? "bg-neon-pink/20 text-neon-pink"
            : "text-gray-400 hover:text-white"
          }
        `}
        aria-label="Games mode"
      >
        <Dice5 className="h-5 w-5" />
      </button>
      <button
        onClick={() => handleModeChange("cocktails")}
        className={`
          p-2 rounded-lg transition-all duration-200
          ${mode === "cocktails"
            ? "bg-neon-purple/20 text-neon-purple"
            : "text-gray-400 hover:text-white"
          }
        `}
        aria-label="Cocktails mode"
      >
        <Martini className="h-5 w-5" />
      </button>
    </div>
  );
}
