import { Timeline } from "@/components/ui/timeline";
import React from "react";
import { TimelineEntry } from "./types";
import { getExperiencesByCompany } from "./helper";
import Experience from "./Experience";

const data: Array<TimelineEntry> = [
  {
    title: "Zolo",
    content: <Experience positions={getExperiencesByCompany("Zolo")} />,
  },
  {
    title: "PwC India",
    content: <Experience positions={getExperiencesByCompany("PwC India")} />,
  },
];

export default function WorkTimeline() {
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
