"use client";

import React from "react";
import AnimatedText from "@/components/layout/animation/AnimatedText";
import { CheckCircle } from "lucide-react";

interface BulletListSectionProps {
  title: string;
  span: string;
  bullets: string[];
  className?: string;
}

const BulletListSection: React.FC<BulletListSectionProps> = ({
  title,
  span,
  bullets,
  className = "",
}) => {
  return (
    <section className={`mx-auto px-10 py-20 ${className}`}>
      
      {/* label */}
      <div className="flex items-center gap-2 text-sm tracking-widest mb-6">
        <span className="w-2 h-2 bg-orange-500 rotate-45 inline-block"></span>
        <span className="text-gray-600">[ {span.toUpperCase()} ]</span>
      </div>

      {/* heading */}
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-5xl md:text-7xl font-bold text-black">
          {title}<span className="text-orange-500">.</span>
        </h2>
        <span className="text-gray-500 hidden md:block">
          [{String(bullets.length).padStart(2, "0")}]
        </span>
      </div>

      {/* list */}
      <div className="border-t max-w-7xl ml-auto border-gray-200">
        {bullets.map((text, idx) => (
          <AnimatedText key={idx}>
            <div className="flex items-start gap-8 py-8 border-b border-gray-200">
              
              {/* number */}
              <span className="text-2xl font-medium text-gray-700 w-16">
                [{String(idx + 1).padStart(2, "0")}]
              </span>

              {/* content */}
              <div className="flex items-start gap-4 max-w-4xl">
                <CheckCircle className="text-primary mt-1 h-5 w-5 shrink-0" />
                <p
                  className="text-lg md:text-xl text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>

            </div>
          </AnimatedText>
        ))}
      </div>
    </section>
  );
};

export default BulletListSection;