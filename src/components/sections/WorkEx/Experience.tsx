import React from "react";
import { IExperience } from "./types";
import PositionExperience from "./Position";
import { IconBrandAdobe } from "@tabler/icons-react";

interface IExperienceProps {
  positions: IExperience[];
}
const Experience: React.FC<IExperienceProps> = (props) => {
  return (
    <div className=" rounded-lg shadow-sm shadow-slate-300 p-6 max-w-[600px] mx-auto">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-blue-400">TechCorp Inc.</h2>
          <p className="text-sm text-gray-300">Jan 2018 - Present</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
          <IconBrandAdobe />
        </div>
      </div>
      <div className="">
        {props?.positions?.map((experience) => (
          <PositionExperience
            experience={experience}
            key={`${experience.company}-${experience.position}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
