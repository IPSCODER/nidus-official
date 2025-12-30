"use client";

import React from "react";
import { motion } from "framer-motion";
import SubHeading from "@/components/ui/SubHeading";
import AnimatedText from "../animation/AnimatedText";
import { cn } from "@/lib/utils";

interface ImpactItem {
  stat: string;
  label: string;
}

interface ImpactSectionProps {
  title: string;
  span: string;
  data: ImpactItem[];
  variant?: "light" | "dark"; // theme variant
  className?: string;
}

const ImpactSection: React.FC<ImpactSectionProps> = ({
  title,
  span,
  data,
  variant = "dark",
  className,
}) => {
  const isDark = variant === "dark";

  return (
    <section
      className={cn(
        "relative py-20 px-6 md:px-20 text-center overflow-hidden",
        isDark
          ? "bg-[#111] text-white"
          : "bg-gradient-to-b from-[#f8f9fb] to-[#f1f3f6] text-gray-900",
        className
      )}
    >
      {/* Section heading */}
      <SubHeading
        span={span}
        className="mb-12"
        textClass={cn(
          "text-3xl md:text-5xl font-bold",
          isDark ? "text-white" : "text-gray-800"
        )}
      >
        {title}
      </SubHeading>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-12">
        {data.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className={cn(
              "flex flex-col items-center justify-center gap-2 rounded-2xl p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2",
              isDark
                ? "bg-white/5 border border-white/10 hover:bg-white/10"
                : "bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_25px_rgba(255,140,0,0.25)]"
            )}
          >
            <AnimatedText>
              <span
                className={cn(
                  "text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent",
                  "bg-gradient-to-r from-[#ff8c00] to-[#ffb347]"
                )}
              >
                {item.stat}
              </span>
            </AnimatedText>
            <AnimatedText>
              <p
                className={cn(
                  "text-lg font-medium",
                  isDark ? "text-gray-200" : "text-gray-700"
                )}
              >
                {item.label}
              </p>
            </AnimatedText>
          </motion.div>
        ))}
      </div>

      {/* Background Glow */}
      {isDark && (
        <>
          <div className="absolute -bottom-40 left-0 w-[400px] h-[400px] bg-[#ff8c00]/20 blur-[180px] rounded-full pointer-events-none" />
          <div className="absolute -top-40 right-0 w-[300px] h-[300px] bg-[#ffb347]/20 blur-[140px] rounded-full pointer-events-none" />
        </>
      )}
    </section>
  );
};

export default ImpactSection;
