import { cn } from '@/lib/utils'
import React from 'react'

interface props {
    children:React.ReactNode;
    className?:string
}

const MainHeading:React.FC<props> = ({children,className}) => {
  return (
    <h2 className={cn('text-5xl md:text-[10vw] font-extrabold mb-4',className)}>{children}</h2>
  )
}

export default MainHeading