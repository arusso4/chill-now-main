import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import RootLayout from "@/components/RootLayout";

import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Testimonials from "./pages/Testimonials";
import Drive from "./pages/Drive";
import AddYourBrand from "./pages/AddYourBrand";
import Marketplace from "./pages/Marketplace";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Safety from "./pages/Safety";
import ReportIssue from "./pages/ReportIssue";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import BuilderPage from "./pages/BuilderPage";

const queryClient = new QueryClient();

const App = () => {
  // Initialize Builder.io on app startup (optional)
  useEffect(() => {
    // Only initialize if Builder.io is available
    const initBuilder = async () => {
      try {
        const { initializeBuilder, registerCustomComponents } = await import('@/lib/builder-config');
        initializeBuilder();
        registerCustomComponents();
      } catch (error) {
        // Silently ignore Builder.io initialization errors
      }
    };
    
    // Delay initialization to avoid blocking app startup
    setTimeout(initBuilder, 1000);
  }, []);

  return (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={
              <RootLayout>
                <Index />
              </RootLayout>
            } />
            <Route path="/blog" element={
              <RootLayout>
                <Blog />
              </RootLayout>
            } />
            <Route path="/blog/:id" element={
              <RootLayout>
                <BlogPost />
              </RootLayout>
            } />
            <Route path="/testimonials" element={
              <RootLayout>
                <Testimonials />
              </RootLayout>
            } />
            <Route path="/drive" element={
              <RootLayout>
                <Drive />
              </RootLayout>
            } />
            <Route path="/driver" element={
              <RootLayout>
                <Drive />
              </RootLayout>
            } />
            <Route path="/add-your-brand" element={
              <RootLayout>
                <AddYourBrand />
              </RootLayout>
            } />
            <Route path="/marketplace" element={
              <RootLayout>
                <Marketplace />
              </RootLayout>
            } />
            <Route path="/about" element={
              <RootLayout>
                <About />
              </RootLayout>
            } />
            <Route path="/faq" element={
              <RootLayout>
                <FAQ />
              </RootLayout>
            } />
            <Route path="/safety" element={
              <RootLayout>
                <Safety />
              </RootLayout>
            } />
            <Route path="/report-issue" element={
              <RootLayout>
                <ReportIssue />
              </RootLayout>
            } />
            <Route path="/coming-soon" element={
              <RootLayout>
                <ComingSoon />
              </RootLayout>
            } />
            {/* Builder.io dynamic pages */}
            <Route path="/builder/:slug?" element={
              <BuilderPage />
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={
              <RootLayout>
                <NotFound />
              </RootLayout>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
  );
};

export default App;
