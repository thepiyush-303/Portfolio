"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import mateSC from "@/fonts/MateScFont";
import Link from "next/link";

// cricket, designing, music, poetry
const content = [
  {
    title: "Open Source",
    description:
      "I have a keen interest in open source technologies and actively contribute to various projects.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Link href="https://github.com/thepiyush-303" passHref res>
          <Image
            src="/assessts/github-profile.png"
            width={300}
            height={400}
            className="h-full w-full object-cover"
            alt="open source"
          />
        </Link>
      </div>
    ),
  },
  {
    title: "Designing",
    description:
      "I have a keen interest in designing, and I enjoy exploring various aspects of it. From Canva designing to user experience, I am passionate about creating visually appealing designs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Link
          href="/"
          passHref
          onClick={(e) => e.preventDefault()}
        >
          <Image
            src="/assessts/designer.png"
            width={300}
            height={400}
            className="h-full w-full object-cover"
            alt="design"
          />
        </Link>
      </div>
    ),
  },
  {
    title: "Music",
    description:
      "I have a keen interest in listening to music, finding it a great source of relaxation and inspiration. Whether it's exploring new genres or enjoying my favorite tracks, music is an integral part of my life.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Link
          href="/"
          passHref
          onClick={(e) => e.preventDefault()}
        >
          <Image
            src="/assessts/music.jpeg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="music"
          />
        </Link>
      </div>
    ),
  },
  {
    title: "Cricket",
    description:
      "I have a keen interest in playing cricket, and MS Dhoni, the legend, is my inspiration. His leadership and skill always help me to improve my life.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Link href="https://www.instagram.com/mahi7781" passHref>
          <Image
            src="/assessts/msd.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="msd"
          />
        </Link>
      </div>
    ),
  },
];

export function Interests() {
  return (
    <div>
      <div className="pt-24 text-5xl md:text-6xl bg-clip-text text-transparent dark:bg-white bg-black text-center font-extrabold">
        <h1 className={mateSC.className}>Interests</h1>
      </div>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
