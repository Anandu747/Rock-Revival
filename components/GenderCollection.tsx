export default function GenderCollection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-black">

      {/* Men's Watches */}
      <div className="relative h-[90vh] overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/ChatGPT Image Jan 19, 2026, 02_16_45 PM.png')",
            backgroundPosition: "65% 20%", // focus face
          }}
        />

        {/* Top fade */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-10" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-10" />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Content */}
        <div className="relative z-20 flex h-full items-end px-10 pb-20">
          <div>
            <h3 className="text-2xl tracking-wide mb-6 text-[#D4AF37]">
              Men&apos;s Watches
            </h3>

            <button className="
              px-10 py-3
              border border-white
              text-sm tracking-widest
              hover:bg-[#D4AF37]
              hover:text-black
              hover:border-[#D4AF37]
              transition
            ">
              DISCOVER
            </button>
          </div>
        </div>
      </div>

      {/* Women's Watches */}
      <div className="relative h-[90vh] overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('/images/ChatGPT Image Jan 19, 2026, 02_18_00 PM.png')",
            backgroundPosition: "35% 20%", // focus face
          }}
        />

        {/* Top fade */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-10" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparenteld from-black to-transparent z-10" />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Content */}
        <div className="relative z-20 flex h-full items-end px-10 pb-20">
          <div>
            <h3 className="text-2xl tracking-wide mb-6 text-[#D4AF37]">
              Women&apos;s Watches
            </h3>

            <button className="
              px-10 py-3
              border border-white
              text-sm tracking-widest
              hover:bg-[#D4AF37]
              hover:text-black
              hover:border-[#D4AF37]
              transition
            ">
              DISCOVER
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}
