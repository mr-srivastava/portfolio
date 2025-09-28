#!/usr/bin/env tsx

import { config } from 'dotenv';
import { existsSync } from 'fs';
import { join } from 'path';

// Load environment variables from .env.local
config({ path: '.env.local', quiet: true });

function checkEnvironmentVariables(): { valid: boolean; missing: string[] } {
  const required = [
    'NEXT_PUBLIC_SANITY_PROJECT_ID',
    'NEXT_PUBLIC_SANITY_DATASET',
    'SANITY_API_TOKEN',
  ];

  const missing: string[] = [];

  required.forEach((envVar) => {
    if (!process.env[envVar]) {
      missing.push(envVar);
    }
  });

  return { valid: missing.length === 0, missing };
}

function checkEnvFile(): boolean {
  const envPath = join(process.cwd(), '.env.local');
  return existsSync(envPath);
}

function displayEnvTemplate(): void {
  console.log('\n📝 Add these variables to your .env.local file:');
  console.log('='.repeat(50));
  console.log(`# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-04-06
SANITY_API_TOKEN=your_write_token_here`);
  console.log('='.repeat(50));
}

function checkSanitySchemas(): void {
  console.log('\n🔍 Checking Sanity schema files...');

  const schemaFiles = [
    'src/sanity/schemaTypes/blueprintHero.ts',
    'src/sanity/schemaTypes/project.ts',
    'src/sanity/schemaTypes/contact.ts',
    'src/sanity/schemaTypes/devEnvironment.ts',
    'src/sanity/schemaTypes/skill.ts',
  ];

  let allSchemasExist = true;

  schemaFiles.forEach((schemaFile) => {
    if (existsSync(schemaFile)) {
      console.log(`✅ ${schemaFile}`);
    } else {
      console.log(`❌ ${schemaFile} - Missing!`);
      allSchemasExist = false;
    }
  });

  if (!allSchemasExist) {
    console.log('\n⚠️  Some required schema files are missing.');
    console.log(
      '📝 Make sure you have completed the schema creation tasks first.'
    );
  }
}

function displayInstructions(): void {
  console.log('\n📋 Migration Setup Instructions:');
  console.log('='.repeat(50));
  console.log('1. 🏗️  Ensure all Sanity schemas are created and deployed');
  console.log('2. 🔑 Get a write token from your Sanity project dashboard');
  console.log('3. 📝 Add environment variables to .env.local');
  console.log('4. ✅ Run validation: npm run validate:blueprint');
  console.log('5. 🧪 Test migration: npm run test:migration');
  console.log('6. 🚀 Run migration: npm run migrate:blueprint');
  console.log('='.repeat(50));

  console.log('\n🔗 Helpful Links:');
  console.log('• Sanity Dashboard: https://sanity.io/manage');
  console.log('• API Tokens: https://sanity.io/manage/personal/tokens');
  console.log(
    '• Schema Documentation: https://www.sanity.io/docs/schema-types'
  );
}

function runSetupCheck(): void {
  console.log('🔧 Blueprint Migration Setup Check\n');

  // Check .env.local file
  if (checkEnvFile()) {
    console.log('✅ .env.local file exists');
  } else {
    console.log('❌ .env.local file not found');
    displayEnvTemplate();
  }

  // Check environment variables
  const envCheck = checkEnvironmentVariables();
  if (envCheck.valid) {
    console.log('✅ All required environment variables are set');
  } else {
    console.log('❌ Missing environment variables:');
    envCheck.missing.forEach((envVar) => {
      console.log(`   - ${envVar}`);
    });
    if (!checkEnvFile()) {
      displayEnvTemplate();
    }
  }

  // Check schema files
  checkSanitySchemas();

  // Display instructions
  displayInstructions();

  // Final status
  console.log('\n🎯 Next Steps:');
  if (!envCheck.valid) {
    console.log('1. ⚠️  Set up missing environment variables');
    console.log('2. 🔄 Run this setup check again');
  } else {
    console.log('1. ✅ Run validation: npm run validate:blueprint');
    console.log('2. 🧪 Test migration: npm run test:migration');
    console.log('3. 🚀 Run migration: npm run migrate:blueprint');
  }
}

// Run setup check if this file is executed directly
if (require.main === module) {
  runSetupCheck();
}

export { runSetupCheck };
