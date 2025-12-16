"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "pink" | "blue" | "green" | "purple" | "yellow" | "muted";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-dark-700 text-gray-300",
      pink: "bg-neon-pink/20 text-neon-pink border border-neon-pink/30",
      blue: "bg-neon-blue/20 text-neon-blue border border-neon-blue/30",
      green: "bg-neon-green/20 text-neon-green border border-neon-green/30",
      purple: "bg-neon-purple/20 text-neon-purple border border-neon-purple/30",
      yellow: "bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/30",
      muted: "bg-dark-600 text-muted",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
