import { useAnimation, motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import Typist from 'react-typist';
import CoderImg from './coder.svg';

const AuthorCardVariants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: 0.7,
    },
  },
  hidden: { y: 60, opacity: 0 },
};

const AuthorCard = () => {
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      className="item-center grid w-full rounded-xl px-10 py-10 shadow-xl sm:grid-cols-2 "
      variants={AuthorCardVariants}
    >
      <div className="w-1/2 sm:w-full">
        <Image src={CoderImg} width={400} height={400} />
      </div>
      <div className="text-4xl md:text-5xl ">
        <Typist startDelay={1000} avgTypingDelay={100}>
          Hi, I'm <span className="text-blue-600">Aadarsh.</span>
        </Typist>
      </div>
    </motion.div>
  );
};

export default AuthorCard;
