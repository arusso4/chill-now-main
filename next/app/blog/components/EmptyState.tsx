"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { gradButton } from "@/lib/brand";

interface EmptyStateProps {
  title?: string;
  description?: string;
  showWaitlistCTA?: boolean;
}

export default function EmptyState({ 
  title = "No posts found", 
  description = "Try adjusting your search or filter criteria.",
  showWaitlistCTA = false 
}: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      <div className="text-6xl mb-6">🔍</div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-zinc-400 mb-8 max-w-md mx-auto">{description}</p>
      
      {showWaitlistCTA && (
        <Button className={`${gradButton} text-white font-semibold`}>
          Join Waitlist
        </Button>
      )}
    </div>
  );
}
