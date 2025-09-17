// Builder.io Configuration - Optional functionality
// This will only work when @builder.io/react is installed

// Fallback Builder object when package is not available
const createFallbackBuilder = () => ({
  init: () => console.log('Builder.io not available - package not installed'),
  get: async () => null,
  registerComponent: () => console.log('Builder.io not available - package not installed'),
});

let Builder: any = createFallbackBuilder();

// Replace with your actual Builder.io API key
export const BUILDER_API_KEY = 'YOUR_BUILDER_API_KEY';

// Initialize Builder.io
export const initializeBuilder = () => {
  Builder.init(BUILDER_API_KEY);
  console.log('Builder.io initialized successfully');
};

// Component registration function
export const registerCustomComponents = () => {
  // Import components dynamically to avoid circular dependencies
  import('../components/BuilderComponents').then(({ CustomCard, CustomHero }) => {
    // Register CustomCard component
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

    // Register CustomHero component
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

    console.log('Custom components registered successfully');
  });
};

// Utility function to fetch Builder.io content by model and options
export const getBuilderContent = async (model: string, options: any = {}) => {
  try {
    const content = await Builder.get(model, options);
    return content;
  } catch (error) {
    console.error(`Error fetching Builder.io content for model ${model}:`, error);
    return null;
  }
};

// Utility function to fetch Builder.io page by URL
export const getBuilderPage = async (url: string) => {
  return await getBuilderContent('page', { url });
};

// Utility function to fetch Builder.io page by slug
export const getBuilderPageBySlug = async (slug: string) => {
  return await getBuilderContent('page', { 
    query: {
      'data.slug': slug
    }
  });
};

// Utility function to fetch Builder.io content by ID
export const getBuilderContentById = async (id: string) => {
  return await getBuilderContent('page', { 
    query: {
      id: id
    }
  });
};

// Utility function to fetch multiple Builder.io pages
export const getBuilderPages = async (options: any = {}) => {
  return await getBuilderContent('page', {
    ...options,
    query: {
      ...options.query,
      limit: options.limit || 20,
      offset: options.offset || 0,
    }
  });
}; 