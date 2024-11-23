import { IExperience } from "@/components/sections/WorkEx/types";

enum Companies {
  Zolo = "Zolo",
  PwCIndia = "PwC India"
}

enum Skills {
  React = "React",
  Next = "Next",
  Javascript = "Javascript",
  Typescript = "Typescript",
  Redux = "Redux",
  Node = "Node"
}

const experiences: Array<IExperience> = [
  {
    position: "Sr. Software Engineer II",
    company: Companies.Zolo,
    place: "India",
    startDate: 1711909800,
    endDate: null,
    description: [
      "Led the Co-living Business Frontend Team, overseeing 5 developers to develop key features and enhancements for co-living and student housing platforms.",
      "Spearheaded technology upgrades and performance optimizations to ensure seamless user experience and platform efficiency.",
      "Achieved 50% total traffic growth and 17.5% organic traffic increase through demand optimization efforts."
    ],
    techStack: [
      Skills.React,
      Skills.Next,
      Skills.Javascript,
      Skills.Typescript,
      Skills.Redux,
      Skills.Node
    ]
  },
  {
    position: "Sr. Software Engineer I",
    company: Companies.Zolo,
    place: "India",
    startDate: 1680287400,
    endDate: 1711823400,
    description: [],
    techStack: [
      Skills.React,
      Skills.Next,
      Skills.Javascript,
      Skills.Typescript,
      Skills.Redux,
      Skills.Node
    ]
  },
  {
    position: "Software Development Engineer II",
    company: Companies.Zolo,
    place: "India",
    startDate: 1656873000,
    endDate: 1680201000,
    description: [],
    techStack: [
      Skills.React,
      Skills.Next,
      Skills.Javascript,
      Skills.Typescript,
      Skills.Redux,
      Skills.Node
    ]
  },
  {
    position: "Associate, Technology Consulting",
    company: Companies.PwCIndia,
    place: "India",
    startDate: 1600021800,
    endDate: 1656441000,
    description: [
      "Worked as a Full-stack developer on a critical PwC-wide platform that guides consultants through client engagement processes",
      "Developed features to surface PwC standards and integrate with various internal systems",
      "Collaborated with global teams to implement new features and enhance platform capabilities"
    ],
    techStack: [
      Skills.React,
      Skills.Next,
      Skills.Javascript,
      Skills.Typescript,
      Skills.Redux,
      Skills.Node
    ]
  }
];

const getCompanyTimePeriod = (company: keyof typeof Companies) => {
  const companyStartDate = Math.min(
    ...getExperiencesByCompany(company).map((exp) => exp.startDate)
  );
  const isStillAtCompany = getExperiencesByCompany(company).some(
    (exp) => exp.endDate === null
  );
  const companyEndDate = isStillAtCompany
    ? null
    : Math.max(
        ...getExperiencesByCompany(company).map(
          (exp) => exp.endDate || Date.now()
        )
      );

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
      ...getCompanyTimePeriod(company)
    };
    return companyHistory;
  });
  return experienceTimelineData;
};

const getExperiencesByCompany = (company: keyof typeof Companies) => {
  return experiences.filter(
    (experience) => experience.company === Companies[company]
  );
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
  getCompanyTimePeriod,
  getSkillsByCompany,
  getAchievementsByCompany
};
