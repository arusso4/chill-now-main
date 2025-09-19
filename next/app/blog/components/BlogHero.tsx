"use client";
import React from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { darkCanvas, gradText } from "@/lib/brand";

interface BlogHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function BlogHero({ searchQuery, setSearchQuery }: BlogHeroProps) {
  return (
    <header className={`relative ${darkCanvas} pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          <span className="text-white">Insights & </span>
          <span className={`${gradText} drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]`}>
            Updates
          </span>
        </h1>
        <p className="mt-3 text-center text-zinc-300 max-w-2xl mx-auto text-xl sm:text-2xl mb-8">
          Insights, research, and stories from the world of premium cannabis delivery
        </p>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
            <Input 
              placeholder="Search articles..." 
              className="pl-10 bg-white/5 border-white/10 text-zinc-100 placeholder:text-zinc-400 focus:ring-2 focus:ring-fuchsia-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border-white/10 hover:bg-white/5 text-zinc-100"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>
      </div>
    </header>
  );
}
