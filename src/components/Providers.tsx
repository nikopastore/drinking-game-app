"use client";

import { Suspense, useEffect, useState } from "react";
import { useAppStore } from "@/lib/store";
import { RatingModal } from "@/components/RatingModal";
import { AuthProvider } from "@/components/auth";
import { useRouter } from "next/navigation";

function ProvidersContent({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { pendingRating, setPendingRating, checkExpiredSession } = useAppStore();
  const [showRatingModal, setShowRatingModal] = useState(false);

  // Check for expired session on app load
  useEffect(() => {
    // Small delay to ensure hydration is complete
    const timer = setTimeout(() => {
      checkExpiredSession();
    }, 500);

    return () => clearTimeout(timer);
  }, [checkExpiredSession]);

  // Show rating modal when there's a pending rating
  useEffect(() => {
    if (pendingRating) {
      setShowRatingModal(true);
    }
  }, [pendingRating]);

  const handleRatingComplete = () => {
    const slug = pendingRating?.slug;
    setPendingRating(null);
    setShowRatingModal(false);
    if (slug) {
      router.push(`/game/${slug}`);
    }
  };

  const handleRatingSkip = () => {
    setPendingRating(null);
    setShowRatingModal(false);
  };

  return (
    <AuthProvider>
      {children}
      {pendingRating && (
        <RatingModal
          isOpen={showRatingModal}
          gameName={pendingRating.name}
          gameSlug={pendingRating.slug}
          onComplete={handleRatingComplete}
          onSkip={handleRatingSkip}
        />
      )}
    </AuthProvider>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark-900" />}>
      <ProvidersContent>{children}</ProvidersContent>
    </Suspense>
  );
}
