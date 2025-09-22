# Sanity Image Assets Setup Guide

This guide explains how to set up the image assets referenced in `seed-with-images.ndjson` so your marketplace displays beautiful product images immediately.

## 🖼️ **What's Included in the Enhanced Seed**

The `seed-with-images.ndjson` file contains:
- **2 Brands** with logos
- **4 Categories** (unchanged)
- **6 Products** with main images and gallery images
- **2 Drops** with hero images
- **Enhanced descriptions** for better product details

## 📸 **Image Assets You Need**

### **Brand Logos** (1920x1080 recommended)
- `image-8b8b8b8b8b8b8b8b8b8b8b8b-1920x1080-jpg` - Cannabis Co logo
- `image-9c9c9c9c9c9c9c9c9c9c9c9c-1920x1080-jpg` - Green Valley Labs logo

### **Product Images** (800x800 recommended)
- `image-1a1a1a1a1a1a1a1a1a1a1a1a-800x800-jpg` - Pink Dream main image
- `image-1b1b1b1b1b1b1b1b1b1b1b1b-800x800-jpg` - Pink Dream gallery 1
- `image-1c1c1c1c1c1c1c1c1c1c1c1c-800x800-jpg` - Pink Dream gallery 2
- `image-2a2a2a2a2a2a2a2a2a2a2a2a-800x800-jpg` - Chill Gummies main
- `image-2b2b2b2b2b2b2b2b2b2b2b2b-800x800-jpg` - Chill Gummies gallery
- `image-3a3a3a3a3a3a3a3a3a3a3a3a-800x800-jpg` - Sparkling Mango main
- `image-3b3b3b3b3b3b3b3b3b3b3b3b-800x800-jpg` - Sparkling Mango gallery
- `image-4a4a4a4a4a4a4a4a4a4a4a4a-800x800-jpg` - Glass Pipe main
- `image-4b4b4b4b4b4b4b4b4b4b4b4b-800x800-jpg` - Glass Pipe gallery 1
- `image-4c4c4c4c4c4c4c4c4c4c4c4c-800x800-jpg` - Glass Pipe gallery 2
- `image-5a5a5a5a5a5a5a5a5a5a5a5a-800x800-jpg` - Blue Dream main
- `image-5b5b5b5b5b5b5b5b5b5b5b5b-800x800-jpg` - Blue Dream gallery
- `image-6a6a6a6a6a6a6a6a6a6a6a6a-800x800-jpg` - Chocolate Cookies main
- `image-6b6b6b6b6b6b6b6b6b6b6b6b-800x800-jpg` - Chocolate Cookies gallery

### **Drop Hero Images** (1920x1080 recommended)
- `image-drop-hero-1920x1080-jpg` - CHILL Limited September hero
- `image-weekend-hero-1920x1080-jpg` - Weekend Warrior hero

## 🚀 **Setup Methods**

### **Method 1: Upload to Sanity Studio (Recommended)**

1. **Open Studio**: Navigate to `http://localhost:3000/studio`
2. **Go to Media**: Click "Media" in the sidebar
3. **Upload Images**: Drag and drop your image files
4. **Note Asset IDs**: Copy the asset IDs that Sanity generates
5. **Update Seed File**: Replace the placeholder IDs in `seed-with-images.ndjson`

### **Method 2: Use Sanity CLI**

1. **Prepare Images**: Place all images in a folder (e.g., `./images/`)
2. **Upload via CLI**:
   ```bash
   npx sanity@latest dataset import --assets ./images/ production
   ```
3. **Get Asset IDs**: Check Studio → Media for the generated IDs
4. **Update Seed**: Replace placeholder IDs in the seed file

### **Method 3: Use Placeholder Images**

If you want to test immediately without real images:

1. **Use Unsplash URLs**: Replace asset references with direct image URLs
2. **Update next.config.mjs**: Add Unsplash to allowed domains
3. **Import Seed**: Use the modified seed file

## 🎨 **Image Specifications**

### **Product Images**
- **Size**: 800x800px (square)
- **Format**: JPG or PNG
- **Quality**: High resolution for crisp display
- **Style**: Clean, professional product photography

### **Brand Logos**
- **Size**: 1920x1080px (16:9 ratio)
- **Format**: PNG with transparency preferred
- **Style**: Clean, recognizable brand identity

### **Drop Hero Images**
- **Size**: 1920x1080px (16:9 ratio)
- **Format**: JPG
- **Style**: Eye-catching, promotional design

## 🔧 **Quick Test Setup**

For immediate testing, you can use these placeholder image URLs:

```json
// Replace asset references with:
"mainImage": {
  "_type": "image",
  "asset": {
    "_type": "reference", 
    "_ref": "image-https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&h=800&fit=crop"
  }
}
```

Then add to your `next.config.mjs`:
```javascript
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" }
  ]
}
```

## ✅ **After Setup**

Once images are uploaded and seed is imported:

1. **Studio**: All products show with images in the media library
2. **Marketplace**: Product cards display with images
3. **Drop Pages**: Hero images appear on drop detail pages
4. **Responsive**: Images automatically optimize for different screen sizes

## 🎯 **Testing Checklist**

- [ ] Brand logos appear in product cards
- [ ] Product main images display correctly
- [ ] Gallery images work in product detail views
- [ ] Drop hero images show on drop pages
- [ ] Images are responsive on mobile
- [ ] Loading states work properly
- [ ] Alt text is accessible

Your marketplace will look professional and ready for launch! 🚀
