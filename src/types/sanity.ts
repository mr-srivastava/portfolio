/**
 * TypeScript interfaces for Sanity CMS data models
 * These interfaces match the Sanity schemas exactly for type safety
 */

// Base Sanity document interface
interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

// Blueprint Hero Section
export interface SanityBlueprintHero extends SanityDocument {
  _type: 'blueprintHero';
  firstName: string;
  lastName: string;
  role: string;
  isOnline: boolean;
  statusMessage: string;
  techStackItems: Array<{
    icon: string;
    label: string;
  }>;
}

// Project
export interface SanityProject extends SanityDocument {
  _type: 'project';
  id: string;
  title: string;
  description: string;
  techStack: string[];
  year: string;
  status: 'Production' | 'Active' | 'Maintenance' | 'Archived';
  type: string;
  order: number;
}

// Contact Information
export interface SanityContact extends SanityDocument {
  _type: 'contact';
  email: string;
  phone: string;
  location: string;
  socialLinks: Array<{
    platform: string;
    icon: string;
    url?: string;
  }>;
  isAvailable: boolean;
  availabilityMessage: string;
  responseTime: string;
}

// Development Environment
export interface SanityDevEnvironment extends SanityDocument {
  _type: 'devEnvironment';
  machine: string;
  operatingSystem: string;
  ide: string;
  terminal: string;
  versionControl: string;
  packageManager: string;
  tools: string[];
  currentFocus: string[];
}

// Extended Skill (with blueprint-specific fields)
export interface SanityExtendedSkill extends SanityDocument {
  _type: 'skill';
  title: string;
  description: string;
  iconKey: string;
  category: 'frontend' | 'backend' | 'cloud' | 'mobile';
  proficiencyLevel: number;
  items?: string[];
}

// Union type for all Sanity document types
export type SanityDocumentType =
  | SanityBlueprintHero
  | SanityProject
  | SanityContact
  | SanityDevEnvironment
  | SanityExtendedSkill;

// Type guards for runtime type checking
export const isSanityBlueprintHero = (
  doc: SanityDocument
): doc is SanityBlueprintHero => {
  return doc._type === 'blueprintHero';
};

export const isSanityProject = (doc: SanityDocument): doc is SanityProject => {
  return doc._type === 'project';
};

export const isSanityContact = (doc: SanityDocument): doc is SanityContact => {
  return doc._type === 'contact';
};

export const isSanityDevEnvironment = (
  doc: SanityDocument
): doc is SanityDevEnvironment => {
  return doc._type === 'devEnvironment';
};

export const isSanityExtendedSkill = (
  doc: SanityDocument
): doc is SanityExtendedSkill => {
  return doc._type === 'skill';
};
