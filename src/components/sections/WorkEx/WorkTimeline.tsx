import { Timeline } from "@/components/ui/timeline";
import React from "react";
import { getExperienceTimelineData } from "./helper";
import Experience from "./Experience";

const EXPERIENCE_TIMELINE_DATA = getExperienceTimelineData().map(
  (companyHistory) => {
    return {
      title: companyHistory.company,
      content: <Experience positions={companyHistory.positions} />
    };
  }
);

export default function WorkTimeline() {
  return (
    <div className='w-full'>
      <Timeline data={EXPERIENCE_TIMELINE_DATA} />
    </div>
  );
}
