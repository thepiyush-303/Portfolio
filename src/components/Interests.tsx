"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
import mateSC from "@/fonts/MateScFont";
import Link from "next/link";

// cricket, designing, music, poetry
const content = [
  {
    title: "Designing",
    description:
      "I have a keen interest in designing, and I enjoy exploring various aspects of it. From Canva designing to user experience, I am passionate about creating visually appealing designs.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Link href="https://drive.google.com/drive/folders/14UoPJwiJoi9uGNB5pSdD41R5iWV3oVWW" passHref>
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
        <Link href="https://open.spotify.com/playlist/0IhzydvhkIVghb0hFONTG7?si=KOV_Ec0cSfOZFx495vlgrA" passHref>
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
  {
    title: "Poetry",
    description:
      "I have a keen interest in writing and hearing poetry (shayari). The beauty of words and emotions in shayari deeply resonates with me and inspires my own creative expression.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Link href="https://www.instagram.com/yahyabootwala" passHref>
          <Image
            src="/assessts/poetry.png"
            width={300}
            height={400}
            className="h-full w-full object-cover"
            alt="poetry"
          />
        </Link>
      </div>
    ),
  },
  {
    title: "",
    description: "",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src=""
          width={300}
          height={300}
          className=""
          alt=""
        />
      </div>
    ),
  },
];

export function Interests() {
  return (
    <div>
      <div className="pt-24 text-5xl md:text-6xl bg-clip-text text-transparent dark:bg-white bg-black text-center font-extrabold">
        <h1 className={mateSC.className}>
          Interests
        </h1>
      </div>
      <div className="p-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
