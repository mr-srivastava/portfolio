import React, { useEffect, useRef, useState } from 'react';
import { Document, Page } from 'react-pdf';
import { throttle } from 'lodash';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

const ResumeViewer = () => {
  const [initialWidth, setInitialWidth] = useState<any>(null);
  const pdfWrapper: any = useRef();

  const setPdfSize = () => {
    setInitialWidth(pdfWrapper.current.getBoundingClientRect().width - 24);
  };

  useEffect(() => {
    window.addEventListener('resize', throttle(setPdfSize, 100));
    setPdfSize();
    return () => {
      window.removeEventListener('resize', throttle(setPdfSize, 100));
    };
  }, []);
  return (
    <>
      <div className="w-full max-w-6xl bg-gray-300">
        <div
          className="flex flex-col items-center justify-center"
          ref={pdfWrapper}
        >
          <div className="flex w-full items-center justify-between bg-gray-800 px-3 py-3 text-white">
            <p className="sm:text-2xl">Resume</p>
            <a
              className="flex rounded bg-blue-600 px-2 py-2 hover:bg-blue-500"
              href="./resume.pdf"
              download
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="hidden sm:block">Download</p>
            </a>
          </div>
          <div>
            <Document
              className="mt-2.5 flex w-full items-center justify-center "
              file={'./resume.pdf'}
              options={options}
            >
              <Page pageNumber={1} width={initialWidth} />
            </Document>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeViewer;
