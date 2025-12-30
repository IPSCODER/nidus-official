
import Carousel from "./Carousel";
import SubHeading from "@/components/ui/SubHeading";



export default function IndustriesTestimonialsCTA() {

  return (
    <section className="py-10 md:pt-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto space-y-0">

        {/* Header */}
          <SubHeading span="Testimonials" className="md:text-center" >
Client
          </SubHeading>
      <Carousel/>
      </div>
    </section>
  );
}
