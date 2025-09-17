"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';

interface BuilderFallbackProps {
  slug?: string;
  error?: string;
}

const BuilderFallback: React.FC<BuilderFallbackProps> = ({ slug, error }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
          {/* Icon */}
          <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
            <AlertCircle className="w-8 h-8 text-orange-600" />
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {error ? 'Page Not Found' : 'Content Not Available'}
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-6">
            {error ? (
              error
            ) : (
              <>
                The page <span className="font-semibold text-gray-800">/{slug}</span> hasn't been created in Builder.io yet.
              </>
            )}
          </p>

          {/* Actions */}
          <div className="space-y-3">
            <Link href="/">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </Button>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="w-full flex items-center justify-center px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>

          {/* Builder.io Info */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              This page is powered by Builder.io. Create content in your Builder.io dashboard to see it here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderFallback; 