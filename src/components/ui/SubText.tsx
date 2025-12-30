import { cn } from '@/lib/utils'
import React from 'react'

interface props {
    children:React.ReactNode;
    className?:string
}

const SubText:React.FC<props> = ({children,className}) => {
  return (
   <p className={cn('leading-relaxed text-md md:text-xl space-y-3',className)}>
{children}
          </p>
  )
}

export default SubText