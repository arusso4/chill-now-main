import { NextRequest, NextResponse } from 'next/server';
import { foxyAddToCartPayload, type FoxyItem } from '@/lib/foxy';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, variantSku, qty = 1 } = body;

    // Validate required fields
    if (!productId || !variantSku) {
      return NextResponse.json(
        { error: 'Missing required fields: productId, variantSku' },
        { status: 400 }
      );
    }

    // TODO: Replace with actual product data from Sanity
    // This is mock data for now
    const mockProduct = {
      id: productId,
      title: "Premium ChillNOW Hoodie",
      brand: "chillNOW",
      price: 89,
      sku: variantSku
    };

    // TODO: Add inventory validation logic here
    // Check if product is available in the drop
    // Check if quantity is within limits
    // Check if drop is still active
    
    // Mock inventory check
    const isAvailable = true;
    const maxQuantity = 5;
    const availableQuantity = 10;

    if (!isAvailable) {
      return NextResponse.json(
        { error: 'Product is not available in this drop' },
        { status: 400 }
      );
    }

    if (qty > maxQuantity) {
      return NextResponse.json(
        { error: `Maximum quantity allowed is ${maxQuantity}` },
        { status: 400 }
      );
    }

    if (qty > availableQuantity) {
      return NextResponse.json(
        { error: `Only ${availableQuantity} items available` },
        { status: 400 }
      );
    }

    // Create Foxy.io item for the client
    const item: FoxyItem = {
      name: mockProduct.title,
      code: mockProduct.sku,
      price: mockProduct.price,
      quantity: qty,
      meta: {
        brand: mockProduct.brand,
        product_id: mockProduct.id,
        variant_sku: variantSku,
        drop_type: 'limited',
        reservationId: `res_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
      }
    };

    // Create payload for backward compatibility
    const payload = foxyAddToCartPayload({
      name: mockProduct.title,
      code: mockProduct.sku,
      price: mockProduct.price,
      quantity: qty,
      meta: {
        brand: mockProduct.brand,
        product_id: mockProduct.id,
        variant_sku: variantSku,
        drop_type: 'limited'
      }
    });

    // TODO: Log reservation attempt to database
    // This could be used for analytics, inventory tracking, etc.

    return NextResponse.json({
      ok: true,
      item,
      payload,
      message: 'Product reserved successfully'
    });

  } catch (error) {
    console.error('Reserve API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
