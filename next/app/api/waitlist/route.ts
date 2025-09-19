import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const waitlistSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
  source: z.string().default('coming-soon'),
  consent: z.boolean().refine(val => val === true, 'Consent is required')
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = waitlistSchema.parse(body);
    
    // TODO: Insert into Supabase database
    // const { data, error } = await supabase
    //   .from('waitlist')
    //   .insert([{
    //     email: validatedData.email,
    //     name: validatedData.name,
    //     source: validatedData.source,
    //     consent: validatedData.consent,
    //     created_at: new Date().toISOString()
    //   }]);
    
    // if (error) {
    //   console.error('Supabase error:', error);
    //   return NextResponse.json({ error: 'Failed to save to database' }, { status: 500 });
    // }
    
    // TODO: Send welcome email via Resend
    // try {
    //   await resend.emails.send({
    //     from: 'ChillNOW <noreply@chillnow.com>',
    //     to: validatedData.email,
    //     subject: 'Welcome to the ChillNOW Waitlist!',
    //     html: `
    //       <h1>Welcome to the ChillNOW Waitlist!</h1>
    //       <p>Hi ${validatedData.name || 'there'},</p>
    //       <p>Thank you for joining our waitlist! You'll be the first to know when we launch.</p>
    //       <p>Best regards,<br>The ChillNOW Team</p>
    //     `
    //   });
    // } catch (emailError) {
    //   console.error('Email error:', emailError);
    //   // Don't fail the request if email fails
    // }
    
    // Log the signup for now (remove in production)
    console.log('Waitlist signup:', {
      email: validatedData.email,
      name: validatedData.name,
      source: validatedData.source,
      timestamp: new Date().toISOString()
    });
    
    return NextResponse.json({ 
      ok: true,
      message: 'Successfully joined waitlist'
    });
    
  } catch (error) {
    console.error('Waitlist API error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
