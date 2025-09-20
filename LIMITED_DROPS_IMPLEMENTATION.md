# ChillNOW Limited Drops Implementation

## 🎯 Overview

A complete Limited Drops system for chillNOW featuring time-boxed exclusive launches with live countdowns, drop status management, and Foxy.io checkout integration. Built with Next.js App Router, Tailwind CSS, and Sanity CMS.

## 🎨 Design System

### Color Palette
- **Background**: Deep black (`bg-[#0b0f14]`)
- **Gradients**: Purple & pink radial gradients
- **Headlines**: `from-fuchsia-500 via-pink-500 to-violet-600`
- **CTAs**: `from-emerald-500 to-fuchsia-500`
- **Cards**: `bg-[#0d1117]` with `border-white/10`

### Status Badges
- **Live**: `bg-fuchsia-500 text-white` with 🔴 icon
- **Upcoming**: `bg-white/10 text-zinc-300` with ⏰ icon
- **Ended**: `bg-zinc-700 text-zinc-400 line-through`

### Countdown Styling
- **Digits**: Bold white text with neon pink shadow
- **Format**: DD:HH:MM:SS (zero-padded)
- **Grid**: 4-column layout with rounded cards

## 📁 File Structure

```
/next/app/drops/
├── page.tsx                    # Main drops index page
├── [slug]/
│   └── page.tsx               # Individual drop detail page
└── components/
    ├── DropsHero.tsx          # Hero section for drops index
    ├── DropGrid.tsx           # Grid of all drops
    ├── DropCard.tsx           # Individual drop card
    ├── DropCountdown.tsx      # Live countdown timer (client)
    ├── DropDetailHero.tsx     # Hero for drop detail page
    ├── DropProductList.tsx    # Products in a drop
    ├── ReserveButton.tsx      # Reserve/add-to-cart (client)
    └── CTASection.tsx         # Pink CTA section

/next/app/api/
└── reserve/
    └── route.ts               # Reserve API endpoint

/next/src/lib/
└── foxy.ts                    # Updated with drop helpers

/next/sanity/schemas/
└── drop.ts                    # Drop and market schemas
```

## 🛒 Reserve Flow

### 1. ReserveButton Component
- **Quantity selector** with +/- buttons
- **Stock validation** (max per person, available quantity)
- **API call** to `/api/reserve` endpoint
- **Foxy form submission** with hidden inputs
- **Success feedback** with screen reader announcements

### 2. Reserve API (`/api/reserve`)
- **Validates** product availability and inventory
- **Checks** drop status and quantity limits
- **Returns** Foxy.io payload for cart submission
- **Logs** reservation attempts for analytics

### 3. Foxy.io Integration
- **Hidden form** with product data
- **Auto-submission** to Foxy cart
- **Meta fields** for drop tracking
- **Category tagging** for drop products

## ⏰ Countdown System

### DropCountdown Component
- **Real-time updates** every second
- **Status detection**: upcoming/live/ended
- **Format**: DD:HH:MM:SS with neon glow
- **Accessibility**: `aria-live="polite"`
- **Auto-cleanup** on component unmount

### Status Logic
```typescript
const now = new Date().getTime();
const startTime = new Date(startAt).getTime();
const endTime = new Date(endAt).getTime();

if (now < startTime) status = 'upcoming';
else if (now >= startTime && now < endTime) status = 'live';
else status = 'ended';
```

## 🗄️ Sanity CMS Integration

### Drop Schema
```typescript
{
  title: string;
  slug: slug;
  startAt: datetime;
  endAt: datetime;
  mode: "first-come" | "raffle";
  products: Array<{
    product: reference;
    variantSku: string;
    price: number;
    cap: number;
    sold: number;
    maxPerPerson: number;
  }>;
  heroImage: image;
  featured: boolean;
  markets: reference[];
}
```

### Market Schema
```typescript
{
  name: string;
  slug: slug;
  state: string;
  country: string;
  active: boolean;
}
```

## 🎯 Key Features

### ✅ Implemented
- [x] Drops index page with hero and grid
- [x] Individual drop detail pages
- [x] Live countdown timers with status
- [x] Drop status badges (upcoming/live/ended)
- [x] Product reservation with quantity selection
- [x] Stock progress bars and low-stock alerts
- [x] Foxy.io integration for checkout
- [x] Responsive design (mobile-first)
- [x] Accessibility features
- [x] SEO metadata
- [x] Sanity CMS schemas

