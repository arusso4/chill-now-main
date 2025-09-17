"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundClient() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button asChild>
        <Link href="/">
          <Home className="w-4 h-4 mr-2" />
          Go Home
        </Link>
      </Button>
      <Button variant="outline" onClick={() => {
        if (typeof window !== 'undefined') {
          window.history.back();
        }
      }}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go Back
      </Button>
    </div>
  );
}
