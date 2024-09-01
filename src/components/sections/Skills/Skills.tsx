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
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconBrandReact />
    },
    {
      title: "Next",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconBrandNextjs />
    },
    {
      title: "Javascript",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconBrandJavascript />
    },
    {
      title: "Typescript",
      description: "We just cannot be taken down by anyone.",
      icon: <IconBrandTypescript />
    },
    {
      title: "Redux",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconBrandRedux />
    },
    {
      title: "Node",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconBrandNodejs />
    },

    {
      title: "Git",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconBrandGit />
    },
    {
      title: "Docker",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
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
