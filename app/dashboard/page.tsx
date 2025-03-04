import { getAttendeesCountForDashboard } from '@/utils/attendees'
import { getCurrentUser } from '@/utils/users'

const Home = async () => {
  const currentUser = await getCurrentUser()
  const count = await getAttendeesCountForDashboard(currentUser.id)
  return (
    <>
      <h2 className="font-bold m-2">Hello {currentUser.name}! </h2>
      <div id="attendees" className="place-self-center bg-stone-200">
        <div>
          <h4 className="text-lg">Attendees</h4>
          <h2 className="text-6xl font-semibold my-4 text-center">{count}</h2>
        </div>
      </div>
    </>
  )
}

export default Home
