import React from "react";
import { IExperience } from "./types";
interface IExperienceProps {
  experience: IExperience;
}
const Experience: React.FC<IExperienceProps> = (props) => {
  const { experience } = props;
  return (
    <div className='px-1 py-5 lg:p-10'>
      <h3 className="text-xl">{experience.position}</h3>
      <p className="text-sm text-neutral-300">
        {experience.startDate} - {experience.endDate}
      </p>
      <div>{experience.description}</div>
      <div>{experience.techStack.join(", ")}</div>
    </div>
  );
};

export default Experience;
