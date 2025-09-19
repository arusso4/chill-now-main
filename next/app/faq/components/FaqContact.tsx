import Link from "next/link";

export default function FaqContact() {
  return (
    <section className="relative py-16 md:py-24 bg-pink-500">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Still have questions?</h2>
        <p className="mt-2 text-pink-100 text-lg">
          We're here to help — reach out and our team will respond quickly.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link 
            href="/contact" 
            className="rounded-xl px-6 py-3 bg-white text-pink-700 font-semibold shadow-sm hover:bg-pink-50 transition-colors"
          >
            Contact Support
          </Link>
          <Link 
            href="/add-your-brand" 
            className="rounded-xl px-6 py-3 bg-gradient-to-r from-emerald-500 to-fuchsia-500 hover:from-emerald-600 hover:to-fuchsia-600 text-white font-semibold shadow-lg transition-all"
          >
            Partner with chillNOW
          </Link>
        </div>
        <div className="mt-8 text-pink-100 text-sm">
          <p>Need immediate assistance? Call us at <span className="font-semibold">1-800-CHILL-NOW</span></p>
          <p className="mt-1">Available 24/7 for urgent delivery issues</p>
        </div>
      </div>
    </section>
  );
}
