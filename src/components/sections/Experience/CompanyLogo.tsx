import Image from "next/image";

interface CompanyLogoProps {
  src: string;
  alt: string;
  className?: string;
}

export function CompanyLogo({ src, alt, className = '' }: CompanyLogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width='200'
      height='200'
      className={`object-contain ${className}`}
    />
  );
}
