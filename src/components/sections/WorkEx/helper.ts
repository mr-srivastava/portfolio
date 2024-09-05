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
    startDate: "April 2024",
    endDate: "Present",
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    position: "Sr. Software Engineer I",
    company: Companies.Zolo,
    place: "India",
    startDate: "April 2023",
    endDate: "March 2024",
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    position: "Software Development Engineer II",
    company: Companies.Zolo,
    place: "India",
    startDate: "July 2022",
    endDate: "March 2023",
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    position: "Associate, Technology Consulting",
    company: Companies.PwCIndia,
    place: "India",
    startDate: "September 2020",
    endDate: "June 2022",
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  }
];

const getExperienceTimelineData = () => {
  const experienceTimelineData = (
    Object.keys(Companies) as Array<keyof typeof Companies>
  ).map((company) => {
    const companyHistory = {
      company,
      positions: getExperiencesByCompany(company)
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

export { getExperiencesByCompany, getExperienceTimelineData };
