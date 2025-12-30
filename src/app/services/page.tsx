// app/services/page.tsx
import FeatureGrid from "@/components/layout/cards/FeatureGrid";
import ImageContainer from "@/components/layout/container/ImageContainer";
import LandingPage from "@/components/layout/container/LandingSection";
import NidusTransition from "@/components/layout/transition/NidusTransition";
import { servicesFeaturedGrid } from "@/utils/pageContent/services/services";

export const metadata = {
  title: "Technology Consulting Services | Nidus Technologies",
  description:
    "Explore Nidus Technologies' range of strategic IT consulting services — from software development and AI to cloud solutions — designed to drive innovation and business growth.",
  keywords: [
    "Technology Consulting",
    "Software Development",
    "Cloud Services",
    "Data Analytics",
    "AI Solutions",
    "IT Consulting",
    "Nidus Technologies",
  ],
  openGraph: {
    title: "Technology Consulting Services | Nidus Technologies",
    description:
      "We provide strategic IT consulting solutions to help businesses innovate, scale, and stay ahead in the digital era.",
    url: "https://nidustech.in/services",
    siteName: "Nidus Technologies",
    images: [
      {
        url: "https://nidustech.in/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Technology Consulting Services - Nidus Technologies",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technology Consulting Services | Nidus Technologies",
    description:
      "Discover how Nidus Technologies helps businesses scale through software, AI, and cloud expertise.",
    images: ["https://nidustech.in/og-services.jpg"],
    creator: "@nidustech",
  },
};


export default function ServicesPage() {
  return (
    <>
      <LandingPage title="Our Technology Consulting Services" description="We offer a comprehensive suite of consulting services tailored to your unique business needs.
          Our experts help you harness technology to scale operations, drive innovation, and outperform
          in today’s competitive environment." imageUrl="https://images.pexels.com/photos/17402495/pexels-photo-17402495.jpeg" />
            <div className="mx-auto px-2 md:px-5 my-5">
        {/* Industries Grid */}
     <FeatureGrid points={servicesFeaturedGrid} sectionTitle="" highlight="" />
      </div>
  <ImageContainer/>
      <NidusTransition
        description="Nidus helps businesses of all sizes unlock the power of technology. Reach out to our team
        to explore strategic IT solutions tailored to your goals."
      >
        Ready to Transform Your Business
      </NidusTransition>
    </>
  );
}
