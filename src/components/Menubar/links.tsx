import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt
} from "@tabler/icons-react";

export const links = [
  {
    label: "Home",
    href: "#",
    icon: (
      <IconBrandTabler className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
    )
  },
  {
    label: "Resume",
    href: "#",
    icon: (
      <IconUserBolt className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
    )
  },
  {
    label: "Projects",
    href: "#",
    icon: (
      <IconSettings className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
    )
  },
  {
    label: "About",
    href: "#",
    icon: (
      <IconArrowLeft className='text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0' />
    )
  }
];
