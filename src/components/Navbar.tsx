"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='flex flex-row justify-between items-center antialiased border px-4 py-2 rounded-2xl border-zinc-700/60 bg-zinc-800'>
      <Link
        className='font-bold text-sm flex items-center justify-center text-white space-x-2'
        href='/'
      >
        <div className='relative w-8 h-8 overflow-hidden rounded-full'>
          <Image
            src='/profile.jpg'
            alt='Avatar'
            width={30}
            height={30}
            className='object-cover w-full h-full'
            priority
          />
        </div>
        <span className='font-bold'>Aadarsh</span>
      </Link>

      <button
        className='md:hidden text-white z-50'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          {isMenuOpen ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          )}
        </svg>
      </button>

      <div className='hidden md:flex md:flex-row md:space-x-8'>
        <Link href='/' className='text-white'>
          Home
        </Link>
        <Link href='/about' className='text-white'>
          About
        </Link>
        <Link href='/experience' className='text-white'>
          Experience
        </Link>
        <Link href='/projects' className='text-white'>
          Projects
        </Link>
      </div>

      {isMenuOpen && (
        <div className='fixed inset-0 bg-zinc-800 z-40 md:hidden'>
          <div className='flex flex-col items-center justify-center h-full space-y-8 text-lg'>
            <Link
              href='/'
              className='text-white hover:text-zinc-300 transition-colors'
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href='/about'
              className='text-white hover:text-zinc-300 transition-colors'
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href='/experience'
              className='text-white hover:text-zinc-300 transition-colors'
              onClick={() => setIsMenuOpen(false)}
            >
              Experience
            </Link>
            <Link
              href='/projects'
              className='text-white hover:text-zinc-300 transition-colors'
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
