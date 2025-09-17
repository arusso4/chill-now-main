import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { TrendingUp, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Add Your Brand | chillNOW",
  description:
    "Partner with chillNOW to get your products in front of high-intent customers. Compliance-first rollout, fast integration, and real growth.",
};

export default function AddYourBrandPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(76,29,149,0.25),rgba(0,0,0,0))]" />
        <div className="container mx-auto px-6 py-16 lg:py-24">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-purple-400">
              Be Where the Chill Happens
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-base md:text-lg text-muted-foreground">
            Join the most innovative cannabis & wellness delivery platform. Get your brand
            in front of customers who demand quality and convenience.
          </p>

          <div className="mt-8">
            <Link href="/add-your-brand#apply">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 border-0 px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all">
                Submit Your Brand
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="container mx-auto px-6 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center">Why Partner with chillNOW?</h2>
        <p className="mt-3 text-center text-muted-foreground max-w-2xl mx-auto">
          We're building the future of cannabis and wellness delivery. Join brands already seeing incredible growth with our platform.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Rapid Growth */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15">
              <TrendingUp className="h-6 w-6 text-emerald-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Rapid Growth</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Tap into a high-intent audience with targeted placement and performance reporting.
            </p>
          </div>

          {/* Compliance First */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15">
              <ShieldCheck className="h-6 w-6 text-sky-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Compliance First</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We handle regulatory requirements, ID checks, and responsible merchandising.
            </p>
          </div>

          {/* Fast Integration */}
          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-fuchsia-500/15">
              <Zap className="h-6 w-6 text-fuchsia-400" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">Fast Integration</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Go live in 2–3 weeks with our partner onboarding & assets checklist.
            </p>
          </div>
        </div>
      </section>

      {/* APPLY SECTION */}
      <section id="apply" className="border-t bg-muted/30">
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Submit Your Brand</h2>
          <p className="mt-2 text-muted-foreground max-w-2xl">
            Tell us about your products and where you're available. We'll reach out with next steps.
          </p>

          {/* Simple placeholder form (hook up to Supabase later) */}
          <form className="mt-8 grid gap-4 max-w-2xl">
            <input
              className="h-11 rounded-xl border bg-background px-4 outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Brand name"
              name="brand"
              required
            />
            <input
              className="h-11 rounded-xl border bg-background px-4 outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Website"
              name="website"
              type="url"
            />
            <input
              className="h-11 rounded-xl border bg-background px-4 outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Contact email"
              name="email"
              type="email"
              required
            />
            <textarea
              className="min-h-[120px] rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Tell us about your products and states served"
              name="notes"
            />
            <div className="pt-2">
              <Button type="submit" size="lg" className="bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 border-0 px-8 py-6 text-lg font-bold">
                Request Partnership
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
