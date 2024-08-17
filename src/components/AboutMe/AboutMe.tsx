import React from "react";

export default function AboutMe() {
  return (
    <div className='p-20 lg:py-40 min-h-screen flex items-center justify-around gap-x-30'>
      <div>
        <h3
          className='year font-oswald tracking-[-20px] font-extrabold text-[395px] relative mr-[30px] mt-[-95px] text-accent leading-[1]'
          style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
        >
          04
        </h3>
        <span
          className='tracking-[0.15em] pl-[48px] underline decoration-accent/20 decoration-wavy text-[20px] -mt-2 inline-block font-[500] text-white'
          style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
        >
          years of experience
        </span>
      </div>
      <div>
        <div
          className='font-display text-center drop-shadow-sm text-white w-fit tracking-[-2px] text-6xl font-bold mb-10'
          style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
        >
          <div
            className='lg:mb-1 pb-8 md:pb-0'
            style={{
              filter: "blur(0px)",
              opacity: 1,
              transform: "none",
              paddingRight: "8px",
              display: "inline-block"
            }}
          >
            About
          </div>
          <div
            className='lg:mb-1 pb-8 md:pb-0'
            style={{
              filter: "blur(0px)",
              opacity: 1,
              transform: "none",
              paddingRight: "8px",
              display: "inline-block"
            }}
          >
            Me
          </div>
        </div>
        <p className='text-white/95 font-medium leading-[26px] max-w-[500px]'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
          saepe, dolor recusandae rerum laborum incidunt perferendis dolorum
          dolorem id libero possimus nesciunt inventore nihil veritatis dolores
          fugit reprehenderit iste nulla! Doloribus suscipit quidem non aperiam
          atque cum vitae fuga quasi sunt ullam, libero sit, ducimus laudantium
          ab similique error modi qui quam magni nesciunt obcaecati maiores
          quae. Hic modi deleniti rem totam beatae.
        </p>
      </div>
    </div>
  );
}
