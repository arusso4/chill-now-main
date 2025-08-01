import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, ArrowRight, Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { getAllPosts, getAllCategories, getPostsByCategory, type BlogPost } from "@/lib/blog";

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const filteredPosts = selectedCategory === "All" 
    ? allPosts 
    : getPostsByCategory(selectedCategory);
  
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>ChillNOW Blog - Cannabis Lifestyle, Wellness & Industry Insights</title>
        <meta 
          name="description" 
          content="Discover cannabis lifestyle tips, wellness insights, and industry trends. Expert articles on premium cannabis products, delivery innovation, and the future of cannabis culture." 
        />
        <meta name="keywords" content="cannabis blog, cannabis lifestyle, wellness tips, cannabis industry, cannabis delivery, premium cannabis, cannabis culture" />
        <link rel="canonical" href="https://chillnow.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chillnow.com/blog" />
        <meta property="og:title" content="ChillNOW Blog - Cannabis Lifestyle, Wellness & Industry Insights" />
        <meta property="og:description" content="Discover cannabis lifestyle tips, wellness insights, and industry trends. Expert articles on premium cannabis products, delivery innovation, and the future of cannabis culture." />
        <meta property="og:image" content="https://chillnow.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ChillNOW" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chillnow" />
        <meta name="twitter:creator" content="@chillnow" />
        <meta name="twitter:url" content="https://chillnow.com/blog" />
        <meta name="twitter:title" content="ChillNOW Blog - Cannabis Lifestyle, Wellness & Industry Insights" />
        <meta name="twitter:description" content="Discover cannabis lifestyle tips, wellness insights, and industry trends. Expert articles on premium cannabis products, delivery innovation, and the future of cannabis culture." />
        <meta name="twitter:image" content="https://chillnow.com/og-image.jpg" />
        <meta name="twitter:image:alt" content="ChillNOW cannabis blog and lifestyle content" />
      </Helmet>
      
      <div className="min-h-screen bg-background pt-16">
      
      {/* Header */}
      <header className="pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 bg-gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Insights, research, and stories from the world of premium cannabis delivery
          </p>
          
          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 bg-card/50 border-border/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === selectedCategory ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPosts.length > 0 && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Featured Article</h2>
            {featuredPosts.map((post) => (
              <article key={post.id} className="bg-card rounded-xl overflow-hidden shadow-lg border border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-4xl mb-2">🏆</div>
                      <div className="text-sm">Blog Image</div>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">
                      {post.category}
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-6">
                      By {post.author}
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button className="w-fit">
                        Read Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-2xl mb-1">📝</div>
                    <div className="text-xs">Blog Image</div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs font-semibold">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      By {post.author}
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                        Read More
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-hero">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest cannabis insights, research, and wellness tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="bg-card/50 border-border/50"
            />
            <Button className="whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
    </>
  );
};

export default Blog; 