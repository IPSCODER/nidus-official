
import NidusTransition from '@/components/layout/transition/NidusTransition';
import React from 'react';
import LandingPage from '@/components/layout/container/LandingSection';
import ImageContainer from '@/components/layout/container/ImageContainer';
import BulletListSection from '@/components/layout/cards/BulletListSection';
import { softwareServicesBullets, whyChooseNidusSoftwareBullets, whyCustomSoftwareBullets } from '@/utils/pageContent/services/software-development';

export const metadata = {
  title: "Custom Software Development | Nidus Technologies",
  description:
    "Get custom software development services tailored to your business needs. From web and mobile apps to cloud-native solutions, we deliver secure, scalable, and performant systems.",
  keywords: [
    "custom software development",
    "web app development",
    "mobile app development",
    "cloud-native apps",
    "software company",
    "Next.js development",
    "React.js developers",
    "Nidus Technologies"
  ],
  openGraph: {
    title: "Custom Software Development | Nidus Technologies",
    description:
      "We build secure, scalable, and high-performance applications tailored for your business. Learn more about our end-to-end development services.",
    url: "https://nidustech.in/software-development",
    siteName: "Nidus Technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development | Nidus Technologies",
    description:
      "Explore our software development services — modern web, mobile, and cloud-native solutions to accelerate your business growth.",
    creator: "@nidustech",
  },
  alternates: {
    canonical: "https://nidustech.in/software-development",
  },
};



const SoftwareDevelopment = () => {
  return (
    <>

                <LandingPage title="Introduction" description="At Nidus Technologies, we build high-performance, scalable software tailored to solve complex business challenges. Our engineering team transforms business requirements into secure, maintainable applications using cutting-edge tools and architecture best practices." imageUrl="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg" />
      <div className="mx-auto space-y-10 px-5 pt-10">

        {/* Why Custom Software Development Matters */}
 <BulletListSection
  title="Why Custom Software Development"
  span="Matters"
  bullets={whyCustomSoftwareBullets}
/>

<BulletListSection
  title="Our Software Development"
  span="Services"
  bullets={softwareServicesBullets}
/>

<BulletListSection
  title="Why Choose Nidus for"
  span="Software Development?"
  bullets={whyChooseNidusSoftwareBullets}
/>
      </div>
  <ImageContainer/>
      <NidusTransition description="Lets modernize your infrastructure and unleash performance, security, and agility.">
        Ready to scale your operations with the cloud?
      </NidusTransition>
    </>
  );
};

export default SoftwareDevelopment;
