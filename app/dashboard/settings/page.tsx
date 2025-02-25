import { getCurrentUser } from '@/utils/users'

const SettingsPage = async () => {
  const user = await getCurrentUser()
  console.log(user)

  return (
    <div className="bg-dotted-paper p-6 h-full flex">
      <div className="box h-1/3 bg-white m-6 p-6">
        <h2 className="text-sky-600 underline mb-6">Settings</h2>
        <p>Hello there!</p>
        <p>{user?.email}</p>
      </div>
    </div>
  )
}

export default SettingsPage
