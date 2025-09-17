import { useNavigate } from 'react-router-dom';

// List of internal pages that should use scroll-to-top behavior
const INTERNAL_PAGES = [
  '/blog',
  '/about',
  '/faq',
  '/safety',
  '/drive',
  '/driver',
  '/add-your-brand',
  '/marketplace',
  '/testimonials',
  '/coming-soon'
];

export const useScrollToTop = () => {
  const navigate = useNavigate();

  const navigateWithScrollToTop = (path: string) => {
    // Check if this is an internal page that should use scroll-to-top
    const isInternalPage = INTERNAL_PAGES.some(page => path.startsWith(page));
    
    if (isInternalPage) {
      // Disable smooth scrolling temporarily
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      
      // Navigate to the path
      navigate(path);
      
      // Scroll to top immediately after navigation
      setTimeout(() => {
        window.scrollTo(0, 0);
        // Restore smooth scrolling after a brief delay
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = originalScrollBehavior;
        }, 100);
      }, 0);
    } else {
      // For external links or non-internal pages, use regular navigation
      navigate(path);
    }
  };

  return navigateWithScrollToTop;
}; 