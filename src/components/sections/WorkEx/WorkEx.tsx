import React from 'react';
import WorkTimeline from './WorkTimeline';

export default function WorkEx() {
  return (
    <div
      id='experience'
      className='w-full p-10 lg:p-24 flex flex-col items-center justify-center'
    >
      <div
        className='font-display text-center drop-shadow-sm text-blue-500 w-fit tracking-[-2px] text-6xl font-bold mb-10'
        style={{ filter: 'blur(0px)', opacity: 1, transform: 'none' }}
      >
        <div
          className='lg:mb-1 pb-8 md:pb-0'
          style={{
            paddingRight: '8px',
            display: 'inline-block',
          }}
        >
          Work Experience
        </div>
      </div>
      <WorkTimeline />
    </div>
  );
}
