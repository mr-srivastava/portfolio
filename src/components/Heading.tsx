import React from "react";
import { twMerge } from "tailwind-merge";

export const Heading = ({
  className,
  children,
  as: Tag = "h1",
}: {
  className?: string;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
}) => {
  return (
    <Tag
      className={twMerge(
        "font-heading text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-primary-950 bg-gradient-to-r from-primary-950 to-secondary-950",
        className
      )}
    >
      {children}
    </Tag>
  );
};
