import React from "react";
import { IExperience } from "./types";
import PositionExperience from "./Position";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import {
  Companies,
  convertUnixTimestamp,
  getAchievementsByCompany,
  getDuration,
  getSkillsByCompany,
} from "@/utils";
import Image from "next/image";

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
  id: keyof typeof Companies;
}
const Experience: React.FC<IExperienceProps> = (props) => {
  return (
    <div className=" rounded-lg shadow-sm shadow-slate-300 bg-[#0F172A] p-6 max-w-[600px] mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-grey-200">{props.company}</h2>

          <p className="text-sm text-gray-300">
            <span>
              {convertUnixTimestamp(props.startDate)} -{" "}
              {props.endDate ? convertUnixTimestamp(props.endDate) : "Present"}
            </span>
            &nbsp;&nbsp;&#x2022;&nbsp;&nbsp;
            <span>{getDuration(props.startDate, props.endDate)}</span>
          </p>
        </div>
        <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
          <Image src={`${props.id}.svg`} alt="pwc" width={50} height={50} />
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
          {getSkillsByCompany(props.id).map((skill) => (
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
          {getAchievementsByCompany(props.id).map((achievement) => (
            <li className="flex items-center gap-2 mb-2" key={achievement}>
              <IconCircleCheckFilled />
              <span className="text-gray-400">{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
