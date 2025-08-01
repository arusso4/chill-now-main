-- Create coming_soon_signups table
CREATE TABLE IF NOT EXISTS coming_soon_signups (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_coming_soon_signups_email ON coming_soon_signups(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_coming_soon_signups_created_at ON coming_soon_signups(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE coming_soon_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for public signups)
CREATE POLICY "Allow anonymous inserts" ON coming_soon_signups
    FOR INSERT WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (admin access)
CREATE POLICY "Allow authenticated reads" ON coming_soon_signups
    FOR SELECT USING (auth.role() = 'authenticated'); 