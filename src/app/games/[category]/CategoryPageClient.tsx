"use client";

import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Sidebar, useSidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";

interface CategoryPageClientProps {
  children: ReactNode;
}

export function CategoryPageClient({ children }: CategoryPageClientProps) {
  const { isExpanded } = useSidebar();

  return (
    <div className="min-h-screen bg-dark-900">
      <Header />
      <Sidebar />

      <main
        className={`
          max-w-7xl mx-auto px-4 py-8 pb-24 md:pb-8
          transition-all duration-300 ease-in-out
          ${isExpanded ? "md:ml-56" : "md:ml-16"}
        `}
      >
        {children}
      </main>

      <MobileNav />
    </div>
  );
}
