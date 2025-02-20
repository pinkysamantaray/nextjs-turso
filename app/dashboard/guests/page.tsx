import { getGuestList } from '@/utils/attendees'
import { getCurrentUser } from '@/utils/users'

const GuestsPage = async () => {
  const user = await getCurrentUser()
  const guests = await getGuestList(user.id)
  console.log(guests)

  return (
    <div>
      {guests.map((guest) => (
        <div key={guest.id} className="p-4 border-b border-gray-200">
          <div className="font-bold">{guest.name}</div>
          <div className="text-small">&lt;{guest.email}&gt;</div>
        </div>
      ))}
    </div>
  )
}

export default GuestsPage
