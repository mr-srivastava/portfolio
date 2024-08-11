import React from 'react';
import Image from "next/image";
import CoderImg from './coder.svg';
import Link from 'next/link';
const AuthorCard = () => {
  return (
    <div className="my-2 grid rounded-lg px-4 py-4 shadow-lg md:grid-cols-2">
      <Image
        className="flex-1"
        src={CoderImg}
        width={600}
        height={400}
        alt='Coder Image'
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />
      <div className="flex-initial md:ml-6">
        <div className="text-left text-gray-800">
          <div>
            <h1 className="mt-6 text-3xl font-extrabold lg:mt-0">
              &lt;tag&gt;
            </h1>
          </div>
          <div>
            <div className="p-2.5 lg:ml-12">
              <div className="text-3xl font-bold md:text-2xl">
                I'm always in <span className="text-blue-600">BETA.</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">&lt;/tag&gt;</h1>
          </div>
        </div>
        <div className="mt-4 text-left text-lg">
          I'm a full-stack developer and an data analytics enthusiast.
          Everything around tech intrigues me and everything with aesthics
          please me.
        </div>
        <div>
          <Link href="/projects">
            <div
              style={{
                width: 'fit-content',
                userSelect: 'none',
              }}
              className="btn mt-12 transform rounded-full bg-blue-600 py-2 px-4 font-bold text-white shadow-sm transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Project's showcase
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
