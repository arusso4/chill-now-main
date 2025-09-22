# Sanity Studio Setup Guide

This guide will help you set up and connect your Sanity project to the embedded studio at `/studio`.

## Prerequisites

- A Sanity account (sign up at [sanity.io](https://sanity.io))
- Your Next.js project running locally

## Step A: Create a Sanity Project

### Option 1: Using Sanity CLI (Recommended)
```bash
cd next
npm create sanity@latest
```

Follow the prompts:
- Choose "Create new project"
- Enter project name: `chillnow-studio`
- Choose dataset: `production`
- Choose output path: `./sanity` (or leave default)
- Choose template: `Clean project with no predefined schemas`

### Option 2: Using Sanity Management Console
1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Click "New Project"
3. Enter project name: `chillnow-studio`
4. Choose dataset: `production`
5. Complete the setup

## Step B: Configure Environment Variables

After creating your project, you'll get a `projectId`. Set up your environment variables:

### For Local Development
Create `.env.local` in your `/next` directory:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2023-10-01
```

### For Production (Vercel)
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add these variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = your project ID
   - `NEXT_PUBLIC_SANITY_DATASET` = production
   - `SANITY_API_VERSION` = 2023-10-01

## Step C: Configure CORS Settings

1. Go to [manage.sanity.io](https://manage.sanity.io)
2. Select your project
3. Go to Settings → API → CORS Origins
4. Add these origins:
   - `http://localhost:3000` (for local development)
   - `https://your-domain.vercel.app` (your production domain)

## Step D: Install Required Dependencies

```bash
cd next
npm install next-sanity @sanity/vision
```

## Step E: Seed Your Data

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000/studio`
3. Create the following content types in order:

### 1. Create a Brand
- Go to "Brand" in the studio
- Click "Create"
- Add name: "Sample Brand"
- Upload a logo (optional)
- Publish

### 2. Create Categories
- Go to "Category" in the studio
- Create categories like: "Flower", "Edibles", "Concentrates", "Accessories"
- Publish each category

### 3. Create a Product
- Go to "Product" in the studio
- Click "Create"
- Fill in:
  - Title: "Sample Product"
  - Slug: auto-generated
  - Brand: Select the brand you created
  - Categories: Select relevant categories
  - Main Image: Upload a product image
  - Variants: Add at least one variant with SKU, price, and size
  - Description: Add product description
  - Featured: Toggle if you want it featured
- Publish

### 4. Create a Drop (Optional)
- Go to "Drop" in the studio
- Click "Create"
- Fill in:
  - Title: "Sample Drop"
  - Slug: auto-generated
  - Start Date: Set future date
  - End Date: Set end date
  - Hero Image: Upload drop image
  - Products: Add products from your created products
- Publish

## Step F: Connect Studio to Sanity Management

1. Deploy your project to production
2. Go to [manage.sanity.io](https://manage.sanity.io)
3. Select your project
4. Go to Studios → "Add missing studio by URL"
5. Enter your deployed studio URL: `https://your-domain.vercel.app/studio`
6. Save

## Step G: Verify Setup

1. **Local Studio**: Visit `http://localhost:3000/studio`
2. **Production Studio**: Visit `https://your-domain.vercel.app/studio`
3. **Test Data Fetching**: Check that your marketplace pages load data from Sanity

## Troubleshooting

### Common Issues

**"Project ID not found" Error**
- Verify your `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly
- Check that the project ID matches exactly (no extra spaces)

**CORS Errors**
- Ensure your domain is added to CORS origins in Sanity settings
- Check both localhost and production domains are added

**Blank Marketplace Pages**
- Verify you have published content in Sanity
- Check that your GROQ queries are working in the Sanity Vision tool
- Ensure your `getSanityClient()` function is returning a valid client

**Studio Not Loading**
- Check browser console for errors
- Verify all dependencies are installed
- Ensure environment variables are set correctly

### Testing GROQ Queries

1. Go to your studio at `/studio`
2. Click the "Vision" tab
3. Test your queries:
   ```groq
   *[_type == "product"]{
     _id, title, "brand": brand->name
   }
   ```

### Getting Help

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js + Sanity Guide](https://www.sanity.io/guides/nextjs-app-router-live-preview)
- [Sanity Community](https://www.sanity.io/community)

## Next Steps

Once your Sanity studio is connected and working:

1. **Customize Schemas**: Modify the schemas in `/sanity/schemas/` to match your needs
2. **Add More Content Types**: Create additional schemas for your specific use case
3. **Set Up Webhooks**: Configure webhooks for real-time updates
4. **Add Preview Mode**: Implement draft content preview for editors
5. **Optimize Images**: Set up image transformations and optimization

Your embedded Sanity Studio is now ready to use! 🎉
