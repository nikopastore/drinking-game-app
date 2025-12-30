-- Create user_cabinets table for storing liquor cabinet data
CREATE TABLE IF NOT EXISTS user_cabinets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  items JSONB DEFAULT '[]'::jsonb NOT NULL,
  custom_items JSONB DEFAULT '[]'::jsonb NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  UNIQUE(user_id)
);

-- Create index for faster lookups by user_id
CREATE INDEX IF NOT EXISTS idx_user_cabinets_user_id ON user_cabinets(user_id);

-- Enable Row Level Security
ALTER TABLE user_cabinets ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only see their own cabinet
CREATE POLICY "Users can view their own cabinet"
  ON user_cabinets
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can insert their own cabinet
CREATE POLICY "Users can insert their own cabinet"
  ON user_cabinets
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own cabinet
CREATE POLICY "Users can update their own cabinet"
  ON user_cabinets
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete their own cabinet
CREATE POLICY "Users can delete their own cabinet"
  ON user_cabinets
  FOR DELETE
  USING (auth.uid() = user_id);
