import 'server-only'
import { db } from '@/db/db'
import { and, asc, eq } from 'drizzle-orm'
import { events } from '@/db/schema'
import { delay } from './delay'
import memoize from 'memoize'

export const getEventsForDashboard = memoize(
  async (userId: string) => {
    // await delay()
    // throw new Error('System is down for maintenance')

    const data = await db.query.events.findMany({
      where: eq(events.createdById, userId),
      columns: {
        id: true,
        name: true,
        startOn: true,
        status: true,
      },
      with: {
        rsvps: true,
      },
      limit: 5,
      orderBy: [asc(events.startOn)],
    })

    return data ?? []
  },
  {
    persist: true,
    revalidateTags: () => ['dashboard:events'],
    suppressWarnings: true,
    log: ['datacache', 'verbose'],
    logid: 'dashboard:events',
  }
)

export const getAllEvents = memoize(
  async (userId: string) => {
    await delay()
    return db.query.events.findMany({
      where: eq(events.createdById, userId),
      orderBy: [asc(events.startOn)],
    })
  },
  {
    persist: true,
    revalidateTags: () => ['events'],
    suppressWarnings: true,
    logid: 'events',
  }
)

export const getOneEvent = memoize(
  async (userId: string, eventId: string) => {
    // await delay()
    return db.query.events.findFirst({
      where: and(eq(events.createdById, userId), eq(events.id, eventId)),
    })
  },
  {
    persist: true,
    revalidateTags: (userId, eventId) => ['event', eventId],
    suppressWarnings: true,
    logid: 'event',
  }
)
