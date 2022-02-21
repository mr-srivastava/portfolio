import HomeLayout from '@Layouts/HomeLayout';
import React, { useRef } from 'react';
import { Document, Page } from 'react-pdf';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

function Blog() {
  return (
    <HomeLayout>
      <div className="w-full max-w-6xl bg-gray-300">
        <div className="flex flex-col items-center justify-center">
          <div className="flex w-full items-center justify-between bg-gray-800 px-3 py-3 text-white">
            <p className="text-2xl">Resume</p>
            <button className="rounded bg-blue-600 px-2 py-2">Download</button>
          </div>
          <Document
            className="mt-2.5 flex w-full items-center justify-center"
            file={'./resume.pdf'}
            options={options}
          >
            <Page pageNumber={1} />
          </Document>
        </div>
      </div>
    </HomeLayout>
  );
}

export default Blog;
