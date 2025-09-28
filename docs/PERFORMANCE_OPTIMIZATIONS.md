# Blueprint Page Performance Optimizations

This document outlines the performance optimizations implemented for the blueprint page to ensure fast loading times and efficient data fetching.

## Overview

The blueprint page has been optimized with multiple caching layers, query optimizations, and performance monitoring to provide the best user experience while maintaining data freshness.

## Implemented Optimizations

### 1. Next.js Revalidation Tags

- **Implementation**: Added revalidation tags to Sanity queries
- **Tags Used**:
  - `blueprint` - General blueprint page data
  - `blueprint-hero` - Hero section data
  - `blueprint-projects` - Projects data
  - `blueprint-skills` - Skills/tech stack data
  - `blueprint-contact` - Contact information
  - `blueprint-dev-env` - Development environment data

- **Benefits**: Granular cache invalidation when specific content types change

### 2. Query Optimization

- **Field Limiting**: Queries only fetch essential fields to minimize data transfer
- **Result Limiting**: Added limits to array fields (e.g., max 20 projects, 50 skills)
- **Text Truncation**: Limited text field lengths to prevent large payloads
- **Single Query**: Unified query fetches all data in one request to reduce round trips

### 3. Caching Strategy

#### Page-Level Caching

- **Revalidate**: 5 minutes (300 seconds)
- **Cache Headers**:
  - `s-maxage=300` - CDN cache for 5 minutes
  - `stale-while-revalidate=600` - Serve stale content while revalidating

#### Data-Level Caching

- **Next.js unstable_cache**: Caches transformed data with automatic invalidation
- **Cache Keys**: Based on content type and update timestamps
- **TTL**: 5 minutes with tag-based invalidation

### 4. Performance Monitoring

#### Query Metrics

- **Execution Time**: Tracks query performance
- **Data Size**: Monitors payload sizes
- **Cache Hit Rate**: Measures caching effectiveness
- **Query Count**: Tracks frequency of queries

#### Development Dashboard

- Real-time performance metrics display
- Query execution time alerts (>1000ms)
- Large payload warnings (>100KB)
- Cache hit rate monitoring

### 5. Automatic Cache Invalidation

#### Sanity Webhooks

- **Endpoint**: `/api/sanity/webhook`
- **Signature Verification**: HMAC SHA-256 validation
- **Selective Invalidation**: Only invalidates relevant cache tags based on document type

#### Manual Revalidation

- **Endpoint**: `/api/revalidate/blueprint`
- **Secret Protection**: Requires `REVALIDATION_SECRET` environment variable
- **Selective Tags**: Can revalidate specific content types

## Configuration

### Environment Variables

```bash
# Required for webhook signature verification
SANITY_WEBHOOK_SECRET=your_webhook_secret

# Required for manual cache revalidation
REVALIDATION_SECRET=your_revalidation_secret

# Optional: Enable strict validation in development
BLUEPRINT_STRICT_MODE=true
```

### Sanity Webhook Setup

1. Go to your Sanity project settings
2. Add a new webhook with URL: `https://yourdomain.com/api/sanity/webhook`
3. Set the secret to match `SANITY_WEBHOOK_SECRET`
4. Configure triggers for: `blueprintHero`, `project`, `skill`, `contact`, `devEnvironment`

## Performance Targets

### Loading Times

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s

### Data Transfer

- **Initial Page Load**: < 100KB compressed
- **Sanity Query Response**: < 50KB
- **Cache Hit Rate**: > 80%

### Query Performance

- **Average Query Time**: < 500ms
- **95th Percentile**: < 1000ms
- **Cache Miss Penalty**: < 2x cached response time

## Monitoring and Alerts

### Development Monitoring

- Performance dashboard shows real-time metrics
- Console warnings for slow queries (>1000ms)
- Console warnings for large payloads (>100KB)
- Cache hit rate tracking

### Production Monitoring

- Server-side performance logging
- Error tracking for failed queries
- Cache invalidation logging
- Webhook processing logs

## Best Practices

### Content Management

1. Keep project descriptions under 200 characters
2. Limit tech stack items to essential technologies
3. Use optimized images for better performance
4. Regularly review and archive old projects

### Development

1. Monitor the performance dashboard during development
2. Test cache invalidation after content changes
3. Verify webhook functionality in staging
4. Profile query performance with different data volumes

### Deployment

1. Set up webhook endpoints before going live
2. Configure CDN caching headers appropriately
3. Monitor cache hit rates and adjust TTL if needed
4. Set up alerts for performance degradation

## Troubleshooting

### Common Issues

#### Slow Loading Times

1. Check performance dashboard for slow queries
2. Verify cache hit rates are above 80%
3. Ensure CDN is properly configured
4. Review Sanity query optimization

#### Cache Not Invalidating

1. Verify webhook secret configuration
2. Check webhook endpoint logs
3. Test manual revalidation endpoint
4. Ensure revalidation tags are correctly set

#### High Data Transfer

1. Review query field selection
2. Check for unnecessary array expansions
3. Optimize image sizes and formats
4. Consider pagination for large datasets

### Debug Commands

```bash
# Test webhook endpoint
curl -X GET https://yourdomain.com/api/sanity/webhook

# Test manual revalidation
curl -X POST https://yourdomain.com/api/revalidate/blueprint \
  -H "Content-Type: application/json" \
  -d '{"secret":"your_secret","tags":["blueprint"]}'

# Check performance in development
# Open browser dev tools and look for performance logs
```

## Future Optimizations

### Planned Improvements

1. **Service Worker Caching**: Implement offline-first strategy
2. **Image Optimization**: Add next/image optimization for project images
3. **Prefetching**: Preload critical resources
4. **Bundle Splitting**: Code splitting for better initial load times
5. **Edge Caching**: Implement edge-side includes for dynamic content

### Monitoring Enhancements

1. **Real User Monitoring**: Track actual user performance metrics
2. **Core Web Vitals**: Monitor and optimize for Google's performance metrics
3. **Error Tracking**: Implement comprehensive error monitoring
4. **Performance Budgets**: Set and enforce performance budgets in CI/CD
