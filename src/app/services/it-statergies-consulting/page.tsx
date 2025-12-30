import BulletListSection from '@/components/layout/cards/BulletListSection'
import ImageContainer from '@/components/layout/container/ImageContainer'
import LandingPage from '@/components/layout/container/LandingSection'
import NidusTransition from '@/components/layout/transition/NidusTransition'
import { itStrategyServicesBullets, whyChooseNidusBullets, whyItStrategyBullets } from '@/utils/pageContent/services/it-statergies-consulting'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "IT Strategies | Nidus Technologies",
  description:
    "Discover how Nidus Technologies builds scalable, secure, and high-performing IT strategies tailored to your business goals. Engineering-led solutions for growth and innovation.",
  keywords: [
    "IT Strategy",
    "IT Consulting",
    "Digital Transformation",
    "DevSecOps",
    "Cloud Architecture",
    "Software Architecture",
    "Nidus Technologies",
  ],
  openGraph: {
    title: "IT Strategy Consulting | Nidus Technologies",
    description:
      "Partner with Nidus Technologies to define scalable, secure, and modern IT strategies. Expert-led consulting for business transformation.",
    url: "https://nidustech.in/it-strategies", // update to your actual deployed URL
    siteName: "Nidus Technologies",
    images: [
      {
        url: "https://nidustech.in/og-image.jpg", // your Open Graph image
        width: 1200,
        height: 630,
        alt: "IT Strategy Consulting - Nidus Technologies",
      },
    ],
    type: "website",
  },
};




const ItStratergies = () => {
  return (
   <>
          <LandingPage title="Introduction" description="At Nidus Technologies, we understand that a clearly defined IT strategy is foundational to long-term business success.
        As senior software engineers, we translate strategic roadmaps into scalable, secure, and high-performing systems that drive innovation and results." imageUrl="https://images.pexels.com/photos/4341198/pexels-photo-4341198.jpeg" />
  <div className=" mx-auto space-y-5 px-5 pt-10">


 <BulletListSection
  title="Why IT Strategy"
  span="Matters"
  bullets={whyItStrategyBullets}
/>

<BulletListSection
  title="Our IT Strategy"
  span="Consulting Services"
  bullets={itStrategyServicesBullets}
/>

<BulletListSection
  title="Why Choose Nidus for"
  span="IT Strategy Consulting?"
  bullets={whyChooseNidusBullets}
/>
  </div>

  <ImageContainer/>
        <NidusTransition description="Lets modernize your infrastructure and unleash performance, security, and agility." >
           Ready to scale your operations with the cloud?
    </NidusTransition>
</>
  )
}

export default ItStratergies
