/**
 * Data transformation utilities for converting Sanity CMS data
 * to blueprint page component interfaces
 */

import type {
  HeroData,
  ProjectData,
  SkillData,
  DevEnvironmentData,
  ContactInfoData,
  BlueprintPageData,
} from '@/app/blueprint/types';

import type {
  SanityBlueprintHero,
  SanityProject,
  SanityExtendedSkill,
  SanityDevEnvironment,
  SanityContact,
} from '@/types/sanity';

/**
 * Transform Sanity blueprint hero data to HeroData interface
 */
export const transformHeroData = (
  sanityHero: SanityBlueprintHero | null
): HeroData => {
  // Provide default values for missing hero data
  const defaultHero = {
    firstName: 'John',
    lastName: 'Doe',
    role: 'Full Stack Developer',
    isOnline: true,
    statusMessage: 'STATUS: ONLINE',
    techStackItems: [],
  };

  // Handle null case by using defaults
  const heroData = sanityHero || defaultHero;

  if (!sanityHero) {
    console.warn('Hero data is missing from Sanity CMS, using defaults');
  }

  // Use defaults for missing fields with development warnings
  const firstName = heroData.firstName || defaultHero.firstName;
  const lastName = heroData.lastName || defaultHero.lastName;
  const role = heroData.role || defaultHero.role;
  const isOnline =
    typeof heroData.isOnline === 'boolean' ?
      heroData.isOnline
    : defaultHero.isOnline;
  const statusMessage = heroData.statusMessage || defaultHero.statusMessage;

  if (process.env.NODE_ENV === 'development') {
    if (!heroData.firstName)
      console.warn('Hero firstName is missing, using default');
    if (!heroData.lastName)
      console.warn('Hero lastName is missing, using default');
    if (!heroData.role) console.warn('Hero role is missing, using default');
    if (typeof heroData.isOnline !== 'boolean')
      console.warn('Hero isOnline status is missing, using default');
    if (!heroData.statusMessage)
      console.warn('Hero statusMessage is missing, using default');
  }

  return {
    name: {
      first: firstName,
      last: lastName,
    },
    role: role,
    status: {
      isOnline: isOnline,
      message: statusMessage,
    },
    techStack: (heroData.techStackItems || [])
      .map((item: any) => ({
        icon: item?.icon || '',
        label: item?.label || '',
      }))
      .filter((item) => item.icon && item.label),
  };
};

/**
 * Transform Sanity project data to ProjectData interface
 */
export const transformProjects = (
  sanityProjects: SanityProject[] | null
): ProjectData[] => {
  if (!sanityProjects || !Array.isArray(sanityProjects)) {
    console.warn(
      'Projects data is missing from Sanity CMS, returning empty array'
    );
    return [];
  }

  return sanityProjects.map((project, index) => {
    // Provide defaults for missing project data
    const id = project.id || `project-${index + 1}`;
    const title = project.title || `Project ${index + 1}`;
    const description = project.description || 'No description available';
    const year = project.year || new Date().getFullYear().toString();
    const status = project.status || 'Active';
    const type = project.type || 'Web Application';

    // Log warnings for missing data in development
    if (process.env.NODE_ENV === 'development') {
      if (!project.id)
        console.warn(`Project ${index + 1}: id is missing, using default`);
      if (!project.title)
        console.warn(`Project ${index + 1}: title is missing, using default`);
      if (!project.description)
        console.warn(
          `Project ${index + 1}: description is missing, using default`
        );
      if (!project.year)
        console.warn(`Project ${index + 1}: year is missing, using default`);
      if (!project.status)
        console.warn(`Project ${index + 1}: status is missing, using default`);
      if (!project.type)
        console.warn(`Project ${index + 1}: type is missing, using default`);
    }
    return {
      id: id,
      title: title,
      description: description,
      tech: (project.techStack || []).filter(
        (tech: any) => typeof tech === 'string' && tech.trim()
      ),
      year: year,
      status: status,
      type: type,
    };
  });
};

/**
 * Transform Sanity skill data to SkillData interface
 */
export const transformSkills = (
  sanitySkills: SanityExtendedSkill[] | null
): SkillData[] => {
  if (!sanitySkills || !Array.isArray(sanitySkills)) {
    throw new Error('Skills data is required but not found in Sanity CMS');
  }

  return sanitySkills.map((skill, index) => {
    // Provide default values for missing data instead of throwing errors
    const category = skill.category || 'General';
    const proficiencyLevel =
      typeof skill.proficiencyLevel === 'number' ? skill.proficiencyLevel : 80; // Default proficiency level

    // Log warnings for missing data in development
    if (process.env.NODE_ENV === 'development') {
      if (!skill.category) {
        console.warn(
          `Skill ${index + 1} (${skill.title}): category is missing, using default 'General'`
        );
      }
      if (typeof skill.proficiencyLevel !== 'number') {
        console.warn(
          `Skill ${index + 1} (${skill.title}): proficiencyLevel is missing, using default 80`
        );
      }
    }

    return {
      category,
      items: (skill.items || []).filter(
        (item: any) => typeof item === 'string' && item.trim()
      ),
      level: proficiencyLevel,
    };
  });
};

/**
 * Transform Sanity contact data to ContactInfoData interface
 */
