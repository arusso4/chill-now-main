-- Create incident_reports table
CREATE TABLE IF NOT EXISTS incident_reports (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    order_id TEXT,
    description TEXT NOT NULL,
    file_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_incident_reports_email ON incident_reports(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_incident_reports_created_at ON incident_reports(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE incident_reports ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for public reporting)
CREATE POLICY "Allow anonymous inserts" ON incident_reports
    FOR INSERT WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (admin access)
CREATE POLICY "Allow authenticated reads" ON incident_reports
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create storage bucket for file uploads
INSERT INTO storage.buckets (id, name, public) 
VALUES ('issue_uploads', 'issue_uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Create storage policy to allow anonymous uploads
CREATE POLICY "Allow anonymous uploads" ON storage.objects
    FOR INSERT WITH CHECK (bucket_id = 'issue_uploads');

-- Create storage policy to allow public reads
CREATE POLICY "Allow public reads" ON storage.objects
    FOR SELECT USING (bucket_id = 'issue_uploads'); 