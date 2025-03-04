'use client'

import { HeroUIProvider, ToastProvider } from '@heroui/react'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeroUIProvider>
      <ToastProvider placement="bottom-center" />
      {children}
    </HeroUIProvider>
  )
}

export default Providers
