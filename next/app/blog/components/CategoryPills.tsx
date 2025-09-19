"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";

interface CategoryPillsProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function CategoryPills({ 
  categories, 
  selectedCategory, 
  setSelectedCategory 
}: CategoryPillsProps) {
  return (
    <section className="py-8 px-4 sm:px-6 border-b border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant="outline"
              className={`cursor-pointer transition-all font-semibold rounded-full px-3.5 py-1.5 text-sm border ${
                category === selectedCategory 
                  ? "bg-fuchsia-500/20 text-white border-fuchsia-500/40" 
                  : "bg-white/5 text-zinc-200 border-white/10 hover:bg-white/10"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
