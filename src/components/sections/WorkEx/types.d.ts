export interface ITimelineProps {
  data: Array<TimelineEntry>;
}

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export interface IExperience {
  position: string;
  company: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: Array<string>;
}
