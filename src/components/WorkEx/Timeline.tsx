import React from "react";
import { Card } from "../ui/card";

interface ITimelineItem {
  company: string;
  position: string;
  city: string;
  startDate?: string;
  endData?: string | null;
  description: string;
  icon?: {
    logo: string;
    url: string;
  };
}

const timelineData: Array<ITimelineItem> = [
  {
    company: "Zolostays",
    position: "Senior Software Engineer II",
    city: "Bangalore, India",
    startDate: "Apr 2024",
    endData: null,
    description: "Working on Cognizant's AI Platform."
  },
  {
    company: "Zolostays",
    position: "Senior Software Engineer I",
    city: "Bangalore, India",
    startDate: "Apr 2023",
    endData: "Mar 2024",
    description: "Working on Cognizant's AI Platform."
  },
  {
    company: "Zolostays",
    position: "Software Development Engineer II",
    city: "Bangalore, India",
    startDate: "Jul 2022",
    endData: "Mar 2023",
    description: "Working on Cognizant's AI Platform."
  },
  {
    company: "PwC India",
    position: "Associate, Technology Consulting",
    city: "Kolkata, India (Remote)",
    startDate: "Sep 2020",
    endData: "Jun 2022",
    description: "Working on Cognizant's AI Platform."
  }
];

export default function Timeline() {
  return (
    <div className='relative flex flex-col gap-8 before:content-[""] before:absolute before:left-[-30px] before:top-0 before:h-full before:w-[5px] before:rounded-full before:bg-gradient-to-b before:from-sky-500 before:to-indigo-500'>
      {timelineData.map((item, index) => (
        <TimelineItem key={index} item={item} />
      ))}
    </div>
  );
}

function TimelineItem({ item }: { item: ITimelineItem }) {
  return (
    <Card className='relative p-8 before:content-[""] before:absolute before:left-4 before:top-0 before:h-[16px] before:w-[16px] before:rounded-full before:bg-blue-500 before:left-[-36px] before:top-1/2'>
      <div className='text-lg font-semibold'>{item.position}</div>
      <div className='text-neutral-400 text-sm mb-5'>
        <span>{item.company}</span>
        <span>&nbsp;&bull;&nbsp;</span>
        <span>{item.city}</span>
      </div>
      <div className='absolute left-[-180px] top-1/2 text-neutral-400 text-sm text-right'>
        {item.startDate} - {item.endData || "Present"}
      </div>
      {/* <div>{item.description}</div> */}
    </Card>
  );
}
