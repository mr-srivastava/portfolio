import React from 'react';
import { IExperience } from './types';
import { convertUnixTimestamp, getDuration } from '@/utils';
interface IExperienceProps {
  experience: IExperience;
}
const PositionExperience: React.FC<IExperienceProps> = (props) => {
  const { experience } = props;
  return (
    <div className='lg:px-1 max-w-xl py-2 lg:p-6'>
      <div className='border-l-2 border-blue-500 pl-2 lg:pl-4'>
        <h3 className='text-base lg:text-lg font-medium lg:font-semibold text-gray-300'>
          {experience.position}
        </h3>
        <p className='text-[12px] lg:text-sm text-gray-300 font-light'>
          <span>
            {convertUnixTimestamp(experience.startDate)} -{' '}
            {experience.endDate ?
              convertUnixTimestamp(experience.endDate)
            : 'Present'}
          </span>
          &nbsp;&nbsp;&#x2022;&nbsp;&nbsp;
          <span>{getDuration(experience.startDate, experience.endDate)}</span>
        </p>
        {/* <p className='text-base font-light text-gray-300 leading-relaxed mt-2'>
          {experience.description}
        </p> */}
      </div>
    </div>
  );
};

export default PositionExperience;
