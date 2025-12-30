
import FeatureGrid from "@/components/layout/cards/FeatureGrid";
import LandingPage from "@/components/layout/container/LandingSection";
import NidusTransition from "@/components/layout/transition/NidusTransition";
import { governmentFeatures } from "@/utils/pageContent/industries/government-and-public-sector";

export const metadata = {
  title: "Government & Public Sector Solutions | Nidus Technologies",
  description:
    "Empowering governments and public institutions with digital solutions that enhance transparency, citizen engagement, and efficiency.",
  keywords: [
    "government technology",
    "public sector software",
    "e-governance",
    "digital transformation government",
    "citizen services",
  ],
  openGraph: {
    title: "Government & Public Sector Solutions | Nidus Technologies",
    description:
      "Nidus Technologies helps governments and public organizations adopt digital-first solutions for efficiency, transparency, and better citizen services.",
    url: "https://nidustech.in/industries/government",
    siteName: "Nidus Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Government & Public Sector Solutions | Nidus Technologies",
    description:
      "Driving digital transformation for governments and public institutions with secure, citizen-focused solutions.",
    creator: "@nidustech",
  },
  alternates: {
    canonical: "https://nidustech.in/industries/government",
  },
};

export default function GovernmentPage() {

  return (
    <>
      {/* Hero Section */}
      <LandingPage
        title="Transforming Governance with Technology"
        description="We help governments and public sector organizations modernize processes, improve transparency, and deliver citizen-first digital services."
        imageUrl="https://images.pexels.com/photos/164584/pexels-photo-164584.jpeg"
      />

      {/* Industry Description */}

                            <FeatureGrid
  sectionTitle="Digital. Transparent. Citizen-First."
  highlight=" "
  points={governmentFeatures}
/>

      {/* Image Showcase */}

      {/* CTA Section */}
      <NidusTransition description="Partner with us to build secure, transparent, and citizen-first digital solutions for governments and public institutions.">
        Let’s Build Smarter Governance
      </NidusTransition>
    </>
  );
}
