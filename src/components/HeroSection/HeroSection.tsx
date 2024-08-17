"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <HeroSectionContent />
    </div>
  );
}

function HeroSectionContent() {
  return (
    <div className="hero-content w-[80%] flex items-center justify-between ">
      <section>
        <p className=" text-xl mb-6 dark:text-neutral-200 relative z-20 ">
          Hello there,my name is
        </p>
        <h1
          className={cn(
            "text-2xl md:text-7xl font-bold dark:text-white relative z-20 "
          )}
        >
          Aadarsh Srivastava
        </h1>
        <p className=" text-xl mt-8 dark:text-neutral-200 relative z-20">
          I do all things web!
        </p>
      </section>
      <Image
        src="/profile.jpg"
        alt="profile"
        width={400}
        height={400}
        className=" rounded-3xl relative z-20 drop-shadow"
      />
    </div>
  );
}
