"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading = false, disabled, children, ...props }, ref) => {
    const variants = {
      primary: "bg-neon-pink text-white shadow-[0_12px_32px_rgba(255,61,129,.26)] hover:bg-[#ff5791] focus:ring-neon-pink",
      secondary: "bg-[#fff7eb] text-dark-900 hover:bg-white focus:ring-white",
      ghost: "text-gray-300 hover:bg-white/6 hover:text-white focus:ring-neon-blue",
      outline: "border border-white/14 bg-white/[.025] text-[#fff7eb] hover:border-neon-pink/60 hover:bg-neon-pink/10 focus:ring-neon-pink",
      danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-500",
    };
    const sizes = {
      sm: "min-h-9 px-3 text-sm",
      md: "min-h-11 px-5 text-sm",
      lg: "min-h-13 px-6 text-base",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:cursor-not-allowed disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />}
        {isLoading ? "Loading?" : children}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };
