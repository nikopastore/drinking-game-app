"use client";

import { useState, useMemo } from "react";
import { X, Search, Plus, Check, ChevronDown, ChevronUp } from "lucide-react";
import { ingredientCategories } from "@/config/cabinetIngredients";
import { Button } from "@/components/ui";

interface AddItemsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItems: string[];
  customItems: string[];
  onToggleItem: (item: string) => void;
  onAddCustomItem: (item: string) => void;
  onRemoveCustomItem: (item: string) => void;
}

export function AddItemsModal({
  isOpen,
  onClose,
  selectedItems,
  customItems,
  onToggleItem,
  onAddCustomItem,
  onRemoveCustomItem,
}: AddItemsModalProps) {
  const [search, setSearch] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(ingredientCategories.map((c) => c.name))
  );

  const toggleCategory = (name: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return ingredientCategories;

    const searchLower = search.toLowerCase();
    return ingredientCategories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          item.toLowerCase().includes(searchLower)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [search]);

  const handleAddCustom = () => {
    const trimmed = customInput.trim();
    if (trimmed && !customItems.includes(trimmed)) {
      onAddCustomItem(trimmed);
      setCustomInput("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-dark-800 rounded-2xl w-full max-w-lg max-h-[85vh] flex flex-col border border-dark-600 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-dark-600">
          <h2 className="text-xl font-bold text-white">Add to Your Cabinet</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-dark-600">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search ingredients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-dark-700 border border-dark-600 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple"
            />
          </div>
        </div>

        {/* Ingredient List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {filteredCategories.map((category) => (
            <div key={category.name}>
              <button
                onClick={() => toggleCategory(category.name)}
                className="flex items-center justify-between w-full py-2 text-left"
              >
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {category.name}
                </span>
                {expandedCategories.has(category.name) ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </button>

              {expandedCategories.has(category.name) && (
                <div className="grid grid-cols-1 gap-1 mt-1">
                  {category.items.map((item) => {
                    const isSelected = selectedItems.includes(item);
                    return (
                      <button
                        key={item}
                        onClick={() => onToggleItem(item)}
                        className={`
                          flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors
                          ${
                            isSelected
                              ? "bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                              : "bg-dark-700 text-gray-300 hover:bg-dark-600 border border-transparent"
                          }
                        `}
                      >
                        <span className="text-sm">{item}</span>
                        {isSelected && <Check className="h-4 w-4" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Custom Items Section */}
          <div className="pt-4 border-t border-dark-600">
            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Your Custom Items
            </span>

            {/* Add custom item input */}
            <div className="flex gap-2 mt-2">
              <input
                type="text"
                placeholder="Add custom ingredient..."
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddCustom()}
                className="flex-1 bg-dark-700 border border-dark-600 rounded-lg py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-purple text-sm"
              />
              <Button
                onClick={handleAddCustom}
                disabled={!customInput.trim()}
                className="bg-neon-purple hover:bg-neon-purple/90 text-white px-3"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            {/* List custom items */}
            {customItems.length > 0 && (
              <div className="grid grid-cols-1 gap-1 mt-2">
                {customItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-neon-purple/20 text-neon-purple border border-neon-purple/30"
                  >
                    <span className="text-sm">{item}</span>
                    <button
                      onClick={() => onRemoveCustomItem(item)}
                      className="p-1 hover:bg-dark-600 rounded"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-dark-600">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">
              {selectedItems.length + customItems.length} items selected
            </span>
            <Button
              onClick={onClose}
              className="bg-neon-purple hover:bg-neon-purple/90 text-white px-6"
            >
              Done
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
