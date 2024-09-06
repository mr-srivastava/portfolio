import { IExperience } from "./types";

enum Companies {
  Zolo = "Zolo",
  PwCIndia = "PwC India"
}

const experiences: Array<IExperience> = [
  {
    position: "Sr. Software Engineer II",
    company: Companies.Zolo,
    place: "India",
    startDate: 1711909800,
    endDate: null,
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    position: "Sr. Software Engineer I",
    company: Companies.Zolo,
    place: "India",
    startDate: 1680287400,
    endDate: 1711823400,
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    position: "Software Development Engineer II",
    company: Companies.Zolo,
    place: "India",
    startDate: 1656873000,
    endDate: 1680201000,
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    position: "Associate, Technology Consulting",
    company: Companies.PwCIndia,
    place: "India",
    startDate: 1600021800,
    endDate: 1656441000,
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
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

export {
  getExperiencesByCompany,
  getExperienceTimelineData,
  getCompanyTimePeriod
};
