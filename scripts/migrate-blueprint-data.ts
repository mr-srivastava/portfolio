#!/usr/bin/env tsx

import { config } from 'dotenv';
import { createClient } from '@sanity/client';

// Load environment variables from .env.local
config({ path: '.env.local', quiet: true });
import type {
  HeroData,
  ProjectData,
  SkillData,
  DevEnvironmentData,
  ContactInfoData,
} from '../src/app/blueprint/types';

// Create a client with write permissions for migration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-06',
  token: process.env.SANITY_API_TOKEN, // Write token required for mutations
  useCdn: false, // Don't use CDN for writes
});

// Validation functions
function validateHeroData(data: HeroData): boolean {
  return !!(
    data.name?.first &&
    data.name?.last &&
    data.role &&
    typeof data.status?.isOnline === 'boolean' &&
    data.status?.message &&
    Array.isArray(data.techStack) &&
    data.techStack.every((item) => item.icon && item.label)
  );
}

function validateProjectData(data: ProjectData): boolean {
  const validStatuses = ['Production', 'Active', 'Maintenance', 'Archived'];
  return !!(
    data.id &&
    data.title &&
    data.description &&
    Array.isArray(data.tech) &&
    data.tech.length > 0 &&
    data.year &&
    validStatuses.includes(data.status) &&
    data.type
  );
}

function validateSkillData(data: SkillData): boolean {
  return !!(
    data.category &&
    Array.isArray(data.items) &&
    data.items.length > 0 &&
    typeof data.level === 'number' &&
    data.level >= 0 &&
    data.level <= 100
  );
}

function validateContactData(data: ContactInfoData): boolean {
  return !!(
    data.email &&
    data.phone &&
    data.location &&
    Array.isArray(data.social) &&
    data.social.every((item) => item.platform && item.icon) &&
    typeof data.status?.isAvailable === 'boolean' &&
    data.status?.message &&
    data.status?.responseTime
  );
}

function validateDevEnvironmentData(data: DevEnvironmentData): boolean {
  return !!(
    data.system?.os &&
    data.system?.ide &&
    data.system?.terminal &&
    data.system?.versionControl &&
    data.system?.packageManager &&
    Array.isArray(data.tools) &&
    data.tools.length > 0 &&
    Array.isArray(data.currentFocus) &&
    data.currentFocus.length > 0
  );
}

// Migration functions
async function migrateHeroData(heroData: HeroData): Promise<void> {
  console.log('🚀 Migrating hero data...');

  if (!validateHeroData(heroData)) {
    throw new Error('Invalid hero data structure');
  }

  const sanityHeroDoc = {
    _type: 'blueprintHero',
    _id: 'blueprint-hero',
    firstName: heroData.name.first,
    lastName: heroData.name.last,
    role: heroData.role,
    isOnline: heroData.status.isOnline,
    statusMessage: heroData.status.message,
    techStackItems: heroData.techStack.map((item) => ({
      _type: 'techStackItem',
      icon: item.icon,
      label: item.label,
    })),
  };

  try {
    await client.createOrReplace(sanityHeroDoc);
    console.log('✅ Hero data migrated successfully');
  } catch (error) {
    console.error('❌ Failed to migrate hero data:', error);
    throw error;
  }
}

async function migrateProjectsData(projects: ProjectData[]): Promise<void> {
  console.log('🚀 Migrating projects data...');

  for (const [index, project] of projects.entries()) {
    if (!validateProjectData(project)) {
      throw new Error(
        `Invalid project data structure for project: ${project.title}`
      );
    }

    const sanityProjectDoc = {
      _type: 'project',
      _id: `project-${project.id}`,
      id: project.id,
      title: project.title,
      description: project.description,
      techStack: project.tech,
      year: project.year,
      status: project.status,
      type: project.type,
      order: index + 1, // Use array index for ordering
    };

    try {
      await client.createOrReplace(sanityProjectDoc);
      console.log(`✅ Project "${project.title}" migrated successfully`);
    } catch (error) {
      console.error(`❌ Failed to migrate project "${project.title}":`, error);
      throw error;
    }
  }
}

async function migrateSkillsData(skills: SkillData[]): Promise<void> {
  console.log('🚀 Migrating skills data...');

  for (const skill of skills) {
    if (!validateSkillData(skill)) {
      throw new Error(
        `Invalid skill data structure for category: ${skill.category}`
      );
    }

    const sanitySkillDoc = {
      _type: 'skill',
      _id: `skill-${skill.category.toLowerCase().replace(/\s+/g, '-')}`,
      name: skill.category,
      category: skill.category,
      proficiencyLevel: skill.level,
      items: skill.items,
    };

    try {
      await client.createOrReplace(sanitySkillDoc);
      console.log(
        `✅ Skill category "${skill.category}" migrated successfully`
      );
    } catch (error) {
      console.error(
        `❌ Failed to migrate skill category "${skill.category}":`,
        error
      );
      throw error;
    }
  }
}

async function migrateContactData(contactData: ContactInfoData): Promise<void> {
  console.log('🚀 Migrating contact data...');

  if (!validateContactData(contactData)) {
    throw new Error('Invalid contact data structure');
  }

  const sanityContactDoc = {
    _type: 'contact',
    _id: 'blueprint-contact',
    email: contactData.email,
    phone: contactData.phone,
    location: contactData.location,
    socialLinks: contactData.social.map((social) => ({
      _type: 'socialLink',
      platform: social.platform,
      icon: social.icon,
      url: social.url || null,
    })),
    isAvailable: contactData.status.isAvailable,
    availabilityMessage: contactData.status.message,
    responseTime: contactData.status.responseTime,
  };

  try {
    await client.createOrReplace(sanityContactDoc);
    console.log('✅ Contact data migrated successfully');
  } catch (error) {
    console.error('❌ Failed to migrate contact data:', error);
    throw error;
  }
}

async function migrateDevEnvironmentData(
  devEnvData: DevEnvironmentData
): Promise<void> {
  console.log('🚀 Migrating development environment data...');

  if (!validateDevEnvironmentData(devEnvData)) {
    throw new Error('Invalid development environment data structure');
  }

  const sanityDevEnvDoc = {
    _type: 'devEnvironment',
    _id: 'blueprint-dev-environment',
    operatingSystem: devEnvData.system.os,
    ide: devEnvData.system.ide,
    terminal: devEnvData.system.terminal,
    versionControl: devEnvData.system.versionControl,
    packageManager: devEnvData.system.packageManager,
    tools: devEnvData.tools,
    currentFocus: devEnvData.currentFocus,
  };

  try {
    await client.createOrReplace(sanityDevEnvDoc);
    console.log('✅ Development environment data migrated successfully');
  } catch (error) {
    console.error('❌ Failed to migrate development environment data:', error);
    throw error;
  }
}

// Main migration function
async function runMigration(): Promise<void> {
  console.log('⚠️  Blueprint data migration has already been completed.\n');
  console.log(
    'The static data file (src/app/blueprint/data.ts) has been removed'
  );
  console.log(
    'as the blueprint page now uses Sanity CMS as the single source of truth.\n'
  );

  console.log(
    'If you need to update blueprint content, please use Sanity Studio.'
  );
  console.log('If you need to re-run the migration, you will need to:');
  console.log('1. Restore the static data file from version control');
  console.log('2. Run this migration script');
  console.log('3. Remove the static data file again\n');

  console.log('✅ Blueprint page is now fully managed through Sanity CMS.');
}

// Run migration if this file is executed directly
if (require.main === module) {
  runMigration();
}

export { runMigration };
