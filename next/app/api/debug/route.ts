import { NextRequest, NextResponse } from 'next/server';
import { serverClient } from '@/lib/sanity.client';

export async function GET(request: NextRequest) {
  try {
    // Check if Sanity client is available
    if (!serverClient) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Sanity client not initialized - missing project ID' 
        },
        { status: 500 }
      );
    }

    // Get environment variables for debugging
    const env = {
      projectId: process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'NOT_SET',
      dataset: process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || 'NOT_SET',
      apiVersion: process.env.SANITY_API_VERSION || 'NOT_SET',
      hasToken: !!process.env.SANITY_READ_TOKEN
    };

    // Try to fetch product count from Sanity
    const productCount = await serverClient.fetch<number>('count(*[_type=="product"])');

    return NextResponse.json({
      ok: true,
      env,
      productCount,
      timestamp: new Date().toISOString(),
      message: 'Debug endpoint working correctly'
    });

  } catch (error) {
    console.error('Debug endpoint error:', error);
    
    return NextResponse.json(
      { 
        ok: false, 
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
