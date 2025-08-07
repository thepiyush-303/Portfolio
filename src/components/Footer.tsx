"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import mateSC from "@/fonts/MateScFont";

export function Footer() {
  return (
    <div className="sm:h-[20rem] h-[10rem] w-full bg-black flex flex-col mx-auto items-center justify-end overflow-hidden rounded-md relative">
      <div className="w-full max-w-screen-lg h-full relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div className="md:text-5xl text-3xl pb-2 lg:text-6xl font-bold text-center text-white relative z-20">
        <h1 className={mateSC.className}>
          Designed by Piyush Bhatt
        </h1>
      </div>
    </div>
  );
}
