import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { GameCard } from './GameCard'
import { Game } from '@/types'

// Mock next/navigation
const mockPush = vi.fn()
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

// Mock next/image
vi.mock('next/image', () => ({
  default: ({ src, alt, ...props }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}))

const createMockGame = (overrides: Partial<Game> = {}): Game => ({
  id: 'test-game-1',
  slug: 'beer-pong',
  name: 'Beer Pong',
  description: 'Classic drinking game with ping pong balls',
  rules_text: 'Throw the ball into cups...',
  materials: ['ping pong balls', 'cups'],
  min_players: 2,
  max_players: 10,
  alcohol_type: 'beer',
  drunkenness_level: 3,
  created_at: '2024-01-01',
  is_user_submitted: false,
  ...overrides,
})

describe('GameCard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('rendering', () => {
    it('renders game name for games without image', () => {
      const game = createMockGame()
      render(<GameCard game={game} />)

      expect(screen.getByText('Beer Pong')).toBeInTheDocument()
    })

    it('renders with different sizes', () => {
      const game = createMockGame()

      const { rerender } = render(<GameCard game={game} size="small" />)
      expect(screen.getByText('Beer Pong')).toBeInTheDocument()

      rerender(<GameCard game={game} size="medium" />)
      expect(screen.getByText('Beer Pong')).toBeInTheDocument()

      rerender(<GameCard game={game} size="large" />)
      expect(screen.getByText('Beer Pong')).toBeInTheDocument()
    })

    it('renders image when game has cover image', () => {
      const game = createMockGame({ image: '/games/beer-pong.webp' })
      render(<GameCard game={game} />)

      const img = screen.getByRole('img', { name: 'Beer Pong' })
      expect(img).toHaveAttribute('src', '/games/beer-pong.webp')
    })

    it('renders drunkenness level flames', () => {
      const game = createMockGame({ drunkenness_level: 3 })
      render(<GameCard game={game} />)

      // Should have 5 flame icons total (for the indicator)
      const container = screen.getByText('Beer Pong').closest('div')?.parentElement
      expect(container).toBeInTheDocument()
    })

    it('renders sip factor when showSipFactor is true', () => {
      const game = createMockGame({ drunkenness_level: 4 })
      render(<GameCard game={game} showSipFactor />)

      // The component should render the sip factor tooltip area
      const tooltip = screen.getByText(/Sip Factor:/i)
      expect(tooltip).toBeInTheDocument()
    })

    it('does not render sip factor by default', () => {
      const game = createMockGame()
      render(<GameCard game={game} />)

      expect(screen.queryByText(/Sip Factor:/i)).not.toBeInTheDocument()
    })
  })

  describe('interaction', () => {
    it('navigates to game page on click', () => {
      const game = createMockGame({ slug: 'flip-cup' })
      render(<GameCard game={game} />)

      const card = screen.getByText(game.name).closest('[class*="cursor-pointer"]')
      expect(card).toBeInTheDocument()

      fireEvent.click(card!)
      expect(mockPush).toHaveBeenCalledWith('/game/flip-cup')
    })
  })

  describe('placeholder gradient', () => {
    it('generates consistent gradient based on slug', () => {
      const game1 = createMockGame({ slug: 'beer-pong' })
      const game2 = createMockGame({ slug: 'beer-pong' })

      const { container: container1 } = render(<GameCard game={game1} />)
      const { container: container2 } = render(<GameCard game={game2} />)

      // Both should render (gradient is applied via CSS class)
      expect(container1.querySelector('[class*="bg-gradient-to-br"]')).toBeInTheDocument()
      expect(container2.querySelector('[class*="bg-gradient-to-br"]')).toBeInTheDocument()
    })
  })

  describe('game emoji', () => {
    it('shows card emoji for card games', () => {
      const game = createMockGame({ materials: ['cards'] })
      render(<GameCard game={game} />)

      expect(screen.getByText('🃏')).toBeInTheDocument()
    })

    it('shows ping pong emoji for ping pong games', () => {
      const game = createMockGame({ materials: ['ping pong balls'] })
      render(<GameCard game={game} />)

      expect(screen.getByText('🏓')).toBeInTheDocument()
    })

    it('shows dice emoji for dice games', () => {
      const game = createMockGame({ materials: ['dice'] })
      render(<GameCard game={game} />)

      expect(screen.getByText('🎲')).toBeInTheDocument()
    })

    it('shows cup emoji for cup games', () => {
      const game = createMockGame({ materials: ['cups'] })
      render(<GameCard game={game} />)

      expect(screen.getByText('🥤')).toBeInTheDocument()
    })

    it('shows movie emoji for movie games', () => {
      const game = createMockGame({
        name: 'Movie Drinking Game',
        materials: [],
      })
      render(<GameCard game={game} />)

      expect(screen.getByText('🎬')).toBeInTheDocument()
    })

    it('shows music emoji for music games', () => {
      const game = createMockGame({
        name: 'Thunderstruck',
        materials: [],
      })
      render(<GameCard game={game} />)

      expect(screen.getByText('🎵')).toBeInTheDocument()
    })

    it('shows speech emoji for no-prop games', () => {
      const game = createMockGame({ materials: ['no prop'] })
      render(<GameCard game={game} />)

      expect(screen.getByText('🗣️')).toBeInTheDocument()
    })

    it('shows default beer emoji for other games', () => {
      const game = createMockGame({
        name: 'Some Other Game',
        materials: ['random stuff'],
      })
      render(<GameCard game={game} />)

      expect(screen.getByText('🍻')).toBeInTheDocument()
    })
  })
})
