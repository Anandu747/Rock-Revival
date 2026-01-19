export default function VideoSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/AZvWI385mbEeDpV-BVECdw-AZvWI3853jD3zumUVyVP2Q.mp4" type="video/mp4" />
      </video>

      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-10" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-10" />

      {/* Soft Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-6">

        <h2 className="text-3xl md:text-5xl tracking-widest font-light mb-6">
          TIME.
          <br />
          <span className="text-[#D4AF37]">IN MOTION</span>
        </h2>

        <p className="max-w-xl text-gray-300 leading-relaxed mb-10">
          Every second tells a story of precision, craftsmanship,
          and bold elegance — this is Rock Revival.
        </p>

        <button className="
          px-12 py-4
          border border-white
          text-sm tracking-widest
          hover:bg-[#D4AF37]
          hover:text-black
          hover:border-[#D4AF37]
          transition
        ">
          DISCOVER THE CRAFT
        </button>

      </div>

    </section>
  );
}
