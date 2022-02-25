import Mail from '../../assets/mail.svg';
import Github from '../../assets/github.svg';
import Facebook from '../../assets/facebook.svg';
import Youtube from '../../assets/youtube.svg';
import Linkedin from '../../assets/linkedin.svg';
import Twitter from '../../assets/twitter.svg';
import Instagram from '../../assets/instagram.svg';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
          src={SocialSvg}
          alt="Social SVG"
          className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
        />
      </a>
    </motion.div>
  );
};

export default SocialIcon;
