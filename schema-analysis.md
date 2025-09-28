# Sanity Schema Analysis for Blueprint Migration

## Executive Summary

After analyzing existing Sanity schemas and blueprint data requirements, I've identified the following reusability assessment:

- **Reusable with Extensions**: skill schema (needs category, proficiencyLevel, items fields)
- **Not Directly Reusable**: heroSection, experience, overview schemas (different data structures)
- **New Schemas Required**: project, contact, devEnvironment, blueprintHero schemas

## Detailed Schema Comparison

### 1. Hero Section Analysis

**Existing heroSection Schema:**

```typescript
{
  preface: string,
  content: string,
  followup: string,
  src: string (URL)
}
```

**Blueprint Hero Requirements:**

```typescript
{
  name: { first: string, last: string },
  role: string,
  status: { isOnline: boolean, message: string },
  techStack: Array<{ icon: string, label: string }>
}
```

**Assessment**: ❌ **NOT REUSABLE** - Completely different data structure
**Recommendation**: Create new `blueprintHero` schema

### 2. Skill Schema Analysis

**Existing skill Schema:**

```typescript
{
  title: string,
  description: string,
  iconKey: string
}
```

**Blueprint Skill Requirements:**

```typescript
{
  category: string,
  items: string[],
  level: number
}
```

**Assessment**: ⚠️ **PARTIALLY REUSABLE** - Can be extended
**Recommendation**: Extend existing skill schema with:

- `category` field (string)
- `proficiencyLevel` field (number)
- `items` field (array of strings)
- Keep existing fields for backward compatibility

### 3. Experience Schema Analysis

**Existing experience Schema:**

```typescript
{
  position: string,
  company: string,
  place: string,
  startDate: number,
  endDate: number,
  description: string[],
  techStack: string[]
}
```

**Blueprint Project Requirements:**

```typescript
{
  id: string,
  title: string,
  description: string,
  tech: string[],
  year: string,
  status: 'Production' | 'Active' | 'Maintenance' | 'Archived',
  type: string
}
```

**Assessment**: ❌ **NOT REUSABLE** - Different purpose and structure
**Recommendation**: Create new `project` schema

### 4. Overview Schema Analysis

**Existing overview Schema:**

```typescript
{
  yoe: string,
  description: string
}
```

**Blueprint Requirements**: No direct equivalent needed

**Assessment**: ❌ **NOT APPLICABLE** - No overlap with blueprint data

## New Schemas Required

### 1. blueprintHero Schema

```typescript
{
  firstName: string,
  lastName: string,
  role: string,
  isOnline: boolean,
  statusMessage: string,
  techStackItems: Array<{ icon: string, label: string }>
}
```

### 2. project Schema

```typescript
{
  id: string,
  title: string,
  description: string,
  techStack: string[],
  year: string,
  status: 'Production' | 'Active' | 'Maintenance' | 'Archived',
  type: string,
  order: number
}
```

### 3. contact Schema

```typescript
{
  email: string,
  phone: string,
  location: string,
  socialLinks: Array<{ platform: string, icon: string, url?: string }>,
  isAvailable: boolean,
  availabilityMessage: string,
  responseTime: string
}
```

### 4. devEnvironment Schema

```typescript
{
  operatingSystem: string,
  ide: string,
  terminal: string,
  versionControl: string,
  packageManager: string,
  tools: string[],
  currentFocus: string[]
}
```

## Data Transformation Strategy

### Approach: Adapter Pattern

Create transformation functions that map Sanity data to existing TypeScript interfaces:

```typescript
// Transform extended skill data to blueprint format
const transformSkills = (sanitySkills: ExtendedSanitySkill[]): SkillData[] => {
  return sanitySkills.map((skill) => ({
    category: skill.category,
    items: skill.items,
    level: skill.proficiencyLevel,
  }));
};

// Transform new blueprint hero data
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

### Benefits of This Approach:

1. **Zero Breaking Changes**: Existing components continue to work unchanged
2. **Type Safety**: Full TypeScript support maintained
3. **Gradual Migration**: Can implement incrementally
4. **Fallback Support**: Easy to implement fallback to static data
5. **Testing**: Transformation functions are easily unit testable

## Implementation Priority

1. **High Priority**:
   - Extend skill schema (affects existing functionality)
   - Create blueprintHero schema (core blueprint feature)

2. **Medium Priority**:
   - Create project schema (main blueprint content)
   - Create contact schema (user engagement)

3. **Low Priority**:
   - Create devEnvironment schema (nice-to-have information)

## Backward Compatibility Plan

- Existing skill schema extensions will be optional fields
- Existing portfolio components will continue using original schema fields
- Blueprint components will use extended/new schema fields
- Data transformation layer ensures interface compatibility

## Risk Assessment

**Low Risk**:

- New schemas don't affect existing functionality
- Skill schema extension uses optional fields
- Transformation layer provides isolation

**Mitigation Strategies**:

- Comprehensive testing of extended skill schema
- Fallback mechanisms for missing data
- Gradual rollout with feature flags if needed
