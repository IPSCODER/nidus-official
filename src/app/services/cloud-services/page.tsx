import type { Metadata } from "next";
import NidusTransition from '@/components/layout/transition/NidusTransition'
import React from 'react'
import LandingPage from "@/components/layout/container/LandingSection";
import ImageContainer from "@/components/layout/container/ImageContainer";
import BulletListSection from "@/components/layout/cards/BulletListSection";
import { cloudServicesBullets, whyChooseNidusCloudBullets, whyCloudBullets } from "@/utils/pageContent/services/cloud-services";

// ✅ SEO Metadata for this page
export const metadata: Metadata = {
  title: "Cloud Services | Nidus Technologies",
  description:
    "Explore scalable, secure, and cost-effective cloud services by Nidus Technologies. We provide cloud migration, DevOps automation, hybrid cloud, and cloud security solutions tailored for your business.",
  keywords: [
    "Cloud Services",
    "Cloud Migration",
    "AWS Solutions",
    "Azure Cloud",
    "Google Cloud",
    "DevOps Automation",
    "Kubernetes",
    "CI/CD Pipelines",
    "Nidus Technologies",
    "Hybrid Cloud",
    "Cloud Security",
    "Infrastructure as Code",
  ],
  openGraph: {
    title: "Cloud Services | Nidus Technologies",
    description:
      "Empower your business with secure, scalable cloud solutions built by experts.",
    url: "https://yourdomain.com/services/cloud", // replace with actual domain
    type: "website",
  },
  alternates: {
    canonical: "https://yourdomain.com/services/cloud", // replace with your live URL
  },
};


// ✅ Page Component
export default function CloudServices() {
  return (
    <>

<LandingPage title="Introduction" description="At Nidus Technologies, we architect and implement cloud-native solutions that drive business agility, scalability, and cost optimization. Whether youre migrating from legacy systems or building modern microservices, our cloud engineering team delivers secure, scalable, and future-ready infrastructure on AWS, Azure, or GCP." imageUrl="https://images.pexels.com/photos/17489155/pexels-photo-17489155.jpeg" />

      <div className="mx-auto space-y-5 p-5 pt-10">

<BulletListSection
  title="Why Cloud Services"
  span="Matter"
  bullets={whyCloudBullets}
/>

<BulletListSection
  title="Our Cloud"
  span="Services"
  bullets={cloudServicesBullets}
/>

<BulletListSection
  title="Why Choose Nidus for Cloud"
  span="Services"
  bullets={whyChooseNidusCloudBullets}
/>

      </div>
  <ImageContainer/>
      <NidusTransition description="Lets modernize your infrastructure and unleash performance, security, and agility.">
        Ready to scale your operations with the cloud?
      </NidusTransition>
    </>
  );
}
