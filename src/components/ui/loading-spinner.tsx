import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  text?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className = '',
  text,
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-gray-300 border-t-blue-600`}
        role='status'
        aria-label='Loading'
      >
        <span className='sr-only'>Loading...</span>
      </div>
      {text && (
        <p className='mt-2 text-sm text-gray-600 animate-pulse'>{text}</p>
      )}
    </div>
  );
};

// Section-specific loading components
export const SectionLoadingSpinner: React.FC<{ sectionName?: string }> = ({
  sectionName = 'content',
}) => (
  <div className='flex items-center justify-center py-16'>
    <LoadingSpinner
      size='lg'
      text={`Loading ${sectionName}...`}
      className='text-center'
    />
  </div>
);

// Page-level loading component
export const PageLoadingSpinner: React.FC = () => (
  <div className='min-h-screen flex items-center justify-center bg-gray-50'>
    <div className='text-center'>
      <LoadingSpinner
        size='xl'
        text='Loading blueprint page...'
        className='mb-4'
      />
      <div className='space-y-2'>
        <div className='h-2 bg-gray-200 rounded w-48 animate-pulse'></div>
        <div className='h-2 bg-gray-200 rounded w-32 animate-pulse'></div>
        <div className='h-2 bg-gray-200 rounded w-40 animate-pulse'></div>
      </div>
    </div>
  </div>
);

export default LoadingSpinner;
