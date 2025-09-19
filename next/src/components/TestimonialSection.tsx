import React from "react";
import { Quote } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <header className="mb-12 sm:mb-16">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4 sm:mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
              What Our Community Says
            </span>
          </h2>
          <p className="text-muted-foreground text-center">
            Real experiences from people who've made the switch.
          </p>
        </header>

        {/* Quote Icon */}
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 mx-auto mb-6 sm:mb-8" aria-hidden="true">
          <Quote className="w-6 h-6" />
        </div>
        
        {/* Main Quote */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed mb-6 sm:mb-8 text-foreground px-2">
          "Finally, a way to unwind that doesn't leave me feeling like garbage the next day. 
          This is what{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)] font-semibold">
            the future of wellness
          </span>{" "}
          looks like."
          <footer className="mt-6 sm:mt-8">
            <cite className="not-italic">
              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold text-sm sm:text-base" aria-label="Sarah M. avatar">
                  S
                </div>
                <div className="text-left">
                  <div className="font-bold text-sm sm:text-base text-foreground">Sarah M.</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Wellness Enthusiast, Denver</div>
                </div>
              </div>
            </cite>
          </footer>
        </blockquote>
        
        {/* Supporting Quote */}
        <blockquote className="mt-12 sm:mt-16 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <p className="text-sm text-muted-foreground italic leading-relaxed">
            "I used to reach for wine after work every day. Now I use this instead and actually sleep better, 
            feel more creative, and wake up energized. It's not even close."
          </p>
          <footer className="mt-3 sm:mt-4">
            <cite className="text-sm sm:text-base font-bold text-emerald-500 not-italic">
              — Marcus K., Product Manager
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default TestimonialSection;