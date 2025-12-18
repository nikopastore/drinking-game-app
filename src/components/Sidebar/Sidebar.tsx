"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "./SidebarContext";
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
  Globe,
  Skull,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const topNavItems: NavItem[] = [
  { href: "/favorites", label: "Favourites", icon: <Star className="h-5 w-5" /> },
  { href: "/recent", label: "Recent", icon: <Clock className="h-5 w-5" /> },
  { href: "/shop", label: "Shop", icon: <ShoppingBag className="h-5 w-5" /> },
];

const categoryNavItems: NavItem[] = [
  { href: "/games", label: "All Games", icon: <Flame className="h-5 w-5" /> },
  { href: "/games/card-games", label: "Card Games", icon: <Spade className="h-5 w-5" /> },
  { href: "/games/cup-games", label: "Cup Games", icon: <Beer className="h-5 w-5" /> },
  { href: "/games/dice-games", label: "Dice Games", icon: <Dice5 className="h-5 w-5" /> },
  { href: "/games/no-props", label: "No Props", icon: <Hand className="h-5 w-5" /> },
  { href: "/games/two-player", label: "Two Player", icon: <Users className="h-5 w-5" /> },
  { href: "/games/large-groups", label: "Large Groups", icon: <Users className="h-5 w-5" /> },
  { href: "/games/beer-games", label: "Beer Games", icon: <Beer className="h-5 w-5" /> },
  { href: "/games/quick-easy", label: "Quick & Easy", icon: <Zap className="h-5 w-5" /> },
  { href: "/games/extreme", label: "Extreme", icon: <Skull className="h-5 w-5" /> },
];

function NavItemButton({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const { isExpanded } = useSidebar();

  return (
    <Link
      href={item.href}
      className={`
        group relative flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200
        ${isActive
          ? "bg-neon-pink/20 text-neon-pink"
          : "text-gray-400 hover:bg-dark-700 hover:text-white"
        }
        ${isExpanded ? "justify-start" : "justify-center"}
      `}
    >
      <span className={`flex-shrink-0 ${isActive ? "text-neon-pink" : ""}`}>
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
  const pathname = usePathname();

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
        {/* Top Section */}
        <div className="pb-2 mb-2 border-b border-dark-600">
          {topNavItems.map((item) => (
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
              Categories
            </span>
          </div>
        )}

        {categoryNavItems.map((item) => (
          <NavItemButton
            key={item.href}
            item={item}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
    </aside>
  );
}
