import { cn } from '@/lib/utils'
import React from 'react'

interface props {
    children:React.ReactNode;
    className?:string
}

const MainText:React.FC<props> = ({children,className}) => {
  return (
    <p className={cn('leading-relaxed italic text-lg sm:text-3xl',className)}>{children}</p>
  )
}

export default MainText