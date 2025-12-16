"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";
import { useAuth } from "@/lib/auth/useAuth";
import { AuthModal } from "./AuthModal";
import { ContactSyncPrompt } from "@/components/contacts/ContactSyncPrompt";
import { FriendsFoundModal } from "@/components/contacts/FriendsFoundModal";
import { Friend, UserProfile } from "@/types";

type AuthStep = "idle" | "auth" | "contact-sync" | "friends-found";

interface AuthContextValue {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  isAuthenticated: boolean;
  /** Request auth - opens auth modal if not logged in, returns true if logged in */
  requireAuth: () => boolean;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function useAuthContext() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return ctx;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
    user,
    profile,
    loading,
    signInWithGoogle,
    signInWithApple,
    signOut: authSignOut,
    refreshProfile,
  } = useAuth();

  const [authStep, setAuthStep] = useState<AuthStep>("idle");
  const [foundFriends, setFoundFriends] = useState<Friend[]>([]);

  // Check for auth callback params
  useEffect(() => {
    const authStatus = searchParams.get("auth");
    if (authStatus === "success" && user && !profile?.contacts_synced_at) {
      // User just logged in and hasn't synced contacts - show contact sync prompt
      setAuthStep("contact-sync");
      // Clean up URL
      const url = new URL(window.location.href);
      url.searchParams.delete("auth");
      router.replace(url.pathname + url.search, { scroll: false });
    }
  }, [searchParams, user, profile, router]);

  const requireAuth = useCallback(() => {
    if (user) {
      return true;
    }
    setAuthStep("auth");
    return false;
  }, [user]);

  const handleAuthModalClose = () => {
    setAuthStep("idle");
  };

  const handleContactSyncClose = () => {
    setAuthStep("idle");
  };

  const handleContactSyncSkip = () => {
    setAuthStep("idle");
  };

  const handleFriendsFound = (friends: Friend[]) => {
    setFoundFriends(friends);
    setAuthStep("friends-found");
  };

  const handleFriendsModalClose = () => {
    setFoundFriends([]);
    setAuthStep("idle");
  };

  const handleSignOut = async () => {
    await authSignOut();
    setAuthStep("idle");
    setFoundFriends([]);
  };

  const contextValue: AuthContextValue = {
    user,
    profile,
    loading,
    isAuthenticated: !!user,
    requireAuth,
    signOut: handleSignOut,
    refreshProfile,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}

      {/* Auth Modal */}
      <AuthModal
        isOpen={authStep === "auth"}
        onClose={handleAuthModalClose}
        onGoogleSignIn={signInWithGoogle}
        onAppleSignIn={signInWithApple}
      />

      {/* Contact Sync Prompt - shown after successful OAuth */}
      {user && (
        <ContactSyncPrompt
          isOpen={authStep === "contact-sync"}
          userId={user.id}
          onClose={handleContactSyncClose}
          onFriendsFound={handleFriendsFound}
          onSkip={handleContactSyncSkip}
        />
      )}

      {/* Friends Found Modal - shown after successful contact sync */}
      <FriendsFoundModal
        isOpen={authStep === "friends-found"}
        friends={foundFriends}
        onClose={handleFriendsModalClose}
      />
    </AuthContext.Provider>
  );
}
