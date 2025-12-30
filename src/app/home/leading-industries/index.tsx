import { OnTrigger } from "@/components/layout/animation/OnTrigger";
import ParallaxImage from "@/components/layout/animation/ParallaxImage";
import { Btn } from "@/components/ui/Btn";
import React from "react";

const LeadingIndustries = () => {
  return (
    <div className="w-full h-auto md:min-h-96 py-10 relative overflow-hidden bg-surface flex items-center justify-center md:justify-start">
  <ParallaxImage
  src="https://images.pexels.com/photos/12530455/pexels-photo-12530455.jpeg"
  alt="Up Parallax"
  height="100vh"
  speed={0.1}
  direction="up"
  className="absolute w-full left-0"
></ParallaxImage>
  {/* 🔲 Overlay for darkening the image */}
  <div className="absolute inset-0 bg-black opacity-40 z-0" />

      <div className=" flex justify-between px-10 w-full relative z-10">
        <OnTrigger>
          <div className="relative z-20 p-6 md:p-10 m-4 md:m-0 pr-40 bg-white/10 backdrop-blur-lg rounded-sm shadow-lg max-w-full md:max-w-[600px]">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              Trusted by Leading Industries
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-white">
              We have a proven track record of serving a diverse range of industries including finance, healthcare, manufacturing, and more. Our deep domain expertise allows us to address your unique challenges effectively.
            </p>
            <Btn className="mt-5">
              Lets Talk
            </Btn>
          </div>
        </OnTrigger>

        {/* SVG Illustration */}
        <div className="svg relative z-10">
          <svg
            className="svg1"
            width="848.837"
            height="309.273"
            viewBox="0 0 848.837 309.273"
          >
            <g id="Group_1058" transform="translate(-977.248 -4281.363)">
              <g id="Group_473" transform="translate(-188.252 -2807.137)">
                <g id="text-infinite" transform="translate(1166 7089)">
                  <path
                    d="M848.837,155.137A154.143,154.143,0,0,1,694.7,309.273c-96.37,0-192.684-77.039-269.781-154.136S251.508,1,155.136,1a154.137,154.137,0,0,0,0,308.273c96.372,0,192.686-77.039,269.782-154.136S598.329,1,694.7,1A154.143,154.143,0,0,1,848.837,155.137Z"
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="square"
                    strokeWidth="1"
                  />
                </g>
                <text
                  transform="translate(1706.668 7234.42)"
                  fill="#fff"
                  stroke="#fff"
                  fontSize="41"
                  fontFamily="SofiaPro-Light, Sofia Pro"
                  fontWeight="300"
                >
                  <tspan x="0" y="0">High-quality</tspan>
                  <tspan x="0" y="51">design craft</tspan>
                </text>
                <text
                  transform="translate(1208.668 7234.42)"
                  fill="#fff"
                  stroke="#fff"
                  fontSize="41"
                  fontFamily="SofiaPro-Light, Sofia Pro"
                  fontWeight="300"
                >
                  <tspan x="0" y="0">Perfect</tspan>
                  <tspan x="0" y="51">Solution</tspan>
                </text>
              </g>
            </g>
          </svg>
        </div>
      </div>

    </div>
  );
};

export default LeadingIndustries;
