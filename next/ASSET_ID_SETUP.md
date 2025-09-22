# Asset ID Setup Guide for Sanity Project: jutkwtrs

This guide will help you get the correct asset IDs for your seed data after creating your Sanity project.

## 🚀 **Quick Setup Steps**

### 1. **Set Environment Variables**
Create `.env.local` in your `/next` directory:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=jutkwtrs
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_VERSION=2023-10-01
```

### 2. **Install Dependencies**
```bash
cd next
npm install next-sanity @sanity/vision
```

### 3. **Start Development Server**
```bash
npm run dev
```

### 4. **Open Studio**
Navigate to: `http://localhost:3000/studio`

## 📸 **Upload Images to Get Asset IDs**

### **Method 1: Use the Helper Scripts**

1. **Upload images to Studio**:
   - Go to `http://localhost:3000/studio`
   - Click "Media" in sidebar
   - Upload your product images, brand logos, and drop hero images

2. **Get asset IDs**:
   ```bash
   node get-asset-ids.js
   ```

3. **Update seed file**:
   - Edit `update-seed-with-real-ids.js`
   - Replace `YOUR_*_ID` placeholders with actual asset IDs
   - Run: `node update-seed-with-real-ids.js`

4. **Import updated seed**:
   ```bash
   npx sanity@latest dataset import seed-with-real-images.ndjson production --replace
   ```

### **Method 2: Manual Update**

1. **Upload images** to Studio → Media
2. **Copy asset IDs** from Studio interface
3. **Edit `seed-with-images.ndjson`** directly
4. **Replace placeholder IDs** with real ones
5. **Import seed**:
   ```bash
   npx sanity@latest dataset import seed-with-images.ndjson production --replace
   ```

## 🖼️ **Image Requirements**

### **Brand Logos** (2 needed)
- Cannabis Co logo
- Green Valley Labs logo
- **Size**: 1920x1080px recommended
- **Format**: PNG with transparency

### **Product Images** (14 needed)
- Pink Dream: 1 main + 2 gallery
- Chill Gummies: 1 main + 1 gallery  
- Sparkling Mango: 1 main + 1 gallery
- Glass Pipe: 1 main + 2 gallery
- Blue Dream: 1 main + 1 gallery
- Chocolate Cookies: 1 main + 1 gallery
- **Size**: 800x800px recommended
- **Format**: JPG

### **Drop Hero Images** (2 needed)
- CHILL Limited September hero
- Weekend Warrior hero
- **Size**: 1920x1080px recommended
- **Format**: JPG

## 🔧 **Asset ID Mapping**

The seed file uses these placeholder IDs that need to be replaced:

```javascript
// Brand logos
'image-8b8b8b8b8b8b8b8b8b8b8b8b-1920x1080-jpg' → Your Cannabis Co logo ID
'image-9c9c9c9c9c9c9c9c9c9c9c9c-1920x1080-jpg' → Your Green Valley logo ID

// Product images
'image-1a1a1a1a1a1a1a1a1a1a1a1a-800x800-jpg' → Pink Dream main
'image-1b1b1b1b1b1b1b1b1b1b1b1b-800x800-jpg' → Pink Dream gallery 1
// ... and so on
```

## ✅ **Testing Checklist**

After importing seed with real asset IDs:

- [ ] Studio shows all products with images
- [ ] Brand logos appear in product cards
- [ ] Product galleries work on detail pages
- [ ] Drop hero images display correctly
- [ ] Images are responsive on mobile
- [ ] No broken image links in console

## 🚨 **Troubleshooting**

### **Scripts Don't Work**
- Ensure you're in the `/next` directory
- Check that `@sanity/client` is installed
- Verify project ID: `jutkwtrs`

### **Images Don't Display**
- Check browser console for errors
- Verify asset IDs are correct
- Ensure CORS is configured in Sanity project

### **Studio Won't Load**
- Check environment variables are set
- Restart development server
- Verify project ID matches

## 🎯 **Next Steps**

1. **Upload images** to Studio
2. **Get asset IDs** using scripts
3. **Update seed file** with real IDs
4. **Import seed data**
5. **Test marketplace pages** with images
6. **Customize content** as needed

Your marketplace will be fully functional with beautiful images! 🚀
