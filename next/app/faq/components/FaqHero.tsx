export default function FaqHero() {
  return (
    <section className="relative bg-[#0b0f14] py-16 md:py-24">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-fuchsia-400 drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            Frequently Asked Questions
          </span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          Everything you need to know about chillNOW — for customers, drivers, and brand partners.
        </p>
      </div>
    </section>
  );
}
