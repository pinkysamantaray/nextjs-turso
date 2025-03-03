'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/images/pardy.png'
import { Button } from '@heroui/button'
import { signout } from '@/actions/signout'

const links = [
  { route: '/dashboard', name: 'Home' },
  { route: '/dashboard/events', name: 'Events' },
  { route: '/dashboard/guests', name: 'Guests' },
  { route: '/dashboard/activity', name: 'Activity' },
  { route: '/dashboard/settings', name: 'Settings' },
]

const isActive = (path: string, route: string) => {
  if (route === '/dashboard') {
    return path === '/dashboard'
  } else {
    return path.includes(route)
  }
}
const Side = () => {
  const path = usePathname()
  const activeClass =
    'bg-primary-500 hover:bg-primary-500 text-white text-center'

  return (
    <div className="w-full h-full px-3 relative">
      <div className="mb-12">
        <figure className="w-full p-4">
          <Image className="logo" src={Logo} alt="pardy" />
        </figure>
      </div>
      <div>
        {links.map((link) => (
          <div className="w-full" key={link.route}>
            <Link href={link.route}>
              <div
                className={`w-full h-full py-2 px-2 hover:bg-default-100 rounded-lg ${
                  isActive(path, link.route) ? activeClass : ''
                }`}
              >
                {link.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 w-full left-0 p-4">
        <Button
          onPress={() => signout()}
          fullWidth
          color="primary"
          variant="ghost"
        >
          Sign Out
        </Button>
      </div>
    </div>
  )
}

export default Side
