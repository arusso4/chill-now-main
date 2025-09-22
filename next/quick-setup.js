#!/usr/bin/env node

/**
 * Quick setup script for Sanity project jutkwtrs
 * Run this after uploading images to Studio
 */

const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'jutkwtrs',
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: false,
});

async function quickSetup() {
  console.log('🚀 Quick Setup for Sanity Project: jutkwtrs\n');
  
  try {
    // Check if we can connect
    const projects = await client.fetch('*[_type == "sanity.imageAsset"][0]');
    console.log('✅ Connected to Sanity project successfully\n');
    
    // Get all assets
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
      console.log('📸 No images found. Please upload images to Studio first:');
      console.log('   1. Visit: http://localhost:3000/studio');
      console.log('   2. Go to Media → Upload images');
      console.log('   3. Run this script again\n');
      return;
    }

    console.log(`📸 Found ${assets.length} images:\n`);
    
    // Display assets with suggestions
    assets.forEach((asset, index) => {
      const filename = asset.originalFilename || 'unnamed';
      const size = asset.metadata?.dimensions ? 
        `${asset.metadata.dimensions.width}x${asset.metadata.dimensions.height}` : 
        'unknown size';
      
      console.log(`${index + 1}. ${filename}`);
      console.log(`   ID: ${asset._id}`);
      console.log(`   Size: ${size}`);
      
      // Suggest usage based on filename
      if (filename.toLowerCase().includes('logo') || filename.toLowerCase().includes('brand')) {
        console.log(`   💡 Suggested: Brand logo`);
      } else if (filename.toLowerCase().includes('hero') || filename.toLowerCase().includes('drop')) {
        console.log(`   💡 Suggested: Drop hero image`);
      } else if (filename.toLowerCase().includes('product') || filename.toLowerCase().includes('pink') || 
                 filename.toLowerCase().includes('gummies') || filename.toLowerCase().includes('mango')) {
        console.log(`   💡 Suggested: Product image`);
      }
      console.log('');
    });

    // Generate mapping suggestions
    console.log('🔄 ASSET ID MAPPING SUGGESTIONS:\n');
    console.log('Copy these mappings into update-seed-with-real-ids.js:\n');
    
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
      asset.originalFilename?.toLowerCase().includes('hero') ||
      asset.originalFilename?.toLowerCase().includes('drop')
    );

    // Brand logos
    if (brandLogos.length >= 2) {
      console.log('// Brand logos');
      console.log(`'image-8b8b8b8b8b8b8b8b8b8b8b8b-1920x1080-jpg': '${brandLogos[0]._id}', // Cannabis Co`);
      console.log(`'image-9c9c9c9c9c9c9c9c9c9c9c9c-1920x1080-jpg': '${brandLogos[1]._id}', // Green Valley\n`);
    }

    // Product images (first few)
    if (productImages.length > 0) {
      console.log('// Product images (first few)');
      productImages.slice(0, 3).forEach((asset, index) => {
        const placeholders = [
          'image-1a1a1a1a1a1a1a1a1a1a1a1a-800x800-jpg',
          'image-2a2a2a2a2a2a2a2a2a2a2a2a-800x800-jpg',
          'image-3a3a3a3a3a3a3a3a3a3a3a3a-800x800-jpg'
        ];
        console.log(`'${placeholders[index]}': '${asset._id}', // ${asset.originalFilename}`);
      });
      console.log('');
    }

    // Drop images
    if (dropImages.length > 0) {
      console.log('// Drop hero images');
      console.log(`'image-drop-hero-1920x1080-jpg': '${dropImages[0]._id}', // ${dropImages[0].originalFilename}\n`);
    }

    console.log('📝 NEXT STEPS:');
    console.log('1. Copy the mappings above into update-seed-with-real-ids.js');
    console.log('2. Run: node update-seed-with-real-ids.js');
    console.log('3. Import: npx sanity@latest dataset import seed-with-real-images.ndjson production --replace');
    console.log('4. Test: Visit http://localhost:3000/marketplace\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure your Sanity project is set up');
    console.log('2. Check environment variables in .env.local');
    console.log('3. Verify Studio is running at http://localhost:3000/studio');
  }
}

quickSetup();
