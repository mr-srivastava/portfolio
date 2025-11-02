'use client';
import { IconCross, IconMenu } from '@tabler/icons-react';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/#about' },
    { title: 'Projects', href: '/#projects' },
    { title: 'Experience', href: '/#experience' },
    { title: 'Skills', href: '/#skills' },
    // { title: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ?
          'bg-black/60 backdrop-blur-md border-b border-white/5'
        : 'bg-black'
      }`}
    >
      <div className='container mx-auto px-4 md:px-6'>
        <div className='flex items-center justify-between h-16 md:h-20'>
          <Link href='/' className='flex items-center group'>
            <span className='text-2xl font-bold  font-heading relative overflow-hidden'>
              <span className='inline-block transition-transform duration-500 group-hover:-translate-y-full'>
                Aadarsh
              </span>
              <span className='absolute left-0 top-0 inline-block -translate-y-full text-blue-500 transition-transform duration-500 group-hover:translate-y-0'>
                Aadarsh
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className='text-muted-foreground hover:text-foreground font-medium transition-colors link-hover py-1'
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* Contact Button - Desktop */}
          <Button
            className='hidden md:inline-flex bg-transparent border border-white/10 hover:bg-primary/10 hover:border-primary/50 text-white transition-all duration-300'
            variant='outline'
          >
            Get in Touch
          </Button>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {isMenuOpen ?
              <IconCross size={24} />
            : <IconMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='md:hidden glass-card animate-fade-in'>
          <div className='container mx-auto px-4 pt-2 pb-4 space-y-2'>
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className='block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-md transition-colors'
                onClick={toggleMenu}
              >
                {link.title}
              </a>
            ))}
            <div className='pt-3'>
              <Button
                className='w-full bg-transparent border border-white/10 hover:bg-primary/10 hover:border-primary/50'
                variant='outline'
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
