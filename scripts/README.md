# Blueprint Data Migration Scripts

⚠️ **Migration Complete**: The blueprint data migration has been completed and the static data file has been removed. The blueprint page now uses Sanity CMS as the single source of truth.

This directory contains scripts that were used to migrate the blueprint data from static files to Sanity CMS.

## Available Scripts

- `npm run setup:migration` - Check environment and schema setup
- `npm run validate:blueprint` - ⚠️ No longer available (static data removed)
- `npm run test:migration` - ⚠️ No longer available (static data removed)
- `npm run test:connection` - Test Sanity connection and permissions
- `npm run migrate:blueprint` - ⚠️ Migration completed (static data removed)

## Dependencies

The migration scripts require the following packages:

- `@sanity/client` - For direct Sanity API operations
- `tsx` - For TypeScript execution
- `dotenv` - For loading environment variables from .env.local

## Prerequisites

1. **Sanity Project Setup**: Ensure your Sanity project is configured with the required schemas:
   - `blueprintHero`
   - `project`
   - `skill` (extended)
   - `contact`
   - `devEnvironment`

2. **Environment Variables**: Set up the following environment variables in your `.env.local` file:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=your_dataset_name
   NEXT_PUBLIC_SANITY_API_VERSION=2025-04-06
   SANITY_API_TOKEN=your_write_token
   ```

3. **Sanity API Token**: You need a write token from your Sanity project:
   - Go to your Sanity project dashboard
   - Navigate to API → Tokens
   - Create a new token with "Editor" permissions
   - Add it to your `.env.local` as `SANITY_API_TOKEN`

## Installation

Install the required dependencies:

```bash
npm install
```

## Usage

Follow this workflow for a safe migration:

```bash
# 1. Check setup and environment
npm run setup:migration

# 2. Validate existing data structure
npm run validate:blueprint

# 3. Test migration transformations (dry run)
npm run test:migration

# 4. Test Sanity connection and permissions
npm run test:connection

# 5. Run the actual migration
npm run migrate:blueprint
```

## What the Script Does

The migration script performs the following operations:

1. **Validates Environment**: Checks that all required environment variables are set
2. **Tests Connection**: Verifies connectivity to your Sanity project
3. **Migrates Hero Data**: Creates/updates the blueprint hero section
4. **Migrates Projects**: Creates/updates all project entries with proper ordering
5. **Migrates Skills**: Creates/updates skill categories with proficiency levels
6. **Migrates Contact Info**: Creates/updates contact information and availability status
7. **Migrates Dev Environment**: Creates/updates development environment details

## Data Validation

The script includes comprehensive validation for each data type:

- **Hero Data**: Validates name, role, status, and tech stack items
- **Project Data**: Validates required fields and status values
- **Skill Data**: Validates categories, items, and proficiency levels (0-100)
- **Contact Data**: Validates email, social links, and availability status
- **Dev Environment**: Validates system info, tools, and current focus areas

## Error Handling

- The script will stop and report errors if validation fails
- Network errors are caught and reported with context
- Each migration step is logged for debugging purposes

## Migration Status

✅ **Migration Completed**:

1. ✅ Data has been migrated to Sanity Studio
2. ✅ Blueprint page now loads data from Sanity CMS
3. ✅ Static data file (`src/app/blueprint/data.ts`) has been removed
4. ✅ Components now use Sanity data exclusively

The blueprint page is now fully integrated with Sanity CMS and no longer depends on static data files.

## Troubleshooting

### Common Issues

1. **Missing API Token**: Ensure `SANITY_API_TOKEN` is set with write permissions
2. **Schema Mismatch**: Verify all required schemas are deployed to your Sanity project
3. **Network Issues**: Check your internet connection and Sanity project status
4. **Validation Errors**: Review the static data structure for any missing required fields

### Re-running the Migration

The script uses `createOrReplace`, so it's safe to run multiple times. It will update existing documents with the same `_id`.
