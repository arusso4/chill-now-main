export default function FaqContact() {
  return (
    <section className="relative py-16 md:py-24 bg-pink-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Still have questions?</h2>
        <p className="mt-2 text-pink-100">Our team replies quickly — we're here to help.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="/contact" className="rounded-xl px-6 py-3 bg-white text-pink-700 font-semibold shadow-sm">Contact Support</a>
          <a href="/add-your-brand" className="rounded-xl px-6 py-3 bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white font-semibold shadow-lg">Partner with chillNOW</a>
        </div>
      </div>
    </section>
  );
}
