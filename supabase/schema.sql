-- SipWiki Database Schema
-- Run this in your Supabase SQL Editor

-- ============================================
-- GAMES TABLE (for future database-driven games)
-- ============================================
CREATE TABLE IF NOT EXISTS games (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  rules_text TEXT NOT NULL,
  materials TEXT[] NOT NULL,
  min_players INT NOT NULL,
  max_players INT,
  alcohol_type TEXT NOT NULL CHECK (alcohol_type IN ('beer', 'liquor', 'any')),
  drunkenness_level INT NOT NULL CHECK (drunkenness_level BETWEEN 1 AND 5),
  video_url TEXT,
  is_user_submitted BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- COMMENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  game_id TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  parent_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  upvotes INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_comments_game_id ON comments(game_id);
CREATE INDEX idx_comments_parent_id ON comments(parent_id);
CREATE INDEX idx_comments_created_at ON comments(created_at DESC);

-- ============================================
-- COMMENT UPVOTES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS comment_upvotes (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, comment_id)
);

-- ============================================
-- RATINGS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS ratings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  game_id TEXT NOT NULL,
  device_id TEXT NOT NULL,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  score INT NOT NULL CHECK (score BETWEEN 1 AND 5),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(game_id, device_id)
);

CREATE INDEX idx_ratings_game_id ON ratings(game_id);

-- ============================================
-- GAME SUBMISSIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS game_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  rules_text TEXT NOT NULL,
  materials TEXT[] NOT NULL,
  min_players INT NOT NULL,
  max_players INT,
  alcohol_type TEXT NOT NULL CHECK (alcohol_type IN ('beer', 'liquor', 'any')),
  source_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_game_submissions_status ON game_submissions(status);
CREATE INDEX idx_game_submissions_user_id ON game_submissions(user_id);

-- ============================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================

-- Comments: Anyone can read, authenticated users can insert their own
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read comments"
  ON comments FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert comments"
  ON comments FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own comments"
  ON comments FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own comments"
  ON comments FOR DELETE
  USING (auth.uid() = user_id);

-- Comment Upvotes
ALTER TABLE comment_upvotes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read upvotes"
  ON comment_upvotes FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert upvotes"
  ON comment_upvotes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own upvotes"
  ON comment_upvotes FOR DELETE
  USING (auth.uid() = user_id);

-- Ratings: Anyone can read and insert (anonymous ratings supported)
ALTER TABLE ratings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read ratings"
  ON ratings FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert ratings"
  ON ratings FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update ratings by device_id"
  ON ratings FOR UPDATE
  USING (true);

-- Game Submissions: Auth required to submit
ALTER TABLE game_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own submissions"
  ON game_submissions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can insert submissions"
  ON game_submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================
-- FUNCTIONS
-- ============================================

-- Function to increment comment upvotes
CREATE OR REPLACE FUNCTION increment_comment_upvotes(comment_uuid UUID)
RETURNS void AS $$
BEGIN
  UPDATE comments
  SET upvotes = upvotes + 1
  WHERE id = comment_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to decrement comment upvotes
CREATE OR REPLACE FUNCTION decrement_comment_upvotes(comment_uuid UUID)
RETURNS void AS $$
BEGIN
  UPDATE comments
  SET upvotes = GREATEST(0, upvotes - 1)
  WHERE id = comment_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to get average rating for a game
CREATE OR REPLACE FUNCTION get_game_rating(game_slug TEXT)
RETURNS TABLE(average_rating NUMERIC, total_ratings BIGINT) AS $$
BEGIN
  RETURN QUERY
  SELECT
    ROUND(AVG(score)::numeric, 1) as average_rating,
    COUNT(*) as total_ratings
  FROM ratings
  WHERE game_id = game_slug;
END;
$$ LANGUAGE plpgsql;
