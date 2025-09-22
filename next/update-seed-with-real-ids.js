#!/usr/bin/env node

/**
 * Script to update seed-with-images.ndjson with real asset IDs
 * Run this after getting asset IDs from get-asset-ids.js
 */

const fs = require('fs');
const path = require('path');

// Asset ID mappings - update these with your actual Sanity asset IDs
const assetMappings = {
  // Brand logos
  'image-8b8b8b8b8b8b8b8b8b8b8b8b-1920x1080-jpg': 'YOUR_CANNABIS_CO_LOGO_ID',
  'image-9c9c9c9c9c9c9c9c9c9c9c9c-1920x1080-jpg': 'YOUR_GREEN_VALLEY_LOGO_ID',
  
  // Pink Dream images
  'image-1a1a1a1a1a1a1a1a1a1a1a1a-800x800-jpg': 'YOUR_PINK_DREAM_MAIN_ID',
  'image-1b1b1b1b1b1b1b1b1b1b1b1b-800x800-jpg': 'YOUR_PINK_DREAM_GALLERY_1_ID',
  'image-1c1c1c1c1c1c1c1c1c1c1c1c-800x800-jpg': 'YOUR_PINK_DREAM_GALLERY_2_ID',
  
  // Chill Gummies images
  'image-2a2a2a2a2a2a2a2a2a2a2a2a-800x800-jpg': 'YOUR_GUMMIES_MAIN_ID',
  'image-2b2b2b2b2b2b2b2b2b2b2b2b-800x800-jpg': 'YOUR_GUMMIES_GALLERY_ID',
  
  // Sparkling Mango images
  'image-3a3a3a3a3a3a3a3a3a3a3a3a-800x800-jpg': 'YOUR_MANGO_MAIN_ID',
  'image-3b3b3b3b3b3b3b3b3b3b3b3b-800x800-jpg': 'YOUR_MANGO_GALLERY_ID',
  
  // Glass Pipe images
  'image-4a4a4a4a4a4a4a4a4a4a4a4a-800x800-jpg': 'YOUR_PIPE_MAIN_ID',
  'image-4b4b4b4b4b4b4b4b4b4b4b4b-800x800-jpg': 'YOUR_PIPE_GALLERY_1_ID',
  'image-4c4c4c4c4c4c4c4c4c4c4c4c-800x800-jpg': 'YOUR_PIPE_GALLERY_2_ID',
  
  // Blue Dream images
  'image-5a5a5a5a5a5a5a5a5a5a5a5a-800x800-jpg': 'YOUR_BLUE_DREAM_MAIN_ID',
  'image-5b5b5b5b5b5b5b5b5b5b5b5b-800x800-jpg': 'YOUR_BLUE_DREAM_GALLERY_ID',
  
  // Chocolate Cookies images
  'image-6a6a6a6a6a6a6a6a6a6a6a6a-800x800-jpg': 'YOUR_COOKIES_MAIN_ID',
  'image-6b6b6b6b6b6b6b6b6b6b6b6b-800x800-jpg': 'YOUR_COOKIES_GALLERY_ID',
  
  // Drop hero images
  'image-drop-hero-1920x1080-jpg': 'YOUR_DROP_HERO_ID',
  'image-weekend-hero-1920x1080-jpg': 'YOUR_WEEKEND_HERO_ID',
};

function updateSeedFile() {
  const seedPath = path.join(__dirname, 'seed-with-images.ndjson');
  
  if (!fs.existsSync(seedPath)) {
    console.error('❌ seed-with-images.ndjson not found');
    return;
  }

  let seedContent = fs.readFileSync(seedPath, 'utf8');
  
  // Check if any mappings are still placeholders
  const hasPlaceholders = Object.values(assetMappings).some(id => id.startsWith('YOUR_'));
  
  if (hasPlaceholders) {
    console.log('⚠️  Please update the asset IDs in this script first:');
    console.log('📝 Edit update-seed-with-real-ids.js and replace YOUR_*_ID with actual Sanity asset IDs');
    console.log('🔍 Run get-asset-ids.js to get your asset IDs\n');
    
    console.log('📋 Current mappings:');
    Object.entries(assetMappings).forEach(([placeholder, realId]) => {
      console.log(`  ${placeholder} → ${realId}`);
    });
    return;
  }

  // Replace all placeholder IDs with real ones
  let updatedCount = 0;
  Object.entries(assetMappings).forEach(([placeholder, realId]) => {
    const regex = new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = seedContent.match(regex);
    if (matches) {
      seedContent = seedContent.replace(regex, realId);
      updatedCount += matches.length;
    }
  });

  // Write updated seed file
  const updatedSeedPath = path.join(__dirname, 'seed-with-real-images.ndjson');
  fs.writeFileSync(updatedSeedPath, seedContent);
  
  console.log(`✅ Updated seed file created: seed-with-real-images.ndjson`);
  console.log(`🔄 Replaced ${updatedCount} asset ID references`);
  console.log(`📦 Ready to import: npx sanity@latest dataset import seed-with-real-images.ndjson production --replace`);
}

// Run the update
updateSeedFile();
