"use client";

import { motion } from "framer-motion";
import AnimatedText from "./layout/animation/AnimatedText";

const OurMission = () => {
  return (
    <section className="mx-auto px-10 py-24">

      {/* label */}
      <div className="flex items-center gap-2 text-sm tracking-widest mb-6">
        <span className="w-2 h-2 bg-orange-500 rotate-45 inline-block"></span>
        <span className="text-gray-600">[ OUR MISSION ]</span>
      </div>

      {/* heading */}
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-5xl md:text-7xl font-bold text-black">
          Why we exist<span className="text-orange-500">.</span>
        </h2>
        <span className="text-gray-500 hidden md:block">[ 01 ]</span>
      </div>

      {/* content */}
      <div className="border-t max-w-7xl ml-auto border-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-8 py-12 border-b border-gray-200"
        >
          <span className="text-2xl font-medium text-gray-700 w-16">
            [01]
          </span>

          <AnimatedText>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl">
              Our mission is to <span className="text-black font-semibold">empower businesses</span> to 
              achieve their full potential through innovative technology solutions. 
              We are committed to delivering <span className="text-black font-semibold">exceptional value</span>, 
              fostering a culture of innovation, and making a 
              <span className="text-black font-semibold"> meaningful impact</span> on the industries we serve.
            </p>
          </AnimatedText>

        </motion.div>
      </div>

    </section>
  );
};

export default OurMission;