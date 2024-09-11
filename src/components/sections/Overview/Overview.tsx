import { cn } from "@/lib/utils";
import { IconDownload } from "@tabler/icons-react";
import React from "react";

export default function Overview(props: IOverviewProps) {
  return (
    <div className="p-10 lg:p-20 lg:py-40 min-h-screen flex flex-col lg:flex-row items-center justify-around gap-x-30">
      <div>
        <h3
          className="font-extrabold font-oswald tracking-[-10px] text-[250px] lg:text-[350px] relative text-accent leading-[1] text-[#0F172A]"
          style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
        >
          {props.yoe}
        </h3>
        <span
          className="pl-[28px] w-full text-center lg:pl-[48px] underline decoration-accent/20 decoration-wavy text-[20px] -mt-2 inline-block font-[500] text-white"
          style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
        >
          years of experience
        </span>
      </div>
      <div>
        <div
          className="font-display whitespace-nowrap text-center drop-shadow-sm text-white w-fit tracking-[-2px] text-6xl font-bold mb-4 mt-20 lg:mt-0 lg:mb-10"
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
        <p className="text-white/95 font-light lg:font-medium leading-[26px] max-w-[500px]">
          {props.description}
        </p>
        {/* <GetResumeButton /> */}
      </div>
    </div>
  );
}

const GetResumeButton: React.FC<{}> = () => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden  max-w-[200px] mt-5",
        "bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn"
      )}
    >
      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
        Get Resume
      </span>
      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 z-20">
        <IconDownload />
      </div>
    </button>
  );
};
