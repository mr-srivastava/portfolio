import Mail from './mail.svg';
import Github from './github.svg';
import Facebook from './facebook.svg';
import Youtube from './youtube.svg';
import Linkedin from './linkedin.svg';
import Twitter from './twitter.svg';
import Instagram from './instagram.svg';
import { motion } from 'framer-motion';
import Image from "next/image";

interface SocialIconProps {
  kind: string;
  href: string;
  size: number;
  initial?: object;
  animate?: object;
  transition?: object;
}

const kindToSvgMap: any = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
};

const SocialIcon = ({
  kind,
  href,
  size = 8,
  initial,
  animate,
  transition,
}: SocialIconProps) => {
  if (!href) return null;

  const SocialSvg = kindToSvgMap[kind];

  return (
    <motion.div animate={animate} initial={initial} transition={transition}>
      <a
        className="text-sm text-gray-500 transition hover:text-gray-600"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
      >
        <span className="sr-only">{kind}</span>
        <Image
          alt={kind}
          src={SocialSvg}
          className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </a>
    </motion.div>
  );
};

export default SocialIcon;
