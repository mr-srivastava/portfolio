import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconMail,
} from '@tabler/icons-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer
      className={`py-12 px-4 mt-auto relative text-white transition-opacity duration-1000 ease-in-out`}
    >
      <div className='container mx-auto'>
        <div className='flex flex-col items-center space-y-6'>
          <nav className='flex flex-wrap justify-center gap-4'>
            <Link
              href='https://github.com/mr-srivastava'
              className='text-white/70 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110'
              aria-label='GitHub'
            >
              <IconBrandGithub className='h-6 w-6' />
              <span className='sr-only'>GitHub</span>
            </Link>
            <Link
              href='https://www.linkedin.com/in/aadarsh-srivastava-3470b0128/'
              className='text-white/70 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110'
              aria-label='LinkedIn'
            >
              <IconBrandLinkedin className='h-6 w-6' />
              <span className='sr-only'>LinkedIn</span>
            </Link>
            <Link
              href='https://x.com/skeptic_addy'
              className='text-white/70 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110'
              aria-label='Twitter'
            >
              <IconBrandTwitter className='h-6 w-6' />
              <span className='sr-only'>Twitter</span>
            </Link>
            <Link
              href='mailto:aadarsh.srivastava16@gmail.com'
              className='text-white/70 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-110'
              aria-label='Email'
            >
              <IconMail className='h-6 w-6' />
              <span className='sr-only'>Email</span>
            </Link>
          </nav>
          <div className='text-center'>
            <p className='text-sm text-white/70'>
              © {new Date().getFullYear()} Aadarsh Srivastava. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center overflow-hidden'>
        <span className='text-[13vw] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent inline-block animate-slide-up'>
          Stay curious!
        </span>
      </div>
    </footer>
  );
}
