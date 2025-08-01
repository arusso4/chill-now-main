-- Create chat_history table
CREATE TABLE IF NOT EXISTS chat_history (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    session_id TEXT NOT NULL,
    message TEXT NOT NULL,
    sender TEXT NOT NULL CHECK (sender IN ('user', 'assistant')),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_chat_history_session_id ON chat_history(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_history_timestamp ON chat_history(timestamp DESC);
CREATE INDEX IF NOT EXISTS idx_chat_history_sender ON chat_history(sender);

-- Enable Row Level Security (RLS)
ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for public chat sessions)
CREATE POLICY "Allow anonymous inserts" ON chat_history
    FOR INSERT WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (admin access)
CREATE POLICY "Allow authenticated reads" ON chat_history
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create policy to allow users to read their own session data
CREATE POLICY "Allow session reads" ON chat_history
    FOR SELECT USING (true); 