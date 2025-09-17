import { getBuilderContent, getBuilderPage, getBuilderPageBySlug } from './builder-config';

// Cache for Builder.io content to improve performance
const contentCache = new Map<string, any>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

interface CacheEntry {
  content: any;
  timestamp: number;
}

// Utility to get cached content
const getCachedContent = (key: string): any | null => {
  const cached = contentCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.content;
  }
  return null;
};

// Utility to set cached content
const setCachedContent = (key: string, content: any): void => {
  contentCache.set(key, {
    content,
    timestamp: Date.now(),
  });
};

// Clear expired cache entries
const clearExpiredCache = (): void => {
  const now = Date.now();
  for (const [key, entry] of contentCache.entries()) {
    if (now - entry.timestamp > CACHE_DURATION) {
      contentCache.delete(key);
    }
  }
};

// Fetch Builder.io content with caching
export const fetchBuilderContent = async (
  model: string,
  options: any = {},
  useCache: boolean = true
): Promise<any> => {
  const cacheKey = `${model}:${JSON.stringify(options)}`;
  
  // Check cache first
  if (useCache) {
    const cached = getCachedContent(cacheKey);
    if (cached) {
      return cached;
    }
  }

  try {
    const content = await getBuilderContent(model, options);
    
    // Cache the result
    if (useCache && content) {
      setCachedContent(cacheKey, content);
    }
    
    return content;
  } catch (error) {
    console.error(`Error fetching Builder.io content for model ${model}:`, error);
    return null;
  }
};

// Fetch Builder.io page by URL with caching
export const fetchBuilderPage = async (
  url: string,
  useCache: boolean = true
): Promise<any> => {
  const cacheKey = `page:url:${url}`;
  
  if (useCache) {
    const cached = getCachedContent(cacheKey);
    if (cached) {
      return cached;
    }
  }

  try {
    const content = await getBuilderPage(url);
    
    if (useCache && content) {
      setCachedContent(cacheKey, content);
    }
    
    return content;
  } catch (error) {
    console.error(`Error fetching Builder.io page for URL ${url}:`, error);
    return null;
  }
};

// Fetch Builder.io page by slug with caching
export const fetchBuilderPageBySlug = async (
  slug: string,
  useCache: boolean = true
): Promise<any> => {
  const cacheKey = `page:slug:${slug}`;
  
  if (useCache) {
    const cached = getCachedContent(cacheKey);
    if (cached) {
      return cached;
    }
  }

  try {
    const content = await getBuilderPageBySlug(slug);
    
    if (useCache && content) {
      setCachedContent(cacheKey, content);
    }
    
    return content;
  } catch (error) {
    console.error(`Error fetching Builder.io page for slug ${slug}:`, error);
    return null;
  }
};

// Fetch multiple Builder.io pages
export const fetchBuilderPages = async (
  options: any = {},
  useCache: boolean = true
): Promise<any[]> => {
  const cacheKey = `pages:${JSON.stringify(options)}`;
  
  if (useCache) {
    const cached = getCachedContent(cacheKey);
    if (cached) {
      return cached;
    }
  }

  try {
    const content = await fetchBuilderContent('page', {
      ...options,
      query: {
        ...options.query,
        limit: options.limit || 20,
        offset: options.offset || 0,
      }
    }, false); // Don't cache individual page fetches
    
    if (useCache && content) {
      setCachedContent(cacheKey, content);
    }
    
    return content || [];
  } catch (error) {
    console.error('Error fetching Builder.io pages:', error);
    return [];
  }
};

// Search Builder.io content
export const searchBuilderContent = async (
  model: string,
  searchTerm: string,
  options: any = {}
): Promise<any[]> => {
  try {
    const content = await fetchBuilderContent(model, {
      ...options,
      query: {
        ...options.query,
        'data.title': { $regex: searchTerm, $options: 'i' }
      }
    }, false);
    
    return content || [];
  } catch (error) {
    console.error(`Error searching Builder.io content for "${searchTerm}":`, error);
    return [];
  }
};

// Get Builder.io content by tags
export const getBuilderContentByTags = async (
  model: string,
  tags: string[],
  options: any = {}
): Promise<any[]> => {
  try {
    const content = await fetchBuilderContent(model, {
      ...options,
      query: {
        ...options.query,
        'data.tags': { $in: tags }
      }
    }, false);
    
    return content || [];
  } catch (error) {
    console.error(`Error fetching Builder.io content by tags ${tags}:`, error);
    return [];
  }
};

// Clear all cache
export const clearBuilderCache = (): void => {
  contentCache.clear();
};

// Clear expired cache entries (call this periodically)
export const cleanupBuilderCache = (): void => {
  clearExpiredCache();
};

// Get cache statistics
export const getBuilderCacheStats = (): { size: number; entries: string[] } => {
  return {
    size: contentCache.size,
    entries: Array.from(contentCache.keys()),
  };
};

// Preload Builder.io content for better performance
export const preloadBuilderContent = async (
  urls: string[]
): Promise<void> => {
  const promises = urls.map(url => fetchBuilderPage(url, true));
  await Promise.allSettled(promises);
};

// Validate Builder.io content
export const validateBuilderContent = (content: any): boolean => {
  if (!content) return false;
  
  // Basic validation - check if content has required fields
  return content.id && content.data && typeof content.data === 'object';
};

// Extract metadata from Builder.io content
export const extractBuilderMetadata = (content: any): {
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
} => {
  if (!validateBuilderContent(content)) {
    return {};
  }

  return {
    title: content.data?.title || content.data?.headline,
    description: content.data?.description || content.data?.subheadline,
    image: content.data?.image || content.data?.backgroundImage,
    tags: content.data?.tags || [],
  };
}; 