import React from "react";
import DesktopNav from "@/components/DesktopNav";
import MobileNav from "@/components/MobileNav";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";

interface RootLayoutProps {
  children: React.ReactNode;
  showSkipLink?: boolean;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, showSkipLink = true }) => {
  return (
    <>
      {/* Skip Navigation Link for Accessibility */}
      {showSkipLink && (
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
      )}

      <div className="min-h-screen bg-background flex flex-col">
        {/* Desktop Navigation */}
        <DesktopNav />
        
        {/* Mobile Navigation */}
        <MobileNav />
        
        {/* Main Content */}
        <main id="main-content" role="main" className="flex-1">
          {children}
        </main>
        
        {/* Footer - Sticky on short pages, scrollable on long ones */}
        <Footer />
        
        {/* Chatbot Widget - Floating in bottom-right corner */}
        <ChatbotWidget />
      </div>
    </>
  );
};

export default RootLayout; 