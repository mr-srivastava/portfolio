import {
  getSkillsByCompany,
  getAchievementsByCompany
} from "@/utils/experience.utils";
import { formatDate } from "@/utils/date.utils";
import { TechStack } from "./TechStack";
import { Achievements } from "./Achievements";

interface ExperienceCardProps {
  company: {
    id: string;
    company: string;
    positions: Array<{ position: string }>;
    companyStartDate: number;
    companyEndDate: number | null;
  };
  bgColor: string;
}

export function ExperienceCard({ company, bgColor }: ExperienceCardProps) {
  const skills = getSkillsByCompany(company.id as any);
  const overview = getAchievementsByCompany(company.id as any);

  return (
    <div
      className={`w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br ${bgColor}`}
    >
      <p>{company.company}</p>
      <div className='mt-4 text-base md:text-xl font-normal'>
        <p>{company.positions[0].position}</p>
        <p>
          {formatDate(company.companyStartDate)} -{" "}
          {company.companyEndDate
            ? formatDate(company.companyEndDate)
            : "Present"}
        </p>

        <div className='mt-6 text-sm md:text-base'>
          <Achievements achievements={overview} />
          <TechStack skills={skills} />
        </div>
      </div>
    </div>
  );
}
