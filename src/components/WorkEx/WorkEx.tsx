import React from "react";
import Timeline from "./Timeline";

export default function WorkExperienceSection() {
  return (
    <div className='p-20 min-h-screen flex flex-col items-center'>
      <h2
        className='font-display text-center drop-shadow-sm text-white w-fit tracking-[-2px] text-6xl font-bold mb-20'
        style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
      >
        Work Experience
      </h2>
      <div>
        <Timeline />
      </div>
    </div>
  );
}
