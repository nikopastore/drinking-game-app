"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Search, CircleDot, ShoppingBag } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { href: "/games", label: "Games", icon: <Flame className="h-6 w-6" /> },
  { href: "/search", label: "Search", icon: <Search className="h-6 w-6" /> },
  { href: "/spin", label: "Spin", icon: <CircleDot className="h-6 w-6" /> },
  { href: "/shop", label: "Shop", icon: <ShoppingBag className="h-6 w-6" /> },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-dark-900 border-t border-dark-600 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex flex-col items-center justify-center gap-1 flex-1 py-2 px-1
                transition-colors duration-200
                ${isActive
                  ? "text-neon-pink"
                  : "text-gray-400 hover:text-white active:text-white"
                }
              `}
            >
              <span className={isActive ? "text-neon-pink" : ""}>
                {item.icon}
              </span>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
