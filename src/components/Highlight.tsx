import { cn } from "@/lib/utils";
import React from "react";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={cn("bg-secondary-900 text-primary-100 px-1 py-0.5", className)}>
      {children}
    </span>
  );
};
