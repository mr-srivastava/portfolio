import React from 'react';
import Link from '../Link';
import headerNavLinks from '@Data/headerNavLinks';
import { AnimatePresence, motion, useCycle } from 'framer-motion';

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Header = () => {
  const [open, cycleOpen] = useCycle(false, true);

  function toggleMenuClick() {
    cycleOpen();
  }
  return (
    <nav className="mb-10 w-full max-w-6xl">
      <div className="header-wrapper flex items-center justify-between">
        <a className="cursor-pointer px-2 py-3" href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </a>
        <div className=" hidden space-x-1 md:flex">
          {headerNavLinks.map((l) => (
            <Link
              key={l.href}
              className="cursor-pointer px-4 py-3 hover:font-medium hover:text-blue-600"
              href={l.href}
            >
              {l.title}
            </Link>
          ))}
        </div>

        <button
          className="cursor-pointer px-2 py-3 md:hidden"
          onClick={toggleMenuClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 hover:text-blue-600 ${open ? 'hidden' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 hover:text-blue-600 ${open ? '' : 'hidden'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="flex flex-col items-end">
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <motion.div
                className="container"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {headerNavLinks.map((l) => (
                  <motion.div
                    className="mr-3 flex flex-col items-end"
                    key={l.href}
                    whileHover={{ scale: 1.05 }}
                    variants={itemVariants}
                  >
                    <Link
                      key={l.href}
                      className="cursor-pointer px-4 py-3 hover:text-blue-600"
                      href={l.href}
                    >
                      {l.title}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Header;
