import { getRsvpsForDashboard } from '@/utils/rsvps'
import { getCurrentUser } from '@/utils/users'
import { Chip } from '@heroui/react'
import Link from 'next/link'

const statusColors: {
  [key: string]:
    | 'warning'
    | 'success'
    | 'primary'
    | 'default'
    | 'danger'
    | 'secondary'
} = {
  going: 'success',
  maybe: 'warning',
  'not-going': 'danger',
}
const RsvpsSlot = async () => {
  const user = await getCurrentUser()
  const data = await getRsvpsForDashboard(user.id)

  return (
    <div className="w-full p-4 flex justify-center">
      <div className="w-full">
        <h2 className="text-center font-bold text-xl">{`RSVPs`}</h2>
        <div className="grid border my-8 max-h-[300px] overflow-y-scroll">
          {data.map(({ rsvps, events, attendees }) => (
            <div key={rsvps?.id} className="col p-3 flex gap-3">
              <span>{attendees.name}</span>
              <span>
                <Chip
                  size="sm"
                  variant="flat"
                  color={
                    statusColors[rsvps.status]
                      ? statusColors[rsvps.status]
                      : 'primary'
                  }
                >
                  {rsvps?.status}
                </Chip>
              </span>
              <span>
                <Link href={`/dashboard/events/${events?.id}`}>
                  <Chip size="sm" variant="faded">
                    {events?.name}
                  </Chip>
                </Link>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RsvpsSlot
