import Link from 'next/link'
import React from 'react'
import siteMetadata from '@Data/siteMetadata'

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div>
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="ml-2 h-4" />
        </a>
      </div>
      <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>{siteMetadata.author}</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/">{siteMetadata.title}</Link>
      </div>
    </div>
  )
}

export default Footer
