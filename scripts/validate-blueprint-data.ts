#!/usr/bin/env tsx

import { config } from 'dotenv';

// Load environment variables from .env.local (optional for validation)
config({ path: '.env.local', quiet: true });
import type {
  HeroData,
  ProjectData,
  SkillData,
  DevEnvironmentData,
  ContactInfoData,
} from '../src/app/blueprint/types';

// Validation functions (same as in migration script)
function validateHeroData(data: HeroData): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!data.name?.first) errors.push('Hero: Missing first name');
  if (!data.name?.last) errors.push('Hero: Missing last name');
  if (!data.role) errors.push('Hero: Missing role');
  if (typeof data.status?.isOnline !== 'boolean')
    errors.push('Hero: Invalid isOnline status');
  if (!data.status?.message) errors.push('Hero: Missing status message');
  if (!Array.isArray(data.techStack))
    errors.push('Hero: Tech stack must be an array');
  else {
    data.techStack.forEach((item, index) => {
      if (!item.icon)
        errors.push(`Hero: Tech stack item ${index} missing icon`);
      if (!item.label)
        errors.push(`Hero: Tech stack item ${index} missing label`);
    });
  }

  return { valid: errors.length === 0, errors };
}

function validateProjectData(
  data: ProjectData,
  index: number
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const validStatuses = ['Production', 'Active', 'Maintenance', 'Archived'];

  if (!data.id) errors.push(`Project ${index}: Missing ID`);
  if (!data.title) errors.push(`Project ${index}: Missing title`);
  if (!data.description) errors.push(`Project ${index}: Missing description`);
  if (!Array.isArray(data.tech) || data.tech.length === 0) {
    errors.push(`Project ${index}: Tech stack must be a non-empty array`);
  }
  if (!data.year) errors.push(`Project ${index}: Missing year`);
  if (!validStatuses.includes(data.status)) {
    errors.push(
      `Project ${index}: Invalid status. Must be one of: ${validStatuses.join(', ')}`
    );
  }
  if (!data.type) errors.push(`Project ${index}: Missing type`);

  return { valid: errors.length === 0, errors };
}

function validateSkillData(
  data: SkillData,
  index: number
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!data.category) errors.push(`Skill ${index}: Missing category`);
  if (!Array.isArray(data.items) || data.items.length === 0) {
    errors.push(`Skill ${index}: Items must be a non-empty array`);
  }
  if (typeof data.level !== 'number' || data.level < 0 || data.level > 100) {
    errors.push(`Skill ${index}: Level must be a number between 0 and 100`);
  }

  return { valid: errors.length === 0, errors };
}

function validateContactData(data: ContactInfoData): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!data.email) errors.push('Contact: Missing email');
  if (!data.phone) errors.push('Contact: Missing phone');
  if (!data.location) errors.push('Contact: Missing location');
  if (!Array.isArray(data.social))
    errors.push('Contact: Social links must be an array');
  else {
    data.social.forEach((item, index) => {
      if (!item.platform)
        errors.push(`Contact: Social link ${index} missing platform`);
      if (!item.icon) errors.push(`Contact: Social link ${index} missing icon`);
    });
  }
  if (typeof data.status?.isAvailable !== 'boolean') {
    errors.push('Contact: Invalid availability status');
  }
  if (!data.status?.message)
    errors.push('Contact: Missing availability message');
  if (!data.status?.responseTime) errors.push('Contact: Missing response time');

  return { valid: errors.length === 0, errors };
}

function validateDevEnvironmentData(data: DevEnvironmentData): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!data.system?.os)
    errors.push('Dev Environment: Missing operating system');
  if (!data.system?.ide) errors.push('Dev Environment: Missing IDE');
  if (!data.system?.terminal) errors.push('Dev Environment: Missing terminal');
  if (!data.system?.versionControl)
    errors.push('Dev Environment: Missing version control');
  if (!data.system?.packageManager)
    errors.push('Dev Environment: Missing package manager');
  if (!Array.isArray(data.tools) || data.tools.length === 0) {
    errors.push('Dev Environment: Tools must be a non-empty array');
  }
  if (!Array.isArray(data.currentFocus) || data.currentFocus.length === 0) {
    errors.push('Dev Environment: Current focus must be a non-empty array');
  }

  return { valid: errors.length === 0, errors };
}

// Main validation function
function validateBlueprintData(): void {
  console.log('⚠️  Blueprint data validation is no longer available.\n');
  console.log(
    'The static data file (src/app/blueprint/data.ts) has been removed'
  );
  console.log(
    'as the blueprint page now uses Sanity CMS as the single source of truth.\n'
  );

  console.log('To validate blueprint data, please:');
  console.log('1. Check your content in Sanity Studio');
  console.log('2. Use the blueprint page preview functionality');
  console.log(
    '3. Run the test-migration script to verify data transformation\n'
  );

  console.log(
    '✅ Blueprint data is now managed exclusively through Sanity CMS.'
  );
}

// Run validation if this file is executed directly
if (require.main === module) {
  validateBlueprintData();
}

export { validateBlueprintData };
