import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t border-gray-500 my-10 px-10'>
      <div className='flex justify-between py-5 items-center border-b' >
        <h1 className='text-8xl font-bold font-primary tracking-tight text-shadow-sm text-[#000000] ' >Work with us</h1>
        <a href="mailto:contact@nidustechnologies.com" className='text-6xl  font-primary font-bold tracking-tight text-shadow-sm text-[#000000] ' >contact@nidustechnologies.com</a>
      </div>
      <div className='flex gap-4 my-5' >
        <ul>
          <li>
            <h5 className='mb-3 font-bold' >
              Sitemap
            </h5>
          </li>
          <li>
            <Link href={'/'} >Home</Link>
          </li>
          <li>
            <Link href={'/about'} >About</Link>
          </li>
          <li>
            <Link href={'/services'} >Services</Link>
          </li>
          <li>
            <Link href={'/contact'} >Contact</Link>
          </li>
        </ul>

        <ul>
          <li>
            <h5 className='mb-3' >
              Social
            </h5>
          </li>
          <li>
            <Link href={'/'} >Instagram</Link>
          </li>
          <li>
            <Link href={'/about'} >Linkdln</Link>
          </li>
          <li>
            <Link href={'/services'} >Behance</Link>
          </li>
        </ul>
      </div>
      <div>
         <Image src='/nidus-black.png' width={5000} height={5000} className="w-[40vw]" alt="Logo" priority />
      </div>
    </footer>
  )
}

export default Footer