import { getAttendeesCountForDashboard } from '@/utils/attendees'
import { getCurrentUser } from '@/utils/users'

const Home = async () => {
  const user = await getCurrentUser()
  const count = await getAttendeesCountForDashboard(user.id)
  return (
    <div id="attendees" className="place-self-center bg-stone-200">
      <div>
        <h4 className="text-lg">Attendees</h4>
        <h2 className="text-6xl font-semibold my-4 text-center">{count}</h2>
      </div>
    </div>
  )
}

export default Home
