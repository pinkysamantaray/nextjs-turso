'use client'
import Shell from '@/components/Shell'
import { usePathname } from 'next/navigation'

const Dashboard = ({ children, rsvps, events }) => {
  const path = usePathname()

  return (
    <Shell>
      {path === '/dashboard' ? (
        <div className="flex w-full h-full">
          <div className="w-2/3 border-r border-default-50">{rsvps}</div>
          <div className="w-1/3 h-[calc(100vh-65px)] flex flex-col border-l-4 border-stone-200">
            <div className="border-b border-default-50 w-full h-1/2">
              {events}
            </div>
            <div className="w-full h-1/2 grid">{children}</div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full">{children}</div>
      )}
    </Shell>
  )
}

export default Dashboard
