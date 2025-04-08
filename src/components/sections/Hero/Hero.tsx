import React from 'react';
import HeroContent from './Content';

export default function HeroSection(props: any) {
  return (
    <div className='h-screen relative w-full overflow-hidden  flex flex-col items-center justify-center rounded-lg mt-16 md:mt-20'>
      <div className='absolute inset-0 w-full h-full z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
      {/* <Boxes /> */}
      <HeroContent {...props.heroContent} />
    </div>
  );
}
