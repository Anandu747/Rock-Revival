export default function GenderCollection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">

      {/* Men's Watches */}
      <div className="relative h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/ChatGPT Image Jan 19, 2026, 02_16_45 PM.png')",
              backgroundPosition: "65% center",

          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-end px-10 pb-20">
          <div>
            <h3 className="text-2xl tracking-wide mb-6">Men&apos;s <span style={{color:"#D4AF37"}}>Watches</span></h3>

            <button className="px-10 py-3 border border-white text-sm tracking-widest hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition">
              DISCOVER
            </button>
          </div>
        </div>
      </div>

      {/* Women's Watches */}
      <div className="relative h-[90vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/ChatGPT Image Jan 19, 2026, 02_18_00 PM.png')",
              backgroundPosition: "35% center",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-end px-10 pb-20">
          <div>
            <h3 className="text-2xl tracking-wide mb-6">Women&apos;s <span style={{color:"#D4AF37"}}>Watches</span></h3>

            <button className="px-10 py-3 border border-white text-sm tracking-widest hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition">
              DISCOVER
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
