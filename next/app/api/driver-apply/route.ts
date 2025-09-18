import { NextRequest, NextResponse } from "next/server";
import { DriverApplicationSchema } from "@/lib/validators/driver";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = DriverApplicationSchema.parse(body);
    
    // TODO: Insert into Supabase drivers table
    // const { error } = await supabase
    //   .from('drivers')
    //   .insert([validatedData]);
    
    // TODO: Send confirmation email via Resend
    // await resend.emails.send({
    //   from: 'onboarding@chillnow.com',
    //   to: validatedData.email,
    //   subject: 'Driver Application Received - ChillNOW',
    //   html: `<p>Thank you for applying to drive with ChillNOW...</p>`
    // });
    
    console.log('Driver application received:', validatedData);
    
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Driver application error:', error);
    return NextResponse.json(
      { error: 'Invalid application data' },
      { status: 400 }
    );
  }
}
