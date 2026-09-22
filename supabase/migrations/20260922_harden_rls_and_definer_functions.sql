-- Harden RLS and SECURITY DEFINER functions.
-- Idempotent: safe to re-run on a database created from an older schema.sql.
-- Does not grant extra privileges and does not disable RLS on other tables.

-- Games catalog is public-read. No INSERT/UPDATE/DELETE policies.
ALTER TABLE games ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone can read games" ON games;
CREATE POLICY "Anyone can read games"
  ON games FOR SELECT
  USING (true);

-- Profiles, including phone_number, are visible only to the owner.
DROP POLICY IF EXISTS "Anyone can read user profiles" ON user_profiles;
DROP POLICY IF EXISTS "Users can read their own profile" ON user_profiles;
CREATE POLICY "Users can read their own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

-- Vote RPCs are auth-gated no-ops. The trigger owns the upvote count.
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

DROP TRIGGER IF EXISTS comment_upvotes_sync_count ON comment_upvotes;
CREATE TRIGGER comment_upvotes_sync_count
  AFTER INSERT OR DELETE ON comment_upvotes
  FOR EACH ROW
  EXECUTE FUNCTION sync_comment_upvote_count();

-- p_user_id is ignored. Anonymous callers get no rows.
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

-- p_user_id is ignored. Anonymous callers cannot read or write favorites.
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
