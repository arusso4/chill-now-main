import { NextRequest, NextResponse } from "next/server";
import { BrandApplicationSchema } from "@/lib/validators/brand";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = BrandApplicationSchema.parse(body);
    
    // TODO: Insert into Supabase brands table
    // const { error } = await supabase
    //   .from('brand_applications')
    //   .insert([validatedData]);
    
    // TODO: Send confirmation email via Resend
    // await resend.emails.send({
    //   from: 'partnerships@chillnow.com',
    //   to: validatedData.email,
    //   subject: 'Brand Application Received - ChillNOW',
    //   html: `<p>Thank you for applying to partner with ChillNOW...</p>`
    // });
    
    console.log('Brand application received:', validatedData);
    
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('Brand application error:', error);
    return NextResponse.json(
      { error: 'Invalid application data' },
      { status: 400 }
    );
  }
}
