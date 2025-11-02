export type ProjectType = 'personal' | 'job';

export type CompanyId = 'pwc' | 'zolo' | 'mmt';

export interface BaseProject {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imagePosition?: string;
}

export interface PersonalProject extends BaseProject {
  type: 'personal';
  companyId?: never;
}

export interface JobProject extends BaseProject {
  type: 'job';
  companyId: CompanyId;
}

export type Project = PersonalProject | JobProject;
