import Link from 'next/link';
import SocialIcon from '@Components/SocialIcon';
import React from 'react';
import siteMetadata from '@Data/siteMetadata';

const Footer = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-between">
        <SocialIcon
          kind="mail"
          href={`mailto:${siteMetadata.email}`}
          size={6}
        />
        <SocialIcon kind="github" href={siteMetadata.github} size={6} />
        <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
        <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
      </div>
      <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>{siteMetadata.author}</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/" legacyBehavior>{siteMetadata.title}</Link>
      </div>
    </div>
  );
};

export default Footer;
