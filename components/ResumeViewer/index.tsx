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
            <p className="text-2xl">Resume</p>
            <button className="rounded bg-blue-600 px-2 py-2">Download</button>
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
