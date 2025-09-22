# Sanity Seed Data Import Guide

This guide will help you import the seed data to populate your Sanity Studio with sample content for testing your marketplace and drops pages.

## 📦 What's Included

The `seed.ndjson` file contains:
- **2 Brands**: Cannabis Co, Green Valley Labs
- **4 Categories**: Flower, Edibles, Drinks, Accessories  
- **4 Products**: Pink Dream (featured), Chill Gummies, Sparkling Mango (featured), Glass Chill Pipe
- **1 Drop**: CHILL Limited — September (with 3 products)

## 🚀 Import Methods

### Method 1: Command Line (Recommended)

1. **Navigate to your project directory**:
   ```bash
   cd /path/to/your/next/project
   ```

2. **Install Sanity CLI** (if not already installed):
   ```bash
   npm install -g @sanity/cli
   ```

3. **Import the seed data**:
   ```bash
   npx sanity@latest dataset import seed.ndjson production --replace
   ```

### Method 2: Studio UI

1. **Open your Studio**: Navigate to `http://localhost:3000/studio`
2. **Go to Content**: Click on "Content" in the sidebar
3. **Import**: Click the three-dots menu (⋯) → "Import"
4. **Select file**: Choose `seed.ndjson` from your project
5. **Confirm**: Click "Import" to replace existing data

## ✅ After Import

Once imported, you should see:

### In Studio (`/studio`):
- **Brands**: Cannabis Co, Green Valley Labs
- **Categories**: Flower, Edibles, Drinks, Accessories
- **Products**: 4 products with variants and pricing
- **Drops**: CHILL Limited — September drop

### On Your Site:
- **`/marketplace`**: Shows featured products (Pink Dream, Sparkling Mango) + full grid
- **`/drops`**: Lists the September limited drop
- **`/drops/chill-limited-september`**: Drop detail page with countdown and products

## 🎯 Testing Your Pages

1. **Marketplace Page**: 
   - Featured products should appear in hero section
   - All products should show in grid with brand names and prices

2. **Drops Page**:
   - Should show "CHILL Limited — September" 
   - Drop should show as "Upcoming" (starts 2025-09-25)

3. **Drop Detail Page**:
   - Countdown timer to drop start
   - List of 3 products with caps (150, 600, 300)

## 🔧 Customization

### Adjust Drop Timing
Edit the drop in Studio to test different states:
- **Upcoming**: `startAt` in future
- **Live**: `startAt` in past, `endAt` in future  
- **Ended**: `endAt` in past

### Add Images
- Upload `mainImage` for products in Studio
- Images will automatically work with your `next.config.mjs` Sanity CDN setup

### Modify Pricing/SKUs
- Edit products in Studio
- Changes reflect immediately on marketplace pages

## 🚨 Troubleshooting

### Import Fails
- Ensure you're in the correct project directory
- Check that your Sanity project is connected
- Verify environment variables are set

### Pages Don't Load Data
- Check browser console for errors
- Verify GROQ queries in `marketplace.queries.ts`
- Ensure Sanity client is properly configured

### Studio Won't Open
- Check `NEXT_PUBLIC_SANITY_PROJECT_ID` is set
- Verify CORS settings in Sanity project
- Restart development server

## 🎨 Next Steps

1. **Add Product Images**: Upload images in Studio for visual testing
2. **Create More Content**: Add additional products, brands, categories
3. **Test Drop States**: Modify drop timing to test different UI states
4. **Connect Foxy**: Add `NEXT_PUBLIC_FOXY_CART_URL` for cart functionality

Your marketplace is now ready for testing! 🎉
