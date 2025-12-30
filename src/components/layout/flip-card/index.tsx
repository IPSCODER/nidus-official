import Image from 'next/image';
import React from 'react';
import { OnTrigger } from '../animation/OnTrigger';
import AnimatedText from '../animation/AnimatedText';

interface FlipCardProps {
  title: string;
  description: string;
  imageUrl: string;
  backText: string;
}

const FlipCard: React.FC<FlipCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="w-full sm:w-1/2 lg:w-full">
      <div className="flip-card relative w-full  perspective">
        <div className="flip-card-inner w-full h-full transition-transform duration-700 ease-in-out">
          {/* Front */}

          <OnTrigger>
          <div
            className="flip-card-front w-full h-full bg-cover bg-center rounded-sm text-[#111] flex flex-col justify-center items-center"
            >
            <Image alt='' src={imageUrl} width={400} height={400} className='object-cover h-60 md:h-[15vw] w-full' />
            <div className=" h-full bg-opacity-60 py-4 rounded-lg text-left">
              <AnimatedText>
              <p className="text-2xl md:text-4xl font-Archivo-semibold">{title}</p>
              </AnimatedText>
              <AnimatedText>
              <span className="text-base text-[#111]">{description}</span>
              </AnimatedText>
            </div>
          </div>
            </OnTrigger>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
