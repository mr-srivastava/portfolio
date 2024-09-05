import React from "react";
import { IExperience } from "./types";
import { BackgroundGradient } from "@/components/ui/background-gradient";
interface IExperienceProps {
  experience: IExperience;
}
const PositionExperience: React.FC<IExperienceProps> = (props) => {
  const { experience } = props;
  return (
    <div className="px-1 max-w-xl py-5 lg:p-10">
      <div className="border-l-2 border-blue-500 pl-4">
        <h3 className="text-lg font-semibold text-gray-300">
          {experience.position}
        </h3>
        <p className="text-sm text-gray-400 font-light">
          {experience.startDate} - {experience.endDate}
        </p>
        <p className="text-base font-light text-gray-300 leading-relaxed mt-2">
          {experience.description}
        </p>
      </div>

      {/* <h3 className="text-md lg:text-xl whitespace-pre-wrap">
        {experience.position}
      </h3>
      <p className="text-sm font-light text-neutral-300 mb-5">
        {experience.startDate} - {experience.endDate}
      </p>
      <div className="text-md font-light">{experience.description}</div>
      <div className="text-md font-light">
        {experience.techStack.join(", ")}
      </div> */}
    </div>
  );
};

export default PositionExperience;
