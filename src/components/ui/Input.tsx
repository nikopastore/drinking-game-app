"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const fieldStyles = "w-full rounded-2xl border border-white/10 bg-dark-700/75 px-4 py-3 text-white placeholder:text-muted focus:border-neon-pink focus:outline-none focus:ring-2 focus:ring-neon-pink/25 transition";

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error, ...props }, ref) => (
  <div className="w-full">
    <input ref={ref} className={cn(fieldStyles, error && "border-red-500", className)} {...props} />
    {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
  </div>
));
Input.displayName = "Input";

const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: string }>(
  ({ className, error, ...props }, ref) => (
    <div className="w-full">
      <textarea ref={ref} className={cn(fieldStyles, "resize-none", error && "border-red-500", className)} {...props} />
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  )
);
Textarea.displayName = "Textarea";

export { Input, Textarea };
