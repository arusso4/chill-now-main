# ChillNOW - Next.js Migration

This is the Next.js version of the ChillNOW application, migrated from Vite + React to Next.js with App Router.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env.local
   ```
   Then edit `.env.local` with your actual values.

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── testimonials/      # Testimonials page
│   ├── drive/             # Drive page
│   ├── marketplace/       # Marketplace page
│   ├── faq/               # FAQ page
│   ├── safety/            # Safety page
│   ├── add-your-brand/    # Add Your Brand page
│   ├── report-issue/      # Report Issue page
│   ├── coming-soon/       # Coming Soon page
│   ├── limited-drops/     # Limited Drops page
│   ├── builder/           # Builder.io dynamic pages
│   ├── components/        # App-specific components
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   └── providers.tsx      # Client providers
├── src/
│   ├── components/        # React components
│   ├── lib/               # Utility libraries
│   ├── hooks/             # Custom hooks
│   ├── integrations/      # External integrations
│   ├── assets/            # Static assets
│   └── content/           # Content files
├── public/                # Public assets
├── content/               # Content management
├── supabase/              # Supabase configuration
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# OpenAI Configuration
OPENAI_API_KEY=sk-your_actual_api_key_here

# Optional: Debug mode
NEXT_PUBLIC_DEBUG=false
```

### Next.js Configuration

The `next.config.mjs` file includes:
- Image optimization for Supabase and Sanity CDNs
- Package import optimization for better performance

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS Variables**: For theming and design tokens
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Built-in dark mode support

## 📱 Features

- **App Router**: Next.js 13+ App Router for better performance
- **TypeScript**: Full TypeScript support
- **SEO Optimized**: Built-in SEO with metadata API
- **Responsive**: Mobile-first responsive design
- **Accessibility**: WCAG compliant components
- **Performance**: Optimized for Core Web Vitals

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔄 Migration Notes

### Key Changes from Vite

1. **Routing**: React Router → Next.js App Router
2. **Environment Variables**: `VITE_*` → `NEXT_PUBLIC_*` (client) / no prefix (server)
3. **Meta Tags**: React Helmet → Next.js Metadata API
4. **Image Optimization**: Manual → Next.js Image component
5. **Build System**: Vite → Next.js built-in bundler

### Preserved Features

- All existing components and functionality
- Supabase integration
- OpenAI integration
- Tailwind CSS styling
- TypeScript configuration
- All existing pages and routes

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Export a default React component
4. Add metadata export for SEO

### Adding New Components

1. Create component in `src/components/`
2. Import and use in pages
3. Follow existing patterns for styling and structure

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
