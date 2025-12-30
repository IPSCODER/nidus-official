"use client";

import FeatureGrid from "@/components/layout/cards/FeatureGrid";
import LandingPage from "@/components/layout/container/LandingSection";
import NidusTransition from "@/components/layout/transition/NidusTransition";
import { healthcareFeatures } from "@/utils/pageContent/industries/healthcare";



export default function HealthcarePage() {


  return (
    <>
      {/* Hero Section */}
      <LandingPage
        title="Innovating Healthcare with Technology"
        description="From telemedicine to AI diagnostics, we help healthcare providers deliver patient-first, digitally empowered care."
        imageUrl="https://images.pexels.com/photos/6129509/pexels-photo-6129509.jpeg"
      />

      {/* Industry Description */}
    

                    <FeatureGrid
  sectionTitle="Transforming Patient Care"
  highlight=" "
  points={healthcareFeatures}
/>

      {/* Image Showcase */}

      {/* CTA Section */}
      <NidusTransition description="Let’s build the future of healthcare together with secure, scalable, and patient-centric digital solutions.">
        Ready to Revolutionize Healthcare?
      </NidusTransition>
    </>
  );
}
