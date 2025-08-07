"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import mateSC from "@/fonts/MateScFont";
import toast from 'react-hot-toast';

export function Contact() {
  // Define state variables for each form field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Display success toast
    toast.success("Haai! Piyush This Side 🙌");

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');

    console.log("Form submitted");
  };

  return (
    <div className="ml-5">
      <div className="flex flex-col justify-center gap-2 items-center">
        <h2 className="font-bold text-6xl text-neutral-800 dark:text-neutral-200">
          <p className={mateSC.className}>
            Say Hello 👋🏽
          </p>
        </h2>
        <p className="text-neutral-600 text-md max-w-full px-3 mt-2 dark:text-neutral-300">
          Got a question or interested in collaborating? Complete the form below, and I&apos;ll respond as quickly as I can.
        </p>
      </div>

      <div className="max-w-xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <form className="my-8" onSubmit={handleSubmit}>
          <div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Piyush Bhatt"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-required="true"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  placeholder="bhattpiyush303@gmail.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-required="true"
                />
              </LabelInputContainer>
            </div>
            <div>
              <LabelInputContainer>
                <Label htmlFor="message">Message</Label>
                <Input
                  id="message"
                  placeholder="Enter Your message"
                  type="text"
                  className="pt-4 pb-40"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-required="true"
                />
              </LabelInputContainer>
            </div>
          </div>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);
