#!/usr/bin/env node

/**
 * Script to get Sanity asset IDs for seed data
 * Run this after uploading images to your Sanity Studio
 */

const { createClient } = require('@sanity/client');

// Configure with your project details
const client = createClient({
  projectId: 'jutkwtrs',
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: false,
});

async function getAssetIds() {
  try {
    console.log('🔍 Fetching asset IDs from Sanity...\n');
    
    // Get all image assets
    const assets = await client.fetch(`
      *[_type == "sanity.imageAsset"] | order(_createdAt desc) {
        _id,
        originalFilename,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    `);

    if (assets.length === 0) {
      console.log('❌ No assets found. Please upload images to your Sanity Studio first.');
      console.log('📝 Go to: http://localhost:3000/studio → Media → Upload');
      return;
    }

    console.log('📸 Found assets:\n');
    
    // Group assets by type
    const brandLogos = assets.filter(asset => 
      asset.originalFilename?.toLowerCase().includes('logo') ||
      asset.originalFilename?.toLowerCase().includes('brand')
    );
    
    const productImages = assets.filter(asset => 
      asset.originalFilename?.toLowerCase().includes('product') ||
      asset.originalFilename?.toLowerCase().includes('pink') ||
      asset.originalFilename?.toLowerCase().includes('gummies') ||
      asset.originalFilename?.toLowerCase().includes('mango') ||
      asset.originalFilename?.toLowerCase().includes('pipe') ||
      asset.originalFilename?.toLowerCase().includes('blue') ||
      asset.originalFilename?.toLowerCase().includes('cookie')
    );
    
    const dropImages = assets.filter(asset => 
      asset.originalFilename?.toLowerCase().includes('drop') ||
      asset.originalFilename?.toLowerCase().includes('hero') ||
      asset.originalFilename?.toLowerCase().includes('weekend')
    );

    // Display brand logos
    if (brandLogos.length > 0) {
      console.log('🏷️  BRAND LOGOS:');
      brandLogos.forEach((asset, index) => {
        console.log(`  ${index + 1}. ${asset.originalFilename}`);
        console.log(`     ID: ${asset._id}`);
        console.log(`     Size: ${asset.metadata?.dimensions?.width}x${asset.metadata?.dimensions?.height}\n`);
      });
    }

    // Display product images
    if (productImages.length > 0) {
      console.log('🛍️  PRODUCT IMAGES:');
      productImages.forEach((asset, index) => {
        console.log(`  ${index + 1}. ${asset.originalFilename}`);
        console.log(`     ID: ${asset._id}`);
        console.log(`     Size: ${asset.metadata?.dimensions?.width}x${asset.metadata?.dimensions?.height}\n`);
      });
    }

    // Display drop images
    if (dropImages.length > 0) {
      console.log('🎯 DROP HERO IMAGES:');
      dropImages.forEach((asset, index) => {
        console.log(`  ${index + 1}. ${asset.originalFilename}`);
        console.log(`     ID: ${asset._id}`);
        console.log(`     Size: ${asset.metadata?.dimensions?.width}x${asset.metadata?.dimensions?.height}\n`);
      });
    }

    // Generate updated seed file
    console.log('📝 To update your seed file, replace the placeholder IDs with the ones above.');
    console.log('💡 Tip: Copy the IDs and paste them into seed-with-images.ndjson\n');

    // Show example mapping
    console.log('🔄 EXAMPLE MAPPING:');
    console.log('Replace this in seed-with-images.ndjson:');
    console.log('  "image-8b8b8b8b8b8b8b8b8b8b8b8b-1920x1080-jpg"');
    console.log('With your actual asset ID:');
    if (brandLogos.length > 0) {
      console.log(`  "${brandLogos[0]._id}"`);
    }

  } catch (error) {
    console.error('❌ Error fetching assets:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure your Sanity project is set up');
    console.log('2. Check your project ID: jutkwtrs');
    console.log('3. Verify dataset: production');
    console.log('4. Ensure images are uploaded to Studio');
  }
}

// Run the script
getAssetIds();
