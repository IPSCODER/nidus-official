"use client";

import NidusTransition from "@/components/layout/transition/NidusTransition";
import LandingPage from "@/components/layout/container/LandingSection";
import KeyChallenge from "@/components/layout/cards/KeyChallenge";
import { impactSectionData, keyChallengeData, manufacturingFeatures } from "@/utils/pageContent/industries/manufacturing";
import ImpactSection from "@/components/layout/cards/ImpactSection";
import FeatureGrid from "@/components/layout/cards/FeatureGrid";

export default function ManufacturingIndustry() {
  return (
    <>

         <LandingPage
        title="Manufacturing Innovation"
        description="Driving Industry 4.0 with automation, IoT, and data-driven operations."
        imageUrl="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
      />


      <KeyChallenge array={keyChallengeData} title="Manufacturing" />



     <FeatureGrid
  sectionTitle=""
  highlight=" "
  points={manufacturingFeatures}
/>


             <ImpactSection
        title="  Real Impact on "
        span="Manufacturing"
        data={impactSectionData}
        variant="dark"
      />

      {/* CTA */}
      <NidusTransition description="Transform your manufacturing operations with digital-first solutions that drive efficiency and growth.">
        Ready to Build the Factory of the Future?
      </NidusTransition>
    </>
  );
}
