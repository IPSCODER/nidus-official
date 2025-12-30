import FeatureGrid from "@/components/layout/cards/FeatureGrid";
import ImageContainer from "@/components/layout/container/ImageContainer";
import LandingPage from "@/components/layout/container/LandingSection";
import NidusTransition from "@/components/layout/transition/NidusTransition";
import { industries } from "@/utils/pageContent/industries/industries";

export const metadata = {
  title: "Industries We Serve | Nidus Technologies",
  description:
    "Discover how Nidus Technologies delivers cutting-edge software solutions across industries like healthcare, finance, logistics, education, and more.",
  keywords: [
    "industries we serve",
    "industry software solutions",
    "healthcare tech",
    "fintech development",
    "logistics software",
    "eLearning platforms",
    "ERP for manufacturing",
    "gov tech India"
  ],
  openGraph: {
    title: "Industries We Serve | Nidus Technologies",
    description:
      "From healthcare to finance, logistics to education, we provide technology consulting and solutions tailored to each sector’s unique needs.",
    url: "https://nidustech.in/industries",
    siteName: "Nidus Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | Nidus Technologies",
    description:
      "Explore how Nidus Technologies helps your industry thrive with specialized digital solutions and consulting.",
    creator: "@nidustech",
  },
  alternates: {
    canonical: "https://nidustech.in/industries",
  },
};




export default function IndustriesWeServe() {


  return (
    <>

<LandingPage title="Your Industry, Our Expertise" description=" We understand the unique challenges of every industry. Our team combines deep domain
          knowledge with advanced technology solutions to help you innovate and grow." imageUrl="https://images.pexels.com/photos/14543858/pexels-photo-14543858.jpeg" />


 <FeatureGrid
  // subtitle="Transforming Logistics Through Innovation"
  sectionTitle="Our"
  highlight=" Solutions"
  points={industries}
/>

        <ImageContainer/>
    <NidusTransition description="Contact us today to explore how we can tailor technology consulting to meet your industry-specific goals." >
      Ready to Transform Your Industry?
    </NidusTransition>
    </>
  );
}
