'use client';

import React, { Suspense } from 'react';
import ErrorBoundary from '@/components/ui/error-boundary';
import { PageLoadingSpinner } from '@/components/ui/loading-spinner';
import BlueprintPageClient from './BlueprintPageClient';
import PerformanceDashboard from '@/components/dev/PerformanceDashboard';
import type { BlueprintPageData } from '@/app/blueprint/types';

interface BlueprintPageWrapperProps {
  pageData: BlueprintPageData;
  dataSource: 'sanity';
  validationErrors: string[];
  validationWarnings: string[];
  rawData: any;
}

const BlueprintPageErrorFallback: React.FC<{
  error: Error;
  resetError: () => void;
}> = ({ error, resetError }) => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center max-w-md'>
      <div className='text-red-600 mb-4'>
        <svg
          className='w-16 h-16 mx-auto'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
          />
        </svg>
      </div>
      <h1 className='text-2xl font-bold text-red-800 mb-4'>
        Blueprint Page Error
      </h1>
      <p className='text-red-600 mb-6'>
        {error.message ||
          'Failed to load the blueprint page. This might be due to a data fetching error or configuration issue.'}
      </p>
      <button
        onClick={resetError}
        className='px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors'
      >
        Reload Page
      </button>
    </div>
  </div>
);

const BlueprintPageWrapper: React.FC<BlueprintPageWrapperProps> = ({
  pageData,
  dataSource,
  validationErrors,
  validationWarnings,
  rawData,
}) => {
  const handleError = (error: Error, errorInfo: React.ErrorInfo) => {
    console.error('Blueprint page error:', error, errorInfo);
    // In production, send to error reporting service
    // Example: errorReportingService.captureException(error, { extra: errorInfo });
  };

  return (
    <ErrorBoundary onError={handleError} fallback={BlueprintPageErrorFallback}>
      <Suspense fallback={<PageLoadingSpinner />}>
        <BlueprintPageClient
          pageData={pageData}
          dataSource={dataSource}
          validationErrors={validationErrors}
          validationWarnings={validationWarnings}
          rawData={rawData}
        />
        <PerformanceDashboard />
      </Suspense>
    </ErrorBoundary>
  );
};

export default BlueprintPageWrapper;
