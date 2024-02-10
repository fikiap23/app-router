import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex bg-gray-800 py-2 px-5">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex ml-auto text-white">
        <Link href={'/'}>
          <li className="mx-2 cursor-pointer">Home</li>{' '}
        </Link>
        <Link href={'/about'}>
          <li className="mx-2 cursor-pointer">About</li>{' '}
        </Link>
        <Link href={'/about/profile'}>
          {' '}
          <li className="mx-2 cursor-pointer">Profile</li>{' '}
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
