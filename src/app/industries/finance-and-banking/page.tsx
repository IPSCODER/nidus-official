"use client";

import FeatureGrid from "@/components/layout/cards/FeatureGrid";
import LandingPage from "@/components/layout/container/LandingSection";
import NidusTransition from "@/components/layout/transition/NidusTransition";
import { financeFeatures } from "@/utils/pageContent/industries/finance-and-banking";


export default function FinancePage() {


  return (
    <>
      {/* Hero Section */}
      <LandingPage
        title="Driving the Future of Finance & Banking"
        description="We empower banks, NBFCs, and fintech startups with innovative solutions for secure, seamless, and digital-first financial services."
        imageUrl="https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg"
      />

      {/* Industry Description */}

                   <FeatureGrid
  sectionTitle="Secure. Scalable. Digital-First."
  highlight=" "
  points={financeFeatures}
/>

   

      {/* Image Showcase */}

      {/* CTA Section */}
      <NidusTransition description="Partner with us to build digital-first, customer-centric financial solutions that redefine trust and innovation.">
        Let’s Innovate in Finance
      </NidusTransition>
    </>
  );
}
