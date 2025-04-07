import { Timeline } from "@/components/ui/timeline";
import React from "react";
import Experience from "./Experience";
import { getCompanyTimePeriod } from "@/utils";
import { client } from "@/sanity/lib/client";
import { experiencesQuery } from "@/sanity/lib/queries";

const getExperienceTimelineData = async (debug=false): Promise<
  Array<{
    id: string;
    company: string;
    positions: any;
    companyStartDate: number;
    companyEndDate: number | null;
  }>
> => {
  const experiences = await client.fetch(experiencesQuery);
  debug && console.log("Experiences", experiences);

  //find unique companies from experiences
  const companies = experiences.map(
    (experience: { company: any }) => experience.company
  );
  const uniqueCompanies: string[] = Array.from(new Set(companies));
  debug && console.log("Unique Companies", uniqueCompanies);

  const experienceTimelineData = uniqueCompanies.map((company: string) => {
    const positions = experiences.filter(
      (experience: { company: string }) => experience.company === company
    );
    const companyHistory = {
      id: company as string,
      company: company as string,
      positions,
      ...getCompanyTimePeriod(company, positions),
    };
    return companyHistory;
  });
  debug && console.log("Experience Timeline Data", experienceTimelineData);
  return experienceTimelineData;
};

export default async function WorkTimeline() {
  const timelineData = await getExperienceTimelineData();
  const TimelineChild = timelineData.map((companyHistory) => {
    return {
      title: companyHistory.company,
      content: (
        <Experience
          id={companyHistory.id}
          positions={companyHistory.positions}
          startDate={companyHistory.companyStartDate}
          endDate={companyHistory.companyEndDate}
          company={companyHistory.company}
        />
      ),
    };
  });
  return (
    <div className="w-full">
      <Timeline data={TimelineChild} />
    </div>
  );
}
