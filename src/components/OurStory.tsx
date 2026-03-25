"use client";

import { motion } from "framer-motion";

const story = [
  "Founded in 2017, Nidus has grown from a small startup to a dynamic team of technology experts dedicated to helping businesses thrive in the digital age. Our journey began with a simple yet powerful idea - that technology should empower, not hinder, business growth.",
  "Over the years, we've stayed true to this vision, expanding our services and expertise to become a one-stop solution for all your technology consulting needs. Our team of experienced professionals brings a wealth of knowledge and a customer-first approach to every project."
];

const OurStory = () => {
  return (
    <section className="mx-auto px-10 bg-black/80 backdrop-blur-md py-20">
      
      {/* small label */}
      <div className="flex items-center gap-2 text-sm tracking-widest mb-6">
        <span className="w-2 h-2 bg-orange-500 rotate-45 inline-block"></span>
        <span className="text-gray-300">[ OUR STORY ]</span>
      </div>

      {/* heading */}
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white">
          Who we are<span className="text-orange-500">.</span>
        </h2>
        <span className="text-gray-300 hidden md:block">[ 02 ]</span>
      </div>

      <div className="border-t max-w-7xl ml-auto border-gray-200">
        {story.map((text, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-8 py-10 border-b border-gray-200"
          >
            {/* number */}
            <span className="text-2xl font-medium text-gray-300 w-16">
              [{String(index + 1).padStart(2, "0")}]
            </span>

            {/* text */}
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl">
              {text}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default OurStory;