"use client";
import React from "react";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { type BlogPost } from "@/lib/blog";
import { darkPanel, gradCard, gradHover } from "@/lib/brand";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className={`${darkPanel} rounded-2xl overflow-hidden group ${gradHover} transition-all`}>
      <div className={`aspect-video ${gradCard} flex items-center justify-center`}>
        <div className="text-center text-white">
          <div className="text-2xl mb-1">📝</div>
          <div className="text-xs font-medium">Blog Image</div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <Badge className="text-xs font-semibold bg-fuchsia-500/20 text-white border-fuchsia-500/40">
            {post.category}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-zinc-400">
            <Clock className="w-3 h-3" />
            {post.readTime}
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3 leading-tight text-white line-clamp-2">
          {post.title}
        </h3>
        <p className="text-zinc-300 text-sm mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-zinc-400">
            By {post.author}
          </div>
          <Link href={`/blog/${post.slug}`}>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-zinc-100 hover:text-white hover:bg-white/5"
            >
              Read More
              <ArrowRight className="ml-1 w-3 h-3" />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
}
