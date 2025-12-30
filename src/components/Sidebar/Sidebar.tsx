"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarContext";
import { useMode } from "@/contexts/ModeContext";
import {
  Star,
  Clock,
  ShoppingBag,
  Flame,
  Spade,
  Beer,
  Users,
  Zap,
  Hand,
  Dice5,
  Skull,
  Calculator,
  Sparkles,
  CircleDot,
  Martini,
  Wine,
  GlassWater,
  Grape,
  Citrus,
  Leaf,
  Wheat,
  FlaskConical,
  PartyPopper,
  Archive,
} from "lucide-react";

// Custom 4-person icon for Large Groups
function UsersGroup({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Back row - 2 people */}
      <circle cx="7" cy="5" r="2" />
      <circle cx="17" cy="5" r="2" />
      {/* Front row - 2 people */}
      <circle cx="4" cy="11" r="2" />
      <circle cx="20" cy="11" r="2" />
      {/* Body shapes */}
      <path d="M7 9c-2 0-3 1-3 3v1" />
      <path d="M17 9c2 0 3 1 3 3v1" />
      <path d="M4 15c-1.5 0-2.5 1-2.5 2.5V19" />
      <path d="M20 15c1.5 0 2.5 1 2.5 2.5V19" />
      {/* Center connection */}
      <path d="M9 19h6" />
    </svg>
  );
}

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

// Shared nav items for Games mode
const gamesSharedNavItems: NavItem[] = [
  { href: "/favorites", label: "Favourites", icon: <Star className="h-5 w-5" /> },
  { href: "/recent", label: "Recent", icon: <Clock className="h-5 w-5" /> },
  { href: "/spin", label: "Spin", icon: <CircleDot className="h-5 w-5" /> },
  { href: "/shop", label: "Shop", icon: <ShoppingBag className="h-5 w-5" /> },
];

// Shared nav items for Cocktails mode
const cocktailsSharedNavItems: NavItem[] = [
  { href: "/favorites", label: "Favourites", icon: <Star className="h-5 w-5" /> },
  { href: "/recent", label: "Recent", icon: <Clock className="h-5 w-5" /> },
  { href: "/liquor-cabinet", label: "Liquor Cabinet", icon: <Archive className="h-5 w-5" /> },
  { href: "/shop", label: "Shop", icon: <ShoppingBag className="h-5 w-5" /> },
];

// Games mode navigation
const gamesCategoryItems: NavItem[] = [
  { href: "/games", label: "All Games", icon: <Flame className="h-5 w-5" /> },
  { href: "/games/card-games", label: "Card Games", icon: <Spade className="h-5 w-5" /> },
  { href: "/games/cup-games", label: "Cup Games", icon: <Beer className="h-5 w-5" /> },
  { href: "/games/dice-games", label: "Dice Games", icon: <Dice5 className="h-5 w-5" /> },
  { href: "/games/no-props", label: "No Props", icon: <Hand className="h-5 w-5" /> },
  { href: "/games/two-player", label: "Two Player", icon: <Users className="h-5 w-5" /> },
  { href: "/games/large-groups", label: "Large Groups", icon: <UsersGroup className="h-5 w-5" /> },
  { href: "/games/beer-games", label: "Beer Games", icon: <Beer className="h-5 w-5" /> },
  { href: "/games/quick-easy", label: "Quick & Easy", icon: <Zap className="h-5 w-5" /> },
  { href: "/games/extreme", label: "Extreme", icon: <Skull className="h-5 w-5" /> },
];

const gamesToolsItems: NavItem[] = [
  { href: "/party-planner", label: "Party Planner", icon: <Calculator className="h-5 w-5" /> },
  { href: "/quiz/what-drinking-game-are-you", label: "Quiz", icon: <Sparkles className="h-5 w-5" /> },
];

