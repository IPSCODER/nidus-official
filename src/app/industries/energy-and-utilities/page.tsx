
import FeatureGrid from "@/components/layout/cards/FeatureGrid";
import LandingPage from "@/components/layout/container/LandingSection";
import NidusTransition from "@/components/layout/transition/NidusTransition";
import { energyFeatures } from "@/utils/pageContent/industries/energy-and-utilities";


export const metadata = {
  title: "Energy & Utilities Solutions | Nidus Technologies",
  description:
    "Driving digital transformation in energy, power, and utilities with smart, sustainable, and scalable technology solutions.",
  keywords: [
    "energy technology",
    "utilities software",
    "smart grids",
    "renewable energy solutions",
    "digital transformation energy",
  ],
  openGraph: {
    title: "Energy & Utilities Solutions | Nidus Technologies",
    description:
      "From smart grids to sustainability, Nidus Technologies helps energy & utility companies transform operations and customer experiences.",
    url: "https://nidustech.in/industries/energy",
    siteName: "Nidus Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Energy & Utilities Solutions | Nidus Technologies",
    description:
      "Powering the energy and utilities sector with smart, sustainable, and scalable solutions.",
    creator: "@nidustech",
  },
  alternates: {
    canonical: "https://nidustech.in/industries/energy",
  },
};

export default function EnergyPage() {
 

  return (
    <>
      {/* Hero Section */}
      <LandingPage
        title="Powering the Future of Energy & Utilities"
        description="We enable energy and utility companies to achieve sustainability, efficiency, and digital transformation through advanced technology solutions."
        imageUrl="https://images.pexels.com/photos/32435628/pexels-photo-32435628.jpeg"
      />

      {/* Industry Description */}
                     <FeatureGrid
  sectionTitle="Smart. Sustainable. Scalable."
  highlight=" "
  points={energyFeatures}
/>

    

      {/* Image Showcase */}

      {/* CTA Section */}
      <NidusTransition description="Collaborate with us to build smarter, greener, and more resilient energy & utility solutions.">
        Let’s Power Innovation
      </NidusTransition>
    </>
  );
}
