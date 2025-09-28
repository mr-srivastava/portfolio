import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled for ISR and tag-based revalidation
  perspective: 'published', // Only fetch published content for better caching
  stega: {
    enabled: false, // Disable visual editing for better performance
  },
});

// Performance monitoring client for development
export const clientWithMetrics = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
  stega: {
    enabled: false,
  },
});

// Preview client for draft content
export const previewClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'previewDrafts', // Fetch draft content including unpublished changes
  token: process.env.SANITY_API_READ_TOKEN, // Required for draft access
  stega: {
    enabled: false,
  },
});

// Function to get the appropriate client based on preview mode
export function getClient(preview: boolean = false) {
  return preview ? previewClient : client;
}
