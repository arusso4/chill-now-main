"use client";
import React, { useState } from "react";
import { getAllPosts, getAllCategories, getPostsByCategory, type BlogPost } from "@/lib/blog";
import { darkCanvas } from "@/lib/brand";
import BlogHero from "./components/BlogHero";
import CategoryPills from "./components/CategoryPills";
import FeaturedRow from "./components/FeaturedRow";
import BlogGrid from "./components/BlogGrid";
import Pagination from "./components/Pagination";
import NewsletterSignup from "./components/NewsletterSignup";

export default function BlogPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const filteredPosts = selectedCategory === "All" 
    ? allPosts 
    : getPostsByCategory(selectedCategory);
  
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);
  
  // Simple pagination - show 6 posts per page
  const postsPerPage = 6;
  const totalPages = Math.ceil(regularPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const paginatedPosts = regularPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className={`min-h-screen ${darkCanvas} pt-16`}>
      <BlogHero 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
      />
      
      <CategoryPills 
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      
      <FeaturedRow featuredPosts={featuredPosts} />
      
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Latest Articles</h2>
          <BlogGrid posts={paginatedPosts} />
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
      
      <NewsletterSignup />
    </div>
  );
}
