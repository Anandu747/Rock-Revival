export default function Hero() {
  return (
    <section className="relative h-screen flex items-center px-6 md:px-10 overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/AZvWJP0XwF-iWBi6fkjYPg-AZvWJP0XSTSZHhCYl5WUMw.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-xl text-center md:text-left">
        <h1 className="font-light tracking-widest leading-tight
          text-4xl sm:text-5xl md:text-6xl">
          TIME.
          <br />
          <span className="text-[#D4AF37]">REDEFINED</span>
        </h1>

        <p className="mt-4 md:mt-6 text-gray-300 leading-relaxed
          text-sm sm:text-base">
          Precision-crafted luxury watches blending timeless elegance
          with bold modern design.
        </p>

        <button
          className="mt-6 md:mt-8 px-8 py-3 md:px-10 md:py-4
          bg-[#D4AF37] text-black font-semibold tracking-wide
          hover:bg-[#b8962e] transition
          w-full sm:w-auto"
        >
          Explore Collection
        </button>
      </div>

    </section>
  );
}
