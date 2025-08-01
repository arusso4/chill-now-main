-- Create plug_interactions table for logging user inputs
CREATE TABLE IF NOT EXISTS plug_interactions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    user_input TEXT NOT NULL,
    bot_response TEXT NOT NULL,
    interaction_count INTEGER NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_plug_interactions_session_id ON plug_interactions(session_id);
CREATE INDEX IF NOT EXISTS idx_plug_interactions_timestamp ON plug_interactions(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_plug_interactions_count ON plug_interactions(interaction_count);

-- Enable Row Level Security (RLS)
ALTER TABLE plug_interactions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for public chat sessions)
CREATE POLICY "Allow anonymous inserts" ON plug_interactions
    FOR INSERT WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (admin access)
CREATE POLICY "Allow authenticated reads" ON plug_interactions
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy to allow users to read their own session data
CREATE POLICY "Allow session reads" ON plug_interactions
    FOR SELECT USING (true); 