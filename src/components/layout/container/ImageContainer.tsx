import React from 'react'
import ParallaxImage from '../animation/ParallaxImage'

const ImageContainer = () => {
  return (
    <div className='w-full h-[80vh] overflow-hidden relative'>
      <ParallaxImage
  src="https://images.pexels.com/photos/33375458/pexels-photo-33375458.jpeg"
  alt="Up Parallax"
  height="100vh"
  speed={0.1}
  direction="right"
  className="absolute w-[120vw] -right-[15vw]"
  imageClass='w-[200vw]'
></ParallaxImage>
    </div>
  )
}
 
export default ImageContainer