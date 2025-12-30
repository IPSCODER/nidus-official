"use client";

import NidusTransition from "@/components/layout/transition/NidusTransition";
import LandingPage from "@/components/layout/container/LandingSection";
import KeyChallenge from "@/components/layout/cards/KeyChallenge";
import { impactSectionData, keyChallengeData, retailFeatures } from "@/utils/pageContent/industries/retail-and-e-commerce";
import ImpactSection from "@/components/layout/cards/ImpactSection";
import FeatureGrid from "@/components/layout/cards/FeatureGrid";

export default function RetailEcommerceIndustry() {
  return (
    <>
          <LandingPage
        title="Retail &  E-Commerce"
        description="Building seamless shopping experiences that connect customers and brands."
        imageUrl="https://images.pexels.com/photos/5632409/pexels-photo-5632409.jpeg"
      />


         <KeyChallenge array={keyChallengeData} title="Retail & E-Commerce" />

              <FeatureGrid
  sectionTitle=""
  highlight=" "
  points={retailFeatures}
/>


      
             <ImpactSection
        title="  Real Impact on "
        span="Retail & E-Commerce"
        data={impactSectionData}
        variant="dark"
      />

      {/* CTA */}
      <NidusTransition description="Deliver next-gen retail and e-commerce experiences that delight your customers and grow your business.">
        Ready to Redefine Your Shopping Experience?
      </NidusTransition>
    </>
  );
}
