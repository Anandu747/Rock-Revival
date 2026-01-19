export default function MagazineSection() {
  return (
    <section className="bg-black text-white py-24 px-6">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 style={{color:"#D4AF37"}} className="text-4xl font-medium mb-4">Our Magazine</h2>
        <p className="text-gray-600">
          Discover Rock Revival&apos;s latest news and stories
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Card 1 */}
        <div>
          <img
            src="WhatsApp Image 2026-01-19 at 12.09.57 PM.jpeg"
            alt="Crafting watches"
            className="w-full h-[360px] object-cover mb-6"
          />
          <h3 className="text-sm font-semibold tracking-widest mb-2">
            ROCK REVIVAL: THE ART OF CRAFTING TIME
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            January 13, 2026
          </p>
          <p className="text-gray-700 leading-relaxed">
            Precision and craftsmanship come together as Rock Revival
            redefines modern luxury watchmaking.
          </p>
        </div>

        {/* Card 2 */}
        <div>
          <img
            src="WhatsApp Image 2026-01-19 at 12.10.44 PM.jpeg"
            alt="Watch movement"
            className="w-full h-[360px] object-cover mb-6"
          />
          <h3 className="text-sm font-semibold tracking-widest mb-2">
            INSIDE THE MOVEMENT: ENGINEERING PERFECTION
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            December 9, 2025
          </p>
          <p className="text-gray-700 leading-relaxed">
            Explore the heart of Rock Revival watches, where innovation
            meets timeless engineering.
          </p>
        </div>

        {/* Card 3 */}
        <div>
          <img
            src="WhatsApp Image 2026-01-19 at 12.11.10 PM.jpeg"
            alt="Heritage"
            className="w-full h-[360px] object-cover mb-6"
          />
          <h3 className="text-sm font-semibold tracking-widest mb-2">
            A STORY ROOTED IN HERITAGE
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            December 1, 2025
          </p>
          <p className="text-gray-700 leading-relaxed">
            From traditional techniques to modern design, Rock Revival&apos;s
            journey is a celebration of legacy.
          </p>
        </div>

      </div>
      
      <div className="flex justify-center mt-20">
        <button className="px-16 py-4 rounded-full bg-black border border-white text-sm tracking-widest hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition">
          DISCOVER
        </button>
      </div>

    </section>
  );
}
