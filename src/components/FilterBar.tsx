"use client";

import { FilterState } from "@/types";
import { Input, Button } from "@/components/ui";
import { Search, X, Users, Package, Wine } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
}

const playerOptions = [
  { label: "Any", value: null },
  { label: "2", value: 2 },
  { label: "3-5", value: 4 },
  { label: "6-10", value: 8 },
  { label: "10+", value: 12 },
];

const materialOptions = [
  "cards",
  "dice",
  "cups",
  "ping pong balls",
  "no prop",
];

const alcoholOptions = [
  { label: "Any", value: null },
  { label: "Beer/Seltzer", value: "beer" as const },
  { label: "Liquor", value: "liquor" as const },
];

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  const updateFilter = <K extends keyof FilterState>(
    key: K,
    value: FilterState[K]
  ) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const toggleMaterial = (material: string) => {
    const newMaterials = filters.materials.includes(material)
      ? filters.materials.filter((m) => m !== material)
      : [...filters.materials, material];
    updateFilter("materials", newMaterials);
  };

  const clearFilters = () => {
    onFilterChange({
      playerCount: null,
      materials: [],
      alcoholType: null,
      search: "",
    });
  };

  const hasActiveFilters =
    filters.playerCount !== null ||
    filters.materials.length > 0 ||
    filters.alcoholType !== null ||
    filters.search !== "";

  return (
    <div className="space-y-4 p-4 bg-dark-800 rounded-xl border border-dark-600">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
        <Input
          placeholder="Search games..."
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Player Count */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
          <Users className="h-4 w-4 text-neon-blue" />
          Group Size
        </label>
        <div className="flex flex-wrap gap-2">
          {playerOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => updateFilter("playerCount", option.value)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                filters.playerCount === option.value
                  ? "bg-neon-blue text-dark-900"
                  : "bg-dark-700 text-gray-300 hover:bg-dark-600"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
          <Package className="h-4 w-4 text-neon-pink" />
          Materials
        </label>
        <div className="flex flex-wrap gap-2">
          {materialOptions.map((material) => (
            <button
              key={material}
              onClick={() => toggleMaterial(material)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-all capitalize",
                filters.materials.includes(material)
                  ? "bg-neon-pink text-white"
                  : "bg-dark-700 text-gray-300 hover:bg-dark-600"
              )}
            >
              {material === "no prop" ? "No Props" : material}
            </button>
          ))}
        </div>
      </div>

      {/* Alcohol Type */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-2">
          <Wine className="h-4 w-4 text-neon-purple" />
          Drink Type
        </label>
        <div className="flex flex-wrap gap-2">
          {alcoholOptions.map((option) => (
            <button
              key={option.label}
              onClick={() => updateFilter("alcoholType", option.value)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                filters.alcoholType === option.value
                  ? "bg-neon-purple text-white"
                  : "bg-dark-700 text-gray-300 hover:bg-dark-600"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      {hasActiveFilters && (
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="w-full flex items-center justify-center gap-2"
        >
          <X className="h-4 w-4" />
          Clear All Filters
        </Button>
      )}
    </div>
  );
}
