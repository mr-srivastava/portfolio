import React from 'react';
import Image from 'next/image';

const GithubStats = () => {
  return (
    <div className="my-2 rounded-lg px-4 py-4 shadow-lg">
      <h1 className="text-2xl font-bold md:text-3xl">Github Statistics</h1>
      <div className="mt-4 grid gap-2 md:grid-cols-2">
        <Image
          src={
            'https://github-readme-stats.vercel.app/api/top-langs/?username=mr-srivastava&theme=light&hide_langs_below=1&layout=compact'
          }
          alt="Top Languages"
          width={200}
          height={200}
        />
        <Image
          src={
            'https://github-readme-stats.vercel.app/api?username=mr-srivastava&show_icons=true&theme=light&line_height=27'
          }
          alt="Github stats"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default GithubStats;
