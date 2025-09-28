import {
  IconBrandDocker,
  IconBrandGit,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { SkillGridItem } from "./SkillGridItem";
import { client } from "@/sanity/lib/client";
import { skillsQuery } from "@/sanity/lib/queries";
import { JSX } from "react";

const iconMap: Record<string, JSX.Element> = {
  react: <IconBrandReact />,
  nextjs: <IconBrandNextjs />,
  javascript: <IconBrandJavascript />,
  typescript: <IconBrandTypescript />,
  redux: <IconBrandRedux />,
  node: <IconBrandNodejs />,
  git: <IconBrandGit />,
  docker: <IconBrandDocker />,
};

export default async function SkillGrid(props: ISkillGrid) {
  const features = await client.fetch(skillsQuery);
  return (
    <div
      id="skills"
      className="py-20 lg:py-40 lg:h-screen flex flex-col items-center justify-center"
    >
      <div
        className="font-display text-center drop-shadow-sm text-blue-500 w-fit tracking-[-2px] text-6xl font-bold mb-10 mt-16"
        style={{ filter: "blur(0px)", opacity: 1, transform: "none" }}
      >
        <div
          className="lg:mb-1 pb-8 md:pb-0"
          style={{
            paddingRight: "8px",
            display: "inline-block",
          }}
        >
          Tech Knowledge
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature: ISkill, index: number) => (
          <SkillGridItem
            key={feature.title}
            {...feature}
            icon={iconMap[feature.iconKey]}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
