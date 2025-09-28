# Data Transformation Plan

## Overview

This document outlines the data transformation approach to maintain existing component interfaces while migrating to Sanity CMS data sources.

## Transformation Layer Architecture

```
Sanity CMS Data → Transformation Functions → Existing TypeScript Interfaces → Components
```

## Interface Compatibility Matrix

| Blueprint Interface  | Sanity Schema          | Transformation Required    | Complexity |
| -------------------- | ---------------------- | -------------------------- | ---------- |
| `HeroData`           | `blueprintHero` (new)  | Yes - Direct mapping       | Low        |
| `ProjectData[]`      | `project` (new)        | Yes - Array transformation | Low        |
| `SkillData[]`        | `skill` (extended)     | Yes - Field mapping        | Medium     |
| `ContactInfoData`    | `contact` (new)        | Yes - Direct mapping       | Low        |
| `DevEnvironmentData` | `devEnvironment` (new) | Yes - Object restructuring | Medium     |

## Transformation Functions Specification

### 1. Hero Data Transformation

```typescript
interface SanityBlueprintHero {
  firstName: string;
  lastName: string;
  role: string;
  isOnline: boolean;
  statusMessage: string;
  techStackItems: Array<{ icon: string; label: string }>;
}

const transformHeroData = (sanityHero: SanityBlueprintHero): HeroData => ({
  name: {
    first: sanityHero.firstName,
    last: sanityHero.lastName,
  },
  role: sanityHero.role,
  status: {
    isOnline: sanityHero.isOnline,
    message: sanityHero.statusMessage,
  },
  techStack: sanityHero.techStackItems,
});
```

### 2. Skills Data Transformation

```typescript
interface ExtendedSanitySkill {
  title: string; // existing
  description: string; // existing
  iconKey: string; // existing
  category: string; // new
  proficiencyLevel: number; // new
  items: string[]; // new
}

const transformSkills = (sanitySkills: ExtendedSanitySkill[]): SkillData[] => {
  return sanitySkills
    .filter((skill) => skill.category && skill.proficiencyLevel && skill.items)
    .map((skill) => ({
      category: skill.category,
      items: skill.items,
      level: skill.proficiencyLevel,
    }));
};
```

### 3. Projects Data Transformation

```typescript
interface SanityProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  year: string;
  status: 'Production' | 'Active' | 'Maintenance' | 'Archived';
  type: string;
  order: number;
}

const transformProjects = (sanityProjects: SanityProject[]): ProjectData[] => {
  return sanityProjects
    .sort((a, b) => a.order - b.order)
    .map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      tech: project.techStack,
      year: project.year,
      status: project.status,
      type: project.type,
    }));
};
```

### 4. Contact Data Transformation

```typescript
interface SanityContact {
  email: string;
  phone: string;
  location: string;
  socialLinks: Array<{ platform: string; icon: string; url?: string }>;
  isAvailable: boolean;
  availabilityMessage: string;
  responseTime: string;
}

const transformContact = (sanityContact: SanityContact): ContactInfoData => ({
  email: sanityContact.email,
  phone: sanityContact.phone,
  location: sanityContact.location,
  social: sanityContact.socialLinks,
  status: {
    isAvailable: sanityContact.isAvailable,
    message: sanityContact.availabilityMessage,
    responseTime: sanityContact.responseTime,
  },
});
```

### 5. Dev Environment Data Transformation

```typescript
interface SanityDevEnvironment {
  operatingSystem: string;
  ide: string;
  terminal: string;
  versionControl: string;
  packageManager: string;
  tools: string[];
  currentFocus: string[];
}

const transformDevEnvironment = (
  sanityDevEnv: SanityDevEnvironment
): DevEnvironmentData => ({
  system: {
    os: sanityDevEnv.operatingSystem,
    ide: sanityDevEnv.ide,
    terminal: sanityDevEnv.terminal,
    versionControl: sanityDevEnv.versionControl,
    packageManager: sanityDevEnv.packageManager,
  },
  tools: sanityDevEnv.tools,
  currentFocus: sanityDevEnv.currentFocus,
});
```

