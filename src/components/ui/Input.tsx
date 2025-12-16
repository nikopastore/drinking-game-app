"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={cn(
            "w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-muted",
            "focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-transparent",
            "transition-all duration-200",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

const Textarea = forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }
>(({ className, error, ...props }, ref) => {
  return (
    <div className="w-full">
      <textarea
        ref={ref}
        className={cn(
          "w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-muted",
          "focus:outline-none focus:ring-2 focus:ring-neon-pink focus:border-transparent",
          "transition-all duration-200 resize-none",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

Textarea.displayName = "Textarea";

export { Input, Textarea };
