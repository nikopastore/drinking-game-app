import { useState, useEffect, useCallback } from "react";
import { cocktails } from "@/config/cocktailData";
import { normalizeIngredient } from "@/config/cabinetIngredients";
import { Cocktail } from "@/types";
import { createClient } from "@/lib/supabase/client";

const STORAGE_KEY = "sipwiki-liquor-cabinet";

export interface LiquorCabinet {
  items: string[];
  customItems: string[];
  updatedAt: string;
}

export interface CocktailMatch {
  cocktail: Cocktail;
  haveIngredients: string[];
  missingIngredients: string[];
  canMake: boolean;
  missingCount: number;
}

const defaultCabinet: LiquorCabinet = {
  items: [],
  customItems: [],
  updatedAt: new Date().toISOString(),
};

// Load cabinet from localStorage
function loadCabinet(): LiquorCabinet {
  if (typeof window === "undefined") return defaultCabinet;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Error loading liquor cabinet:", e);
  }
  return defaultCabinet;
}

// Save cabinet to localStorage
function saveCabinet(cabinet: LiquorCabinet): void {
  if (typeof window === "undefined") return;

  try {
    cabinet.updatedAt = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cabinet));
  } catch (e) {
    console.error("Error saving liquor cabinet:", e);
  }
}

// Supabase sync functions
async function loadCabinetFromSupabase(userId: string): Promise<LiquorCabinet | null> {
  try {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("user_cabinets")
      .select("items, custom_items, updated_at")
      .eq("user_id", userId)
      .single();

    if (error || !data) return null;

    return {
      items: data.items || [],
      customItems: data.custom_items || [],
      updatedAt: data.updated_at || new Date().toISOString(),
    };
  } catch (e) {
    console.error("Error loading cabinet from Supabase:", e);
    return null;
  }
}

async function saveCabinetToSupabase(userId: string, cabinet: LiquorCabinet): Promise<boolean> {
  try {
    const supabase = createClient();
    const { error } = await supabase
      .from("user_cabinets")
      .upsert({
        user_id: userId,
        items: cabinet.items,
        custom_items: cabinet.customItems,
        updated_at: new Date().toISOString(),
      }, {
        onConflict: "user_id",
      });

    if (error) {
      console.error("Error saving cabinet to Supabase:", error);
      return false;
    }
    return true;
  } catch (e) {
    console.error("Error saving cabinet to Supabase:", e);
    return false;
  }
}

