import React from "react";
import { IExperience } from "./types";
import PositionExperience from "./Position";
import { IconBrandAdobe, IconCircleCheckFilled } from "@tabler/icons-react";
import { convertUnixTimestamp, getDuration } from "@/utils";

const SKILLS = ["React", "Next", "Javascript", "Typescript", "Redux", "Node"];
const ACHIEVELEMENTS = [
  "Reduced API response time by 60%",
  "Implemented CI/CD pipeline, cutting deployment time by 75%",
];

interface IExperienceProps {
  positions: IExperience[];
  startDate: number;
  endDate: number | null;
  company: string;
}
const Experience: React.FC<IExperienceProps> = (props) => {
  return (
    <div className=" rounded-lg shadow-sm shadow-slate-300 p-6 max-w-[600px] mx-auto">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-blue-400">{props.company}</h2>

          <p className="text-sm text-gray-300">
            <span>
              {convertUnixTimestamp(props.startDate)} -{" "}
              {props.endDate ? convertUnixTimestamp(props.endDate) : "Present"}
            </span>
            &nbsp;&nbsp;&#x2022;&nbsp;&nbsp;
            <span>{getDuration(props.startDate, props.endDate)}</span>
          </p>
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
      <div className="mt-6">
        <h4 className="text-base font-semibold text-gray-300 mb-2">
          Skills & Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h4 className="text-base font-semibold text-gray-300 mb-2">
          Key Achievements
        </h4>
        <ul className="list-none pl-0">
          {ACHIEVELEMENTS.map((achievement) => (
            <li className="flex items-center gap-2 mb-2" key={achievement}>
              <IconCircleCheckFilled />
              <span className="text-gray-400">
                {achievement}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
