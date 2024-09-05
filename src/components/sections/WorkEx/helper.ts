import { IExperience } from "./types";

const experiences: Array<IExperience> = [
  {
    position: "Sr. Software Engineer II",
    company: "Zolo",
    place: "India",
    startDate: "April 2024",
    endDate: "Present",
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    position: "Sr. Software Engineer I",
    company: "Zolo",
    place: "India",
    startDate: "April 2023",
    endDate: "March 2024",
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    position: "Software Development Engineer II",
    company: "Zolo",
    place: "India",
    startDate: "July 2022",
    endDate: "March 2023",
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    position: "Associate, Technology Consulting",
    company: "PwC India",
    place: "India",
    startDate: "September 2020",
    endDate: "June 2022",
    description:
      "Built and launched Aceternity UI and Aceternity UI Pro from scratch",
    techStack: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  }
];

const getExperiencesByCompany = (company: string) => {
  return experiences.filter((experience) => experience.company === company);
};

export { getExperiencesByCompany };
