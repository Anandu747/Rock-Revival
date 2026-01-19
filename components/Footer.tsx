import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400">

      {/* Top strip */}
      <div className="flex items-center justify-between px-10 py-10">
        {/* Brand */}
        <div className="flex items-center gap-3 text-white text-lg font-semibold tracking-widest">
          <Image
            src="/images/rock revival logo_1 (5)_page-0001.jpg"
            alt="Rock Revival Logo"
            width={160}
            height={40}
            priority
          />
        </div>

        {/* Swiss made */}
        {/* <div className="text-center text-sm">
          <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
            +
          </div>
          Swiss made <br /> watches
        </div> */}

        {/* Country */}
        <div className="text-sm">
          India 🇮🇳
        </div>
      </div>

      <hr className="border-[#222]" />

      {/* Main footer content */}
      <div className="px-10 py-20 grid grid-cols-1 md:grid-cols-5 gap-12">

        

        {/* Brand */}
        <div>
          <h4 className="text-white mb-6"><span style={{color:"#D4AF37"}}>Brand</span></h4>
          <ul className="space-y-3">
            <li>About us</li>
            <li>Men</li>
            <li>Women</li>
            <li>Collection</li>
            <li>Straps</li>
            <li>News</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white mb-6"><span style={{color:"#D4AF37"}}>Services</span></h4>
          <ul className="space-y-3">
            <li>Find a store</li>
            <li>Customer service</li>
            <li>Register your watch</li>
            <li>Corporate gifting</li>
            <li>Watch Finder</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white mb-6"><span style={{color:"#D4AF37"}}>Legal</span></h4>
          <ul className="space-y-3">
            <li>Privacy notice</li>
            <li>Cookie notice</li>
            <li>Cookie settings</li>
            <li>Terms of use</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="text-white mb-6"><span style={{color:"#D4AF37"}}>Help & Contacts</span></h4>
          <ul className="space-y-3">
            <li>Need help?</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-xl mb-6">
            <span style={{color:"#D4AF37"}}>Join the Rock Revival family</span>
          </h3>

          <input
            type="email"
            placeholder="EMAIL ADDRESS"
            className="w-full bg-black border border-gray-500 px-5 py-3 text-sm tracking-widest text-white outline-none mb-6"
          />

          <div className="flex gap-5 text-white">
            <Instagram size={20} />
            <Facebook size={20} />
            <Twitter size={20} />
            <Youtube size={20} />
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="px-10 py-8 text-sm border-t border-[#222]">
        © 2026 Rock Revival. Crafted with precision.
      </div>

    </footer>
  );
}
