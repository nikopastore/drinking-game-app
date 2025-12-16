import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ChatMessage, PlaySession } from "@/types";

interface AppState {
  // Play Session
  session: PlaySession | null;
  startSession: (slug: string, name: string) => void;
  endSession: () => void;

  // AI Chat (per session)
  chatHistory: ChatMessage[];
  addMessage: (msg: ChatMessage) => void;
  clearChat: () => void;

  // Rating prompt
  pendingRating: { slug: string; name: string } | null;
  setPendingRating: (data: { slug: string; name: string } | null) => void;

  // Check and handle expired session
  checkExpiredSession: () => void;
}

const ONE_HOUR = 60 * 60 * 1000;

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Session state
      session: null,

      startSession: (slug: string, name: string) => {
        set({
          session: {
            gameSlug: slug,
            gameName: name,
            startedAt: Date.now(),
            isActive: true,
          },
          chatHistory: [], // Clear chat when starting new session
        });
      },

      endSession: () => {
        const { session } = get();
        if (session) {
          // Set pending rating when ending session
          set({
            pendingRating: {
              slug: session.gameSlug,
              name: session.gameName,
            },
            session: null,
            chatHistory: [],
          });
        }
      },

      // Chat state
      chatHistory: [],

      addMessage: (msg: ChatMessage) => {
        set((state) => ({
          chatHistory: [...state.chatHistory, msg],
        }));
      },

      clearChat: () => {
        set({ chatHistory: [] });
      },

      // Rating state
      pendingRating: null,

      setPendingRating: (data) => {
        set({ pendingRating: data });
      },

      // Check for expired session on app load
      checkExpiredSession: () => {
        const { session } = get();
        if (session && Date.now() - session.startedAt > ONE_HOUR) {
          // Session is older than 1 hour, prompt for rating
          set({
            pendingRating: {
              slug: session.gameSlug,
              name: session.gameName,
            },
            session: null,
            chatHistory: [],
          });
        }
      },
    }),
    {
      name: "sipwiki-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        session: state.session,
        pendingRating: state.pendingRating,
        // Don't persist chat history to keep storage small
      }),
    }
  )
);
