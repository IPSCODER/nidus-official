"use client";
import { Btn } from "@/components/ui/Btn";
import SubHeading from "@/components/ui/SubHeading";
import React from "react";

const AboutSection = () => {
  return (
    <section className="relative py-20">
   

      <div className=" px-6 grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-1 justify-center items-center md:justify-items-center gap-10">
        {/* Left Heading */}
          <SubHeading span="Nidus Technlogies" >
            About

          </SubHeading>

        {/* Right Content */}
          <p className="text-gray-700 text-lg leading-relaxed mb-6 md:text-center">
            At <span className="font-semibold">Nidus Technolgies</span>, we
            are dedicated to revolutionizing businesses through innovative
            strategies and personalized services. Our mission is to drive
            sustainable growth and create a lasting competitive advantage for
            our clients.
          </p>
          <Btn href="/about-us" className="md:" >
            Discover More
          </Btn>
        </div>

    </section>
  );
};

export default AboutSection;
