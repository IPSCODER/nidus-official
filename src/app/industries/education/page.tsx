"use client";

import NidusTransition from "@/components/layout/transition/NidusTransition";
import LandingPage from "@/components/layout/container/LandingSection";
import KeyChallenge from "@/components/layout/cards/KeyChallenge";
import { educationFeatures, impactSectionData, keyChallengeData } from "@/utils/pageContent/industries/education";
import ImpactSection from "@/components/layout/cards/ImpactSection";
import FeatureGrid from "@/components/layout/cards/FeatureGrid";

export default function EducationIndustry() {
  return (
    <>

       <LandingPage
        title="Education Technology"
        description="Empowering learning with scalable digital platforms and smart education tools."
        imageUrl="https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg"
      />

<KeyChallenge array={keyChallengeData} title="Education" />
    




   
 <FeatureGrid
  sectionTitle=""
  highlight=" "
  points={educationFeatures}
/>



            <ImpactSection
        title="  Real Impact on "
        span="Education"
        data={impactSectionData}
        variant="dark"
      />

      {/* CTA */}
      <NidusTransition description="Partner with us to transform education using cutting-edge technology solutions.">
        Ready to Empower Learning?
      </NidusTransition>
    </>
  );
}
