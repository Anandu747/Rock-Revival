export default function FeaturedBanner() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('images/ChatGPT Image Jan 19, 2026, 01_41_56 PM.png')",
        }}
      />

      {/* Dark Gradient Overlay (Luxury Fade) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end justify-center pb-20 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl tracking-widest font-light">
            <span style={{color:"#D4AF37"}}>THE PERFECT</span>
            <span className="block text-[#D4AF37] mt-2">PAIR</span>
          </h2>

          <button className="mt-8 px-10 py-3 border border-white text-sm tracking-widest hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition">
            DISCOVER THE COLLECTION
          </button>
        </div>
      </div>

    </section>
  );
}
