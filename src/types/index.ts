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
  search: string;
}
