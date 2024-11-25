import Image from "next/image";

export default function WorkExperience() {
  return (
    <div className='max-w-5xl mx-auto px-8'>
      <h1 className='text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto mt-20 md:mt-40'>
        Work Experience
      </h1>
      <p className='text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide'>
        I switch a lot of companies. It&apos;s mostly about the culture.
      </p>

      <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-20 max-w-2xl mx-auto'>
        <div className='flex flex-row md:flex-col relative overflow-x-auto md:overflow-x-visible'>
          <div className='absolute -left-6 w-px h-full bg-zinc-800 overflow-hidden'>
            <span
              className='absolute z-20 h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] before:bg-gradient-to-l before:from-transparent before:via-blue-500 before:to-cyan-500 style_meteor__iBwXl -left-0'
              style={
                {
                  visibility: "visible",
                  "--meteor-delay": "2s",
                  "--meteor-duration": "2s",
                  "--meteor-width": "127px"
                } as React.CSSProperties
              }
            />
          </div>

          {/* Company Buttons */}
          <div className='relative my-2'>
            <button className='px-4 py-2 text-zinc-400 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group bg-zinc-800'>
              <div className='p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800'>
                <Image
                  src='/Zolo.svg'
                  alt='Zolo'
                  width={12}
                  height={12}
                  className='flex-shrink-0 transition duration-200'
                />
              </div>
              <span>Zolo</span>
            </button>
          </div>

          <div className='relative my-2'>
            <button className='px-4 py-2 text-zinc-400 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group'>
              <div className='p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800'>
                <Image
                  src='/PwcIndia.svg'
                  alt='PWC India'
                  width={12}
                  height={12}
                  className='flex-shrink-0 transition duration-200'
                />
              </div>
              <span>PwC India</span>
            </button>
          </div>
        </div>

        {/* Experience Details */}
        <div className='md:pl-10 flex-1'>
          <div className='flex flex-col space-y-4'>
            <div className='flex flex-col space-y-2' style={{ opacity: 1 }}>
              <h1 className='text-2xl font-bold text-zinc-100'>
                Senior Software Engineer{" "}
                <span className='text-cyan-500'>@ Apple</span>
              </h1>
              <div className='text-zinc-400 text-sm tracking-widest'>
                Jan 2021 - Jun 2021
              </div>
              <p className='text-zinc-400 text-sm'>Cupertino, CA</p>
              <div>
                {/* Achievement Items */}
                <div className='flex flex-row space-x-2 items-start my-2'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 16 16'
                    className='text-cyan-500 mt-[3px] flex-shrink-0'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
                  </svg>
                  <span className='text-zinc-400 text-sm'>
                    Worked on the Apple Music team
                  </span>
                </div>

                <div className='flex flex-row space-x-2 items-start my-2'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 16 16'
                    className='text-cyan-500 mt-[3px] flex-shrink-0'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
                  </svg>
                  <span className='text-zinc-400 text-sm'>
                    Increased the revenue of the company from $80 billion to $1
                    Trillion
                  </span>
                </div>

                <div className='flex flex-row space-x-2 items-start my-2'>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 16 16'
                    className='text-cyan-500 mt-[3px] flex-shrink-0'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z' />
                  </svg>
                  <span className='text-zinc-400 text-sm'>
                    Built a new feature that allowed users to listen to music
                    while they were sleeping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
