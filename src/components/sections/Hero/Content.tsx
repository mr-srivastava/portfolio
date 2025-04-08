import { cn } from '@/lib/utils';
import { IHeroContentProps } from './types';
import Image from 'next/image';
import { IconArrowDown } from '@tabler/icons-react';
import Link from 'next/link';

export default function HeroContent(props: IHeroContentProps) {
  return (
    <>
      <div
        className={cn(
          'hero-content w-[80%] flex flex-col-reverse lg:flex-row items-center justify-evenly gap-20',
          props.className,
        )}
      >
        <section>
          <p className='text-[14px] lg:text-xl mb-3 lg:mb-6 dark:text-blue-500 relative z-20'>
            {props.preface || 'Hello there, my name is'}
          </p>
          <h1 className='text-[28px] lg:text-6xl font-bold dark:text-white relative z-20'>
            {props.content}
          </h1>
          <p className='text-[16px] lg:text-2xl text-right lg:mt-8 dark:text-neutral-200 relative z-20'>
            {props.followup || 'I do all things web!'}
          </p>
        </section>
        <div className='relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] z-20'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-primary/20 rounded-full blur-2xl opacity-20 animate-pulse-glow' />
          <div className='relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full border border-white/10 p-4 backdrop-blur-sm bg-white/5 shadow-lg'>
            <Image
              src={props.src}
              alt='profile'
              fill
              sizes='(max-width: 768px) 300px, 400px'
              className='w-full h-full object-cover rounded-full drop-shadow grayscale hover:grayscale-0 transition-all duration-1000'
              priority
            />
          </div>
        </div>
      </div>
      <div className='mt-16 flex justify-center z-20'>
        <Link
          href='#about'
          className='flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group'
        >
          <span className='mb-2 text-sm font-mono tracking-wider'>Explore</span>
          <IconArrowDown className='animate-bounce transition-transform duration-300 group-hover:translate-y-1' />
        </Link>
      </div>
    </>
  );
}
