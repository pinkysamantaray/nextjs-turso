import { getAllEvents } from '@/utils/events'
import { getCurrentUser } from '@/utils/users'
import Link from 'next/link'
import { Card, CardBody, CardFooter } from '@heroui/react'

const Events = async () => {
  const user = await getCurrentUser()
  const events = await getAllEvents(user.id)

  console.log(events)
  return (
    <div className="p-4 grid grid-cols-1 gap-5">
      {events.map((event: any) => (
        <Card
          key={event.id}
          isFooterBlurred
          className="max-w-[240px] border-none"
          radius="lg"
        >
          <CardBody className="bg-default-200 text-center overflow-visible gap-5 p-3">
            <div className="flex gap-5">
              <Link href={`/dashboard/events/${event.id}`}>
                <b>{event.name}</b>
              </Link>
            </div>
          </CardBody>
          <CardFooter className="text-small justify-between gap-3">
            <p className="text-default-500">{event.description}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Events
