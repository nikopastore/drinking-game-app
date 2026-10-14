"use client";

import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { HTMLAttributes, forwardRef, useEffect, useRef, useId } from "react";
import { Button } from "./Button";

// Dialogs can overlap (for example, a sign-in prompt above another modal).
const scrollLocks = new WeakMap<HTMLElement, { count: number; overflow: string }>();
function lockScroll() {
  const body = document.body;
  const lock = scrollLocks.get(body) ?? { count: 0, overflow: body.style.overflow };
  lock.count++; scrollLocks.set(body, lock); body.style.overflow = "hidden";
  return () => {
    if (--lock.count === 0) { body.style.overflow = lock.overflow; scrollLocks.delete(body); }
  };
}

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: "sm" | "md" | "lg";
  placement?: "center" | "bottom";
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, size = "md", placement = "center", className, children, ...props }, ref) => {
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const titleId = useId();
    const closeRef = useRef(onClose);
    useEffect(() => { closeRef.current = onClose; }, [onClose]);

    useEffect(() => {
      if (!isOpen) return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const unlockScroll = lockScroll();
      const handleEscape = (e: KeyboardEvent) => {
        const dialogs = document.querySelectorAll('[role="dialog"][aria-modal="true"]');
        if (dialogs[dialogs.length - 1] !== dialog) return;
        if (e.key === "Escape") { e.preventDefault(); closeRef.current(); }
        if (e.key !== "Tab") return;
        const focusable = Array.from(dialog.querySelectorAll<HTMLElement>('button, a[href], input, textarea, select, [tabindex]'))
          .filter((node) => node.tabIndex >= 0 && !node.matches(':disabled') && !node.closest('[hidden], [inert]') && getComputedStyle(node).display !== "none");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first) { e.preventDefault(); dialog.focus(); return; }
        if (e.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement) || document.activeElement === dialog)) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement) || document.activeElement === dialog)) {
          e.preventDefault(); first.focus();
        }
      };
      document.addEventListener("keydown", handleEscape);
      dialog.focus();
      return () => {
        document.removeEventListener("keydown", handleEscape);
        unlockScroll();
        const remaining = Array.from(document.querySelectorAll<HTMLElement>('[role="dialog"][aria-modal="true"]')).filter((node) => node !== dialog);
        const top = remaining[remaining.length - 1];
        if (previousFocus?.isConnected && (!top || top.contains(previousFocus))) previousFocus.focus();
        else if (top && !top.contains(document.activeElement)) top.focus();
      };
    }, [isOpen]);

    if (!isOpen) return null;

    const sizes = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
    };

    return (
      <div className={cn("fixed inset-0 z-50 flex justify-center", placement === "bottom" ? "items-end md:items-center" : "items-center")}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? titleId : undefined}
          aria-label={title ? undefined : "SipWiki dialog"}
          tabIndex={-1}
          ref={(node) => {
            dialogRef.current = node;
            if (typeof ref === "function") ref(node);
            else if (ref) ref.current = node;
          }}
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
              <h2 id={titleId} className="text-lg font-semibold text-white">{title}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="p-1"
                aria-label="Close dialog"
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
