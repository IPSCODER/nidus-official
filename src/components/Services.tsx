"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const services = [
  "IT Strategy Consulting",
  "Cloud Services",
  "Data Analytics & AI",
  "Software Development",
];

const Services = () => {
  return (
    <section className=" mx-auto px-10 py-10">
      
      {/* small label */}
      <div className="flex items-center gap-2 text-sm tracking-widest mb-6">
        <span className="w-2 h-2 bg-orange-500 rotate-45 inline-block"></span>
        <span className="text-gray-600">[ SERVICES ]</span>
      </div>

      {/* heading */}
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-5xl md:text-7xl font-bold text-black">
          What we do<span className="text-orange-500">.</span>
        </h2>
        <span className="text-gray-500 hidden md:block">[ 04 ]</span>
      </div>

      <div className="border-t max-w-7xl ml-auto border-gray-200">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between py-8 border-b border-gray-200 group cursor-pointer"
          >
            {/* left */}
            <div className="flex items-center gap-8">
              <span className="text-2xl font-medium text-gray-700 w-16">
                [{String(index + 1).padStart(2, "0")}]
              </span>

              <h3 className="text-2xl md:text-3xl font-semibold text-black">
                {service}
              </h3>
            </div>

            {/* plus icon */}
            <motion.div
              whileHover={{ rotate: 90 }}
              className="text-orange-500"
            >
              <Plus size={28} strokeWidth={2} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;