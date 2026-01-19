"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const watches = [
  {
    name: "Royal Chronograph",
    price: "$1,250",
    img: "/images/190737.avif",
    hoverImg: "/images/190740.avif",
  },
  {
    name: "Golden Heritage",
    price: "$1,480",
    img: "/images/190742.avif",
    hoverImg: "/images/190745.avif",
  },
  {
    name: "Midnight Classic",
    price: "$1,320",
    img: "/images/190747.avif",
    hoverImg: "/images/190750 (1).avif",
  },
  {
    name: "Midnight Classic",
    price: "$1,320",
    img: "/images/190857.png",
    hoverImg: "/images/190860.avif",
  },
  {
    name: "Midnight Classic",
    price: "$1,320",
    img: "/images/190861.avif",
    hoverImg: "/images/190864.avif",
  },
  {
    name: "Midnight Classic",
    price: "$1,320",
    img: "/images/190865.avif",
    hoverImg: "/images/190868.avif",
  },
];

export default function Collection() {
  return (
    <section className="relative px-10 py-24 text-center bg-black">
      <h2 className="text-4xl tracking-widest mb-12">
         <span className="text-[#D4AF37]">FEATURED COLLECTION</span>
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {watches.map((watch, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-[#0f0f0f] p-6 pb-16 transition duration-500 hover:-translate-y-3">
              
              {/* IMAGE AREA */}
              <div className="relative h-[380px] w-full group">
                
                {/* Default image */}
                <img
                  src={watch.img}
                  alt={watch.name}
                  className="absolute inset-0 h-full w-full object-contain mx-auto transition-opacity duration-500 group-hover:opacity-0"
                />

                {/* Hover image (fallback-safe) */}
                <img
                  src={watch.hoverImg || watch.img}
                  alt={`${watch.name} side view`}
                  className="absolute inset-0 h-full w-full object-contain mx-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>

              {/* TEXT */}
              <h3 className="mt-6 tracking-wide">{watch.name}</h3>
              <p className="mt-2 text-[#D4AF37]">{watch.price}</p>

              {/* PAGINATION DOTS INSIDE CARD */}
              <div className="custom-pagination absolute bottom-4 left-1/2 -translate-x-1/2" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
