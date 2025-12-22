"use client";

import { Check, X, Minus } from "lucide-react";

interface ComparisonColumn {
  header: string;
  link?: string;
}

interface ComparisonRow {
  label: string;
  values: Array<string | boolean | number | null>;
  /**
   * Optional helper text for the row
   */
  helper?: string;
}

interface ComparisonTableProps {
  title?: string;
  description?: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  /**
   * Highlight a specific column (0-indexed)
   */
  highlightColumn?: number;
}

/**
 * ComparisonTable Component
 *
 * Optimized for featured snippets and AI citations
 *
 * Features:
 * - Semantic HTML table structure
 * - Mobile responsive
 * - Visual indicators (checkmarks, X's)
 * - Highlighted recommended option
 *
 * Perfect for:
 * - "Best X vs Y" comparisons
 * - Feature comparison tables
 * - Game difficulty/player count matrices
 *
 * Usage:
 * ```tsx
 * <ComparisonTable
 *   title="Beer Pong vs Flip Cup: Which is Better?"
 *   columns={[
 *     { header: "Feature" },
 *     { header: "Beer Pong", link: "/guides/beer-pong-rules" },
 *     { header: "Flip Cup", link: "/guides/flip-cup-rules" },
 *   ]}
 *   rows={[
 *     { label: "Players", values: ["", "2-4", "4-20"] },
 *     { label: "Skill Required", values: ["", "Medium", "Low"] },
 *     { label: "Team Game", values: ["", true, true] },
 *   ]}
 * />
 * ```
 */
export function ComparisonTable({
  title,
  description,
  columns,
  rows,
  highlightColumn,
}: ComparisonTableProps) {
  const renderCellValue = (value: string | boolean | number | null) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="h-5 w-5 text-green-400 mx-auto" />
      ) : (
        <X className="h-5 w-5 text-red-400 mx-auto" />
      );
    }

    if (value === null || value === "") {
      return <Minus className="h-5 w-5 text-gray-600 mx-auto" />;
    }

    return <span className="text-gray-200">{value}</span>;
  };

  return (
    <div className="w-full">
      {title && (
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      )}
      {description && (
        <p className="text-gray-400 mb-6">{description}</p>
      )}

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse bg-dark-800 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-dark-700">
              {columns.map((col, index) => (
                <th
                  key={index}
                  className={`px-6 py-4 text-left font-semibold ${
                    highlightColumn === index
                      ? "bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 text-white"
                      : "text-gray-300"
                  }`}
                >
                  {col.link ? (
                    <a
                      href={col.link}
                      className="hover:text-neon-blue transition-colors"
                    >
                      {col.header}
                    </a>
                  ) : (
                    col.header
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-dark-700 hover:bg-dark-700/50 transition-colors"
              >
                {row.values.map((value, colIndex) => {
                  const isFirstColumn = colIndex === 0;
                  const isHighlighted = highlightColumn === colIndex;

                  return (
                    <td
                      key={colIndex}
                      className={`px-6 py-4 ${
                        isFirstColumn ? "font-medium text-white" : "text-center"
                      } ${
                        isHighlighted
                          ? "bg-gradient-to-br from-neon-pink/10 to-neon-blue/10"
                          : ""
                      }`}
                    >
                      {isFirstColumn ? (
                        <div>
                          <div>{row.label}</div>
                          {row.helper && (
                            <div className="text-xs text-gray-500 mt-1">
                              {row.helper}
                            </div>
                          )}
                        </div>
                      ) : (
                        renderCellValue(value)
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-4">
        {columns.slice(1).map((col, colIndex) => (
          <div
            key={colIndex}
            className={`rounded-lg border p-4 ${
              highlightColumn === colIndex + 1
                ? "bg-gradient-to-br from-neon-pink/10 to-neon-blue/10 border-neon-pink/30"
                : "bg-dark-800 border-dark-700"
            }`}
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              {col.link ? (
                <a href={col.link} className="hover:text-neon-blue">
                  {col.header}
                </a>
              ) : (
                col.header
              )}
            </h3>
            <div className="space-y-3">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{row.label}</span>
                  <span className="text-sm font-medium">
                    {renderCellValue(row.values[colIndex + 1])}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * GameComparisonTable Component
 *
 * Pre-configured for comparing drinking games
 */
interface GameComparisonProps {
  games: Array<{
    name: string;
    slug: string;
    players: string;
    difficulty: "Easy" | "Medium" | "Hard";
    duration: string;
    materials: string;
    drunkenness: number; // 1-5 scale
    teamGame: boolean;
  }>;
  highlightGame?: string; // slug of game to highlight
}

export function GameComparisonTable({
  games,
  highlightGame,
}: GameComparisonProps) {
  const highlightIndex = highlightGame
    ? games.findIndex((g) => g.slug === highlightGame) + 1
    : undefined;

  const columns: ComparisonColumn[] = [
    { header: "Feature" },
    ...games.map((game) => ({
      header: game.name,
      link: `/game/${game.slug}`,
    })),
  ];

  const rows: ComparisonRow[] = [
    {
      label: "Players",
      values: ["", ...games.map((g) => g.players)],
    },
    {
      label: "Difficulty",
      values: ["", ...games.map((g) => g.difficulty)],
    },
    {
      label: "Duration",
      values: ["", ...games.map((g) => g.duration)],
    },
    {
      label: "Materials Needed",
      values: ["", ...games.map((g) => g.materials)],
    },
    {
      label: "Drunkenness Level",
      values: ["", ...games.map((g) => `${g.drunkenness}/5`)],
      helper: "How drunk you'll get",
    },
    {
      label: "Team Game",
      values: ["", ...games.map((g) => g.teamGame)],
    },
  ];

  return (
    <ComparisonTable
      title="Game Comparison"
      description="Compare features to find the perfect game for your party"
      columns={columns}
      rows={rows}
      highlightColumn={highlightIndex}
    />
  );
}
