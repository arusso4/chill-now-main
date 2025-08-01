import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Heart,
  MessageCircle,
  User,
  Tag,
  Bookmark
} from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    if (id) {
      const foundPost = getPostBySlug(id);
      setPost(foundPost);
      
      // Get related posts (same category, excluding current post)
      if (foundPost) {
        const allPosts = getAllPosts();
        const related = allPosts
          .filter(p => p.category === foundPost.category && p.slug !== id)
          .slice(0, 3);
        setRelatedPosts(related);
      }
    }
  }, [id]);

  if (!post) {
    return (
      <>
        <Helmet>
          <title>Blog Post Not Found | ChillNOW</title>
          <meta name="description" content="The requested blog post could not be found." />
        </Helmet>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | ChillNOW Blog</title>
        <meta 
          name="description" 
          content={post.excerpt || `Read ${post.title} on ChillNOW's blog. Discover insights about cannabis delivery, wellness, and premium products.`}
        />
        <meta name="keywords" content={`${post.category}, cannabis blog, ${post.tags?.join(', ') || 'cannabis, wellness, delivery'}`} />
        <link rel="canonical" href={`https://chillnow.com/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://chillnow.com/blog/${post.slug}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || `Read ${post.title} on ChillNOW's blog.`} />
        <meta property="og:image" content="https://chillnow.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ChillNOW" />
        <meta property="og:locale" content="en_US" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        {post.tags?.map((tag: string) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chillnow" />
        <meta name="twitter:creator" content="@chillnow" />
        <meta name="twitter:url" content={`https://chillnow.com/blog/${post.slug}`} />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt || `Read ${post.title} on ChillNOW's blog.`} />
        <meta name="twitter:image" content="https://chillnow.com/og-image.jpg" />
        <meta name="twitter:image:alt" content={`${post.title} - ChillNOW blog post`} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
      
      {/* Navigation */}
      <nav className="py-4 px-4 sm:px-6 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link to="/blog">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Bookmark className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <header className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Badge variant="secondary">
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          {/* Hero Image */}
          {post.image && (
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 sm:h-80 object-cover rounded-xl"
              />
            </div>
          )}
          
          {/* Author Info */}
          <div className="flex items-center gap-4 p-6 bg-card rounded-xl border border-border">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
              {post.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <div className="font-semibold">{post.author}</div>
              <div className="text-sm text-muted-foreground">Contributing Writer</div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-lg prose-invert max-w-none">
            <div className="bg-card rounded-xl p-8 border border-border">
              <div className="prose prose-lg prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground prose-blockquote:text-muted-foreground prose-code:text-primary prose-pre:bg-secondary prose-pre:text-foreground">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => <h1 className="text-3xl font-bold mb-6 text-foreground">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-2xl font-bold mb-4 mt-8 text-foreground">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-xl font-bold mb-3 mt-6 text-foreground">{children}</h3>,
                    p: ({ children }) => <p className="mb-4 leading-relaxed text-muted-foreground">{children}</p>,
                    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-muted-foreground">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-muted-foreground">{children}</ol>,
                    li: ({ children }) => <li className="text-muted-foreground">{children}</li>,
                    strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
                    em: ({ children }) => <em className="italic text-muted-foreground">{children}</em>,
                    blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground mb-4">{children}</blockquote>,
                    code: ({ children }) => <code className="bg-secondary px-2 py-1 rounded text-primary font-mono text-sm">{children}</code>,
                    pre: ({ children }) => <pre className="bg-secondary p-4 rounded-lg overflow-x-auto mb-4">{children}</pre>,
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </div>
            </div>
          </article>
          
          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-hero">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get more insights like this delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 rounded-lg bg-card/50 border border-border/50 text-foreground placeholder:text-muted-foreground"
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

export default BlogPost; 