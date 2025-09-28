export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-04-06';

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
);

// Preview-related environment variables
export const previewSecret = process.env.SANITY_PREVIEW_SECRET;
export const readToken = process.env.SANITY_API_READ_TOKEN;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}

// Utility function to generate preview URLs
export function generatePreviewUrl(slug: string = '/blueprint'): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const secret = previewSecret;

  if (!secret) {
    throw new Error('SANITY_PREVIEW_SECRET is not configured');
  }

  return `${baseUrl}/api/preview?secret=${secret}&slug=${slug}`;
}
