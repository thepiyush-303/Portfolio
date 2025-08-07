"use client";

import React from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import mateSC from "@/fonts/MateScFont";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Next Js",
    designation: "",
    image:
      "/assessts/next-js.png",
  },
  {
    id: 2,
    name: "Node Js",
    designation: "",
    image:
      "/assessts/node-js.png",
  },
  {
    id: 3,
    name: "React",
    designation: "",
    image:
      "/assessts/React.png",
  },
  {
    id: 4,
    name: "React-Redux",
    designation: "",
    image:
      "/assessts/react-redux.png",
  },
  {
    id: 5,
    name: "React-Routes",
    designation: "",
    image:
      "/assessts/react-routes.png",
  },
  {
    id: 6,
    name: "Toastify",
    designation: "",
    image:
      "/assessts/react-toastify.png",
  },
  {
      id: 7,
      name: "Tailwind Css",
      designation: "",
      image:
        "/assessts/tailwind-css.png",
    },
    {
      id: 8,
      name: "React-Context-API",
      designation: "",
      image:
        "/assessts/context-api.jpeg",
    },
    {
      id: 9,
      name: "Weather-API",
      designation: "",
      image:
        "/assessts/weather-api.png",
    },
    {
      id: 10,
      name: "JavaScript",
      designation: "",
      image:
        "/assessts/javascript.png",
    },

    {
      id: 11,
      name: "Html",
      designation: "",
      image:
        "/assessts/html..png",
    },
];

export function Projects() {
  const ID1 = [1, 2, 3, 4, 5, 6, 7];
  const ID2 = [2, 3, 5, 7, 8];
  const ID3 = [2, 3, 4, 6, 7];
  const ID4 = [9, 10, 7, 11];

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <div className="pt-24 text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent dark:bg-white bg-black text-center font-extrabold">
        <h1 className={mateSC.className}>Projects</h1>
      </div>

      <div className="grid gap-6 md:gap-8 lg:gap-10 xl:grid-cols-2 max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto">
        {[
          {
            title: "Shopping WebPage 🛍️",
            description: "A E-shopping website contains connected Product and cart Page for customers in which they can add or remove products for purchasing.",
            imageSrc: "/assessts/shopping-webpage.png",
            githubLink: "https://github.com/thepiyush-303/",
            liveLink: "https://shopping-website-self.vercel.app/",
            displayIds: ID1,
          },
          {
            title: "Blog Website 📰",
            description: "A Blog website contains different pages for Blogs, categories and tags created by ContextAPI For state management.",
            imageSrc: "/assessts/blog-website.png",
            githubLink: "https://github.com/thepiyush-303/blog-site",
            liveLink: "https://piyush-dailyblog.vercel.app/",
            displayIds: ID2,
          },
          {
            title: "E-learning Platform 🧑🏽‍💻",
            description: "A online platform for learning through different Courses.",
            imageSrc: "/assessts/e-learning-platform.png",
            githubLink: "https://github.com/thepiyush-303",
            liveLink: "https://e-learning-web-page.vercel.app/",
            displayIds: ID3,
          },
          {
            title: "Weather Detector ☁️",
            description: "It include Avg-time weather updates, with accurate forecasts, and a user-friendly interface.",
            imageSrc: "/assessts/weather-webpage.png",
            githubLink: "https://github.com/thepiyush-303/Weather-detector/tree/main",
            liveLink: "https://weather-detector-seven.vercel.app/",
            displayIds: ID4,
          },
        ].map(({ title, description, imageSrc, githubLink, liveLink, displayIds }, index) => (
          <CardContainer key={index} className="flex flex-col gap-6">
            <CardBody className="bg-gray-50 dark:bg-black dark:border-white/[0.2] border border-black w-full h-auto rounded-xl p-6">
              <CardItem
                translateZ="50"
                className="text-xl md:text-2xl font-sans font-bold text-neutral-900 dark:text-white"
              >
                {title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mt-2"
              >
                {description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-7">
                <Image
                  src={imageSrc}
                  height="1000"
                  width="1000"
                  className="h-48 md:h-60 border border-black w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <Link href={githubLink} passHref>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Github
                  </CardItem>
                </Link>
                <Link href={liveLink} passHref>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Live
                  </CardItem>
                </Link>
              </div>
            </CardBody>
            <div className="flex justify-center items-center mt-6">
              <AnimatedTooltip items={people} displayIds={displayIds} />
            </div>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
