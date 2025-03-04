'use client'
import { addToast, Button } from '@heroui/react'

const Notification = () => {
  return (
    <Button
      variant="flat"
      onPress={() => {
        addToast({
          title: 'Toast Title',
          description: 'Toast Description',
          variant: 'solid',
          color: 'success',
        })
      }}
    >
      Show Notification
    </Button>
  )
}

export default Notification
