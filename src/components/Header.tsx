"use client";

import Link from "next/link";
import { Wine, CircleDot, PlusCircle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Games", icon: Wine },
  { href: "/spin", label: "Spin", icon: CircleDot },
  { href: "/submit", label: "Submit", icon: PlusCircle },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-dark-900/95 backdrop-blur border-b border-dark-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Wine className="h-8 w-8 text-neon-pink" />
            <span className="text-xl font-bold bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
              SipWiki
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Nav */}
        <nav
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-48 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-dark-800 rounded-lg transition-colors"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
