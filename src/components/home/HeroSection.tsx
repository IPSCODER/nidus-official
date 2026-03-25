import EyeTracker from '@/components/common/bg/EyeTracker'
import Image from 'next/image'


const HeroSection = () => {
  return (
<>
  <div>
  <div className='mt-52 h-auto w-6xl mx-auto flex flex-col items-center gap-4' >
<div className='flex items-end gap-6 w-full' >        <h1 className='text-8xl font-extrabold font-primary tracking-tight text-shadow-lg text-[#000000] ' >ENGINEERED</h1><EyeTracker/> <h1 className='text-7xl font-extrabold font-primary tracking-tight text-shadow-lg text-gray-600' >WE</h1> </div>
<div className='flex w-full  gap-6 justify-end' >    <h1 className='text-7xl font-extrabold font-primary tracking-tight text-shadow-lg text-gray-600' >DELIVER</h1>    <EyeTracker/><h1 className='text-8xl font-extrabold font-primary tracking-tight text-shadow-lg text-[#000000' >EXCELLENCE</h1></div>
<h4 className='text-4xl mt-10 text-gray-600' >Precision software for ambitious visions</h4>
<p className='w-4xl text-gray-800 text-center sour-gummy font-bold' >At Nidus, we empower businesses with innovative technology solutions to thrive in the digital age. Our passion for technology, combined with our commitment to excellence, enables us to deliver tailored solutions that drive success.</p>
    </div>
<div className='relative z-10 bg-black/40' >
<Image src='https://images.pexels.com/photos/16676908/pexels-photo-16676908.jpeg' width={1000} height={1000} alt='hero-image' className='w-full h-[60vh] object-cover rounded-md mt-10 ' />    
</div>
  </div>
    </>
  )
}

export default HeroSection