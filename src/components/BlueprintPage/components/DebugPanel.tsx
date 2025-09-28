'use client';

import { useState } from 'react';

interface DebugPanelProps {
  dataSource: 'sanity' | 'fallback';
  validationErrors?: string[];
  validationWarnings?: string[];
  rawData?: any;
}

export default function DebugPanel({
  dataSource,
  validationErrors = [],
  validationWarnings = [],
  rawData,
}: DebugPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showRawData, setShowRawData] = useState(false);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const hasIssues =
    validationErrors.length > 0 || validationWarnings.length > 0;

  return (
    <div className='fixed bottom-4 right-4 z-50'>
      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          hasIssues ? 'bg-red-500 text-white hover:bg-red-600'
          : dataSource === 'sanity' ?
            'bg-green-500 text-white hover:bg-green-600'
          : 'bg-yellow-500 text-black hover:bg-yellow-600'
        }`}
      >
        {dataSource === 'sanity' ? '✓ Sanity' : '⚠ Fallback'}
        {hasIssues &&
          ` (${validationErrors.length + validationWarnings.length})`}
      </button>

      {/* Debug Panel */}
      {isExpanded && (
        <div className='absolute bottom-12 right-0 w-96 max-h-96 overflow-auto bg-gray-900 text-white rounded-lg shadow-xl border border-gray-700'>
          <div className='p-4'>
            <div className='flex justify-between items-center mb-3'>
              <h3 className='font-bold text-lg'>Blueprint Debug</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className='text-gray-400 hover:text-white'
              >
                ✕
              </button>
            </div>

            {/* Data Source Status */}
            <div className='mb-3'>
              <div className='flex items-center gap-2 mb-1'>
                <span className='font-medium'>Data Source:</span>
                <span
                  className={`px-2 py-1 rounded text-xs ${
                    dataSource === 'sanity' ?
                      'bg-green-600 text-white'
                    : 'bg-yellow-600 text-black'
                  }`}
                >
                  {dataSource.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Validation Errors */}
            {validationErrors.length > 0 && (
              <div className='mb-3'>
                <h4 className='font-medium text-red-400 mb-1'>Errors:</h4>
                <ul className='text-sm space-y-1'>
                  {validationErrors.map((error, index) => (
                    <li key={index} className='text-red-300'>
                      • {error}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Validation Warnings */}
            {validationWarnings.length > 0 && (
              <div className='mb-3'>
                <h4 className='font-medium text-yellow-400 mb-1'>Warnings:</h4>
                <ul className='text-sm space-y-1'>
                  {validationWarnings.map((warning, index) => (
                    <li key={index} className='text-yellow-300'>
                      • {warning}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Raw Data Toggle */}
            {rawData && (
              <div className='mb-3'>
                <button
                  onClick={() => setShowRawData(!showRawData)}
                  className='text-blue-400 hover:text-blue-300 text-sm'
                >
                  {showRawData ? 'Hide' : 'Show'} Raw Data
                </button>
                {showRawData && (
                  <pre className='mt-2 p-2 bg-gray-800 rounded text-xs overflow-auto max-h-40'>
                    {JSON.stringify(rawData, null, 2)}
                  </pre>
                )}
              </div>
            )}

            {/* Instructions */}
            <div className='text-xs text-gray-400 border-t border-gray-700 pt-2'>
              <p className='mb-1'>
                Set <code>BLUEPRINT_STRICT_MODE=true</code> to disable fallbacks
              </p>
              <p>Check console for detailed logs</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
