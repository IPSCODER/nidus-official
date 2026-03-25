import HeroSection from "@/components/home/HeroSection";
import NidusTransition from "@/components/layout/transition/NidusTransition";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";

export default function HomePage() {
  return (
<>
<HeroSection/>
<OurStory/>
  <Services/>
     <NidusTransition>
Get answers to your questions
    </NidusTransition>
</>
  );
}
