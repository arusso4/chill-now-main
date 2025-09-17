"use client";
import React, { useState } from "react";
import { Search, Filter, Play, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getAllTestimonials, getAllTaglines, getTestimonialsByTagline, type Testimonial } from "@/lib/testimonials";

export default function TestimonialsPageClient() {
  const [selectedTagline, setSelectedTagline] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const allTestimonials = getAllTestimonials();
  const taglines = getAllTaglines();
  const filteredTestimonials = selectedTagline === "All" 
    ? allTestimonials 
    : getTestimonialsByTagline(selectedTagline);
  
  const featuredTestimonials = filteredTestimonials.slice(0, 3);
  const regularTestimonials = filteredTestimonials.slice(3);

  return (
    <div className="min-h-screen bg-background flex flex-col pt-16">
    
    {/* Header */}
    <header className="pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 bg-gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Testimonials
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Real stories from real people who've experienced the ChillNOW difference
        </p>
        
        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search testimonials..." 
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

    {/* Proof It Slaps Section */}
    <section className="w-full bg-[#0a0a0a] py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-purple-400 to-pink-400">
          Proof It Slaps
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          No actors. No scripts. Just real delivery magic.
        </p>
        <div className="mt-8 flex justify-center">
          <iframe
            className="rounded-2xl shadow-lg w-full max-w-3xl aspect-video"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="ChillNOW Testimonial Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>

    {/* Testimonial Submission Section */}
    <section className="w-full bg-[#0a0a0a] py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-green-300">
          Your Turn
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Had a chill moment? Drop your story and join the movement.
        </p>
        <form className="mt-8 max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
            required
          />
          <input
            type="text"
            placeholder="Who You Are (e.g. Wellness Enthusiast)"
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          />
          <textarea
            placeholder="Your ChillNOW Story..."
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
            required
          ></textarea>
          <input
            type="url"
            placeholder="Optional YouTube Video URL"
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-400 to-pink-400 text-black font-bold py-3 rounded-xl hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02]"
          >
            Submit Your Testimonial
          </button>
        </form>
      </div>
    </section>

    {/* Taglines Filter */}
    <section className="py-8 px-4 sm:px-6 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge 
            variant={selectedTagline === "All" ? "default" : "secondary"}
            className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
            onClick={() => setSelectedTagline("All")}
          >
            All
          </Badge>
          {taglines.map((tagline) => (
            <Badge 
              key={tagline} 
              variant={tagline === selectedTagline ? "default" : "secondary"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors font-semibold"
              onClick={() => setSelectedTagline(tagline)}
            >
              {tagline}
            </Badge>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Testimonials */}
    {featuredTestimonials.length > 0 && (
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">Chill AF Testimonials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial) => (
              <article key={testimonial.id} className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {testimonial.video ? (
                    <div className="relative w-full h-full">
                      <iframe
                        src={testimonial.video}
                        className="w-full h-full"
                        title={`${testimonial.name} testimonial`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <Quote className="w-12 h-12 mx-auto mb-2" />
                      <div className="text-sm">Testimonial</div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="w-fit mb-3">{testimonial.tagline}</Badge>
                  <blockquote className="text-lg font-medium mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.tagline}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )}

    {/* All Testimonials Grid */}
    <section className="py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">All Testimonials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularTestimonials.map((testimonial) => (
            <article key={testimonial.id} className="bg-card rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                {testimonial.video ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src={testimonial.video}
                      className="w-full h-full"
                      title={`${testimonial.name} testimonial`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : testimonial.image ? (
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center text-muted-foreground">
                    <Quote className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm">Testimonial</div>
                  </div>
                )}
              </div>
              <div className="p-4">
                <Badge variant="secondary" className="w-fit mb-2">{testimonial.tagline}</Badge>
                <blockquote className="text-base font-medium mb-3 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.tagline}</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-16 px-4 sm:px-6 bg-gradient-hero text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Happy Customers</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Experience the ChillNOW difference for yourself. Join the waitlist and be among the first to try our premium delivery service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="flex-grow bg-card/50 border-border/50" />
          <Button className="bg-gradient-primary hover:bg-gradient-primary/90">Join Waitlist</Button>
        </div>
      </div>
    </section>
  </div>
  );
}
