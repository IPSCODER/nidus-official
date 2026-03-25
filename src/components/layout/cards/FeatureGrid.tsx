"use client";

import React from "react";
import AnimatedText from "@/components/layout/animation/AnimatedText";
import {
  ActivitySquare,
  Code,
  LineChart,
  Cloud,
  Shield,
  Monitor,
} from "lucide-react";



interface FeaturePoint {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  iconClass?: string;
}

interface FeatureGridProps {
  sectionTitle: string;
  highlight: string;
  points: FeaturePoint[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  sectionTitle,
  highlight,
  points,
}) => {
  return (
    <section className="mx-auto px-10 py-20">
      
      {/* heading */}
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-5xl md:text-7xl font-bold text-black">
          {sectionTitle} <span className="text-gray-400">{highlight}</span>
        </h2>
        <span className="text-gray-500 hidden md:block">
          [{String(points.length).padStart(2, "0")}]
        </span>
      </div>

      <div className="border-t border-gray-200">
        {points.map((item, index) => {

          return (
            <div
              key={item.id}
              className="flex md:items-center gap-8 py-10 border-b border-gray-200 group  transition-all"
            >
              
              {/* number */}
              <span className="text-2xl text-gray-500 w-16">
                [{String(index + 1).padStart(2, "0")}]
              </span>

         

              {/* content */}
              <div className="max-w-3xl">
                <AnimatedText>
                  <h3 className="text-2xl font-semibold text-black">
                    {item.title}
                  </h3>
                </AnimatedText>

                <AnimatedText>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </AnimatedText>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureGrid;