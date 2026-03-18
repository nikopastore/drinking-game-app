-- Create email subscribers table for lead magnets
CREATE TABLE IF NOT EXISTS email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT,
  page_path TEXT,
  lead_magnet TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert email subscribers"
  ON email_subscribers FOR INSERT
  WITH CHECK (true);
