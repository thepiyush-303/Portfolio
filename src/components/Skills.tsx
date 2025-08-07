"use client";
import React from "react";
import { GlowingStarsBackgroundCard, GlowingStarsTitle } from "./ui/glowing-stars";
import mateSC from "@/fonts/MateScFont";

export function Skills() {
  return (
    <div className="bg-black pb-20">
      <div className="pt-14 text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-white text-center font-extrabold">
        <h1 className={mateSC.className}>
          Skills
        </h1>
      </div>
      <div className="flex py-10 justify-center items-center antialiased">
        <GlowingStarsBackgroundCard>
          <GlowingStarsTitle className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {[
              "Data Structures",
              "Web Development",
              "Software Engineering",
              "UI/UX Designing",
              "DB Management",
              "Artificial Intelligence"
            ].map((skill, index) => (
              <div key={index} className="flex items-center justify-center hover:scale-105 hover:bg-[#F0EB8D] hover:text-[#8F43EE] transition-transform duration-200 p-2 bg-[#8F43EE] rounded-lg">
                {skill}
              </div>
            ))}
          </GlowingStarsTitle>
        </GlowingStarsBackgroundCard>
      </div>
    </div>
  );
}
