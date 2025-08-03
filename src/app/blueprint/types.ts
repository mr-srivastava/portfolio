export interface HeroData {
  name: {
    first: string;
    last: string;
  };
  role: string;
  status: {
    isOnline: boolean;
    message: string;
  };
  techStack: Array<{
    icon: string;
    label: string;
  }>;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech: string[];
  year: string;
  status: 'Production' | 'Active' | 'Maintenance' | 'Archived';
  type: string;
}

export interface SkillData {
  category: string;
  items: string[];
  level: number;
}

export interface DevEnvironmentData {
  system: {
    os: string;
    ide: string;
    terminal: string;
    versionControl: string;
    packageManager: string;
  };
  tools: string[];
  currentFocus: string[];
}

export interface ContactInfoData {
  email: string;
  phone: string;
  location: string;
  social: Array<{
    platform: string;
    icon: string;
    url?: string;
  }>;
  status: {
    isAvailable: boolean;
    message: string;
    responseTime: string;
  };
}

export interface BlueprintPageData {
  hero: HeroData;
  projects: ProjectData[];
  techStack: {
    skills: SkillData[];
    devEnvironment: DevEnvironmentData;
  };
  contact: ContactInfoData;
} 