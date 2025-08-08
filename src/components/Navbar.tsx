"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import Image from "next/image";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className={cn("fixed top-6 inset-x-0 mx-auto z-50 max-w-full md:max-w-2xl", className)}>
      <Menu setActive={setActive}>
        <div className="flex flex-col md:flex-row items-center md:gap-28 sm:gap-3 gap-2">
          <div className="flex items-start justify-start p-1">
            <Image
              src="/assessts/piyush-logo.png"
              height={70}
              width={70}
              className="h-30 cursor-pointer rounded-full"
              alt="Piyush Logo"
            />
          </div>
          <div className="flex gap-7 text-lg z-[1] md:text-xl">
            <MenuItem setActive={setActive} active={active} item="About">
              <div className="flex flex-col space-y-4 md:p-0 pl-10 md:pl-28 pt-10 text-sm md:text-base">
                <HoveredLink href="/">Piyush Bhatt</HoveredLink>
                <HoveredLink href="/">IIIT KOTA 2027</HoveredLink>
                <HoveredLink href="/">Panipat, Haryana</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Projects">
              <div className="md:text-sm grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 text-xs  p-4 pl-10  md:pl-28 pt-9 pb-2">
                <ProductItem
                  title="Password Generator"
                  href="https://password-generator-inky-two.vercel.app/"
                  src="/assessts/pass-generator.png"
                  description="Create a strong password for your data."
                />
                <div className="text-lg md:text-xl mx-auto pt-1">
                  <HoveredLink href="https://github.com/thepiyush-303/"> More Projects...</HoveredLink>
                </div>
              </div>
            </MenuItem>
          </div>
          <div className="mt-3 md:mt-0">
            <Link href="mailto:bhattpiyush303@gmail.com?subject=Hlo Piyush&body=Wanna%20talk%20?%20Type%20Here.%20Thankyou." target="_blank" passHref>
              <Button
                borderRadius="1.75rem"
                className="bg-white z-[0] font-bold text-black border-neutral-200 dark:border-slate-800 text-sm md:text-lg"
              >
                Say, Hello 👋🏽!
              </Button>
            </Link>
          </div>    
        </div>  
      </Menu>
    </div>
  );
}

export default Navbar;
