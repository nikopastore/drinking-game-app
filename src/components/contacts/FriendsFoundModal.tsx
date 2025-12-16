"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Friend } from "@/types";

interface FriendsFoundModalProps {
  isOpen: boolean;
  friends: Friend[];
  onClose: () => void;
}

export function FriendsFoundModal({
  isOpen,
  friends,
  onClose,
}: FriendsFoundModalProps) {
  if (!isOpen) return null;

  const hasFriends = friends.length > 0;

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
          {/* Decorative glows */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="relative p-8">
            {hasFriends ? (
              <>
                {/* Celebration animation */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2, damping: 15 }}
                  className="flex justify-center mb-6"
                >
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center">
                      <span className="text-5xl">🎉</span>
                    </div>
                    {/* Confetti-like sparkles */}
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          x: [0, (i % 2 === 0 ? 1 : -1) * (20 + i * 10)],
                          y: [0, -20 - i * 5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full ${
                          ["bg-yellow-400", "bg-pink-400", "bg-cyan-400", "bg-green-400", "bg-purple-400", "bg-orange-400"][i]
                        }`}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Headline */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl font-bold text-center text-white mb-2"
                >
                  {friends.length === 1
                    ? "You Have a Friend Here!"
                    : `${friends.length} Friends Found!`}
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center text-gray-400 mb-6"
                >
                  {friends.length === 1
                    ? "Someone you know is already partying on SipWiki"
                    : "These people you know are already partying on SipWiki"}
                </motion.p>

                {/* Friends list */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="max-h-64 overflow-y-auto mb-6 space-y-3"
                >
                  {friends.map((friend, index) => (
                    <motion.div
                      key={friend.friend_id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/10"
                    >
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        {friend.avatar_url ? (
                          <img
                            src={friend.avatar_url}
                            alt={friend.display_name || "Friend"}
                            className="w-12 h-12 rounded-full object-cover border-2 border-green-400/50"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg border-2 border-green-400/50">
                            {(friend.display_name || "?")[0].toUpperCase()}
                          </div>
                        )}
                        {/* Online indicator */}
                        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-800" />
                      </div>

                      {/* Name */}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white truncate">
                          {friend.display_name || "SipWiki User"}
                        </p>
                        <p className="text-sm text-gray-500">Already on SipWiki</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            ) : (
              <>
                {/* No friends found */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                    <svg
                      className="w-14 h-14 text-gray-400"
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
                </div>

                <h2 className="text-2xl font-bold text-center text-white mb-3">
                  No Friends Found Yet
                </h2>

                <p className="text-center text-gray-400 mb-6 leading-relaxed">
                  None of your contacts are on SipWiki yet. Be the first to invite them and earn rewards when they join!
                </p>
              </>
            )}

            {/* CTA Button */}
            <button
              onClick={onClose}
              className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-semibold rounded-2xl transition-all duration-200 shadow-lg shadow-green-500/25 hover:shadow-green-500/40"
            >
              {hasFriends ? "Let's Party!" : "Start Playing"}
            </button>

            {/* Share CTA for no friends */}
            {!hasFriends && (
              <button
                onClick={() => {
                  // TODO: Implement share functionality
                  if (navigator.share) {
                    navigator.share({
                      title: "SipWiki - Drinking Games",
                      text: "Join me on SipWiki for the best drinking games!",
                      url: window.location.origin,
                    }).catch(() => {});
                  }
                }}
                className="w-full mt-3 py-3 px-6 text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
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
                    d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                  />
                </svg>
                Invite Friends
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
