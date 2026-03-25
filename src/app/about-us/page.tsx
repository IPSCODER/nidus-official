import ImageContainer from "@/components/layout/container/ImageContainer";
import LandingPage from "@/components/layout/container/LandingSection";
import NidusTransition from "@/components/layout/transition/NidusTransition";
import OurMission from "@/components/OurMission";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import SubText from "@/components/ui/SubText";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "About Us | Nidus Technologies",
  description:
    "Learn about Nidus Technologies — a trusted technology partner helping businesses thrive through innovation, expertise, and tailored digital solutions.",
  keywords: [
    "About Nidus",
    "Nidus Technologies",
    "Technology Consulting",
    "Digital Transformation",
    "IT Solutions",
    "Software Company",
  ],
  openGraph: {
    title: "About Us | Nidus Technologies",
    description:
      "Discover how Nidus Technologies empowers businesses with innovative IT solutions and a client-first approach.",
    url: "https://nidustech.in/about-us",
    siteName: "Nidus Technologies",
    images: [
      {
        url: "https://nidustech.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nidus Technologies Office or Team Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Nidus Technologies",
    description:
      "We empower businesses to reach their potential through innovative tech services.",
    images: ["https://nidustech.in/og-image.jpg"],
    creator: "@nidustech",
  },
};



export default function AboutUs() {
  return (
    <>
      <LandingPage title="About Us" description="  At Nidus, we’re more than just a technology consulting firm. We are your strategic partner,
            your technology advocate, and your trusted advisor. With a passion for innovation and a
            commitment to excellence, we’ve been helping businesses unlock the potential of technology
            for years." imageUrl="https://images.pexels.com/photos/11299591/pexels-photo-11299591.jpeg" 
            headline="Create Your Dream Website With The Free Framer Template"
              firstTitle="About"
              secondTitle="Us"
            />

<OurMission/>

<OurStory/>

<Services/>




          <NidusTransition>
Get answers to your questions
    </NidusTransition>
    </>
  );
}