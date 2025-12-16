"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { HTMLAttributes, forwardRef, useEffect } from "react";
import { Button } from "./Button";

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg";
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, size = "md", className, children, ...props }, ref) => {
    // Handle escape key
    useEffect(() => {
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };

      if (isOpen) {
        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";
      }

      return () => {
        document.removeEventListener("keydown", handleEscape);
        document.body.style.overflow = "unset";
      };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const sizes = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
    };

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div
          ref={ref}
          className={cn(
            "relative w-full mx-4 bg-dark-800 border border-dark-600 rounded-xl shadow-2xl",
            sizes[size],
            className
          )}
          {...props}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between p-4 border-b border-dark-600">
              <h2 className="text-lg font-semibold text-white">{title}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="p-1"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Content */}
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  }
);

Modal.displayName = "Modal";

export { Modal };
