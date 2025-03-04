import { Spinner } from '@heroui/react'

const RsvpsLoader = () => {
  return (
    <Spinner
      classNames={{ label: 'text-blue-600' }}
      variant="wave"
      label="Loading..."
    />
  )
}

export default RsvpsLoader
