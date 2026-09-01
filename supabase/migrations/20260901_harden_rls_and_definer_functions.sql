-- Harden RLS and SECURITY DEFINER functions (baseline audit H3–H6)
-- Apply in the Supabase SQL editor if this project already ran schema.sql.

-- H5: catalog table must not be world-writable via the anon key
ALTER TABLE IF EXISTS games ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read games" ON games;
CREATE POLICY "Anyone can read games"
  ON games FOR SELECT
  USING (true);

-- H6: profiles (including phone_number) are not publicly readable
DROP POLICY IF EXISTS "Anyone can read user profiles" ON user_profiles;
DROP POLICY IF EXISTS "Users can read their own profile" ON user_profiles;
CREATE POLICY "Users can read their own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

-- H4: vote counts follow comment_upvotes rows; RPCs become auth-gated no-ops
CREATE OR REPLACE FUNCTION increment_comment_upvotes(comment_uuid UUID)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;
  RETURN;
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
    RAISE EXCEPTION 'Not authenticated';
  END IF;
  RETURN;
END;
$$;

CREATE OR REPLACE FUNCTION sync_comment_upvote_count()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE comments SET upvotes = upvotes + 1 WHERE id = NEW.comment_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE comments SET upvotes = GREATEST(0, upvotes - 1) WHERE id = OLD.comment_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$;

DROP TRIGGER IF EXISTS comment_upvotes_sync ON comment_upvotes;
CREATE TRIGGER comment_upvotes_sync
  AFTER INSERT OR DELETE ON comment_upvotes
  FOR EACH ROW
  EXECUTE FUNCTION sync_comment_upvote_count();

-- H3: DEFINER RPCs may only operate on the caller's row
CREATE OR REPLACE FUNCTION find_friends(p_user_id UUID)
RETURNS TABLE (
  friend_id UUID,
  display_name TEXT,
  avatar_url TEXT
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF auth.uid() IS NULL OR auth.uid() <> p_user_id THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  RETURN QUERY
  SELECT DISTINCT
    up.id as friend_id,
    up.display_name,
    up.avatar_url
  FROM user_contacts uc
  JOIN user_contacts friend_uc ON uc.contact_hash = friend_uc.contact_hash
  JOIN user_profiles up ON friend_uc.user_id = up.id
  WHERE uc.user_id = p_user_id
    AND friend_uc.user_id != p_user_id;
END;
$$;

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
  v_exists BOOLEAN;
BEGIN
  IF auth.uid() IS NULL OR auth.uid() <> p_user_id THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  SELECT EXISTS(
    SELECT 1 FROM favorites
    WHERE user_id = p_user_id
    AND item_type = p_item_type
    AND item_slug = p_item_slug
  ) INTO v_exists;

  IF v_exists THEN
    DELETE FROM favorites
    WHERE user_id = p_user_id
    AND item_type = p_item_type
    AND item_slug = p_item_slug;
    RETURN FALSE;
  ELSE
    INSERT INTO favorites (user_id, item_type, item_slug, item_name)
    VALUES (p_user_id, p_item_type, p_item_slug, p_item_name);
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
  IF auth.uid() IS NULL OR auth.uid() <> p_user_id THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  RETURN QUERY
  SELECT f.item_slug, f.item_name, f.created_at
  FROM favorites f
  WHERE f.user_id = p_user_id
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
  IF auth.uid() IS NULL OR auth.uid() <> p_user_id THEN
    RAISE EXCEPTION 'Not authorized';
  END IF;

  RETURN EXISTS(
    SELECT 1 FROM favorites
    WHERE user_id = p_user_id
    AND item_type = p_item_type
    AND item_slug = p_item_slug
  );
END;
$$;

REVOKE ALL ON FUNCTION find_friends(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION find_friends(UUID) TO authenticated;

REVOKE ALL ON FUNCTION toggle_favorite(UUID, TEXT, TEXT, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION toggle_favorite(UUID, TEXT, TEXT, TEXT) TO authenticated;

REVOKE ALL ON FUNCTION get_user_favorites(UUID, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION get_user_favorites(UUID, TEXT) TO authenticated;

REVOKE ALL ON FUNCTION is_favorited(UUID, TEXT, TEXT) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION is_favorited(UUID, TEXT, TEXT) TO authenticated;

REVOKE ALL ON FUNCTION increment_comment_upvotes(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION increment_comment_upvotes(UUID) TO authenticated;

REVOKE ALL ON FUNCTION decrement_comment_upvotes(UUID) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION decrement_comment_upvotes(UUID) TO authenticated;
