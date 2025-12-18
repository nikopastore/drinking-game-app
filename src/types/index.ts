export interface Game {
  id: string;
  slug: string;
  name: string;
  description: string;
  rules_text: string;
  materials: string[];
  min_players: number;
  max_players: number | null;
  alcohol_type: "beer" | "liquor" | "any";
  drunkenness_level: 1 | 2 | 3 | 4 | 5;
  video_url?: string;
  image?: string; // Cover image path (e.g., "/games/kings-cup.webp")
  created_at: string;
  is_user_submitted: boolean;
}

export interface Comment {
  id: string;
  game_id: string;
  user_id: string;
  user_email?: string;
  parent_id: string | null;
  content: string;
  upvotes: number;
  created_at: string;
  replies?: Comment[];
}

export interface Rating {
  id: string;
  game_id: string;
  device_id: string;
  user_id: string | null;
  score: 1 | 2 | 3 | 4 | 5;
  created_at: string;
}

export interface GameSubmission {
  id?: string;
  user_id?: string;
  name: string;
  description: string;
  rules_text: string;
  materials: string[];
  min_players: number;
  max_players: number | null;
  alcohol_type: "beer" | "liquor" | "any";
  source_url?: string;
  status?: "pending" | "approved" | "rejected";
  created_at?: string;
}

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface PlaySession {
  gameSlug: string;
  gameName: string;
  startedAt: number;
  isActive: boolean;
}

export interface FilterState {
  playerCount: number | null;
  materials: string[];
  alcoholType: "beer" | "liquor" | "any" | null;
  sipFactor: number | null; // 1-5, null = any
  search: string;
}

export interface UserProfile {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  phone_number: string | null;
  phone_verified: boolean;
  contacts_synced_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface Friend {
  friend_id: string;
  display_name: string | null;
  avatar_url: string | null;
}
