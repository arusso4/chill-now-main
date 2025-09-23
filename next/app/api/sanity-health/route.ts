import { NextResponse } from 'next/server';

export async function GET() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';
  const apiVersion = process.env.SANITY_API_VERSION || '2023-10-01';

  return NextResponse.json({
    ok: !!projectId,
    projectId,
    dataset,
    apiVersion,
  });
}
