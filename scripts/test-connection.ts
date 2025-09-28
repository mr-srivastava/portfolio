#!/usr/bin/env tsx

import { config } from 'dotenv';
import { createClient } from '@sanity/client';

// Load environment variables from .env.local
config({ path: '.env.local', quiet: true });

// Create a client with the loaded environment variables
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-06',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function testConnection(): Promise<void> {
  console.log('🔍 Testing Sanity connection...\n');

  // Check if required environment variables are set
  const requiredEnvs = [
    'NEXT_PUBLIC_SANITY_PROJECT_ID',
    'NEXT_PUBLIC_SANITY_DATASET',
    'SANITY_API_TOKEN',
  ];

  console.log('📋 Environment Variables:');
  requiredEnvs.forEach((envVar) => {
    const value = process.env[envVar];
    if (value) {
      console.log(
        `✅ ${envVar}: ${envVar === 'SANITY_API_TOKEN' ? '***' + value.slice(-4) : value}`
      );
    } else {
      console.log(`❌ ${envVar}: Not set`);
    }
  });

  try {
    // Test basic connection
    console.log('\n🔌 Testing basic connection...');
    const result = await client.fetch('*[_type == "blueprintHero"][0]');
    console.log('✅ Connection successful!');

    if (result) {
      console.log('📄 Found existing hero data in Sanity');
    } else {
      console.log(
        '📄 No hero data found in Sanity (this is expected before migration)'
      );
    }

    // Test write permissions
    console.log('\n🔐 Testing write permissions...');
    const testDoc = {
      _type: 'blueprintHero',
      _id: 'connection-test-' + Date.now(),
      firstName: 'Test',
      lastName: 'Connection',
    };

    await client.create(testDoc);
    console.log('✅ Write permissions confirmed');

    // Clean up test document
    await client.delete(testDoc._id);
    console.log('🧹 Test document cleaned up');

    console.log('\n🎉 Sanity connection test successful!');
    console.log('🚀 You can now run the migration: npm run migrate:blueprint');
  } catch (error) {
    console.error('\n❌ Connection test failed:', error);

    if (error instanceof Error) {
      if (error.message.includes('Unauthorized')) {
        console.log('\n💡 Troubleshooting:');
        console.log('• Check that SANITY_API_TOKEN is correct');
        console.log('• Ensure the token has write permissions');
        console.log('• Verify the token is for the correct project');
      } else if (error.message.includes('not found')) {
        console.log('\n💡 Troubleshooting:');
        console.log('• Check that NEXT_PUBLIC_SANITY_PROJECT_ID is correct');
        console.log('• Verify the dataset name is correct');
      }
    }

    process.exit(1);
  }
}

// Run connection test if this file is executed directly
if (require.main === module) {
  testConnection();
}

export { testConnection };