export const transformContact = (
  sanityContact: SanityContact | null
): ContactInfoData => {
  // Provide default values for missing contact data
  const defaultContact = {
    email: 'contact@example.com',
    phone: '+1-555-0123',
    location: 'Remote',
    isAvailable: true,
    availabilityMessage: 'Currently open to new opportunities',
    responseTime: '< 24 hours',
    socialLinks: [],
  };

  // Handle null case by using defaults
  const contactData = sanityContact || defaultContact;

  if (!sanityContact) {
    console.warn('Contact data is missing from Sanity CMS, using defaults');
  }

  // Use defaults for missing fields with development warnings
  const email = contactData.email || defaultContact.email;
  const phone = contactData.phone || defaultContact.phone;
  const location = contactData.location || defaultContact.location;
  const isAvailable =
    typeof contactData.isAvailable === 'boolean' ?
      contactData.isAvailable
    : defaultContact.isAvailable;
  const availabilityMessage =
    contactData.availabilityMessage || defaultContact.availabilityMessage;
  const responseTime = contactData.responseTime || defaultContact.responseTime;

  if (process.env.NODE_ENV === 'development') {
    if (!contactData.email)
      console.warn('Contact email is missing, using default');
    if (!contactData.phone)
      console.warn('Contact phone is missing, using default');
    if (!contactData.location)
      console.warn('Contact location is missing, using default');
    if (typeof contactData.isAvailable !== 'boolean')
      console.warn('Contact isAvailable status is missing, using default');
    if (!contactData.availabilityMessage)
      console.warn('Contact availabilityMessage is missing, using default');
    if (!contactData.responseTime)
      console.warn('Contact responseTime is missing, using default');
  }

  return {
    email: email,
    phone: phone,
    location: location,
    social: (contactData.socialLinks || [])
      .map((link: any) => ({
        platform: link?.platform || '',
        icon: link?.icon || '',
        url: link?.url || undefined,
      }))
      .filter((link) => link.platform && link.icon),
    status: {
      isAvailable: isAvailable,
      message: availabilityMessage,
      responseTime: responseTime,
    },
  };
};

/**
 * Transform Sanity development environment data to DevEnvironmentData interface
 */
export const transformDevEnvironment = (
  sanityDevEnv: SanityDevEnvironment | null
): DevEnvironmentData => {
  // Provide default values for missing dev environment data
  const defaultDevEnv = {
    operatingSystem: 'macOS',
    ide: 'VS Code',
    terminal: 'Terminal',
    versionControl: 'Git',
    packageManager: 'npm',
    tools: [],
    currentFocus: [],
  };

  // Handle null case by using defaults
  const devEnvData = sanityDevEnv || defaultDevEnv;

  if (!sanityDevEnv) {
    console.warn(
      'Development environment data is missing from Sanity CMS, using defaults'
    );
  }

  // Use defaults for missing fields with development warnings
  const operatingSystem =
    devEnvData.operatingSystem || defaultDevEnv.operatingSystem;
  const ide = devEnvData.ide || defaultDevEnv.ide;
  const terminal = devEnvData.terminal || defaultDevEnv.terminal;
  const versionControl =
    devEnvData.versionControl || defaultDevEnv.versionControl;
  const packageManager =
    devEnvData.packageManager || defaultDevEnv.packageManager;

  if (process.env.NODE_ENV === 'development') {
    if (!devEnvData.operatingSystem)
      console.warn('DevEnvironment operatingSystem is missing, using default');
    if (!devEnvData.ide)
      console.warn('DevEnvironment ide is missing, using default');
    if (!devEnvData.terminal)
      console.warn('DevEnvironment terminal is missing, using default');
    if (!devEnvData.versionControl)
      console.warn('DevEnvironment versionControl is missing, using default');
    if (!devEnvData.packageManager)
      console.warn('DevEnvironment packageManager is missing, using default');
  }

  return {
    system: {
      os: operatingSystem,
      ide: ide,
      terminal: terminal,
      versionControl: versionControl,
      packageManager: packageManager,
    },
    tools: (devEnvData.tools || []).filter(
      (tool: any) => typeof tool === 'string' && tool.trim()
    ),
    currentFocus: (devEnvData.currentFocus || []).filter(
      (focus: any) => typeof focus === 'string' && focus.trim()
    ),
  };
};

/**
 * Transform complete Sanity data to BlueprintPageData interface
 * This is a convenience function that combines all transformations
 */
export const transformBlueprintPageData = (
  sanityData: {
    hero: SanityBlueprintHero | null;
    projects: SanityProject[] | null;
    skills: SanityExtendedSkill[] | null;
    contact: SanityContact | null;
    devEnvironment: SanityDevEnvironment | null;
  } | null
): BlueprintPageData => {
  if (!sanityData) {
    console.warn('Sanity data is not provided, using empty defaults');
    sanityData = {
      hero: null,
      projects: null,
      skills: null,
      contact: null,
      devEnvironment: null,
    };
  }

  return {
    hero: transformHeroData(sanityData.hero),
    projects: transformProjects(sanityData.projects),
    techStack: {
      skills: transformSkills(sanityData.skills),
      devEnvironment: transformDevEnvironment(sanityData.devEnvironment),
    },
    contact: transformContact(sanityData.contact),
  };
};
