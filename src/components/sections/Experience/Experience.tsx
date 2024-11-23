import { Tabs } from "@/components/ui/tabs";
import { Companies, getExperienceTimelineData } from "@/utils/experience.utils";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceSection() {
  const experienceData = getExperienceTimelineData();

  const tabs = experienceData.map((company) => ({
    title: company.company,
    value: company.id.toLowerCase(),
    logo: `/${company.id}.svg`,
    content: (
      <ExperienceCard
        company={company}
        bgColor={
          company.company === Companies.PwCIndia
            ? "from-blue-700 to-blue-900"
            : "from-purple-700 to-violet-900"
        }
      />
    )
  }));

  return (
    <div className='[perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-40'>
      <div className='w-full'>
        <div className='md:hidden'>
          <Tabs tabs={tabs} vertical={false} />
        </div>
        <div className='hidden md:block'>
          <Tabs tabs={tabs} vertical={true} />
        </div>
      </div>
    </div>
  );
}
