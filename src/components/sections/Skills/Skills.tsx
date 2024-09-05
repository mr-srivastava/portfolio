import { cn } from "@/lib/utils";
import {
  IconBrandDocker,
  IconBrandGit,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTypescript
} from "@tabler/icons-react";
import { SkillGridItem } from "./SkillGridItem";

export default function SkillGrid(props: ISkillGrid) {
  const features: Array<ISkill> = [
    {
      title: "React",
      description:
        "The building block for dynamic user interfaces. It's like LEGOs for web developers.",
      icon: <IconBrandReact />
    },
    {
      title: "Next",
      description:
        "React's BFF (Best Friend Forever). It helps you build full-stack apps with ease.",
      icon: <IconBrandNextjs />
    },
    {
      title: "Javascript",
      description: "The web's unpredictable but powerful sidekick.",
      icon: <IconBrandJavascript />
    },
    {
      title: "Typescript",
      description:
        "JavaScript's superpowered cousin. It adds types for safer and more predictable code.",
      icon: <IconBrandTypescript />
    },
    {
      title: "Redux",
      description:
        "The central nervous system of your app. It manages your state with a single source of truth.",
      icon: <IconBrandRedux />
    },
    {
      title: "Node",
      description:
        "JavaScript's server-side superpower. It runs your code on the server.",
      icon: <IconBrandNodejs />
    },

    {
      title: "Git",
      description:
        "The time machine for your code. It lets you travel back and forth to different versions.",
      icon: <IconBrandGit />
    },
    {
      title: "Docker",
      description:
        "The shipping container for your apps. It packages them up for easy deployment.",
      icon: <IconBrandDocker />
    }
  ];
  return (
    <div className='py-20 lg:py-40 lg:h-screen flex flex-col items-center justify-center'>
      <div
        className='font-display text-center drop-shadow-sm text-white w-fit tracking-[-2px] text-6xl font-bold mb-10'
        style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
      >
        <div
          className='lg:mb-1 pb-8 md:pb-0'
          style={{
            paddingRight: "8px",
            display: "inline-block"
          }}
        >
          Tech Knowledge
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto'>
        {features.map((feature, index) => (
          <SkillGridItem key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}
