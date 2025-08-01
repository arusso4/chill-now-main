-- Create quiz_responses table
CREATE TABLE IF NOT EXISTS public.quiz_responses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT,
    vibe TEXT NOT NULL,
    format TEXT NOT NULL,
    thc TEXT NOT NULL,
    flavor TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS (Row Level Security)
ALTER TABLE public.quiz_responses ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" ON public.quiz_responses
    FOR INSERT WITH CHECK (true);

-- Create policy to allow users to view their own responses (if authenticated later)
CREATE POLICY "Allow users to view own responses" ON public.quiz_responses
    FOR SELECT USING (true);

-- Grant necessary permissions
GRANT ALL ON public.quiz_responses TO anon;
GRANT ALL ON public.quiz_responses TO authenticated;
GRANT ALL ON public.quiz_responses TO service_role; 