## Error Handling Strategy

### Default Values

```typescript
const DEFAULT_HERO_DATA: HeroData = {
  name: { first: 'Developer', last: 'Name' },
  role: 'Full Stack Developer',
  status: { isOnline: false, message: 'STATUS: OFFLINE' },
  techStack: [],
};

const DEFAULT_CONTACT_DATA: ContactInfoData = {
  email: 'contact@example.com',
  phone: 'Not available',
  location: 'Remote',
  social: [],
  status: {
    isAvailable: false,
    message: 'Currently unavailable',
    responseTime: 'N/A',
  },
};
```

### Transformation with Fallbacks

```typescript
const safeTransformHeroData = (sanityHero?: SanityBlueprintHero): HeroData => {
  if (!sanityHero) return DEFAULT_HERO_DATA;

  try {
    return transformHeroData(sanityHero);
  } catch (error) {
    console.error('Hero data transformation failed:', error);
    return DEFAULT_HERO_DATA;
  }
};
```

## Validation Strategy

### Runtime Validation

```typescript
const validateHeroData = (data: any): data is HeroData => {
  return (
    data &&
    typeof data.name?.first === 'string' &&
    typeof data.name?.last === 'string' &&
    typeof data.role === 'string' &&
    typeof data.status?.isOnline === 'boolean' &&
    typeof data.status?.message === 'string' &&
    Array.isArray(data.techStack)
  );
};
```

### Schema Validation

```typescript
const validateSanityHeroData = (data: any): data is SanityBlueprintHero => {
  return (
    data &&
    typeof data.firstName === 'string' &&
    typeof data.lastName === 'string' &&
    typeof data.role === 'string' &&
    typeof data.isOnline === 'boolean' &&
    typeof data.statusMessage === 'string' &&
    Array.isArray(data.techStackItems)
  );
};
```

## Testing Strategy

### Unit Tests for Transformation Functions

```typescript
describe('transformHeroData', () => {
  it('should transform Sanity hero data to HeroData interface', () => {
    const sanityHero: SanityBlueprintHero = {
      firstName: 'John',
      lastName: 'Doe',
      role: 'Developer',
      isOnline: true,
      statusMessage: 'Available',
      techStackItems: [{ icon: 'React', label: 'Frontend' }],
    };

    const result = transformHeroData(sanityHero);

    expect(result).toEqual({
      name: { first: 'John', last: 'Doe' },
      role: 'Developer',
      status: { isOnline: true, message: 'Available' },
      techStack: [{ icon: 'React', label: 'Frontend' }],
    });
  });
});
```

## Performance Considerations

### Memoization

```typescript
import { useMemo } from 'react';

const useBlueprintData = (sanityData: SanityBlueprintData) => {
  return useMemo(
    () => ({
      hero: transformHeroData(sanityData.hero),
      projects: transformProjects(sanityData.projects),
      skills: transformSkills(sanityData.skills),
      contact: transformContact(sanityData.contact),
      devEnvironment: transformDevEnvironment(sanityData.devEnvironment),
    }),
    [sanityData]
  );
};
```

### Lazy Transformation

```typescript
const createBlueprintDataTransformer = (sanityData: SanityBlueprintData) => ({
  get hero() {
    return transformHeroData(sanityData.hero);
  },
  get projects() {
    return transformProjects(sanityData.projects);
  },
  get skills() {
    return transformSkills(sanityData.skills);
  },
  get contact() {
    return transformContact(sanityData.contact);
  },
  get devEnvironment() {
    return transformDevEnvironment(sanityData.devEnvironment);
  },
});
```

## Migration Path

1. **Phase 1**: Create transformation utilities with comprehensive tests
2. **Phase 2**: Implement Sanity schemas and populate with test data
3. **Phase 3**: Update BlueprintPage to use transformation layer
4. **Phase 4**: Add error handling and fallback mechanisms
5. **Phase 5**: Performance optimization and caching
