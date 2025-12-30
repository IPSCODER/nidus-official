'use client'

import AnimatedText from '@/components/layout/animation/AnimatedText'
import SubHeading from '@/components/ui/SubHeading'
import SubText from '@/components/ui/SubText'
import React from 'react'
import {motion} from 'framer-motion'
import ParallaxImage from '@/components/layout/animation/ParallaxImage'

const OurStory = () => {
  return (
    <>
    <article className="flex flex-col md:flex-row gap-10 items-stretch px-5 py-16 bg-gradient-to-br from-gray-900 via-black to-neutral-900 shadow-xl ">
  {/* Text Side */}
 <div className='max-w-7xl mx-auto space-y-10' >
   <div className=" w-full flex flex-col justify-center px-0 md:px-4">
    {/* Small Accent */}
    <div className="flex items-center mb-2">
      <SubHeading span="Story" textClass="text-white text-[clamp(2rem,5vw,3.2rem)] font-bold">
        Our
      </SubHeading>
    </div>
    <AnimatedText>
      <SubText className="text-white/90 text-base md:text-lg  mb-4 leading-relaxed">
        Founded in 2017, Nidus began as a small team with a bold vision: technology should empower
        business growth—not hinder it. What started as a simple, powerful idea has since grown into
        a dynamic team of technology experts, helping businesses thrive in the digital age.
      </SubText>
    </AnimatedText>
    <AnimatedText>
      <SubText className="text-white/90 text-base md:text-lg  leading-relaxed">
        Over the years, we’ve stayed true to that vision, evolving into a full-stack technology
        consulting firm. Our experienced professionals bring a deep well of knowledge and a
        customer-first mindset to every project.
      </SubText>
    </AnimatedText>
  </div>
  {/* Vertical Divider */}
  {/* Image Side */}
  <div className="flex-1 min-h-60 w-full flex items-center justify-center">
    <motion.div
      initial={{ scale: 1.09, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="w-full h-60 md:h-96 rounded-sm overflow-hidden shadow-lg"
    >
      <ParallaxImage
        src="https://images.pexels.com/photos/11142516/pexels-photo-11142516.jpeg"
        alt="Up Parallax"
        height="30rem"
        speed={0.4}
        direction="down"
        className="w-full h-60 md:h-96 object-cover rounded-sm"
      />
    </motion.div>
  </div>
 </div>
    <div className="hidden md:flex w-px bg-neutral-700 mx-6 rounded-full"></div>
</article>
    </>
  )
}

export default OurStory