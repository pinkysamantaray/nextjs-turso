'use client'
import Shell from '@/components/Shell'
import { usePathname } from 'next/navigation'

import { ReactNode } from 'react'

interface DashboardProps {
  children: ReactNode
  rsvps: ReactNode
  events: ReactNode
}

const Dashboard = ({ children, rsvps, events }: DashboardProps) => {
  const path = usePathname()

  return (
    <Shell>
      {path === '/dashboard' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid gap-5">
            <div className="col">{children}</div>
            <div className="col p-3 max-h-[300px]">{rsvps}</div>
          </div>

          <div className="col">{events}</div>
        </div>
      ) : (
        <div className="w-full h-full overflow-y-auto">{children}</div>
      )}
    </Shell>
  )
}

export default Dashboard
