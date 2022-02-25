import React from 'react';
import Image from 'next/image';
import WipImg from '../../assets/wip.svg';
import { motion } from 'framer-motion';

const WIP = () => {
  return (
    <motion.div
      className="align-center flex w-1/2 flex-col justify-center space-y-4"
      initial={{ x: 0, y: 60, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut', delay: 0.7 }}
    >
      <Image src={WipImg} alt="work in progress" />
      <p className="text-3xl font-bold">Work in Progess</p>
    </motion.div>
  );
};

export default WIP;
