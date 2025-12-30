import BulletListSection from '@/components/layout/cards/BulletListSection'
import ImageContainer from '@/components/layout/container/ImageContainer'
import LandingPage from '@/components/layout/container/LandingSection'
import NidusTransition from '@/components/layout/transition/NidusTransition'
import { dataAnalyticsServicesBullets, whyChooseNidusDataBullets, whyDataAnalyticsBullets } from '@/utils/pageContent/services/data-analytics-and-ai'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Data Analytics & AI Services | Nidus Technologies",
  description: "Unlock insights and business growth with our data analytics and AI solutions. From dashboards to ML engineering, Nidus empowers smart decisions.",
  keywords: [
    "Data Analytics Services",
    "AI Services",
    "ML Engineering",
    "Business Intelligence",
    "Data Science",
    "Big Data",
    "Predictive Analytics",
    "NLP Solutions",
    "Dashboard Development",
    "Nidus Technologies"
  ],
  openGraph: {
    title: "Data Analytics & AI Services | Nidus Technologies",
    description: "We help businesses turn raw data into intelligent decisions through analytics, machine learning, and custom AI tools.",
    url: "https://yourdomain.com/services/data-analytics",
    siteName: "Nidus Technologies",
    images: [
      {
        url: "https://yourdomain.com/og-data-analytics.jpg", // Add your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Nidus Technologies - Data Analytics Services",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Analytics & AI | Nidus Technologies",
    description: "Drive decisions with data. Discover our analytics and AI services.",
    images: ["https://yourdomain.com/og-data-analytics.jpg"],
  },
};



const DataAnalyst = () => {
  return (
    <>

  <LandingPage title="Introduction" description="At Nidus Technologies, we unlock the potential of data through powerful analytics, ML engineering, and AI-driven insights. Our solutions help businesses make smarter decisions, forecast outcomes, and operate with precision across departments." imageUrl="https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg" />


  <div className="mx-auto space-y-5 px-5 pt-10">

<BulletListSection
  title="Why Data Analytics & AI"
  span="Matters"
  bullets={whyDataAnalyticsBullets}
/>

<BulletListSection
  title="Our Data & AI"
  span="Services"
  bullets={dataAnalyticsServicesBullets}
/>

<BulletListSection
  title="Why Choose Nidus for"
  span="Data Analytics & AI?"
  bullets={whyChooseNidusDataBullets}
/>


  </div>
  <ImageContainer/>
            <NidusTransition description="Lets modernize your infrastructure and unleash performance, security, and agility." >
           Ready to scale your operations with the cloud?
    </NidusTransition>
</>

  )
}

export default DataAnalyst