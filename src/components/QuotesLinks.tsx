"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
import { LinkPreview } from "@/components/ui/link-preview";

export function QuotesLinks() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-8">
      <div className="flex items-center justify-center w-full md:w-1/2 h-auto md:h-[28rem] mb-8 md:mb-0">
        <CardStack items={CARDS} />
      </div>

      <div className="flex flex-col justify-center items-center w-full md:w-1/2 h-auto md:h-[28rem] px-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto mb-10 text-center">
          Discover my work on{" "}
          <LinkPreview
            url="https://github.com/thepiyush-303"
            className="font-bold"
            aria-label="Visit my GitHub profile"
          >
            Github
          </LinkPreview>{" "}
          , follow my updates on{" "}
          <LinkPreview
            url="https://www.instagram.com/thepiyush303/"
            className="font-bold"
            aria-label="Visit my Instagram profile"
          >
            Instagram
          </LinkPreview>{" "}
          , connect professionally on{" "}
          <LinkPreview
            url="https://www.linkedin.com/in/piyush-bhatt-713866288/"
            className="font-bold"
            aria-label="Visit my LinkedIn profile"
          >
            Linkedin
          </LinkPreview>.
        </p>
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Lord Rama",
    designation: "The Ideal Man",
    content: (
      <Highlight>
        Don&apos;t Give up in any situation.
      </Highlight>
    ),
  },
  {
    id: 1,
    name: "Lord Krishna",
    designation: "Lord of the Universe",
    content: (
      <p>
        <Highlight>Everything Happened for Reasons.</Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Lord Hanuman",
    designation: "Great Warrior",
    content: (
      <p>
        <Highlight>Be Humble when you achieve anything or everything.</Highlight>
      </p>
    ),
  },
  {
    id: 3,
    name: "Lord Shiva",
    designation: "The Roarer",
    content: (
      <p>
        <Highlight>Self control is the key to live life to the fullest.</Highlight>
      </p>
    ),
  },
  {
    id: 4,
    name: "Lord Vishnu",
    designation: "The Infinite",
    content: (
      <p>
        <Highlight>Never stop doing good things for others.</Highlight>
      </p>
    ),
  },
];
