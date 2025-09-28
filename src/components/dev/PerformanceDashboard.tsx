'use client';

import { useEffect, useState } from 'react';
import { performanceMonitor } from '@/utils/performance';

interface QueryMetric {
  queryName: string;
  executionTime: number;
  dataSize: number;
  timestamp: Date;
  cacheHit?: boolean;
}

export default function PerformanceDashboard() {
  const [metrics, setMetrics] = useState<QueryMetric[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    const interval = setInterval(() => {
      setMetrics(performanceMonitor.getMetrics());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (process.env.NODE_ENV !== 'development' || !isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className='fixed bottom-4 right-4 bg-blue-600 text-white px-3 py-1 rounded text-xs z-50 hover:bg-blue-700'
        style={{
          display: process.env.NODE_ENV === 'development' ? 'block' : 'none',
        }}
      >
        Performance
      </button>
    );
  }

  const uniqueQueries = [...new Set(metrics.map((m) => m.queryName))];

  return (
    <div className='fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-md z-50'>
      <div className='flex justify-between items-center mb-3'>
        <h3 className='font-semibold text-sm'>Performance Metrics</h3>
        <div className='flex gap-2'>
          <button
            onClick={() => performanceMonitor.clearMetrics()}
            className='text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200'
          >
            Clear
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className='text-xs bg-red-100 px-2 py-1 rounded hover:bg-red-200'
          >
            ×
          </button>
        </div>
      </div>

      <div className='space-y-2 max-h-64 overflow-y-auto'>
        {uniqueQueries.map((queryName) => {
          const queryMetrics = metrics.filter((m) => m.queryName === queryName);
          const avgTime =
            queryMetrics.reduce((sum, m) => sum + m.executionTime, 0) /
            queryMetrics.length;
          const cacheHits = queryMetrics.filter((m) => m.cacheHit).length;
          const cacheHitRate = (cacheHits / queryMetrics.length) * 100;
          const avgDataSize =
            queryMetrics.reduce((sum, m) => sum + m.dataSize, 0) /
            queryMetrics.length;

          return (
            <div key={queryName} className='border-b border-gray-100 pb-2'>
              <div className='text-xs font-medium text-gray-800'>
                {queryName}
              </div>
              <div className='text-xs text-gray-600 space-y-1'>
                <div>Avg Time: {avgTime.toFixed(1)}ms</div>
                <div>Cache Hit Rate: {cacheHitRate.toFixed(1)}%</div>
                <div>Avg Size: {(avgDataSize / 1024).toFixed(1)}KB</div>
                <div>Executions: {queryMetrics.length}</div>
              </div>
            </div>
          );
        })}

        {metrics.length === 0 && (
          <div className='text-xs text-gray-500 text-center py-4'>
            No metrics recorded yet
          </div>
        )}
      </div>

      <div className='mt-3 pt-2 border-t border-gray-100'>
        <div className='text-xs text-gray-500'>
          Total Queries: {metrics.length}
        </div>
      </div>
    </div>
  );
}
