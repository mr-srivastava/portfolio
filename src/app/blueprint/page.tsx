import BlueprintPageWrapper from '@/components/BlueprintPage/BlueprintPageWrapper';
import { client } from '@/sanity/lib/client';
import { blueprintPageQuery } from '@/sanity/lib/queries';
import { transformBlueprintPageData } from '@/utils/blueprint-transform';
import { performanceMonitor } from '@/utils/performance';
import type { BlueprintPageData } from './types';
import { unstable_cache } from 'next/cache';

// Validation functions for raw Sanity data
function validateRawSanityData(data: any): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!data) {
    errors.push('No data received from Sanity');
    return { isValid: false, errors };
  }

  // Check hero data
  if (!data.hero) {
    errors.push('Missing hero data');
  } else {
    if (!data.hero.firstName) errors.push('Missing hero.firstName');
    if (!data.hero.lastName) errors.push('Missing hero.lastName');
    if (!data.hero.role) errors.push('Missing hero.role');
  }

  // Check projects data
  if (!Array.isArray(data.projects)) {
    errors.push('Projects data is not an array or missing');
  } else if (data.projects.length === 0) {
    errors.push('No projects found');
  } else {
    data.projects.forEach((project: any, index: number) => {
      if (!project.title) errors.push(`Project ${index}: missing title`);
      if (!project.description)
        errors.push(`Project ${index}: missing description`);
      if (!Array.isArray(project.techStack))
        errors.push(`Project ${index}: techStack is not an array`);
    });
  }

  // Check skills data
  if (!Array.isArray(data.skills)) {
    errors.push('Skills data is not an array or missing');
  } else if (data.skills.length === 0) {
    errors.push('No skills found');
  }

  // Check contact data
  if (!data.contact) {
    errors.push('Missing contact data');
  } else {
    if (!data.contact.email) errors.push('Missing contact.email');
    if (!data.contact.location) errors.push('Missing contact.location');
  }

  return { isValid: errors.length === 0, errors };
}

function validateTransformedBlueprintData(data: BlueprintPageData): {
  isValid: boolean;
  warnings: string[];
} {
  const warnings: string[] = [];

  // Check if we're getting default values (indicates missing/bad data)
  if (data.hero.name.first === 'John' && data.hero.name.last === 'Doe') {
    warnings.push('Hero using default name - check Sanity data');
  }

  if (data.hero.role === 'Full Stack Developer') {
    warnings.push('Hero using default role - check Sanity data');
  }

  if (data.projects.length === 0) {
    warnings.push('No projects found - check Sanity projects data');
  }

  if (data.techStack.skills.length === 0) {
    warnings.push('No skills found - check Sanity skills data');
  }

  if (data.contact.email === 'contact@example.com') {
    warnings.push('Contact using default email - check Sanity contact data');
  }

  return { isValid: warnings.length === 0, warnings };
}

// Cached function for fetching blueprint data with revalidation tags
const getCachedBlueprintData = unstable_cache(
  async () => {
    return await performanceMonitor.measureQuery('blueprintPageQuery', () =>
      client.fetch(
        blueprintPageQuery,
        {},
        {
          next: {
            tags: [
              'blueprint',
              'blueprint-hero',
              'blueprint-projects',
              'blueprint-skills',
              'blueprint-contact',
              'blueprint-dev-env',
            ],
          },
        }
      )
    );
  },
  ['blueprint-page-data'],
  {
    tags: [
      'blueprint',
      'blueprint-hero',
      'blueprint-projects',
      'blueprint-skills',
      'blueprint-contact',
      'blueprint-dev-env',
    ],
    revalidate: 300, // 5 minutes
  }
);

export default async function BlueprintPage() {
  let pageData: BlueprintPageData;
  let dataSource: 'sanity' = 'sanity';
  let validationErrors: string[] = [];
  let validationWarnings: string[] = [];
  let rawSanityData: any = null;

  // Development mode - strict validation
  const isDev = process.env.NODE_ENV === 'development';
  const strictMode = process.env.BLUEPRINT_STRICT_MODE === 'true';

  try {
    // Fetch data from Sanity CMS with caching and performance monitoring
    console.log('Fetching blueprint data from Sanity...');
    const sanityData = await getCachedBlueprintData();
    rawSanityData = sanityData;

    if (isDev) {
      console.log('Raw Sanity data:', JSON.stringify(sanityData, null, 2));
    }

    // Always validate raw data in development
    if (isDev) {
      const rawValidation = validateRawSanityData(sanityData);
      if (!rawValidation.isValid) {
        validationErrors = rawValidation.errors;
        console.error('Raw data validation errors:', rawValidation.errors);

        // In strict mode, throw error
        if (strictMode) {
          throw new Error(
            `Raw data validation failed: ${rawValidation.errors.join(', ')}`
          );
        }
      }
    }

    // Transform Sanity data to match component interfaces
    pageData = transformBlueprintPageData(sanityData);
    dataSource = 'sanity';

    // Validate transformed data in development
    if (isDev) {
      const transformedValidation = validateTransformedBlueprintData(pageData);
      if (!transformedValidation.isValid) {
        validationWarnings = transformedValidation.warnings;
        console.warn(
          'Transformed data validation warnings:',
          transformedValidation.warnings
        );
      }
    }

    console.log('Successfully fetched and transformed Sanity data');
  } catch (error) {
    console.error('Failed to fetch data from Sanity:', error);
    throw new Error(
      `Blueprint page cannot load: Sanity CMS data is required. Please ensure Sanity is properly configured and contains blueprint data. Error: ${error}`
    );
  }

  // Add debug info in development
  if (isDev) {
    console.log(`Data source: ${dataSource}`);
    if (validationErrors.length > 0) {
      console.error('Validation errors:', validationErrors);
    }
    if (validationWarnings.length > 0) {
      console.warn('Validation warnings:', validationWarnings);
    }

    // Log performance summary
    performanceMonitor.logSummary();
  }

  return (
    <BlueprintPageWrapper
      pageData={pageData}
      dataSource={dataSource}
      validationErrors={validationErrors}
      validationWarnings={validationWarnings}
      rawData={rawSanityData}
    />
  );
}

// Add metadata for better caching
export const metadata = {
  title: 'Blueprint - Portfolio',
  description:
    'Interactive blueprint view of my portfolio and technical expertise',
};

// Configure page-level caching
export const revalidate = 300; // 5 minutes
