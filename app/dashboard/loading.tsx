import { Spinner } from '@heroui/react'

const HomeLoader = () => {
  return (
    <Spinner
      classNames={{ label: 'text-blue-600' }}
      variant="wave"
      label="Loading..."
    />
  )
}

export default HomeLoader
