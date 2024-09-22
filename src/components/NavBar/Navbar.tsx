import React from "react";
import {
  IconBrandGithub,
  IconHome,
  IconUser,
  IconBriefcase,
  IconDeviceDesktopAnalytics,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floating-dock";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
      onClick: () => scrollToSection("home"),
    },
    {
      title: "Overview",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#overview",
      onClick: () => scrollToSection("overview"),
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
      onClick: () => scrollToSection("experience"),
    },
    {
      title: "Skills",
      icon: (
        <IconDeviceDesktopAnalytics className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
      onClick: () => scrollToSection("skills"),
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/mr-srivastava", // Updated with the correct GitHub URL
    },
    {
      title: "Twitter",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/aadarsh-srivastava-3470b0128/", // Updated with the correct Twitter URL
    },
  ];

  return (
    <div className={cn("h-full flex items-center justify-center", className)}>
      <FloatingDock
        items={links}
        orientation="vertical"
        desktopClassName="mr-4"
        mobileClassName="fixed bottom-4 right-4"
        colors={{
          bgColor: "bg-slate-800/50",
          hoverColor: "hover:bg-slate-700/50",
          textColor: "text-white",
        }}
      />
    </div>
  );
}
