"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContacts } from "@/lib/contacts/useContacts";
import { Friend } from "@/types";

interface ContactSyncPromptProps {
  isOpen: boolean;
  userId: string;
  onClose: () => void;
  onFriendsFound: (friends: Friend[]) => void;
  onSkip: () => void;
}

export function ContactSyncPrompt({
  isOpen,
  userId,
  onClose,
  onFriendsFound,
  onSkip,
}: ContactSyncPromptProps) {
  const { syncContacts, isLoading, error } = useContacts();
  const [syncError, setSyncError] = useState<string | null>(null);

  const handleFindFriends = async () => {
    setSyncError(null);
    const result = await syncContacts(userId);

    if (result.error) {
      setSyncError(result.error);
      return;
    }

    if (result.skipped) {
      // On web or permission denied - close and continue
      onSkip();
      return;
    }

    // Success - pass friends to parent
    onFriendsFound(result.friends);
  };

  const handleMaybeLater = () => {
    onSkip();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

          <div className="relative p-8">
            {/* Friends illustration */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                  <svg
                    className="w-14 h-14 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </div>
                {/* Animated sparkles */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full"
                />
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  className="absolute -bottom-1 -left-1 w-3 h-3 bg-cyan-400 rounded-full"
                />
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl font-bold text-center text-white mb-3">
              Find Your Friends on SipWiki
            </h2>

            {/* Subtext */}
            <p className="text-center text-gray-400 mb-8 leading-relaxed">
              See which of your contacts are already partying here. Your contacts are hashed for privacy and never stored as plain text.
            </p>

            {/* Error message */}
            {(syncError || error) && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm text-center">
                {syncError || error}
              </div>
            )}

            {/* Primary CTA */}
            <button
              onClick={handleFindFriends}
              disabled={isLoading}
              className="w-full py-4 px-6 mb-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                  Finding Friends...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                  Yes, Find My Friends
                </>
              )}
            </button>

            {/* Secondary action */}
            <button
              onClick={handleMaybeLater}
              disabled={isLoading}
              className="w-full py-3 px-6 text-gray-400 hover:text-white font-medium transition-colors duration-200 disabled:opacity-50"
            >
              Maybe Later
            </button>

            {/* Privacy note */}
            <p className="mt-6 text-xs text-center text-gray-500">
              We only check for matches. Your contact info stays private.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
