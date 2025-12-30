'use client'

import React from 'react'
import Hero from './hero-section'
import Services from './services'
import IndustriesTestimonialsCTA from './industrialTestimonial'
import ContactForm from './contact-form'
import FeatureProject from './Feature-projects'
import AboutUs from './about-us'
import Brands from './brands'
import OurServices from './our-services'
import ImageContainer from '@/components/layout/container/ImageContainer'
import AboutSection from './about-us/About'
import FeatureGrid from '@/components/layout/cards/FeatureGrid'
import { HomeFeaturedGrid } from '@/utils/pageContent/home'

const Home = () => {
  return (
    <main className='overflow-hidden'>
    <Hero/>
    <AboutSection/>
    <OurServices/>
    <FeatureGrid points={HomeFeaturedGrid} highlight='Nidus' sectionTitle='Why Choose' />
    <Services/>
    <FeatureProject/>
    <AboutUs/>
    {/* <LeadingInstrustries/> */}
    <IndustriesTestimonialsCTA/>
    <Brands/>
    <ImageContainer/>
    <ContactForm/>

    </main>
  )
}

export default Home