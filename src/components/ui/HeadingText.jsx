import { cn } from '@/lib/utils'
import React from 'react'

const HeadingText = ({children,props,className}) => {
  return (
    <>
      <h1 className={cn(` font-extrabold font-primary tracking-normal text-center
  bg-gradient-to-b from-black/80 via-black/10 to-transparent
  bg-clip-text text-transparent text-[12rem]`,className)} {...props} >
{children}
</h1>
    </>
  )
}

export default HeadingText