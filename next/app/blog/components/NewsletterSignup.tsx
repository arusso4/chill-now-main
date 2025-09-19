"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { darkCanvas, gradButton } from "@/lib/brand";

export default function NewsletterSignup() {
  return (
    <section className={`py-16 px-4 sm:px-6 ${darkCanvas}`}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          Stay Updated
        </h2>
        <p className="text-lg text-zinc-300 mb-8">
          Get the latest cannabis insights, research, and wellness tips delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            placeholder="Enter your email" 
            className="bg-white/5 border-white/10 text-zinc-100 placeholder:text-zinc-400 focus:ring-2 focus:ring-fuchsia-500"
          />
          <Button className={`whitespace-nowrap ${gradButton} text-white font-semibold`}>
            Subscribe
          </Button>
        </div>
        <p className="text-xs text-zinc-400 mt-4">
          No spam, unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