// Cocktails mode navigation
const cocktailsCategoryItems: NavItem[] = [
  { href: "/cocktails", label: "All Cocktails", icon: <Martini className="h-5 w-5" /> },
  { href: "/cocktails/vodka", label: "Vodka", icon: <GlassWater className="h-5 w-5" /> },
  { href: "/cocktails/gin", label: "Gin", icon: <Leaf className="h-5 w-5" /> },
  { href: "/cocktails/rum", label: "Rum", icon: <Citrus className="h-5 w-5" /> },
  { href: "/cocktails/tequila", label: "Tequila", icon: <Citrus className="h-5 w-5" /> },
  { href: "/cocktails/whiskey", label: "Whiskey", icon: <Wheat className="h-5 w-5" /> },
  { href: "/cocktails/wine", label: "Wine", icon: <Grape className="h-5 w-5" /> },
  { href: "/cocktails/shooters", label: "Shooters", icon: <FlaskConical className="h-5 w-5" /> },
  { href: "/cocktails/party", label: "Party Drinks", icon: <PartyPopper className="h-5 w-5" /> },
  { href: "/cocktails/mocktails", label: "Mocktails", icon: <Leaf className="h-5 w-5" /> },
];

const cocktailsToolsItems: NavItem[] = [
  { href: "/bartender-tools", label: "Bartender Tools", icon: <FlaskConical className="h-5 w-5" /> },
  { href: "/cocktail-quiz", label: "Find Your Drink", icon: <Sparkles className="h-5 w-5" /> },
];

function NavItemButton({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const { isExpanded } = useSidebar();
  const { mode } = useMode();

  // Use different accent colors based on mode
  const activeClass = mode === "games"
    ? "bg-neon-pink/20 text-neon-pink"
    : "bg-neon-purple/20 text-neon-purple";

  const activeIconClass = mode === "games" ? "text-neon-pink" : "text-neon-purple";

  return (
    <Link
      href={item.href}
      className={`
        group relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
        ${isActive
          ? activeClass
          : "text-gray-400 hover:bg-dark-700 hover:text-white"
        }
        ${isExpanded ? "justify-start" : "justify-center"}
      `}
    >
      <span className={`flex-shrink-0 ${isActive ? activeIconClass : ""}`}>
        {item.icon}
      </span>

      {/* Label - visible when expanded */}
      {isExpanded && (
        <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
      )}

      {/* Tooltip - visible when collapsed and hovering */}
      {!isExpanded && (
        <div className="
          absolute left-full ml-2 px-2 py-1 bg-dark-700 text-white text-sm rounded-md
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-200 whitespace-nowrap z-50
          pointer-events-none
        ">
          {item.label}
        </div>
      )}
    </Link>
  );
}

export function Sidebar() {
  const { isExpanded } = useSidebar();
  const { mode } = useMode();
  const pathname = usePathname();

  // Select items based on mode
  const sharedNavItems = mode === "games" ? gamesSharedNavItems : cocktailsSharedNavItems;
  const categoryItems = mode === "games" ? gamesCategoryItems : cocktailsCategoryItems;
  const toolsItems = mode === "games" ? gamesToolsItems : cocktailsToolsItems;
  const categoryLabel = mode === "games" ? "Game Categories" : "Spirit Categories";
  const toolsLabel = mode === "games" ? "Tools" : "Bartender";

  return (
    <aside
      className={`
        fixed left-0 top-14 bottom-0 z-30
        bg-dark-900 border-r border-dark-600
        transition-all duration-300 ease-in-out
        overflow-y-auto overflow-x-hidden
        hidden md:block
        ${isExpanded ? "w-56" : "w-16"}
      `}
    >
      <nav className="p-2 space-y-1">
        {/* Top Section (Shared) */}
        <div className="pb-2 mb-2 border-b border-dark-600">
          {sharedNavItems.map((item) => (
            <NavItemButton
              key={item.href}
              item={item}
              isActive={pathname === item.href}
            />
          ))}
        </div>

        {/* Categories Section */}
        {isExpanded && (
          <div className="px-3 py-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {categoryLabel}
            </span>
          </div>
        )}

        {categoryItems.map((item) => (
          <NavItemButton
            key={item.href}
            item={item}
            isActive={pathname === item.href}
          />
        ))}

        {/* Tools Section */}
        <div className="pt-2 mt-2 border-t border-dark-600">
          {isExpanded && (
            <div className="px-3 py-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {toolsLabel}
              </span>
            </div>
          )}

          {toolsItems.map((item) => (
            <NavItemButton
              key={item.href}
              item={item}
              isActive={pathname === item.href || pathname.startsWith(item.href)}
            />
          ))}
        </div>
      </nav>
    </aside>
  );
}
