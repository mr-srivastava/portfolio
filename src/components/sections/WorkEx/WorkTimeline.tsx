import { Timeline } from "@/components/ui/timeline";
import React from "react";
import { TimelineEntry } from "./types";
import { getExperiencesByCompany } from "./helper";
import Experience from "./Experience";

const data: Array<TimelineEntry> = [
  {
    title: "Zolo",
    content: (
      <ul>
        {getExperiencesByCompany("Zolo").map((experience) => (
          <li key={`${experience.company}-${experience.position}`}>
            <Experience experience={experience} />
          </li>
        ))}
      </ul>
    )
  },
  {
    title: "PwC India",
    content: (
      <ul>
        {getExperiencesByCompany("PwC India").map((experience) => (
          <li key={`${experience.company}-${experience.position}`}>
            <Experience experience={experience} />
          </li>
        ))}
      </ul>
    )
  }
];

export default function WorkTimeline() {
  return (
    <div className='w-full'>
      <Timeline data={data} />
    </div>
  );
}
