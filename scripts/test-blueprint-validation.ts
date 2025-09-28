#!/usr/bin/env tsx

/**
 * Script to test blueprint data validation without running the full app
 * Usage: npx tsx scripts/test-blueprint-validation.ts
 */

import { client } from '../src/sanity/lib/client';
import { blueprintPageQuery } from '../src/sanity/lib/queries';
import { transformBlueprintPageData } from '../src/utils/blueprint-transform';

// Validation functions (copied from blueprint page)
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

function validateTransformedData(data: any): {
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

async function testBlueprintValidation() {
  console.log('🔍 Testing Blueprint Data Validation\n');

  try {
    // Fetch raw data from Sanity
    console.log('📡 Fetching data from Sanity...');
    const rawData = await client.fetch(blueprintPageQuery);

    console.log('✅ Successfully fetched data from Sanity\n');

    // Validate raw data
    console.log('🔎 Validating raw Sanity data...');
    const rawValidation = validateRawSanityData(rawData);

    if (rawValidation.isValid) {
      console.log('✅ Raw data validation passed');
    } else {
      console.log('❌ Raw data validation failed:');
      rawValidation.errors.forEach((error) => console.log(`   • ${error}`));
    }
    console.log('');

    // Transform data
    console.log('🔄 Transforming data...');
    const transformedData = transformBlueprintPageData(rawData);
    console.log('✅ Data transformation completed\n');

    // Validate transformed data
    console.log('🔎 Validating transformed data...');
    const transformedValidation = validateTransformedData(transformedData);

    if (transformedValidation.isValid) {
      console.log('✅ Transformed data validation passed');
    } else {
      console.log('⚠️  Transformed data validation warnings:');
      transformedValidation.warnings.forEach((warning) =>
        console.log(`   • ${warning}`)
      );
    }
    console.log('');

    // Summary
    console.log('📊 Summary:');
    console.log(`   Raw data errors: ${rawValidation.errors.length}`);
    console.log(
      `   Transform warnings: ${transformedValidation.warnings.length}`
    );

    if (rawValidation.isValid && transformedValidation.isValid) {
      console.log('   🎉 All validations passed!');
    } else {
      console.log('   ⚠️  Issues found - check Sanity data');
    }

    // Show sample of transformed data
    console.log('\n📋 Sample of transformed data:');
    console.log('Hero:', {
      name: transformedData.hero.name,
      role: transformedData.hero.role,
      techStackCount: transformedData.hero.techStack.length,
    });
    console.log('Projects count:', transformedData.projects.length);
    console.log('Skills count:', transformedData.techStack.skills.length);
    console.log('Contact email:', transformedData.contact.email);
  } catch (error) {
    console.error('❌ Failed to test blueprint validation:', error);
    process.exit(1);
  }
}

// Run the test
testBlueprintValidation();
