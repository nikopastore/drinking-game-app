import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useAppStore } from './store'
import { act } from '@testing-library/react'

describe('useAppStore', () => {
  beforeEach(() => {
    // Reset store state before each test
    const store = useAppStore.getState()
    act(() => {
      store.endSession()
      store.clearChat()
      store.setPendingRating(null)
    })
  })

  describe('session management', () => {
    it('starts a new session', () => {
      const { startSession } = useAppStore.getState()

      act(() => {
        startSession('beer-pong', 'Beer Pong')
      })

      const { session } = useAppStore.getState()
      expect(session).not.toBeNull()
      expect(session?.gameSlug).toBe('beer-pong')
      expect(session?.gameName).toBe('Beer Pong')
      expect(session?.isActive).toBe(true)
      expect(session?.startedAt).toBeDefined()
    })

    it('clears chat history when starting new session', () => {
      const { addMessage, startSession } = useAppStore.getState()

      act(() => {
        addMessage({ role: 'user', content: 'test message' })
      })

      expect(useAppStore.getState().chatHistory).toHaveLength(1)

      act(() => {
        startSession('flip-cup', 'Flip Cup')
      })

      expect(useAppStore.getState().chatHistory).toHaveLength(0)
    })

    it('ends session and sets pending rating', () => {
      const { startSession, endSession } = useAppStore.getState()

      act(() => {
        startSession('kings-cup', 'Kings Cup')
      })

      act(() => {
        endSession()
      })

      const state = useAppStore.getState()
      expect(state.session).toBeNull()
      expect(state.pendingRating).toEqual({
        slug: 'kings-cup',
        name: 'Kings Cup',
      })
    })

    it('clears chat history when ending session', () => {
      const { startSession, addMessage, endSession } = useAppStore.getState()

      act(() => {
        startSession('beer-pong', 'Beer Pong')
        addMessage({ role: 'user', content: 'How do I throw?' })
      })

      expect(useAppStore.getState().chatHistory).toHaveLength(1)

      act(() => {
        endSession()
      })

      expect(useAppStore.getState().chatHistory).toHaveLength(0)
    })

    it('does nothing when ending non-existent session', () => {
      const { endSession, setPendingRating } = useAppStore.getState()

      act(() => {
        setPendingRating(null)
        endSession()
      })

      const state = useAppStore.getState()
      expect(state.session).toBeNull()
      expect(state.pendingRating).toBeNull()
    })
  })

  describe('chat management', () => {
    it('adds messages to chat history', () => {
      const { addMessage } = useAppStore.getState()

      act(() => {
        addMessage({ role: 'user', content: 'What are the rules?' })
      })

      const { chatHistory } = useAppStore.getState()
      expect(chatHistory).toHaveLength(1)
      expect(chatHistory[0]).toEqual({
        role: 'user',
        content: 'What are the rules?',
      })
    })

    it('accumulates multiple messages', () => {
      const { addMessage } = useAppStore.getState()

      act(() => {
        addMessage({ role: 'user', content: 'Question 1' })
        addMessage({ role: 'assistant', content: 'Answer 1' })
        addMessage({ role: 'user', content: 'Question 2' })
      })

      const { chatHistory } = useAppStore.getState()
      expect(chatHistory).toHaveLength(3)
      expect(chatHistory[0].role).toBe('user')
      expect(chatHistory[1].role).toBe('assistant')
      expect(chatHistory[2].role).toBe('user')
    })

    it('clears chat history', () => {
      const { addMessage, clearChat } = useAppStore.getState()

      act(() => {
        addMessage({ role: 'user', content: 'test' })
        addMessage({ role: 'assistant', content: 'response' })
      })

      expect(useAppStore.getState().chatHistory).toHaveLength(2)

      act(() => {
        clearChat()
      })

      expect(useAppStore.getState().chatHistory).toHaveLength(0)
    })
  })

  describe('rating management', () => {
    it('sets pending rating', () => {
      const { setPendingRating } = useAppStore.getState()

      act(() => {
        setPendingRating({ slug: 'rage-cage', name: 'Rage Cage' })
      })

      const { pendingRating } = useAppStore.getState()
      expect(pendingRating).toEqual({
        slug: 'rage-cage',
        name: 'Rage Cage',
      })
    })

    it('clears pending rating', () => {
      const { setPendingRating } = useAppStore.getState()

      act(() => {
        setPendingRating({ slug: 'test', name: 'Test' })
      })

      act(() => {
        setPendingRating(null)
      })

      expect(useAppStore.getState().pendingRating).toBeNull()
    })
  })

  describe('expired session check', () => {
    it('expires session older than 1 hour', () => {
      const { startSession, checkExpiredSession } = useAppStore.getState()

      // Start session 2 hours ago
      const twoHoursAgo = Date.now() - 2 * 60 * 60 * 1000
      vi.setSystemTime(twoHoursAgo)

      act(() => {
        startSession('old-game', 'Old Game')
      })

      // Move time forward to now
      vi.setSystemTime(Date.now() + 2 * 60 * 60 * 1000)

      act(() => {
        checkExpiredSession()
      })

      const state = useAppStore.getState()
      expect(state.session).toBeNull()
      expect(state.pendingRating).toEqual({
        slug: 'old-game',
        name: 'Old Game',
      })
    })

    it('does not expire recent session', () => {
      const { startSession, checkExpiredSession } = useAppStore.getState()

      act(() => {
        startSession('new-game', 'New Game')
      })

      act(() => {
        checkExpiredSession()
      })

      const state = useAppStore.getState()
      expect(state.session).not.toBeNull()
      expect(state.session?.gameSlug).toBe('new-game')
    })

    it('does nothing when no session exists', () => {
      const { checkExpiredSession, setPendingRating } = useAppStore.getState()

      act(() => {
        setPendingRating(null)
        checkExpiredSession()
      })

      const state = useAppStore.getState()
      expect(state.session).toBeNull()
      expect(state.pendingRating).toBeNull()
    })
  })
})
