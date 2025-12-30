import React from 'react';
import Image from 'next/image';
import AnimatedText from '@/components/layout/animation/AnimatedText';
import { OnTrigger } from '@/components/layout/animation/OnTrigger';
import SubHeading from '@/components/ui/SubHeading';

const featuredProjects = [
  {
    id: 1,
    title: 'Cloud migration saves money & protect',
    description: 'When an unknown printer took a galley to and type book.',
    image: 'https://images.pexels.com/photos/5480781/pexels-photo-5480781.jpeg',
    category: 'Technology',
    link: '#',
    tint: 'bg-purple-100',
  },
  {
    id: 2,
    title: 'Perfect solution that your business demands',
    description: 'When an unknown printer took a galley to and type book.',
    image: 'https://images.pexels.com/photos/8898641/pexels-photo-8898641.jpeg',
    category: 'Development',
    link: '#',
    tint: 'bg-blue-100',
  },
  {
    id: 3,
    title: "Trusted by the world's best organizations",
    description: 'When an unknown printer took a galley to and type book.',
    image: 'https://images.pexels.com/photos/6120220/pexels-photo-6120220.jpeg',
    category: 'Solution',
    link: '#',
    tint: 'bg-yellow-100',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-5 md:py-20">
      <div className=" px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <AnimatedText>
        <p className="text-sm font-semibold text-primary uppercase tracking-wide">
          Recently completed work
        </p>
        </AnimatedText>
        <SubHeading span='latest projects' >
          Our 
        </SubHeading>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-5 md:mt-10">
          {featuredProjects.map((project) => (
          <OnTrigger key={project.id} >
             <div className=" overflow-hidden group transform transition-all hover:-translate-y-1 hover:shadow-sm p-2" >
              {/* Image Container with Overlay */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                {/* Tint Overlay */}
                <div className={`absolute inset-0 opacity-70 mix-blend-multiply ${project.tint}`} />

                {/* Centered Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Image src={'/nidus-black.png'} alt="Logo" width={60} height={60} className="opacity-90" />
                </div>
              </div>

              {/* Text Section */}
              <div className=" py-4 md:py-6 text-left">
                <AnimatedText>

                <p className="text-sm text-primary font-semibold mb-1">{project.category}</p>
                </AnimatedText>
                <AnimatedText>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
                </AnimatedText>
                <AnimatedText>

                <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                </AnimatedText>
                <AnimatedText>
                <a
                  href={project.link}
                  className="inline-block text-sm font-semibold text-primary  transition-colors"
                  >
                  View our project
                </a>
                  </AnimatedText>
              </div>
            </div>
          </OnTrigger> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
