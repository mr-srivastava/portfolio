import Image from "next/image";

interface CompanyLogoProps {
  src: string;
  alt: string;
}

export function CompanyLogo({ src, alt }: CompanyLogoProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width='200'
      height='200'
      className='object-contain absolute bottom-10 right-10 w-32 md:w-48'
    />
  );
}
