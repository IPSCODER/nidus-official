"use client";

import React from "react";
import AnimatedText from "../animation/AnimatedText";

// Optional: Use your desired icon system, e.g. react-icons or custom SVGs.
// Example icon prop type:
interface CoreValue {
  title: string;
  text: string;
  icon?: React.ReactNode;
}

interface CoreValuesProps {
  values: CoreValue[];
  columns?: number; // 2, 3, or 4
  heading?: string; // Optional section heading
  description?: string; // Optional section description
}

const gridCols = (cols: number) => {
  if (cols === 2) return "md:grid-cols-2";
  if (cols === 3) return "md:grid-cols-3";
  if (cols === 4) return "md:grid-cols-4";
  return "md:grid-cols-2";
};

const CoreComponent: React.FC<CoreValuesProps> = ({
  values,
  columns = 2,
  heading,
  description,
}) => {



  return (
    <section className=" mx-auto px-5 py-10">
      {/* Heading */}
      {heading && (
        <AnimatedText>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 text-center">
            {heading}
          </h2>
        </AnimatedText>
      )}

      {/* Description */}
      {description && (
        <AnimatedText>
          <p className="text-center max-w-3xl mx-auto text-gray-600 mb-10 text-base md:text-lg">
            {description}
          </p>
        </AnimatedText>
      )}

      {/* Grid */}
      <section
        className={`grid ${gridCols(columns)} gap-0 bg-white border border-gray-200 rounded-sm overflow-hidden`}
        aria-label={heading ? heading : "Core values"}
      >
        {values.map(({ title, text, icon }, idx) => (
          <article
            key={idx}
            className="flex flex-col items-center justify-center text-center border-gray-200 px-7 py-12 min-h-[220px] 
              bg-white transition duration-200 focus-within:outline-none hover:bg-orange-50
              focus-within:ring-2 focus-within:ring-orange-200"
            style={{
              borderLeft: idx % columns !== 0 ? "1px solid #e5e7eb" : "none",
              borderTop: idx >= columns ? "1px solid #e5e7eb" : "none",
            }}
            tabIndex={0}
          >
            {icon && (
              <div className="mb-5 text-orange-500 text-4xl">
                {icon}
              </div>
            )}
            <AnimatedText>
              <h3 className="text-[1.15rem] md:text-xl font-bold uppercase tracking-wide text-gray-800 mb-2">
                {title}
              </h3>
            </AnimatedText>
            <div className="w-8 border-t-2 border-dashed border-orange-400 mb-4"></div>
            <AnimatedText>
              <p className="text-base text-gray-600 leading-normal max-w-xs mx-auto">
                {text}
              </p>
            </AnimatedText>
          </article>
        ))}
      </section>
    </section>
  );
};

export default CoreComponent;
