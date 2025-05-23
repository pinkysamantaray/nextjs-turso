import 'server-only'
import { db } from '@/db/db'
import { attendees, events, rsvps } from '@/db/schema'
import memoize from 'memoize'
import { eq, sql } from 'drizzle-orm'
// import { delay } from './delay'

export const getAttendeesCountForDashboard = memoize(async (userId: string) => {
  // await delay()
  const counts = await db
    .select({
      totalAttendees: sql`count(distinct ${attendees.id})`.as<number>(),
    })
    .from(events)
    .leftJoin(rsvps, eq(rsvps.eventId, events.id))
    .leftJoin(attendees, eq(attendees.id, rsvps.attendeeId))
    .where(eq(events.createdById, userId))
    .groupBy(events.id)
    .execute()

  const total = counts.reduce((acc, count) => acc + count.totalAttendees, 0)
  return total
})

export const getGuestList = memoize(async (userId: string) => {
  // await delay()
  const uniqueAttendees = await db
    .selectDistinct({
      id: attendees.id,
      name: attendees.name,
      email: attendees.email,
    })
    .from(events)
    .leftJoin(rsvps, eq(rsvps.eventId, events.id))
    .leftJoin(attendees, eq(attendees.id, rsvps.attendeeId))
    .where(eq(events.createdById, userId))
    .execute()

  return uniqueAttendees
})
