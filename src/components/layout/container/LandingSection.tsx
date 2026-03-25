"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "../animation/AnimatedText";
import { Btn } from "@/components/ui/Btn";
import EyeTracker from "@/components/common/bg/EyeTracker";

interface HeroProps {
  title?: string;
  description: string;
  imageUrl?: string;
  headline?: string;
  firstTitle?: string;
  secondTitle?: string;
}

const LandingPage: React.FC<HeroProps> = ({
  firstTitle,
  secondTitle,
  title,
  description,
  imageUrl,
  headline = "",
}) => {
  return (
    <section className="mx-auto pt-52">

      {/* BIG HERO TEXT */}
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">

        {/* LINE 1 */}
        <div className="flex items-end gap-6 w-full mx-auto justify-center">
          <AnimatedText>
            <h1 className='text-8xl font-extrabold font-primary tracking-tight text-shadow-lg text-[#000000] '>
              {firstTitle}
            </h1>
          </AnimatedText>

          <EyeTracker />

          <AnimatedText>
            <h1 className='text-7xl font-extrabold font-primary tracking-tight text-shadow-lg text-gray-600'>
              {secondTitle}
            </h1>
          </AnimatedText>
        </div>

      

        {/* SUB TEXT */}
        {/* <AnimatedText>
          <h4 className="text-2xl md:text-3xl text-gray-600 mt-6 text-center">
            {headline}
          </h4>
        </AnimatedText> */}

        <AnimatedText>
          <p className="max-w-3xl text-gray-800 text-center text-lg sour-gummy ">
            {description}
          </p>
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* <Btn href="/contact-us">Get a Free Consultation</Btn> */}
        </motion.div>
      </div>

      {/* HERO IMAGE */}
      {imageUrl && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative mt-16"
        >
          <Image
            src={imageUrl}
            alt="hero"
            width={1600}
            height={900}
            className="w-full h-[55vh] object-cover"
          />
        </motion.div>
      )}

    </section>
  );
};

export default LandingPage;