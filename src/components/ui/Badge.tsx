"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "pink" | "blue" | "green" | "purple" | "yellow" | "muted";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(({ className, variant = "default", children, ...props }, ref) => {
  const variants = {
    default: "border-white/10 bg-white/5 text-gray-200",
    pink: "border-neon-pink/25 bg-neon-pink/12 text-neon-pink",
    blue: "border-neon-blue/25 bg-neon-blue/12 text-neon-blue",
    green: "border-neon-green/25 bg-neon-green/12 text-neon-green",
    purple: "border-neon-purple/25 bg-neon-purple/12 text-neon-purple",
    yellow: "border-neon-yellow/25 bg-neon-yellow/12 text-neon-yellow",
    muted: "border-white/8 bg-dark-700 text-muted",
  };

  return (
    <span ref={ref} className={cn("inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold", variants[variant], className)} {...props}>
      {children}
    </span>
  );
});
Badge.displayName = "Badge";

export { Badge };
