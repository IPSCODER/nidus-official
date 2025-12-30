"use client"

import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ScrollContainer = ({children}:{children:React.ReactNode}) => {

    const pathname = usePathname()


     const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // threshold can be adjusted
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed ${pathname !== "/" &&  'shadow-md bg-primary backdrop-blur-lg'}  top-0 left-0 w-full h-16  flex items-center justify-start lg:justify-start px-4 transition-all duration-300 z-50 ${isScrolled ? 'shadow-md bg-primary backdrop-blur-lg' : '' } `}>
        {children}
      </header>
  )
}

export default ScrollContainer