### 🔄 Mock Data
Currently using mock data. Replace with Sanity integration:
- Update drop data in components
- Connect to Sanity API
- Implement real-time inventory tracking

## 🎨 Component Details

### DropsHero
- **Full viewport height** with gradient background
- **Drop stats** (active drops, duration, items sold)
- **Two CTAs** (view drops, get alerts)
- **Floating gradient elements** for visual interest

### DropGrid
- **Responsive grid** (1/2/3 columns)
- **Featured drops first** sorting
- **Status badges** and progress indicators
- **Hover animations** and smooth transitions

### DropCard
- **Hero image** with gradient fallback
- **Status badges** (live/upcoming/ended)
- **Mode indicators** (first-come/raffle)
- **Progress bars** for sold items
- **Countdown timer** integration

### DropDetailHero
- **Large hero image** with overlay
- **Drop statistics** (products, mode, sold %)
- **Live countdown** with status
- **Progress visualization**
- **Contextual CTAs** based on status

### DropProductList
- **Product grid** with images and details
- **Stock status badges** (in stock/low stock/sold out)
- **Progress bars** for each product
- **Reserve buttons** with quantity selection
- **Drop information panel**

### ReserveButton
- **Quantity selector** with validation
- **API integration** for reservations
- **Foxy form submission** with hidden inputs
- **Success/error feedback**
- **Accessibility announcements**

## 🚀 Environment Setup

### Required Environment Variables
```env
NEXT_PUBLIC_FOXY_CART_URL=https://yourstore.foxycart.com/cart
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

### Dependencies
```json
{
  "next": "^14.0.0",
  "react": "^18.0.0",
  "tailwindcss": "^3.0.0",
  "@tailwindcss/typography": "^0.5.0",
  "tailwindcss-animate": "^1.0.0"
}
```

## 🧪 Testing Checklist

### Visual QA
- [ ] /drops shows all drops with countdown/status
- [ ] /drops/[slug] shows drop detail hero + products
- [ ] Countdown ticks live until start/end
- [ ] ReserveButton hits API and yields Foxy form
- [ ] Pink CTA section present
- [ ] All headings high contrast, no low opacity

### Functionality QA
- [ ] Countdown updates every second
- [ ] Status badges change based on time
- [ ] Reserve button validates quantities
- [ ] API returns proper Foxy payload
- [ ] Forms submit to Foxy cart
- [ ] Mobile responsive design
- [ ] Accessibility features work

### Performance QA
- [ ] Countdown timers don't cause memory leaks
- [ ] Images load with Next.js optimization
- [ ] Smooth animations (60fps)
- [ ] Fast page load times

## 🔧 Customization

### Adding New Drop Modes
1. Update Sanity schema `mode` field options
2. Add mode-specific UI in components
3. Update API validation logic

### Styling Modifications
- Colors: Update Tailwind config
- Gradients: Modify CSS custom properties
- Animations: Adjust transition durations
- Layout: Update grid classes

### Foxy.io Customization
- Modify `foxy.ts` for custom fields
- Update form submission handling
- Add custom validation rules

## 📱 Responsive Breakpoints

- **Mobile**: 320px+ (1 column)
- **Tablet**: 768px+ (2 columns)
- **Desktop**: 1024px+ (3 columns)
- **Large**: 1280px+ (4 columns)

## 🎯 Next Steps

1. **Connect Sanity CMS**
   - Set up Sanity Studio
   - Create drop data
   - Implement API routes

2. **Foxy.io Setup**
   - Configure store settings
   - Test cart functionality
   - Set up webhooks

3. **Real-time Features**
   - WebSocket for live updates
   - Inventory tracking
   - Sold count updates

4. **Analytics Integration**
   - Drop performance tracking
   - Conversion analytics
   - User behavior analysis

## 🐛 Known Issues

- Mock data needs replacement with Sanity
- Foxy.io integration needs testing
- Real-time inventory updates needed
- Newsletter integration pending

## 📞 Support

For questions or issues with this implementation:
1. Check the component documentation
2. Review the Foxy.io integration guide
3. Test with the provided mock data
4. Verify environment variables are set

---

**Built with ❤️ for chillNOW Limited Drops**
