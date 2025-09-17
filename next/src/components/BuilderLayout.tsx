import React from 'react';
import RootLayout from './RootLayout';

// Fallback BuilderComponent when @builder.io/react is not installed
const BuilderComponent = ({ model, content }: any) => (
  <div className="builder-content">
    <div className="p-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Builder.io Content</h2>
      <p className="text-gray-600 mb-4">
        This is where your Builder.io content will render once the package is installed.
      </p>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-sm text-gray-500">
          Model: {model} | Content ID: {content?.id || 'No content'}
        </p>
      </div>
    </div>
  </div>
);

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
        {/* Builder.io content will render here */}
        <BuilderComponent model={model} content={content} />
        
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