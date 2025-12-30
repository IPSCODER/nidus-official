import React from 'react';
import { Btn } from '@/components/ui/Btn';
import AnimatedText from '@/components/layout/animation/AnimatedText';
import { OnTrigger } from '@/components/layout/animation/OnTrigger';
import ParallaxImage from '@/components/layout/animation/ParallaxImage';
import BackgroundAccent from '@/components/ui/BackgroundAccent';

const AboutUs = () => {
  return (
    <section className="bg-[#212121] py-10 text-white relative">
      <BackgroundAccent/>
      <div className=" px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">

        {/* Image Section */}
       <OnTrigger>
         <div className="relative w-full h-[20rem] md:h-[32rem]">
          {/* Bottom Image */}

          {/* Top Image */}
          <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl z-10">
            <ParallaxImage
  src="https://images.pexels.com/photos/12480420/pexels-photo-12480420.jpeg"
  alt="Up Parallax"
  height="40rem"
  speed={0.3}
  direction="down"
  className="absolute w-full left-0"
></ParallaxImage>
          </div>

          {/* Badge */}
          <div className="absolute -top-6 left-6 bg-orange-600 px-6 py-2 rounded-sm shadow-lg z-20 text-white text-sm font-semibold">
            150+ worldwide clients
          </div>
        </div>
       </OnTrigger>

        {/* Text Content */}
        <div>
          <AnimatedText>
          <p className="text-indigo-400 font-semibold uppercase tracking-wide mb-2">
            Get to know us
          </p>
          </AnimatedText>
          <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-bold font-panchang-semibold leading-tight mb-6">
            Easy solutions for your<br className="hidden sm:block" />
            IT problems
          </h2>
          </AnimatedText>
          <AnimatedText>
          <p className="text-gray-400 text-lg mb-6">
            At <span className="font-semibold text-white font-panchang-medium">Nidus Technologies</span>, we deliver innovative solutions tailored to modern businesses. Our skilled team builds scalable apps, intuitive UX, and secure cloud platforms.
          </p>
          </AnimatedText>

          {/* Bullet Points */}
          <ul className="mb-6 space-y-3">
            <AnimatedText>
            <li className="flex items-start gap-3 font-Archivo-medium">
              <span className="text-indigo-400 mt-1">✔</span>
              <span>Scalable architecture for long-term growth</span>
            </li>
            </AnimatedText>
            <AnimatedText>
            <li className="flex items-start gap-3 font-Archivo-medium">
              <span className="text-indigo-400 mt-1">✔</span>
              <span>Agile teams with full-stack capabilities</span>
            </li>
            </AnimatedText>
          </ul>

          {/* Statement */}
          <div className="flex items-center gap-4 mb-6">
            <AnimatedText>
            <div className="text-3xl text-green-400">👨‍💻</div>
            <p className="font-semibold text-white text-lg">
              Stop worrying, we take care of your technology problems.
            </p>
            </AnimatedText>
          </div>

          {/* Button */}
          <AnimatedText>
          <Btn href='/about-us' >
            Discover more
          </Btn>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