// React hook for liquor cabinet with optional Supabase sync
export function useLiquorCabinet(userId?: string | null) {
  const [cabinet, setCabinet] = useState<LiquorCabinet>(defaultCabinet);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  // Load on mount - first from localStorage, then from Supabase if authenticated
  useEffect(() => {
    async function loadData() {
      // Always load from localStorage first
      const localCabinet = loadCabinet();
      setCabinet(localCabinet);
      setIsLoaded(true);

      // If authenticated, try to load from Supabase
      if (userId) {
        setIsSyncing(true);
        const remoteCabinet = await loadCabinetFromSupabase(userId);

        if (remoteCabinet) {
          // Use remote cabinet if it's newer or local is empty
          const localTime = new Date(localCabinet.updatedAt).getTime();
          const remoteTime = new Date(remoteCabinet.updatedAt).getTime();

          if (remoteTime > localTime || localCabinet.items.length === 0) {
            setCabinet(remoteCabinet);
            saveCabinet(remoteCabinet); // Update local storage
          } else if (localCabinet.items.length > 0) {
            // Local is newer, sync to remote
            await saveCabinetToSupabase(userId, localCabinet);
          }
        } else if (localCabinet.items.length > 0) {
          // No remote data but we have local data, sync it up
          await saveCabinetToSupabase(userId, localCabinet);
        }
        setIsSyncing(false);
      }
    }

    loadData();
  }, [userId]);

  // Save when cabinet changes
  useEffect(() => {
    if (isLoaded) {
      saveCabinet(cabinet);

      // Also sync to Supabase if authenticated
      if (userId) {
        saveCabinetToSupabase(userId, cabinet);
      }
    }
  }, [cabinet, isLoaded, userId]);

  const addItem = useCallback((item: string) => {
    setCabinet((prev) => {
      if (prev.items.includes(item)) return prev;
      return { ...prev, items: [...prev.items, item], updatedAt: new Date().toISOString() };
    });
  }, []);

  const removeItem = useCallback((item: string) => {
    setCabinet((prev) => ({
      ...prev,
      items: prev.items.filter((i) => i !== item),
      updatedAt: new Date().toISOString(),
    }));
  }, []);

  const toggleItem = useCallback((item: string) => {
    setCabinet((prev) => {
      if (prev.items.includes(item)) {
        return { ...prev, items: prev.items.filter((i) => i !== item), updatedAt: new Date().toISOString() };
      }
      return { ...prev, items: [...prev.items, item], updatedAt: new Date().toISOString() };
    });
  }, []);

  const addCustomItem = useCallback((item: string) => {
    setCabinet((prev) => {
      const trimmed = item.trim();
      if (!trimmed || prev.customItems.includes(trimmed)) return prev;
      return { ...prev, customItems: [...prev.customItems, trimmed], updatedAt: new Date().toISOString() };
    });
  }, []);

  const removeCustomItem = useCallback((item: string) => {
    setCabinet((prev) => ({
      ...prev,
      customItems: prev.customItems.filter((i) => i !== item),
      updatedAt: new Date().toISOString(),
    }));
  }, []);

  const clearCabinet = useCallback(() => {
    setCabinet({ ...defaultCabinet, updatedAt: new Date().toISOString() });
  }, []);

  const hasItem = useCallback(
    (item: string) => {
      return cabinet.items.includes(item) || cabinet.customItems.includes(item);
    },
    [cabinet]
  );

  const allItems = [...cabinet.items, ...cabinet.customItems];

  return {
    cabinet,
    isLoaded,
    isSyncing,
    items: cabinet.items,
    customItems: cabinet.customItems,
    allItems,
    addItem,
    removeItem,
    toggleItem,
    addCustomItem,
    removeCustomItem,
    clearCabinet,
    hasItem,
  };
}

// Match cocktails based on cabinet contents
export function matchCocktails(cabinetItems: string[]): {
  canMake: CocktailMatch[];
  almostThere: CocktailMatch[];
  needMore: CocktailMatch[];
} {
  const matches: CocktailMatch[] = cocktails.map((cocktail) => {
    const requiredIngredients = cocktail.ingredients.map((i) => i.name);
    const normalizedRequired = requiredIngredients.map(
      (name) => normalizeIngredient(name) || name
    );

    const haveIngredients: string[] = [];
    const missingIngredients: string[] = [];

    normalizedRequired.forEach((ingredient, idx) => {
      if (cabinetItems.includes(ingredient)) {
        haveIngredients.push(requiredIngredients[idx]);
      } else {
        missingIngredients.push(requiredIngredients[idx]);
      }
    });

    return {
      cocktail,
      haveIngredients,
      missingIngredients,
      canMake: missingIngredients.length === 0,
      missingCount: missingIngredients.length,
    };
  });

  // Sort by missing count (ascending)
  matches.sort((a, b) => a.missingCount - b.missingCount);

  return {
    canMake: matches.filter((m) => m.canMake),
    almostThere: matches.filter((m) => m.missingCount === 1),
    needMore: matches.filter((m) => m.missingCount > 1),
  };
}

// Filter matches by base spirit
export function filterMatchesBySpirit(
  matches: CocktailMatch[],
  spirit: string | null
): CocktailMatch[] {
  if (!spirit) return matches;
  return matches.filter((m) => m.cocktail.baseSpirit === spirit);
}
