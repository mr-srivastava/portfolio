"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CompanyLogo } from "@/components/sections/Experience/CompanyLogo";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
  logo?: string;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  vertical = false
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  vertical?: boolean;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);
  const [hovering, setHovering] = useState(false);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  return (
    <div
      className={cn(
        "flex",
        vertical ? "flex-row" : "flex-col",
        "w-full h-full"
      )}
    >
      <div
        className={cn(
          "flex items-center relative overflow-auto sm:overflow-visible no-visible-scrollbar",
          vertical ? "flex-col w-fit h-full" : "flex-row w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-6 py-3 rounded-lg whitespace-nowrap transition-colors duration-200",
              "flex items-center gap-3 group",
              vertical ? "w-full text-left" : "",
              "hover:text-gray-900 dark:hover:text-white",
              active.value !== tab.value && "text-gray-600 dark:text-gray-400",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d"
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId='clickedbutton'
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-lg",
                  activeTabClassName
                )}
              />
            )}

            {tab.logo && (
              <div className={cn(
                'relative w-10 h-10 rounded-full transition-colors duration-200 shadow-md flex items-center justify-center',
                active.value === tab.value ? 'bg-white' : 'bg-white/75 group-hover:bg-white'
              )}>
                <CompanyLogo
                  src={tab.logo}
                  alt={`${tab.title} logo`}
                  className='w-6 h-6'
                />
              </div>
            )}
            <span className='relative block'>{tab.title}</span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn(vertical ? "ml-32" : "mt-32", contentClassName)}
      />
    </div>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className='relative w-full h-full'>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0
          }}
          className={cn("w-full absolute top-0 left-0", className)}
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
