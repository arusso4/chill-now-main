import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const BrandApplicationSchema = z.object({
  brandName: z.string().min(2, "Brand name must be at least 2 characters").max(100),
  website: z.string().url("Please enter a valid website URL"),
  contactPerson: z.string().min(2, "Contact person name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  productCategory: z.string().min(1, "Please select a product category"),
  launchMarkets: z.string().min(10, "Please provide launch markets information")
});

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
