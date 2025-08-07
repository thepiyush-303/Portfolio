import { HoverEffect } from "./ui/card-hover-effect";
import mateSC from "@/fonts/MateScFont";
import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";

export function TechStack() {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 pt-32 pb-8">
      <div className="pt-10 text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent dark:bg-white bg-black text-center font-extrabold">
        <h1 className={mateSC.className}>
          TechStack
        </h1>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "NextJs",
    link: "https://github.com/thepiyush-303/",
    icon: <RiNextjsLine className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:text-white text-black" />,
  },
  {
    title: "React",
    link: "https://github.com/thepiyush-303/",
    icon: <FaReact className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:text-white text-black" />,
  },
  {
    title: "Nodejs",
    link: "https://github.com/",
    icon: <FaNodeJs className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:text-white text-black" />,
  },
  {
    title: "MongoDb",
    link: "https://github.com/",
    icon: <DiMongodb className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:text-white text-black" />,
  },
  {
    title: "JavaScript",
    link: "https://github.com/",
    icon: <IoLogoJavascript className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:text-white text-black" />,
  },
  {
    title: "Tailwind Css",
    link: "https://github.com/",
    icon: <RiTailwindCssFill className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:text-white text-black" />,
  },
  {
    title: "TypeScript",
    link: "https://github.com/",
    icon: <SiTypescript className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:text-white text-black" />,
  },
  {
    title: "Git",
    link: "https://github.com/thepiyush-303",
    icon: <FaGitAlt className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:text-white text-black" />,
  },
  {
    title: "Html",
    link: "https://github.com/thepiyush-303/",
    icon: <FaHtml5 className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 dark:text-white text-black" />,
  },
];
