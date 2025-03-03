import { getOneEvent } from '@/utils/events'
import { getCurrentUser } from '@/utils/users'
import { redirect } from 'next/navigation'

const EventPage = async (props) => {
  const params = await props.params
  const user = await getCurrentUser()
  const event = await getOneEvent(user.id, params.id)

  if (!event) redirect('/dashboard/events')

  return (
    <div className="flex flex-col gap-5 p-5">
      <h3 className="font-bold text-lime-900">{event.name}</h3>
      <p>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus auctor dis
        ac torquent turpis diam. Non gravida suspendisse mi pharetra porta
        tempus. Volutpat fusce ex vehicula vulputate eget nec. Rhoncus
        vestibulum posuere hac erat phasellus. Lorem bibendum ipsum dapibus ex
        mollis.
      </p>
      <p>
        Curabitur fames sed massa nulla viverra sociosqu luctus. Morbi sodales
        massa nascetur placerat aptent ex. Consequat purus nascetur donec leo
        fermentum ornare parturient. Ligula litora viverra vehicula commodo ex
        ad aliquet. Sit pretium lacus dignissim sollicitudin tempus justo donec.
        Rhoncus habitasse dis molestie cubilia aliquam libero. Suspendisse ut
        scelerisque vivamus sapien vel aenean nostra penatibus.
      </p>
      <p>
        Cubilia metus curae habitasse hac aliquam curae. Orci ipsum tincidunt
        urna duis lobortis habitant. Mollis quisque erat fames fringilla
        parturient ut interdum. Etiam lobortis maecenas viverra ex augue
        bibendum laoreet. Nec fusce etiam augue justo, proin penatibus. Nibh
        quisque lectus pretium condimentum porttitor sollicitudin at eu.
        Condimentum vitae odio id lacus velit class hendrerit. Urna felis nisi
        tristique vehicula amet dis. Feugiat efficitur malesuada phasellus at
        non lacus.
      </p>
    </div>
  )
}

export default EventPage
