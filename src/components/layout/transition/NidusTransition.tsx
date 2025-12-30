import { Btn } from '@/components/ui/Btn';
import React from 'react'
import AnimatedText from '../animation/AnimatedText';


interface props {
    children:React.ReactNode;
    description?:string
}


const NidusTransition:React.FC<props> = ({children,description}) => {
  return (
      <div className="relative py-10 px-2 md:py-20 min-h-[250px] md:h-[500px] mt-10">
      <div className="absolute inset-0 overflow-hidden z-0">
         <div className="absolute -top-[5%] right-0 whitespace-nowrap animate-marquee-right opacity-10 pointer-events-none select-none">
          <p className="text-[80px] sm:text-[180px] font-panchangBold font-extrabold uppercase tracking-tight text-stroke leading-none">
            NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS
          </p>
        </div>
        {/* Leftward scrolling text */}
        <div className="absolute top-[25%] left-0 whitespace-nowrap animate-marquee-left opacity-10 pointer-events-none select-none">
          <p className="text-[80px] sm:text-[180px] font-panchangBold font-extrabold uppercase tracking-tight text-stroke leading-none">
            NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS
          </p>
        </div>

        {/* Rightward scrolling text */}
        <div className="absolute top-[55%] right-0 whitespace-nowrap animate-marquee-right opacity-10 pointer-events-none select-none">
          <p className="text-[80px] sm:text-[180px] font-panchangBold font-extrabold uppercase tracking-tight text-stroke leading-none">
            NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS  NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS
          </p>
        </div>
          <div className="absolute top-[85%] left-0 whitespace-nowrap animate-marquee-left opacity-10 pointer-events-none select-none">
          <p className="text-[80px] sm:text-[180px] font-panchangBold font-extrabold uppercase tracking-tight text-stroke leading-none">
            NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS NIDUS
          </p>
        </div>
      </div>
      <div className="w-full mx-auto max-w-7xl md:max-w-4xl h-full flex md:items-center justify-center flex-col gap-0 md:gap-2" >
        <AnimatedText>
       <h2 className="text-4xl md:text-7xl font-extrabold capitalize font-Archivo-semibold md:text-center md:mb-4">
            {children}
          </h2>
        </AnimatedText>
        <AnimatedText>
          <p className="text-xl md:text-center mb-4 mg:mb-6">
            {description}
          </p>
        </AnimatedText>
        <AnimatedText>
      <Btn href="/contact-us" >Lets Talk</Btn>
        </AnimatedText>
      </div>
    </div>
  )
}

export default NidusTransition