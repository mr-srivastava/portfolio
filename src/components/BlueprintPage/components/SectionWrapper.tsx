'use client';

import React, { Suspense } from 'react';
import ErrorBoundary from '@/components/ui/error-boundary';
import { SectionLoadingSpinner } from '@/components/ui/loading-spinner';

interface SectionWrapperProps {
  children: React.ReactNode;
  sectionName: string;
  fallbackComponent?: React.ComponentType<{
    error: Error;
    resetError: () => void;
  }>;
}

const SectionErrorFallback: React.FC<{
  error: Error;
  resetError: () => void;
  sectionName: string;
}> = ({ error, resetError, sectionName }) => (
  <div className='flex flex-col items-center justify-center p-8 my-8 bg-red-50 border border-red-200 rounded-lg'>
    <div className='text-red-600 mb-4'>
      <svg
        className='w-8 h-8'
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
    <h3 className='text-lg font-semibold text-red-800 mb-2'>
      Failed to load {sectionName} section
    </h3>
    <p className='text-red-600 text-center mb-4 max-w-md text-sm'>
      {error.message ||
        `An error occurred while rendering the ${sectionName} section.`}
    </p>
    <button
      onClick={resetError}
      className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm'
    >
      Retry {sectionName}
    </button>
  </div>
);

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  sectionName,
  fallbackComponent,
}) => {
  const CustomFallback =
    fallbackComponent ||
    ((props: { error: Error; resetError: () => void }) => (
      <SectionErrorFallback {...props} sectionName={sectionName} />
    ));

  return (
    <ErrorBoundary
      fallback={CustomFallback}
      onError={(error, errorInfo) => {
        console.error(`Error in ${sectionName} section:`, error, errorInfo);
        // In production, you might want to send this to an error reporting service
      }}
    >
      <Suspense fallback={<SectionLoadingSpinner sectionName={sectionName} />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default SectionWrapper;
