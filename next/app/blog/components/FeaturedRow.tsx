"use client";
import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { type BlogPost } from "@/lib/blog";
import { darkPanel, gradCard, gradHover } from "@/lib/brand";

interface FeaturedRowProps {
  featuredPosts: BlogPost[];
}

export default function FeaturedRow({ featuredPosts }: FeaturedRowProps) {
  if (featuredPosts.length === 0) return null;

  return (
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Featured Article</h2>
        {featuredPosts.map((post) => (
          <article 
            key={post.id} 
            className={`${darkPanel} rounded-2xl overflow-hidden shadow-sm ${gradHover} transition-all`}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className={`h-44 md:h-full ${gradCard} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">🏆</div>
                  <div className="text-sm font-medium">Featured Article</div>
                </div>
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <Badge 
                  className="w-fit mb-4 bg-fuchsia-500/20 text-white border-fuchsia-500/40"
                >
                  {post.category}
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight text-white">
                  {post.title}
                </h3>
                <p className="text-zinc-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-zinc-400 mb-6">
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
                <div className="text-sm text-zinc-400 mb-6">
                  By {post.author}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <Button className="w-fit rounded-full border border-white/15 hover:bg-white/5 text-zinc-100 bg-transparent">
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
  );
}
