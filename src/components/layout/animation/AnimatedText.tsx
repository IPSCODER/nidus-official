"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

interface AnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  delay = 0.1,
  className,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: scrollDir === "down" ? 40 : -40 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: scrollDir === "down" ? 40 : -40 }
      }
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
