import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BuilderLayout from '@/components/BuilderLayout';
import BuilderFallback from '@/components/BuilderFallback';
import { getBuilderPage, getBuilderPageBySlug } from '@/lib/builder-config';

const BuilderPage: React.FC = () => {
  const { slug } = useParams<{ slug?: string }>();
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch Builder.io content by slug or URL
        let builderContent = null;
        
        if (slug) {
          // Try to fetch by slug first
          builderContent = await getBuilderPageBySlug(slug);
          
          // If not found by slug, try by URL
          if (!builderContent) {
            const url = `/${slug}`;
            builderContent = await getBuilderPage(url);
          }
        } else {
          // Fetch homepage content
          builderContent = await getBuilderPage('/');
        }
        
        if (builderContent) {
          setContent(builderContent);
        } else {
          setError('No content found for this page');
        }
      } catch (err) {
        console.error('Error fetching Builder.io content:', err);
        setError('Failed to load page content');
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [slug]);

  if (loading) {
    return (
      <BuilderLayout>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading Builder.io content...</p>
          </div>
        </div>
      </BuilderLayout>
    );
  }

  if (error) {
    return <BuilderFallback error={error} />;
  }

  // If no content is found, show fallback
  if (!content) {
    return <BuilderFallback slug={slug} />;
  }

  return (
    <BuilderLayout content={content}>
      {/* This will only show if Builder.io content is available */}
    </BuilderLayout>
  );
};

export default BuilderPage; 