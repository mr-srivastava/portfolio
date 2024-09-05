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
  startDate: number;
  endDate: number|null;
  description: string;
  techStack: Array<string>;
}
