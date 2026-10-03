-- SipWiki Database Schema
-- Run this in your Supabase SQL Editor

CREATE EXTENSION IF NOT EXISTS pgcrypto;

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
-- EMAIL SUBSCRIBERS TABLE (lead magnets)
-- ============================================
CREATE TABLE IF NOT EXISTS email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT,
  page_path TEXT,
  lead_magnet TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ROW LEVEL SECURITY POLICIES
-- ============================================

-- Games: public catalog is read-only. Writes stay in src/config/gameData.ts.
ALTER TABLE games ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read games"
  ON games FOR SELECT
  USING (true);

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



-- Game Submissions: Auth required to submit
ALTER TABLE game_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own submissions"
  ON game_submissions FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can insert submissions"
  ON game_submissions FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Email Subscribers: writes go through the validated function below
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- ============================================
-- VALIDATED PUBLIC INGESTION FUNCTIONS
-- ============================================

CREATE OR REPLACE FUNCTION subscribe_email(
  p_email TEXT,
  p_source TEXT DEFAULT NULL,
  p_page_path TEXT DEFAULT NULL
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  normalized_email TEXT := lower(trim(p_email));
  inserted_count INTEGER;
BEGIN
  IF normalized_email IS NULL
     OR char_length(normalized_email) > 200
     OR normalized_email !~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$' THEN
    RETURN FALSE;
  END IF;

  INSERT INTO email_subscribers (email, source, lead_magnet, page_path)
  VALUES (normalized_email, left(p_source, 80), 'party-tips', left(p_page_path, 200))
  ON CONFLICT (email) DO NOTHING;

  GET DIAGNOSTICS inserted_count = ROW_COUNT;
  RETURN inserted_count > 0;
END;
$$;

CREATE OR REPLACE FUNCTION record_product_event(
  p_name TEXT,
  p_slug TEXT DEFAULT NULL,
  p_path TEXT DEFAULT NULL
)
RETURNS VOID
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF p_name NOT IN ('play_started', 'affiliate_click', 'email_submit') THEN
    RETURN;
  END IF;

  INSERT INTO product_events (name, slug, path)
  VALUES (p_name, left(p_slug, 80), left(p_path, 200));
END;
$$;

CREATE OR REPLACE FUNCTION submit_rating(
  p_game_id TEXT,
  p_score INTEGER,
  p_device_id TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF p_game_id IS NULL OR char_length(p_game_id) > 80
     OR p_score < 1 OR p_score > 5
     OR p_device_id IS NULL OR char_length(p_device_id) > 128 THEN
    RETURN FALSE;
  END IF;

  INSERT INTO ratings (game_id, device_id, user_id, score)
  VALUES (p_game_id, p_device_id, auth.uid(), p_score)
  ON CONFLICT (game_id, device_id)
  DO UPDATE SET score = EXCLUDED.score, user_id = EXCLUDED.user_id;

  RETURN TRUE;
END;
$$;

REVOKE ALL ON FUNCTION subscribe_email(TEXT, TEXT, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION record_product_event(TEXT, TEXT, TEXT) FROM PUBLIC;
REVOKE ALL ON FUNCTION submit_rating(TEXT, INTEGER, TEXT) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION subscribe_email(TEXT, TEXT, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION record_product_event(TEXT, TEXT, TEXT) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION submit_rating(TEXT, INTEGER, TEXT) TO anon, authenticated;

-- ============================================
-- FUNCTIONS
-- ============================================

-- Upvote totals follow the comment_upvotes rows. These RPCs stay callable so
-- older clients do not error, but they never change comments.upvotes.
CREATE OR REPLACE FUNCTION increment_comment_upvotes(comment_uuid UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN;
  END IF;
END;
$$;

CREATE OR REPLACE FUNCTION decrement_comment_upvotes(comment_uuid UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN;
  END IF;
END;
$$;

-- Recount after each upvote insert or delete. SECURITY DEFINER so the count
-- can be written on comments the voter does not own (RLS only allows authors
-- to update their own comments). The function only writes the derived count.
CREATE OR REPLACE FUNCTION sync_comment_upvote_count()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  target_comment_id UUID;
BEGIN
  target_comment_id := COALESCE(NEW.comment_id, OLD.comment_id);

  UPDATE comments
  SET upvotes = (
    SELECT COUNT(*)::INT
    FROM comment_upvotes
    WHERE comment_id = target_comment_id
  )
  WHERE id = target_comment_id;

  RETURN NULL;
END;
$$;

CREATE TRIGGER comment_upvotes_sync_count
  AFTER INSERT OR DELETE ON comment_upvotes
  FOR EACH ROW
  EXECUTE FUNCTION sync_comment_upvote_count();

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

-- ============================================
-- USER PROFILES TABLE (extends auth.users)
-- ============================================
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  avatar_url TEXT,
  phone_number TEXT,
  phone_verified BOOLEAN DEFAULT FALSE,
  contacts_synced_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_user_profiles_display_name ON user_profiles(display_name);

-- ============================================
-- PRIVATE CONTACT MATCHING KEY (never exposed to client roles)
CREATE SCHEMA IF NOT EXISTS private;

CREATE TABLE IF NOT EXISTS private.contact_match_keys (
  key_id BOOLEAN PRIMARY KEY DEFAULT TRUE CHECK (key_id),
  secret BYTEA NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO private.contact_match_keys (key_id, secret)
VALUES (TRUE, gen_random_bytes(32))
ON CONFLICT (key_id) DO NOTHING;

ALTER TABLE private.contact_match_keys ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon, authenticated;
REVOKE ALL ON private.contact_match_keys FROM PUBLIC, anon, authenticated;

-- USER CONTACTS TABLE (server-side keyed HMACs only)
-- ============================================
CREATE TABLE IF NOT EXISTS user_contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  contact_hash TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, contact_hash)
);

CREATE INDEX idx_user_contacts_hash ON user_contacts(contact_hash);
CREATE INDEX idx_user_contacts_user_id ON user_contacts(user_id);

-- ============================================
-- FRIENDSHIPS TABLE (derived from contact matching)
-- ============================================
CREATE TABLE IF NOT EXISTS friendships (
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  friend_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  discovered_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (user_id, friend_id)
);

CREATE INDEX idx_friendships_user_id ON friendships(user_id);
CREATE INDEX idx_friendships_friend_id ON friendships(friend_id);

-- ============================================
-- USER PROFILES RLS POLICIES
-- ============================================
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

-- ============================================
-- USER CONTACTS RLS POLICIES
-- ============================================
ALTER TABLE user_contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own contacts"
  ON user_contacts FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own contacts"
  ON user_contacts FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own contacts"
  ON user_contacts FOR DELETE
  USING (auth.uid() = user_id);

REVOKE ALL ON TABLE user_contacts FROM PUBLIC, anon, authenticated;

-- ============================================
-- FRIENDSHIPS RLS POLICIES
-- ============================================
ALTER TABLE friendships ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own friendships"
  ON friendships FOR SELECT
  USING (auth.uid() = user_id OR auth.uid() = friend_id);

CREATE POLICY "Users can insert their own friendships"
  ON friendships FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ============================================
-- FRIEND MATCHING FUNCTION
-- ============================================
-- p_user_id is ignored. Friends are resolved only for the signed-in user.
CREATE OR REPLACE FUNCTION find_friends(p_user_id UUID)
RETURNS TABLE (
  friend_id UUID,
  display_name TEXT,
  avatar_url TEXT
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT DISTINCT
    up.id AS friend_id,
    up.display_name,
    up.avatar_url
  FROM user_contacts uc
  JOIN user_contacts friend_uc ON uc.contact_hash = friend_uc.contact_hash
  JOIN user_profiles up ON friend_uc.user_id = up.id
  WHERE auth.uid() IS NOT NULL
    AND uc.user_id = auth.uid()
    AND friend_uc.user_id <> auth.uid();
$$;

-- Raw normalized contact values are accepted only long enough to calculate a
-- server-side keyed HMAC. The values themselves are never persisted.
CREATE OR REPLACE FUNCTION sync_contacts(
  p_user_id UUID,
  p_contacts TEXT[]
)
RETURNS TABLE (
  friend_id UUID,
  display_name TEXT,
  avatar_url TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, private, extensions
AS $$
DECLARE
  v_uid UUID := auth.uid();
  v_secret BYTEA;
  v_contact TEXT;
  v_normalized TEXT;
BEGIN
  IF v_uid IS NULL OR p_user_id IS DISTINCT FROM v_uid
     OR COALESCE(cardinality(p_contacts), 0) > 5000 THEN
    RETURN;
  END IF;

  SELECT secret INTO v_secret
  FROM private.contact_match_keys
  WHERE key_id = TRUE;

  IF v_secret IS NULL THEN
    RETURN;
  END IF;

  DELETE FROM public.user_contacts WHERE user_id = v_uid;

  FOREACH v_contact IN ARRAY COALESCE(p_contacts, ARRAY[]::TEXT[]) LOOP
    v_normalized := lower(trim(v_contact));
    IF char_length(v_normalized) BETWEEN 1 AND 200 THEN
      INSERT INTO public.user_contacts (user_id, contact_hash)
      VALUES (
        v_uid,
        encode(hmac(convert_to(v_normalized, 'UTF8'), v_secret, 'sha256'), 'hex')
      )
      ON CONFLICT (user_id, contact_hash) DO NOTHING;
    END IF;
  END LOOP;

  UPDATE public.user_profiles
  SET contacts_synced_at = NOW()
  WHERE id = v_uid;

  INSERT INTO public.friendships (user_id, friend_id)
  SELECT DISTINCT v_uid, up.id
  FROM public.user_contacts uc
  JOIN public.user_contacts friend_uc ON uc.contact_hash = friend_uc.contact_hash
  JOIN public.user_profiles up ON friend_uc.user_id = up.id
  WHERE uc.user_id = v_uid
    AND friend_uc.user_id <> v_uid
  ON CONFLICT (user_id, friend_id) DO NOTHING;

  RETURN QUERY
  SELECT DISTINCT
    up.id,
    up.display_name,
    up.avatar_url
  FROM public.user_contacts uc
  JOIN public.user_contacts friend_uc ON uc.contact_hash = friend_uc.contact_hash
  JOIN public.user_profiles up ON friend_uc.user_id = up.id
  WHERE uc.user_id = v_uid
    AND friend_uc.user_id <> v_uid;
END;
$$;

REVOKE ALL ON FUNCTION find_friends(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION find_friends(UUID) TO authenticated;
REVOKE ALL ON FUNCTION sync_contacts(UUID, TEXT[]) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION sync_contacts(UUID, TEXT[]) TO authenticated;

-- ============================================
-- AUTO-UPDATE TIMESTAMP TRIGGER
-- ============================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- FAVORITES TABLE (for games and cocktails)
-- ============================================
CREATE TABLE IF NOT EXISTS favorites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  item_type TEXT NOT NULL CHECK (item_type IN ('game', 'cocktail')),
  item_slug TEXT NOT NULL,
  item_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, item_type, item_slug)
);

CREATE INDEX idx_favorites_user_id ON favorites(user_id);
CREATE INDEX idx_favorites_item_type ON favorites(item_type);
CREATE INDEX idx_favorites_user_type ON favorites(user_id, item_type);

-- ============================================
-- FAVORITES RLS POLICIES
-- ============================================
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read their own favorites"
  ON favorites FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Authenticated users can insert favorites"
  ON favorites FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites"
  ON favorites FOR DELETE
  USING (auth.uid() = user_id);

-- ============================================
-- FAVORITES FUNCTIONS
-- ============================================

-- p_user_id is ignored. Favorites are always read and written for auth.uid().
CREATE OR REPLACE FUNCTION toggle_favorite(
  p_user_id UUID,
  p_item_type TEXT,
  p_item_slug TEXT,
  p_item_name TEXT
)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_uid UUID;
  v_exists BOOLEAN;
BEGIN
  v_uid := auth.uid();
  IF v_uid IS NULL THEN
    RETURN FALSE;
  END IF;

  SELECT EXISTS(
    SELECT 1 FROM favorites
    WHERE user_id = v_uid
    AND item_type = p_item_type
    AND item_slug = p_item_slug
  ) INTO v_exists;

  IF v_exists THEN
    DELETE FROM favorites
    WHERE user_id = v_uid
    AND item_type = p_item_type
    AND item_slug = p_item_slug;
    RETURN FALSE;
  ELSE
    INSERT INTO favorites (user_id, item_type, item_slug, item_name)
    VALUES (v_uid, p_item_type, p_item_slug, p_item_name);
    RETURN TRUE;
  END IF;
END;
$$;

CREATE OR REPLACE FUNCTION get_user_favorites(p_user_id UUID, p_item_type TEXT)
RETURNS TABLE (
  item_slug TEXT,
  item_name TEXT,
  created_at TIMESTAMPTZ
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN;
  END IF;

  RETURN QUERY
  SELECT f.item_slug, f.item_name, f.created_at
  FROM favorites f
  WHERE f.user_id = auth.uid()
  AND f.item_type = p_item_type
  ORDER BY f.created_at DESC;
END;
$$;

CREATE OR REPLACE FUNCTION is_favorited(p_user_id UUID, p_item_type TEXT, p_item_slug TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN FALSE;
  END IF;

  RETURN EXISTS(
    SELECT 1 FROM favorites
    WHERE user_id = auth.uid()
    AND item_type = p_item_type
    AND item_slug = p_item_slug
  );
END;
$$;

-- ============================================
-- PRODUCT EVENTS (play starts, affiliate clicks, and email signups)
-- ============================================
CREATE TABLE IF NOT EXISTS product_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (name IN ('play_started', 'affiliate_click', 'email_submit')),
  slug TEXT CHECK (slug IS NULL OR char_length(slug) <= 80),
  path TEXT CHECK (path IS NULL OR char_length(path) <= 200),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE product_events ENABLE ROW LEVEL SECURITY;
