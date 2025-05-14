import { getEventsForDashboard } from '@/utils/events'
import { getCurrentUser } from '@/utils/users'
import { Chip } from '@heroui/chip'
import Link from 'next/link'

enum StatusColors {
  draft = 'warning',
  live = 'success',
  started = 'primary',
  ended = 'default',
  canceled = 'danger',
}

const EventsRsvp = async () => {
  const user = await getCurrentUser()
  const events = await getEventsForDashboard(user.id)

  return (
    <div className="w-full p-4 flex justify-center">
      <div className="w-full">
        <h2 className="text-center font-bold text-xl">{`Latest Events`}</h2>
        <div className="rounded-md border border-stone-200 my-8 max-h-[300px] min-w-[350px] place-self-center">
          {events.map((event) => (
            <div
              key={event.id}
              className="border-b border-stone-200 p-2 flex gap-2 justify-between items-center"
            >
              <Link href={`/dashboard/events/${event.id}`}>
                <span>{event.name}</span>
              </Link>
              <span>
                <Chip
                  size="sm"
                  color={StatusColors[event.status] || StatusColors.ended}
                >
                  {event.status}
                </Chip>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EventsRsvp
