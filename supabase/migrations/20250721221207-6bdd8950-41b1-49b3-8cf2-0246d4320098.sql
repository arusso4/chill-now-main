-- Allow public users to insert email signups for the waitlist
CREATE POLICY "Allow public email signup insertion" 
ON public.Email_signups 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);