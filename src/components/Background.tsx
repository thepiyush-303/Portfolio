"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import mateSC from "@/fonts/MateScFont";
import { FlipWords } from "./ui/flip-words"; 
import { Button } from "./ui/moving-border";
import Link from "next/link";
import Image from "next/image";
import { BackgroundGradient } from "./ui/background-gradient";

const words = ["Web-Developer ", "Frontend-Developer", "UI-UX-Designer", "Coder","Competetive-Programmer"];

export function Background() {
  return (
    <div className=" lg:h-[60rem] h-[80rem] lg:pt-[5rem] w-full rounded-md bg-neutral-950 relative flex flex-col lg:flex-row items-center justify-around antialiased">
      <div className="max-w-2xl lg:pt-[295px] pt-[270px] pb-[100px] px-4 lg:px-0 text-center">
        <p className="relative z-10 text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Hi! I&apos;m
        </p>
        <h1 className="relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-[#e6dbc9] font-sans font-bold">
          Piyush Bhatt
        </h1>
        <br />
        <br />
        <p className="relative z-10 text-3xl md:text-4xl bg-clip-text text-transparent bg-white font-sans font-bold">
          I am a 
          <span className={mateSC.className}>
            <FlipWords words={words} />
          </span>
        </p>
        <br />
        <p className="text-[#DFDCE3] max-w-lg mx-auto my-2 md:text-[16px] text-[13px] relative z-10">
          I am a passionate Software Developer. I specialize in web development and enjoy building responsive, user-friendly websites and applications. My journey in software development is driven by a love for problem-solving and continuous learning. When I&apos;m not coding, I enjoy exploring new technologies and improving my skills. Have a look at my portfolio website.
        </p>
        <br />
        <br />
        <div>
          <Link href="https://res.cloudinary.com/dmpj1kynh/image/upload/v1754601532/Resume_Piyush_Bhatt_u8ti5o.pdf" passHref>
            <Button
              borderRadius="1.75rem"
              className="bg-black z-[1] cursor-pointer font-bold text-white dark:border-neutral-200 border-slate-800 text-[16px]"
            >
              Resume 📜
            </Button>
          </Link>
        </div>
      </div>
      <div className="pb-[70px]">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-3 bg-zinc-900">
          <Image
            src="/assessts/me1.jpeg"
            height="700"
            width="500"
            className="object-contain rounded-[22px]"
            alt="Bhatt ji"
          />
        </BackgroundGradient>
      </div>
      <BackgroundBeams />
    </div>
  );
}
