"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import ceva_img from "@/assets/ceva.png";
import acelero_img from "@/assets/acelero.png";

const clients = [
  { id: 1, image: ceva_img, name: "Energator" },
  { id: 2, image: acelero_img, name: "mtvs.news" },
  { id: 3, image: ceva_img, name: "gazeit" },
  { id: 4, image: acelero_img, name: "TRAVELO" },
  { id: 5, image: ceva_img, name: "GLMP.IT" },
];

const Brands = () => {
  return (
    <section className="w-full py-20" style={{ background: "#f5f5f5" }}>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 mb-4 font-panchang-medium">
          Trusted by Tech Innovators
        </h2>
        <p className="text-center text-lg text-gray-500 mb-12">
          Partnering with brands driving tomorrow’s technology.
        </p>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={32}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 32 },
            1024: { slidesPerView: 5, spaceBetween: 40 },
          }}
          className="pb-8"
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id} className="group transition-transform">
              <div className="flex items-center justify-center w-44 h-28 mx-auto rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 scale-[.97] group-hover:scale-105">
                <Image
                  src={client.image}
                  alt={`Logo of ${client.name}`}
                  width={140}
                  height={56}
                  className="object-contain filter grayscale group-hover:grayscale-0 transition duration-300"
                />
                <span className="sr-only">{client.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
