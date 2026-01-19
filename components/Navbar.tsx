"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-10 py-6 text-white">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Image
          src="/images/rock revival logo_1 (5)_page-0001.jpg"
          alt="Rock Revival Logo"
          width={140}
          height={40}
          priority
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm tracking-wider">
          <li className="text-[#D4AF37] cursor-pointer">Home</li>
          <li className="text-[#D4AF37] cursor-pointer">Collection</li>
          <li className="text-[#D4AF37] cursor-pointer">About</li>
          <li className="text-[#D4AF37] cursor-pointer">Contact</li>
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute left-0 top-full w-full bg-black/95
        transition-all duration-300 overflow-hidden
        ${open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center gap-6 py-8 text-sm tracking-widest">
          <li className="text-[#D4AF37] cursor-pointer">Home</li>
          <li className="text-[#D4AF37] cursor-pointer">Collection</li>
          <li className="text-[#D4AF37] cursor-pointer">About</li>
          <li className="text-[#D4AF37] cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
