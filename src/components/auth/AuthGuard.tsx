"use client";

import { useAuth } from "@/lib/auth";
import { useState, useCallback, ReactNode } from "react";
import { AuthModal } from "./AuthModal";

interface AuthGuardProps {
  children: (props: { onClick: () => void }) => ReactNode;
  onAuthenticated: () => void;
  gameName?: string;
}

/**
 * AuthGuard wraps interactive elements that require authentication.
 * It intercepts clicks and shows the auth modal if the user is not logged in.
 *
 * Usage:
 * <AuthGuard onAuthenticated={() => router.push(`/game/${slug}`)} gameName={game.name}>
 *   {({ onClick }) => (
 *     <button onClick={onClick}>Play Game</button>
 *   )}
 * </AuthGuard>
 */
export function AuthGuard({ children, onAuthenticated, gameName }: AuthGuardProps) {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleClick = useCallback(() => {
    if (loading) return;

    if (user) {
      // User is authenticated, proceed
      onAuthenticated();
    } else {
      // Show auth modal
      setShowAuthModal(true);
    }
  }, [user, loading, onAuthenticated]);

  const handleAuthModalClose = useCallback(() => {
    setShowAuthModal(false);
  }, []);

  return (
    <>
      {children({ onClick: handleClick })}
      <AuthModal
        isOpen={showAuthModal}
        onClose={handleAuthModalClose}
        gameName={gameName}
      />
    </>
  );
}

/**
 * Hook version for more flexible usage
 */
export function useAuthGuard() {
  const { user, loading } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);
  const [pendingGameName, setPendingGameName] = useState<string | undefined>();

  const requireAuth = useCallback(
    (action: () => void, gameName?: string) => {
      if (loading) return;

      if (user) {
        action();
      } else {
        setPendingAction(() => action);
        setPendingGameName(gameName);
        setShowAuthModal(true);
      }
    },
    [user, loading]
  );

  const closeAuthModal = useCallback(() => {
    setShowAuthModal(false);
    setPendingAction(null);
    setPendingGameName(undefined);
  }, []);

  // Execute pending action when user becomes authenticated
  // This is handled by the auth callback redirect, so we don't need to do it here

  return {
    isAuthenticated: !!user,
    isLoading: loading,
    requireAuth,
    showAuthModal,
    closeAuthModal,
    pendingGameName,
  };
}
