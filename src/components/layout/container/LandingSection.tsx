"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "../animation/AnimatedText";
import { Btn } from "@/components/ui/Btn";

interface HeroProps {
  title: string;
  description: string;
  imageUrl: string;
}

const LandingPage: React.FC<HeroProps> = ({ title, description, imageUrl }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section
      ref={ref}
      className="flex flex-col px-2 md:px-5 md:min-h-screen pt-20 pb-2 relative overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div className="w-full h-[80vh] md:h-[calc(100vh-88px)] mb-2 rounded-xl overflow-hidden relative">
        {imageUrl && (
          <motion.div
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>
        )}

        {/* SUBTLE BACKGROUND OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-[#0d1117bf] rounded-xl z-10" />

        {/* (OPTIONAL: PARTICLES/GRADIENTS) */}
        {/* <ParticleBackgroundComponent /> */}

        {/* GLASSMORPHISM PANEL */}
        <motion.div
          style={{ y }}
          className="px-2 md:px-8 h-full flex flex-col justify-end pb-8 relative z-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.75, ease: "easeOut" }}
            className="bg-white/25 backdrop-blur-lg rounded-xl max-w-7xl w-full p-5 md:p-10 shadow-md mx-auto"
          >
            <AnimatedText>
              <h1
                className="text-[clamp(2.2rem,8vw,4.7rem)] font-panchangBold uppercase tracking-tight leading-[1.05] text-accent drop-shadow-lg"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,.18)" }}
              >
                {title}
              </h1>
            </AnimatedText>
            <AnimatedText>
              <p className="mt-2 md:mt-5 text-md md:text-xl text-gray-200 font-Archivo-regular leading-snug">
                {description}
              </p>
            </AnimatedText>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
              className="mt-5"
            >
              <Btn
                href="/contact-us"
              >
                Get a Free Consultation →
              </Btn>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPage;
