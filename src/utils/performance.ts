// Performance monitoring utilities for Sanity queries

interface QueryMetrics {
  queryName: string;
  executionTime: number;
  dataSize: number;
  timestamp: Date;
  cacheHit?: boolean;
}

class PerformanceMonitor {
  private metrics: QueryMetrics[] = [];
  private isDev = process.env.NODE_ENV === 'development';

  async measureQuery<T>(
    queryName: string,
    queryFn: () => Promise<T>,
    cacheHit = false
  ): Promise<T> {
    const startTime = performance.now();

    try {
      const result = await queryFn();
      const endTime = performance.now();
      const executionTime = endTime - startTime;

      // Calculate approximate data size
      const dataSize = JSON.stringify(result).length;

      const metric: QueryMetrics = {
        queryName,
        executionTime,
        dataSize,
        timestamp: new Date(),
        cacheHit,
      };

      this.metrics.push(metric);

      if (this.isDev) {
        console.log(`[Performance] ${queryName}:`, {
          executionTime: `${executionTime.toFixed(2)}ms`,
          dataSize: `${(dataSize / 1024).toFixed(2)}KB`,
          cacheHit,
        });

        // Warn about slow queries
        if (executionTime > 1000) {
          console.warn(
            `[Performance Warning] Slow query detected: ${queryName} took ${executionTime.toFixed(2)}ms`
          );
        }

        // Warn about large data transfers
        if (dataSize > 100 * 1024) {
          // 100KB
          console.warn(
            `[Performance Warning] Large data transfer: ${queryName} returned ${(dataSize / 1024).toFixed(2)}KB`
          );
        }
      }

      return result;
    } catch (error) {
      const endTime = performance.now();
      const executionTime = endTime - startTime;

      if (this.isDev) {
        console.error(
          `[Performance] ${queryName} failed after ${executionTime.toFixed(2)}ms:`,
          error
        );
      }

      throw error;
    }
  }

  getMetrics(): QueryMetrics[] {
    return [...this.metrics];
  }

  getAverageExecutionTime(queryName: string): number {
    const queryMetrics = this.metrics.filter((m) => m.queryName === queryName);
    if (queryMetrics.length === 0) return 0;

    const totalTime = queryMetrics.reduce((sum, m) => sum + m.executionTime, 0);
    return totalTime / queryMetrics.length;
  }

  getCacheHitRate(queryName: string): number {
    const queryMetrics = this.metrics.filter((m) => m.queryName === queryName);
    if (queryMetrics.length === 0) return 0;

    const cacheHits = queryMetrics.filter((m) => m.cacheHit).length;
    return (cacheHits / queryMetrics.length) * 100;
  }

  clearMetrics(): void {
    this.metrics = [];
  }

  logSummary(): void {
    if (!this.isDev || this.metrics.length === 0) return;

    console.group('[Performance Summary]');

    const uniqueQueries = [...new Set(this.metrics.map((m) => m.queryName))];

    uniqueQueries.forEach((queryName) => {
      const avgTime = this.getAverageExecutionTime(queryName);
      const cacheHitRate = this.getCacheHitRate(queryName);
      const queryCount = this.metrics.filter(
        (m) => m.queryName === queryName
      ).length;

      console.log(`${queryName}:`, {
        averageTime: `${avgTime.toFixed(2)}ms`,
        cacheHitRate: `${cacheHitRate.toFixed(1)}%`,
        queryCount,
      });
    });

    console.groupEnd();
  }
}

export const performanceMonitor = new PerformanceMonitor();

// Utility function to create a cached query function
export function createCachedQuery<T>(
  queryName: string,
  queryFn: () => Promise<T>,
  cacheKey: string,
  ttl: number = 300000 // 5 minutes default
): () => Promise<T> {
  const cache = new Map<string, { data: T; timestamp: number }>();

  return async (): Promise<T> => {
    const now = Date.now();
    const cached = cache.get(cacheKey);

    // Check if cache is valid
    if (cached && now - cached.timestamp < ttl) {
      return performanceMonitor.measureQuery(
        queryName,
        async () => cached.data,
        true
      );
    }

    // Fetch fresh data
    const result = await performanceMonitor.measureQuery(
      queryName,
      queryFn,
      false
    );

    // Update cache
    cache.set(cacheKey, { data: result, timestamp: now });

    return result;
  };
}
