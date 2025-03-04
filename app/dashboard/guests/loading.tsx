import { Spinner } from '@heroui/react'

const GuestLoader = () => {
  return (
    <Spinner
      classNames={{ label: 'text-blue-600' }}
      variant="wave"
      label="Loading..."
    />
  )
}
export default GuestLoader
