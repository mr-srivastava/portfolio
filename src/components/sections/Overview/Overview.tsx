import { EnhancedResumeDownload } from "@/components/enhanced-resume-download";
import React from "react";

export default function Overview({ yoe, description }: IOverView) {
  return (
    <div className="p-10 lg:py-40 min-h-screen flex flex-col lg:flex-row items-center gap-x-32">
      <div className="years-of-experience mb-20 lg:mb-0">
        <h3
          className="font-extrabold font-oswald tracking-[-10px] text-[250px] lg:text-[350px] relative text-accent leading-[1] text-[#0F172A]"
          style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
        >
          {yoe}
        </h3>
        <span
          className="pl-[28px] w-full text-center lg:pl-[48px] underline decoration-accent/20 decoration-wavy text-[20px] -mt-2 inline-block font-[500] text-white"
          style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
        >
          years of experience
        </span>
      </div>
      <div className="about-me">
        <div
          className="font-display whitespace-nowrap text-center drop-shadow-sm text-white w-fit tracking-[-2px] text-6xl font-bold mb-4 lg:mb-10"
          style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
        >
          <div
            className="lg:mb-1 lg:pb-8 md:pb-0"
            style={{
              paddingRight: "8px",
              display: "inline-block",
            }}
          >
            About Me
          </div>
        </div>
        <p className="text-white/95 font-light lg:font-medium leading-[26px] max-w-[500px] mb-10">
          {description}
        </p>
        <EnhancedResumeDownload
          fileName="Aadarsh Srivastava.pdf"
          label="Download Resume"
        />
      </div>
    </div>
  );
}
