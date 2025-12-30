import { cn } from '@/lib/utils'
import React from 'react'
import AnimatedText from '../layout/animation/AnimatedText';

interface props {
    children:React.ReactNode;
    className?:string;
    span:string
    textClass?:string
    spanClass?:string
}

const SubHeading:React.FC<props> = ({children,className,span,textClass,spanClass="text-primary"}) => {
  return (
    <AnimatedText className={className} >
  <h2 className={cn('text-4xl md:text-4xl font-extrabold mt-5 text-surface  font-panchang-semibold capitalize leading-tight drop-shadow-md',textClass)}>
          {children} <span className={spanClass}>{span}</span>
        </h2>
        
    </AnimatedText>
  )
}

export default SubHeading