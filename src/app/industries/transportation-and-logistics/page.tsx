"use client";

import NidusTransition from "@/components/layout/transition/NidusTransition";
import LandingPage from "@/components/layout/container/LandingSection";

import KeyChallenge from "@/components/layout/cards/KeyChallenge";
import ImpactSection from "@/components/layout/cards/ImpactSection";
import {  featureGridData, impactSectionData, keyChallengeData } from "@/utils/pageContent/industries/transportation-and-logistics";
import FeatureGrid from "@/components/layout/cards/FeatureGrid";



export default function TransportationLogistics() {
  return (
    <>
    
      <LandingPage
        title="Transportation & Logistics"
        description="Smart solutions for efficient, cost-effective, and sustainable supply chains."
        imageUrl="https://images.pexels.com/photos/6169662/pexels-photo-6169662.jpeg"
      />

      {/* Industry Challenges */}
<KeyChallenge array={keyChallengeData} title="Transportation and Logistics" />

   <FeatureGrid
  // subtitle="Transforming Logistics Through Innovation"
  sectionTitle=""
  highlight=" "
  points={featureGridData}
/>

      {/* Impact Section */}
      <ImpactSection
        title="Transforming Logistics with"
        span="Real Results"
        data={impactSectionData}
        variant="dark"
      />

      {/* CTA */}
      <NidusTransition description="Let’s build smarter, faster, and more reliable logistics solutions for your business.">
        Ready to Optimize Your Logistics?
      </NidusTransition>
    </>
  );
}
