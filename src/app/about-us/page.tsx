import ImageContainer from "@/components/layout/container/ImageContainer";
import LandingPage from "@/components/layout/container/LandingSection";
import NidusTransition from "@/components/layout/transition/NidusTransition";
import SubText from "@/components/ui/SubText";
import type { Metadata } from "next";
import OurServices from "../home/our-services";
import OurStory from "./view/OurStory";
import FeatureGrid from '@/components/layout/cards/FeatureGrid'
import { coreValues } from "@/utils/pageContent/about-us";


export const metadata: Metadata = {
  title: "About Us | Nidus Technologies",
  description:
    "Learn about Nidus Technologies — a trusted technology partner helping businesses thrive through innovation, expertise, and tailored digital solutions.",
  keywords: [
    "About Nidus",
    "Nidus Technologies",
    "Technology Consulting",
    "Digital Transformation",
    "IT Solutions",
    "Software Company",
  ],
  openGraph: {
    title: "About Us | Nidus Technologies",
    description:
      "Discover how Nidus Technologies empowers businesses with innovative IT solutions and a client-first approach.",
    url: "https://nidustech.in/about-us",
    siteName: "Nidus Technologies",
    images: [
      {
        url: "https://nidustech.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nidus Technologies Office or Team Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Nidus Technologies",
    description:
      "We empower businesses to reach their potential through innovative tech services.",
    images: ["https://nidustech.in/og-image.jpg"],
    creator: "@nidustech",
  },
};



export default function AboutUs() {
  return (
    <>
      <LandingPage title="About Us" description="  At Nidus, we’re more than just a technology consulting firm. We are your strategic partner,
            your technology advocate, and your trusted advisor. With a passion for innovation and a
            commitment to excellence, we’ve been helping businesses unlock the potential of technology
            for years." imageUrl="https://images.pexels.com/photos/11299591/pexels-photo-11299591.jpeg" />

            <OurServices/>

                {/* <FeatureGrid points={coreValues} highlight='Core Values' sectionTitle='Our' /> */}



<OurStory/>




        {/* Value Proposition */}
<article className="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
  <div className="relative overflow-hidden">
    
    {/* Soft gradient overlay */}
    <div className="absolute inset-0 pointer-events-none  opacity-70" />

    {/* Main content */}
    <div className="relative z-10 py-6 md:p-10 lg:p-16">
      
      {/* Heading */}
      <h2 className="text-4xl md:text-4xl drop-shadow-md  md:text-center sm:text-5xl font-extrabold font-panchang-medium bg-gradient-to-r from-primary to-orange-600 bg-clip-text text-transparent mb-6">
        Your Trusted Technology Partner
      </h2>

      {/* Description */}
      <p className="md:text-center text-gray-700 text-lg sm:text-xl font-medium leading-relaxed max-w-4xl mx-auto mb-10">
        We deliver digital transformation and custom software solutions that empower organizations to evolve, expand, and optimize their operations in the digital economy.
      </p>

      {/* Features grid */}
      <div className="grid gap-8 sm:grid-cols-2 text-gray-800 text-base sm:text-lg leading-relaxed">
        <SubText>
          Nidus Technologies specializes in experience engineering, cloud services, platform development, and analytics to enable your business success.
        </SubText>
        <SubText>
          With a productized digital engineering approach and results-driven mindset, we help launch products faster, reduce risks, and accelerate customer engagement.
        </SubText>
      </div>
    </div>

    {/* Decorative bottom bar */}
    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-100 via-yellow-200 to-orange-100 rounded-b-3xl" />
  </div>
</article>


<ImageContainer/>
          <NidusTransition>
Get answers to your questions
    </NidusTransition>
    </>
  );
}