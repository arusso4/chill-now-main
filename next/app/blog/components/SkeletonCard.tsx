"use client";
import React from "react";
import { darkPanel } from "@/lib/brand";

export default function SkeletonCard() {
  return (
    <article className={`${darkPanel} rounded-2xl overflow-hidden animate-pulse`}>
      <div className="aspect-video bg-zinc-700"></div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-5 w-16 bg-zinc-700 rounded-full"></div>
          <div className="h-4 w-12 bg-zinc-700 rounded"></div>
        </div>
        <div className="h-6 bg-zinc-700 rounded mb-3"></div>
        <div className="h-4 bg-zinc-700 rounded mb-2"></div>
        <div className="h-4 bg-zinc-700 rounded w-3/4 mb-4"></div>
        <div className="flex items-center justify-between">
          <div className="h-3 w-20 bg-zinc-700 rounded"></div>
          <div className="h-8 w-20 bg-zinc-700 rounded"></div>
        </div>
      </div>
    </article>
  );
}
