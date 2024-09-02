import React from "react";

export default function Overview(props: IOverviewProps) {
  return (
    <div className='p-10 lg:p-20 lg:py-40 min-h-screen flex flex-col lg:flex-row items-center justify-around gap-x-30'>
      <div>
        <h3
          className='font-extrabold text-[250px] lg:text-[350px] relative text-accent leading-[1] text-[#0E2954]'
          style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
        >
          {props.yoe}
        </h3>
        <span
          className='tracking-[0.15em] pl-[48px] underline decoration-accent/20 decoration-wavy text-[20px] -mt-2 inline-block font-[500] text-white'
          style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
        >
          years of experience
        </span>
      </div>
      <div>
        <div
          className='font-display text-center drop-shadow-sm text-white w-fit tracking-[-2px] text-6xl font-bold mb-10'
          style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
        >
          <div
            className='lg:mb-1 pb-8 md:pb-0'
            style={{
              paddingRight: "8px",
              display: "inline-block"
            }}
          >
            About Me
          </div>
        </div>
        <p className='text-white/95 font-medium leading-[26px] max-w-[500px]'>
          {props.description}
        </p>
      </div>
    </div>
  );
}
