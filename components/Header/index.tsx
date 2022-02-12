import React from 'react'
import Link from '../Link'
import siteMetadata from '@Data/siteMetadata'
import headerNavLinks from '@Data/headerNavLinks'

const Header = () => {
  return (
    <nav className="w-full">
      <div className="header-wrapper flex justify-between">
        <div className="logo cursor-pointer text-lg font-bold">
          {siteMetadata.headerTitle}
        </div>
        <ul className="nav-links flex space-x-4">
          {headerNavLinks.map((l) => (
            <Link key={l.href} className="cursor-pointer" href={l.href}>
              {l.title}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Header
