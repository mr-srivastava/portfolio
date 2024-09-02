import React from "react";
import { IExperience } from "./types";
import { BackgroundGradient } from "@/components/ui/background-gradient";
interface IExperienceProps {
  experience: IExperience;
}
const Experience: React.FC<IExperienceProps> = (props) => {
  const { experience } = props;
  return (
    <div className="px-1 max-w-xl py-5 lg:p-10">
      <BackgroundGradient className="rounded-[22px]  p-4 sm:p-7 bg-white dark:bg-zinc-900">
        <h3 className="text-md lg:text-xl whitespace-pre-wrap">{experience.position}</h3>
        <p className="text-sm text-neutral-300 mb-5">
          {experience.startDate} - {experience.endDate}
        </p>
        <div>{experience.description}</div>
        <div>{experience.techStack.join(", ")}</div>
      </BackgroundGradient>
    </div>
  );
};

export default Experience;
