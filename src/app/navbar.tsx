'use client'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const router = useRouter()
  // console.log(pathname)
  return (
    <nav className="flex bg-gray-800 py-2 px-5 justify-between items-center">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5 text-white">
          <Link href={'/'}>
            <li
              className={`mx-2 cursor-pointer ${
                pathname === '/' && 'font-bold text-blue-200'
              }`}
            >
              Home
            </li>{' '}
          </Link>
          <Link href={'/about'}>
            <li
              className={`mx-2 cursor-pointer ${
                pathname === '/about' && 'font-bold text-blue-200'
              }`}
            >
              About
            </li>{' '}
          </Link>
          <Link href={'/about/profile'}>
            {' '}
            <li
              className={`mx-2 cursor-pointer ${
                pathname === '/about/profile' && 'font-bold text-blue-200'
              }`}
            >
              Profile
            </li>{' '}
          </Link>
        </ul>
      </div>
      <div className="text-white flex gap-2">
        <button
          onClick={() => router.push('/login')}
          className="cursor-pointer py-1 px-3 bg-blue-500 rounded-md"
        >
          Login
        </button>
        <button
          onClick={() => router.push('/register')}
          className="cursor-pointer py-1 px-3 bg-green-500 rounded-md"
        >
          Register
        </button>
      </div>
    </nav>
  )
}

export default Navbar
