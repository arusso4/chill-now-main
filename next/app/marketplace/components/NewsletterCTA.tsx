"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // TODO: Replace with actual API call to Supabase
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4 bg-gradient-to-r from-fuchsia-500/10 via-pink-500/10 to-purple-500/10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-6xl mb-4">🎉</div>
            <h2 
              id="newsletter-heading"
              className="text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"
            >
              You're In!
            </h2>
            <p className="text-zinc-300 text-lg mb-6">
              Thanks for joining the chillNOW community. We'll notify you about 
              exclusive drops and special offers.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
            >
              Subscribe another email
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-fuchsia-500/10 via-pink-500/10 to-purple-500/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="newsletter-heading"
            className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 via-pink-500 to-violet-600 bg-clip-text text-transparent"
          >
            Stay in the Loop
          </h2>
          <p className="text-zinc-300 text-lg max-w-2xl mx-auto">
            Get early access to new products, exclusive drops, and special offers. 
            Join thousands of chillNOW community members.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white rounded-xl py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Subscribing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Join the Waitlist
                  </span>
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-zinc-400 text-sm">
                By subscribing, you agree to our{" "}
                <a href="/privacy" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="/terms" className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                  Terms of Service
                </a>
                . Unsubscribe at any time.
              </p>
            </div>

            {/* Social proof */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-center gap-6 text-zinc-400 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No spam, ever
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Unsubscribe anytime
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Exclusive offers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
