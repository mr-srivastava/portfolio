export const overviewQuery = `*[_type == "overview"][0] {
    yoe,
    description
  }`;

export const heroSectionQuery = `*[_type == "heroSection"][0] {
    preface,
    content,
    followup,
    src
  }`;

export const experiencesQuery = `*[_type == "experience"] | order(startDate desc) {
    position,
    company,
    place,
    startDate,
    endDate,
    description,
    techStack
  }`;

export const skillsQuery = `*[_type == "skill"] | {
    title,
    description,
    iconKey
  }`;

// Blueprint-specific queries
export const blueprintHeroQuery = `*[_type == "blueprintHero"][0] {
    firstName,
    lastName,
    role,
    isOnline,
    statusMessage,
    techStackItems[] {
      icon,
      label
    }
  }`;

export const projectsQuery = `*[_type == "project"] | order(order asc) {
    id,
    title,
    description,
    techStack,
    year,
    status,
    type,
    order
  }`;

export const contactQuery = `*[_type == "contact"][0] {
    email,
    phone,
    location,
    socialLinks[] {
      platform,
      icon,
      url
    },
    isAvailable,
    availabilityMessage,
    responseTime
  }`;

export const devEnvironmentQuery = `*[_type == "devEnvironment"][0] {
    operatingSystem,
    ide,
    terminal,
    versionControl,
    packageManager,
    tools,
    currentFocus
  }`;

// Extended skills query for blueprint with additional fields
export const blueprintSkillsQuery = `*[_type == "skill"] | {
    title,
    description,
    iconKey,
    category,
    proficiencyLevel,
    items
  }`;

// Optimized unified query that fetches all blueprint data in a single request
// Only includes essential fields to minimize data transfer
export const blueprintPageQuery = `{
    "hero": *[_type == "blueprintHero"][0] {
      firstName,
      lastName,
      role,
      isOnline,
      statusMessage,
      techStackItems[0...10] {
        icon,
        label
      }
    },
    "projects": *[_type == "project"] | order(order asc) [0...20] {
      id,
      title,
      description[0...200],
      techStack[0...10],
      year,
      status,
      type,
      order
    },
    "skills": *[_type == "skill"] [0...50] {
      title,
      description[0...100],
      iconKey,
      category,
      proficiencyLevel,
      items[0...10]
    },
    "contact": *[_type == "contact"][0] {
      email,
      phone,
      location,
      socialLinks[0...10] {
        platform,
        icon,
        url
      },
      isAvailable,
      availabilityMessage[0...100],
      responseTime
    },
    "devEnvironment": *[_type == "devEnvironment"][0] {
      operatingSystem,
      ide,
      terminal,
      versionControl,
      packageManager,
      tools[0...20],
      currentFocus[0...10]
    }
  }`;

// Lightweight query for checking data freshness
export const blueprintPageMetaQuery = `{
    "hero": *[_type == "blueprintHero"][0] { _updatedAt },
    "projects": *[_type == "project"] | order(_updatedAt desc) [0] { _updatedAt },
    "skills": *[_type == "skill"] | order(_updatedAt desc) [0] { _updatedAt },
    "contact": *[_type == "contact"][0] { _updatedAt },
    "devEnvironment": *[_type == "devEnvironment"][0] { _updatedAt }
  }`;

// Preview-specific query that includes draft status and revision info
export const blueprintPagePreviewQuery = `{
    "hero": *[_type == "blueprintHero"][0] {
      firstName,
      lastName,
      role,
      isOnline,
      statusMessage,
      techStackItems[0...10] {
        icon,
        label
      },
      _id,
      _rev,
      _updatedAt,
      _createdAt
    },
    "projects": *[_type == "project"] | order(order asc) [0...20] {
      id,
      title,
      description[0...200],
      techStack[0...10],
      year,
      status,
      type,
      order,
      _id,
      _rev,
      _updatedAt,
      _createdAt
    },
    "skills": *[_type == "skill"] [0...50] {
      title,
      description[0...100],
      iconKey,
      category,
      proficiencyLevel,
      items[0...10],
      _id,
      _rev,
      _updatedAt,
      _createdAt
    },
    "contact": *[_type == "contact"][0] {
      email,
      phone,
      location,
      socialLinks[0...10] {
        platform,
        icon,
        url
      },
      isAvailable,
      availabilityMessage[0...100],
      responseTime,
      _id,
      _rev,
      _updatedAt,
      _createdAt
    },
    "devEnvironment": *[_type == "devEnvironment"][0] {
      operatingSystem,
      ide,
      terminal,
      versionControl,
      packageManager,
      tools[0...20],
      currentFocus[0...10],
      _id,
      _rev,
      _updatedAt,
      _createdAt
    }
  }`;
