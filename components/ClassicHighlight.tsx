import Image from "next/image";

export default function ClassicHighlight() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Watch Image – Full Bleed */}
      <Image
        src="/images/ChatGPT Image Jan 19, 2026, 03_06_03 PM.png"
        alt="Rock Revival Watch"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Subtle dark overlay (optional, very premium) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Bottom Content */}
      <div className="absolute bottom-24 w-full text-center z-20 px-6">
        <h2 className="text-2xl md:text-3xl tracking-wide mb-6">
          Classic is always a good <span style={{color:"#D4AF37"}}>idea</span>
        </h2>

        <button className="px-10 py-3 border border-white text-sm tracking-widest hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition">
          DISCOVER ROCK REVIVAL
        </button>
      </div>

    </section>
  );
}
