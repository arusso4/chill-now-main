# Builder.io Setup Guide

This guide will help you set up Builder.io with your React + Vite project to enable visual page building and custom component editing.

## 🚀 Quick Start

### 1. Install Builder.io Dependencies

Due to compilation issues with the `isolated-vm` dependency, you may need to use one of these approaches:

**Option A: Use yarn instead of npm**
```bash
yarn add @builder.io/react @builder.io/sdk
```

**Option B: Install with legacy peer deps**
```bash
npm install @builder.io/react @builder.io/sdk --legacy-peer-deps
```

**Option C: Install only the React package**
```bash
npm install @builder.io/react
```

### 2. Get Your Builder.io API Key

1. Sign up at [builder.io](https://builder.io)
2. Create a new space
3. Go to Account Settings → API Keys
4. Copy your Public API Key

### 3. Configure Builder.io

Update `src/lib/builder-config.ts`:

```typescript
import { Builder } from '@builder.io/react';

export const BUILDER_API_KEY = 'YOUR_ACTUAL_API_KEY_HERE';

export const initializeBuilder = () => {
  Builder.init(BUILDER_API_KEY);
};

export const registerCustomComponents = () => {
  import { CustomCard, CustomHero } from '../components/BuilderComponents';
  
  Builder.registerComponent(
    {
      name: 'CustomCard',
      inputs: [
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Card Title',
          required: true,
        },
        {
          name: 'image',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
          defaultValue: 'https://via.placeholder.com/400x300',
        },
        {
          name: 'description',
          type: 'string',
          defaultValue: 'This is a custom card component built with Builder.io',
        },
        {
          name: 'buttonText',
          type: 'string',
          defaultValue: 'Learn More',
        },
        {
          name: 'buttonLink',
          type: 'url',
          defaultValue: '#',
        },
      ],
      image: 'https://tabler-icons.io/static/tabler-icons/icons-png/card.png',
      defaultStyles: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
      },
    },
    {
      component: CustomCard,
    }
  );

  Builder.registerComponent(
    {
      name: 'CustomHero',
      inputs: [
        {
          name: 'headline',
          type: 'string',
          defaultValue: 'Welcome to Our Site',
          required: true,
        },
        {
          name: 'subheadline',
          type: 'string',
          defaultValue: 'This is a custom hero component',
        },
        {
          name: 'backgroundImage',
          type: 'file',
          allowedFileTypes: ['jpeg', 'jpg', 'png', 'webp'],
        },
        {
          name: 'ctaText',
          type: 'string',
          defaultValue: 'Get Started',
        },
        {
          name: 'ctaLink',
          type: 'url',
          defaultValue: '#',
        },
      ],
      image: 'https://tabler-icons.io/static/tabler-icons/icons-png/layout-navbar.png',
      defaultStyles: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '40px 20px',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
      },
    },
    {
      component: CustomHero,
    }
  );
};

export const getBuilderPage = async (url: string) => {
  return await Builder.get('page', { url });
};
```

### 4. Update BuilderLayout Component

Update `src/components/BuilderLayout.tsx`:

```typescript
import React from 'react';
import { BuilderComponent } from '@builder.io/react';
import RootLayout from './RootLayout';

interface BuilderLayoutProps {
  model?: string;
  content?: any;
  children?: React.ReactNode;
}

const BuilderLayout: React.FC<BuilderLayoutProps> = ({ 
  model = 'page', 
  content, 
  children 
}) => {
  return (
    <RootLayout>
      <div className="min-h-screen bg-background">
        {/* Builder.io content */}
        {content && (
          <BuilderComponent
            model={model}
            content={content}
          />
        )}
        
        {/* Fallback content if no Builder content */}
        {!content && children && (
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        )}
      </div>
    </RootLayout>
  );
};

export default BuilderLayout;
```

### 5. Initialize Builder.io in Your App

Update `src/App.tsx` to initialize Builder.io:

```typescript
import { useEffect } from 'react';
import { initializeBuilder, registerCustomComponents } from '@/lib/builder-config';

const App = () => {
  useEffect(() => {
    // Initialize Builder.io
    initializeBuilder();
    registerCustomComponents();
  }, []);

  return (
    // ... existing JSX
  );
};
```

## 📝 Usage

### Creating Pages in Builder.io

1. Go to your Builder.io dashboard
2. Create a new page
3. Use the visual editor to design your page
4. Add your custom components (CustomCard, CustomHero) from the components panel
5. Publish the page

### Accessing Builder Pages

Your Builder.io pages will be accessible at:
- `/builder` - Main builder page
- `/builder/your-page-slug` - Specific builder pages

### Custom Components

The setup includes two example custom components:

#### CustomCard
- **Title** (required): Card title
- **Image**: Card image
- **Description**: Card description
- **Button Text**: CTA button text
- **Button Link**: CTA button URL

#### CustomHero
- **Headline** (required): Main headline
- **Subheadline**: Subtitle text
- **Background Image**: Hero background
- **CTA Text**: Call-to-action button text
- **CTA Link**: Call-to-action button URL

## 🔧 Advanced Configuration

### Adding More Custom Components

1. Create your component in `src/components/BuilderComponents.tsx`
2. Register it in `src/lib/builder-config.ts`
3. The component will appear in the Builder.io visual editor

### Styling Custom Components

Custom components use Tailwind CSS classes and can be styled using:
- Tailwind utility classes
- CSS modules
- Styled components
- Inline styles

### SEO and Meta Tags

Builder.io pages support dynamic meta tags. You can configure these in the Builder.io dashboard under the page settings.

## 🚨 Troubleshooting

### Installation Issues

If you encounter compilation errors with `isolated-vm`:

1. **Try yarn**: `yarn add @builder.io/react`
2. **Use legacy peer deps**: `npm install --legacy-peer-deps`
3. **Update Node.js**: Ensure you're using Node.js 18+ with C++20 support
4. **Install Xcode Command Line Tools**: `xcode-select --install`

### Component Not Appearing

1. Ensure the component is properly registered
2. Check the console for registration errors
3. Refresh the Builder.io editor
4. Verify the component name matches exactly

### API Key Issues

1. Verify your API key is correct
2. Check that your Builder.io space is active
3. Ensure the API key has the correct permissions

## 📚 Resources

- [Builder.io Documentation](https://www.builder.io/c/docs)
- [React Integration Guide](https://www.builder.io/c/docs/developers)
- [Custom Components Guide](https://www.builder.io/c/docs/custom-components)
- [API Reference](https://www.builder.io/c/docs/api)

## 🎯 Next Steps

1. Install the Builder.io packages
2. Configure your API key
3. Create your first page in the visual editor
4. Add custom components to your pages
5. Publish and test your pages

Happy building! 🚀 