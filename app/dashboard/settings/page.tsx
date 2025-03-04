import Notification from '@/components/Notification'
import { getCurrentUser } from '@/utils/users'
import { User } from '@heroui/react'

const SettingsPage = async () => {
  const user = await getCurrentUser()

  return (
    <div className="bg-dotted-paper p-6 h-full">
      <div className="grid gap-3 bg-white m-6 p-6">
        <h2 className="text-sky-600 mb-6">Settings</h2>
        <p>Hello there!</p>
        <br />
        <p>Here are your settings:</p>

        <div className="flex justify-between">
          <User
            avatarProps={{
              src: 'https://avatars.githubusercontent.com/u/3692620?v=4',
            }}
            description={user?.email}
            name={user?.name}
          />
        </div>

        <div className="m-3 align-bottom">
          <Notification />
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
