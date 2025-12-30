"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

type Direction = "up" | "down" | "left" | "right";

interface ParallaxImageProps {
  src: string;
  alt: string;
  height?: string; // e.g. "80vh"
  speed?: number; // control intensity (0.1 - 1 recommended)
  direction?: Direction; // move direction
  overlayColor?: string; // overlay color like "rgba(0,0,0,0.4)"
  className?: string;
  children?: React.ReactNode;
  imageClass?:string
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  height = "100vh",
  speed = 0.3,
  direction = "up",
  className = "",
  imageClass
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // trigger when entering/leaving viewport
  });

  // Default transforms
  let x = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  switch (direction) {
    case "up":
      // eslint-disable-next-line react-hooks/rules-of-hooks
      y = useTransform(scrollYProgress, [0, 1], [
        `${speed * 100}%`,
        `-${speed * 100}%`,
      ]);
      break;
    case "down":
              // eslint-disable-next-line react-hooks/rules-of-hooks
      y = useTransform(scrollYProgress, [0, 1], [
        `-${speed * 100}%`,
        `${speed * 100}%`,
      ]);
      break;
    case "left":
              // eslint-disable-next-line react-hooks/rules-of-hooks
      x = useTransform(scrollYProgress, [0, 1], [
        `${speed * 100}%`,
        `-${speed * 100}%`,
      ]);
      break;
    case "right":
              // eslint-disable-next-line react-hooks/rules-of-hooks
      x = useTransform(scrollYProgress, [0, 1], [
        `-${speed * 100}%`,
        `${speed * 100}%`,
      ]);
      break;
  }

  return (
    <div
      ref={ref}
      className={cn('relative w-full overflow-hidden',className)}
      style={{ height }}
    >
      {/* Parallax motion wrapper */}
      <motion.div style={{ x, y }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          className={cn('object-cover object-center',imageClass)}
          priority
        />
      </motion.div>
    </div>
  );
};

export default ParallaxImage;
