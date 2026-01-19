export default function Hero() {
  return (
    <section className="relative h-screen flex items-center px-10 overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/AZvWJP0XwF-iWBi6fkjYPg-AZvWJP0XSTSZHhCYl5WUMw.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay (Luxury Look) */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-6xl font-light tracking-widest">
          TIME.
          <br />
          <span className="text-[#D4AF37]">REDEFINED</span>
        </h1>

        <p className="mt-6 text-gray-300 leading-relaxed">
          Precision-crafted luxury watches blending timeless elegance with bold
          modern design.
        </p>

        <button className="mt-8 px-10 py-4 bg-[#D4AF37] text-black font-semibold tracking-wide hover:bg-[#b8962e] transition">
          Explore Collection
        </button>
      </div>

    </section>
  );
}
