import { IExperience } from "@/components/sections/WorkEx/types";

enum Companies {
  Zolo = "Zolo",
  PwCIndia = "PwC India",
}

enum Skills {
  React = "React",
  Next = "Next",
  Javascript = "Javascript",
  Typescript = "Typescript",
  Redux = "Redux",
  Node = "Node",
}

const experiences: Array<IExperience> = [
  {
    position: "Sr. Software Engineer II",
    company: Companies.Zolo,
    place: "India",
    startDate: 1711909800,
    endDate: null,
    description: [
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    ],
    techStack: [
      Skills.React,
      Skills.Next,
      Skills.Javascript,
      Skills.Typescript,
      Skills.Redux,
      Skills.Node,
    ],
  },
  {
    position: "Sr. Software Engineer I",
    company: Companies.Zolo,
    place: "India",
    startDate: 1680287400,
    endDate: 1711823400,
    description: [
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    ],
    techStack: [
      Skills.React,
      Skills.Next,
      Skills.Javascript,
      Skills.Typescript,
      Skills.Redux,
      Skills.Node,
    ],
  },
  {
    position: "Software Development Engineer II",
    company: Companies.Zolo,
    place: "India",
    startDate: 1656873000,
    endDate: 1680201000,
    description: [
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    ],
    techStack: [
      Skills.React,
      Skills.Next,
      Skills.Javascript,
      Skills.Typescript,
      Skills.Redux,
      Skills.Node,
    ],
  },
  {
    position: "Associate, Technology Consulting",
    company: Companies.PwCIndia,
    place: "India",
    startDate: 1600021800,
    endDate: 1656441000,
    description: [
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    ],
    techStack: [
      Skills.React,
      Skills.Next,
      Skills.Javascript,
      Skills.Typescript,
      Skills.Redux,
      Skills.Node,
    ],
  },
];

const getCompanyTimePeriod = (
  company: string,
  companyExperiences?: IExperience[]
) => {
  if (!companyExperiences) {
    companyExperiences = getExperiencesByCompany(company);
  }
  const startDateMap = companyExperiences.map((exp) => exp.startDate);

  const companyStartDate = Math.min(...startDateMap);

  const isStillAtCompany = companyExperiences.some(
    (exp) => exp.endDate === null
  );

  const companyEndDate = isStillAtCompany
    ? null
    : Math.max(...companyExperiences.map((exp) => exp.endDate || Date.now()));

  return { companyStartDate, companyEndDate };
};

const getExperienceTimelineData = () => {
  const experienceTimelineData = (
    Object.keys(Companies) as Array<keyof typeof Companies>
  ).map((company) => {
    const companyHistory = {
      id: company,
      company: Companies[company],
      positions: getExperiencesByCompany(company),
      ...getCompanyTimePeriod(company),
    };
    return companyHistory;
  });
  return experienceTimelineData;
};

const getExperiencesByCompany = (company: string) => {
  return experiences.filter((experience) => experience.company === company);
};

const getSkillsByCompany = (company: keyof typeof Companies) => {
  const experiences = getExperiencesByCompany(company);
  const skills = experiences.reduce((acc, exp) => {
    return [...acc, ...exp.techStack];
  }, [] as string[]);
  return Array.from(new Set(skills));
};

const getAchievementsByCompany = (company: keyof typeof Companies) => {
  const experiences = getExperiencesByCompany(company);
  const achievements = experiences.reduce((acc, exp) => {
    return [...acc, ...exp.description];
  }, [] as string[]);
  return Array.from(new Set(achievements));
};

export {
  Companies,
  getExperienceTimelineData,
  getExperiencesByCompany,
  getCompanyTimePeriod,
  getSkillsByCompany,
  getAchievementsByCompany,
};
