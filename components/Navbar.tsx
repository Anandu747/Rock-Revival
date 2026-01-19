import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 absolute w-full z-50">
      <h1 className="text-2xl font-semibold tracking-widest text-[#D4AF37]">
        <Image
  src="/images/rock revival logo_1 (5)_page-0001.jpg"
  alt="Rock Revival Logo"
  width={160}
  height={40}
  priority
/>
      </h1>

      <ul className="flex gap-8 text-sm tracking-wider">
        <li className="hover:text-[#D4AF37] cursor-pointer">Home</li>
        <li className="hover:text-[#D4AF37] cursor-pointer">Collection</li>
        <li className="hover:text-[#D4AF37] cursor-pointer">About</li>
        <li className="hover:text-[#D4AF37] cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}
