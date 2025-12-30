
'use client'

import React, { ElementType, useEffect } from "react";
import AnimatedText from "@/components/layout/animation/AnimatedText";

interface FeaturePoint {
  id: number;
  icon: ElementType;
  title: string;
  subtitle?: string;
  description: string;
  iconClass?:string
}

interface FeatureGridProps {
  sectionTitle: string;
  highlight: string;
  points: FeaturePoint[];
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ sectionTitle, highlight, points }) => {

      useEffect(() => {
    fetch('/api/v1')
      .then(res => res.json())
      .then(json => console.log(json,'json'));
  }, []);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-4xl drop-shadow-md font-extrabold mb-12">
          {sectionTitle}{" "}
          <span className="text-primary">{highlight}</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {points.map((item) => {
              const Icon = item.icon;
            return  <div key={item.id} className="flex gap-5 md:flex-row flex-col">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1"><Icon className={item.iconClass} /></div>

              {/* Text */}
              <div>
                <AnimatedText>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                </AnimatedText>

                <AnimatedText>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </AnimatedText>
              </div>
            </div>
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
