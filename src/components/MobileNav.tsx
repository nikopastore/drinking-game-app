"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Archive, CircleDot, Compass, Martini, Search, ShoppingBag } from "lucide-react";
import { useMode } from "@/contexts/ModeContext";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const { mode } = useMode();
  const items = [
    mode === "games"
      ? { href: "/games", label: "Discover", icon: Compass }
      : { href: "/cocktails", label: "Drinks", icon: Martini },
    { href: "/search", label: "Search", icon: Search },
    mode === "games"
      ? { href: "/spin", label: "Spin", icon: CircleDot }
      : { href: "/liquor-cabinet", label: "Cabinet", icon: Archive },
    { href: "/shop", label: "Shop", icon: ShoppingBag },
  ];

  return (
    <nav className="safe-area-bottom fixed inset-x-3 bottom-3 z-50 rounded-[1.35rem] border border-white/10 bg-dark-800/94 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,.48)] backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
      <div className="grid grid-cols-4 gap-1">
        {items.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[11px] font-bold transition",
                active ? "bg-[#fff7eb] text-dark-900" : "text-muted hover:bg-white/5 hover:text-white"
              )}
              aria-current={active ? "page" : undefined}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
