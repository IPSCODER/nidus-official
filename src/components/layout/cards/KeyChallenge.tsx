"use client";

import React, { ElementType } from "react";
import SubHeading from "@/components/ui/SubHeading";
import AnimatedText from "../animation/AnimatedText";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Challenge {
  text: string;
  icon: ElementType;
  iconClass:string
}

interface KeyChallengeProps {
  array: Challenge[];
  title: string;
}

const KeyChallenge: React.FC<KeyChallengeProps> = ({ array, title }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto mb-16 px-4">
        <SubHeading
          span={title}
          className="mb-4"
          textClass="text-3xl md:text-5xl font-bold text-gray-800"
        >
          Key Challenges in the
        </SubHeading>
        <div className="sm:mx-auto w-20 h-[3px] bg-gradient-to-r from-[#ff8c00] to-[#ffb347] rounded-full"></div>
      </div>

      {/* Challenge Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 px-4 sm:px-0 sm:grid-cols-2 lg:grid-cols-3">
        {array.map((challenge, idx) => {

          const Icon = challenge.icon;
           return <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <AnimatedText
              className={cn(
                "relative p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200",
                "shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_rgba(255,140,0,0.25)]",
                "transition-all duration-500 ease-out hover:-translate-y-2 group cursor-default"
              )}
            >
              {/* Accent Border */}
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#ff8c00] to-[#ffb347] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />

              {/* Icon */}
              <div className="flex flex-col items-center gap-4">
                <div className="text-[#ff8c00] group-hover:scale-110 transition-transform duration-300 text-4xl">
                 <Icon className={challenge.iconClass} />
                </div>

                {/* Text */}
                <h3 className="font-semibold text-gray-800 text-lg md:text-xl group-hover:text-[#ff8c00] transition-colors duration-300">
                  {challenge.text}
                </h3>
              </div>
            </AnimatedText>
          </motion.div>
})}
      </div>

      {/* Background Accent Gradient */}
      {/* <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-[#ff8c00]/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -top-40 -right-20 w-[300px] h-[300px] bg-[#ffb347]/20 blur-[120px] rounded-full pointer-events-none" /> */}
    </section>
  );
};

export default KeyChallenge;
